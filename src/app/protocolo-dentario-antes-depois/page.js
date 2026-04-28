import Image from 'next/image';
import Link from 'next/link';
import WhatsAppTrackedLink from '@/components/WhatsAppTrackedLink';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ChatWidget from '@/components/ChatWidget';
import MobileStickyCTA from '@/components/MobileStickyCTA';
import JsonLd from '@/components/JsonLd';
import {
    buildBreadcrumbSchema,
    buildDentistSchema,
    buildMetadata,
    buildServiceSchema,
} from '@/lib/seo';

export const metadata = buildMetadata({
    title: 'Protocolo Dentário Antes e Depois em Betim | Clínica Inova',
    description:
        'Resultados e relatos de pacientes com protocolo dentário em Betim. Entenda expectativas reais e próximos passos da avaliação.',
    path: '/protocolo-dentario-antes-depois',
    keywords: ['protocolo dentario antes e depois', 'resultado protocolo dentario betim'],
});

const stories = [
    {
        name: 'Paciente Paula',
        photo: '/assets/pacientes/Paula Justus.jpeg',
        quote: 'Voltei a mastigar com segurança e sem medo de a prótese soltar.',
    },
    {
        name: 'Paciente Charles',
        photo: '/assets/pacientes/Charles.png',
        quote: 'Eu evitava sorrir em foto. Hoje me sinto mais confiante no dia a dia.',
    },
    {
        name: 'Paciente Lara',
        photo: '/assets/pacientes/Lara.png',
        quote: 'O planejamento claro me ajudou a decidir com tranquilidade.',
    },
];

export default function ProtocoloAntesDepoisPage() {
    return (
        <main className="min-h-screen bg-white pb-24 text-txt-primary selection:bg-brand-gold selection:text-white md:pb-0">
            <JsonLd data={buildDentistSchema()} />
            <JsonLd
                data={buildServiceSchema({
                    name: 'Protocolo dentário antes e depois em Betim',
                    description:
                        'Página de prova social e orientação para pacientes que buscam protocolo dentário em Betim.',
                    path: '/protocolo-dentario-antes-depois',
                })}
            />
            <JsonLd
                data={buildBreadcrumbSchema([
                    { name: 'Início', path: '/' },
                    { name: 'Protocolo dentário antes e depois', path: '/protocolo-dentario-antes-depois' },
                ])}
            />

            <Navbar />

            <section className="bg-[linear-gradient(180deg,#f8f6f2,white)] pb-14 pt-28 md:pb-20 md:pt-36">
                <div className="mx-auto max-w-6xl px-5 md:px-6">
                    <p className="text-xs font-black uppercase tracking-[0.3em] text-brand-gold">Prova social</p>
                    <h1 className="mt-5 max-w-4xl text-4xl font-black leading-tight md:text-6xl">
                        Resultados de pacientes com protocolo dentário
                    </h1>
                    <p className="mt-5 max-w-3xl text-sm leading-7 text-gray-600 md:text-lg md:leading-8">
                        Relatos reais de quem buscava mais segurança para mastigar e sorrir. Cada caso é único e o melhor caminho começa com avaliação.
                    </p>
                </div>
            </section>

            <section className="bg-white py-14 md:py-20">
                <div className="mx-auto max-w-6xl px-5 md:px-6">
                    <div className="grid gap-4 md:grid-cols-3">
                        {stories.map((story) => (
                            <article key={story.name} className="rounded-[24px] border border-black/8 bg-[#faf8f4] p-5">
                                <div className="relative h-52 overflow-hidden rounded-[18px] border border-black/8 bg-white">
                                    <Image
                                        src={story.photo}
                                        alt={story.name}
                                        fill
                                        sizes="(max-width: 768px) 100vw, 33vw"
                                        className="object-cover object-top"
                                    />
                                </div>
                                <h2 className="mt-4 text-lg font-black text-txt-primary">{story.name}</h2>
                                <p className="mt-2 text-sm leading-7 text-gray-600">{story.quote}</p>
                            </article>
                        ))}
                    </div>

                    <div className="mt-8 rounded-[24px] border border-black/8 bg-[#fbfaf8] p-6 md:p-8">
                        <h2 className="text-2xl font-black leading-tight text-txt-primary md:text-3xl">
                            Antes e depois: o que considerar
                        </h2>
                        <p className="mt-4 text-sm leading-7 text-gray-600 md:text-base md:leading-8">
                            Resultados visuais são importantes, mas a decisão deve considerar mastigação, estabilidade, planejamento e acompanhamento. A avaliação define o que é possível para o seu caso.
                        </p>
                        <WhatsAppTrackedLink
                            href="https://wa.me/553126260038"
                            target="_blank"
                            className="mt-6 inline-flex min-h-12 items-center justify-center rounded-full bg-txt-primary px-7 text-xs font-black uppercase tracking-[0.15em] text-white transition hover:bg-brand-gold"
                        >
                            Quero entender meu caso
                        </WhatsAppTrackedLink>
                        <div className="mt-5 flex flex-wrap gap-2">
                            <Link href="/implante-dentario-betim" className="rounded-full border border-black/10 bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.12em] text-gray-700">
                                Implante dentário
                            </Link>
                            <Link href="/quanto-custa-implante-dentario-betim" className="rounded-full border border-black/10 bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.12em] text-gray-700">
                                Quanto custa implante
                            </Link>
                            <Link href="/dentista-implante-betim" className="rounded-full border border-black/10 bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.12em] text-gray-700">
                                Dentista para implante
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-[#111111] py-14 text-white md:py-20">
                <div className="mx-auto max-w-5xl px-5 text-center md:px-6">
                    <h2 className="text-3xl font-black leading-tight md:text-5xl">
                        Quer saber se protocolo é indicado para você?
                    </h2>
                    <p className="mt-5 text-sm leading-7 text-white/70 md:text-base md:leading-8">
                        Fale com a Clínica Inova e receba orientação inicial sobre possibilidades reais para o seu caso.
                    </p>
                    <WhatsAppTrackedLink
                        href="https://wa.me/553126260038"
                        target="_blank"
                        className="mt-7 inline-flex min-h-12 items-center justify-center rounded-full bg-brand-gold px-7 text-xs font-black uppercase tracking-[0.15em] text-white transition hover:bg-brand-gold-dark"
                    >
                        Quero entender meu caso
                    </WhatsAppTrackedLink>
                </div>
            </section>

            <Footer />
            <ChatWidget />
            <MobileStickyCTA />
        </main>
    );
}
