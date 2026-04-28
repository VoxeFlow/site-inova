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
        a: 'Sim, quando há indicação correta e acompanhamento. O planejamento digital ajuda na previsibilidade dos movimentos dentários.',
    },
    {
        q: 'Quanto custa Invisalign em Betim?',
        a: 'O valor depende da complexidade do caso, tempo de tratamento e número de placas. A avaliação clínica define o investimento com clareza.',
    },
    {
        q: 'Aparelho invisível preço em Betim é muito alto?',
        a: 'Cada caso tem um planejamento diferente. Por isso, o preço do aparelho invisível em Betim deve ser definido após avaliação individual.',
    },
    {
        q: 'Invisalign dói?',
        a: 'É comum sentir uma pressão leve no início de cada troca de alinhador, geralmente temporária e esperada no processo.',
    },
    {
        q: 'Qual a diferença entre Invisalign e alinhadores invisíveis?',
        a: 'Invisalign é uma marca de alinhadores invisíveis. A indicação depende do seu caso e da estratégia clínica definida na avaliação.',
    },
    {
        q: 'Preciso de Invisalign Doctor em Betim?',
        a: 'Ter um Invisalign Doctor em Betim ajuda na condução do planejamento e acompanhamento, trazendo mais segurança para cada etapa.',
    },
];

const journey = [
    {
        title: '1. Diagnóstico estratégico',
        copy: 'Entendemos sua queixa principal, rotina e expectativa estética.',
    },
    {
        title: '2. Planejamento digital',
        copy: 'Definimos os movimentos dos dentes para dar previsibilidade ao tratamento.',
    },
    {
        title: '3. Trocas com acompanhamento',
        copy: 'Você usa os alinhadores com revisões periódicas para ajustes finos.',
    },
    {
        title: '4. Finalização e retenção',
        copy: 'Consolidamos o resultado e protegemos o alinhamento alcançado.',
    },
];

export const metadata = buildMetadata({
    title: 'Invisalign em Betim | Invisalign Doctor na Clínica Inova',
    description:
        'Invisalign em Betim com Invisalign Doctor, planejamento digital e acompanhamento personalizado. Entenda preço, etapas e indicação do seu caso.',
    path: '/invisalign-betim',
    keywords: [
        'invisalign betim',
        'invisalign doctor betim',
        'alinhadores invisíveis betim',
        'aparelho invisível preço betim',
        'quanto custa invisalign em betim',
    ],
});

function MainCta({ label = 'Quero saber se Invisalign é pra mim', className = '' }) {
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

function MidCta() {
    return (
        <div className="rounded-[24px] border border-brand-gold/35 bg-[linear-gradient(120deg,#f9f4ea,#f4ecdf)] px-6 py-6 md:px-8">
            <p className="text-sm font-semibold leading-7 text-txt-primary md:text-base md:leading-8">
                Se você pesquisou Invisalign em Betim ou aparelho invisível preço em Betim, o melhor próximo passo é uma avaliação para entender o seu caso com clareza.
            </p>
            <MainCta className="mt-4" label="Quero entender meu caso agora" />
        </div>
    );
}

export default function InvisalignBetimPage() {
    const socialProof = getPatientGalleryImages().slice(0, 8);

    return (
        <main className="min-h-screen bg-white pb-24 text-txt-primary selection:bg-brand-gold selection:text-white md:pb-0">
            <JsonLd data={buildDentistSchema()} />
            <JsonLd
                data={buildServiceSchema({
                    name: 'Invisalign em Betim',
                    description:
                        'Página de Invisalign em Betim com foco em conversão, autoridade clínica e SEO local para alinhadores invisíveis.',
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

            <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top_left,rgba(197,164,126,0.22),transparent_42%),radial-gradient(circle_at_top_right,rgba(18,18,18,0.12),transparent_40%),linear-gradient(180deg,#f8f6f2,white)] pb-16 pt-28 md:pb-22 md:pt-34">
                <div className="mx-auto grid max-w-6xl gap-8 px-5 md:grid-cols-[1.05fr_0.95fr] md:items-center md:px-6">
                    <div>
                        <p className="inline-flex rounded-full border border-black/10 bg-white/90 px-4 py-2 text-[10px] font-black uppercase tracking-[0.22em] text-brand-gold md:text-xs">
                            Invisalign em Betim
                        </p>
                        <h1 className="mt-5 max-w-4xl text-4xl font-black leading-[1.04] md:text-6xl">
                            O sorriso que você quer, com a discrição que sua rotina pede
                        </h1>
                        <p className="mt-5 max-w-3xl text-sm leading-7 text-gray-600 md:text-lg md:leading-8">
                            Invisalign em Betim para quem busca alinhamento sem aparência metálica, com planejamento digital e acompanhamento próximo.
                            Sou <strong>Dr. Jefferson Reis, Invisalign Doctor</strong>, e meu foco é te dar clareza de decisão em cada etapa.
                        </p>

                        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                            <MainCta />
                            <Link
                                href="#investimento"
                                className="inline-flex min-h-12 items-center justify-center rounded-full border border-txt-primary px-7 text-xs font-black uppercase tracking-[0.15em] text-txt-primary transition hover:bg-txt-primary hover:text-white"
                            >
                                Ver valores e etapas
                            </Link>
                        </div>

                        <div className="mt-6 grid gap-2 text-xs font-semibold text-gray-600 md:text-sm">
                            <p>Invisalign Doctor Betim • Planejamento individual • Atendimento via WhatsApp</p>
                            <p>Termos de busca cobertos: Invisalign Betim, alinhadores invisíveis Betim, aparelho invisível preço Betim.</p>
                        </div>
                    </div>

                    <div className="rounded-[30px] border border-black/8 bg-white p-3 shadow-[0_22px_70px_rgba(0,0,0,0.10)] transition duration-500 hover:-translate-y-1">
                        <div className="relative h-72 overflow-hidden rounded-[22px] md:h-[31rem]">
                            <Image
                                src="/assets/Dr Jeff_edited.avif"
                                alt="Dr. Jefferson Reis Invisalign Doctor em Betim"
                                fill
                                sizes="(max-width: 768px) 100vw, 42vw"
                                className="object-cover object-top"
                                priority
                            />
                            <div className="absolute bottom-3 left-3 rounded-full border border-white/40 bg-black/45 px-3 py-2 text-[10px] font-black uppercase tracking-[0.18em] text-white backdrop-blur">
                                Invisalign Doctor
                            </div>
                        </div>
                        <div className="mt-3 grid gap-2 sm:grid-cols-2">
                            <p className="rounded-xl border border-black/8 bg-[#fbfaf8] px-3 py-2 text-xs font-semibold text-gray-700 md:text-sm">Planejamento digital</p>
                            <p className="rounded-xl border border-black/8 bg-[#fbfaf8] px-3 py-2 text-xs font-semibold text-gray-700 md:text-sm">Conforto e discrição</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-[#121212] py-14 text-white md:py-18">
                <div className="mx-auto max-w-6xl px-5 md:px-6">
                    <p className="text-xs font-black uppercase tracking-[0.3em] text-brand-gold">Por que Invisalign</p>
                    <h2 className="mt-4 max-w-4xl text-3xl font-black leading-tight md:text-5xl">
                        Quem escolhe Invisalign normalmente não busca só alinhar os dentes. Busca liberdade.
                    </h2>
                    <p className="mt-4 max-w-3xl text-sm leading-7 text-white/75 md:text-base md:leading-8">
                        Liberdade para sorrir sem constrangimento, para manter sua rotina sem metal aparente e para decidir com segurança.
                    </p>
                    <div className="mt-7 grid gap-3 md:grid-cols-3">
                        {[
                            'Mais discrição em reuniões, fotos e eventos',
                            'Removível para comer e higienizar',
                            'Previsibilidade com acompanhamento clínico próximo',
                        ].map((item) => (
                            <article key={item} className="rounded-2xl border border-white/12 bg-white/[0.05] p-4 text-sm leading-7 text-white/85 transition hover:bg-white/[0.08]">
                                {item}
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="bg-white py-14 md:py-18">
                <div className="mx-auto grid max-w-6xl gap-5 px-5 md:px-6">
                    <div className="grid gap-5 md:grid-cols-2">
                        <article className="rounded-[24px] border border-black/8 bg-[#fbfaf8] p-6 md:p-8">
                            <h2 className="text-2xl font-black leading-tight md:text-3xl">Invisalign x aparelho fixo</h2>
                            <ul className="mt-4 grid gap-2 text-sm leading-7 text-gray-700 md:text-base md:leading-8">
                                <li><strong>Discrição:</strong> alinhadores transparentes quase imperceptíveis</li>
                                <li><strong>Conforto:</strong> sem fios e braquetes metálicos</li>
                                <li><strong>Rotina:</strong> removível para alimentação e higiene</li>
                                <li><strong>Planejamento:</strong> estratégia digital para prever etapas</li>
                            </ul>
                        </article>

                        <article id="investimento" className="rounded-[24px] border border-black/8 bg-[#fbfaf8] p-6 md:p-8">
                            <h2 className="text-2xl font-black leading-tight md:text-3xl">Quanto custa Invisalign em Betim?</h2>
                            <p className="mt-4 text-sm leading-7 text-gray-600 md:text-base md:leading-8">
                                Se você pesquisou <strong>quanto custa Invisalign em Betim</strong> ou <strong>aparelho invisível preço em Betim</strong>, saiba que o valor varia conforme complexidade, duração e número de alinhadores.
                            </p>
                            <p className="mt-3 text-sm leading-7 text-gray-600 md:text-base md:leading-8">
                                Por isso, a avaliação individual é a forma mais segura de entender investimento, prazo e previsão do seu tratamento.
                            </p>
                            <MainCta className="mt-5" label="Quero saber meu investimento" />
                        </article>
                    </div>

                    <MidCta />

                    <article className="rounded-[24px] border border-black/8 bg-[#fbfaf8] p-6 md:p-8">
                        <h2 className="text-2xl font-black leading-tight md:text-3xl">Como funciona seu tratamento com Invisalign</h2>
                        <div className="mt-4 grid gap-3 md:grid-cols-2">
                            {journey.map((step) => (
                                <div key={step.title} className="rounded-xl border border-black/6 bg-white px-4 py-4 transition hover:border-brand-gold/50">
                                    <h3 className="text-base font-black text-txt-primary">{step.title}</h3>
                                    <p className="mt-2 text-sm leading-7 text-gray-600">{step.copy}</p>
                                </div>
                            ))}
                        </div>
                    </article>

                    {socialProof.length ? (
                        <article className="rounded-[24px] border border-black/8 bg-[#fbfaf8] p-6 md:p-8">
                            <h2 className="text-2xl font-black leading-tight md:text-3xl">Prova social e presença clínica</h2>
                            <p className="mt-4 text-sm leading-7 text-gray-600 md:text-base md:leading-8">
                                Pacientes reais da Clínica Inova em jornadas de cuidado com alinhadores invisíveis e planejamento individual.
                            </p>
                            <div className="mt-5 grid gap-3 md:grid-cols-2 lg:grid-cols-4">
                                {socialProof.map((item) => (
                                    <article key={item.filename} className="rounded-[18px] border border-black/8 bg-white p-3 transition hover:-translate-y-1 hover:shadow-[0_12px_28px_rgba(0,0,0,0.08)]">
                                        <div className="relative h-36 overflow-hidden rounded-xl border border-black/8">
                                            <Image
                                                src={item.src}
                                                alt={item.alt}
                                                fill
                                                sizes="(max-width: 1024px) 100vw, 24vw"
                                                className="object-cover object-top"
                                            />
                                        </div>
                                        <p className="mt-3 text-sm font-black text-txt-primary">{item.name}</p>
                                        <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.16em] text-brand-gold">
                                            {item.eyebrow || 'Jornada de cuidado'}
                                        </p>
                                    </article>
                                ))}
                            </div>
                        </article>
                    ) : null}

                    <article className="rounded-[24px] border border-black/8 bg-[#fbfaf8] p-6 md:p-8">
                        <h2 className="text-2xl font-black leading-tight md:text-3xl">FAQ Invisalign Betim</h2>
                        <div className="mt-4 grid gap-3">
                            {faqItems.map((faq) => (
                                <div key={faq.q} className="rounded-xl border border-black/6 bg-white px-4 py-4">
                                    <h3 className="text-base font-black text-txt-primary">{faq.q}</h3>
                                    <p className="mt-2 text-sm leading-7 text-gray-600">{faq.a}</p>
                                </div>
                            ))}
                        </div>
                    </article>

                    <section className="rounded-[30px] border border-black/10 bg-[linear-gradient(140deg,#141414,#1f1f1f,#7d673f)] px-6 py-8 text-white md:px-10 md:py-10">
                        <p className="text-xs font-black uppercase tracking-[0.28em] text-brand-gold">Invisalign Doctor Betim</p>
                        <h2 className="mt-4 max-w-3xl text-3xl font-black leading-tight md:text-5xl">
                            Se você quer alinhar seu sorriso com segurança, esse é o momento de entender seu caso.
                        </h2>
                        <p className="mt-4 max-w-2xl text-sm leading-7 text-white/80 md:text-base md:leading-8">
                            Fale com a clínica e receba orientação inicial sobre indicação, prazo e investimento do seu tratamento com Invisalign em Betim.
                        </p>
                        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                            <MainCta className="bg-white text-txt-primary hover:bg-[#f1e5d0]" label="Falar com a clínica agora" />
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
