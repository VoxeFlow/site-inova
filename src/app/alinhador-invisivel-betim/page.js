import SeoPageLayout from '@/components/SeoPageLayout';
import { getPostsBySlugs } from '@/lib/blog';
import { alinhadoresFaqs } from '@/lib/faqs';
import {
    buildBreadcrumbSchema,
    buildDentistSchema,
    buildFaqSchema,
    buildMetadata,
    buildServiceSchema,
} from '@/lib/seo';

export const metadata = buildMetadata({
    title: 'Invisalign em Betim | Alinhador Transparente e Avaliação',
    description:
        'Transforme seu sorriso com Invisalign em Betim. O alinhador invisível que une conforto, estética e tecnologia. Agende sua avaliação na Clínica Inova.',
    path: '/alinhador-invisivel-betim',
    keywords: [
        'alinhador invisível betim',
        'invisalign betim',
        'aparelho invisível preço',
        'alinhador transparente betim',
        'aparelho invisível betim',
    ],
});

export default function AlinhadorInvisivelBetimPage() {
    return (
        <SeoPageLayout
            schema={[
                buildDentistSchema(),
                buildServiceSchema({
                    name: 'Alinhador invisível em Betim',
                    description:
                        'Tratamento com alinhadores invisíveis Invisalign em Betim. Ortodontia moderna, estética e confortável.',
                    path: '/alinhador-invisivel-betim',
                }),
                buildFaqSchema(alinhadoresFaqs),
                buildBreadcrumbSchema([
                    { name: 'Início', path: '/inicio' },
                    { name: 'Alinhador invisível em Betim', path: '/alinhador-invisivel-betim' },
                ]),
            ]}
            breadcrumb={[
                { label: 'Início', href: '/inicio' },
                { label: 'Alinhador invisível em Betim', href: '/alinhador-invisivel-betim' },
            ]}
            eyebrow="Alinhadores invisíveis em Betim"
            title="Alinhador Invisível em Betim: sorria com confiança durante todo o tratamento."
            description="Se você busca corrigir o alinhamento dos seus dentes sem o desconforto e a estética dos fios metálicos, o alinhador invisível é a escolha certa. Em Betim, a Clínica Inova é referência em tecnologia Invisalign, oferecendo um tratamento previsível, rápido e totalmente discreto."
            bulletPoints={[
                'Totalmente transparente e discreto',
                'Removível para comer e higienizar',
                'Tratamento até 50% mais rápido',
                'Muito mais confortável que o fixo',
            ]}
            sections={[
                {
                    eyebrow: 'O que é?',
                    title: 'A evolução da ortodontia digital.',
                    copy: 'Os alinhadores invisíveis são placas transparentes feitas sob medida para sua boca. Através de um escaneamento 3D, planejamos cada movimento dos seus dentes, trocando as plaquinhas periodicamente até chegar ao sorriso perfeito.',
                },
                {
                    eyebrow: 'Alinhador vs Aparelho Fixo',
                    title: 'Por que escolher o alinhador?',
                    copy: 'Diferente do aparelho convencional, o alinhador não possui bráquetes ou fios que machucam a boca. Além disso, por ser removível, você mantém sua higiene bucal impecável e não tem restrições alimentares.',
                    items: [
                        'Estética superior (quase imperceptível)',
                        'Menos dor e sem aftas causadas por fios',
                        'Previsibilidade com planejamento digital',
                        'Fácil higienização e fio dental',
                    ],
                },
                {
                    eyebrow: 'Para quem é?',
                    title: 'Adultos e adolescentes que buscam praticidade.',
                    copy: 'Seja para correções simples ou casos complexos, o sistema Invisalign atende a grande maioria das necessidades ortodônticas, permitindo que você mantenha sua vida social e profissional sem interrupções.',
                },
                {
                    eyebrow: 'O Investimento',
                    title: 'Quanto custa o aparelho invisível em Betim?',
                    copy: 'O preço do tratamento depende da complexidade do caso e do número de alinhadores necessários. Oferecemos planos personalizados e condições que tornam a tecnologia acessível para quem busca o melhor resultado.',
                    items: [
                        'Opções para casos rápidos e completos',
                        'Parcelamento que cabe no seu bolso',
                        'Avaliação digital inclusa no planejamento',
                        'Custo-benefício focado na sua liberdade',
                    ],
                },
            ]}
            faqs={alinhadoresFaqs}
            relatedArticles={getPostsBySlugs([
                'invisalign-vale-a-pena',
                'aparelho-invisivel-preco-betim',
                'alinhador-invisivel-ou-aparelho-fixo',
            ])}
            ctaTitle="Quer descobrir se Invisalign é o ideal para você?"
            ctaCopy="Agende um escaneamento digital em Betim e veja como ficará seu sorriso antes mesmo de começar."
            relatedLinks={[
                { href: '/aparelho-invisivel-preco-betim', label: 'Preço Alinhador em Betim' },
                { href: '/implante-dentario-betim', label: 'Implante Dentário Betim' },
                { href: '/inicio#agendamento', label: 'Reservar meu horário' },
            ]}
        />
    );
}
