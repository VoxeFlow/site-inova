import SeoPageLayout from '@/components/SeoPageLayout';
import { getPostsBySlugs } from '@/lib/blog';
import { priceFaqs } from '@/lib/faqs';
import {
    buildBreadcrumbSchema,
    buildDentistSchema,
    buildFaqSchema,
    buildMetadata,
    buildServiceSchema,
} from '@/lib/seo';

export const metadata = buildMetadata({
    title: 'Quanto Custa Implante Dentário em Betim? Preço, Enxerto e Parcela | Clínica Inova',
    description:
        'Entenda quanto custa implante dentário em Betim, o que muda o valor, quando entra enxerto, como funciona parcela e por que preço sozinho não explica o tratamento.',
    path: '/quanto-custa-implante-dentario-betim',
    keywords: [
        'quanto custa implante dentário betim',
        'preço implante dentário betim',
        'valor implante betim',
        'implante dentário preço betim',
    ],
});

export default function QuantoCustaImplanteBetimPage() {
    const breadcrumb = [
        { label: 'Início', href: '/inicio' },
        { label: 'Quanto custa implante dentário em Betim', href: '/quanto-custa-implante-dentario-betim' },
    ];

    return (
        <SeoPageLayout
            schema={[
                buildDentistSchema(),
                buildServiceSchema({
                    name: 'Quanto custa implante dentário em Betim',
                    description:
                        'Conteúdo sobre preço de implante dentário em Betim, com fatores que influenciam o investimento e leitura inicial do caso.',
                    path: '/quanto-custa-implante-dentario-betim',
                }),
                buildFaqSchema(priceFaqs),
                buildBreadcrumbSchema([
                    { name: 'Início', path: '/inicio' },
                    { name: 'Quanto custa implante dentário em Betim', path: '/quanto-custa-implante-dentario-betim' },
                ]),
            ]}
            breadcrumb={breadcrumb}
            eyebrow="Preço de implante em Betim"
            title="Quanto custa implante dentário em Betim? O valor existe, mas o contexto é o que decide."
            description="Quem pesquisa preço de implante dentário em Betim normalmente quer entender se cabe no orçamento, se dói, se vale a pena, se pode parcelar e se está comparando certo. Aqui a proposta é simples: mostrar por que o valor varia e o que realmente deveria entrar nessa conta."
            bulletPoints={[
                'Leitura inicial de implante unitário a partir de R$ 1.800',
                'Quantidade de implantes, prótese e enxerto podem mudar a proposta',
                'Marca, planejamento, parcela e estrutura clínica influenciam o valor final',
            ]}
            sections={[
                {
                    eyebrow: 'A pergunta certa',
                    title: 'O preço do implante dentário varia porque o caso não é igual para todo mundo, e a proposta também não deveria ser.',
                    copy: 'Tempo sem o dente, quantidade de implantes, tipo de prótese, necessidade de enxerto, marca usada, estratégia cirúrgica e nível de planejamento mudam o investimento. Quando isso não aparece, o paciente enxerga apenas o número e não o tratamento.',
                    items: [
                        'Implante unitário ou mais de um dente',
                        'Prótese incluída ou não',
                        'Necessidade de enxerto ósseo',
                        'Parcela e forma de pagamento',
                    ],
                },
                {
                    eyebrow: 'O que deve ser comparado',
                    title: 'Preço sem critério é só aparência de economia.',
                    copy: 'Quem está operando, qual marca será usada, se existe planejamento radiográfico, se há enxerto, o que entra na cirurgia, o que entra na prótese e quem acompanha depois. É isso que dá densidade real ao valor.',
                    items: [
                        'Profissional e experiência clínica',
                        'Marca e componentes do implante',
                        'Planejamento, exames e estratégia cirúrgica',
                        'Pós-operatório e acompanhamento',
                    ],
                },
                {
                    eyebrow: 'Risco comum',
                    title: 'O barato pode parecer melhor no começo e piorar depois.',
                    copy: 'Em implante dentário, o custo escondido pode aparecer em retrabalho, desconforto, tempo perdido, baixa previsibilidade e necessidade de refazer etapas que já deveriam ter sido bem conduzidas. Por isso, a leitura do preço precisa ser sempre contextual.',
                },
                {
                    eyebrow: 'O que muita gente quer saber',
                    title: 'Sim, parcela importa. Mas a melhor parcela ainda depende de entender o que está sendo parcelado.',
                    copy: 'No Google, muita gente procura preço de implante e logo depois procura parcelamento. Isso é natural. O ponto é não comparar parcelas de tratamentos que não entregam a mesma coisa. Em Betim, a comparação inteligente continua sendo entre propostas equivalentes.',
                },
                {
                    eyebrow: 'Como começar',
                    title: 'Se o objetivo é entender o preço real do implante, o caso precisa ser lido com critério.',
                    copy: 'O simulador ajuda a organizar uma faixa inicial. A avaliação ajuda a transformar essa faixa em proposta clínica, com contexto, etapas e leitura mais segura do investimento.',
                },
            ]}
            faqs={priceFaqs}
            relatedArticles={getPostsBySlugs([
                'quanto-custa-implante-dentario-em-betim',
                'implante-dentario-apos-extracao',
                'clareamento-dental-doi',
            ])}
            ctaTitle="Quer entender o valor do implante com mais critério e menos achismo?"
            ctaCopy="A melhor forma de comparar é enxergar o que está incluído, o que muda o caso e o que sustenta o resultado depois."
            relatedLinks={[
                { href: '/implante-dentario-betim', label: 'Implante dentário em Betim' },
                { href: '/dentista-em-betim', label: 'Dentista em Betim' },
                { href: '/inicio#precos', label: 'Usar simulador' },
            ]}
        />
    );
}
