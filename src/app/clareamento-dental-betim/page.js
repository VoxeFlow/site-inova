import SeoPageLayout from '@/components/SeoPageLayout';
import { getPostsBySlugs } from '@/lib/blog';
import { clareamentoFaqs } from '@/lib/faqs';
import {
    buildBreadcrumbSchema,
    buildDentistSchema,
    buildFaqSchema,
    buildMetadata,
    buildServiceSchema,
} from '@/lib/seo';

export const metadata = buildMetadata({
    title: 'Clareamento Dental em Betim: Dói? Quanto Dura? | Clínica Inova',
    description:
        'Clareamento dental em Betim com foco em dor, sensibilidade, duração do resultado e segurança estética.',
    path: '/clareamento-dental-betim',
    keywords: ['clareamento dental betim', 'clareamento dentario betim', 'clareamento em betim'],
});

export default function ClareamentoDentalBetimPage() {
    return (
        <SeoPageLayout
            schema={[
                buildDentistSchema(),
                buildServiceSchema({
                    name: 'Clareamento dental em Betim',
                    description:
                        'Página de clareamento dental em Betim para quem busca segurança, naturalidade e boa previsibilidade estética.',
                    path: '/clareamento-dental-betim',
                }),
                buildFaqSchema(clareamentoFaqs),
                buildBreadcrumbSchema([
                    { name: 'Início', path: '/inicio' },
                    { name: 'Clareamento dental em Betim', path: '/clareamento-dental-betim' },
                ]),
            ]}
            breadcrumb={[
                { label: 'Início', href: '/inicio' },
                { label: 'Clareamento dental em Betim', href: '/clareamento-dental-betim' },
            ]}
            eyebrow="Clareamento dental em Betim"
            title="Clareamento dental em Betim: dói, quanto dura e como clarear com mais segurança."
            description="Quem pesquisa clareamento dental em Betim normalmente quer saber se dói, quanto tempo dura, se enfraquece os dentes e qual técnica deixa o resultado mais natural. A boa decisão começa quando essas dúvidas são tratadas com contexto."
            bulletPoints={[
                'Leitura estética individual do caso',
                'Avaliação de sensibilidade e manutenção',
                'Foco em clarear com naturalidade e previsibilidade',
            ]}
            sections={[
                {
                    eyebrow: 'O que mais importa',
                    title: 'Clarear bem não é só clarear mais.',
                    copy: 'Resultado bonito também depende de naturalidade, conforto, técnica e indicação correta. Quando o protocolo respeita o caso, a estética ganha mais coerência.',
                },
                {
                    eyebrow: 'Dúvida comum',
                    title: 'A maior parte das buscas gira em torno de dor, duração, sensibilidade e resultado.',
                    copy: 'Sensibilidade, tempo de efeito, expectativa estética e receio de “enfraquecer” os dentes costumam aparecer antes da decisão. Por isso, o clareamento precisa ser lido com contexto, e não como produto de prateleira.',
                },
                {
                    eyebrow: 'Próximo passo',
                    title: 'Se a intenção é clarear com segurança, comece entendendo o seu caso.',
                    copy: 'A avaliação ajuda a definir a técnica, a intensidade e a expectativa que mais fazem sentido para o seu sorriso, reduzindo exagero e aumentando previsibilidade.',
                },
            ]}
            faqs={clareamentoFaqs}
            relatedArticles={getPostsBySlugs([
                'clareamento-dental-doi',
                'alinhador-invisivel-ou-aparelho-fixo',
                'invisalign-vale-a-pena',
            ])}
            ctaTitle="Quer entender qual clareamento faz mais sentido para o seu sorriso?"
            ctaCopy="Resultado estético de verdade começa quando expectativa, técnica e conforto são lidos juntos."
            relatedLinks={[
                { href: '/dentista-em-betim', label: 'Dentista em Betim' },
                { href: '/inicio#precos', label: 'Ver simulador' },
                { href: '/inicio#agendamento', label: 'Agendar avaliação' },
            ]}
        />
    );
}
