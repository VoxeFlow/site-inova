import { NextResponse } from 'next/server';

const OPENAI_URL = 'https://api.openai.com/v1/chat/completions';
const MODEL = process.env.OPENAI_MODEL || 'gpt-4o-mini';

const CLINIC_CONTEXT = `
Você é Clara, a assistente virtual da Clínica Inova, clínica odontológica particular em Betim-MG.

Diretrizes de tom:
- Fale em português-BR.
- Seja acolhedora, objetiva e elegante.
- Evite soar robótica, infantil ou apelativa.
- Não use mais de 1 emoji por mensagem e só quando fizer sentido.
- Responda em blocos curtos, fáceis de ler no chat.
- Nunca invente valores fechados para casos complexos.

Informações da clínica:
- Nome: Clínica Inova
- Cidade: Betim - MG
- Endereço: Av. Amazonas, 698 - Centro, Betim - MG
- Telefone: (31) 2626-0038
- WhatsApp: (31) 2626-0038
- Horário: Segunda a sexta, de 8h às 18h

Especialidades centrais:
- Implante dentário
- Alinhadores invisíveis
- Invisalign
- Clareamento dental
- Clínica geral

Regras comerciais:
- Quando perguntarem sobre preço, primeiro ofereça contexto: o valor depende do caso, da marca, do planejamento e da quantidade de etapas.
- Em implante unitário, você pode dizer que a leitura inicial costuma partir de R$ 1.800, sem prometer valor final.
- Convide para avaliação ou conversa com a clínica apenas quando isso fizer sentido no fluxo.
- Não empurre WhatsApp cedo demais.
- Se a pessoa ainda estiver explorando, continue ajudando com clareza.

Seu papel:
- Orientar.
- Qualificar de forma sutil.
- Organizar o próximo passo sem pressão.
`;

function buildSystemPrompt(context) {
    const topicContext = {
        implante:
            'O visitante demonstra interesse em implante dentário. Priorize segurança, planejamento, marca do implante, tempo sem o dente e leitura inicial de investimento.',
        invisalign:
            'O visitante demonstra interesse em Invisalign. Priorize discrição, previsibilidade, tecnologia e tempo de tratamento.',
        geral:
            'O visitante demonstra interesse em clínica geral. Priorize acolhimento, confiança e organização do cuidado.',
        estetica:
            'O visitante demonstra interesse em estética dental. Priorize naturalidade, previsibilidade e conforto.',
        atm:
            'O visitante demonstra interesse em ATM. Priorize escuta, sintomas e segurança clínica.',
    };

    return `${CLINIC_CONTEXT}\n\nContexto atual: ${topicContext[context] || 'Atendimento geral.'}`;
}

export async function POST(req) {
    try {
        const { messages = [], context } = await req.json();

        if (!process.env.OPENAI_API_KEY) {
            return NextResponse.json(
                {
                    message:
                        'A Clara está temporariamente em atualização. Se quiser, posso continuar te orientando assim que a integração for concluída.',
                },
                { status: 503 },
            );
        }

        const conversation = messages
            .slice(-8)
            .map((message) => ({
                role: message.role === 'assistant' ? 'assistant' : 'user',
                content: message.content,
            }));

        const response = await fetch(OPENAI_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
            },
            body: JSON.stringify({
                model: MODEL,
                temperature: 0.7,
                messages: [
                    {
                        role: 'system',
                        content: buildSystemPrompt(context),
                    },
                    ...conversation,
                ],
            }),
        });

        const data = await response.json();

        if (!response.ok) {
            console.error('Chat OpenAI Error:', response.status, data);
            return NextResponse.json(
                {
                    message:
                        'A Clara está indisponível neste momento. Se preferir, a equipe da clínica pode continuar seu atendimento pelo WhatsApp.',
                },
                { status: 503 },
            );
        }

        const content = data?.choices?.[0]?.message?.content;

        if (!content) {
            console.error('Chat OpenAI Empty Response:', data);
            return NextResponse.json(
                {
                    message:
                        'A Clara não conseguiu concluir essa resposta agora. Se quiser, você pode tentar novamente em instantes.',
                },
                { status: 502 },
            );
        }

        return NextResponse.json({ message: content });
    } catch (error) {
        console.error('Chat Error:', error);
        return NextResponse.json(
            {
                message:
                    'A Clara está temporariamente indisponível. Se preferir, a clínica pode seguir com você pelo WhatsApp.',
            },
            { status: 500 },
        );
    }
}
