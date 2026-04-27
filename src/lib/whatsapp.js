import axios from 'axios';

const EVOLUTION_URL = process.env.EVOLUTION_API_URL;
const EVOLUTION_KEY = process.env.EVOLUTION_API_KEY;
const INSTANCE = process.env.EVOLUTION_INSTANCE_NAME;

// ============================================
// CORE: Envio de WhatsApp com Retry
// ============================================

export async function sendWhatsAppMessage(phone, message, retries = 3) {
    let lastError;

    for (let attempt = 1; attempt <= retries; attempt++) {
        try {
            console.log(`📱 [WhatsApp] Tentativa ${attempt}/${retries}...`);
            console.log(`📱 [WhatsApp] Telefone: ${phone}`);

            // Formatar telefone
            const cleanPhone = phone.replace(/\D/g, '');
            const withCountryCode = cleanPhone.startsWith('55') ? cleanPhone : `55${cleanPhone}`;
            const formattedPhone = `${withCountryCode}@s.whatsapp.net`;

            console.log(`📱 [WhatsApp] Formatado: ${formattedPhone}`);

            const response = await axios.post(
                `${EVOLUTION_URL}/message/sendText/${INSTANCE}`,
                {
                    number: formattedPhone,
                    text: message
                },
                {
                    headers: {
                        'apikey': EVOLUTION_KEY,
                        'Content-Type': 'application/json'
                    },
                    timeout: 10000 // 10s timeout
                }
            );

            console.log('✅ [WhatsApp] Mensagem enviada com sucesso!');
            return response.data;

        } catch (error) {
            lastError = error;
            console.error(`❌ [WhatsApp] Tentativa ${attempt} falhou:`, error.response?.data || error.message);

            if (attempt < retries) {
                // Exponential backoff: 1s, 3s, 9s
                const delay = Math.pow(3, attempt - 1) * 1000;
                console.log(`⏳ [WhatsApp] Aguardando ${delay / 1000}s antes de tentar novamente...`);
                await new Promise(resolve => setTimeout(resolve, delay));
            }
        }
    }

    // Se chegou aqui, todas as tentativas falharam
    console.error(`❌ [WhatsApp] FALHA TOTAL após ${retries} tentativas`);
    throw lastError;
}

// ============================================
// UTILS: Google Calendar & vCard
// ============================================

function parseDate(dateStr) {
    // Suporta: "27/01/2026", "2026-01-27", "qua., 28/01 às 08:00"
    try {
        // Extrair DD/MM/YYYY ou DD/MM
        const match = dateStr.match(/(\d{2})\/(\d{2})(?:\/(\d{4}))?/);
        if (match) {
            const [_, day, month, year] = match;
            const fullYear = year || new Date().getFullYear();
            return `${fullYear}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`;
        }

        // Se já está em formato ISO
        if (dateStr.match(/^\d{4}-\d{2}-\d{2}$/)) {
            return dateStr;
        }

        // Fallback
        return new Date().toISOString().split('T')[0];
    } catch (e) {
        console.error('Erro ao parsear data:', e);
        return new Date().toISOString().split('T')[0];
    }
}

export function createGoogleCalendarLink(appointment) {
    const { patient_name, date, time, treatment, dentist_name } = appointment;

    const dateISO = parseDate(date);
    const [hours, minutes] = time.split(':');

    const startDateTime = `${dateISO}T${hours.padStart(2, '0')}:${minutes.padStart(2, '0')}:00`;
    const endHour = (parseInt(hours) + 1).toString().padStart(2, '0');
    const endDateTime = `${dateISO}T${endHour}:${minutes.padStart(2, '0')}:00`;

    const params = new URLSearchParams({
        action: 'TEMPLATE',
        text: `Consulta Odontológica - ${treatment}`,
        dates: `${startDateTime.replace(/[-:]/g, '')}/${endDateTime.replace(/[-:]/g, '')}`,
        details: `Tratamento: ${treatment}\nDentista: ${dentist_name || 'A definir'}\n\nClínica Inova\nAv. Amazonas 698, Betim - MG\nTelefone: (31) 2626-0038`,
        location: 'Clínica Inova, Av. Amazonas 698, Betim - MG',
        ctz: 'America/Sao_Paulo'
    });

    return `https://calendar.google.com/calendar/render?${params.toString()}`;
}

export function createVCardLink() {
    const vcard = `BEGIN:VCARD
VERSION:3.0
FN:Clínica Inova
ORG:Clínica Inova
TEL;TYPE=WORK,VOICE:+553126260038
ADR;TYPE=WORK:;;Av. Amazonas 698;Betim;MG;32510-000;Brasil
EMAIL:contato@clinicainova.com
URL:https://www.clinicainova.com
END:VCARD`;

    return `data:text/vcard;charset=utf-8,${encodeURIComponent(vcard)}`;
}

// ============================================
// MENSAGENS: Workflow Completo
// ============================================

// 1. AGENDAMENTO INICIAL (Secretária agenda)
export async function sendInitialBookingMessage(appointment) {
    const { patient_name, phone, date, time, treatment, dentist_name } = appointment;
    const calendarLink = createGoogleCalendarLink(appointment);

    const message = `🦷 *Clínica Inova* - Agendamento Realizado!

Olá *${patient_name}*! 👋

Seu horário foi reservado com sucesso! ✅

📋 *Detalhes da Consulta:*
• Tratamento: ${treatment}
• Data: ${date}
• Horário: ${time}
• Dentista: ${dentist_name || 'A definir'}

📍 *Endereço:*
Av. Amazonas 698, Betim - MG

📅 *Adicionar à sua agenda:*
${calendarLink}

💡 *Importante:*
Chegue 10 minutos antes do horário

📞 *Dúvidas?*
Ligue: (31) 2626-0038

Nos vemos em breve! 😊`;

    return await sendWhatsAppMessage(phone, message);
}

// 2. CONFIRMAÇÃO (Paciente confirma)
export async function sendAppointmentConfirmation(appointment) {
    const { patient_name, phone, date, time, treatment, dentist_name } = appointment;
    const calendarLink = createGoogleCalendarLink(appointment);

    const message = `🦷 *Clínica Inova* - Confirmado!

Olá *${patient_name}*!

Seu agendamento foi *confirmado* com sucesso! ✅

📋 *Detalhes:*
• Tratamento: ${treatment}
• Data: ${date}
• Horário: ${time}
• Dentista: ${dentist_name || 'A definir'}

📍 *Endereço:*
Av. Amazonas 698, Betim - MG

📅 *Adicionar à sua agenda:*
${calendarLink}

⏰ *Lembretes Automáticos:*
Você receberá:
• Um lembrete 1 dia antes
• Um lembrete 2 horas antes

💡 *Importante:*
Chegue 10 minutos antes do horário

📞 *Dúvidas?*
Ligue: (31) 2626-0038

Até breve! 😊`;

    return await sendWhatsAppMessage(phone, message);
}

// 3. LEMBRETE 24H ANTES
export async function sendDayBeforeReminder(appointment) {
    const { patient_name, phone, time, treatment, dentist_name } = appointment;

    const message = `🔔 *Lembrete* - Consulta Amanhã!

Olá *${patient_name}*!

Sua consulta é *AMANHÃ*! 📅

⏰ Horário: ${time}
🦷 Tratamento: ${treatment}
👨‍⚕️ Dentista: ${dentist_name}

📍 Av. Amazonas 698, Betim - MG

⚠️ *Não pode vir?*
Avise com antecedência!

Nos vemos amanhã! 😊`;

    return await sendWhatsAppMessage(phone, message);
}

// 4. LEMBRETE 2H ANTES
export async function sendTwoHoursBeforeReminder(appointment) {
    const { patient_name, phone, time, treatment } = appointment;

    const message = `⏰ *Sua consulta é HOJE!*

Olá *${patient_name}*!

Em 2 horas você tem consulta! 🦷

📋 ${treatment}
⏰ ${time}
📍 Av. Amazonas 698, Betim

Já está a caminho? 🚗

Até já! 😊`;

    return await sendWhatsAppMessage(phone, message);
}

// 5. PACIENTE NA RECEPÇÃO → Dentista
export async function sendDentistNotification(appointment, dentistPhone) {
    const { patient_name, time, treatment, observations } = appointment;

    const message = `🔔 *Paciente Aguardando!*

Paciente na recepção:

👤 *${patient_name}*
⏰ Horário: ${time}
🦷 Tratamento: ${treatment}

${observations ? `📝 *Observações:*\n${observations}\n` : ''}
Paciente aguardando! 👋`;

    return await sendWhatsAppMessage(dentistPhone, message);
}

// 6. PACIENTE FALTOU → Follow-up
export async function sendNoShowFollowup(appointment) {
    const { patient_name, phone, date, treatment } = appointment;

    const message = `😔 *Sentimos sua falta!*

Olá *${patient_name}*,

Notamos que você não compareceu à consulta de ${treatment} em ${date}.

Tudo bem? 

Gostaria de remarcar? Temos horários disponíveis:
• Segunda às 14h
• Quarta às 9h  
• Sexta às 10h

Responda este WhatsApp ou ligue:
📞 (31) 2626-0038

Estamos aqui para te ajudar! 🦷`;

    return await sendWhatsAppMessage(phone, message);
}

// 7. APÓS ATENDIMENTO → Pedir Avaliação
export async function sendReviewRequest(appointment) {
    const { patient_name, phone } = appointment;

    const googleReviewLink = 'https://g.page/r/YOUR_GOOGLE_PLACE_ID/review'; // Substituir com ID real

    const message = `⭐ *Como foi sua experiência?*

Olá *${patient_name}*!

Esperamos que tenha gostado do atendimento! 😊

Sua opinião é muito importante para nós!

📝 *Avalie-nos no Google:*
${googleReviewLink}

⭐⭐⭐⭐⭐

Obrigado pela confiança! 🦷`;

    return await sendWhatsAppMessage(phone, message);
}

// 8. NOTIFICAÇÃO ADMIN
export async function sendAdminNotification(appointment) {
    const adminPhone = process.env.ADMIN_PHONE || '5531992957555';
    const { patient_name, date, time, treatment, status } = appointment;

    const message = `🔔 *Novo Agendamento*

📋 *Detalhes:*
• Paciente: ${patient_name}
• Tratamento: ${treatment}
• Data: ${date} às ${time}
• Status: ${status}

Dashboard: ${process.env.NEXT_PUBLIC_APP_URL}/dashboard`;

    return await sendWhatsAppMessage(adminPhone, message);
}
