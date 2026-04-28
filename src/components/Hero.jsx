'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, Sparkles } from 'lucide-react';

export default function Hero() {
    return (
        <section
            id="inicio"
            className="relative flex items-center overflow-hidden bg-[radial-gradient(circle_at_85%_10%,rgba(197,160,89,0.18),transparent_42%),linear-gradient(180deg,#ffffff,#f7f3ea)] pb-10 pt-22 md:min-h-[86vh] md:pb-18 md:pt-34"
        >
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute -right-20 -top-14 h-64 w-64 rounded-full bg-brand-gold/12 blur-3xl" />
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

                        <div className="relative mb-4 overflow-hidden rounded-[28px] bg-[linear-gradient(150deg,rgba(255,255,255,0.95),rgba(244,236,220,0.85))] px-4 pb-3 pt-4 shadow-[0_20px_70px_rgba(0,0,0,0.08)] md:hidden">
                            <div className="relative z-20 max-w-[64%]">
                                <h1 className="text-[1.9rem] font-black leading-[1.03] text-txt-primary">
                                    Implante dentário em Betim para voltar a mastigar com segurança
                                </h1>
                                <p className="mt-2 text-[13px] font-medium leading-5 text-gray-600">
                                    Avaliação clara e planejamento individual.
                                </p>
                            </div>

                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.65, delay: 0.15 }}
                                className="pointer-events-none absolute -bottom-1 -right-2 z-10 h-[13.5rem] w-[48%]"
                            >
                                <div className="absolute inset-0 rounded-[42%_58%_34%_66%/52%_38%_62%_48%] bg-[linear-gradient(160deg,rgba(255,255,255,0.34),rgba(197,160,89,0.18))]" />
                                <Image
                                    src="/assets/Dr Jeff_edited.avif"
                                    alt="Dr. Jefferson Reis"
                                    fill
                                    priority
                                    sizes="48vw"
                                    className="object-contain object-bottom"
                                />
                            </motion.div>
                        </div>

                        <div className="hidden md:block">
                            <h1 className="max-w-2xl text-[2.2rem] font-black leading-[1.04] text-txt-primary lg:text-[2.85rem]">
                                Implante dentário em Betim para voltar a mastigar com segurança
                            </h1>
                            <p className="mt-4 max-w-xl text-[16px] font-medium leading-7 text-gray-600 md:text-lg md:leading-relaxed">
                                Avaliação clara, planejamento individual e orientação direta antes de decidir.
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
                onClick={(e) => {
                    e.preventDefault();
                    return gtag_report_conversion('https://wa.me/553126260038');
                }}
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
                        <div className="relative h-[35rem] overflow-hidden rounded-[44px] bg-[linear-gradient(160deg,rgba(255,255,255,0.85),rgba(244,236,220,0.95))] shadow-[0_34px_95px_rgba(0,0,0,0.14)]">
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_18%,rgba(197,160,89,0.22),transparent_45%)]" />
                            <motion.div
                                animate={{ y: [0, -6, 0] }}
                                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                                className="absolute inset-0"
                            >
                                <Image
                                    src="/assets/Dr Jeff_edited.avif"
                                    alt="Dr. Jefferson Reis"
                                    fill
                                    priority
                                    sizes="(max-width: 1200px) 45vw, 40vw"
                                    className="object-contain object-bottom"
                                />
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
