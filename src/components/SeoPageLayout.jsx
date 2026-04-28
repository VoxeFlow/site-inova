import Link from 'next/link';
import WhatsAppTrackedLink from '@/components/WhatsAppTrackedLink';
import { ArrowRight, CheckCircle2, MapPin, Phone } from 'lucide-react';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ChatWidget from '@/components/ChatWidget';
import MobileStickyCTA from '@/components/MobileStickyCTA';
import JsonLd from '@/components/JsonLd';
import { CLINIC_INFO } from '@/lib/seo';

function FaqBlock({ items }) {
    return (
        <section className="py-24 bg-[#121212] text-white">
            <div className="max-w-6xl mx-auto px-6">
                <div className="max-w-3xl mb-14">
                    <p className="text-xs font-black uppercase tracking-[0.32em] text-brand-gold">FAQ</p>
                    <h2 className="mt-5 text-3xl md:text-5xl font-black leading-tight">Perguntas que realmente aparecem antes da decisão.</h2>
                </div>
                <div className="grid gap-4">
                    {items.map((item) => (
                        <div key={item.q} className="rounded-[28px] border border-white/8 bg-white/[0.03] px-6 py-6 md:px-8">
                            <h3 className="text-lg md:text-xl font-black text-white">{item.q}</h3>
                            <p className="mt-3 text-white/62 leading-8">{item.a}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default function SeoPageLayout({
    schema = [],
    breadcrumb,
    eyebrow,
    title,
    description,
    bulletPoints = [],
    sections = [],
    faqs = [],
    ctaTitle,
    ctaCopy,
    relatedLinks = [],
    relatedArticles = [],
}) {
    return (
        <main className="min-h-screen bg-white pb-24 text-txt-primary selection:bg-brand-gold selection:text-white md:pb-0">
            {schema.map((item, index) => (
                <JsonLd key={index} data={item} />
            ))}
            <Navbar />

            <section className="bg-[linear-gradient(180deg,#f8f6f2,white)] pb-16 pt-28 md:pb-20 md:pt-36">
                <div className="max-w-7xl mx-auto px-5 md:px-6">
                    <div className="max-w-5xl">
                        {breadcrumb ? (
                            <div className="mb-8 flex flex-wrap gap-2">
                                {breadcrumb.map((item, index) => (
                                    <div key={item.href} className="flex items-center gap-2">
                                        {index > 0 ? <span className="text-gray-300">/</span> : null}
                                        <Link
                                            href={item.href}
                                            className="rounded-full border border-black/8 bg-white px-4 py-2 text-[11px] font-black uppercase tracking-[0.18em] text-gray-500 transition hover:border-brand-gold hover:text-brand-gold"
                                        >
                                            {item.label}
                                        </Link>
                                    </div>
                                ))}
                            </div>
                        ) : null}
                        <p className="text-xs font-black uppercase tracking-[0.34em] text-brand-gold">{eyebrow}</p>
                        <h1 className="mt-6 max-w-5xl text-[2.1rem] font-black leading-[0.98] md:text-6xl">{title}</h1>
                        <p className="mt-6 max-w-4xl text-base leading-8 text-gray-600 md:mt-8 md:text-xl md:leading-9">{description}</p>
                        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4 md:mt-10">
                            <WhatsAppTrackedLink
                                href={CLINIC_INFO.whatsapp}
                                target="_blank"
                                className="inline-flex items-center justify-center gap-3 rounded-full bg-txt-primary px-8 py-4 text-center text-[11px] font-black uppercase tracking-[0.18em] text-white transition hover:bg-brand-gold md:text-sm"
                            >
                                Falar com a clínica <ArrowRight className="w-4 h-4" />
                            </WhatsAppTrackedLink>
                            <Link
                                href="/inicio#agendamento"
                                className="inline-flex items-center justify-center gap-3 rounded-full border border-txt-primary px-8 py-4 text-center text-[11px] font-black uppercase tracking-[0.18em] text-txt-primary transition hover:bg-txt-primary hover:text-white md:text-sm"
                            >
                                Agendar avaliação
                            </Link>
                        </div>
                    </div>

                    {bulletPoints.length ? (
                        <div className="mt-10 grid gap-4 md:mt-12 md:grid-cols-3">
                            {bulletPoints.map((item) => (
                                <div key={item} className="rounded-[24px] border border-black/8 bg-white px-6 py-6 shadow-[0_16px_60px_rgba(0,0,0,0.05)]">
                                    <div className="flex items-start gap-3">
                                        <CheckCircle2 className="mt-1 w-5 h-5 text-brand-gold" />
                                        <p className="font-bold leading-7">{item}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : null}
                </div>
            </section>

            <section className="bg-white py-16 md:py-20">
                <div className="max-w-7xl mx-auto grid gap-5 px-5 md:px-6 lg:grid-cols-2 lg:gap-6">
                    {sections.map((section) => (
                        <div key={section.title} className="rounded-[32px] border border-black/8 bg-[#fbfaf8] p-8 md:p-10">
                            <p className="text-xs font-black uppercase tracking-[0.28em] text-brand-gold">{section.eyebrow}</p>
                            <h2 className="mt-4 text-2xl md:text-3xl font-black leading-tight">{section.title}</h2>
                            <p className="mt-5 text-gray-600 leading-8">{section.copy}</p>
                            {section.items ? (
                                <div className="mt-6 grid gap-3">
                                    {section.items.map((item) => (
                                        <div key={item} className="rounded-[20px] border border-black/6 bg-white px-5 py-4 text-gray-700">
                                            {item}
                                        </div>
                                    ))}
                                </div>
                            ) : null}
                        </div>
                    ))}
                </div>
            </section>

            {relatedArticles.length ? (
                <section className="bg-white py-16 md:py-20">
                    <div className="max-w-7xl mx-auto px-5 md:px-6">
                        <div className="max-w-3xl mb-12">
                            <p className="text-xs font-black uppercase tracking-[0.32em] text-brand-gold">Leituras relacionadas</p>
                            <h2 className="mt-5 text-3xl md:text-5xl font-black leading-tight">
                                Conteúdo para aprofundar a decisão sem voltar para o Google.
                            </h2>
                        </div>
                        <div className="grid gap-4 lg:grid-cols-3">
                            {relatedArticles.map((article) => (
                                <Link
                                    key={article.slug}
                                    href={`/blog/${article.slug}`}
                                    className="rounded-[28px] border border-black/8 bg-[#fbfaf8] px-6 py-7 transition hover:border-brand-gold hover:shadow-[0_16px_60px_rgba(0,0,0,0.04)]"
                                >
                                    <p className="text-xs font-black uppercase tracking-[0.24em] text-brand-gold">{article.category}</p>
                                    <h3 className="mt-4 text-2xl font-black leading-tight text-txt-primary">
                                        {article.title}
                                    </h3>
                                    <p className="mt-4 text-gray-600 leading-8">{article.description}</p>
                                    <p className="mt-6 text-sm font-black uppercase tracking-[0.14em] text-gray-400">
                                        {article.readingTime}
                                    </p>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>
            ) : null}

            <section className="bg-white py-16 md:py-20">
                <div className="max-w-7xl mx-auto px-5 md:px-6">
                    <div className="rounded-[34px] border border-black/8 bg-[linear-gradient(180deg,#141414,#1b1b1b)] px-8 py-10 text-white md:px-12">
                        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
                            <div>
                                <p className="text-xs font-black uppercase tracking-[0.34em] text-brand-gold">Betim - MG</p>
                                <h2 className="mt-5 text-3xl md:text-5xl font-black leading-tight">{ctaTitle}</h2>
                                <p className="mt-5 max-w-3xl text-white/68 leading-8">{ctaCopy}</p>
                            </div>
                            <div className="grid gap-4">
                                <div className="rounded-[22px] border border-white/10 bg-white/[0.04] px-5 py-5">
                                    <div className="flex items-center gap-3 text-white/80">
                                        <MapPin className="w-5 h-5 text-brand-gold" />
                                        <span>{CLINIC_INFO.address} - {CLINIC_INFO.city}</span>
                                    </div>
                                </div>
                                <div className="rounded-[22px] border border-white/10 bg-white/[0.04] px-5 py-5">
                                    <div className="flex items-center gap-3 text-white/80">
                                        <Phone className="w-5 h-5 text-brand-gold" />
                                        <span>{CLINIC_INFO.phone}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {relatedLinks.length ? (
                            <div className="mt-8 flex flex-wrap gap-3">
                                {relatedLinks.map((item) => (
                                    <Link
                                        key={item.href}
                                        href={item.href}
                                        className="rounded-full border border-white/10 bg-white/[0.04] px-5 py-3 text-sm font-bold text-white/76 transition hover:bg-white/[0.08] hover:text-white"
                                    >
                                        {item.label}
                                    </Link>
                                ))}
                            </div>
                        ) : null}
                    </div>
                </div>
            </section>

            {faqs.length ? <FaqBlock items={faqs} /> : null}

            <Footer />
            <ChatWidget />
            <MobileStickyCTA />
        </main>
    );
}
