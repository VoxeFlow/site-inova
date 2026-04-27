import OpenAI from 'openai';

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
});

const IMPLANT_SYSTEM_PROMPT = `Você é Clara, uma assistente virtual inteligente da Clínica Inova, especializada em Implantes Dentários.

INFORMAÇÕES DA CLÍNICA:
- Nome: Clínica Inova
- Especialidade: Implantodontia de alta qualidade
- Localização: Av. Amazonas 698, Betim - MG
- Telefone: (31) 2626-0038
- Horário: Segunda a Sexta, 8h às 18h

SOBRE IMPLANTES:
- Implantes **Neodent** - as melhores marcas do mercado
- Técnica minimamente invasiva
- Recuperação rápida (3-6 meses)
- **Garantia de 1 ano**
- Valores: A partir de R$ 1.800 por implante
- **Avaliação GRATUITA e sem compromisso**
- Parcelamento em até 12x sem juros

PROFISSIONAIS ESPECIALISTAS:
- **Dr. Lucas Vilela**: Implantodontista, Professor de Implante na Faculdade Ciências Médicas
- **Dr. Arthur**: Implantodontista especialista

SUA PERSONALIDADE (Clara):
- Empática e acolhedora
- Profissional mas amigável
- Cria conexão genuína
- Nunca insistente ou vendedora
- Faz o paciente se sentir compreendido

SUA MISSÃO:
1. **PRIMEIRA MENSAGEM - SEMPRE**: "Olá! Meu nome é Clara, sou uma IA da Clínica Inova. Estou aqui para agilizar seu atendimento, ok? 😊\n\nComo você se chama?"
2. **Após saber o nome**: Usar o nome do paciente e fazer perguntas que mostram interesse genuíno
3. **Qualificar o lead**: Entender necessidade, urgência, dor emocional
4. **Plantar a semente**: Mencionar a avaliação gratuita de forma natural
5. **Deixar o cliente decidir**: Nunca forçar, apenas facilitar
6. **Agendar com profissional**: Quando cliente aceitar, perguntar preferência de dia/horário

TÉCNICAS DE PERSUASÃO SUTIL:
- Use perguntas abertas que fazem o cliente refletir sobre o problema
- Mencione benefícios emocionais (autoestima, sorriso, confiança)
- Normalize a situação ("Muitos pacientes passam por isso...")
- Ofereça a avaliação como "próximo passo natural", não como venda
- **Use escassez suave**: "Temos poucas vagas disponíveis esta semana..."
- Mencione os especialistas: "Nossos implantodontistas Dr. Lucas e Dr. Arthur são referência na região"

FLUXO IDEAL DA CONVERSA:
1. Apresentação + Pergunta envolvente
2. Escuta ativa + Validação emocional
3. Informação relevante + Benefício emocional
4. Oferta natural da avaliação gratuita
5. **Sugerir horários específicos com escassez**: "Temos vagas quinta às 9h ou 14h"
6. Coleta de dados (nome completo e telefone)

REGRAS:
- Máximo 2-3 linhas por mensagem (seja concisa!)
- Use apenas 1 emoji por mensagem
- Pergunte UMA coisa de cada vez
- Nunca diga "posso te ajudar?" (muito genérico)
- Sempre valide a emoção antes de informar
- **Quando cliente aceitar agendar, SUGIRA horários específicos com escassez**
- Depois colete: nome completo e telefone
- **NUNCA confirme agendamento antes de ter TODOS os dados: nome, telefone, dia E horário**

EXEMPLO DE CONVERSA ESTRATÉGICA:

Paciente: "Gostaria de saber mais sobre implante"
Clara: "Olá! Meu nome é Clara, sou uma IA da Clínica Inova. Estou aqui para agilizar seu atendimento, ok? 😊 Me conta, há quanto tempo você perdeu esse dente?"

Paciente: "Faz uns 2 anos"
Clara: "Entendo... Imagino que isso deve incomodar bastante, né? Muitos pacientes relatam que afeta até a autoestima. Você sente falta de sorrir à vontade?"

Paciente: "Sim, evito sorrir em fotos"
Clara: "Te entendo perfeitamente. A boa notícia é que com implantes Neodent você volta a sorrir sem medo! 😊 Nossos especialistas Dr. Lucas e Dr. Arthur são referência. Temos avaliação gratuita. Que tal agendar?"

Paciente: "Sim, quero agendar"
Clara: "Ótimo! Temos poucas vagas disponíveis esta semana. Quinta-feira às 9h ou 14h. Qual prefere?"

Paciente: "9h"
Clara: "Perfeito! Para confirmar quinta às 9h, preciso do seu nome completo e telefone."

Paciente: "João Silva, 31 99999-9999"
Clara: "Obrigada, João! Seu agendamento está confirmado para quinta-feira às 9h. 😊"

LEMBRE-SE: Seu objetivo NÃO é vender implante. É fazer o paciente QUERER agendar a avaliação porque ELE percebeu que precisa.`;


export async function handleImplantInquiry(message, senderName, senderPhone, conversationHistory = []) {
    try {
        // Build conversation context
        const messages = [
            { role: 'system', content: IMPLANT_SYSTEM_PROMPT },
            ...conversationHistory,
            { role: 'user', content: message }
        ];

        const response = await openai.chat.completions.create({
            model: 'gpt-4o-mini',
            messages: messages,
            temperature: 0.7,
            max_tokens: 150
        });

        const aiResponse = response.choices[0].message.content;

        // Check if AI is trying to schedule
        const wantsToSchedule = /agendar|marcar|consulta|avaliação/i.test(message.toLowerCase());

        // Extract appointment details from conversation
        const appointmentData = extractAppointmentData(conversationHistory, message, senderName, senderPhone);

        return {
            response: aiResponse,
            shouldSchedule: wantsToSchedule,
            appointmentData: appointmentData,
            conversationHistory: [...conversationHistory,
            { role: 'user', content: message },
            { role: 'assistant', content: aiResponse }
            ]
        };
    } catch (error) {
        console.error('OpenAI Error:', error);
        return {
            response: 'Desculpe, estou com dificuldades técnicas. Por favor, ligue para (31) 2626-0038 que nossa equipe te atenderá! 😊',
            shouldSchedule: false,
            appointmentData: null,
            conversationHistory
        };
    }
}

function extractAppointmentData(conversationHistory, currentMessage, senderName, senderPhone) {
    // Combine all messages to analyze
    const allMessages = [...conversationHistory.map(m => m.content), currentMessage].join(' ');

    // Extract day of week
    const dayMatch = allMessages.match(/\b(segunda|terça|terca|quarta|quinta|sexta|sábado|sabado|domingo)[-\s]?feira?\b/i);
    const day = dayMatch ? dayMatch[1].toLowerCase() : null;

    // Extract time - IMPROVED: prioritize current message, handle various formats
    let timeMatch = currentMessage.match(/\b(\d{1,2}):?(\d{2})?\s*(h|horas?)?\b/i);
    if (!timeMatch) {
        timeMatch = allMessages.match(/\b(\d{1,2}):?(\d{2})?\s*(h|horas?)?\b/i);
    }

    let time = null;
    if (timeMatch) {
        const hours = timeMatch[1].padStart(2, '0');
        const minutes = timeMatch[2] || '00';
        time = `${hours}:${minutes.padStart(2, '0')}`;
    }

    // Extract patient name (look for full name pattern)
    const nameMatch = currentMessage.match(/^([A-ZÀ-Ú][a-zà-ú]+(?:\s+[A-ZÀ-Ú][a-zà-ú]+)+)\s*$/m) ||
        currentMessage.match(/nome[:\s]+([A-ZÀ-Ú][a-zà-ú]+(?:\s+[A-ZÀ-Ú][a-zà-ú]+)+)/i);
    const patientName = nameMatch ? nameMatch[1].trim() : senderName;

    // Extract phone - improved to handle various formats
    const phoneMatch = currentMessage.match(/\b(\d{10,11})\b/) ||
        currentMessage.match(/\b(\d{2})\s*(\d{4,5})[-\s]?(\d{4})\b/);
    let phone = senderPhone;
    if (phoneMatch) {
        if (phoneMatch[1] && phoneMatch[1].length >= 10) {
            phone = phoneMatch[1];
        } else if (phoneMatch[2] && phoneMatch[3]) {
            phone = phoneMatch[1] + phoneMatch[2] + phoneMatch[3];
        }
    }

    // Calculate date from day of week
    let appointmentDate = null;
    if (day && time) {
        const dayMap = {
            'segunda': 1, 'terca': 2, 'terça': 2, 'quarta': 3,
            'quinta': 4, 'sexta': 5, 'sabado': 6, 'sábado': 6, 'domingo': 0
        };

        const targetDay = dayMap[day];
        const today = new Date();
        const currentDay = today.getDay();

        let daysUntil = targetDay - currentDay;
        if (daysUntil <= 0) daysUntil += 7; // Next week if day already passed

        const appointmentDateObj = new Date(today);
        appointmentDateObj.setDate(today.getDate() + daysUntil);

        appointmentDate = appointmentDateObj.toLocaleDateString('pt-BR');
    }

    // Check if we have all required data
    const hasAllData = patientName && phone && appointmentDate && time;

    console.log('📊 [Extract] Data extracted:', { patientName, phone, day, time, appointmentDate, hasAllData });

    return hasAllData ? {
        patient_name: patientName,
        phone: phone,
        date: appointmentDate,
        time: time,
        day_of_week: day
    } : null;
}

export function isImplantLead(message) {
    const implantKeywords = [
        'implante dentário',
        'implante dental',
        'gostaria de saber mais sobre implante',
        'quero agendar.*implante',
        'informações sobre implante',
        'quanto custa implante',
        'preço.*implante'
    ];

    const messageText = message.toLowerCase();
    return implantKeywords.some(keyword => {
        const regex = new RegExp(keyword, 'i');
        return regex.test(messageText);
    });
}
