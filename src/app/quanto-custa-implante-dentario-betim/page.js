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

const faqItems = [
    {
        q: 'Qual o preço médio de um implante dentário?',
        a: 'Não existe um único valor para todos os casos. O investimento depende da condição clínica, exames e planejamento.',
    },
    {
        q: 'Por que o valor varia tanto?',
        a: 'Quantidade de dentes, condição óssea, tipo de prótese e necessidade de enxerto são fatores que mudam a proposta.',
    },
    {
        q: 'Dá para parcelar implante dentário?',
        a: 'Sim. O formato de parcelamento depende do plano indicado para o seu caso.',
    },
    {
        q: 'Preciso fazer exame antes?',
        a: 'Na maioria dos casos, sim. Exames ajudam a definir segurança, previsibilidade e etapas do tratamento.',
    },
    {
        q: 'A avaliação define o valor final?',
        a: 'Sim. A avaliação evita estimativa genérica e orienta o valor conforme o seu caso real.',
    },
];

const factors = [
    'Quantidade de dentes',
    'Condição óssea',
    'Necessidade de exames',
    'Necessidade de enxerto',
    'Tipo de prótese',
    'Planejamento clínico',
];

export const metadata = buildMetadata({
    title: 'Quanto Custa Implante Dentário em Betim? | Clínica Inova',
    description:
        'Entenda quanto custa um implante dentário em Betim, o que influencia o valor e quando é possível parcelar o tratamento. Fale com a Clínica Inova.',
    path: '/quanto-custa-implante-dentario-betim',
    keywords: [
        'quanto custa implante dentário em betim',
        'implante dentário preço',
        'implante dentário parcelado em betim',
        'enxerto ósseo para implante em betim',
    ],
});

function MidCta() {
    return (
        <div className="my-8 rounded-[22px] border border-brand-gold/35 bg-[#f7f3ea] px-5 py-5 md:my-10 md:px-6">
            <p className="text-sm font-semibold leading-7 text-txt-primary">
                Quer saber seu valor com mais clareza e sem promessa rasa?
            </p>
            <Link
                href="https://wa.me/553126260038"
                target="_blank"
                className="mt-4 inline-flex min-h-11 items-center justify-center rounded-full bg-txt-primary px-5 text-xs font-black uppercase tracking-[0.14em] text-white transition hover:bg-brand-gold"
            >
                Quero saber meu valor pelo WhatsApp
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
                    name: 'Quanto custa implante dentário em Betim',
                    description:
                        'Página sobre preço de implante dentário em Betim, fatores que influenciam o valor e possibilidades de parcelamento.',
                    path: '/quanto-custa-implante-dentario-betim',
                })}
            />
            <JsonLd data={buildFaqSchema(faqItems)} />
            <JsonLd
                data={buildBreadcrumbSchema([
                    { name: 'Início', path: '/' },
                    { name: 'Quanto custa implante dentário em Betim', path: '/quanto-custa-implante-dentario-betim' },
                ])}
            />

            <Navbar />

            <section className="bg-[linear-gradient(180deg,#f8f6f2,white)] pb-14 pt-28 md:pb-18 md:pt-34">
                <div className="mx-auto max-w-6xl px-5 md:px-6">
                    <p className="text-xs font-black uppercase tracking-[0.3em] text-brand-gold">Preço de implante</p>
                    <h1 className="mt-5 max-w-4xl text-4xl font-black leading-tight md:text-6xl">
                        Quanto custa um implante dentário em Betim?
                    </h1>
                    <p className="mt-5 max-w-3xl text-sm leading-7 text-gray-600 md:text-lg md:leading-8">
                        É normal pesquisar preço antes de procurar atendimento. O valor final, porém, depende da avaliação clínica e do planejamento indicado.
                    </p>
                    <Link
                        href="https://wa.me/553126260038"
                        target="_blank"
                        className="mt-6 inline-flex min-h-12 items-center justify-center rounded-full bg-txt-primary px-7 text-xs font-black uppercase tracking-[0.15em] text-white transition hover:bg-brand-gold"
                    >
                        Quero saber meu valor pelo WhatsApp
                    </Link>
                </div>
            </section>

            <section className="bg-white py-14 md:py-18">
                <div className="mx-auto max-w-6xl px-5 md:px-6">
                    <article className="rounded-[24px] border border-black/8 bg-[#fbfaf8] p-6 md:p-8">
                        <h2 className="text-2xl font-black leading-tight md:text-3xl">O que influencia o valor</h2>
                        <ul className="mt-4 grid gap-2 text-sm leading-7 text-gray-700 md:grid-cols-2 md:text-base md:leading-8">
                            {factors.map((factor) => (
                                <li key={factor}>{factor}</li>
                            ))}
                        </ul>
                    </article>

                    <article className="mt-5 rounded-[24px] border border-black/8 bg-[#fbfaf8] p-6 md:p-8">
                        <h2 className="text-2xl font-black leading-tight md:text-3xl">Existe valor inicial?</h2>
                        <p className="mt-4 text-sm leading-7 text-gray-600 md:text-base md:leading-8">
                            Em alguns casos, o tratamento pode começar com parcelas a partir de R$150/mês. O valor final depende da avaliação clínica e do planejamento indicado.
                        </p>
                    </article>

                    <MidCta />

                    <div className="grid gap-5 md:grid-cols-2">
                        <article className="rounded-[24px] border border-black/8 bg-[#fbfaf8] p-6 md:p-8">
                            <h2 className="text-2xl font-black leading-tight md:text-3xl">Por que não passar valor fechado sem avaliar?</h2>
                            <p className="mt-4 text-sm leading-7 text-gray-600 md:text-base md:leading-8">
                                Sem avaliação, qualquer valor pode gerar falsa expectativa, porque cada boca tem uma condição diferente e precisa de um plano próprio.
                            </p>
                        </article>

                        <article className="rounded-[24px] border border-black/8 bg-[#fbfaf8] p-6 md:p-8">
                            <h2 className="text-2xl font-black leading-tight md:text-3xl">Implante mais barato vale a pena?</h2>
                            <p className="mt-4 text-sm leading-7 text-gray-600 md:text-base md:leading-8">
                                Mais importante do que procurar o menor preço é entender planejamento, segurança, materiais, acompanhamento e previsibilidade.
                            </p>
                        </article>
                    </div>

                    <article className="mt-5 rounded-[24px] border border-black/8 bg-[#fbfaf8] p-6 md:p-8">
                        <h2 className="text-2xl font-black leading-tight md:text-3xl">FAQ</h2>
                        <div className="mt-4 grid gap-3">
                            {faqItems.map((faq) => (
                                <div key={faq.q} className="rounded-xl border border-black/6 bg-white px-4 py-4">
                                    <h3 className="text-base font-black text-txt-primary">{faq.q}</h3>
                                    <p className="mt-2 text-sm leading-7 text-gray-600">{faq.a}</p>
                                </div>
                            ))}
                        </div>
                    </article>

                    <MidCta />

                    <article className="rounded-[24px] border border-black/8 bg-[#fbfaf8] p-6 md:p-8">
                        <h2 className="text-2xl font-black leading-tight md:text-3xl">Links relacionados</h2>
                        <div className="mt-4 flex flex-wrap gap-2">
                            <Link href="/implante-dentario-betim" className="rounded-full border border-black/10 bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.12em] text-gray-700 transition hover:border-brand-gold hover:text-brand-gold">Implante dentário em Betim</Link>
                            <Link href="/implante-dentario-parcelado-betim" className="rounded-full border border-black/10 bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.12em] text-gray-700 transition hover:border-brand-gold hover:text-brand-gold">Implante parcelado</Link>
                            <Link href="/dentista-implante-betim" className="rounded-full border border-black/10 bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.12em] text-gray-700 transition hover:border-brand-gold hover:text-brand-gold">Dentista para implante</Link>
                            <Link href="/protocolo-dentario-preco-betim" className="rounded-full border border-black/10 bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.12em] text-gray-700 transition hover:border-brand-gold hover:text-brand-gold">Preço do protocolo</Link>
                            <Link href="/" className="rounded-full border border-black/10 bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.12em] text-gray-700 transition hover:border-brand-gold hover:text-brand-gold">Home</Link>
                        </div>
                    </article>
                </div>
            </section>

            <section className="bg-white pb-16">
                <div className="mx-auto max-w-5xl px-5 text-center md:px-6">
                    <h2 className="text-3xl font-black leading-tight md:text-5xl">Quer saber seu valor com clareza?</h2>
                    <p className="mx-auto mt-4 max-w-3xl text-sm leading-7 text-gray-600 md:text-base md:leading-8">
                        Fale com a Clínica Inova pelo WhatsApp e receba orientação inicial sobre o seu caso.
                    </p>
                    <Link
                        href="https://wa.me/553126260038"
                        target="_blank"
                        className="mt-6 inline-flex min-h-12 items-center justify-center rounded-full bg-txt-primary px-7 text-xs font-black uppercase tracking-[0.15em] text-white transition hover:bg-brand-gold"
                    >
                        Quero saber meu valor pelo WhatsApp
                    </Link>
                </div>
            </section>

            <Footer />
            <ChatWidget />
            <MobileStickyCTA />
        </main>
    );
}
