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
    { q: 'Como escolher um dentista para implante?', a: 'Avalie planejamento, exames, clareza na explicação, acompanhamento e estrutura clínica.' },
    { q: 'Todo dentista faz implante?', a: 'Nem todo profissional realiza implante com foco em reabilitação avançada. Verifique experiência e protocolo clínico.' },
    { q: 'Preciso de exames antes do implante?', a: 'Sim. Exames ajudam a definir segurança e previsibilidade do tratamento.' },
    { q: 'O que perguntar na avaliação?', a: 'Pergunte sobre etapas, materiais, necessidade de enxerto, prazos e acompanhamento.' },
    { q: 'O tratamento tem acompanhamento?', a: 'Sim. O acompanhamento é parte essencial para estabilidade e resultado funcional.' },
];

export const metadata = buildMetadata({
    title: 'Dentista para Implante em Betim | Clínica Inova',
    description:
        'Procura dentista para implante em Betim? Conheça a importância do planejamento, exames e acompanhamento antes de iniciar o tratamento.',
    path: '/dentista-implante-betim',
    keywords: ['dentista para implante em betim', 'dentista implante betim', 'clinica odontologica betim implante'],
});

export default function DentistaImplanteBetimPage() {
    return (
        <main className="min-h-screen bg-white pb-24 text-txt-primary selection:bg-brand-gold selection:text-white md:pb-0">
            <JsonLd data={buildDentistSchema()} />
            <JsonLd
                data={buildServiceSchema({
                    name: 'Dentista para implante em Betim',
                    description:
                        'Página de autoridade para pacientes que buscam dentista para implante em Betim com foco em planejamento e segurança.',
                    path: '/dentista-implante-betim',
                })}
            />
            <JsonLd data={buildFaqSchema(faqItems)} />
            <JsonLd
                data={buildBreadcrumbSchema([
                    { name: 'Início', path: '/' },
                    { name: 'Dentista para implante em Betim', path: '/dentista-implante-betim' },
                ])}
            />

            <Navbar />

            <section className="bg-[linear-gradient(180deg,#f8f6f2,white)] pb-14 pt-28 md:pb-18 md:pt-34">
                <div className="mx-auto max-w-6xl px-5 md:px-6">
                    <p className="text-xs font-black uppercase tracking-[0.3em] text-brand-gold">Autoridade clínica</p>
                    <h1 className="mt-5 max-w-4xl text-4xl font-black leading-tight md:text-6xl">Dentista para implante em Betim</h1>
                    <p className="mt-5 max-w-3xl text-sm leading-7 text-gray-600 md:text-lg md:leading-8">
                        Escolher um dentista para implante é decidir com base em planejamento, exames e acompanhamento, não apenas em promessa de preço.
                    </p>
                    <WhatsAppTrackedLink href="https://wa.me/553126260038" target="_blank" className="mt-6 inline-flex min-h-12 items-center justify-center rounded-full bg-txt-primary px-7 text-xs font-black uppercase tracking-[0.15em] text-white transition hover:bg-brand-gold">
                        Agendar avaliação no WhatsApp
                    </WhatsAppTrackedLink>
                </div>
            </section>

            <section className="bg-white py-14 md:py-18">
                <div className="mx-auto max-w-6xl px-5 md:px-6 grid gap-5">
                    <article className="rounded-[24px] border border-black/8 bg-[#fbfaf8] p-6 md:p-8">
                        <h2 className="text-2xl font-black leading-tight md:text-3xl">Como escolher um dentista para implante</h2>
                        <ul className="mt-4 grid gap-2 text-sm leading-7 text-gray-700 md:grid-cols-2 md:text-base md:leading-8">
                            <li>Planejamento individualizado</li>
                            <li>Exames antes de decidir</li>
                            <li>Clareza na comunicação</li>
                            <li>Acompanhamento pós-procedimento</li>
                            <li>Estrutura clínica adequada</li>
                            <li>Transparência no plano</li>
                        </ul>
                    </article>
                    <article className="rounded-[24px] border border-black/8 bg-[#fbfaf8] p-6 md:p-8">
                        <h2 className="text-2xl font-black leading-tight md:text-3xl">O que avaliar antes de iniciar</h2>
                        <ul className="mt-4 grid gap-2 text-sm leading-7 text-gray-700 md:grid-cols-2 md:text-base md:leading-8">
                            <li>Diagnóstico</li>
                            <li>Condição óssea</li>
                            <li>Saúde bucal geral</li>
                            <li>Expectativas</li>
                            <li>Etapa protética</li>
                        </ul>
                    </article>
                    <article className="rounded-[24px] border border-black/8 bg-[#fbfaf8] p-6 md:p-8">
                        <h2 className="text-2xl font-black leading-tight md:text-3xl">Por que a Clínica Inova</h2>
                        <p className="mt-4 text-sm leading-7 text-gray-600 md:text-base md:leading-8">
                            Clínica odontológica em Betim com atendimento humanizado, planejamento individual e orientação clara para quem busca implante dentário.
                        </p>
                    </article>
                    <article className="rounded-[24px] border border-black/8 bg-[#fbfaf8] p-6 md:p-8">
                        <h2 className="text-2xl font-black leading-tight md:text-3xl">Vender tratamento x orientar o caso</h2>
                        <p className="mt-4 text-sm leading-7 text-gray-600 md:text-base md:leading-8">
                            Antes de decidir, o paciente precisa entender possibilidades, limitações e etapas reais. Orientação correta reduz ansiedade e melhora a decisão.
                        </p>
                        <WhatsAppTrackedLink href="https://wa.me/553126260038" target="_blank" className="mt-5 inline-flex min-h-11 items-center justify-center rounded-full bg-brand-gold px-5 text-xs font-black uppercase tracking-[0.14em] text-white transition hover:bg-brand-gold-dark">
                            Agendar avaliação no WhatsApp
                        </WhatsAppTrackedLink>
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
                            <Link href="/implante-dentario-betim" className="rounded-full border border-black/10 bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.12em] text-gray-700">Implante dentário</Link>
                            <Link href="/quanto-custa-implante-dentario-betim" className="rounded-full border border-black/10 bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.12em] text-gray-700">Quanto custa implante</Link>
                            <Link href="/enxerto-osseo-implante-betim" className="rounded-full border border-black/10 bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.12em] text-gray-700">Enxerto ósseo</Link>
                            <Link href="/protocolo-dentario-betim" className="rounded-full border border-black/10 bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.12em] text-gray-700">Protocolo dentário</Link>
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
