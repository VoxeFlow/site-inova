import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import { sendAppointmentConfirmation, sendAdminNotification } from '@/lib/whatsapp';

const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

export async function GET() {
    const { data, error } = await supabase
        .from('appointments')
        .select('*')
        .order('date', { ascending: true });

    if (error) return NextResponse.json({ error: error.message }, { status: 500 });
    return NextResponse.json(data);
}

export async function POST(request) {
    try {
        const body = await request.json();
        const { phone, date, time, patient_name } = body;

        // Validação básica
        if (!patient_name || !phone || !date || !time) {
            return NextResponse.json({
                error: 'Dados incompletos: nome, telefone, data e horário são obrigatórios'
            }, { status: 400 });
        }

        // NOVO: Verificar se já existe agendamento para este paciente neste horário
        const { data: existing, error: checkError } = await supabase
            .from('appointments')
            .select('id, patient_name, date, time, status')
            .eq('phone', phone)
            .eq('date', date)
            .eq('time', time)
            .neq('status', 'Cancelado')
            .maybeSingle();

        if (existing) {
            console.log(`⚠️ [Appointments] Agendamento duplicado detectado: ${existing.patient_name} em ${existing.date} ${existing.time}`);
            return NextResponse.json({
                error: `Já existe um agendamento para ${existing.patient_name} em ${existing.date} às ${existing.time}`,
                existing: existing
            }, { status: 409 }); // 409 Conflict
        }

        // 1. Salvar no Banco
        const { data, error } = await supabase
            .from('appointments')
            .insert([body])
            .select()
            .single();

        if (error) {
            // Se erro for de constraint UNIQUE, retornar mensagem amigável
            if (error.code === '23505') {
                return NextResponse.json({
                    error: 'Já existe um agendamento para este horário'
                }, { status: 409 });
            }
            throw error;
        }

        console.log(`✅ [Appointments] Novo agendamento criado: ${data.patient_name} em ${data.date} ${data.time}`);

        // 2. Enviar WhatsApp conforme status
        if (data.status === 'Agendado') {
            // Secretária agendou - Envia mensagem com link do Google Calendar
            console.log('📱 [Appointments] Status Agendado - Enviando WhatsApp com link do calendário...');
            sendInitialBookingMessage(data).catch(e => {
                console.error('❌ Erro ao enviar WhatsApp inicial:', e);
                // Continua mesmo se WhatsApp falhar
            });
        } else if (data.status === 'Confirmado') {
            // Paciente confirmou - Envia confirmação
            console.log('📱 [Appointments] Status Confirmado - Enviando WhatsApp de confirmação...');
            sendAppointmentConfirmation(data).catch(e => {
                console.error('❌ Erro ao enviar confirmação:', e);
            });
        }

        // 3. Notificar Admin (SEMPRE)
        console.log('🔔 Notificando Admin sobre novo agendamento...');
        sendAdminNotification(data).catch(e => console.error('❌ Erro ao notificar admin:', e));

        return NextResponse.json(data, { status: 201 });
    } catch (error) {
        console.error('POST Error:', error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}

export async function PUT(request) {
    try {
        const body = await request.json();
        const { id, send_confirmation, send_review, send_recovery, ...updates } = body;

        console.log(`🔄 API PUT: Atualizando ID ${id} -> Status: ${updates.status}`);

        // 1. Atualizar no Banco
        const { data: updatedData, error } = await supabase
            .from('appointments')
            .update(updates)
            .eq('id', id)
            .select()
            .single();

        if (error) throw error;

        // 2. Enviar WhatsApp conforme flags
        if (send_confirmation || updates.status === 'Confirmado') {
            console.log('✅ Enviando Confirmação ao Paciente...');
            sendAppointmentConfirmation(updatedData).catch(e => console.error('Erro Confirmation Msg:', e));
        }

        if (send_review) {
            console.log('⭐ Enviando Pedido de Avaliação...');
            const { sendReviewRequest } = await import('@/lib/whatsapp');
            sendReviewRequest(updatedData).catch(e => console.error('Erro Review Msg:', e));
        }

        if (send_recovery) {
            console.log('🔄 Enviando Mensagem de Recuperação...');
            const { sendRecoveryMessage } = await import('@/lib/whatsapp');
            sendRecoveryMessage(updatedData).catch(e => console.error('Erro Recovery Msg:', e));
        }

        return NextResponse.json(updatedData);
    } catch (error) {
        console.error('PUT Error:', error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}

export async function DELETE(request) {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    const { error } = await supabase
        .from('appointments')
        .delete()
        .eq('id', id);

    if (error) return NextResponse.json({ error: error.message }, { status: 500 });
    return NextResponse.json({ success: true });
}
