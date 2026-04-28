import Link from 'next/link';
import WhatsAppTrackedLink from '@/components/WhatsAppTrackedLink';

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
        q: 'Quanto custa um implante dentário em Betim?',
        a: 'O valor depende da quantidade de dentes, condição óssea, exames e planejamento. Em alguns casos, o tratamento pode começar com parcelas a partir de R$150/mês, mediante avaliação clínica.',
    },
    {
        q: 'Implante dentário dói?',
        a: 'Com anestesia local e planejamento correto, o procedimento costuma ser mais tranquilo do que muitos pacientes imaginam.',
    },
    {
        q: 'Quanto tempo dura um implante?',
        a: 'Com técnica adequada e manutenção periódica, o implante pode durar muitos anos.',
    },
    {
        q: 'Posso fazer implante se perdi o dente há muito tempo?',
        a: 'Muitas vezes, sim. A avaliação e os exames mostram se é necessário algum preparo antes do implante.',
    },
    {
        q: 'Preciso de enxerto ósseo?',
        a: 'Nem todo paciente precisa. Isso depende da condição óssea e da região a ser tratada.',
    },
    {
        q: 'Preciso fazer avaliação antes de saber o valor?',
        a: 'Sim. A avaliação evita promessa rasa e define o planejamento mais seguro para o seu caso.',
    },
];

const internalLinks = [
    { href: '/dr-lucas-vilela', label: 'Dr. Lucas Vilela' },
    { href: '/quanto-custa-implante-dentario-betim', label: 'Quanto custa implante em Betim' },
    { href: '/implante-dentario-parcelado-betim', label: 'Implante dentário parcelado em Betim' },
    { href: '/dentista-implante-betim', label: 'Dentista para implante em Betim' },
    { href: '/enxerto-osseo-implante-betim', label: 'Enxerto ósseo para implante em Betim' },
    { href: '/protocolo-dentario-betim', label: 'Protocolo dentário em Betim' },
    { href: '/protocolo-dentario-preco-betim', label: 'Preço do protocolo dentário' },
];

export const metadata = buildMetadata({
    title: 'Implante Dentário em Betim | Clínica Inova',
    description:
        'Implante dentário em Betim com avaliação individualizada, planejamento seguro e orientação clara. Fale com a Clínica Inova pelo WhatsApp.',
    path: '/implante-dentario-betim',
    keywords: [
        'implante dentário em betim',
        'dentista para implante em betim',
        'quanto custa implante dentário em betim',
        'implante dentário parcelado em betim',
    ],
});

function MidCta({ label = 'Quero avaliar meu caso' }) {
    return (
        <div className="mt-6 rounded-[22px] border border-brand-gold/35 bg-[#f7f3ea] px-5 py-5 md:px-6">
            <p className="text-sm font-semibold leading-7 text-txt-primary">
                Fale com a Clínica Inova no WhatsApp e receba uma orientação inicial clara.
            </p>
            <WhatsAppTrackedLink
                href="https://wa.me/553126260038"
                target="_blank"
                className="mt-4 inline-flex min-h-11 items-center justify-center rounded-full bg-txt-primary px-5 text-xs font-black uppercase tracking-[0.14em] text-white transition hover:bg-brand-gold"
            >
                {label}
            </WhatsAppTrackedLink>
        </div>
    );
}

export default function ImplanteDentarioBetimPage() {
    return (
        <main className="min-h-screen bg-white pb-24 text-txt-primary selection:bg-brand-gold selection:text-white md:pb-0">
            <JsonLd data={buildDentistSchema()} />
            <JsonLd
                data={buildServiceSchema({
                    name: 'Implante dentário em Betim',
                    description:
                        'Página principal sobre implante dentário em Betim com foco em avaliação, planejamento e previsibilidade clínica.',
                    path: '/implante-dentario-betim',
                })}
            />
            <JsonLd data={buildFaqSchema(faqItems)} />
            <JsonLd
                data={buildBreadcrumbSchema([
                    { name: 'Início', path: '/' },
                    { name: 'Implante dentário em Betim', path: '/implante-dentario-betim' },
                ])}
            />

            <Navbar />

            <section className="bg-[linear-gradient(180deg,#f8f6f2,white)] pb-14 pt-28 md:pb-18 md:pt-34">
                <div className="mx-auto max-w-6xl px-5 md:px-6">
                    <p className="text-xs font-black uppercase tracking-[0.3em] text-brand-gold">Implante dentário em Betim</p>
                    <h1 className="mt-5 max-w-4xl text-4xl font-black leading-tight md:text-6xl">
                        Implante dentário em Betim para voltar a mastigar com segurança
                    </h1>
                    <p className="mt-5 max-w-3xl text-sm leading-7 text-gray-600 md:text-lg md:leading-8">
                        Recupere função, estética e confiança com planejamento individual e acompanhamento profissional.
                    </p>
                    <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                        <WhatsAppTrackedLink
                            href="https://wa.me/553126260038"
                            target="_blank"
                            className="inline-flex min-h-12 items-center justify-center rounded-full bg-txt-primary px-7 text-xs font-black uppercase tracking-[0.15em] text-white transition hover:bg-brand-gold"
                        >
                            Quero avaliar meu caso
                        </WhatsAppTrackedLink>
                        <Link
                            href="/quanto-custa-implante-dentario-betim"
                            className="inline-flex min-h-12 items-center justify-center rounded-full border border-txt-primary px-7 text-xs font-black uppercase tracking-[0.15em] text-txt-primary transition hover:bg-txt-primary hover:text-white"
                        >
                            Entender valores
                        </Link>
                    </div>
                </div>
            </section>

            <section className="bg-white py-14 md:py-18">
                <div className="mx-auto max-w-6xl px-5 md:px-6">
                    <article className="rounded-[24px] border border-black/8 bg-[#fbfaf8] p-6 md:p-8">
                        <h2 className="text-2xl font-black leading-tight md:text-3xl">Para quem procura implante dentário em Betim</h2>
                        <p className="mt-4 text-sm leading-7 text-gray-600 md:text-base md:leading-8">
                            Esta página é para quem perdeu um ou mais dentes, sente dificuldade para mastigar, evita sorrir, busca uma solução fixa e quer entender preço e planejamento com clareza.
                        </p>
                    </article>

                    <div className="mt-5 grid gap-5 md:grid-cols-2">
                        <article className="rounded-[24px] border border-black/8 bg-[#fbfaf8] p-6 md:p-8">
                            <h2 className="text-2xl font-black leading-tight md:text-3xl">Por que fazer implante dentário?</h2>
                            <ul className="mt-4 grid gap-2 text-sm leading-7 text-gray-700 md:text-base md:leading-8">
                                <li>Melhora da mastigação</li>
                                <li>Mais segurança ao sorrir</li>
                                <li>Solução fixa</li>
                                <li>Preservação funcional</li>
                                <li>Melhora da qualidade de vida</li>
                            </ul>
                        </article>

                        <article className="rounded-[24px] border border-black/8 bg-[#fbfaf8] p-6 md:p-8">
                            <h2 className="text-2xl font-black leading-tight md:text-3xl">Quanto custa um implante dentário?</h2>
                            <p className="mt-4 text-sm leading-7 text-gray-600 md:text-base md:leading-8">
                                O valor depende da quantidade de dentes, condição óssea, exames e planejamento. Em alguns casos, o tratamento pode começar com parcelas a partir de R$150/mês, mediante avaliação clínica.
                            </p>
                            <WhatsAppTrackedLink
                                href="https://wa.me/553126260038"
                                target="_blank"
                                className="mt-5 inline-flex min-h-11 items-center justify-center rounded-full bg-brand-gold px-5 text-xs font-black uppercase tracking-[0.14em] text-white transition hover:bg-brand-gold-dark"
                            >
                                Quero saber meu valor
                            </WhatsAppTrackedLink>
                        </article>
                    </div>

                    <MidCta />

                    <div className="mt-5 grid gap-5 md:grid-cols-2">
                        <article className="rounded-[24px] border border-black/8 bg-[#fbfaf8] p-6 md:p-8">
                            <h2 className="text-2xl font-black leading-tight md:text-3xl">Como funciona o tratamento</h2>
                            <ul className="mt-4 grid gap-2 text-sm leading-7 text-gray-700 md:text-base md:leading-8">
                                <li>Avaliação clínica</li>
                                <li>Exames e planejamento</li>
                                <li>Instalação do implante</li>
                                <li>Acompanhamento</li>
                                <li>Finalização protética</li>
                            </ul>
                        </article>

                        <article className="rounded-[24px] border border-black/8 bg-[#fbfaf8] p-6 md:p-8">
                            <h2 className="text-2xl font-black leading-tight md:text-3xl">Para quem é indicado</h2>
                            <ul className="mt-4 grid gap-2 text-sm leading-7 text-gray-700 md:text-base md:leading-8">
                                <li>Quem perdeu um dente</li>
                                <li>Quem perdeu vários dentes</li>
                                <li>Quem usa prótese removível</li>
                                <li>Quem tem dificuldade para mastigar</li>
                                <li>Quem procura uma solução mais fixa</li>
                            </ul>
                        </article>
                    </div>

                    <article className="mt-5 rounded-[24px] border border-black/8 bg-[#fbfaf8] p-6 md:p-8">
                        <h2 className="text-2xl font-black leading-tight md:text-3xl">Autoridade e orientação</h2>
                        <p className="mt-4 text-sm leading-7 text-gray-600 md:text-base md:leading-8">
                            Na Clínica Inova, o primeiro passo é entender o seu caso com calma, explicar possibilidades e orientar o caminho mais seguro para o tratamento.
                        </p>
                    </article>

                    <article className="mt-5 rounded-[24px] border border-black/8 bg-[#fbfaf8] p-6 md:p-8">
                        <h2 className="text-2xl font-black leading-tight md:text-3xl">Dúvidas frequentes</h2>
                        <div className="mt-4 grid gap-3">
                            {faqItems.map((faq) => (
                                <div key={faq.q} className="rounded-xl border border-black/6 bg-white px-4 py-4">
                                    <h3 className="text-base font-black text-txt-primary">{faq.q}</h3>
                                    <p className="mt-2 text-sm leading-7 text-gray-600">{faq.a}</p>
                                </div>
                            ))}
                        </div>
                    </article>

                    <article className="mt-5 rounded-[24px] border border-black/8 bg-[#fbfaf8] p-6 md:p-8">
                        <h2 className="text-2xl font-black leading-tight md:text-3xl">Links úteis sobre implante e protocolo</h2>
                        <div className="mt-4 flex flex-wrap gap-2">
                            {internalLinks.map((item) => (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className="rounded-full border border-black/10 bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.12em] text-gray-700 transition hover:border-brand-gold hover:text-brand-gold"
                                >
                                    {item.label}
                                </Link>
                            ))}
                            <Link
                                href="/"
                                className="rounded-full border border-black/10 bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.12em] text-gray-700 transition hover:border-brand-gold hover:text-brand-gold"
                            >
                                Home
                            </Link>
                        </div>
                    </article>
                </div>
            </section>

            <section className="bg-white pb-16">
                <div className="mx-auto max-w-5xl px-5 text-center md:px-6">
                    <h2 className="text-3xl font-black leading-tight md:text-5xl">Quer saber se o implante é indicado para você?</h2>
                    <p className="mx-auto mt-4 max-w-3xl text-sm leading-7 text-gray-600 md:text-base md:leading-8">
                        Fale com a Clínica Inova pelo WhatsApp e receba uma orientação inicial sobre o seu caso.
                    </p>
                    <WhatsAppTrackedLink
                        href="https://wa.me/553126260038"
                        target="_blank"
                        className="mt-6 inline-flex min-h-12 items-center justify-center rounded-full bg-txt-primary px-7 text-xs font-black uppercase tracking-[0.15em] text-white transition hover:bg-brand-gold"
                    >
                        Falar com a clínica agora
                    </WhatsAppTrackedLink>
                </div>
            </section>

            <Footer />
            <ChatWidget />
            <MobileStickyCTA />
        </main>
    );
}
