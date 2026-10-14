import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Check, CircleHelp, ScanFace, ShieldCheck, Sparkles } from 'lucide-react';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ChatWidget from '@/components/ChatWidget';
import MobileStickyCTA from '@/components/MobileStickyCTA';
import WhatsAppTrackedLink from '@/components/WhatsAppTrackedLink';
import JsonLd from '@/components/JsonLd';
import {
    buildBreadcrumbSchema,
    buildDentistSchema,
    buildFaqSchema,
    buildMetadata,
    buildProfessionalSchema,
    buildServiceSchema,
} from '@/lib/seo';

const PATH = '/drjeffersonreis';
const WHATSAPP_URL = 'https://wa.me/553126260038?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20avalia%C3%A7%C3%A3o%20cortesia%20com%20o%20Dr.%20Jefferson%20Reis.';

const faqItems = [
    {
        q: 'Qual tratamento ortodôntico é indicado para mim?',
        a: 'A indicação depende da avaliação clínica, dos exames e dos objetivos do paciente. O planejamento individual define se o caso pode ser conduzido com aparelho convencional ou alinhadores.',
    },
    {
        q: 'Qual é a diferença entre Invisalign, Self e SouSmile?',
        a: 'São sistemas de alinhadores transparentes com características próprias. A escolha deve considerar diagnóstico, complexidade do caso, planejamento e acompanhamento profissional.',
    },
    {
        q: 'Alinhadores transparentes substituem o aparelho convencional em todos os casos?',
        a: 'Não necessariamente. Alguns casos respondem melhor ao aparelho convencional. A avaliação é essencial para escolher uma abordagem segura e adequada.',
    },
    {
        q: 'Como funciona a avaliação cortesia?',
        a: 'O primeiro contato serve para entender sua queixa, revisar o que for necessário e orientar os próximos passos. O tratamento só é definido depois da avaliação individual.',
    },
];

export const metadata = buildMetadata({
    title: 'Dr. Jefferson Reis | Ortodontista em Betim – MG',
    description: 'Conheça o Dr. Jefferson Reis, especialista em Ortodontia e Radiologia Odontológica em Betim. Invisalign, Self, SouSmile e aparelho convencional com planejamento individual.',
    path: PATH,
    image: '/assets/Dr Jeff_edited.avif',
    keywords: [
        'Dr. Jefferson Reis',
        'ortodontista em Betim',
        'radiologia odontológica em Betim',
        'Invisalign Betim',
        'Self alinhadores Betim',
        'SouSmile Betim',
        'alinhadores invisíveis em Betim',
    ],
});

function CTA({ children = 'Agendar avaliação cortesia', className = '' }) {
    return (
        <WhatsAppTrackedLink
            href={WHATSAPP_URL}
            target="_blank"
            className={`inline-flex min-h-12 items-center justify-center rounded-full bg-txt-primary px-7 text-xs font-black uppercase tracking-[0.15em] text-white transition hover:-translate-y-0.5 hover:bg-brand-gold ${className}`}
        >
            {children}
        </WhatsAppTrackedLink>
    );
}

function SectionTitle({ eyebrow, title, copy }) {
    return (
        <div className="max-w-3xl">
            <p className="text-xs font-black uppercase tracking-[0.3em] text-brand-gold">{eyebrow}</p>
            <h2 className="mt-4 text-3xl font-black leading-tight text-txt-primary md:text-4xl">{title}</h2>
            {copy ? <p className="mt-4 text-sm leading-7 text-gray-700 md:text-base md:leading-8">{copy}</p> : null}
        </div>
    );
}

export default function DrJeffersonReisPage() {
    return (
        <main className="min-h-screen bg-white pb-24 text-txt-primary selection:bg-brand-gold selection:text-white md:pb-0">
            <JsonLd data={buildDentistSchema()} />
            <JsonLd
                data={buildProfessionalSchema({
                    name: 'Dr. Jefferson Reis',
                    description: 'Especialista em Ortodontia e Radiologia Odontológica, com atuação em alinhadores e aparelho convencional em Betim.',
                    path: PATH,
                    image: '/assets/Dr Jeff_edited.avif',
                    jobTitle: 'Cirurgião-dentista especialista em Ortodontia e Radiologia Odontológica',
                    specialties: ['Ortodontia', 'Radiologia Odontológica', 'Alinhadores Ortodônticos', 'Invisalign', 'Self', 'SouSmile'],
                })}
            />
            <JsonLd data={buildServiceSchema({ name: 'Ortodontia com Dr. Jefferson Reis em Betim', description: 'Avaliação e planejamento individual para alinhadores ortodônticos e aparelho convencional em Betim.', path: PATH })} />
            <JsonLd data={buildFaqSchema(faqItems)} />
            <JsonLd data={buildBreadcrumbSchema([{ name: 'Início', path: '/' }, { name: 'Dr. Jefferson Reis', path: PATH }])} />

            <Navbar />

            <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top_left,rgba(197,164,126,0.24),transparent_36%),radial-gradient(circle_at_top_right,rgba(17,17,17,0.07),transparent_42%),linear-gradient(180deg,#faf8f4,#ffffff)] pb-16 pt-28 md:pb-24 md:pt-36">
                <div className="mx-auto grid max-w-6xl gap-8 px-5 md:grid-cols-[1.02fr_0.98fr] md:items-center md:px-6">
                    <div>
                        <p className="text-xs font-black uppercase tracking-[0.3em] text-brand-gold">Ortodontista em Betim</p>
                        <h1 className="mt-5 text-4xl font-black leading-[1] md:text-6xl">Dr. Jefferson Reis</h1>
                        <p className="mt-5 max-w-3xl text-sm leading-7 text-gray-700 md:text-lg md:leading-8">
                            Especialista em Ortodontia e Radiologia Odontológica, com planejamento individual para quem busca cuidar do sorriso com clareza e segurança.
                        </p>
                        <div className="mt-5 inline-flex items-center rounded-full border border-brand-gold/35 bg-[#f6f0e5] px-4 py-2 text-[11px] font-black uppercase tracking-[0.16em] text-brand-gold md:text-xs">
                            Invisalign • Self • SouSmile • Aparelho convencional
                        </div>
                        <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                            <CTA />
                            <Link href="#tratamentos" className="inline-flex min-h-12 items-center justify-center rounded-full border border-txt-primary px-7 text-xs font-black uppercase tracking-[0.15em] text-txt-primary transition hover:bg-txt-primary hover:text-white">
                                Conhecer tratamentos
                            </Link>
                        </div>
                        <p className="mt-5 text-xs font-semibold uppercase tracking-[0.16em] text-gray-500">Betim • Clínica Inova • Avaliação individual</p>
                    </div>
                    <div className="rounded-[30px] border border-black/8 bg-white p-3 shadow-[0_24px_80px_rgba(0,0,0,0.08)]">
                        <div className="relative h-80 overflow-hidden rounded-[22px] md:h-[33rem]">
                            <Image src="/assets/Dr Jeff_edited.avif" alt="Dr. Jefferson Reis - especialista em Ortodontia em Betim" fill priority sizes="(max-width: 768px) 100vw, 45vw" className="object-cover object-top" />
                            <div className="absolute bottom-3 left-3 rounded-full border border-white/30 bg-black/55 px-3 py-2 text-[10px] font-black uppercase tracking-[0.16em] text-white backdrop-blur">Planejamento ortodôntico</div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-white py-14 md:py-20">
                <div className="mx-auto grid max-w-6xl gap-5 px-5 md:grid-cols-[1.08fr_0.92fr] md:px-6">
                    <article className="rounded-[28px] border border-black/8 bg-[#fbfaf8] p-6 md:p-10">
                        <SectionTitle eyebrow="Sobre o profissional" title="Cuidado começa com uma boa leitura do caso" copy="O trabalho do Dr. Jefferson Reis parte de diagnóstico, exames e conversa clara. Cada plano é construído de acordo com as necessidades clínicas e os objetivos de cada paciente." />
                        <p className="mt-4 text-sm leading-7 text-gray-700 md:text-base md:leading-8">A atuação reúne Ortodontia e Radiologia Odontológica para apoiar decisões mais bem orientadas, seja com alinhadores transparentes ou com aparelho convencional.</p>
                    </article>
                    <article className="rounded-[28px] border border-black/8 bg-[#111111] p-6 text-white md:p-10">
                        <p className="text-xs font-black uppercase tracking-[0.3em] text-brand-gold">Princípio de atendimento</p>
                        <p className="mt-5 text-2xl font-black leading-tight md:text-3xl">Planejar antes de prometer.</p>
                        <p className="mt-4 text-sm leading-7 text-white/75 md:text-base md:leading-8">A escolha do aparelho ou alinhador deve vir depois da avaliação, e não antes dela.</p>
                        <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-white/80"><ShieldCheck className="h-4 w-4 text-brand-gold" /> Decisão individualizada</div>
                    </article>
                </div>
            </section>

            <section id="tratamentos" className="bg-[#f7f4ef] py-14 md:py-20">
                <div className="mx-auto max-w-6xl px-5 md:px-6">
                    <SectionTitle eyebrow="Tratamentos" title="Alternativas de ortodontia em Betim" copy="Conheça as possibilidades e converse com o profissional para entender qual caminho faz sentido para o seu caso." />
                    <div className="mt-8 grid gap-4 md:grid-cols-2">
                        {[
                            ['Invisalign', 'Alinhadores transparentes com planejamento digital e acompanhamento profissional.', '/invisalign-betim', ScanFace],
                            ['Self', 'Uma alternativa de alinhadores transparentes que deve ser indicada conforme o diagnóstico.', '/alinhadores-invisiveis-betim', Sparkles],
                            ['SouSmile', 'Outra opção de alinhadores transparentes para ser considerada dentro de um plano individual.', '/alinhadores-invisiveis-betim', Check],
                            ['Aparelho convencional', 'Tratamento ortodôntico com aparelho fixo quando essa for a abordagem mais adequada.', '/dentista-em-betim', ShieldCheck],
                        ].map(([title, copy, href, Icon]) => (
                            <article key={title} className="rounded-2xl border border-black/8 bg-white p-6 transition hover:-translate-y-0.5 hover:shadow-[0_10px_28px_rgba(0,0,0,0.06)]">
                                <div className="flex items-start gap-4"><div className="rounded-xl border border-brand-gold/30 bg-[#f8f3e9] p-2.5 text-brand-gold"><Icon className="h-5 w-5" /></div><div><h3 className="text-lg font-black">{title}</h3><p className="mt-2 text-sm leading-7 text-gray-600">{copy}</p><Link href={href} className="mt-4 inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.14em] text-brand-gold">Saiba mais <ArrowRight className="h-4 w-4" /></Link></div></div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="bg-white py-14 md:py-20">
                <div className="mx-auto max-w-6xl px-5 md:px-6">
                    <SectionTitle eyebrow="Como funciona" title="Uma jornada com mais clareza" />
                    <div className="mt-8 grid gap-4 md:grid-cols-3">
                        {[['01', 'Avaliação', 'Entendemos sua queixa, histórico e objetivos.'], ['02', 'Exames e planejamento', 'Reunimos as informações necessárias para definir a abordagem.'], ['03', 'Acompanhamento', 'Você segue cada etapa com orientação profissional.']].map(([number, title, copy]) => <article key={number} className="rounded-2xl border border-black/8 p-6"><span className="text-sm font-black text-brand-gold">{number}</span><h3 className="mt-5 text-xl font-black">{title}</h3><p className="mt-3 text-sm leading-7 text-gray-600">{copy}</p></article>)}
                    </div>
                </div>
            </section>

            <section className="bg-[#111111] py-14 text-white md:py-20">
                <div className="mx-auto grid max-w-6xl gap-8 px-5 md:grid-cols-[0.9fr_1.1fr] md:px-6 md:items-center">
                    <div><p className="text-xs font-black uppercase tracking-[0.3em] text-brand-gold">Dúvidas frequentes</p><h2 className="mt-4 text-3xl font-black leading-tight md:text-4xl">Antes de escolher, entenda o seu caso.</h2><p className="mt-4 text-sm leading-7 text-white/70 md:text-base md:leading-8">A avaliação ajuda a transformar informação em decisão responsável.</p></div>
                    <div className="space-y-3">{faqItems.map((item) => <details key={item.q} className="group rounded-2xl border border-white/10 bg-white/5 p-5"><summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-bold"><span>{item.q}</span><CircleHelp className="h-5 w-5 shrink-0 text-brand-gold" /></summary><p className="mt-4 text-sm leading-7 text-white/70">{item.a}</p></details>)}</div>
                </div>
            </section>

            <section className="bg-[#f7f4ef] py-14 md:py-20"><div className="mx-auto max-w-4xl px-5 text-center md:px-6"><p className="text-xs font-black uppercase tracking-[0.3em] text-brand-gold">Próximo passo</p><h2 className="mt-4 text-3xl font-black leading-tight md:text-5xl">Quer entender qual tratamento combina com o seu caso?</h2><p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-gray-700 md:text-base md:leading-8">Fale com a Clínica Inova e solicite uma avaliação cortesia com o Dr. Jefferson Reis.</p><CTA className="mt-7" /></div></section>

            <Footer />
            <ChatWidget />
            <MobileStickyCTA href={WHATSAPP_URL} label="Agendar avaliação cortesia" />
        </main>
    );
}
