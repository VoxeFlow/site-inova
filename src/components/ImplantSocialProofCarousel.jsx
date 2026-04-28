'use client';

import { useEffect, useMemo, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';

function normalizeCategory(name, category) {
    if (name === 'Thais') return 'Alinhadores invisíveis';

    const safeCategories = [
        'Jornada de cuidado',
        'Planejamento individual',
        'Atendimento odontológico',
        'Cuidado com o sorriso',
        'Experiência na Clínica Inova',
    ];

    if (safeCategories.includes(category)) return category;

    if ((category || '').toLowerCase().includes('planejamento')) return 'Planejamento individual';
    if ((category || '').toLowerCase().includes('cuidado')) return 'Cuidado com o sorriso';

    return 'Jornada de cuidado';
}

function toTeaser(text) {
    if (!text) return 'Cada paciente chega com uma história, uma dúvida e um motivo para buscar cuidado.';

    const trimmed = text.trim();
    if (trimmed.length <= 120) return trimmed;

    const cut = trimmed.slice(0, 117);
    const lastSpace = cut.lastIndexOf(' ');
    return `${cut.slice(0, lastSpace > 0 ? lastSpace : cut.length)}...`;
}

export default function ImplantSocialProofCarousel({ stories }) {
    const prefersReducedMotion = useReducedMotion();
    const [activeIndex, setActiveIndex] = useState(0);
    const [autoplayResetKey, setAutoplayResetKey] = useState(0);

    const safeStories = useMemo(
        () =>
            stories.map((story) => ({
                ...story,
                category: normalizeCategory(story.name, story.eyebrow),
                teaser: toTeaser(story.title),
            })),
        [stories],
    );

    useEffect(() => {
        if (!safeStories.length || prefersReducedMotion) return;

        const timer = setInterval(() => {
            setActiveIndex((current) => (current + 1) % safeStories.length);
        }, 6000);

        return () => clearInterval(timer);
    }, [safeStories.length, prefersReducedMotion, autoplayResetKey]);

    if (!safeStories.length) return null;

    const activeStory = safeStories[activeIndex];

    const handleSelect = (index) => {
        setActiveIndex(index);
        setAutoplayResetKey((value) => value + 1);
    };

    return (
        <section className="bg-[linear-gradient(180deg,#0f0f10,#161617)] py-16 text-white md:py-22">
            <div className="mx-auto max-w-7xl px-5 md:px-6">
                <div className="mx-auto max-w-3xl text-center">
                    <p className="text-xs font-black uppercase tracking-[0.32em] text-brand-gold">Histórias reais</p>
                    <h2 className="mt-5 text-3xl font-black leading-tight md:text-5xl">
                        Pacientes que confiaram no cuidado da Clínica Inova
                    </h2>
                    <p className="mt-5 text-sm leading-7 text-white/66 md:text-base md:leading-8">
                        Cada caso tem uma história. Aqui, mostramos momentos reais de pacientes que passaram pela clínica, sem prometer resultados e sem exageros.
                    </p>
                </div>

                <AnimatePresence mode="wait">
                    <motion.article
                        key={activeStory.filename}
                        initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 14 }}
                        animate={prefersReducedMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
                        exit={prefersReducedMotion ? { opacity: 0.95 } : { opacity: 0, y: -8 }}
                        transition={{ duration: 0.35, ease: 'easeOut' }}
                        className="mt-9 grid gap-5 rounded-[30px] border border-white/10 bg-white/[0.03] p-4 shadow-[0_26px_90px_rgba(0,0,0,0.35)] md:mt-12 md:grid-cols-[1.15fr_0.85fr] md:gap-8 md:p-6 lg:p-8"
                    >
                        <div className="relative overflow-hidden rounded-[24px] border border-white/10 bg-black/20">
                            <div className="relative h-72 md:h-[30rem]">
                                <Image
                                    src={activeStory.src}
                                    alt={activeStory.alt}
                                    fill
                                    sizes="(max-width: 1024px) 100vw, 55vw"
                                    className="object-cover object-top"
                                    priority={activeIndex < 2}
                                />
                                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/50 to-transparent" />
                            </div>
                        </div>

                        <div className="flex flex-col justify-between rounded-[24px] border border-white/10 bg-white/[0.02] p-5 md:p-6">
                            <div>
                                <p className="text-[10px] font-black uppercase tracking-[0.22em] text-brand-gold">
                                    {activeStory.category}
                                </p>
                                <h3 className="mt-3 text-2xl font-black leading-tight md:text-3xl">{activeStory.name}</h3>
                                <p className="mt-4 text-base font-semibold leading-7 text-white/90 md:text-lg md:leading-8">
                                    {activeStory.title}
                                </p>
                                <p className="mt-4 text-sm leading-7 text-white/72 md:text-base md:leading-8">
                                    {activeStory.story}
                                </p>
                            </div>

                            <blockquote className="mt-6 rounded-[20px] border border-brand-gold/30 bg-brand-gold/10 px-4 py-4 text-sm leading-7 text-white/92 md:text-base md:leading-8">
                                “{activeStory.quote}”
                            </blockquote>
                        </div>
                    </motion.article>
                </AnimatePresence>

                <div className="mt-6 overflow-x-auto pb-2 md:mt-7">
                    <div className="flex min-w-max gap-3 pr-1">
                        {safeStories.map((story, index) => {
                            const isActive = index === activeIndex;
                            return (
                                <button
                                    key={story.filename}
                                    type="button"
                                    onClick={() => handleSelect(index)}
                                    aria-label={`Ver história de ${story.name}`}
                                    className={`w-[16.5rem] rounded-[20px] border p-3 text-left transition duration-300 md:w-[17.5rem] ${
                                        isActive
                                            ? 'border-brand-gold bg-brand-gold/10 shadow-[0_0_0_1px_rgba(197,160,89,0.35)]'
                                            : 'border-white/10 bg-white/[0.04] hover:border-brand-gold/45 hover:bg-white/[0.06]'
                                    }`}
                                >
                                    <div className="flex items-center gap-3">
                                        <div className="relative h-16 w-16 overflow-hidden rounded-xl border border-white/12">
                                            <Image
                                                src={story.src}
                                                alt={story.alt}
                                                fill
                                                sizes="64px"
                                                className="object-cover object-top"
                                            />
                                        </div>
                                        <div>
                                            <p className="text-sm font-black text-white">{story.name}</p>
                                            <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-brand-gold/90">
                                                {story.category}
                                            </p>
                                        </div>
                                    </div>
                                    <p className="mt-3 text-xs leading-6 text-white/68 md:text-sm md:leading-7">{story.teaser}</p>
                                </button>
                            );
                        })}
                    </div>
                </div>

                <div className="mt-6 text-center">
                    <Link
                        href="https://wa.me/553126260038"
                onClick={(e) => {
                    e.preventDefault();
                    return gtag_report_conversion('https://wa.me/553126260038');
                }}
                        target="_blank"
                        className="inline-flex min-h-11 items-center justify-center rounded-full border border-brand-gold/35 bg-brand-gold/10 px-5 text-xs font-black uppercase tracking-[0.14em] text-white transition hover:bg-brand-gold hover:text-white"
                    >
                        Quero entender meu caso
                    </Link>
                </div>
            </div>
        </section>
    );
}
