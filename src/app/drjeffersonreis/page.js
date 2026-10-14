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
    { q: 'Quanto custa o tratamento ortodôntico?', a: 'Não existe um valor único. O investimento depende do diagnóstico, da complexidade, do tempo estimado e da modalidade indicada, como Invisalign, Self, SouSmile ou aparelho convencional.' },
    { q: 'Qual é a diferença entre Invisalign, Self e SouSmile?', a: 'São sistemas de alinhadores transparentes com características próprias. A escolha deve considerar diagnóstico, complexidade do caso, planejamento e acompanhamento profissional.' },
    { q: 'Alinhadores substituem o aparelho convencional em todos os casos?', a: 'Não necessariamente. Alguns casos respondem melhor ao aparelho convencional. A avaliação é essencial para escolher uma abordagem segura e adequada.' },
    { q: 'Como funciona a avaliação cortesia?', a: 'O primeiro contato serve para entender sua queixa, revisar o que for necessário e orientar os próximos passos. O tratamento só é definido depois da avaliação individual.' },
];

export const metadata = buildMetadata({
    title: 'Dr. Jefferson Reis | Invisalign Doctor em Betim',
    description: 'Dr. Jefferson Reis, Invisalign Doctor e especialista em Ortodontia em Betim. Alinhadores, planejamento individual e opções ortodônticas para adultos, adolescentes e crianças.',
    path: PATH,
    image: '/assets/Dr Jeff_edited.avif',
    keywords: ['Dr. Jefferson Reis', 'Invisalign Doctor em Betim', 'ortodontista em Betim', 'alinhadores em Betim', 'Self alinhadores Betim', 'SouSmile Betim', 'aparelho estético em Betim'],
});

function CTA({ children = 'Agendar avaliação cortesia', className = '' }) {
    return <WhatsAppTrackedLink href={WHATSAPP_URL} target="_blank" className={`group inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-txt-primary px-7 text-xs font-medium uppercase tracking-[0.15em] text-white transition duration-300 hover:-translate-y-1 hover:bg-brand-gold hover:shadow-[0_14px_30px_rgba(197,160,89,0.24)] ${className}`}>
        {children}<ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
    </WhatsAppTrackedLink>;
}

function SectionLabel({ children }) { return <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-brand-gold">{children}</p>; }

export default function DrJeffersonReisPage() {
    return <main className="min-h-screen overflow-hidden bg-white text-txt-primary selection:bg-brand-gold selection:text-white md:pb-0">
        <JsonLd data={buildDentistSchema()} />
        <JsonLd data={buildProfessionalSchema({ name: 'Dr. Jefferson Reis', description: 'Invisalign Doctor e especialista em Ortodontia, com atuação em alinhadores e planejamento individual em Betim.', path: PATH, image: '/assets/Dr Jeff_edited.avif', jobTitle: 'Cirurgião-dentista especialista em Ortodontia', specialties: ['Ortodontia', 'Alinhadores Ortodônticos', 'Invisalign', 'Self', 'SouSmile'] })} />
        <JsonLd data={buildServiceSchema({ name: 'Ortodontia com Dr. Jefferson Reis em Betim', description: 'Avaliação e planejamento individual para alinhadores ortodônticos e aparelho convencional em Betim.', path: PATH })} />
        <JsonLd data={buildFaqSchema(faqItems)} />
        <JsonLd data={buildBreadcrumbSchema([{ name: 'Início', path: '/' }, { name: 'Dr. Jefferson Reis', path: PATH }])} />

        <Navbar />

        <section id="inicio" className="relative isolate flex min-h-[760px] items-end overflow-hidden bg-white pb-12 pt-32 md:min-h-[860px] md:pb-20 md:pt-40">
            <div className="mx-auto grid w-full max-w-7xl gap-10 px-5 md:grid-cols-[0.86fr_1.14fr] md:items-end md:px-10">
                <div className="relative z-10 pb-4 motion-safe:animate-fade-up">
                    <SectionLabel>Dr. Jefferson Reis · Invisalign Doctor</SectionLabel>
                    <h1 className="mt-5 max-w-xl text-[3.25rem] font-normal leading-[0.92] tracking-[-0.06em] md:text-[6.3rem]">Seu sorriso,<br /><span className="text-brand-gold">bem planejado.</span></h1>
                    <p className="mt-7 max-w-lg text-base leading-8 text-gray-600 md:text-lg">Ortodontia em Betim para quem busca melhorar o sorriso e a mastigação com discrição, tecnologia e um plano individual.</p>
                    <div className="mt-8 flex flex-col gap-3 sm:flex-row"><CTA /><Link href="#tratamentos" className="group inline-flex min-h-12 items-center justify-center gap-3 rounded-full border border-black/15 bg-white/55 px-7 text-xs font-medium uppercase tracking-[0.15em] transition duration-300 hover:-translate-y-1 hover:bg-white">Ver possibilidades <ArrowDown className="h-4 w-4 transition-transform group-hover:translate-y-1" /></Link></div>
                    <div className="mt-9 flex items-center gap-3 text-xs font-semibold text-gray-500"><MapPin className="h-4 w-4 text-brand-gold" /> Clínica Inova · Betim, MG</div>
                </div>
                <div className="relative motion-safe:animate-fade-up [animation-delay:180ms]">
                    <div className="absolute -left-5 top-12 hidden rounded-full border border-black/10 bg-white/80 px-4 py-3 text-[10px] font-medium uppercase tracking-[0.2em] shadow-lg backdrop-blur md:block">Planejamento<br />individual</div>
                    <div className="relative ml-auto aspect-[0.84] max-w-[34rem]">
                        <Image src="/assets/Dr Jeff_edited.avif" alt="Dr. Jefferson Reis - especialista em Ortodontia em Betim" fill priority sizes="(max-width: 768px) 92vw, 42vw" className="object-cover object-top transition duration-700 hover:scale-[1.02]" />
                    </div>
                    <div className="absolute -bottom-4 right-3 rounded-full bg-white px-5 py-3 text-[10px] font-medium uppercase tracking-[0.18em] text-gray-600 shadow-xl md:right-8">Invisalign · Self · SouSmile</div>
                </div>
            </div>
        </section>

        <section className="border-y border-black/6 bg-[#f5f5f7] py-6"><div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 text-center text-[10px] font-medium uppercase tracking-[0.22em] text-gray-500 md:flex-row md:justify-between md:px-10"><span>Especialista em Ortodontia</span><span className="hidden text-brand-gold md:inline">✦</span><span>Decisão baseada em avaliação</span><span className="hidden text-brand-gold md:inline">✦</span><span>Atendimento individual em Betim</span></div></section>

        <section className="bg-white py-24 md:py-36"><div className="mx-auto grid max-w-7xl gap-12 px-5 md:grid-cols-[0.75fr_1.25fr] md:px-10"><div><SectionLabel>Sobre o profissional</SectionLabel><h2 className="mt-5 max-w-sm text-4xl font-normal leading-[0.98] tracking-[-0.04em] md:text-6xl">Menos ruído.<br /><span className="text-brand-gold">Mais clareza.</span></h2></div><div className="max-w-2xl"><p className="text-xl leading-9 text-gray-700 md:text-3xl md:leading-[1.45]">O tratamento começa antes do aparelho: começa entendendo o que você precisa.</p><p className="mt-7 text-sm leading-8 text-gray-500 md:text-base">Dr. Jefferson Reis atua clinicamente desde 2006. É graduado pela Universidade de Itaúna, especialista em Ortodontia pelo CEFOS UNINGÁ e Invisalign Doctor credenciado. Na Clínica Inova, sua experiência se une a um planejamento digital, atendimento individual e acompanhamento próximo.</p><div className="mt-9 flex items-center gap-3 text-sm font-medium"><ShieldCheck className="h-5 w-5 text-brand-gold" /> CRO-MG 34107 · 20 anos de experiência clínica</div></div></div></section>

        <section className="bg-[#f5f5f7] py-20 md:py-28"><div className="mx-auto max-w-7xl px-5 md:px-10"><div className="grid gap-10 md:grid-cols-[0.7fr_1.3fr]"><div><SectionLabel>O que orienta o plano</SectionLabel><h2 className="mt-5 max-w-md text-4xl font-normal leading-[0.98] tracking-[-0.04em] md:text-6xl">Diagnóstico antes<br /><span className="text-brand-gold">da escolha.</span></h2></div><div className="grid gap-px overflow-hidden rounded-3xl border border-black/8 bg-black/8 sm:grid-cols-2"><article className="bg-white p-7"><p className="text-xs font-medium uppercase tracking-[0.2em] text-brand-gold">Planejamento individual</p><h3 className="mt-4 text-xl font-normal">Tecnologia a favor do seu sorriso</h3><p className="mt-3 text-sm leading-7 text-gray-500">Fotografias, escaneamento digital e os exames indicados ajudam a construir um plano mais preciso para cada caso.</p></article><article className="bg-white p-7"><p className="text-xs font-medium uppercase tracking-[0.2em] text-brand-gold">Decisão clínica</p><h3 className="mt-4 text-xl font-normal">Clareza para escolher</h3><p className="mt-3 text-sm leading-7 text-gray-500">Você entende as possibilidades, as etapas e o investimento antes de decidir qual caminho faz mais sentido para você.</p></article></div></div></div></section>

        <section id="tratamentos" className="bg-[#f5f5f7] py-24 md:py-32"><div className="mx-auto max-w-7xl px-5 md:px-10"><div className="flex flex-col justify-between gap-5 md:flex-row md:items-end"><div><SectionLabel>Possibilidades de tratamento</SectionLabel><h2 className="mt-5 max-w-2xl text-4xl font-normal leading-[0.98] tracking-[-0.04em] md:text-6xl">Você não precisa<br /><span className="text-brand-gold">escolher sozinho.</span></h2></div><p className="max-w-sm text-sm leading-7 text-gray-600">Invisalign, Self, SouSmile e aparelhos são possibilidades. A indicação vem depois de entender o seu caso.</p></div><TreatmentSwitcher /></div></section>

        <section id="investimento" className="bg-white py-24 md:py-32"><div className="mx-auto max-w-7xl px-5 md:px-10"><div className="grid gap-12 md:grid-cols-[0.72fr_1.28fr] md:items-center"><div><SectionLabel>Valores e avaliação</SectionLabel><h2 className="mt-5 max-w-lg text-4xl font-normal leading-[0.98] tracking-[-0.04em] md:text-6xl">Cada sorriso tem<br /><span className="text-brand-gold">um plano.</span></h2><p className="mt-6 max-w-md text-sm leading-7 text-gray-500 md:text-base">Por isso, o valor não é definido por uma tabela única antes de entender o caso.</p><CTA className="mt-7" /></div><div className="grid gap-3 sm:grid-cols-3"><article className="rounded-2xl border border-black/8 bg-[#f5f5f7] p-6"><span className="text-xs font-medium text-brand-gold">01</span><h3 className="mt-10 text-xl font-normal">Avaliação cortesia</h3><p className="mt-3 text-sm leading-7 text-gray-500">Uma conversa inicial para entender sua queixa, seus objetivos e o que você espera do tratamento.</p></article><article className="rounded-2xl border border-black/8 bg-[#f5f5f7] p-6"><span className="text-xs font-medium text-brand-gold">02</span><h3 className="mt-10 text-xl font-normal">Análise do caso</h3><p className="mt-3 text-sm leading-7 text-gray-500">A avaliação clínica orienta a necessidade de exames, o diagnóstico e as possibilidades de tratamento.</p></article><article className="rounded-2xl border border-black/8 bg-[#f5f5f7] p-6"><span className="text-xs font-medium text-brand-gold">03</span><h3 className="mt-10 text-xl font-normal">Plano e investimento</h3><p className="mt-3 text-sm leading-7 text-gray-500">Depois da indicação, você recebe a explicação das etapas, do tempo estimado e do investimento correspondente.</p></article></div></div></div></section>

        <section className="bg-[#f5f5f7] py-24 md:py-32"><div className="mx-auto max-w-7xl px-5 md:px-10"><div className="grid gap-10 md:grid-cols-[0.72fr_1.28fr] md:items-end"><div><SectionLabel>Para quem é</SectionLabel><h2 className="mt-5 max-w-lg text-4xl font-normal leading-[0.98] tracking-[-0.04em] md:text-6xl">Ortodontia que<br /><span className="text-brand-gold">acompanha sua vida.</span></h2></div><p className="max-w-xl text-base leading-8 text-gray-600 md:text-lg">Para adultos que querem cuidar do sorriso e da mastigação com discrição, sem abrir mão de um planejamento sério e de uma conversa clara.</p></div><div className="mt-12 grid gap-3 md:grid-cols-3"><article className="rounded-2xl bg-white p-7 transition duration-500 hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(0,0,0,0.06)]"><p className="text-xs font-medium uppercase tracking-[0.2em] text-brand-gold">01 · Rotina</p><h3 className="mt-5 text-xl font-normal">Um tratamento discreto</h3><p className="mt-3 text-sm leading-7 text-gray-500">Possibilidades de alinhadores para quem não quer que o tratamento defina sua imagem ou interrompa sua rotina.</p></article><article className="rounded-2xl bg-white p-7 transition duration-500 hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(0,0,0,0.06)]"><p className="text-xs font-medium uppercase tracking-[0.2em] text-brand-gold">02 · Objetivos</p><h3 className="mt-5 text-xl font-normal">Estética e função</h3><p className="mt-3 text-sm leading-7 text-gray-500">O planejamento considera o sorriso, a mordida, a mastigação e aquilo que você espera alcançar.</p></article><article className="rounded-2xl bg-white p-7 transition duration-500 hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(0,0,0,0.06)]"><p className="text-xs font-medium uppercase tracking-[0.2em] text-brand-gold">03 · Decisão</p><h3 className="mt-5 text-xl font-normal">Escolha com segurança</h3><p className="mt-3 text-sm leading-7 text-gray-500">Você conhece as alternativas, entende o investimento e decide com calma o que faz sentido para o seu caso.</p></article></div><CTA className="mt-8" /></div></section>

        <section id="processo" className="bg-white py-24 md:py-32"><div className="mx-auto max-w-7xl px-5 md:px-10"><div className="grid gap-10 md:grid-cols-[0.65fr_1.35fr] md:items-center"><div><SectionLabel>Como funciona</SectionLabel><h2 className="mt-5 text-4xl font-normal leading-[0.98] tracking-[-0.04em] md:text-6xl">Um passo<br />de cada vez.</h2></div><div className="grid gap-px overflow-hidden rounded-3xl border border-black/8 bg-black/8 sm:grid-cols-2 md:grid-cols-3">{[['01', 'WhatsApp', 'Primeiro contato para entender sua necessidade.'], ['02', 'Avaliação clínica', 'Conversar sobre objetivos, queixa e expectativas.'], ['03', 'Exames', 'Solicitar ou analisar os exames necessários.'], ['04', 'Plano', 'Apresentar as possibilidades indicadas para o caso.'], ['05', 'Início', 'Escolher o caminho e começar o tratamento.'], ['06', 'Acompanhamento', 'Revisões periódicas com orientação próxima.']].map(([num, title, copy]) => <article key={num} className="group bg-white p-7 transition duration-500 hover:bg-[#f5f5f7]"><span className="text-xs font-medium text-brand-gold">{num}</span><h3 className="mt-12 text-xl font-normal">{title}</h3><p className="mt-3 text-sm leading-7 text-gray-500">{copy}</p></article>)}</div></div></div></section>

        <section className="bg-white py-16 md:py-24"><div className="mx-auto max-w-7xl px-5 md:px-10"><div className="flex flex-col justify-between gap-6 border-y border-black/10 py-10 md:flex-row md:items-end"><div><SectionLabel>Equipe Clínica Inova</SectionLabel><h2 className="mt-4 text-3xl font-normal tracking-[-0.03em] md:text-5xl">Ortodontia com apoio de uma equipe.</h2></div><p className="max-w-md text-sm leading-7 text-gray-500">Alguns tratamentos são conduzidos por profissionais da equipe, de acordo com a necessidade clínica de cada paciente.</p></div><div className="mt-8 grid gap-3 md:grid-cols-3"><article className="rounded-2xl bg-[#f5f5f7] p-6"><h3 className="text-lg font-normal">Dr. Lucas Vilela</h3><p className="mt-2 text-sm leading-7 text-gray-500">Professor e implantodontista.</p></article><article className="rounded-2xl bg-[#f5f5f7] p-6"><h3 className="text-lg font-normal">Dra. Rose</h3><p className="mt-2 text-sm leading-7 text-gray-500">Ortodontista e clínica geral.</p></article><article className="rounded-2xl bg-[#f5f5f7] p-6"><h3 className="text-lg font-normal">Dr. Arthur</h3><p className="mt-2 text-sm leading-7 text-gray-500">Implantodontista e clínico geral.</p></article></div></div></section>

        <section id="duvidas-rapidas" className="bg-[#f5f5f7] py-24 md:py-32"><div className="mx-auto grid max-w-7xl gap-12 px-5 md:grid-cols-[0.7fr_1.3fr] md:px-10"><div><SectionLabel>Dúvidas frequentes</SectionLabel><h2 className="mt-5 max-w-md text-4xl font-normal leading-[0.98] tracking-[-0.04em] md:text-6xl">Antes de decidir,<br /><span className="text-brand-gold">converse.</span></h2><p className="mt-6 max-w-sm text-sm leading-7 text-gray-500">A avaliação transforma possibilidades em um plano real para você.</p></div><div className="space-y-2">{faqItems.map((item) => <details key={item.q} className="group border-b border-black/10 py-5"><summary className="flex cursor-pointer list-none items-center justify-between gap-5 text-base font-medium md:text-lg"><span>{item.q}</span><CircleHelp className="h-5 w-5 shrink-0 text-brand-gold transition-transform duration-300 group-open:rotate-45" /></summary><p className="max-w-2xl pt-4 text-sm leading-7 text-gray-500">{item.a}</p></details>)}</div></div></section>

        <section id="contato" className="bg-[#f5f5f7] px-5 py-24 text-center md:py-32"><SectionLabel>Próximo passo</SectionLabel><h2 className="mx-auto mt-5 max-w-3xl text-4xl font-normal leading-[0.98] tracking-[-0.04em] md:text-7xl">Seu sorriso merece<br />um plano claro.</h2><p className="mx-auto mt-6 max-w-lg text-sm leading-7 text-gray-500 md:text-base">Fale com a Clínica Inova e solicite uma avaliação cortesia com o Dr. Jefferson Reis.</p><CTA className="mt-8" /></section>

        <Footer /><ChatWidget /><MobileStickyCTA />
    </main>;
}
