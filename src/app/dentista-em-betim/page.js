import SeoPageLayout from '@/components/SeoPageLayout';
import { getPostsBySlugs } from '@/lib/blog';
import { dentistBetimFaqs } from '@/lib/faqs';
import {
    buildBreadcrumbSchema,
    buildDentistSchema,
    buildFaqSchema,
    buildMetadata,
    buildServiceSchema,
} from '@/lib/seo';

export const metadata = buildMetadata({
    title: 'Dentista em Betim: Clínica Odontológica Particular no Centro | Clínica Inova',
    description:
        'Dentista em Betim com foco em odontologia particular no Centro, implantes, alinhadores invisíveis, clareamento e atendimento com mais critério clínico.',
    path: '/dentista-em-betim',
    keywords: [
        'dentista em betim',
        'dentista betim',
        'clinica odontologica betim',
        'dentista particular betim',
    ],
});

export default function DentistaEmBetimPage() {
    const breadcrumb = [
        { label: 'Início', href: '/inicio' },
        { label: 'Dentista em Betim', href: '/dentista-em-betim' },
    ];

    return (
        <SeoPageLayout
            schema={[
                buildDentistSchema(),
                buildServiceSchema({
                    name: 'Dentista em Betim',
                    description:
                        'Página institucional local da Clínica Inova para quem procura dentista em Betim com mais previsibilidade e atendimento particular.',
                    path: '/dentista-em-betim',
                }),
                buildFaqSchema(dentistBetimFaqs),
                buildBreadcrumbSchema([
                    { name: 'Início', path: '/inicio' },
                    { name: 'Dentista em Betim', path: '/dentista-em-betim' },
                ]),
            ]}
            breadcrumb={breadcrumb}
            eyebrow="Dentista em Betim"
            title="Dentista em Betim: confiança, localização, estrutura e critério clínico na mesma decisão."
            description="Quem procura dentista em Betim normalmente quer juntar localização, confiança, preço, urgência, estrutura e segurança. A Clínica Inova atende no Centro de Betim com foco em odontologia particular, planejamento individual e tratamentos como implante dentário, alinhadores invisíveis e clareamento."
            bulletPoints={[
                'Clínica odontológica particular no Centro de Betim',
                'Atendimento particular com foco em previsibilidade',
                'Implantes, alinhadores invisíveis, clareamento, clínica geral e avaliação',
            ]}
            sections={[
                {
                    eyebrow: 'Por que essa busca existe',
                    title: 'Quem procura dentista em Betim quase nunca quer só proximidade.',
                    copy: 'Na maioria das vezes, a busca mistura localização, confiança, urgência, preço, especialidades e medo de errar. Por isso, uma clínica odontológica em Betim precisa transmitir estrutura, clareza e segurança já na primeira leitura.',
                    items: [
                        'Dentista perto de mim em Betim',
                        'Clínica odontológica no Centro de Betim',
                        'Dentista particular em Betim',
                        'Dentista para implante, alinhador e clareamento',
                    ],
                },
                {
                    eyebrow: 'O que você encontra aqui',
                    title: 'Odontologia particular em Betim com mais contexto e menos improviso.',
                    copy: 'Atendimento particular permite mais tempo clínico, mais leitura do caso e mais previsibilidade de execução. Isso faz diferença especialmente quando a decisão envolve implante dentário, alinhadores invisíveis, clareamento ou clínica geral.',
                    items: [
                        'Implante dentário',
                        'Alinhadores invisíveis',
                        'Clareamento dental',
                        'Clínica geral e avaliação',
                    ],
                },
                {
                    eyebrow: 'A clínica',
                    title: 'Betim no centro da rotina, não no rodapé da página.',
                    copy: 'A presença local importa porque a decisão odontológica também depende de acompanhamento, retorno, vínculo com a equipe e facilidade real de acesso. Estar no Centro de Betim é parte da experiência, não só informação de endereço.',
                },
                {
                    eyebrow: 'Quando a busca amadurece',
                    title: 'Em algum momento, toda busca por dentista sai do “perto de mim” e entra no “em quem eu posso confiar?”.',
                    copy: 'É aí que entram o tempo clínico, a experiência da equipe, a clareza das explicações, a estrutura da clínica e a capacidade de acompanhar o caso depois. Localização ajuda. Confiança sustenta.',
                },
                {
                    eyebrow: 'Próximo passo',
                    title: 'Se a intenção é encontrar um bom dentista em Betim, comece por uma conversa bem conduzida.',
                    copy: 'Você pode explorar tratamentos, usar o simulador de investimento, entender o perfil da clínica ou partir direto para avaliação. O importante é não decidir sem contexto.',
                },
            ]}
            faqs={dentistBetimFaqs}
            relatedArticles={getPostsBySlugs([
                'quanto-custa-implante-dentario-em-betim',
                'invisalign-vale-a-pena',
                'clareamento-dental-doi',
            ])}
            ctaTitle="Quer falar com um dentista em Betim sem cair numa decisão rasa?"
            ctaCopy="O melhor próximo passo não é correr para qualquer proposta. É entender qual clínica sustenta o tratamento que você realmente precisa."
            relatedLinks={[
                { href: '/implante-dentario-betim', label: 'Implante dentário em Betim' },
                { href: '/quanto-custa-implante-dentario-betim', label: 'Quanto custa implante em Betim' },
                { href: '/inicio', label: 'Voltar para a home' },
            ]}
        />
    );
}
