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

const faqItems = [
    {
        q: 'Alinhador funciona mesmo?',
        a: 'Quando bem indicado e acompanhado, os alinhadores invisíveis podem corrigir alinhamento com boa previsibilidade.',
    },
    {
        q: 'Quanto custa alinhador invisível em Betim?',
        a: 'O valor depende da complexidade do caso e do planejamento. A avaliação mostra com mais clareza o investimento para o seu sorriso.',
    },
    {
        q: 'Demora quanto tempo?',
        a: 'O tempo varia conforme o grau de desalinhamento e o uso correto das placas durante o tratamento.',
    },
    {
        q: 'Posso tirar os alinhadores?',
        a: 'Sim. Eles são removíveis para comer e higienizar, seguindo as orientações clínicas.',
    },
    {
        q: 'Preciso ir à clínica durante o tratamento?',
        a: 'Sim. O acompanhamento periódico é importante para avaliar evolução, fazer ajustes e manter previsibilidade.',
    },
    {
        q: 'Invisalign e alinhador invisível são a mesma coisa?',
        a: 'Invisalign é uma marca de alinhador invisível. A indicação depende do seu caso e do planejamento clínico.',
    },
];

export const metadata = buildMetadata({
    title: 'Alinhadores Invisíveis em Betim | Clínica Inova',
    description:
        'Alinhadores invisíveis em Betim para corrigir o sorriso com discrição, conforto e planejamento individual.',
    path: '/alinhadores-invisiveis-betim',
    keywords: ['alinhadores invisíveis betim', 'aparelho invisível preço betim', 'alinhador transparente betim'],
});

function MidCta({ label = 'Quero alinhar meu sorriso' }) {
    return (
        <div className="my-8 rounded-[22px] border border-brand-gold/35 bg-[#f7f3ea] px-5 py-5 md:my-10 md:px-6">
            <p className="text-sm font-semibold leading-7 text-txt-primary">
                Quer entender se alinhadores invisíveis são a melhor escolha para o seu caso?
            </p>
            <Link
                href="https://wa.me/553126260038"
                target="_blank"
                className="mt-4 inline-flex min-h-11 items-center justify-center rounded-full bg-txt-primary px-5 text-xs font-black uppercase tracking-[0.14em] text-white transition hover:bg-brand-gold"
            >
                {label}
            </Link>
        </div>
    );
}

export default function AlinhadoresInvisiveisBetimPage() {
    const patientCases = getPatientGalleryImages().slice(0, 6);

    return (
        <main className="min-h-screen bg-white pb-24 text-txt-primary selection:bg-brand-gold selection:text-white md:pb-0">
            <JsonLd data={buildDentistSchema()} />
            <JsonLd
                data={buildServiceSchema({
                    name: 'Alinhadores invisíveis em Betim',
                    description:
                        'Página sobre alinhadores invisíveis em Betim para pacientes que buscam discrição, conforto e previsibilidade ortodôntica.',
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

            <section className="bg-[linear-gradient(180deg,#f8f6f2,white)] pb-14 pt-28 md:pb-18 md:pt-34">
                <div className="mx-auto max-w-6xl px-5 md:px-6">
                    <p className="text-xs font-black uppercase tracking-[0.3em] text-brand-gold">Ortodontia estética</p>
                    <h1 className="mt-5 max-w-4xl text-4xl font-black leading-tight md:text-6xl">
                        Alinhadores invisíveis em Betim para corrigir seu sorriso com discrição
                    </h1>
                    <p className="mt-5 max-w-3xl text-sm leading-7 text-gray-600 md:text-lg md:leading-8">
                        Se você evita sorrir em fotos, sente incômodo com dentes desalinhados ou não quer aparelho metálico aparente, os alinhadores podem ser um caminho mais confortável e discreto.
                    </p>
                    <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                        <Link
                            href="https://wa.me/553126260038"
                            target="_blank"
                            className="inline-flex min-h-12 items-center justify-center rounded-full bg-txt-primary px-7 text-xs font-black uppercase tracking-[0.15em] text-white transition hover:bg-brand-gold"
                        >
                            Quero alinhar meu sorriso
                        </Link>
                        <Link
                            href="/invisalign-betim"
                            className="inline-flex min-h-12 items-center justify-center rounded-full border border-txt-primary px-7 text-xs font-black uppercase tracking-[0.15em] text-txt-primary transition hover:bg-txt-primary hover:text-white"
                        >
                            Ver Invisalign
                        </Link>
                    </div>
                </div>
            </section>

            <section className="bg-white py-14 md:py-18">
                <div className="mx-auto max-w-6xl px-5 md:px-6 grid gap-5">
                    <article className="rounded-[24px] border border-black/8 bg-[#fbfaf8] p-6 md:p-8">
                        <h2 className="text-2xl font-black leading-tight md:text-3xl">O que são alinhadores invisíveis</h2>
                        <p className="mt-4 text-sm leading-7 text-gray-600 md:text-base md:leading-8">
                            São placas transparentes e removíveis que movimentam os dentes de forma gradual, substituindo o aparelho fixo em muitos casos.
                        </p>
                    </article>

                    <div className="grid gap-5 md:grid-cols-2">
                        <article className="rounded-[24px] border border-black/8 bg-[#fbfaf8] p-6 md:p-8">
                            <h2 className="text-2xl font-black leading-tight md:text-3xl">Diferença para aparelho fixo</h2>
                            <ul className="mt-4 grid gap-2 text-sm leading-7 text-gray-700 md:text-base md:leading-8">
                                <li>Sem metal aparente</li>
                                <li>Mais conforto na rotina</li>
                                <li>Removível para alimentação e higiene</li>
                            </ul>
                        </article>

                        <article className="rounded-[24px] border border-black/8 bg-[#fbfaf8] p-6 md:p-8">
                            <h2 className="text-2xl font-black leading-tight md:text-3xl">Para quem é indicado</h2>
                            <ul className="mt-4 grid gap-2 text-sm leading-7 text-gray-700 md:text-base md:leading-8">
                                <li>Adultos que buscam discrição</li>
                                <li>Adolescentes em avaliação ortodôntica</li>
                                <li>Quem quer alinhar sem aparelho metálico</li>
                            </ul>
                        </article>
                    </div>

                    <MidCta />

                    <article className="rounded-[24px] border border-black/8 bg-[#fbfaf8] p-6 md:p-8">
                        <h2 className="text-2xl font-black leading-tight md:text-3xl">Sua avaliação com Dr. Jefferson Reis</h2>
                        <div className="mt-5 grid gap-5 md:grid-cols-[0.9fr_1.1fr] md:items-center">
                            <div className="relative h-64 overflow-hidden rounded-[20px] border border-black/8 bg-white md:h-72">
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
                                <h3 className="mt-3 text-2xl font-black leading-tight text-txt-primary md:text-3xl">Planejamento com presença clínica e clareza</h3>
                                <p className="mt-4 text-sm leading-7 text-gray-600 md:text-base md:leading-8">
                                    O atendimento é conduzido com leitura individual do caso, planejamento digital e acompanhamento próximo para você entender cada etapa antes de decidir.
                                </p>
                                <Link
                                    href="https://wa.me/553126260038"
                                    target="_blank"
                                    className="mt-5 inline-flex min-h-11 items-center justify-center rounded-full bg-brand-gold px-5 text-xs font-black uppercase tracking-[0.14em] text-white transition hover:bg-brand-gold-dark"
                                >
                                    Agendar avaliação no WhatsApp
                                </Link>
                            </div>
                        </div>
                    </article>

                    {patientCases.length ? (
                        <article className="rounded-[24px] border border-black/8 bg-[#fbfaf8] p-6 md:p-8">
                            <h2 className="text-2xl font-black leading-tight md:text-3xl">Casos de pacientes atendidos na clínica</h2>
                            <p className="mt-4 text-sm leading-7 text-gray-600 md:text-base md:leading-8">
                                Histórias reais de pacientes que buscaram mais confiança no sorriso com orientação individual e acompanhamento clínico.
                            </p>
                            <div className="mt-5 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
                                {patientCases.map((item) => (
                                    <article key={item.filename} className="rounded-[18px] border border-black/8 bg-white p-3">
                                        <div className="relative h-40 overflow-hidden rounded-xl border border-black/8">
                                            <Image
                                                src={item.src}
                                                alt={item.alt}
                                                fill
                                                sizes="(max-width: 1024px) 100vw, 30vw"
                                                className="object-cover object-top"
                                            />
                                        </div>
                                        <p className="mt-3 text-sm font-black text-txt-primary">{item.name}</p>
                                        <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.16em] text-brand-gold">
                                            {item.eyebrow || 'Jornada de cuidado'}
                                        </p>
                                        <p className="mt-2 text-xs leading-6 text-gray-600">{item.title || 'Cada jornada é conduzida com escuta, planejamento e clareza.'}</p>
                                    </article>
                                ))}
                            </div>
                        </article>
                    ) : null}

                    <article className="rounded-[24px] border border-black/8 bg-[#fbfaf8] p-6 md:p-8">
                        <h2 className="text-2xl font-black leading-tight md:text-3xl">Como é o caminho do tratamento</h2>
                        <ul className="mt-4 grid gap-2 text-sm leading-7 text-gray-700 md:text-base md:leading-8">
                            <li>Avaliação e planejamento digital</li>
                            <li>Entrega e adaptação das primeiras placas</li>
                            <li>Trocas periódicas dos alinhadores</li>
                            <li>Acompanhamento para ajustes e previsibilidade</li>
                        </ul>
                    </article>

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

                    <MidCta label="Falar com a clínica" />

                    <article className="rounded-[24px] border border-black/8 bg-[#fbfaf8] p-6 md:p-8">
                        <h2 className="text-2xl font-black leading-tight md:text-3xl">Links relacionados</h2>
                        <div className="mt-4 flex flex-wrap gap-2">
                            <Link href="/invisalign-betim" className="rounded-full border border-black/10 bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.12em] text-gray-700">Invisalign</Link>
                            <Link href="/invisalign-doctor-betim" className="rounded-full border border-black/10 bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.12em] text-gray-700">Invisalign Doctor</Link>
                            <Link href="/clareamento-dental-betim" className="rounded-full border border-black/10 bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.12em] text-gray-700">Clareamento</Link>
                            <Link href="/implante-dentario-betim" className="rounded-full border border-black/10 bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.12em] text-gray-700">Implante</Link>
                            <Link href="/protocolo-dentario-betim" className="rounded-full border border-black/10 bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.12em] text-gray-700">Protocolo</Link>
                            <Link href="/" className="rounded-full border border-black/10 bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.12em] text-gray-700">Home</Link>
                        </div>
                    </article>
                </div>
            </section>

            <Footer />
            <ChatWidget />
            <MobileStickyCTA />
        </main>
    );
}
