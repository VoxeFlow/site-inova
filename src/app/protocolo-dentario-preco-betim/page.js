import SeoPageLayout from '@/components/SeoPageLayout';
import {
    buildBreadcrumbSchema,
    buildDentistSchema,
    buildMetadata,
    buildServiceSchema,
} from '@/lib/seo';

export const metadata = buildMetadata({
    title: 'Protocolo Dentário Preço em Betim | Clínica Inova',
    description:
        'Entenda quanto custa protocolo dentário em Betim, o que influencia o valor e como funciona o planejamento do tratamento.',
    path: '/protocolo-dentario-preco-betim',
    keywords: [
        'protocolo dentario preco betim',
        'quanto custa protocolo dentario',
        'protocolo sobre implantes valor',
    ],
});

export default function ProtocoloPrecoBetimPage() {
    const breadcrumb = [
        { label: 'Início', href: '/' },
        { label: 'Preço do protocolo dentário', href: '/protocolo-dentario-preco-betim' },
    ];

    return (
        <SeoPageLayout
            schema={[
                buildDentistSchema(),
                buildServiceSchema({
                    name: 'Preço do protocolo dentário em Betim',
                    description:
                        'Página informativa sobre fatores que influenciam o valor do protocolo dentário em Betim.',
                    path: '/protocolo-dentario-preco-betim',
                }),
                buildBreadcrumbSchema([
                    { name: 'Início', path: '/' },
                    { name: 'Preço do protocolo dentário', path: '/protocolo-dentario-preco-betim' },
                ]),
            ]}
            breadcrumb={breadcrumb}
            eyebrow="Preço do protocolo"
            title="Quanto custa protocolo dentário em Betim?"
            description="O valor depende do caso, dos exames, do planejamento e da quantidade de implantes. Comparar apenas números sem avaliação pode gerar expectativa errada."
            bulletPoints={[
                'O valor depende da avaliação',
                'Exames e planejamento entram na proposta',
                'Quantidade de implantes pode variar por caso',
            ]}
            sections={[
                {
                    eyebrow: 'Ponto principal',
                    title: 'Não existe preço único para todos os casos',
                    copy: 'Cada paciente tem uma condição óssea, histórico clínico e necessidade protética diferente. Isso muda a estratégia e o investimento final.',
                },
                {
                    eyebrow: 'O que influencia',
                    title: 'Fatores que mudam o valor do protocolo',
                    copy: 'A avaliação define o plano correto e evita promessa de valor sem base clínica.',
                    items: [
                        'Exames de imagem',
                        'Planejamento cirúrgico',
                        'Quantidade de implantes',
                        'Tipo de prótese final',
                    ],
                },
                {
                    eyebrow: 'Referência inicial',
                    title: 'Condições facilitadas após avaliação',
                    copy: 'O tratamento pode começar com condições facilitadas após avaliação. A proposta final depende de um plano individualizado e seguro.',
                },
            ]}
            ctaTitle="Quero saber meu valor"
            ctaCopy="Fale com a Clínica Inova e receba uma orientação inicial para entender qual formato faz sentido para seu caso."
            relatedLinks={[
                { href: '/protocolo-dentario-betim', label: 'Protocolo dentário em Betim' },
                { href: '/implante-protocolo-all-on-4-betim', label: 'All-on-4 em Betim' },
                { href: '/implante-dentario-betim', label: 'Implante dentário em Betim' },
                { href: '/quanto-custa-implante-dentario-betim', label: 'Quanto custa implante dentário' },
                { href: '/dentista-implante-betim', label: 'Dentista para implante em Betim' },
            ]}
        />
    );
}
