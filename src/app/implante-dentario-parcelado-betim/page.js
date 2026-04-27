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
    { q: 'Implante pode ser parcelado?', a: 'Sim. O parcelamento é definido conforme o plano indicado para cada paciente.' },
    { q: 'Qual a menor parcela?', a: 'Em alguns casos, o tratamento pode começar com parcelas a partir de R$150/mês, sujeito à avaliação clínica.' },
    { q: 'Posso fazer o tratamento aos poucos?', a: 'Em alguns casos, sim. O planejamento por etapas depende da sua condição clínica.' },
    { q: 'A avaliação é obrigatória?', a: 'Sim. Ela orienta segurança, previsibilidade e o formato financeiro possível.' },
    { q: 'O parcelamento muda conforme o caso?', a: 'Sim. Complexidade, etapas e número de dentes podem mudar o parcelamento.' },
];

export const metadata = buildMetadata({
    title: 'Implante Dentário Parcelado em Betim | Clínica Inova',
    description:
        'Veja opções de implante dentário parcelado em Betim e entenda como uma avaliação pode definir o melhor caminho para o seu caso.',
    path: '/implante-dentario-parcelado-betim',
    keywords: ['implante dentário parcelado em betim', 'parcela implante betim', 'implante dentário preço parcelado'],
});

export default function ImplanteParceladoBetimPage() {
    return (
        <main className="min-h-screen bg-white pb-24 text-txt-primary selection:bg-brand-gold selection:text-white md:pb-0">
            <JsonLd data={buildDentistSchema()} />
            <JsonLd
                data={buildServiceSchema({
                    name: 'Implante dentário parcelado em Betim',
                    description:
                        'Página para quem busca parcelamento de implante dentário em Betim com orientação clínica e financeira responsável.',
                    path: '/implante-dentario-parcelado-betim',
                })}
            />
            <JsonLd data={buildFaqSchema(faqItems)} />
            <JsonLd
                data={buildBreadcrumbSchema([
                    { name: 'Início', path: '/' },
                    { name: 'Implante dentário parcelado em Betim', path: '/implante-dentario-parcelado-betim' },
                ])}
            />

            <Navbar />

            <section className="bg-[linear-gradient(180deg,#f8f6f2,white)] pb-14 pt-28 md:pb-18 md:pt-34">
                <div className="mx-auto max-w-6xl px-5 md:px-6">
                    <p className="text-xs font-black uppercase tracking-[0.3em] text-brand-gold">Parcelamento</p>
                    <h1 className="mt-5 max-w-4xl text-4xl font-black leading-tight md:text-6xl">Implante dentário parcelado em Betim</h1>
                    <p className="mt-5 max-w-3xl text-sm leading-7 text-gray-600 md:text-lg md:leading-8">
                        O investimento é uma preocupação comum. O parcelamento pode ajudar a iniciar o tratamento com mais organização e clareza.
                    </p>
                    <Link href="https://wa.me/553126260038" target="_blank" className="mt-6 inline-flex min-h-12 items-center justify-center rounded-full bg-txt-primary px-7 text-xs font-black uppercase tracking-[0.15em] text-white transition hover:bg-brand-gold">
                        Quero entender minhas opções
                    </Link>
                </div>
            </section>

            <section className="bg-white py-14 md:py-18">
                <div className="mx-auto max-w-6xl px-5 md:px-6 grid gap-5">
                    <article className="rounded-[24px] border border-black/8 bg-[#fbfaf8] p-6 md:p-8">
                        <h2 className="text-2xl font-black leading-tight md:text-3xl">Parcelas possíveis</h2>
                        <p className="mt-4 text-sm leading-7 text-gray-600 md:text-base md:leading-8">
                            Em alguns casos, o tratamento pode começar com parcelas a partir de R$150/mês, sujeito à avaliação clínica.
                        </p>
                    </article>
                    <article className="rounded-[24px] border border-black/8 bg-[#fbfaf8] p-6 md:p-8">
                        <h2 className="text-2xl font-black leading-tight md:text-3xl">O que define o parcelamento</h2>
                        <ul className="mt-4 grid gap-2 text-sm leading-7 text-gray-700 md:grid-cols-2 md:text-base md:leading-8">
                            <li>Complexidade do caso</li>
                            <li>Número de dentes</li>
                            <li>Exames necessários</li>
                            <li>Etapas do tratamento</li>
                            <li>Planejamento financeiro</li>
                        </ul>
                    </article>
                    <article className="rounded-[24px] border border-black/8 bg-[#fbfaf8] p-6 md:p-8">
                        <h2 className="text-2xl font-black leading-tight md:text-3xl">Posso fazer aos poucos?</h2>
                        <p className="mt-4 text-sm leading-7 text-gray-600 md:text-base md:leading-8">
                            Alguns tratamentos podem ser planejados por etapas, dependendo do seu caso e da estratégia clínica definida na avaliação.
                        </p>
                    </article>
                    <article className="rounded-[24px] border border-black/8 bg-[#fbfaf8] p-6 md:p-8">
                        <h2 className="text-2xl font-black leading-tight md:text-3xl">Por que avaliar antes?</h2>
                        <p className="mt-4 text-sm leading-7 text-gray-600 md:text-base md:leading-8">
                            A avaliação evita promessa rasa e permite entender o caminho mais adequado para segurança clínica e previsibilidade financeira.
                        </p>
                        <Link href="https://wa.me/553126260038" target="_blank" className="mt-5 inline-flex min-h-11 items-center justify-center rounded-full bg-brand-gold px-5 text-xs font-black uppercase tracking-[0.14em] text-white transition hover:bg-brand-gold-dark">
                            Quero entender minhas opções
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
                            <Link href="/quanto-custa-implante-dentario-betim" className="rounded-full border border-black/10 bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.12em] text-gray-700">Quanto custa implante</Link>
                            <Link href="/implante-dentario-betim" className="rounded-full border border-black/10 bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.12em] text-gray-700">Implante dentário</Link>
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
