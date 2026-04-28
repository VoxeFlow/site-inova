import Image from 'next/image';
import Link from 'next/link';
import WhatsAppTrackedLink from '@/components/WhatsAppTrackedLink';

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
        q: 'Alinhador invisível funciona mesmo?',
        a: 'Funciona quando há indicação correta e acompanhamento. O resultado depende de planejamento e adesão ao uso diário.',
    },
    {
        q: 'Quanto custa alinhador invisível em Betim?',
        a: 'O valor varia conforme a complexidade e o número de etapas. A avaliação mostra com clareza o investimento para o seu caso.',
    },
    {
        q: 'Invisalign e alinhador invisível são a mesma coisa?',
        a: 'Invisalign é uma marca de alinhadores. A indicação é definida após avaliação clínica e planejamento ortodôntico.',
    },
    {
        q: 'Dói usar alinhadores?',
        a: 'Pode haver pressão leve nos primeiros dias de cada troca, normalmente transitória e esperada no processo.',
    },
    {
        q: 'Quanto tempo dura o tratamento?',
        a: 'Depende do grau de desalinhamento e da constância no uso das placas. A previsão é definida na avaliação.',
    },
];

const journeySteps = [
    {
        title: '1. Avaliação individual',
        copy: 'Entendemos o que te incomoda no sorriso e o que você quer corrigir.',
    },
    {
        title: '2. Planejamento digital',
        copy: 'Mapeamos a movimentação dos dentes para dar mais previsibilidade ao tratamento.',
    },
    {
        title: '3. Uso orientado',
        copy: 'Você recebe suas placas e orientações claras de tempo de uso e rotina.',
    },
    {
        title: '4. Acompanhamento',
        copy: 'Revisões periódicas para ajustes, segurança clínica e evolução consistente.',
    },
];

export const metadata = buildMetadata({
    title: 'Alinhadores Invisíveis em Betim | Clínica Inova',
    description:
        'Alinhadores invisíveis em Betim com planejamento individual, discrição no dia a dia e acompanhamento próximo com Invisalign Doctor.',
    path: '/alinhadores-invisiveis-betim',
    keywords: [
        'alinhadores invisíveis betim',
        'aparelho invisível preço betim',
        'invisalign betim',
        'dentista em betim',
    ],
});

function MidCta({ label = 'Quero alinhar meu sorriso' }) {
    return (
        <div className="rounded-[24px] border border-brand-gold/30 bg-[linear-gradient(120deg,#f8f4ea,#f3ede2)] px-5 py-5 md:px-7 md:py-6">
            <p className="text-sm leading-7 text-txt-primary md:text-base">
                Quanto antes você entende seu caso, mais simples fica decidir o próximo passo com segurança.
            </p>
            <WhatsAppTrackedLink
                href={WHATSAPP_URL}
                target="_blank"
                className="mt-4 inline-flex min-h-11 items-center justify-center rounded-full bg-txt-primary px-5 text-xs font-black uppercase tracking-[0.14em] text-white transition hover:bg-brand-gold"
            >
                {label}
            </WhatsAppTrackedLink>
        </div>
    );
}

export default function AlinhadoresInvisiveisBetimPage() {
    const patientCases = getPatientGalleryImages().slice(0, 8);

    return (
        <main className="min-h-screen bg-white pb-24 text-txt-primary selection:bg-brand-gold selection:text-white md:pb-0">
            <JsonLd data={buildDentistSchema()} />
            <JsonLd
                data={buildServiceSchema({
                    name: 'Alinhadores invisíveis em Betim',
                    description:
                        'Página sobre alinhadores invisíveis em Betim com foco em discrição, planejamento individual e conversão via WhatsApp.',
                    path: '/alinhadores-invisiveis-betim',
                })}
            />
            <JsonLd data={buildFaqSchema(faqItems)} />
            <JsonLd
                data={buildBreadcrumbSchema([
                    { name: 'Início', path: '/' },
                    { name: 'Alinhadores invisíveis em Betim', path: '/alinhadores-invisiveis-betim' },
                ])}
            />

            <Navbar />

            <section className="bg-[radial-gradient(circle_at_top_left,rgba(197,164,126,0.22),transparent_45%),linear-gradient(180deg,#f8f6f2,white)] pb-16 pt-28 md:pb-20 md:pt-34">
                <div className="mx-auto grid max-w-6xl gap-8 px-5 md:grid-cols-[1.05fr_0.95fr] md:items-center md:px-6">
                    <div>
                        <p className="text-xs font-black uppercase tracking-[0.3em] text-brand-gold">Alinhadores invisíveis em Betim</p>
                        <h1 className="mt-5 max-w-4xl text-4xl font-black leading-tight md:text-6xl">
                            Corrija seu sorriso com discrição e planejamento claro
                        </h1>
                        <p className="mt-5 max-w-3xl text-sm leading-7 text-gray-600 md:text-lg md:leading-8">
                            Se você evita o aparelho metálico por estética ou rotina, os alinhadores invisíveis podem ser o caminho para alinhar os dentes com conforto e previsibilidade.
                        </p>
                        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                            <WhatsAppTrackedLink
                                href={WHATSAPP_URL}
                                target="_blank"
                                className="inline-flex min-h-12 items-center justify-center rounded-full bg-txt-primary px-7 text-xs font-black uppercase tracking-[0.15em] text-white transition hover:bg-brand-gold"
                            >
                                Quero alinhar meu sorriso
                            </WhatsAppTrackedLink>
                            <Link
                                href="/invisalign-betim"
                                className="inline-flex min-h-12 items-center justify-center rounded-full border border-txt-primary px-7 text-xs font-black uppercase tracking-[0.15em] text-txt-primary transition hover:bg-txt-primary hover:text-white"
                            >
                                Ver Invisalign
                            </Link>
                        </div>
                    </div>

                    <div className="rounded-[26px] border border-black/8 bg-white p-3 shadow-[0_18px_70px_rgba(0,0,0,0.08)]">
                        <div className="relative h-72 overflow-hidden rounded-[20px] md:h-[26rem]">
                            <Image
                                src="/assets/img-alinhadores.jpeg"
                                alt="Paciente em avaliação com alinhadores invisíveis"
                                fill
                                sizes="(max-width: 768px) 100vw, 42vw"
                                className="object-cover"
                                priority
                            />
                        </div>
                        <div className="mt-3 grid gap-2 sm:grid-cols-2">
                            <p className="rounded-xl border border-black/8 bg-[#fbfaf8] px-3 py-2 text-xs font-semibold text-gray-700 md:text-sm">Mais discrição no dia a dia</p>
                            <p className="rounded-xl border border-black/8 bg-[#fbfaf8] px-3 py-2 text-xs font-semibold text-gray-700 md:text-sm">Planejamento individual</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-[#121212] py-14 text-white md:py-18">
                <div className="mx-auto max-w-6xl px-5 md:px-6">
                    <p className="text-xs font-black uppercase tracking-[0.28em] text-brand-gold">Storytelling clínico</p>
                    <h2 className="mt-4 max-w-4xl text-3xl font-black leading-tight md:text-5xl">Quem procura alinhadores, geralmente não busca só estética.</h2>
                    <p className="mt-4 max-w-3xl text-sm leading-7 text-white/75 md:text-base md:leading-8">
                        Na prática, a dor costuma ser uma mistura de insegurança para sorrir, incômodo com dentes desalinhados e vontade de tratar sem exposição.
                    </p>
                    <div className="mt-7 grid gap-3 md:grid-cols-3">
                        {[
                            'Sorrir sem esconder os dentes',
                            'Alinhar com discrição no trabalho e na rotina social',
                            'Decidir com clareza, sem promessa exagerada',
                        ].map((item) => (
                            <article key={item} className="rounded-2xl border border-white/10 bg-white/[0.05] p-4 text-sm leading-7 text-white/85">
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
                            <h2 className="text-2xl font-black leading-tight md:text-3xl">Para quem é indicado</h2>
                            <ul className="mt-4 grid gap-2 text-sm leading-7 text-gray-700 md:text-base md:leading-8">
                                <li>Quem quer alinhamento sem aparelho metálico aparente</li>
                                <li>Quem busca mais conforto no dia a dia</li>
                                <li>Adultos e adolescentes com indicação ortodôntica</li>
                                <li>Pacientes que querem previsibilidade de etapas</li>
                            </ul>
                        </article>

                        <article className="rounded-[24px] border border-black/8 bg-[#fbfaf8] p-6 md:p-8">
                            <h2 className="text-2xl font-black leading-tight md:text-3xl">Como funciona</h2>
                            <div className="mt-4 grid gap-3">
                                {journeySteps.map((step) => (
                                    <div key={step.title} className="rounded-xl border border-black/6 bg-white px-4 py-4">
                                        <h3 className="text-base font-black text-txt-primary">{step.title}</h3>
                                        <p className="mt-1 text-sm leading-7 text-gray-600">{step.copy}</p>
                                    </div>
                                ))}
                            </div>
                        </article>
                    </div>

                    <MidCta />

                    <article className="rounded-[24px] border border-black/8 bg-[#fbfaf8] p-6 md:p-8">
                        <h2 className="text-2xl font-black leading-tight md:text-3xl">Avaliação com Dr. Jefferson Reis</h2>
                        <div className="mt-5 grid gap-5 md:grid-cols-[0.88fr_1.12fr] md:items-center">
                            <div className="relative h-64 overflow-hidden rounded-[20px] border border-black/8 bg-white md:h-80">
                                <Image
                                    src="/assets/Dr Jeff_edited.avif"
                                    alt="Dr. Jefferson Reis"
                                    fill
                                    sizes="(max-width: 768px) 100vw, 35vw"
                                    className="object-cover object-top"
                                />
                            </div>
                            <div>
                                <p className="text-xs font-black uppercase tracking-[0.24em] text-brand-gold">Invisalign Doctor</p>
                                <h3 className="mt-3 text-2xl font-black leading-tight text-txt-primary md:text-3xl">Mais pessoalidade, menos tratamento genérico</h3>
                                <p className="mt-4 text-sm leading-7 text-gray-600 md:text-base md:leading-8">
                                    Aqui o foco é entender seu caso com calma, explicar opções reais e te dar segurança para decidir o melhor caminho para o seu sorriso.
                                </p>
                                <WhatsAppTrackedLink
                                    href={WHATSAPP_URL}
                                    target="_blank"
                                    className="mt-5 inline-flex min-h-11 items-center justify-center rounded-full bg-brand-gold px-5 text-xs font-black uppercase tracking-[0.14em] text-white transition hover:bg-brand-gold-dark"
                                >
                                    Falar com a clínica agora
                                </WhatsAppTrackedLink>
                            </div>
                        </div>
                    </article>

                    {patientCases.length ? (
                        <article className="rounded-[24px] border border-black/8 bg-[#fbfaf8] p-6 md:p-8">
                            <h2 className="text-2xl font-black leading-tight md:text-3xl">Prova social com pacientes da clínica</h2>
                            <p className="mt-4 text-sm leading-7 text-gray-600 md:text-base md:leading-8">
                                Histórias reais de pacientes em jornada de cuidado, com planejamento individual e acompanhamento profissional.
                            </p>
                            <div className="mt-5 grid gap-3 md:grid-cols-2 lg:grid-cols-4">
                                {patientCases.map((item) => (
                                    <article key={item.filename} className="rounded-[18px] border border-black/8 bg-white p-3">
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

                    <MidCta label="Quero entender meu caso" />
                </div>
            </section>

            <Footer />
            <ChatWidget />
            <MobileStickyCTA />
        </main>
    );
}
