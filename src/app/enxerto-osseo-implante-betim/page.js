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
    { q: 'Todo implante precisa de enxerto?', a: 'Não. A necessidade depende da condição óssea observada na avaliação e nos exames.' },
    { q: 'Enxerto ósseo dói?', a: 'Com anestesia local e protocolo adequado, o procedimento costuma ser controlado e acompanhado de perto.' },
    { q: 'Quanto tempo depois do enxerto posso fazer implante?', a: 'Depende da cicatrização de cada caso. O prazo é definido pelo planejamento clínico.' },
    { q: 'Enxerto aumenta o valor?', a: 'Pode alterar o investimento, mas isso só pode ser confirmado após avaliação.' },
    { q: 'Como saber se preciso?', a: 'A avaliação e exames como tomografia mostram se há osso suficiente para o implante.' },
];

export const metadata = buildMetadata({
    title: 'Enxerto Ósseo para Implante em Betim | Clínica Inova',
    description:
        'Entenda quando o enxerto ósseo pode ser necessário antes do implante dentário e como a avaliação define o melhor planejamento.',
    path: '/enxerto-osseo-implante-betim',
    keywords: ['enxerto osseo para implante em betim', 'enxerto para implante dentario', 'implante com enxerto betim'],
});

export default function EnxertoOsseoImplanteBetimPage() {
    return (
        <main className="min-h-screen bg-white pb-24 text-txt-primary selection:bg-brand-gold selection:text-white md:pb-0">
            <JsonLd data={buildDentistSchema()} />
            <JsonLd
                data={buildServiceSchema({
                    name: 'Enxerto ósseo para implante em Betim',
                    description:
                        'Página explicativa sobre indicação de enxerto ósseo para implante em Betim com linguagem simples e foco em orientação.',
                    path: '/enxerto-osseo-implante-betim',
                })}
            />
            <JsonLd data={buildFaqSchema(faqItems)} />
            <JsonLd
                data={buildBreadcrumbSchema([
                    { name: 'Início', path: '/' },
                    { name: 'Enxerto ósseo para implante em Betim', path: '/enxerto-osseo-implante-betim' },
                ])}
            />

            <Navbar />

            <section className="bg-[linear-gradient(180deg,#f8f6f2,white)] pb-14 pt-28 md:pb-18 md:pt-34">
                <div className="mx-auto max-w-6xl px-5 md:px-6">
                    <p className="text-xs font-black uppercase tracking-[0.3em] text-brand-gold">Enxerto ósseo</p>
                    <h1 className="mt-5 max-w-4xl text-4xl font-black leading-tight md:text-6xl">Enxerto ósseo para implante em Betim</h1>
                    <p className="mt-5 max-w-3xl text-sm leading-7 text-gray-600 md:text-lg md:leading-8">
                        Entenda quando o enxerto pode ser necessário antes do implante e como os exames definem o planejamento mais seguro.
                    </p>
                    <Link href="https://wa.me/553126260038" target="_blank" className="mt-6 inline-flex min-h-12 items-center justify-center rounded-full bg-txt-primary px-7 text-xs font-black uppercase tracking-[0.15em] text-white transition hover:bg-brand-gold">
                        Quero avaliar meu caso
                    </Link>
                </div>
            </section>

            <section className="bg-white py-14 md:py-18">
                <div className="mx-auto max-w-6xl px-5 md:px-6 grid gap-5">
                    <article className="rounded-[24px] border border-black/8 bg-[#fbfaf8] p-6 md:p-8">
                        <h2 className="text-2xl font-black leading-tight md:text-3xl">O que é enxerto ósseo</h2>
                        <p className="mt-4 text-sm leading-7 text-gray-600 md:text-base md:leading-8">
                            É um procedimento que pode ser indicado quando não há volume ósseo suficiente para receber o implante com segurança.
                        </p>
                    </article>
                    <article className="rounded-[24px] border border-black/8 bg-[#fbfaf8] p-6 md:p-8">
                        <h2 className="text-2xl font-black leading-tight md:text-3xl">Quando pode ser necessário</h2>
                        <ul className="mt-4 grid gap-2 text-sm leading-7 text-gray-700 md:grid-cols-2 md:text-base md:leading-8">
                            <li>Perda dentária antiga</li>
                            <li>Pouco volume ósseo</li>
                            <li>Planejamento de implante</li>
                            <li>Região posterior ou superior</li>
                            <li>Histórico de prótese removível</li>
                        </ul>
                    </article>
                    <article className="rounded-[24px] border border-black/8 bg-[#fbfaf8] p-6 md:p-8">
                        <h2 className="text-2xl font-black leading-tight md:text-3xl">Todo mundo precisa de enxerto?</h2>
                        <p className="mt-4 text-sm leading-7 text-gray-600 md:text-base md:leading-8">
                            Não. Depende de avaliação clínica e exames como tomografia.
                        </p>
                    </article>
                    <article className="rounded-[24px] border border-black/8 bg-[#fbfaf8] p-6 md:p-8">
                        <h2 className="text-2xl font-black leading-tight md:text-3xl">Como saber se preciso</h2>
                        <p className="mt-4 text-sm leading-7 text-gray-600 md:text-base md:leading-8">
                            A avaliação e os exames mostram se existe osso suficiente ou se será necessário preparar a região antes do implante.
                        </p>
                    </article>
                    <article className="rounded-[24px] border border-black/8 bg-[#fbfaf8] p-6 md:p-8">
                        <h2 className="text-2xl font-black leading-tight md:text-3xl">Enxerto aumenta o valor?</h2>
                        <p className="mt-4 text-sm leading-7 text-gray-600 md:text-base md:leading-8">
                            Pode alterar o planejamento e o investimento, mas isso só pode ser confirmado após avaliação.
                        </p>
                        <Link href="https://wa.me/553126260038" target="_blank" className="mt-5 inline-flex min-h-11 items-center justify-center rounded-full bg-brand-gold px-5 text-xs font-black uppercase tracking-[0.14em] text-white transition hover:bg-brand-gold-dark">
                            Quero avaliar meu caso
                        </Link>
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
                            <Link href="/dentista-implante-betim" className="rounded-full border border-black/10 bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.12em] text-gray-700">Dentista para implante</Link>
                            <Link href="/quanto-custa-implante-dentario-betim" className="rounded-full border border-black/10 bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.12em] text-gray-700">Quanto custa implante</Link>
                            <Link href="/implante-protocolo-all-on-4-betim" className="rounded-full border border-black/10 bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.12em] text-gray-700">All-on-4</Link>
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
