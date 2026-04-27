import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import { isImplantLead, handleImplantInquiry } from '@/lib/ai_assistant';
import { sendWhatsAppMessage } from '@/lib/whatsapp';

const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

// In-memory conversation storage (ideally use Redis or DB)
const conversations = new Map();
const processingAppointments = new Set(); // Track appointments being processed

async function sendResponse(phone, message) {
    try {
        await sendWhatsAppMessage(phone, message);
        console.log(`✅ [AI] Sent response to ${phone}`);
    } catch (error) {
        console.error(`❌ [AI] Failed to send to ${phone}:`, error);
    }
}

async function handleWebhook(body) {
    console.log('📥 [Webhook] Received:', JSON.stringify(body, null, 2));

    const event = body.event;
    const messageData = body.data;

    // Only process incoming messages (not sent by us)
    if (event === 'messages.upsert' && messageData?.message?.conversation && !messageData.key.fromMe) {
        const incomingMessage = messageData.message.conversation;
        const senderPhone = messageData.key.remoteJid?.replace('@s.whatsapp.net', '');
        const senderName = messageData.pushName || 'Cliente';

        console.log(`📱 [Webhook] Message from ${senderName} (${senderPhone}): "${incomingMessage}"`);

        // Check if Clara is enabled (use global state)
        const claraEnabled = global.claraEnabled ?? true;
        console.log(`🤖 [Clara] Status check: ${claraEnabled ? 'ATIVA ✅' : 'DESATIVADA ⚠️'}`);

        if (!claraEnabled) {
            console.log('🤖 [Clara] DESATIVADA - Ignorando mensagem');
            return { success: true, clara_disabled: true };
        }

        // Get conversation history
        const conversationHistory = conversations.get(senderPhone) || [];
        const hasActiveConversation = conversationHistory.length > 0;

        // Check if this is an implant lead OR if conversation already started
        if (isImplantLead(incomingMessage) || hasActiveConversation) {
            console.log(hasActiveConversation ? '💬 [AI] Continuing conversation!' : '🦷 [AI] Detected implant inquiry!');

            // Get AI response
            const { response, shouldSchedule, appointmentData, conversationHistory: updatedHistory } =
                await handleImplantInquiry(incomingMessage, senderName, senderPhone, conversationHistory);

            // Update conversation history
            conversations.set(senderPhone, updatedHistory);

            // Send AI response
            await sendResponse(senderPhone, response);

            // If Clara collected all appointment data, create real appointment
            if (appointmentData) {
                // Check if already processing this appointment (prevent duplicates)
                const appointmentKey = `${senderPhone}-${appointmentData.date}-${appointmentData.time}`;
                if (processingAppointments.has(appointmentKey)) {
                    console.log('⚠️ [AI] Already processing this appointment, skipping...');
                    return { success: true, ai_handled: true };
                }

                processingAppointments.add(appointmentKey);

                try {
                    console.log('📅 [AI] Creating real appointment with data:', appointmentData);

                    // Check for existing appointments at this time (conflict check)
                    const { data: existingAppointments } = await supabase
                        .from('appointments')
                        .select('id, patient_name, dentist_id')
                        .eq('date', appointmentData.date)
                        .eq('time', appointmentData.time)
                        .neq('status', 'Cancelado');

                    if (existingAppointments && existingAppointments.length > 0) {
                        console.log('⚠️ [AI] Conflict detected, checking availability...');
                    }

                    // Check availability
                    const availabilityCheck = await fetch(
                        `${process.env.NEXT_PUBLIC_SUPABASE_URL?.replace('/rest/v1', '')}/api/availability/check?date=${appointmentData.date}&time=${appointmentData.time}`,
                        { headers: { 'Content-Type': 'application/json' } }
                    ).then(res => res.json()).catch(() => ({ available: false, dentists: [] }));

                    if (!availabilityCheck.available || !availabilityCheck.dentists || availabilityCheck.dentists.length === 0) {
                        console.log('❌ [AI] No dentists available for this time');
                        await sendResponse(senderPhone,
                            `Desculpe, não temos disponibilidade para ${appointmentData.day_of_week}-feira às ${appointmentData.time}. Temos vagas às 8h, 10h ou 14h. Qual prefere? 😊`
                        );
                        processingAppointments.delete(appointmentKey);
                        return { success: true, ai_handled: true };
                    }

                    // Get first available dentist (prefer Dr. Lucas for implants)
                    const availableDentists = availabilityCheck.dentists;
                    const drLucas = availableDentists.find(d => d.name.toLowerCase().includes('lucas'));
                    const selectedDentist = drLucas || availableDentists[0];

                    console.log(`✅ [AI] Found available dentist: ${selectedDentist.name}`);

                    // Create appointment in database
                    const { data: newAppointment, error } = await supabase
                        .from('appointments')
                        .insert([{
                            patient_name: appointmentData.patient_name,
                            phone: appointmentData.phone,
                            date: appointmentData.date,
                            time: appointmentData.time,
                            treatment: 'Implantes',
                            dentist_id: selectedDentist.id,
                            status: 'Confirmado',
                            notes: `[AI Bot Clara] Agendado via WhatsApp em ${new Date().toLocaleString('pt-BR')}\nDia solicitado: ${appointmentData.day_of_week}\nProfissional: ${selectedDentist.name}`
                        }])
                        .select();

                    if (error) {
                        console.error('❌ [AI] Error creating appointment:', error);
                        await sendResponse(senderPhone,
                            'Desculpe, tivemos um problema ao criar seu agendamento. Por favor, ligue para (31) 2626-0038 que nossa equipe te atenderá! 😊'
                        );
                    } else {
                        console.log('✅ [AI] Appointment created successfully:', newAppointment);

                        // Clear conversation history after successful booking
                        conversations.delete(senderPhone);
                    }
                } finally {
                    // Remove from processing set
                    processingAppointments.delete(appointmentKey);
                }
            }

            return { success: true, ai_handled: true };
        }

        // Handle other types of messages (recovery, etc.)
        const wantsToReschedule = /\b(sim|quero|remarcar|agendar|pode|vamos|ok)\b/i.test(incomingMessage);

        if (wantsToReschedule) {
            const { data: appointments } = await supabase
                .from('appointments')
                .select('*')
                .eq('phone', senderPhone)
                .eq('status', 'Não Compareceu')
                .order('created_at', { ascending: false })
                .limit(1);

            if (appointments && appointments.length > 0) {
                const appt = appointments[0];

                await supabase
                    .from('appointments')
                    .update({
                        status: 'Pendente',
                        notes: (appt.notes || '') + `\n[${new Date().toLocaleString('pt-BR')}] Paciente respondeu querendo remarcar via WhatsApp.`
                    })
                    .eq('id', appt.id);

                console.log(`✅ [Webhook] Marcado para reagendamento: ${appt.patient_name}`);
            }
        }
    }

    return { success: true, received: true };
}

export async function POST(request) {
    try {
        const body = await request.json();
        const result = await handleWebhook(body);
        return NextResponse.json(result);
    } catch (error) {
        console.error('❌ [Webhook] Error:', error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}

export async function GET() {
    return NextResponse.json({
        status: 'AI Assistant Webhook Active',
        timestamp: new Date().toISOString(),
        conversations: conversations.size
    });
}
