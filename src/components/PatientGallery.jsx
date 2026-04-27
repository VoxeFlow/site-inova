'use client';

import Image from 'next/image';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck } from 'lucide-react';

export default function PatientGallery({ images }) {
    const [activeIndex, setActiveIndex] = useState(0);
    const active = images[activeIndex];

    if (!images.length) {
        return null;
    }

    return (
        <section className="relative overflow-hidden bg-[#111111] py-20 text-white md:py-28">
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(197,164,126,0.16),transparent_26%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.05),transparent_20%),linear-gradient(180deg,#121212,#0a0a0a)]" />
                <div className="absolute inset-0 opacity-20">
                    <Image
                        src={active.src}
                        alt=""
                        fill
                        priority={activeIndex === 0}
                        sizes="100vw"
                        className="object-cover blur-3xl scale-110"
                        style={{ objectPosition: active.objectPosition }}
                    />
                </div>
                <div className="absolute inset-0 bg-black/50" />
            </div>

            <div className="relative mx-auto max-w-7xl px-5 md:px-6">
                <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
                    <div className="max-w-3xl">
                        <p className="text-xs font-black uppercase tracking-[0.34em] text-brand-gold">Memórias da clínica</p>
                        <h2 className="mt-5 text-3xl font-black leading-tight md:text-5xl">
                            Há histórias que merecem permanecer.
                        </h2>
                        <p className="mt-5 max-w-2xl text-base leading-7 text-white/68 md:text-lg md:leading-8">
                            Algumas histórias merecem ser mostradas com o mesmo cuidado com que foram vividas.
                        </p>
                    </div>

                    <div className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/6 px-4 py-3 text-[10px] font-black uppercase tracking-[0.24em] text-white/60 backdrop-blur-md">
                        <ShieldCheck className="h-3.5 w-3.5 text-brand-gold" />
                        histórias autorizadas
                    </div>
                </div>

                <div className="mt-10 grid gap-5 md:mt-14 md:gap-6 xl:grid-cols-[1.18fr_0.82fr]">
                    <motion.article
                        key={active.src}
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, ease: 'easeOut' }}
                        className="relative h-full overflow-hidden rounded-[28px] border border-white/10 bg-white/6 shadow-[0_30px_90px_rgba(0,0,0,0.22)] backdrop-blur-md md:rounded-[38px]"
                    >
                        <div className="relative h-full min-h-[27rem] sm:min-h-[31rem] xl:min-h-[42rem]">
                            <Image
                                src={active.src}
                                alt={active.alt}
                                fill
                                priority={activeIndex === 0}
                                sizes="(max-width: 1280px) 100vw, 58vw"
                                className="object-cover"
                                style={{ objectPosition: active.objectPosition || 'center 18%' }}
                            />
                            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.02),rgba(0,0,0,0.42))]" />
                            <div className="absolute left-6 top-6 inline-flex items-center gap-2 rounded-full border border-white/16 bg-black/22 px-4 py-3 text-[10px] font-black uppercase tracking-[0.24em] text-white backdrop-blur-md">
                                <ShieldCheck className="h-3.5 w-3.5 text-brand-gold" />
                                imagem autorizada
                            </div>
                            <div className="absolute inset-x-0 bottom-0 p-5 md:p-8">
                                <p className="text-[11px] font-black uppercase tracking-[0.26em] text-brand-gold">
                                    {active.eyebrow}
                                </p>
                                <h3 className="mt-4 max-w-2xl text-[1.8rem] font-black leading-[1.02] text-white md:text-4xl">
                                    {active.title ?? active.name}
                                </h3>
                            </div>
                        </div>
                    </motion.article>

                    <motion.aside
                        key={`${active.src}-copy`}
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.55, ease: 'easeOut' }}
                        className="overflow-hidden rounded-[28px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.04))] px-6 py-7 shadow-[0_30px_90px_rgba(0,0,0,0.18)] backdrop-blur-xl md:rounded-[38px] md:px-9 md:py-10"
                    >
                        <div className="text-[5.5rem] font-black leading-none text-brand-gold/10 md:text-[7rem]">
                            {active.name?.slice(0, 1)}
                        </div>
                        <p className="-mt-6 text-sm font-black uppercase tracking-[0.28em] text-white/36">
                            recortes de confiança
                        </p>
                        <p className="mt-6 text-[11px] font-black uppercase tracking-[0.28em] text-brand-gold md:mt-8">
                            {active.name}
                        </p>
                        <p className="mt-4 text-base leading-7 text-white/74 md:mt-5 md:text-lg md:leading-8">
                            {active.story ?? `${active.name} faz parte das histórias que ajudam a clínica a comunicar confiança de um jeito mais humano e memorável.`}
                        </p>
                        {active.quote ? (
                            <blockquote className="mt-6 rounded-[22px] border border-white/10 bg-black/16 px-5 py-5 text-base leading-7 text-white/92 md:mt-8 md:rounded-[28px] md:px-6 md:py-6 md:text-lg md:leading-8">
                                {active.quote}
                            </blockquote>
                        ) : null}
                    </motion.aside>
                </div>

                <div className="mt-6 overflow-x-auto pb-2 md:mt-8">
                    <div className="flex min-w-max gap-4">
                        {images.map((image, index) => {
                            const isActive = index === activeIndex;

                            return (
                                <button
                                    key={image.src}
                                    type="button"
                                    onClick={() => setActiveIndex(index)}
                                    className={`group relative overflow-hidden rounded-[28px] border text-left transition ${
                                        isActive
                                            ? 'border-brand-gold bg-white/[0.07] shadow-[0_16px_50px_rgba(0,0,0,0.22)]'
                                            : 'border-white/8 bg-white/[0.03] hover:border-white/18 hover:bg-white/[0.05]'
                                    }`}
                                >
                                    <div className="flex items-center gap-4 p-3 pr-5">
                                        <div className="relative h-20 w-20 overflow-hidden rounded-[22px]">
                                            <Image
                                                src={image.src}
                                                alt={image.alt}
                                                fill
                                                sizes="80px"
                                                className="object-cover transition duration-500 group-hover:scale-[1.04]"
                                                style={{ objectPosition: image.objectPosition }}
                                            />
                                        </div>
                                        <div className="min-w-[10rem] max-w-[13rem]">
                                            <p className="text-[10px] font-black uppercase tracking-[0.24em] text-brand-gold/90">
                                                {image.eyebrow}
                                            </p>
                                            <p className="mt-2 text-lg font-black leading-tight text-white">
                                                {image.name}
                                            </p>
                                            <p className="mt-2 line-clamp-2 text-sm leading-6 text-white/56">
                                                {image.title ?? image.alt}
                                            </p>
                                        </div>
                                    </div>
                                </button>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
