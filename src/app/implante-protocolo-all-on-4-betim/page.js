import SeoPageLayout from '@/components/SeoPageLayout';
import {
    buildBreadcrumbSchema,
    buildDentistSchema,
    buildMetadata,
    buildServiceSchema,
} from '@/lib/seo';

export const metadata = buildMetadata({
    title: 'Implante Protocolo All-on-4 em Betim | Clínica Inova',
    description:
        'Implante protocolo All-on-4 em Betim para quem perdeu todos os dentes. Entenda indicação, vantagens e diferenças para implante convencional.',
    path: '/implante-protocolo-all-on-4-betim',
    keywords: ['all-on-4 betim', 'implante protocolo all on 4', 'protocolo sobre 4 implantes'],
});

export default function AllOn4BetimPage() {
    const breadcrumb = [
        { label: 'Início', href: '/' },
        { label: 'All-on-4 em Betim', href: '/implante-protocolo-all-on-4-betim' },
    ];

    return (
        <SeoPageLayout
            schema={[
                buildDentistSchema(),
                buildServiceSchema({
                    name: 'Implante protocolo All-on-4 em Betim',
                    description:
                        'Técnica com quatro implantes para sustentar prótese completa em casos de perda total dentária.',
                    path: '/implante-protocolo-all-on-4-betim',
                }),
                buildBreadcrumbSchema([
                    { name: 'Início', path: '/' },
                    { name: 'All-on-4 em Betim', path: '/implante-protocolo-all-on-4-betim' },
                ]),
            ]}
            breadcrumb={breadcrumb}
            eyebrow="All-on-4"
            title="Implante protocolo All-on-4 em Betim"
            description="A técnica All-on-4 utiliza quatro implantes para sustentar uma prótese completa, sendo uma alternativa para quem perdeu todos os dentes."
            bulletPoints={[
                '4 implantes sustentam prótese completa',
                'Solução para perda total dentária',
                'Em alguns casos, pode reduzir necessidade de enxerto',
            ]}
            sections={[
                {
                    eyebrow: 'Como funciona',
                    title: 'Quatro implantes, uma base fixa para reabilitação completa',
                    copy: 'Os implantes são posicionados estrategicamente para sustentar uma prótese total, com planejamento para estabilidade e distribuição de carga.',
                },
                {
                    eyebrow: 'Vantagens',
                    title: 'Por que muitos pacientes consideram All-on-4?',
                    copy: 'A proposta é devolver função e estética com uma estrutura fixa, melhorando conforto no dia a dia.',
                    items: ['Mais segurança para mastigar', 'Prótese fixa', 'Tratamento planejado', 'Recuperação da confiança'],
                },
                {
                    eyebrow: 'Indicação',
                    title: 'Para quem pode ser indicado?',
                    copy: 'Principalmente para quem perdeu todos os dentes e quer sair da dentadura removível para uma solução fixa.',
                },
                {
                    eyebrow: 'Comparação',
                    title: 'Diferença para implante convencional',
                    copy: 'No implante convencional, cada região pode demandar estratégias diferentes. No All-on-4, a ideia é reabilitar uma arcada completa sobre quatro implantes bem posicionados.',
                },
            ]}
            ctaTitle="Quero saber se é indicado para mim"
            ctaCopy="Converse com a equipe da Clínica Inova e entenda se a técnica All-on-4 faz sentido para o seu caso."
            relatedLinks={[
                { href: '/protocolo-dentario-betim', label: 'Protocolo dentário em Betim' },
                { href: '/protocolo-dentario-preco-betim', label: 'Preço do protocolo dentário' },
                { href: '/implante-dentario-betim', label: 'Implante dentário em Betim' },
            ]}
        />
    );
}
