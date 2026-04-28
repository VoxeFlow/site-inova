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

const credentials = [
    'Graduado em Odontologia - PUC Minas',
    'Especialista em Implantodontia - Faculdade Ciências Médicas',
    'Mestrado em Implantodontia - ILAPEO-PR',
    'Professor de Graduação - Faculdade Anhanguera',
    'Professor de Especialização em Implantodontia - Faculdade Ciências Médicas',
    'Professor de Aperfeiçoamento em Cirurgia Oral - Faculdade Ciências Médicas',
];

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
        q: 'Preciso de avaliação antes de decidir?',
        a: 'Sim. A avaliação clínica evita promessa genérica e define um plano seguro para o seu caso.',
    },
    {
        q: 'O Dr. Lucas atende casos complexos?',
        a: 'Sim. A atuação clínica envolve cirurgia de implante em casos simples e complexos, sempre com diagnóstico individual.',
    },
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

            <section className="bg-[radial-gradient(circle_at_top_left,rgba(197,164,126,0.2),transparent_42%),linear-gradient(180deg,#f8f6f2,#fff)] pb-16 pt-28 md:pb-24 md:pt-36">
                <div className="mx-auto grid max-w-6xl gap-8 px-5 md:grid-cols-[1fr_0.95fr] md:items-center md:px-6">
                    <div>
                        <p className="text-xs font-black uppercase tracking-[0.3em] text-brand-gold">Especialista em implante dentário em Betim</p>
                        <h1 className="mt-5 text-4xl font-black leading-[1.02] md:text-6xl">Dr. Lucas Vilela</h1>
                        <p className="mt-5 max-w-3xl text-sm leading-7 text-gray-700 md:text-lg md:leading-8">
                            Cirurgião especialista em implantes dentários, com atuação clínica e acadêmica.
                        </p>
                        <p className="mt-4 max-w-3xl text-sm leading-7 text-gray-700 md:text-base md:leading-8">
                            Professor de implante na Ciências Médicas - Belo Horizonte.
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

                    <div className="rounded-[30px] border border-black/8 bg-white p-3 shadow-[0_24px_80px_rgba(0,0,0,0.08)]">
                        <div className="relative h-72 overflow-hidden rounded-[22px] md:h-[33rem]">
                            <Image
                                src="/assets/Dr Lucas Vilela.jpeg"
                                alt="Dr. Lucas Vilela - dentista especialista em implante"
                                fill
                                priority
                                sizes="(max-width: 768px) 100vw, 45vw"
                                className="object-cover object-top"
                            />
                            <div className="absolute bottom-3 left-3 rounded-full border border-white/30 bg-black/55 px-3 py-2 text-[10px] font-black uppercase tracking-[0.16em] text-white backdrop-blur">
                                Cirurgia e reabilitação
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-white py-14 md:py-18">
                <div className="mx-auto max-w-6xl px-5 md:px-6">
                    <article className="rounded-[28px] border border-black/8 bg-[#fbfaf8] p-6 md:p-10">
                        <p className="text-xs font-black uppercase tracking-[0.3em] text-brand-gold">Trajetória</p>
                        <h2 className="mt-4 text-3xl font-black leading-tight md:text-4xl">Uma trajetória construída com precisão e responsabilidade</h2>
                        <p className="mt-5 text-sm leading-7 text-gray-700 md:text-base md:leading-8">
                            O início na odontologia veio do desejo de unir técnica e impacto real na vida das pessoas. Com a vivência clínica,
                            a implantodontia se tornou um caminho natural: uma área que exige leitura cuidadosa de cada caso, planejamento consistente
                            e compromisso com resultado funcional.
                        </p>
                        <p className="mt-4 text-sm leading-7 text-gray-700 md:text-base md:leading-8">
                            A evolução profissional aconteceu entre consultório e sala de aula. Hoje, a missão é a mesma: conduzir cada paciente
                            com clareza, segurança e responsabilidade, do diagnóstico à finalização.
                        </p>
                    </article>
                </div>
            </section>

            <section className="bg-[#f7f4ef] py-14 md:py-18">
                <div className="mx-auto max-w-6xl px-5 md:px-6">
                    <p className="text-xs font-black uppercase tracking-[0.3em] text-brand-gold">Autoridade acadêmica e clínica</p>
                    <h2 className="mt-4 text-3xl font-black leading-tight md:text-4xl">Formação e atuação</h2>
                    <div className="mt-6 grid gap-4 md:grid-cols-2">
                        {credentials.map((item) => (
                            <article key={item} className="rounded-2xl border border-black/8 bg-white p-5 text-sm font-semibold leading-7 text-gray-700 md:text-base">
                                {item}
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section id="como-funciona" className="bg-white py-14 md:py-18">
                <div className="mx-auto max-w-6xl px-5 md:px-6">
                    <article className="rounded-[28px] border border-black/8 bg-[#fbfaf8] p-6 md:p-10">
                        <p className="text-xs font-black uppercase tracking-[0.3em] text-brand-gold">Filosofia de tratamento</p>
                        <h2 className="mt-4 text-3xl font-black leading-tight md:text-4xl">Como o tratamento é conduzido</h2>
                        <p className="mt-5 text-sm leading-7 text-gray-700 md:text-base md:leading-8">
                            O processo começa por diagnóstico e planejamento individual. Antes de falar em procedimento, o paciente entende
                            cenário clínico, possibilidades e próximos passos.
                        </p>
                        <p className="mt-4 text-sm leading-7 text-gray-700 md:text-base md:leading-8">
                            Em cirurgia de implante, segurança vem de preparo e execução técnica, mas também de comunicação clara.
                            O paciente precisa saber exatamente o que será feito e por quê.
                        </p>
                    </article>
                </div>
            </section>

            <section className="bg-[#111111] py-14 text-white md:py-18">
                <div className="mx-auto max-w-6xl px-5 md:px-6">
                    <p className="text-xs font-black uppercase tracking-[0.3em] text-brand-gold">Manifesto</p>
                    <h2 className="mt-4 max-w-4xl text-3xl font-black leading-tight md:text-5xl">
                        Porque é melhor fazer algo muito bem feito.
                    </h2>
                    <p className="mt-4 max-w-3xl text-sm leading-7 text-white/78 md:text-base md:leading-8">
                        Não se trata de correr para decidir. Trata-se de tratar com critério, respeitando cada detalhe clínico e cada pessoa.
                    </p>
                    <p className="mt-5 italic text-white/60">“Cada sonho que você deixa pra trás é um pedaço do futuro que deixa de existir.”</p>
                </div>
            </section>

            {featuredPatient ? (
                <section className="bg-white py-14 md:py-18">
                    <div className="mx-auto max-w-6xl px-5 md:px-6">
                        <p className="text-xs font-black uppercase tracking-[0.3em] text-brand-gold">Prova social</p>
                        <h2 className="mt-4 text-3xl font-black leading-tight md:text-4xl">Cada paciente chega com uma história diferente</h2>
                        <p className="mt-4 max-w-3xl text-sm leading-7 text-gray-700 md:text-base md:leading-8">
                            O cuidado começa antes de qualquer procedimento. Começa na escuta, no diagnóstico e na confiança construída ao longo da jornada.
                        </p>

                        <div className="mt-7 grid gap-5 md:grid-cols-[1.05fr_0.95fr]">
                            <article className="rounded-[24px] border border-black/8 bg-[#fbfaf8] p-4">
                                <div className="relative h-72 overflow-hidden rounded-2xl border border-black/8 md:h-[30rem]">
                                    <Image
                                        src={featuredPatient.src}
                                        alt={featuredPatient.alt}
                                        fill
                                        sizes="(max-width: 768px) 100vw, 55vw"
                                        className="object-cover object-top"
                                    />
                                </div>
                                <p className="mt-4 text-sm font-black text-txt-primary">{featuredPatient.name}</p>
                                <p className="mt-1 text-[10px] font-black uppercase tracking-[0.18em] text-brand-gold">
                                    {featuredPatient.eyebrow || 'Jornada de cuidado'}
                                </p>
                                <p className="mt-3 text-sm leading-7 text-gray-700">
                                    {featuredPatient.story || 'Cada paciente chega com uma história única. O cuidado é sempre individual.'}
                                </p>
                            </article>

                            <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-1">
                                {compactStories.map((item) => (
                                    <article key={item.filename} className="rounded-2xl border border-black/8 bg-[#fbfaf8] p-3">
                                        <div className="relative h-40 overflow-hidden rounded-xl border border-black/8">
                                            <Image
                                                src={item.src}
                                                alt={item.alt}
                                                fill
                                                sizes="(max-width: 768px) 100vw, 40vw"
                                                className="object-cover object-top"
                                            />
                                        </div>
                                        <p className="mt-3 text-sm font-black text-txt-primary">{item.name}</p>
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

            <section className="bg-[#f7f4ef] py-14 md:py-18">
                <div className="mx-auto max-w-6xl px-5 md:px-6">
                    <article className="rounded-[28px] border border-black/8 bg-white p-6 md:p-10">
                        <p className="text-xs font-black uppercase tracking-[0.3em] text-brand-gold">Implante dentário em Betim</p>
                        <h2 className="mt-4 text-3xl font-black leading-tight md:text-4xl">Para quem busca implante dentário</h2>
                        <p className="mt-5 text-sm leading-7 text-gray-700 md:text-base md:leading-8">
                            Se você perdeu um ou mais dentes, busca solução fixa e quer mais segurança para mastigar, sorrir e voltar a viver com confiança,
                            a avaliação é o passo mais importante.
                        </p>
                        <Link
                            href="/implante-dentario-betim"
                            className="mt-5 inline-flex min-h-11 items-center justify-center rounded-full border border-txt-primary px-5 text-xs font-black uppercase tracking-[0.14em] text-txt-primary transition hover:bg-txt-primary hover:text-white"
                        >
                            Ir para implante dentário em Betim
                        </Link>
                    </article>
                </div>
            </section>

            <section className="bg-white py-14 md:py-18">
                <div className="mx-auto max-w-6xl px-5 md:px-6">
                    <article className="rounded-[28px] border border-black/8 bg-[#fbfaf8] p-6 md:p-10">
                        <h2 className="text-2xl font-black leading-tight md:text-3xl">Perguntas frequentes</h2>
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
