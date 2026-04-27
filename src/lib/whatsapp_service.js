import { WA_TEMPLATES } from '@/utils/whatsapp_templates';

const EVOLUTION_API_URL = 'http://localhost:8080';
const EVOLUTION_API_KEY = 'E33405C7C332-4753-9004-98485297B343';
const ADMIN_PHONE = '55319992957555'; // Atualize se necessário

// Função Genérica de Envio
async function sendRawWhatsApp(number, text) {
    try {
        if (!number) {
            console.error('❌ [WhatsApp] Número não fornecido.');
            return false;
        }

        // Limpeza e Formatação do Número
        const formattedNumber = number.toString().replace(/\D/g, '');
        const finalNumber = formattedNumber.startsWith('55') ? formattedNumber : `55${formattedNumber}`;

        console.log(`🚀 [WhatsApp] Enviando para ${finalNumber}...`);

        const response = await fetch(`${EVOLUTION_API_URL}/message/sendText/inova`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'apikey': EVOLUTION_API_KEY
            },
            body: JSON.stringify({
                number: finalNumber,
                options: {
                    delay: 1200,
                    presence: "composing",
                    linkPreview: false
                },
                textMessage: {
                    text: text
                }
            })
        });

        const respData = await response.json();
        console.log('✅ [WhatsApp] Sucesso:', respData);
        return true;
    } catch (error) {
        console.error('⚠️ [WhatsApp] Erro no envio:', error);
        return false;
    }
}

// --- Funções Específicas de Negócio ---

// 1. Notificar Admin (Novo Agendamento)
export async function sendAdminNotification(appt) {
    const text = `🔔 *Novo Agendamento (Pendente)*\n\n` +
        `👤 Paciente: ${appt.patient_name}\n` +
        `📱 Tel: ${appt.phone}\n` +
        `🦷 Tratamento: ${appt.treatment}\n` +
        `📅 Data: ${appt.date} às ${appt.time}\n` +
        `⚠️ *Acesse o painel para confirmar!*`;

    return sendRawWhatsApp(ADMIN_PHONE, text);
}

// 2. Confirmar ao Paciente (Manualmente)
export async function sendPatientConfirmation(appt) {
    // Usando template específico ou genérico de confirmação
    const text = `🦷 *Confirmação de Agendamento - Inova*\n\n` +
        `Olá ${appt.patient_name.split(' ')[0]}! Tudo confirmado. ✅\n\n` +
        `📅 *${appt.date}* às *${appt.time}*\n` +
        `👨‍⚕️ Dr(a). ${appt.dentist_name || 'Especialista'}\n` +
        `📍 *Endereço:* Av. Amazonas 698, Betim - MG\n\n` +
        `Te aguardamos! Qualquer dúvida, estamos por aqui.`;

    return sendRawWhatsApp(appt.phone, text);
}

// 3. Automação (Review, Recuperação, Lembretes)
export async function sendAutomationMessage(type, appt) {
    let text = '';
    const firstName = appt.patient_name.split(' ')[0];

    switch (type) {
        case 'review':
            text = WA_TEMPLATES.REVIEW_REQUEST(firstName);
            break;
        case 'recovery':
            text = WA_TEMPLATES.RECOVERY_MISSED(firstName);
            break;
        case 'reminder_24h':
            text = WA_TEMPLATES.CONFIRMATION_24H(firstName, appt.date, appt.time, appt.dentist_name);
            break;
        case 'reminder_2h':
            text = WA_TEMPLATES.REMINDER_2H(firstName, appt.time);
            break;
        default:
            console.warn('Tipo de mensagem desconhecido:', type);
            return false;
    }

    if (text) return sendRawWhatsApp(appt.phone, text);
    return false;
}
