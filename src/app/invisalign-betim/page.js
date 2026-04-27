import SeoPageLayout from '@/components/SeoPageLayout';
import { getPostsBySlugs } from '@/lib/blog';
import { invisalignFaqs } from '@/lib/faqs';
import {
    buildBreadcrumbSchema,
    buildDentistSchema,
    buildFaqSchema,
    buildMetadata,
    buildServiceSchema,
} from '@/lib/seo';

export const metadata = buildMetadata({
    title: 'Invisalign em Betim: Vale a Pena? | Clínica Inova',
    description:
        'Invisalign em Betim para quem busca tecnologia, discrição, planejamento ortodôntico e uma decisão mais bem fundamentada.',
    path: '/invisalign-betim',
    keywords: ['invisalign betim', 'aparelho invisalign betim', 'ortodontia invisalign betim'],
});

export default function InvisalignBetimPage() {
    return (
        <SeoPageLayout
            schema={[
                buildDentistSchema(),
                buildServiceSchema({
                    name: 'Invisalign em Betim',
                    description:
                        'Página dedicada a Invisalign em Betim, com foco em tecnologia, experiência e indicação ortodôntica.',
                    path: '/invisalign-betim',
                }),
                buildFaqSchema(invisalignFaqs),
                buildBreadcrumbSchema([
                    { name: 'Início', path: '/inicio' },
                    { name: 'Invisalign em Betim', path: '/invisalign-betim' },
                ]),
            ]}
            breadcrumb={[
                { label: 'Início', href: '/inicio' },
                { label: 'Invisalign em Betim', href: '/invisalign-betim' },
            ]}
            eyebrow="Invisalign em Betim"
            title="Invisalign em Betim: quando vale a pena e o que realmente muda na comparação."
            description="Quem busca Invisalign em Betim normalmente quer saber se a tecnologia vale a pena, se funciona para o seu caso e como comparar com outros alinhadores. A resposta certa depende de indicação, planejamento e previsibilidade."
            bulletPoints={[
                'Marca reconhecida em alinhadores invisíveis',
                'Planejamento ortodôntico com foco em previsibilidade',
                'Leitura individual do caso antes de comparar investimento',
            ]}
            sections={[
                {
                    eyebrow: 'Tecnologia',
                    title: 'Invisalign não entra na comparação só por estética. Entra por experiência e previsibilidade.',
                    copy: 'Quem procura Invisalign normalmente quer mais do que alinhadores transparentes. Quer controle, discrição, tecnologia e confiança na execução do tratamento.',
                },
                {
                    eyebrow: 'Comparação inteligente',
                    title: 'A melhor comparação não é só entre marcas. É entre indicações.',
                    copy: 'Nem todo caso precisa da mesma solução. A avaliação mostra se Invisalign é o melhor caminho, se outro alinhador atende bem ou se a estratégia precisa ser outra.',
                },
                {
                    eyebrow: 'Próximo passo',
                    title: 'Antes de decidir, vale entender o que o seu alinhamento realmente exige.',
                    copy: 'Quando a decisão vem com contexto, o investimento faz mais sentido, a expectativa fica mais realista e o tratamento começa com mais segurança.',
                },
            ]}
            faqs={invisalignFaqs}
            relatedArticles={getPostsBySlugs([
                'invisalign-vale-a-pena',
                'alinhador-invisivel-ou-aparelho-fixo',
                'clareamento-dental-doi',
            ])}
            ctaTitle="Quer saber se Invisalign faz sentido para o seu caso?"
            ctaCopy="A escolha certa começa quando tecnologia, indicação e expectativa entram na mesma conversa."
            relatedLinks={[
                { href: '/alinhador-invisivel-betim', label: 'Alinhadores invisíveis em Betim' },
                { href: '/dentista-em-betim', label: 'Dentista em Betim' },
                { href: '/inicio#precos', label: 'Ver simulador' },
            ]}
        />
    );
}
