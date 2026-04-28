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
    { q: 'Alinhador funciona?', a: 'Quando bem indicado e acompanhado, pode corrigir alinhamento com boa previsibilidade.' },
    { q: 'Quanto custa?', a: 'O valor depende da complexidade do caso e do planejamento necessário.' },
    { q: 'Demora quanto tempo?', a: 'O tempo varia conforme o grau de desalinhamento e adesão ao uso das placas.' },
    { q: 'Posso tirar os alinhadores?', a: 'Sim, os alinhadores são removíveis para alimentação e higiene.' },
];

export const metadata = buildMetadata({
    title: 'Alinhadores Invisíveis em Betim | Clínica Inova',
    description:
        'Alinhadores invisíveis em Betim para corrigir o sorriso com discrição, conforto e planejamento individual.',
    path: '/alinhadores-invisiveis-betim',
    keywords: ['alinhadores invisíveis betim', 'aparelho invisível preço betim', 'alinhador transparente betim'],
});

export default function AlinhadoresInvisiveisBetimPage() {
    return (
        <main className="min-h-screen bg-white pb-24 text-txt-primary selection:bg-brand-gold selection:text-white md:pb-0">
            <JsonLd data={buildDentistSchema()} />
            <JsonLd
                data={buildServiceSchema({
                    name: 'Alinhadores invisíveis em Betim',
                    description:
                        'Página sobre alinhadores invisíveis em Betim para pacientes que buscam discrição e conforto.',
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
                        Para quem quer alinhar dentes tortos com placas transparentes removíveis e mais conforto na rotina.
                    </p>
                    <Link
                        href="https://wa.me/553126260038"
                        target="_blank"
                        className="mt-6 inline-flex min-h-12 items-center justify-center rounded-full bg-txt-primary px-7 text-xs font-black uppercase tracking-[0.15em] text-white transition hover:bg-brand-gold"
                    >
                        Quero alinhar meu sorriso
                    </Link>
                </div>
            </section>

            <section className="bg-white py-14 md:py-18">
                <div className="mx-auto max-w-6xl px-5 md:px-6 grid gap-5">
                    <article className="rounded-[24px] border border-black/8 bg-[#fbfaf8] p-6 md:p-8">
                        <h2 className="text-2xl font-black leading-tight md:text-3xl">O que são alinhadores</h2>
                        <p className="mt-4 text-sm leading-7 text-gray-600 md:text-base md:leading-8">
                            São placas transparentes, removíveis e planejadas para movimentar os dentes sem a aparência de aparelho fixo tradicional.
                        </p>
                    </article>
                    <article className="rounded-[24px] border border-black/8 bg-[#fbfaf8] p-6 md:p-8">
                        <h2 className="text-2xl font-black leading-tight md:text-3xl">Diferença para aparelho fixo</h2>
                        <ul className="mt-4 grid gap-2 text-sm leading-7 text-gray-700 md:text-base md:leading-8">
                            <li>Sem metal aparente</li>
                            <li>Mais conforto em muitos casos</li>
                            <li>Mais discrição no dia a dia</li>
                        </ul>
                    </article>
                    <article className="rounded-[24px] border border-black/8 bg-[#fbfaf8] p-6 md:p-8">
                        <h2 className="text-2xl font-black leading-tight md:text-3xl">Para quem é indicado</h2>
                        <ul className="mt-4 grid gap-2 text-sm leading-7 text-gray-700 md:text-base md:leading-8">
                            <li>Adultos</li>
                            <li>Adolescentes</li>
                            <li>Quem busca discrição</li>
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
                    <article className="rounded-[24px] border border-black/8 bg-[#fbfaf8] p-6 md:p-8">
                        <div className="flex flex-wrap gap-2">
                            <Link href="/invisalign-betim" className="rounded-full border border-black/10 bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.12em] text-gray-700">Invisalign</Link>
                            <Link href="/invisalign-doctor-betim" className="rounded-full border border-black/10 bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.12em] text-gray-700">Invisalign Doctor</Link>
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
