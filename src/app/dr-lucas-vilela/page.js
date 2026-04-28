import Image from 'next/image';
import Link from 'next/link';
import { Award, BookOpenText, GraduationCap, ShieldCheck, Stethoscope, Users } from 'lucide-react';

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

const authorityCards = [
    {
        icon: GraduationCap,
        title: 'Formação sólida em implantodontia',
        text: 'Base técnica construída com foco em cirurgia de implante e reabilitação funcional.',
    },
    {
        icon: BookOpenText,
        title: 'Atuação acadêmica ativa',
        text: 'Professor de implante na Ciências Médicas, com prática constante de atualização.',
    },
    {
        icon: Stethoscope,
        title: 'Cirurgia e reabilitação no dia a dia clínico',
        text: 'Condução de casos simples e complexos com planejamento individualizado.',
    },
    {
        icon: ShieldCheck,
        title: 'Critério e segurança em cada decisão',
        text: 'Diagnóstico e planejamento antes de qualquer definição de tratamento.',
    },
];

const credentials = [
    'Graduado em Odontologia - PUC Minas',
    'Especialista em Implantodontia - Faculdade Ciências Médicas',
    'Mestrado em Implantodontia - ILAPEO-PR',
    'Professor de Graduação - Faculdade Anhanguera',
    'Professor de Especialização em Implantodontia - Faculdade Ciências Médicas',
    'Professor de Aperfeiçoamento em Cirurgia Oral - Faculdade Ciências Médicas',
];

const treatmentFlow = [
    {
        step: 'Diagnóstico',
        title: 'Leitura completa do caso',
        text: 'Entendemos histórico, exames e objetivo funcional antes de discutir procedimento.',
    },
    {
        step: 'Planejamento',
        title: 'Estratégia personalizada',
        text: 'Cada cirurgia de implante é desenhada conforme anatomia, necessidade e previsibilidade.',
    },
    {
        step: 'Execução',
        title: 'Condução técnica com segurança',
        text: 'O procedimento é realizado com protocolo clínico claro e comunicação transparente.',
    },
    {
        step: 'Acompanhamento',
        title: 'Suporte até a finalização',
        text: 'A evolução é monitorada para garantir estabilidade, função mastigatória e confiança.',
    },
];

const faqItems = [
    {
        q: 'Quando procurar um dentista especialista em implante?',
        a: 'Quando há perda de um ou mais dentes e você busca uma solução fixa com planejamento e segurança.',
    },
    {
        q: 'Toda cirurgia de implante é igual?',
        a: 'Não. Cada caso muda conforme condição óssea, exames, número de dentes e estratégia de reabilitação.',
    },
    {
        q: 'Preciso de avaliação antes de decidir?',
        a: 'Sim. A avaliação clínica evita promessa genérica e define um plano seguro para o seu caso.',
    },
    {
        q: 'O Dr. Lucas atende casos complexos?',
        a: 'Sim. A atuação clínica envolve cirurgia de implante em casos simples e complexos, sempre com diagnóstico individual.',
    },
];

export const metadata = buildMetadata({
    title: 'Dr. Lucas Vilela | Implante Dentário em Betim',
    description:
        'Conheça o Dr. Lucas Vilela, especialista em implante dentário com atuação clínica e acadêmica. Avaliação e planejamento individual em Betim.',
    path: '/dr-lucas-vilela',
    keywords: [
        'dr lucas vilela',
        'implante dentário em betim',
        'dentista especialista em implante',
        'cirurgia de implante',
        'implantodontista betim',
    ],
});

function PrimaryCta({ label = 'Quero avaliar meu caso', className = '' }) {
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

function SectionHeader({ eyebrow, title, description }) {
    return (
        <div className="max-w-3xl">
            <p className="text-xs font-black uppercase tracking-[0.3em] text-brand-gold">{eyebrow}</p>
            <h2 className="mt-4 text-3xl font-black leading-tight md:text-4xl">{title}</h2>
            {description ? <p className="mt-4 text-sm leading-7 text-gray-700 md:text-base md:leading-8">{description}</p> : null}
        </div>
    );
}

export default function DrLucasVilelaPage() {
    const patientStories = getPatientGalleryImages().slice(0, 7);
    const featuredPatient = patientStories[0];
    const compactStories = patientStories.slice(1, 6);

    return (
        <main className="min-h-screen bg-white pb-24 text-txt-primary selection:bg-brand-gold selection:text-white md:pb-0">
            <JsonLd data={buildDentistSchema()} />
            <JsonLd
                data={buildServiceSchema({
                    name: 'Dr. Lucas Vilela - Implante dentário em Betim',
                    description:
                        'Página de autoridade do Dr. Lucas Vilela, dentista especialista em implante dentário em Betim com atuação clínica e acadêmica.',
                    path: '/dr-lucas-vilela',
                })}
            />
            <JsonLd data={buildFaqSchema(faqItems)} />
            <JsonLd
                data={buildBreadcrumbSchema([
                    { name: 'Início', path: '/' },
                    { name: 'Dr. Lucas Vilela', path: '/dr-lucas-vilela' },
                ])}
            />

            <Navbar />

            <section className="bg-[radial-gradient(circle_at_top_left,rgba(197,164,126,0.22),transparent_38%),linear-gradient(180deg,#f9f7f3,#ffffff)] pb-16 pt-28 md:pb-24 md:pt-36">
                <div className="mx-auto grid max-w-6xl gap-8 px-5 md:grid-cols-[1fr_0.95fr] md:items-center md:px-6">
                    <div className="motion-safe:animate-fade-up">
                        <p className="text-xs font-black uppercase tracking-[0.3em] text-brand-gold">Especialista em implante dentário em Betim</p>
                        <h1 className="mt-5 text-4xl font-black leading-[1] md:text-6xl">Dr. Lucas Vilela</h1>
                        <p className="mt-5 max-w-3xl text-sm leading-7 text-gray-700 md:text-lg md:leading-8">
                            Cirurgião especialista em implantes dentários, com atuação clínica e acadêmica.
                        </p>
                        <p className="mt-4 inline-flex rounded-full border border-brand-gold/35 bg-[#f6f0e5] px-4 py-2 text-[11px] font-black uppercase tracking-[0.18em] text-brand-gold md:text-xs">
                            Professor de implante na Ciências Médicas - Belo Horizonte
                        </p>

                        <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                            <PrimaryCta />
                            <Link
                                href="#como-funciona"
                                className="inline-flex min-h-12 items-center justify-center rounded-full border border-txt-primary px-7 text-xs font-black uppercase tracking-[0.15em] text-txt-primary transition hover:-translate-y-0.5 hover:bg-txt-primary hover:text-white"
                            >
                                Entender como funciona o implante
                            </Link>
                        </div>

                        <div className="mt-7 grid gap-3 sm:grid-cols-3">
                            {[
                                ['Docência', 'Ciências Médicas'],
                                ['Foco', 'Cirurgia de implante'],
                                ['Atuação', 'Betim e região'],
                            ].map(([title, value]) => (
                                <article key={title} className="rounded-2xl border border-black/8 bg-white/90 px-4 py-3">
                                    <p className="text-[10px] font-black uppercase tracking-[0.18em] text-gray-500">{title}</p>
                                    <p className="mt-1 text-sm font-black text-txt-primary">{value}</p>
                                </article>
                            ))}
                        </div>
                    </div>

                    <div className="rounded-[30px] border border-black/8 bg-white p-3 shadow-[0_24px_80px_rgba(0,0,0,0.08)] transition duration-500 hover:-translate-y-1 motion-safe:animate-fade-up">
                        <div className="relative h-72 overflow-hidden rounded-[22px] md:h-[33rem]">
                            <Image
                                src="/assets/Dr Lucas Vilela.jpeg"
                                alt="Dr. Lucas Vilela - dentista especialista em implante"
                                fill
                                priority
                                sizes="(max-width: 768px) 100vw, 45vw"
                                className="object-cover object-top"
                            />
                            <div className="absolute bottom-3 left-3 rounded-full border border-white/30 bg-black/55 px-3 py-2 text-[10px] font-black uppercase tracking-[0.16em] text-white backdrop-blur">
                                Cirurgia e reabilitação
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-white py-14 md:py-20">
                <div className="mx-auto grid max-w-6xl gap-5 px-5 md:grid-cols-[1.05fr_0.95fr] md:px-6">
                    <article className="rounded-[28px] border border-black/8 bg-[#fbfaf8] p-6 md:p-10">
                        <SectionHeader
                            eyebrow="Trajetória"
                            title="Uma carreira construída entre consultório e ensino"
                            description="O início na odontologia veio do desejo de unir técnica e impacto real na vida das pessoas. Com a prática clínica, a implantodontia se tornou o caminho natural para conduzir tratamentos com previsibilidade e responsabilidade."
                        />
                        <p className="mt-4 text-sm leading-7 text-gray-700 md:text-base md:leading-8">
                            A atuação acadêmica fortaleceu a visão de planejamento e precisão. Hoje, a missão é conduzir cada paciente com clareza,
                            segurança e critérios sólidos, do diagnóstico à finalização.
                        </p>
                    </article>

                    <article className="rounded-[28px] border border-black/8 bg-[#111111] p-6 text-white md:p-10">
                        <p className="text-xs font-black uppercase tracking-[0.3em] text-brand-gold">Manifesto profissional</p>
                        <p className="mt-5 text-2xl font-black leading-tight md:text-3xl">
                            “É melhor fazer algo muito bem feito do que fazer rápido sem direção.”
                        </p>
                        <p className="mt-5 text-sm leading-7 text-white/75 md:text-base md:leading-8">
                            Em cirurgia de implante, não existe resultado consistente sem diagnóstico completo, planejamento individual e execução cuidadosa.
                        </p>
                    </article>
                </div>
            </section>

            <section className="bg-[#f7f4ef] py-14 md:py-20">
                <div className="mx-auto max-w-6xl px-5 md:px-6">
                    <SectionHeader
                        eyebrow="Autoridade"
                        title="Formação e atuação com padrão de especialista"
                        description="Uma combinação de experiência clínica, docência e atualização constante em implantodontia."
                    />

                    <div className="mt-7 grid gap-4 md:grid-cols-2">
                        {authorityCards.map((item) => {
                            const Icon = item.icon;
                            return (
                                <article key={item.title} className="rounded-2xl border border-black/8 bg-white p-5 transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_10px_28px_rgba(0,0,0,0.06)]">
                                    <div className="flex items-start gap-4">
                                        <div className="rounded-xl border border-brand-gold/30 bg-[#f8f3e9] p-2.5 text-brand-gold">
                                            <Icon className="h-5 w-5" />
                                        </div>
                                        <div>
                                            <h3 className="text-base font-black text-txt-primary md:text-lg">{item.title}</h3>
                                            <p className="mt-2 text-sm leading-7 text-gray-600">{item.text}</p>
                                        </div>
                                    </div>
                                </article>
                            );
                        })}
                    </div>

                    <article className="mt-5 rounded-2xl border border-black/8 bg-white p-5 md:p-6">
                        <p className="text-xs font-black uppercase tracking-[0.24em] text-brand-gold">Credenciais</p>
                        <div className="mt-4 grid gap-3 md:grid-cols-2">
                            {credentials.map((item) => (
                                <p key={item} className="rounded-xl border border-black/8 bg-[#fbfaf8] px-4 py-3 text-sm font-semibold leading-7 text-gray-700">
                                    {item}
                                </p>
                            ))}
                        </div>
                    </article>
                </div>
            </section>

            <section id="como-funciona" className="bg-white py-14 md:py-20">
                <div className="mx-auto max-w-6xl px-5 md:px-6">
                    <SectionHeader
                        eyebrow="Filosofia de tratamento"
                        title="Como o tratamento é conduzido"
                        description="O paciente entende o caminho antes de decidir. Diagnóstico, planejamento e comunicação clara são parte do cuidado."
                    />

                    <div className="mt-7 grid gap-4 md:grid-cols-2">
                        {treatmentFlow.map((item) => (
                            <article key={item.step} className="rounded-2xl border border-black/8 bg-[#fbfaf8] p-5 transition duration-300 hover:shadow-[0_10px_28px_rgba(0,0,0,0.06)]">
                                <p className="text-xs font-black uppercase tracking-[0.18em] text-brand-gold">{item.step}</p>
                                <h3 className="mt-2 text-lg font-black text-txt-primary">{item.title}</h3>
                                <p className="mt-2 text-sm leading-7 text-gray-600">{item.text}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            {featuredPatient ? (
                <section className="bg-[#111111] py-14 text-white md:py-20">
                    <div className="mx-auto max-w-6xl px-5 md:px-6">
                        <SectionHeader
                            eyebrow="Prova social"
                            title="Cada paciente chega com uma história diferente"
                            description="O cuidado começa antes de qualquer procedimento. Começa na escuta, no diagnóstico e na confiança construída ao longo da jornada."
                        />

                        <div className="mt-7 grid gap-5 md:grid-cols-[1.05fr_0.95fr]">
                            <article className="rounded-[24px] border border-white/12 bg-white/[0.04] p-4 transition duration-500 hover:shadow-[0_16px_40px_rgba(0,0,0,0.25)]">
                                <div className="relative h-72 overflow-hidden rounded-2xl border border-white/10 md:h-[30rem]">
                                    <Image
                                        src={featuredPatient.src}
                                        alt={featuredPatient.alt}
                                        fill
                                        sizes="(max-width: 768px) 100vw, 55vw"
                                        className="object-cover object-top"
                                    />
                                </div>
                                <p className="mt-4 text-sm font-black text-white">{featuredPatient.name}</p>
                                <p className="mt-1 text-[10px] font-black uppercase tracking-[0.18em] text-brand-gold">
                                    {featuredPatient.eyebrow || 'Jornada de cuidado'}
                                </p>
                                <p className="mt-3 text-sm leading-7 text-white/75">
                                    {featuredPatient.story || 'Cada paciente chega com uma história única. O cuidado é sempre individual.'}
                                </p>
                            </article>

                            <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-1">
                                {compactStories.map((item) => (
                                    <article key={item.filename} className="rounded-2xl border border-white/12 bg-white/[0.04] p-3 transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_10px_28px_rgba(0,0,0,0.2)]">
                                        <div className="relative h-40 overflow-hidden rounded-xl border border-white/10">
                                            <Image
                                                src={item.src}
                                                alt={item.alt}
                                                fill
                                                sizes="(max-width: 768px) 100vw, 40vw"
                                                className="object-cover object-top"
                                            />
                                        </div>
                                        <p className="mt-3 text-sm font-black text-white">{item.name}</p>
                                        <p className="mt-1 text-[10px] font-black uppercase tracking-[0.18em] text-brand-gold">
                                            {item.eyebrow || 'Jornada de cuidado'}
                                        </p>
                                    </article>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
            ) : null}

            <section className="bg-[#f7f4ef] py-14 md:py-20">
                <div className="mx-auto max-w-6xl px-5 md:px-6">
                    <article className="rounded-[28px] border border-black/8 bg-white p-6 md:p-10">
                        <SectionHeader
                            eyebrow="Implante dentário em Betim"
                            title="Para quem busca implante com segurança e previsibilidade"
                            description="Se você perdeu um ou mais dentes, busca solução fixa e quer mais segurança para mastigar e sorrir, o próximo passo é uma avaliação clínica bem conduzida."
                        />
                        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                            <PrimaryCta label="Quero entender meu caso" />
                            <Link
                                href="/implante-dentario-betim"
                                className="inline-flex min-h-12 items-center justify-center rounded-full border border-txt-primary px-7 text-xs font-black uppercase tracking-[0.15em] text-txt-primary transition hover:bg-txt-primary hover:text-white"
                            >
                                Ir para implante dentário em Betim
                            </Link>
                        </div>
                    </article>
                </div>
            </section>

            <section className="bg-white py-14 md:py-20">
                <div className="mx-auto max-w-6xl px-5 md:px-6">
                    <article className="rounded-[28px] border border-black/8 bg-[#fbfaf8] p-6 md:p-10">
                        <SectionHeader
                            eyebrow="Dúvidas frequentes"
                            title="Perguntas comuns antes de decidir pela cirurgia de implante"
                        />
                        <div className="mt-5 grid gap-3">
                            {faqItems.map((faq) => (
                                <details key={faq.q} className="rounded-xl border border-black/8 bg-white px-4 py-4">
                                    <summary className="cursor-pointer list-none text-base font-black text-txt-primary">
                                        {faq.q}
                                    </summary>
                                    <p className="mt-3 text-sm leading-7 text-gray-600">{faq.a}</p>
                                </details>
                            ))}
                        </div>
                    </article>
                </div>
            </section>

            <section className="bg-[#111111] py-16 text-white md:py-22">
                <div className="mx-auto max-w-5xl px-5 text-center md:px-6">
                    <p className="text-xs font-black uppercase tracking-[0.3em] text-brand-gold">Próximo passo</p>
                    <h2 className="mt-5 text-3xl font-black leading-tight md:text-5xl">Quer entender seu caso com mais clareza?</h2>
                    <p className="mx-auto mt-5 max-w-3xl text-sm leading-7 text-white/75 md:text-base md:leading-8">
                        Fale com a Clínica Inova e receba uma orientação inicial direta sobre o melhor caminho para o seu tratamento.
                    </p>
                    <PrimaryCta className="mt-7 bg-brand-gold hover:bg-brand-gold-dark" label="Falar no WhatsApp" />
                </div>
            </section>

            <Footer />
            <ChatWidget />
            <MobileStickyCTA />
        </main>
    );
}
