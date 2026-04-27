'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

const quickProofs = [
    '15+ anos em Betim',
    'Planejamento individual',
    'Atendimento rápido no WhatsApp',
];

export default function Hero() {
    return (
        <section id="inicio" className="relative flex items-center overflow-hidden bg-white pb-12 pt-24 md:min-h-[90vh] md:pb-24 md:pt-40">
            <div className="mx-auto w-full max-w-7xl px-5 md:px-6">
                <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-14">
                    <motion.div
                        initial={{ opacity: 0, y: 28 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: 'easeOut' }}
                        className="relative z-10"
                    >
                        <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-gray-100 bg-gray-50 px-4 py-2 text-[11px] font-bold uppercase tracking-wider text-brand-gold shadow-sm md:mb-7 md:text-xs">
                            <CheckCircle2 className="h-4 w-4" /> Clínica odontológica em Betim
                        </div>

                        <h1 className="text-[1.95rem] font-black leading-[1.05] text-txt-primary md:text-5xl lg:text-[3rem]">
                            Implante dentário em Betim para voltar a mastigar com segurança
                        </h1>

                        <p className="mt-4 max-w-xl text-[15px] font-medium leading-7 text-gray-600 md:mt-6 md:text-lg md:leading-relaxed">
                            Avaliação clara e planejamento individual antes de qualquer decisão.
                        </p>

                        <div className="mt-5 max-w-xl rounded-[22px] border border-brand-gold/25 bg-[#faf8f4] px-5 py-4 shadow-[0_14px_40px_rgba(0,0,0,0.04)] md:mt-7">
                            <p className="text-[11px] font-black uppercase tracking-[0.22em] text-brand-gold">Investimento inicial</p>
                            <p className="mt-2 text-2xl font-black leading-none text-txt-primary md:text-3xl">
                                Parcelas a partir de R$150/mês*
                            </p>
                            <p className="mt-2 text-[11px] leading-5 text-gray-500">*Valor inicial estimado</p>
                        </div>

                        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:gap-4 md:mt-8">
                            <motion.a
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                href="https://wa.me/553126260038"
                                className="flex min-h-14 w-full items-center justify-center gap-3 rounded-full bg-txt-primary px-7 py-4 text-center text-xs font-black uppercase tracking-[0.16em] text-white shadow-xl transition-colors hover:bg-brand-gold sm:w-auto"
                            >
                                Quero avaliar meu caso <ArrowRight className="h-4 w-4" />
                            </motion.a>
                            <motion.a
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                href="#como-funciona"
                                className="flex min-h-14 w-full items-center justify-center rounded-full border-2 border-txt-primary px-7 py-4 text-center text-xs font-black uppercase tracking-[0.16em] text-txt-primary transition hover:bg-txt-primary hover:text-white sm:w-auto"
                            >
                                Ver como funciona
                            </motion.a>
                        </div>

                        <ul className="mt-6 grid gap-2 md:mt-8">
                            {quickProofs.map((proof) => (
                                <li key={proof} className="flex items-center gap-2 text-sm font-semibold text-txt-primary/90">
                                    <CheckCircle2 className="h-4 w-4 text-brand-gold" />
                                    {proof}
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.96 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.7, delay: 0.1, ease: 'easeOut' }}
                        className="relative z-10 mt-1 flex items-center md:mt-0 lg:h-[680px]"
                    >
                        <div className="absolute right-4 top-4 -z-10 h-full w-full rotate-3 rounded-[36px] border border-gray-100 bg-gray-50 md:right-10 md:top-10 md:rotate-6 md:rounded-[56px]" />
                        <div className="relative h-[12.5rem] w-full overflow-hidden rounded-[24px] shadow-2xl sm:h-[14rem] md:h-[30rem] md:rounded-[40px] lg:h-[630px]">
                            <Image
                                src="/assets/Dr Jeff_edited.avif"
                                alt="Dr. Jefferson Reis"
                                fill
                                priority
                                sizes="(max-width: 1024px) 100vw, 50vw"
                                className="object-cover object-top transition duration-700 hover:scale-[1.02]"
                            />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
