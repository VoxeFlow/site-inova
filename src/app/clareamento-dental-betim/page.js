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
    {
        q: 'Clareamento dói?',
        a: 'Alguns pacientes podem sentir sensibilidade temporária. A avaliação ajuda a escolher a técnica mais confortável para o seu caso.',
    },
    {
        q: 'Quanto tempo dura?',
        a: 'A duração varia conforme hábitos e manutenção. Orientações corretas ajudam a preservar o resultado por mais tempo.',
    },
    {
        q: 'Clareamento estraga o dente?',
        a: 'Quando bem indicado e acompanhado, o clareamento não tem objetivo de danificar os dentes.',
    },
    {
        q: 'O resultado é imediato?',
        a: 'Pode haver melhora perceptível logo no início, mas o resultado final depende da técnica e da resposta individual.',
    },
];

export const metadata = buildMetadata({
    title: 'Clareamento Dental em Betim | Clínica Inova',
    description:
        'Clareamento dental em Betim para quem busca um sorriso mais claro e natural com avaliação individual e técnica segura.',
    path: '/clareamento-dental-betim',
    keywords: [
        'clareamento dental em betim',
        'quanto custa clareamento dental',
        'clareamento dentes betim',
    ],
});

function MidCta() {
    return (
        <div className="my-8 rounded-[22px] border border-brand-gold/35 bg-[#f7f3ea] px-5 py-5 md:my-10 md:px-6">
            <p className="text-sm font-semibold leading-7 text-txt-primary">
                Quer entender o melhor caminho para clarear seus dentes com segurança?
            </p>
            <WhatsAppTrackedLink
                href="https://wa.me/553126260038"
                target="_blank"
                className="mt-4 inline-flex min-h-11 items-center justify-center rounded-full bg-txt-primary px-5 text-xs font-black uppercase tracking-[0.14em] text-white transition hover:bg-brand-gold"
            >
                Quero clarear meus dentes
            </WhatsAppTrackedLink>
        </div>
    );
}

export default function ClareamentoDentalBetimPage() {
    return (
        <main className="min-h-screen bg-white pb-24 text-txt-primary selection:bg-brand-gold selection:text-white md:pb-0">
            <JsonLd data={buildDentistSchema()} />
            <JsonLd
                data={buildServiceSchema({
                    name: 'Clareamento dental em Betim',
                    description:
                        'Página para pacientes que buscam clareamento dental em Betim com foco em naturalidade, segurança e orientação clínica.',
                    path: '/clareamento-dental-betim',
                })}
            />
            <JsonLd data={buildFaqSchema(faqItems)} />
            <JsonLd
                data={buildBreadcrumbSchema([
                    { name: 'Início', path: '/' },
                    { name: 'Clareamento dental em Betim', path: '/clareamento-dental-betim' },
                ])}
            />

            <Navbar />

            <section className="bg-[linear-gradient(180deg,#f8f6f2,white)] pb-14 pt-28 md:pb-18 md:pt-34">
                <div className="mx-auto max-w-6xl px-5 md:px-6">
                    <p className="text-xs font-black uppercase tracking-[0.3em] text-brand-gold">Clareamento dental</p>
                    <h1 className="mt-5 max-w-4xl text-4xl font-black leading-tight md:text-6xl">
                        Clareamento dental em Betim para um sorriso mais claro e natural
                    </h1>
                    <p className="mt-5 max-w-3xl text-sm leading-7 text-gray-600 md:text-lg md:leading-8">
                        O escurecimento dos dentes pode acontecer com o tempo por hábitos como café, vinho e cigarro. A avaliação clínica ajuda a escolher a abordagem mais adequada para o seu sorriso.
                    </p>
                    <WhatsAppTrackedLink
                        href="https://wa.me/553126260038"
                        target="_blank"
                        className="mt-6 inline-flex min-h-12 items-center justify-center rounded-full bg-txt-primary px-7 text-xs font-black uppercase tracking-[0.15em] text-white transition hover:bg-brand-gold"
                    >
                        Quero clarear meus dentes
                    </WhatsAppTrackedLink>
                </div>
            </section>

            <section className="bg-white py-14 md:py-18">
                <div className="mx-auto max-w-6xl px-5 md:px-6 grid gap-5">
                    <article className="rounded-[24px] border border-black/8 bg-[#fbfaf8] p-6 md:p-8">
                        <h2 className="text-2xl font-black leading-tight md:text-3xl">Como funciona</h2>
                        <ul className="mt-4 grid gap-2 text-sm leading-7 text-gray-700 md:text-base md:leading-8">
                            <li>Avaliação clínica do seu sorriso</li>
                            <li>Escolha da técnica mais adequada</li>
                            <li>Acompanhamento para mais segurança</li>
                        </ul>
                    </article>

                    <article className="rounded-[24px] border border-black/8 bg-[#fbfaf8] p-6 md:p-8">
                        <h2 className="text-2xl font-black leading-tight md:text-3xl">Quanto custa</h2>
                        <p className="mt-4 text-sm leading-7 text-gray-600 md:text-base md:leading-8">
                            O valor pode variar, mas em muitos casos o clareamento pode ser feito com investimento acessível.
                        </p>
                    </article>

                    <MidCta />

                    <article className="rounded-[24px] border border-black/8 bg-[#fbfaf8] p-6 md:p-8">
                        <h2 className="text-2xl font-black leading-tight md:text-3xl">Para quem é indicado</h2>
                        <ul className="mt-4 grid gap-2 text-sm leading-7 text-gray-700 md:text-base md:leading-8">
                            <li>Dentes amarelados com o tempo</li>
                            <li>Quem quer melhorar a estética do sorriso</li>
                            <li>Quem deseja se preparar para eventos importantes</li>
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
                            <Link href="/" className="rounded-full border border-black/10 bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.12em] text-gray-700">Home</Link>
                            <Link href="/invisalign-betim" className="rounded-full border border-black/10 bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.12em] text-gray-700">Invisalign</Link>
                            <Link href="/alinhadores-invisiveis-betim" className="rounded-full border border-black/10 bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.12em] text-gray-700">Alinhadores</Link>
                            <Link href="/implante-dentario-betim" className="rounded-full border border-black/10 bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.12em] text-gray-700">Implante</Link>
                            <Link href="/protocolo-dentario-betim" className="rounded-full border border-black/10 bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.12em] text-gray-700">Protocolo</Link>
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
