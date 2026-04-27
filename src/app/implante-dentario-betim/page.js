import SeoPageLayout from '@/components/SeoPageLayout';
import { getPostsBySlugs } from '@/lib/blog';
import { implanteFaqs } from '@/lib/faqs';
import {
    buildBreadcrumbSchema,
    buildDentistSchema,
    buildFaqSchema,
    buildMetadata,
    buildServiceSchema,
} from '@/lib/seo';

export const metadata = buildMetadata({
    title: 'Implante Dentário em Betim | Preço e Avaliação Especializada',
    description:
        'Recupere sua mastigação e sorriso com implante dentário em Betim. Especialista, tecnologia de ponta e avaliação completa do seu caso.',
    path: '/implante-dentario-betim',
    keywords: [
        'implante dentário betim',
        'preço implante dentário betim',
        'melhor clínica implante betim',
        'quanto custa implante dentário',
        'dentista implante betim',
    ],
});

export default function ImplanteDentarioBetimPage() {
    const breadcrumb = [
        { label: 'Início', href: '/inicio' },
        { label: 'Implante dentário em Betim', href: '/implante-dentario-betim' },
    ];

    return (
        <SeoPageLayout
            schema={[
                buildDentistSchema(),
                buildServiceSchema({
                    name: 'Implante dentário em Betim',
                    description:
                        'Planejamento e avaliação para implante dentário em Betim, com foco em segurança, previsibilidade e resultado funcional.',
                    path: '/implante-dentario-betim',
                }),
                buildFaqSchema(implanteFaqs),
                buildBreadcrumbSchema([
                    { name: 'Início', path: '/inicio' },
                    { name: 'Implante dentário em Betim', path: '/implante-dentario-betim' },
                ]),
            ]}
            breadcrumb={breadcrumb}
            eyebrow="Implante dentário em Betim"
            title="Implante dentário em Betim: a solução definitiva para o seu sorriso."
            description="Quem pesquisa implante dentário em Betim quer mais do que um procedimento: quer voltar a mastigar com segurança, sorrir sem vergonha e recuperar a qualidade de vida. Na Clínica Inova, unimos tecnologia e acolhimento para que sua decisão seja baseada em critério clínico e confiança."
            bulletPoints={[
                'Recuperação da mastigação e fala natural',
                'Estética idêntica ao dente natural',
                'Instalação com cirurgia guiada (sem dor)',
                'Prevenção da perda óssea facial',
            ]}
            sections={[
                {
                    eyebrow: 'O que é o implante?',
                    title: 'A tecnologia que devolve a raiz do seu dente.',
                    copy: 'O implante é um pino de titânio que substitui a raiz de um dente perdido. Ele se integra ao osso de forma permanente, servindo de base para uma prótese que tem a mesma aparência e função de um dente natural.',
                },
                {
                    eyebrow: 'Para quem é indicado?',
                    title: 'Indo além da estética.',
                    copy: 'O implante é indicado para quem perdeu um ou mais dentes, quem usa próteses móveis (dentaduras ou pontes) desconfortáveis e para quem deseja prevenir a reabsorção óssea que ocorre após a perda dentária.',
                    items: [
                        'Perda unitária de dente',
                        'Ausência de vários dentes',
                        'Dificuldade com dentadura convencional',
                        'Desejo de sorrir com mais segurança em Betim',
                    ],
                },
                {
                    eyebrow: 'O Investimento',
                    title: 'Quanto custa um implante dentário em Betim?',
                    copy: 'O valor do implante depende da marca escolhida, da necessidade de enxerto ósseo e da complexidade da cirurgia. Na nossa clínica, priorizamos materiais de alta qualidade para garantir que seu investimento dure décadas.',
                    items: [
                        'Implantes nacionais e importados',
                        'Condições facilitadas de parcelamento',
                        'Sem custos ocultos no orçamento',
                        'Foco em custo-benefício de longo prazo',
                    ],
                },
                {
                    eyebrow: 'Diferencial Inova',
                    title: 'Por que escolher nossa clínica em Betim?',
                    copy: 'Não focamos apenas no parafuso, mas no planejamento digital. Isso significa uma cirurgia mais rápida, pós-operatório tranquilo (dor zero) e resultado estético harmônico com seu rosto.',
                },
            ]}
            faqs={implanteFaqs}
            relatedArticles={getPostsBySlugs([
                'quanto-custa-implante-dentario-em-betim',
                'implante-dentario-doi',
                'quanto-tempo-dura-implante',
            ])}
            ctaTitle="Quer validar se o implante é a melhor decisão para você?"
            ctaCopy="Agende uma conversa com nosso especialista em Betim e receba um planejamento completo do seu caso."
            relatedLinks={[
                { href: '/quanto-custa-implante-dentario-betim', label: 'Quanto custa implante em Betim' },
                { href: '/invisalign-betim', label: 'Alinhador Invisalign Betim' },
                { href: '/inicio#agendamento', label: 'Ver horários disponíveis' },
            ]}
        />
    );
}
