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
        q: 'Invisalign funciona mesmo?',
        a: 'Funciona quando há indicação correta e acompanhamento. O planejamento digital ajuda na previsibilidade dos movimentos.',
    },
    {
        q: 'Quanto custa Invisalign em Betim?',
        a: 'O valor varia por complexidade, tempo e número de alinhadores. A avaliação define o investimento do seu caso com clareza.',
    },
    {
        q: 'Aparelho invisível preço em Betim é igual para todo mundo?',
        a: 'Não. Cada sorriso tem um planejamento diferente, por isso o preço do aparelho invisível em Betim depende da avaliação clínica.',
    },
    {
        q: 'Invisalign dói?',
        a: 'Pode existir pressão leve nos primeiros dias de uso e nas trocas. Normalmente é uma adaptação transitória.',
    },
    {
        q: 'Invisalign Doctor em Betim faz diferença?',
        a: 'Sim. Um Invisalign Doctor em Betim conduz diagnóstico, planejamento e acompanhamento com protocolo específico da tecnologia.',
    },
    {
        q: 'Quanto tempo dura o tratamento?',
        a: 'Depende do seu caso. Em avaliações de Invisalign em Betim, o tempo é definido após análise clínica e planejamento digital.',
    },
];

const steps = [
    {
        title: 'Consulta e escaneamento',
        text: 'Avaliamos o seu sorriso e planejamos o caso com visão clínica e estética.',
    },
    {
        title: 'Planejamento do tratamento',
        text: 'Você entende etapas, previsão e investimento antes de decidir iniciar.',
    },
    {
        title: 'Transformação acompanhada',
        text: 'As trocas dos alinhadores acontecem com revisão periódica e ajustes de precisão.',
    },
];

const quizCards = [
    {
        title: 'Quero alinhar sem aparelho metálico',
        text: 'Busca discrição para sorrir em reuniões, fotos e rotina social.',
    },
    {
        title: 'Quero entender preço antes de começar',
        text: 'A avaliação mostra quanto custa Invisalign em Betim para o seu caso.',
    },
    {
        title: 'Quero previsibilidade e segurança',
        text: 'Planejamento com Invisalign Doctor Betim e acompanhamento próximo.',
    },
];

export const metadata = buildMetadata({
    title: 'Invisalign em Betim | Invisalign Doctor na Clínica Inova',
    description:
        'Invisalign em Betim com Invisalign Doctor, planejamento digital e acompanhamento individual. Entenda indicação, etapas e aparelho invisível preço em Betim.',
    path: '/invisalign-betim',
    keywords: [
        'invisalign betim',
        'invisalign doctor betim',
        'alinhadores invisíveis betim',
        'aparelho invisível preço betim',
        'quanto custa invisalign em betim',
        'dentista invisalign betim',
        'ortodontia invisivel betim',
    ],
});

function PrimaryCta({ label = 'Quero avaliar meu caso Invisalign', className = '' }) {
    return (
        <Link
            href={WHATSAPP_URL}
            target="_blank"
            className={`inline-flex min-h-12 items-center justify-center rounded-full bg-[#0f172a] px-7 text-xs font-black uppercase tracking-[0.15em] text-white transition hover:bg-[#0ea5e9] ${className}`}
        >
            {label}
        </Link>
    );
}

function MidCta() {
    return (
        <div className="rounded-[26px] border border-[#8fd7ff] bg-[linear-gradient(120deg,#ecf8ff,#dff3ff)] px-6 py-6 md:px-8">
            <p className="text-sm font-semibold leading-7 text-[#0f172a] md:text-base md:leading-8">
                Se você pesquisou <strong>Invisalign Betim</strong>, <strong>Invisalign Doctor Betim</strong> ou <strong>aparelho invisível preço em Betim</strong>,
                a avaliação é o passo que transforma dúvida em plano real.
            </p>
            <PrimaryCta className="mt-4" label="Quero entender meu Invisalign" />
        </div>
    );
}

export default function InvisalignBetimPage() {
    const socialProof = getPatientGalleryImages().slice(0, 8);

    return (
        <main className="min-h-screen bg-white pb-24 text-[#0f172a] selection:bg-[#0ea5e9] selection:text-white md:pb-0">
            <JsonLd data={buildDentistSchema()} />
            <JsonLd
                data={buildServiceSchema({
                    name: 'Invisalign em Betim',
                    description:
                        'Página premium de Invisalign em Betim com foco em conversão, autoridade clínica e busca local para aparelho invisível.',
                    path: '/invisalign-betim',
                })}
            />
            <JsonLd data={buildFaqSchema(faqItems)} />
            <JsonLd
                data={buildBreadcrumbSchema([
                    { name: 'Início', path: '/' },
                    { name: 'Invisalign em Betim', path: '/invisalign-betim' },
                ])}
            />

            <Navbar />

            <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top_left,rgba(14,165,233,0.18),transparent_42%),radial-gradient(circle_at_top_right,rgba(56,189,248,0.16),transparent_40%),linear-gradient(180deg,#f4fbff,#ffffff)] pb-16 pt-28 md:pb-24 md:pt-36">
                <div className="mx-auto grid max-w-6xl gap-8 px-5 md:grid-cols-[1.1fr_0.9fr] md:items-center md:px-6">
                    <div>
                        <p className="inline-flex rounded-full border border-[#bde7ff] bg-white/90 px-4 py-2 text-[10px] font-black uppercase tracking-[0.22em] text-[#0284c7] md:text-xs">
                            Invisalign em Betim
                        </p>
                        <h1 className="mt-5 max-w-4xl text-4xl font-black leading-[1.03] md:text-6xl">
                            Invisalign em Betim para alinhar seu sorriso com discrição e tecnologia
                        </h1>
                        <p className="mt-5 max-w-3xl text-sm leading-7 text-slate-600 md:text-lg md:leading-8">
                            Para quem busca um tratamento premium com menos interferência na rotina. Com <strong>Dr. Jefferson Reis, Invisalign Doctor</strong>,
                            você recebe planejamento individual e clareza sobre etapas, tempo e investimento.
                        </p>
                        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                            <PrimaryCta />
                            <Link
                                href="#preco"
                                className="inline-flex min-h-12 items-center justify-center rounded-full border border-[#0f172a] px-7 text-xs font-black uppercase tracking-[0.15em] text-[#0f172a] transition hover:bg-[#0f172a] hover:text-white"
                            >
                                Ver preço e condições
                            </Link>
                        </div>
                        <div className="mt-6 grid gap-2 text-xs font-semibold text-slate-600 md:text-sm">
                            <p>Invisalign Doctor Betim • Planejamento digital • Conversa rápida no WhatsApp</p>
                            <p>SEO local forte: Invisalign Betim, alinhadores invisíveis Betim, aparelho invisível preço Betim.</p>
                        </div>
                    </div>

                    <div className="rounded-[30px] border border-[#dbefff] bg-white p-3 shadow-[0_24px_80px_rgba(2,132,199,0.15)]">
                        <div className="relative h-72 overflow-hidden rounded-[22px] md:h-[31rem]">
                            <Image
                                src="/assets/Dr Jeff_edited.avif"
                                alt="Dr. Jefferson Reis Invisalign Doctor em Betim"
                                fill
                                sizes="(max-width: 768px) 100vw, 42vw"
                                className="object-cover object-top"
                                priority
                            />
                            <div className="absolute bottom-3 left-3 rounded-full border border-white/40 bg-[#0f172a]/65 px-3 py-2 text-[10px] font-black uppercase tracking-[0.18em] text-white backdrop-blur">
                                Invisalign Doctor
                            </div>
                        </div>
                        <div className="mt-3 grid gap-2 sm:grid-cols-2">
                            <p className="rounded-xl border border-[#dbefff] bg-[#f7fcff] px-3 py-2 text-xs font-semibold text-slate-700 md:text-sm">Discrição real</p>
                            <p className="rounded-xl border border-[#dbefff] bg-[#f7fcff] px-3 py-2 text-xs font-semibold text-slate-700 md:text-sm">Previsibilidade clínica</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-[#0b1220] py-14 text-white md:py-18">
                <div className="mx-auto max-w-6xl px-5 md:px-6">
                    <p className="text-xs font-black uppercase tracking-[0.3em] text-[#38bdf8]">Invisalign Experience</p>
                    <h2 className="mt-4 max-w-4xl text-3xl font-black leading-tight md:text-5xl">
                        Mais do que alinhar dentes. É sobre liberdade para sorrir sem exposição.
                    </h2>
                    <p className="mt-4 max-w-3xl text-sm leading-7 text-white/75 md:text-base md:leading-8">
                        Uma experiência premium para quem quer correção estética com discrição e segurança, sem abrir mão da rotina.
                    </p>
                    <div className="mt-7 grid gap-3 md:grid-cols-3">
                        {quizCards.map((item) => (
                            <article key={item.title} className="rounded-2xl border border-white/12 bg-white/[0.05] p-5 transition hover:bg-white/[0.08]">
                                <h3 className="text-base font-black text-white">{item.title}</h3>
                                <p className="mt-2 text-sm leading-7 text-white/75">{item.text}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="bg-white py-14 md:py-18">
                <div className="mx-auto grid max-w-6xl gap-5 px-5 md:px-6">
                    <div className="grid gap-5 md:grid-cols-2">
                        <article className="rounded-[24px] border border-[#dbefff] bg-[#f7fcff] p-6 md:p-8">
                            <h2 className="text-2xl font-black leading-tight md:text-3xl">Invisalign x aparelho fixo</h2>
                            <ul className="mt-4 grid gap-2 text-sm leading-7 text-slate-700 md:text-base md:leading-8">
                                <li><strong>Visual:</strong> alinhadores transparentes, quase imperceptíveis</li>
                                <li><strong>Rotina:</strong> removível para comer e higienizar</li>
                                <li><strong>Conforto:</strong> sem fios e braquetes metálicos</li>
                                <li><strong>Planejamento:</strong> estratégia digital de movimentos</li>
                            </ul>
                        </article>

                        <article id="preco" className="rounded-[24px] border border-[#dbefff] bg-[#f7fcff] p-6 md:p-8">
                            <h2 className="text-2xl font-black leading-tight md:text-3xl">Quanto custa Invisalign em Betim?</h2>
                            <p className="mt-4 text-sm leading-7 text-slate-700 md:text-base md:leading-8">
                                Se você busca <strong>quanto custa Invisalign em Betim</strong> ou <strong>aparelho invisível preço em Betim</strong>,
                                o valor depende de complexidade, duração e número de alinhadores.
                            </p>
                            <p className="mt-3 text-sm leading-7 text-slate-700 md:text-base md:leading-8">
                                A avaliação com Invisalign Doctor em Betim define seu plano e o investimento real, sem promessa genérica.
                            </p>
                            <PrimaryCta className="mt-5" label="Quero saber meu investimento" />
                        </article>
                    </div>

                    <MidCta />

                    <article className="rounded-[24px] border border-[#dbefff] bg-[#f7fcff] p-6 md:p-8">
                        <h2 className="text-2xl font-black leading-tight md:text-3xl">3 passos para transformar o sorriso com Invisalign</h2>
                        <div className="mt-4 grid gap-3 md:grid-cols-3">
                            {steps.map((step, index) => (
                                <div key={step.title} className="rounded-xl border border-[#dbefff] bg-white px-4 py-4 transition hover:border-[#7dd3fc]">
                                    <p className="text-xs font-black uppercase tracking-[0.18em] text-[#0284c7]">Passo {index + 1}</p>
                                    <h3 className="mt-2 text-base font-black text-[#0f172a]">{step.title}</h3>
                                    <p className="mt-2 text-sm leading-7 text-slate-600">{step.text}</p>
                                </div>
                            ))}
                        </div>
                    </article>

                    {socialProof.length ? (
                        <article className="rounded-[24px] border border-[#dbefff] bg-[#f7fcff] p-6 md:p-8">
                            <h2 className="text-2xl font-black leading-tight md:text-3xl">Histórias reais da Clínica Inova</h2>
                            <p className="mt-4 text-sm leading-7 text-slate-700 md:text-base md:leading-8">
                                Pacientes reais em jornada de alinhamento com acompanhamento clínico e planejamento individual.
                            </p>
                            <div className="mt-5 grid gap-3 md:grid-cols-2 lg:grid-cols-4">
                                {socialProof.map((item) => (
                                    <article key={item.filename} className="rounded-[18px] border border-[#dbefff] bg-white p-3 transition hover:-translate-y-1 hover:shadow-[0_14px_30px_rgba(2,132,199,0.12)]">
                                        <div className="relative h-36 overflow-hidden rounded-xl border border-[#dbefff]">
                                            <Image
                                                src={item.src}
                                                alt={item.alt}
                                                fill
                                                sizes="(max-width: 1024px) 100vw, 24vw"
                                                className="object-cover object-top"
                                            />
                                        </div>
                                        <p className="mt-3 text-sm font-black text-[#0f172a]">{item.name}</p>
                                        <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.16em] text-[#0284c7]">
                                            {item.eyebrow || 'Jornada de cuidado'}
                                        </p>
                                    </article>
                                ))}
                            </div>
                        </article>
                    ) : null}

                    <article className="rounded-[24px] border border-[#dbefff] bg-[#f7fcff] p-6 md:p-8">
                        <h2 className="text-2xl font-black leading-tight md:text-3xl">FAQ Invisalign Betim</h2>
                        <div className="mt-4 grid gap-3">
                            {faqItems.map((faq) => (
                                <div key={faq.q} className="rounded-xl border border-[#dbefff] bg-white px-4 py-4">
                                    <h3 className="text-base font-black text-[#0f172a]">{faq.q}</h3>
                                    <p className="mt-2 text-sm leading-7 text-slate-600">{faq.a}</p>
                                </div>
                            ))}
                        </div>
                    </article>

                    <section className="rounded-[32px] border border-[#93d7ff] bg-[linear-gradient(140deg,#0b1220,#0b2a46,#0284c7)] px-6 py-8 text-white md:px-10 md:py-11">
                        <p className="text-xs font-black uppercase tracking-[0.28em] text-[#7dd3fc]">Invisalign Doctor Betim</p>
                        <h2 className="mt-4 max-w-3xl text-3xl font-black leading-tight md:text-5xl">
                            Quer entender se Invisalign é o melhor caminho para o seu sorriso?
                        </h2>
                        <p className="mt-4 max-w-2xl text-sm leading-7 text-white/82 md:text-base md:leading-8">
                            Fale com a Clínica Inova e receba orientação inicial clara sobre indicação, etapas e investimento do seu tratamento Invisalign em Betim.
                        </p>
                        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                            <PrimaryCta className="bg-white text-[#0f172a] hover:bg-[#dff3ff]" label="Falar com a clínica agora" />
                            <Link
                                href="/alinhadores-invisiveis-betim"
                                className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/35 px-7 text-xs font-black uppercase tracking-[0.15em] text-white transition hover:bg-white/10"
                            >
                                Ver alinhadores invisíveis
                            </Link>
                        </div>
                    </section>
                </div>
            </section>

            <Footer />
            <ChatWidget />
            <MobileStickyCTA />
        </main>
    );
}
