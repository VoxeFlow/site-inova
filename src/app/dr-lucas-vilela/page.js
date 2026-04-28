import Image from 'next/image';
import Link from 'next/link';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ChatWidget from '@/components/ChatWidget';
import MobileStickyCTA from '@/components/MobileStickyCTA';
import JsonLd from '@/components/JsonLd';
import { getPatientGalleryImages } from '@/lib/patient-gallery';
import {
    buildMetadata,
    buildDentistSchema,
    buildFaqSchema,
    buildServiceSchema,
    buildBreadcrumbSchema,
} from '@/lib/seo';

const WHATSAPP_URL = 'https://wa.me/553126260038';

const faqItems = [
    {
        q: 'Quando procurar um dentista especialista em implante?',
        a: 'Quando há perda de um ou mais dentes e você busca uma solução fixa com planejamento e segurança.',
    },
    {
        q: 'Toda cirurgia de implante é igual?',
        a: 'Não. Cada caso muda conforme condição óssea, exames, número de dentes e estratégia de reabilitação.',
    },
    {
        q: 'Preciso de avaliação antes de decidir o tratamento?',
        a: 'Sim. A avaliação evita expectativa incorreta e define o caminho mais seguro para o seu caso.',
    },
    {
        q: 'O Dr. Lucas atende casos complexos?',
        a: 'Sim. A atuação clínica envolve casos simples e complexos, sempre com diagnóstico individual e planejamento cuidadoso.',
    },
];

const authorityItems = [
    'Professor de implante na Ciências Médicas (BH)',
    'Atuação clínica focada em cirurgia e reabilitação',
    'Experiência com casos simples e complexos',
    'Atualização profissional constante',
];

export const metadata = buildMetadata({
    title: 'Dr. Lucas Vilela | Implante Dentário em Betim',
    description:
        'Conheça o Dr. Lucas Vilela, especialista em implante dentário com atuação clínica e acadêmica. Avaliação e planejamento individual em Betim.',
    path: '/dr-lucas-vilela',
    keywords: [
        'dr lucas vilela',
        'implante dentário em betim',
        'dentista especialista em implante',
        'cirurgia de implante',
        'implantodontista betim',
    ],
});

function PrimaryCta({ label = 'Quero avaliar meu caso', className = '' }) {
    return (
        <Link
            href={WHATSAPP_URL}
            target="_blank"
            className={`inline-flex min-h-12 items-center justify-center rounded-full bg-txt-primary px-7 text-xs font-black uppercase tracking-[0.15em] text-white transition hover:bg-brand-gold ${className}`}
        >
            {label}
        </Link>
    );
}

export default function DrLucasVilelaPage() {
    const patientStories = getPatientGalleryImages().slice(0, 6);
    const featuredPatient = patientStories[0];
    const compactStories = patientStories.slice(1, 6);

    return (
        <main className="min-h-screen bg-white pb-24 text-txt-primary selection:bg-brand-gold selection:text-white md:pb-0">
            <JsonLd data={buildDentistSchema()} />
            <JsonLd
                data={buildServiceSchema({
                    name: 'Dr. Lucas Vilela - Implante dentário em Betim',
                    description:
                        'Página de autoridade do Dr. Lucas Vilela, dentista especialista em implante dentário em Betim com atuação clínica e acadêmica.',
                    path: '/dr-lucas-vilela',
                })}
            />
            <JsonLd data={buildFaqSchema(faqItems)} />
            <JsonLd
                data={buildBreadcrumbSchema([
                    { name: 'Início', path: '/' },
                    { name: 'Dr. Lucas Vilela', path: '/dr-lucas-vilela' },
                ])}
            />

            <Navbar />

            <section className="bg-[radial-gradient(circle_at_top_left,rgba(197,164,126,0.18),transparent_45%),linear-gradient(180deg,#f8f6f2,white)] pb-16 pt-28 md:pb-22 md:pt-36">
                <div className="mx-auto grid max-w-6xl gap-8 px-5 md:grid-cols-[1fr_0.95fr] md:items-center md:px-6">
                    <div>
                        <p className="text-xs font-black uppercase tracking-[0.3em] text-brand-gold">Implante dentário em Betim</p>
                        <h1 className="mt-5 max-w-3xl text-4xl font-black leading-tight md:text-6xl">Dr. Lucas Vilela</h1>
                        <p className="mt-5 max-w-3xl text-sm leading-7 text-gray-700 md:text-lg md:leading-8">
                            Cirurgião especialista em implantes dentários, com atuação clínica e acadêmica.
                        </p>
                        <p className="mt-4 inline-flex rounded-full border border-brand-gold/30 bg-[#f6f1e8] px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-brand-gold md:text-sm">
                            Professor de implante na Ciências Médicas - Belo Horizonte
                        </p>

                        <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                            <PrimaryCta />
                            <Link
                                href="#como-funciona"
                                className="inline-flex min-h-12 items-center justify-center rounded-full border border-txt-primary px-7 text-xs font-black uppercase tracking-[0.15em] text-txt-primary transition hover:bg-txt-primary hover:text-white"
                            >
                                Entender como funciona o implante
                            </Link>
                        </div>
                    </div>

                    <div className="rounded-[30px] border border-black/8 bg-white p-3 shadow-[0_22px_70px_rgba(0,0,0,0.08)]">
                        <div className="relative h-72 overflow-hidden rounded-[22px] md:h-[33rem]">
                            <Image
                                src="/assets/Dr Lucas Vilela.jpeg"
                                alt="Dr. Lucas Vilela, especialista em implante dentário em Betim"
                                fill
                                priority
                                sizes="(max-width: 768px) 100vw, 45vw"
                                className="object-cover object-top"
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-white py-14 md:py-18">
                <div className="mx-auto max-w-6xl px-5 md:px-6">
                    <article className="rounded-[26px] border border-black/8 bg-[#fbfaf8] p-6 md:p-9">
                        <p className="text-xs font-black uppercase tracking-[0.3em] text-brand-gold">Story</p>
                        <h2 className="mt-4 text-3xl font-black leading-tight md:text-4xl">Uma trajetória construída com precisão e responsabilidade</h2>
                        <p className="mt-5 text-sm leading-7 text-gray-700 md:text-base md:leading-8">
                            A odontologia começou, para o Dr. Lucas Vilela, como uma escolha por cuidado técnico e impacto real na vida das pessoas.
                            Com o tempo, a área de implante se tornou um caminho natural: uma especialidade que exige planejamento, decisão clínica madura e responsabilidade com cada detalhe.
                        </p>
                        <p className="mt-4 text-sm leading-7 text-gray-700 md:text-base md:leading-8">
                            A evolução profissional veio junto da prática diária, da docência e do contato com casos de diferentes complexidades.
                            Hoje, o foco é conduzir cada paciente com clareza desde o diagnóstico, sem pressa e sem promessas genéricas.
                        </p>
                    </article>
                </div>
            </section>

            <section className="bg-[#f7f4ef] py-14 md:py-18">
                <div className="mx-auto max-w-6xl px-5 md:px-6">
                    <p className="text-xs font-black uppercase tracking-[0.3em] text-brand-gold">Autoridade</p>
                    <h2 className="mt-4 text-3xl font-black leading-tight md:text-4xl">Formação e atuação</h2>
                    <div className="mt-6 grid gap-4 md:grid-cols-2">
                        {authorityItems.map((item) => (
                            <article key={item} className="rounded-2xl border border-black/8 bg-white p-5 text-sm font-semibold leading-7 text-gray-700 md:text-base">
                                {item}
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section id="como-funciona" className="bg-white py-14 md:py-18">
                <div className="mx-auto max-w-6xl px-5 md:px-6">
                    <article className="rounded-[26px] border border-black/8 bg-[#fbfaf8] p-6 md:p-9">
                        <p className="text-xs font-black uppercase tracking-[0.3em] text-brand-gold">Filosofia de tratamento</p>
                        <h2 className="mt-4 text-3xl font-black leading-tight md:text-4xl">Como o tratamento é conduzido</h2>
                        <p className="mt-5 text-sm leading-7 text-gray-700 md:text-base md:leading-8">
                            Cada caso começa por um diagnóstico completo. Antes de qualquer decisão, o paciente entende o que é possível,
                            quais etapas fazem sentido e onde está o melhor equilíbrio entre segurança, função e resultado.
                        </p>
                        <p className="mt-4 text-sm leading-7 text-gray-700 md:text-base md:leading-8">
                            O objetivo é simples: planejamento individual, comunicação clara e uma cirurgia de implante conduzida com responsabilidade,
                            para que o paciente se sinta seguro durante todo o processo.
                        </p>
                    </article>
                </div>
            </section>

            {featuredPatient ? (
                <section className="bg-[#111111] py-14 text-white md:py-18">
                    <div className="mx-auto max-w-6xl px-5 md:px-6">
                        <p className="text-xs font-black uppercase tracking-[0.3em] text-brand-gold">Prova social</p>
                        <h2 className="mt-4 text-3xl font-black leading-tight md:text-4xl">Histórias reais da clínica</h2>
                        <p className="mt-4 max-w-3xl text-sm leading-7 text-white/75 md:text-base md:leading-8">
                            Cada paciente chega com uma história diferente. O cuidado começa antes de qualquer procedimento.
                        </p>

                        <div className="mt-7 grid gap-5 md:grid-cols-[1.1fr_0.9fr]">
                            <article className="rounded-[24px] border border-white/12 bg-white/[0.04] p-4">
                                <div className="relative h-72 overflow-hidden rounded-2xl border border-white/10 md:h-[30rem]">
                                    <Image
                                        src={featuredPatient.src}
                                        alt={featuredPatient.alt}
                                        fill
                                        sizes="(max-width: 768px) 100vw, 55vw"
                                        className="object-cover object-top"
                                    />
                                </div>
                                <p className="mt-4 text-sm font-black text-white">{featuredPatient.name}</p>
                                <p className="mt-1 text-[10px] font-black uppercase tracking-[0.18em] text-brand-gold">
                                    {featuredPatient.eyebrow || 'Jornada de cuidado'}
                                </p>
                                <p className="mt-3 text-sm leading-7 text-white/75">
                                    {featuredPatient.story || 'Cada paciente chega com uma história única. O cuidado é sempre individual.'}
                                </p>
                            </article>

                            <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-1">
                                {compactStories.map((item) => (
                                    <article key={item.filename} className="rounded-2xl border border-white/12 bg-white/[0.04] p-3">
                                        <div className="relative h-40 overflow-hidden rounded-xl border border-white/10">
                                            <Image
                                                src={item.src}
                                                alt={item.alt}
                                                fill
                                                sizes="(max-width: 768px) 100vw, 40vw"
                                                className="object-cover object-top"
                                            />
                                        </div>
                                        <p className="mt-3 text-sm font-black text-white">{item.name}</p>
                                        <p className="mt-1 text-[10px] font-black uppercase tracking-[0.18em] text-brand-gold">
                                            {item.eyebrow || 'Jornada de cuidado'}
                                        </p>
                                    </article>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
            ) : null}

            <section className="bg-white py-14 md:py-18">
                <div className="mx-auto max-w-6xl px-5 md:px-6">
                    <article className="rounded-[26px] border border-black/8 bg-[#fbfaf8] p-6 md:p-9">
                        <p className="text-xs font-black uppercase tracking-[0.3em] text-brand-gold">Implante</p>
                        <h2 className="mt-4 text-3xl font-black leading-tight md:text-4xl">Para quem busca implante dentário</h2>
                        <p className="mt-5 text-sm leading-7 text-gray-700 md:text-base md:leading-8">
                            Se você perdeu um ou mais dentes, busca uma solução fixa e quer mais segurança para mastigar e sorrir,
                            o próximo passo é uma avaliação bem conduzida.
                        </p>
                        <Link
                            href="/implante-dentario-betim"
                            className="mt-5 inline-flex min-h-11 items-center justify-center rounded-full border border-txt-primary px-5 text-xs font-black uppercase tracking-[0.14em] text-txt-primary transition hover:bg-txt-primary hover:text-white"
                        >
                            Ver página de implante dentário em Betim
                        </Link>
                    </article>

                    <article className="mt-5 rounded-[26px] border border-black/8 bg-[#fbfaf8] p-6 md:p-9">
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
                </div>
            </section>

            <section className="bg-[#111111] py-16 text-white md:py-22">
                <div className="mx-auto max-w-5xl px-5 text-center md:px-6">
                    <h2 className="text-3xl font-black leading-tight md:text-5xl">Quer entender seu caso com mais clareza?</h2>
                    <p className="mx-auto mt-5 max-w-3xl text-sm leading-7 text-white/75 md:text-base md:leading-8">
                        Fale com a Clínica Inova e receba uma orientação inicial.
                    </p>
                    <PrimaryCta className="mt-7 bg-brand-gold hover:bg-brand-gold-dark" label="Falar no WhatsApp" />
                </div>
            </section>

            <Footer />
            <ChatWidget />
            <MobileStickyCTA />
        </main>
    );
}
