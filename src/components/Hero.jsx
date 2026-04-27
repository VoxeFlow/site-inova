'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, ShieldCheck, Sparkles } from 'lucide-react';

const quickProofs = [
    '15+ anos em Betim',
    'Planejamento individual',
    'Atendimento pelo WhatsApp',
];

export default function Hero() {
    return (
        <section
            id="inicio"
            className="relative flex items-center overflow-hidden bg-[radial-gradient(circle_at_top_right,rgba(197,160,89,0.14),transparent_45%),linear-gradient(180deg,#ffffff,#f8f6f2)] pb-10 pt-24 md:min-h-[90vh] md:pb-20 md:pt-40"
        >
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute -right-24 -top-12 h-64 w-64 rounded-full bg-brand-gold/12 blur-3xl" />
                <div className="absolute -left-16 top-24 h-56 w-56 rounded-full bg-black/5 blur-3xl" />
            </div>

            <div className="relative z-10 mx-auto w-full max-w-7xl px-5 md:px-6">
                <div className="grid items-center gap-7 lg:grid-cols-2 lg:gap-14">
                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.65, ease: 'easeOut' }}
                        className="relative"
                    >
                        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-brand-gold/30 bg-white/90 px-4 py-2 text-[10px] font-black uppercase tracking-[0.2em] text-brand-gold shadow-sm md:mb-6 md:text-[11px]">
                            <Sparkles className="h-4 w-4" />
                            Implante dentário em Betim
                        </div>

                        <h1 className="max-w-2xl text-[1.95rem] font-black leading-[1.03] text-txt-primary md:text-5xl lg:text-[3.15rem]">
                            Volte a mastigar, sorrir e viver com mais segurança
                        </h1>

                        <p className="mt-4 max-w-xl text-[15px] font-medium leading-7 text-gray-600 md:mt-6 md:text-lg md:leading-relaxed">
                            Implante dentário em Betim com avaliação clara, planejamento individual e condições a partir de R$150/mês*.
                        </p>

                        <motion.div
                            initial={{ opacity: 0, y: 16 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.15 }}
                            className="mt-5 max-w-xl rounded-[24px] border border-brand-gold/30 bg-white/95 px-5 py-4 shadow-[0_24px_70px_rgba(0,0,0,0.08)]"
                        >
                            <p className="text-[10px] font-black uppercase tracking-[0.24em] text-brand-gold md:text-[11px]">
                                Investimento inicial
                            </p>
                            <p className="mt-2 text-2xl font-black leading-none text-txt-primary md:text-[2rem]">
                                Parcelas a partir de R$150/mês*
                            </p>
                            <p className="mt-2 text-xs leading-6 text-gray-600 md:text-sm">
                                Entenda seu caso antes de decidir.
                            </p>
                        </motion.div>

                        <div className="mt-5 flex flex-col gap-3 sm:flex-row md:mt-7">
                            <motion.a
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                href="https://wa.me/553126260038"
                                className="flex min-h-14 w-full items-center justify-center gap-3 rounded-full bg-txt-primary px-6 py-4 text-center text-xs font-black uppercase tracking-[0.14em] text-white shadow-xl transition-colors hover:bg-brand-gold sm:w-auto"
                            >
                                Quero avaliar meu caso
                                <ArrowRight className="h-4 w-4" />
                            </motion.a>
                            <motion.a
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                href="#precos"
                                className="flex min-h-14 w-full items-center justify-center rounded-full border-2 border-txt-primary px-6 py-4 text-center text-xs font-black uppercase tracking-[0.14em] text-txt-primary transition hover:bg-txt-primary hover:text-white sm:w-auto"
                            >
                                Ver valores e etapas
                            </motion.a>
                        </div>

                        <ul className="mt-6 grid gap-2 md:mt-7">
                            {quickProofs.map((proof, index) => (
                                <motion.li
                                    key={proof}
                                    initial={{ opacity: 0, x: -8 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.35, delay: 0.2 + index * 0.08 }}
                                    className="flex items-center gap-2 text-sm font-semibold text-txt-primary/92"
                                >
                                    <CheckCircle2 className="h-4 w-4 text-brand-gold" />
                                    {proof}
                                </motion.li>
                            ))}
                        </ul>

                        <p className="mt-5 max-w-xl text-xs leading-6 text-gray-500 md:text-sm">
                            *Valor inicial estimado. Para quem busca quanto custa implante dentário com dentista em Betim, explicamos opções de implante dentário parcelado com transparência.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.96 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.7, delay: 0.12, ease: 'easeOut' }}
                        className="relative mt-1 lg:mt-0"
                    >
                        <motion.div
                            animate={{ y: [0, -7, 0] }}
                            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                            className="relative rounded-[28px] border border-white/70 bg-[linear-gradient(160deg,#ffffff,#f3eee4)] p-2.5 shadow-[0_34px_110px_rgba(0,0,0,0.16)] md:rounded-[36px] md:p-3"
                        >
                            <div className="relative h-[12.2rem] overflow-hidden rounded-[22px] border border-black/6 sm:h-[14rem] md:h-[32rem] md:rounded-[30px] lg:h-[35rem]">
                                <Image
                                    src="/assets/Dr Jeff_edited.avif"
                                    alt="Dr. Jefferson Reis"
                                    fill
                                    priority
                                    sizes="(max-width: 1024px) 100vw, 50vw"
                                    className="object-cover object-top"
                                />
                                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/25 to-transparent" />
                            </div>

                            <div className="absolute -left-2 top-5 rounded-full border border-brand-gold/40 bg-white/95 px-3 py-2 shadow-lg md:-left-5 md:top-10 md:px-4">
                                <p className="text-[10px] font-black uppercase tracking-[0.18em] text-brand-gold md:text-[11px]">
                                    Avaliação individual
                                </p>
                            </div>

                            <div className="absolute -right-2 bottom-6 rounded-full border border-black/10 bg-txt-primary px-3 py-2 text-white shadow-lg md:-right-5 md:bottom-12 md:px-4">
                                <p className="flex items-center gap-1 text-[10px] font-black uppercase tracking-[0.18em] md:text-[11px]">
                                    <ShieldCheck className="h-3.5 w-3.5 text-brand-gold" />
                                    Planejamento seguro
                                </p>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
