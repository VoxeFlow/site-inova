// Função para criar link do Google Calendar
export function createGoogleCalendarLink(appointment) {
    const { patient_name, date, time, treatment, dentist_name } = appointment;

    // Converter data brasileira (DD/MM/YYYY) para formato ISO
    let dateISO;
    try {
        if (date.includes('/')) {
            const [day, month, year] = date.split('/');
            dateISO = `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`;
        } else {
            dateISO = date;
        }
    } catch (e) {
        console.error('Erro ao converter data:', e);
        dateISO = new Date().toISOString().split('T')[0];
    }

    // Criar horários de início e fim
    const [hours, minutes] = time.split(':');
    const startDateTime = `${dateISO}T${hours.padStart(2, '0')}:${minutes.padStart(2, '0')}:00`;

    // Adicionar 1 hora para o fim
    const endHour = (parseInt(hours) + 1).toString().padStart(2, '0');
    const endDateTime = `${dateISO}T${endHour}:${minutes.padStart(2, '0')}:00`;

    // Criar URL do Google Calendar
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

// Mensagem de agendamento inicial (quando secretária agenda)
export async function sendInitialBookingMessage(appointment) {
    const { patient_name, phone, date, time, treatment, dentist_name } = appointment;

    const googleCalendarLink = createGoogleCalendarLink(appointment);

    const message = `🦷 *Clínica Inova* - Agendamento Confirmado!

Olá ${patient_name}! 👋

Seu agendamento foi realizado com sucesso! ✅

📋 *Detalhes da Consulta:*
• Tratamento: ${treatment}
• Data: ${date}
• Horário: ${time}
• Dentista: ${dentist_name || 'A definir'}

📍 *Endereço:*
Av. Amazonas 698, Betim - MG

📅 *Adicionar à sua agenda:*
${googleCalendarLink}

📞 *Dúvidas?*
Ligue: (31) 2626-0038

Nos vemos em breve! 😊`;

    return await sendWhatsAppMessage(phone, message);
}

export async function sendWhatsAppMessage(phone, message) {
    try {
        const cleanPhone = phone.replace(/\D/g, '');

        const response = await fetch(`${process.env.EVOLUTION_API_URL}/message/sendText/${process.env.EVOLUTION_INSTANCE_NAME}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'apikey': process.env.EVOLUTION_API_KEY
            },
            body: JSON.stringify({
                number: cleanPhone,
                text: message
            })
        });

        if (!response.ok) {
            const error = await response.text();
            console.error('❌ [WhatsApp] Erro ao enviar:', error);
            throw new Error(`WhatsApp API error: ${response.status}`);
        }

        const data = await response.json();
        console.log('✅ [WhatsApp] Mensagem enviada com sucesso');
        return data;
    } catch (error) {
        console.error('❌ [WhatsApp] Erro:', error);
        throw error;
    }
}
