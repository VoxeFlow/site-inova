import Link from 'next/link';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ChatWidget from '@/components/ChatWidget';
import MobileStickyCTA from '@/components/MobileStickyCTA';
import JsonLd from '@/components/JsonLd';
import {
    buildMetadata,
    buildDentistSchema,
    buildFaqSchema,
    buildServiceSchema,
    buildBreadcrumbSchema,
} from '@/lib/seo';

const pageFaqs = [
    {
        q: 'Implante dentário dói?',
        a: 'Com anestesia local e planejamento correto, o procedimento costuma ser mais tranquilo do que muitos pacientes imaginam.',
    },
    {
        q: 'Quanto tempo dura um implante?',
        a: 'Com técnica adequada e manutenção periódica, o implante pode durar muitos anos. A durabilidade depende do cuidado e do acompanhamento.',
    },
    {
        q: 'Implante dentário parcelado existe?',
        a: 'Sim. O formato de parcelamento depende do plano indicado para o seu caso e das etapas do tratamento.',
    },
];

const sections = [
    {
        id: 'valor',
        title: 'Qual é o valor do implante dentário?',
        copy: 'Em Betim, o valor do implante dentário varia conforme o caso clínico. Em muitos cenários, o tratamento pode começar com parcelas a partir de R$150/mês, sempre após avaliação.',
    },
    {
        id: 'parcelado',
        title: 'Implante dentário parcelado',
        copy: 'O parcelamento ajuda no planejamento financeiro, mas precisa ser analisado junto com o escopo do tratamento. O ideal é entender o que está incluso em cada proposta antes de comparar.',
    },
    {
        id: 'variacao',
        title: 'Por que o preço varia?',
        copy: 'Quantidade de dentes, condição óssea, exames, necessidade de enxerto e tipo de prótese mudam o investimento. Por isso, preço sem avaliação pode gerar expectativa errada.',
        items: ['Quantidade de dentes a substituir', 'Condição óssea e possíveis enxertos', 'Exames e planejamento clínico', 'Etapa protética final'],
    },
    {
        id: 'doi',
        title: 'Implante dói?',
        copy: 'A maioria dos pacientes relata um procedimento mais confortável do que imaginava. O controle de dor é feito com anestesia local e orientação pós-operatória.',
    },
    {
        id: 'tempo',
        title: 'Quanto tempo dura?',
        copy: 'O tempo do tratamento varia conforme cada caso. Já a durabilidade do implante depende da execução correta e da manutenção ao longo dos anos.',
    },
    {
        id: 'vale-a-pena',
        title: 'Quando vale a pena fazer implante?',
        copy: 'Quando há perda dentária com impacto na mastigação, na estética ou na confiança, o implante pode ser uma solução segura e previsível após avaliação individualizada.',
    },
];

export const metadata = buildMetadata({
    title: 'Quanto custa um implante dentário em Betim? | Clínica Inova',
    description:
        'Entenda quanto custa um implante dentário em Betim, quando o tratamento pode ser parcelado e quais fatores realmente mudam o valor do caso.',
    path: '/quanto-custa-implante-dentario-betim',
    keywords: [
        'quanto custa implante dentário',
        'implante dentário preço',
        'implante dentário parcelado',
        'implante dentário em betim',
    ],
});

function MidCta() {
    return (
        <div className="my-8 rounded-[22px] border border-brand-gold/35 bg-[#f7f3ea] px-5 py-5 md:my-10 md:px-6">
            <p className="text-sm font-semibold leading-7 text-txt-primary">
                Quer entender seu valor com clareza e sem promessa rasa?
            </p>
            <Link
                href="https://wa.me/553126260038"
                target="_blank"
                className="mt-4 inline-flex min-h-11 items-center justify-center rounded-full bg-txt-primary px-5 text-xs font-black uppercase tracking-[0.14em] text-white transition hover:bg-brand-gold"
            >
                Falar no WhatsApp
            </Link>
        </div>
    );
}

export default function QuantoCustaImplanteBetimPage() {
    return (
        <main className="min-h-screen bg-white pb-24 text-txt-primary selection:bg-brand-gold selection:text-white md:pb-0">
            <JsonLd data={buildDentistSchema()} />
            <JsonLd
                data={buildServiceSchema({
                    name: 'Quanto custa um implante dentário em Betim',
                    description:
                        'Conteúdo informativo sobre valor, parcelamento e fatores que influenciam o implante dentário em Betim.',
                    path: '/quanto-custa-implante-dentario-betim',
                })}
            />
            <JsonLd data={buildFaqSchema(pageFaqs)} />
            <JsonLd
                data={buildBreadcrumbSchema([
                    { name: 'Início', path: '/' },
                    { name: 'Quanto custa um implante dentário em Betim', path: '/quanto-custa-implante-dentario-betim' },
                ])}
            />

            <Navbar />

            <section className="bg-[linear-gradient(180deg,#f8f6f2,white)] pb-14 pt-28 md:pb-18 md:pt-34">
                <div className="mx-auto max-w-6xl px-5 md:px-6">
                    <p className="text-xs font-black uppercase tracking-[0.3em] text-brand-gold">Implante em Betim</p>
                    <h1 className="mt-5 max-w-4xl text-4xl font-black leading-tight md:text-6xl">
                        Quanto custa um implante dentário em Betim?
                    </h1>
                    <p className="mt-5 max-w-3xl text-sm leading-7 text-gray-600 md:text-lg md:leading-8">
                        Se você está pesquisando valor, esta página mostra os fatores que realmente mudam o preço, como funciona o implante dentário parcelado e quando vale a pena seguir para avaliação.
                    </p>
                    <Link
                        href="https://wa.me/553126260038"
                        target="_blank"
                        className="mt-6 inline-flex min-h-12 items-center justify-center rounded-full bg-txt-primary px-7 text-xs font-black uppercase tracking-[0.15em] text-white transition hover:bg-brand-gold"
                    >
                        Quero avaliar meu caso
                    </Link>
                </div>
            </section>

            <section className="bg-white py-14 md:py-18">
                <div className="mx-auto max-w-6xl px-5 md:px-6">
                    <div className="grid gap-5">
                        {sections.map((section, index) => (
                            <article key={section.id} className="rounded-[24px] border border-black/8 bg-[#fbfaf8] p-6 md:p-8">
                                <h2 className="text-2xl font-black leading-tight text-txt-primary md:text-3xl">{section.title}</h2>
                                <p className="mt-4 text-sm leading-7 text-gray-600 md:text-base md:leading-8">{section.copy}</p>
                                {section.items ? (
                                    <ul className="mt-5 grid gap-2">
                                        {section.items.map((item) => (
                                            <li key={item} className="rounded-xl border border-black/6 bg-white px-4 py-3 text-sm text-gray-700">
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                ) : null}
                                {[1, 3, 5].includes(index) ? <MidCta /> : null}
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="bg-[#111111] py-14 text-white md:py-18">
                <div className="mx-auto max-w-5xl px-5 text-center md:px-6">
                    <h2 className="text-3xl font-black leading-tight md:text-5xl">
                        Quer saber seu valor com segurança?
                    </h2>
                    <p className="mt-4 text-sm leading-7 text-white/70 md:text-base md:leading-8">
                        Fale com a Clínica Inova, dentista em Betim, e receba orientação clara sobre o melhor caminho para o seu caso.
                    </p>
                    <Link
                        href="https://wa.me/553126260038"
                        target="_blank"
                        className="mt-6 inline-flex min-h-12 items-center justify-center rounded-full bg-brand-gold px-7 text-xs font-black uppercase tracking-[0.15em] text-white transition hover:bg-brand-gold-dark"
                    >
                        Falar com a clínica agora
                    </Link>
                </div>
            </section>

            <Footer />
            <ChatWidget />
            <MobileStickyCTA />
        </main>
    );
}
