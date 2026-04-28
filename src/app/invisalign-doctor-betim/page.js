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
    { q: 'Qualquer dentista faz Invisalign?', a: 'A condução adequada depende de formação, planejamento digital e experiência com casos de alinhadores.' },
    { q: 'Preciso de avaliação?', a: 'Sim. A avaliação define indicação, estratégia e previsibilidade do tratamento.' },
    { q: 'Como começar?', a: 'O primeiro passo é agendar avaliação para entender seu caso e receber um plano claro.' },
];

export const metadata = buildMetadata({
    title: 'Invisalign Doctor em Betim | Clínica Inova',
    description:
        'Tratamento com Invisalign Doctor em Betim com planejamento individualizado, diagnóstico correto e acompanhamento clínico.',
    path: '/invisalign-doctor-betim',
    keywords: ['invisalign doctor betim', 'dentista invisalign betim', 'invisalign especialista betim'],
});

export default function InvisalignDoctorBetimPage() {
    return (
        <main className="min-h-screen bg-white pb-24 text-txt-primary selection:bg-brand-gold selection:text-white md:pb-0">
            <JsonLd data={buildDentistSchema()} />
            <JsonLd
                data={buildServiceSchema({
                    name: 'Invisalign Doctor em Betim',
                    description:
                        'Página sobre Invisalign Doctor em Betim com foco em autoridade clínica e acompanhamento.',
                    path: '/invisalign-doctor-betim',
                })}
            />
            <JsonLd data={buildFaqSchema(faqItems)} />
            <JsonLd
                data={buildBreadcrumbSchema([
                    { name: 'Início', path: '/' },
                    { name: 'Invisalign Doctor em Betim', path: '/invisalign-doctor-betim' },
                ])}
            />

            <Navbar />

            <section className="bg-[linear-gradient(180deg,#f8f6f2,white)] pb-14 pt-28 md:pb-18 md:pt-34">
                <div className="mx-auto max-w-6xl px-5 md:px-6">
                    <p className="text-xs font-black uppercase tracking-[0.3em] text-brand-gold">Autoridade em alinhadores</p>
                    <h1 className="mt-5 max-w-4xl text-4xl font-black leading-tight md:text-6xl">Tratamento com Invisalign Doctor em Betim</h1>
                    <p className="mt-5 max-w-3xl text-sm leading-7 text-gray-600 md:text-lg md:leading-8">
                        Invisalign Doctor é um profissional certificado para conduzir planejamento digital e acompanhamento adequado em casos com alinhadores transparentes.
                    </p>
                    <WhatsAppTrackedLink
                        href="https://wa.me/553126260038"
                        target="_blank"
                        className="mt-6 inline-flex min-h-12 items-center justify-center rounded-full bg-txt-primary px-7 text-xs font-black uppercase tracking-[0.15em] text-white transition hover:bg-brand-gold"
                    >
                        Quero avaliar meu caso
                    </WhatsAppTrackedLink>
                </div>
            </section>

            <section className="bg-white py-14 md:py-18">
                <div className="mx-auto max-w-6xl px-5 md:px-6 grid gap-5">
                    <article className="rounded-[24px] border border-black/8 bg-[#fbfaf8] p-6 md:p-8">
                        <h2 className="text-2xl font-black leading-tight md:text-3xl">O que é Invisalign Doctor</h2>
                        <p className="mt-4 text-sm leading-7 text-gray-600 md:text-base md:leading-8">
                            É o profissional com certificação para planejar e conduzir tratamentos Invisalign com tecnologia e acompanhamento.
                        </p>
                    </article>
                    <article className="rounded-[24px] border border-black/8 bg-[#fbfaf8] p-6 md:p-8">
                        <h2 className="text-2xl font-black leading-tight md:text-3xl">Importância do profissional</h2>
                        <ul className="mt-4 grid gap-2 text-sm leading-7 text-gray-700 md:text-base md:leading-8">
                            <li>Diagnóstico correto</li>
                            <li>Mais previsibilidade</li>
                            <li>Segurança clínica</li>
                        </ul>
                    </article>
                    <article className="rounded-[24px] border border-black/8 bg-[#fbfaf8] p-6 md:p-8">
                        <h2 className="text-2xl font-black leading-tight md:text-3xl">Na Clínica Inova</h2>
                        <p className="mt-4 text-sm leading-7 text-gray-600 md:text-base md:leading-8">
                            Atendimento individual, planejamento detalhado e acompanhamento próximo durante todas as etapas do tratamento.
                        </p>
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
                            <Link href="/alinhadores-invisiveis-betim" className="rounded-full border border-black/10 bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.12em] text-gray-700">Alinhadores</Link>
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
