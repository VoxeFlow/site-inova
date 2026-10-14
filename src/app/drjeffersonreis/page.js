import Image from 'next/image';
import Link from 'next/link';
import { ArrowDown, ArrowUpRight, CircleHelp, MapPin, ShieldCheck } from 'lucide-react';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ChatWidget from '@/components/ChatWidget';
import MobileStickyCTA from '@/components/MobileStickyCTA';
import WhatsAppTrackedLink from '@/components/WhatsAppTrackedLink';
import TreatmentSwitcher from '@/components/TreatmentSwitcher';
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
    { q: 'Qual tratamento ortodôntico é indicado para mim?', a: 'A indicação depende da avaliação clínica, dos exames e dos objetivos do paciente. O planejamento individual define se o caso pode ser conduzido com aparelho convencional ou alinhadores.' },
    { q: 'Qual é a diferença entre Invisalign, Self e SouSmile?', a: 'São sistemas de alinhadores transparentes com características próprias. A escolha deve considerar diagnóstico, complexidade do caso, planejamento e acompanhamento profissional.' },
    { q: 'Alinhadores substituem o aparelho convencional em todos os casos?', a: 'Não necessariamente. Alguns casos respondem melhor ao aparelho convencional. A avaliação é essencial para escolher uma abordagem segura e adequada.' },
    { q: 'Como funciona a avaliação cortesia?', a: 'O primeiro contato serve para entender sua queixa, revisar o que for necessário e orientar os próximos passos. O tratamento só é definido depois da avaliação individual.' },
];

export const metadata = buildMetadata({
    title: 'Dr. Jefferson Reis | Ortodontista em Betim – MG',
    description: 'Conheça o Dr. Jefferson Reis, especialista em Ortodontia e Radiologia Odontológica em Betim. Invisalign, Self, SouSmile e aparelho convencional com planejamento individual.',
    path: PATH,
    image: '/assets/Dr Jeff_edited.avif',
    keywords: ['Dr. Jefferson Reis', 'ortodontista em Betim', 'radiologia odontológica em Betim', 'Invisalign Betim', 'Self alinhadores Betim', 'SouSmile Betim', 'alinhadores invisíveis em Betim'],
});

function CTA({ children = 'Agendar avaliação cortesia', className = '' }) {
    return <WhatsAppTrackedLink href={WHATSAPP_URL} target="_blank" className={`group inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-txt-primary px-7 text-xs font-black uppercase tracking-[0.15em] text-white transition duration-300 hover:-translate-y-1 hover:bg-brand-gold hover:shadow-[0_14px_30px_rgba(197,160,89,0.24)] ${className}`}>
        {children}<ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
    </WhatsAppTrackedLink>;
}

function SectionLabel({ children }) { return <p className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-gold">{children}</p>; }

export default function DrJeffersonReisPage() {
    return <main className="min-h-screen overflow-hidden bg-[#fbfaf8] text-txt-primary selection:bg-brand-gold selection:text-white md:pb-0">
        <JsonLd data={buildDentistSchema()} />
        <JsonLd data={buildProfessionalSchema({ name: 'Dr. Jefferson Reis', description: 'Especialista em Ortodontia e Radiologia Odontológica, com atuação em alinhadores e aparelho convencional em Betim.', path: PATH, image: '/assets/Dr Jeff_edited.avif', jobTitle: 'Cirurgião-dentista especialista em Ortodontia e Radiologia Odontológica', specialties: ['Ortodontia', 'Radiologia Odontológica', 'Alinhadores Ortodônticos', 'Invisalign', 'Self', 'SouSmile'] })} />
        <JsonLd data={buildServiceSchema({ name: 'Ortodontia com Dr. Jefferson Reis em Betim', description: 'Avaliação e planejamento individual para alinhadores ortodônticos e aparelho convencional em Betim.', path: PATH })} />
        <JsonLd data={buildFaqSchema(faqItems)} />
        <JsonLd data={buildBreadcrumbSchema([{ name: 'Início', path: '/' }, { name: 'Dr. Jefferson Reis', path: PATH }])} />

        <Navbar />

        <section className="relative isolate flex min-h-[760px] items-end overflow-hidden bg-[#f4f0e9] pb-12 pt-32 md:min-h-[860px] md:pb-20 md:pt-40">
            <div className="absolute -right-40 top-10 -z-10 h-[38rem] w-[38rem] rounded-full border border-brand-gold/20 bg-brand-gold/10 blur-3xl" />
            <div className="absolute -left-56 bottom-0 -z-10 h-[32rem] w-[32rem] rounded-full bg-white/70 blur-3xl" />
            <div className="mx-auto grid w-full max-w-7xl gap-10 px-5 md:grid-cols-[0.86fr_1.14fr] md:items-end md:px-10">
                <div className="relative z-10 pb-4 motion-safe:animate-fade-up">
                    <SectionLabel>Ortodontista em Betim</SectionLabel>
                    <h1 className="mt-5 max-w-xl text-[3.25rem] font-black leading-[0.92] tracking-[-0.06em] md:text-[6.6rem]">Dr. Jefferson<br /><span className="text-brand-gold">Reis</span></h1>
                    <p className="mt-7 max-w-lg text-base leading-8 text-gray-600 md:text-lg">Ortodontia e Radiologia Odontológica com uma abordagem mais clara, individual e tranquila.</p>
                    <div className="mt-8 flex flex-col gap-3 sm:flex-row"><CTA /><Link href="#tratamentos" className="group inline-flex min-h-12 items-center justify-center gap-3 rounded-full border border-black/15 bg-white/55 px-7 text-xs font-black uppercase tracking-[0.15em] transition duration-300 hover:-translate-y-1 hover:bg-white">Ver possibilidades <ArrowDown className="h-4 w-4 transition-transform group-hover:translate-y-1" /></Link></div>
                    <div className="mt-9 flex items-center gap-3 text-xs font-semibold text-gray-500"><MapPin className="h-4 w-4 text-brand-gold" /> Clínica Inova · Betim, MG</div>
                </div>
                <div className="relative motion-safe:animate-fade-up [animation-delay:180ms]">
                    <div className="absolute -left-5 top-12 hidden rounded-full border border-black/10 bg-white/80 px-4 py-3 text-[10px] font-black uppercase tracking-[0.2em] shadow-lg backdrop-blur md:block">Planejamento<br />individual</div>
                    <div className="relative ml-auto aspect-[0.84] max-w-[34rem] overflow-hidden rounded-[180px_180px_28px_28px] border-[10px] border-white bg-white shadow-[0_30px_100px_rgba(34,28,20,0.16)] transition duration-700 hover:rounded-[150px_150px_28px_28px] hover:shadow-[0_38px_120px_rgba(34,28,20,0.22)]">
                        <Image src="/assets/Dr Jeff_edited.avif" alt="Dr. Jefferson Reis - especialista em Ortodontia em Betim" fill priority sizes="(max-width: 768px) 92vw, 42vw" className="object-cover object-top transition duration-700 hover:scale-[1.03]" />
                    </div>
                    <div className="absolute -bottom-4 right-3 rounded-full bg-txt-primary px-5 py-3 text-[10px] font-black uppercase tracking-[0.18em] text-white shadow-xl md:right-8">Invisalign · Self · SouSmile</div>
                </div>
            </div>
        </section>

        <section className="bg-[#111111] py-6 text-white"><div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 text-center text-[10px] font-black uppercase tracking-[0.22em] text-white/60 md:flex-row md:justify-between md:px-10"><span>Especialista em Ortodontia</span><span className="hidden text-brand-gold md:inline">✦</span><span>Decisão baseada em avaliação</span><span className="hidden text-brand-gold md:inline">✦</span><span>Atendimento individual em Betim</span></div></section>

        <section className="bg-white py-24 md:py-36"><div className="mx-auto grid max-w-7xl gap-12 px-5 md:grid-cols-[0.75fr_1.25fr] md:px-10"><div><SectionLabel>Sobre o profissional</SectionLabel><h2 className="mt-5 max-w-sm text-4xl font-black leading-[0.98] tracking-[-0.04em] md:text-6xl">Menos ruído.<br /><span className="text-brand-gold">Mais clareza.</span></h2></div><div className="max-w-2xl"><p className="text-xl leading-9 text-gray-700 md:text-3xl md:leading-[1.45]">O tratamento começa antes do aparelho: começa entendendo o que você precisa.</p><p className="mt-7 text-sm leading-8 text-gray-500 md:text-base">Cada plano considera avaliação clínica, exames e objetivos reais. Alinhadores transparentes e aparelho convencional são caminhos possíveis — a escolha vem depois do diagnóstico.</p><div className="mt-9 flex items-center gap-3 text-sm font-bold"><ShieldCheck className="h-5 w-5 text-brand-gold" /> Planejamento individualizado</div></div></div></section>

        <section id="tratamentos" className="bg-[#f4f0e9] py-24 md:py-32"><div className="mx-auto max-w-7xl px-5 md:px-10"><div className="flex flex-col justify-between gap-5 md:flex-row md:items-end"><div><SectionLabel>Tratamentos</SectionLabel><h2 className="mt-5 max-w-2xl text-4xl font-black leading-[0.98] tracking-[-0.04em] md:text-6xl">Escolha começa com<br /><span className="text-brand-gold">informação.</span></h2></div><p className="max-w-sm text-sm leading-7 text-gray-600">Explore as possibilidades e entenda por que a indicação precisa ser individual.</p></div><TreatmentSwitcher /></div></section>

        <section className="bg-white py-24 md:py-32"><div className="mx-auto max-w-7xl px-5 md:px-10"><div className="grid gap-10 md:grid-cols-[0.65fr_1.35fr] md:items-end"><div><SectionLabel>Como funciona</SectionLabel><h2 className="mt-5 text-4xl font-black leading-[0.98] tracking-[-0.04em] md:text-6xl">Um passo<br />de cada vez.</h2></div><div className="grid gap-px overflow-hidden rounded-3xl border border-black/8 bg-black/8 md:grid-cols-3">{[['01', 'Avaliação', 'Entender sua queixa e seus objetivos.'], ['02', 'Planejamento', 'Cruzar exames, diagnóstico e possibilidades.'], ['03', 'Acompanhamento', 'Seguir o tratamento com orientação próxima.']].map(([num, title, copy]) => <article key={num} className="group bg-white p-7 transition duration-500 hover:bg-[#111111] hover:text-white"><span className="text-xs font-black text-brand-gold">{num}</span><h3 className="mt-12 text-xl font-black">{title}</h3><p className="mt-3 text-sm leading-7 text-gray-500 transition group-hover:text-white/60">{copy}</p></article>)}</div></div></div></section>

        <section className="bg-[#111111] py-24 text-white md:py-32"><div className="mx-auto grid max-w-7xl gap-12 px-5 md:grid-cols-[0.7fr_1.3fr] md:px-10"><div><SectionLabel>Dúvidas frequentes</SectionLabel><h2 className="mt-5 max-w-md text-4xl font-black leading-[0.98] tracking-[-0.04em] md:text-6xl">Antes de decidir,<br /><span className="text-brand-gold">converse.</span></h2><p className="mt-6 max-w-sm text-sm leading-7 text-white/55">A avaliação transforma possibilidades em um plano real para você.</p></div><div className="space-y-2">{faqItems.map((item) => <details key={item.q} className="group border-b border-white/15 py-5"><summary className="flex cursor-pointer list-none items-center justify-between gap-5 text-base font-bold md:text-lg"><span>{item.q}</span><CircleHelp className="h-5 w-5 shrink-0 text-brand-gold transition-transform duration-300 group-open:rotate-45" /></summary><p className="max-w-2xl pt-4 text-sm leading-7 text-white/60">{item.a}</p></details>)}</div></div></section>

        <section className="bg-brand-gold px-5 py-24 text-center md:py-32"><SectionLabel>Próximo passo</SectionLabel><h2 className="mx-auto mt-5 max-w-3xl text-4xl font-black leading-[0.98] tracking-[-0.04em] md:text-7xl">Seu sorriso merece<br />um plano claro.</h2><p className="mx-auto mt-6 max-w-lg text-sm leading-7 text-black/65 md:text-base">Fale com a Clínica Inova e solicite uma avaliação cortesia com o Dr. Jefferson Reis.</p><CTA className="mt-8 bg-txt-primary hover:bg-white hover:text-txt-primary" /></section>

        <Footer /><ChatWidget /><MobileStickyCTA />
    </main>;
}
