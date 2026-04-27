'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, Sparkles } from 'lucide-react';

export default function Hero() {
    return (
        <section
            id="inicio"
            className="relative flex items-center overflow-hidden bg-[radial-gradient(circle_at_top_right,rgba(197,160,89,0.12),transparent_45%),linear-gradient(180deg,#ffffff,#f8f5ef)] pb-10 pt-22 md:min-h-[88vh] md:pb-20 md:pt-36"
        >
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute -right-20 -top-14 h-64 w-64 rounded-full bg-brand-gold/10 blur-3xl" />
                <div className="absolute -left-16 top-16 h-52 w-52 rounded-full bg-black/5 blur-3xl" />
            </div>

            <div className="relative z-10 mx-auto w-full max-w-7xl px-5 md:px-6">
                <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-14">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: 'easeOut' }}
                        className="relative"
                    >
                        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-brand-gold/25 bg-white/90 px-3.5 py-1.5 text-[10px] font-black uppercase tracking-[0.18em] text-brand-gold shadow-sm md:mb-6 md:text-[11px]">
                            <Sparkles className="h-3.5 w-3.5" />
                            Implante dentário em Betim
                        </div>

                        <div className="mb-4 grid grid-cols-[1.35fr_0.9fr] items-end gap-3 md:hidden">
                            <div>
                                <h1 className="text-[1.95rem] font-black leading-[1.02] text-txt-primary">
                                    Volte a mastigar com segurança
                                </h1>
                                <p className="mt-2 text-[14px] font-medium leading-6 text-gray-600">
                                    Implante dentário em Betim com avaliação clara e planejamento individual.
                                </p>
                            </div>
                            <motion.div
                                animate={{ y: [0, -4, 0] }}
                                transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut' }}
                                className="relative h-36 overflow-hidden rounded-[20px] border border-black/8 bg-white p-1.5 shadow-[0_16px_50px_rgba(0,0,0,0.12)]"
                            >
                                <div className="relative h-full w-full overflow-hidden rounded-[15px]">
                                    <Image
                                        src="/assets/Dr Jeff_edited.avif"
                                        alt="Dr. Jefferson Reis"
                                        fill
                                        priority
                                        sizes="35vw"
                                        className="object-cover object-top"
                                    />
                                </div>
                            </motion.div>
                        </div>

                        <div className="hidden md:block">
                            <h1 className="max-w-2xl text-[2.35rem] font-black leading-[1.03] text-txt-primary lg:text-[3.1rem]">
                                Volte a mastigar, sorrir e viver com mais segurança
                            </h1>
                            <p className="mt-4 max-w-xl text-[16px] font-medium leading-7 text-gray-600 md:text-lg md:leading-relaxed">
                                Implante dentário em Betim com avaliação clara, planejamento individual e condições a partir de R$150/mês*.
                            </p>
                        </div>

                        <motion.div
                            initial={{ opacity: 0, y: 12 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.55, delay: 0.1 }}
                            className="inline-flex items-center rounded-full border border-brand-gold/30 bg-white/95 px-4 py-2.5 shadow-[0_14px_40px_rgba(0,0,0,0.06)]"
                        >
                            <p className="text-[13px] font-black leading-tight text-txt-primary md:text-[15px]">
                                Tratamentos a partir de R$150/mês*
                            </p>
                        </motion.div>

                        <p className="mt-2 text-[11px] leading-5 text-gray-500 md:text-xs">
                            *Valor inicial estimado e sujeito à avaliação.
                        </p>

                        <div className="mt-5 flex flex-col gap-3 sm:flex-row md:mt-7">
                            <motion.a
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                href="https://wa.me/553126260038"
                                className="flex min-h-13 w-full items-center justify-center gap-2 rounded-full bg-txt-primary px-6 py-3.5 text-center text-xs font-black uppercase tracking-[0.14em] text-white shadow-xl transition-colors hover:bg-brand-gold sm:w-auto"
                            >
                                Quero avaliar meu caso
                                <ArrowRight className="h-4 w-4" />
                            </motion.a>
                            <motion.a
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                href="#precos"
                                className="flex min-h-13 w-full items-center justify-center rounded-full border-2 border-txt-primary px-6 py-3.5 text-center text-xs font-black uppercase tracking-[0.14em] text-txt-primary transition hover:bg-txt-primary hover:text-white sm:w-auto"
                            >
                                Ver valores e etapas
                            </motion.a>
                        </div>

                        <div className="mt-4 flex flex-wrap items-center gap-x-2 gap-y-1 text-[11px] font-semibold text-txt-primary/88 md:mt-6 md:text-sm">
                            <span className="inline-flex items-center gap-1"><CheckCircle2 className="h-3.5 w-3.5 text-brand-gold" />15+ anos em Betim</span>
                            <span className="text-gray-400">·</span>
                            <span>Planejamento individual</span>
                            <span className="text-gray-400">·</span>
                            <span>WhatsApp</span>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.97 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.65, delay: 0.12, ease: 'easeOut' }}
                        className="relative hidden lg:block"
                    >
                        <motion.div
                            animate={{ y: [0, -6, 0] }}
                            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                            className="relative rounded-[34px] border border-white/65 bg-[linear-gradient(160deg,#ffffff,#f3eee4)] p-3 shadow-[0_30px_95px_rgba(0,0,0,0.15)]"
                        >
                            <div className="relative h-[34rem] overflow-hidden rounded-[28px] border border-black/6">
                                <Image
                                    src="/assets/Dr Jeff_edited.avif"
                                    alt="Dr. Jefferson Reis"
                                    fill
                                    priority
                                    sizes="(max-width: 1200px) 45vw, 40vw"
                                    className="object-cover object-top"
                                />
                                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/20 to-transparent" />
                            </div>
                            <div className="absolute left-6 top-6 rounded-full border border-brand-gold/35 bg-white/95 px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.16em] text-brand-gold">
                                Avaliação individual
                            </div>
                            <div className="absolute bottom-6 right-6 rounded-full border border-black/10 bg-white/90 px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.16em] text-txt-primary">
                                Planejamento seguro
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
