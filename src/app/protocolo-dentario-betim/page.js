import SeoPageLayout from '@/components/SeoPageLayout';
import {
    buildBreadcrumbSchema,
    buildDentistSchema,
    buildFaqSchema,
    buildMetadata,
    buildServiceSchema,
} from '@/lib/seo';

const protocoloFaqs = [
    {
        q: 'O que é protocolo dentário?',
        a: 'É uma prótese fixa apoiada em implantes para substituir todos os dentes de uma arcada.',
    },
    {
        q: 'É melhor que dentadura?',
        a: 'Para muitos pacientes, sim. O protocolo oferece mais estabilidade para mastigar e falar com segurança.',
    },
    {
        q: 'Quanto tempo dura?',
        a: 'Com indicação correta e manutenção periódica, o protocolo pode durar muitos anos.',
    },
    {
        q: 'Todo mundo pode fazer?',
        a: 'Nem sempre. A avaliação e os exames mostram se há indicação imediata ou se é preciso etapa preparatória.',
    },
];

export const metadata = buildMetadata({
    title: 'Protocolo Dentário em Betim | Clínica Inova',
    description:
        'Protocolo dentário em Betim para quem perdeu todos os dentes. Solução fixa com avaliação, cirurgia planejada e acompanhamento clínico.',
    path: '/protocolo-dentario-betim',
    keywords: [
        'protocolo dentario em betim',
        'implante para quem perdeu todos os dentes',
        'protocolo sobre implantes betim',
    ],
});

export default function ProtocoloDentarioBetimPage() {
    const breadcrumb = [
        { label: 'Início', href: '/' },
        { label: 'Protocolo dentário em Betim', href: '/protocolo-dentario-betim' },
    ];

    return (
        <SeoPageLayout
            schema={[
                buildDentistSchema(),
                buildServiceSchema({
                    name: 'Protocolo dentário em Betim',
                    description:
                        'Solução fixa sobre implantes para pacientes que perderam todos os dentes, com planejamento individualizado.',
                    path: '/protocolo-dentario-betim',
                }),
                buildFaqSchema(protocoloFaqs),
                buildBreadcrumbSchema([
                    { name: 'Início', path: '/' },
                    { name: 'Protocolo dentário em Betim', path: '/protocolo-dentario-betim' },
                ]),
            ]}
            breadcrumb={breadcrumb}
            eyebrow="Protocolo dentário"
            title="Protocolo dentário em Betim para quem perdeu todos os dentes"
            description="Recupere mastigação, estética e segurança com uma solução fixa e planejada. O primeiro passo é entender seu caso com exames e orientação clara."
            bulletPoints={[
                'Prótese fixa apoiada em implantes',
                'Indicado para quem perdeu todos os dentes',
                'Planejamento individual para mais previsibilidade',
            ]}
            sections={[
                {
                    eyebrow: 'Entenda o tratamento',
                    title: 'O que é protocolo dentário?',
                    copy: 'É uma prótese fixa para substituir todos os dentes de uma arcada, apoiada em implantes. O objetivo é devolver função mastigatória e segurança no sorriso.',
                },
                {
                    eyebrow: 'Indicação',
                    title: 'Para quem é indicado?',
                    copy: 'Geralmente para quem perdeu todos os dentes, usa dentadura, tem dificuldade para mastigar ou quer uma solução fixa com mais estabilidade.',
                    items: [
                        'Perdeu todos os dentes',
                        'Usa dentadura removível',
                        'Não consegue mastigar bem',
                        'Busca solução fixa e segura',
                    ],
                },
                {
                    eyebrow: 'Benefícios',
                    title: 'O que muda na rotina?',
                    copy: 'O protocolo tende a melhorar conforto, estabilidade e confiança para sorrir e falar, com uma sensação mais próxima de dentes fixos.',
                    items: ['Não solta', 'Mais conforto', 'Melhora estética', 'Melhora qualidade de vida'],
                },
                {
                    eyebrow: 'Etapas',
                    title: 'Como funciona o tratamento?',
                    copy: 'Cada caso é planejado em etapas para reduzir risco e aumentar previsibilidade.',
                    items: [
                        'Avaliação',
                        'Exames',
                        'Cirurgia',
                        'Prótese provisória',
                        'Prótese final',
                    ],
                },
                {
                    eyebrow: 'Próximo passo',
                    title: 'Quero avaliar meu caso',
                    copy: 'Com uma avaliação bem feita, fica mais fácil entender se protocolo dentário é a melhor opção para você e qual caminho é mais seguro.',
                },
            ]}
            faqs={protocoloFaqs}
            ctaTitle="Quer saber se o protocolo dentário é indicado para você?"
            ctaCopy="Fale com a Clínica Inova pelo WhatsApp e receba uma orientação inicial clara sobre o seu caso."
            relatedLinks={[
                { href: '/implante-protocolo-all-on-4-betim', label: 'Implante protocolo All-on-4 em Betim' },
                { href: '/protocolo-dentario-preco-betim', label: 'Preço do protocolo dentário' },
                { href: '/implante-dentario-betim', label: 'Implante dentário em Betim' },
                { href: '/quanto-custa-implante-dentario-betim', label: 'Quanto custa implante dentário' },
                { href: '/dentista-implante-betim', label: 'Dentista para implante em Betim' },
            ]}
        />
    );
}
