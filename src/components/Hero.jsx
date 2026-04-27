'use client';
import Image from 'next/image';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

import { useUser } from '@/context/UserContext';

export default function Hero() {
    const { userName, updateName, clearName } = useUser();
    const [nameInput, setNameInput] = useState(userName || '');

    const handlePersonalize = () => {
        const normalizedName = nameInput.trim();
        if (!normalizedName) return;
        updateName(normalizedName);
    };

    const handleClear = () => {
        setNameInput('');
        clearName();
    };

    return (
        <section id="inicio" className="relative flex min-h-[auto] items-center overflow-hidden bg-white pb-16 pt-28 md:min-h-[90vh] md:pb-24 md:pt-40">
            <div className="max-w-7xl mx-auto w-full px-5 md:px-6">
                <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">

                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="relative z-10"
                    >
                        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-gray-100 bg-gray-50 px-4 py-2 text-[11px] font-bold uppercase tracking-wider text-brand-gold shadow-sm md:mb-8 md:text-xs">
                            <CheckCircle2 className="w-4 h-4" /> Há 15 anos em Betim
                        </div>

                        {userName ? (
                            <p className="mb-3 text-[11px] font-black uppercase tracking-[0.22em] text-brand-gold">
                                Olá, {userName}
                            </p>
                        ) : null}

                        <h1 className="mb-5 max-w-2xl text-[1.85rem] font-black leading-[1.04] text-txt-primary sm:text-[2.25rem] md:mb-7 md:text-5xl lg:text-[3.1rem]">
                            <span className="hidden md:inline">
                                Perdeu um ou mais dentes? O implante dentário pode devolver sua segurança ao sorrir e mastigar
                            </span>
                            <span className="md:hidden">
                                Implante dentário em Betim para voltar a mastigar com segurança
                            </span>
                        </h1>

                        <p className="max-w-xl text-[15px] font-medium leading-7 text-gray-600 md:mb-9 md:text-lg md:leading-relaxed">
                            Na Clínica Inova, você entende seu caso com clareza antes de decidir. Avaliação individualizada, planejamento seguro e orientação sobre valores.
                        </p>

                        <div className="mb-6 mt-5 max-w-xl rounded-[22px] border border-brand-gold/25 bg-[#faf8f4] px-5 py-4 shadow-[0_14px_40px_rgba(0,0,0,0.04)] md:mb-8">
                            <p className="text-[11px] font-black uppercase tracking-[0.24em] text-brand-gold">Investimento inicial</p>
                            <p className="mt-2 text-2xl font-black leading-none text-txt-primary md:text-3xl">
                                Em muitos casos, o tratamento pode começar com parcelas a partir de R$150/mês*
                            </p>
                        </div>

                        <div className="mb-8 mt-7 flex flex-col gap-3 sm:flex-row sm:gap-4 md:mb-10">
                            <motion.a
                                whileHover={{ scale: 1.03 }}
                                whileTap={{ scale: 0.98 }}
                                href="https://wa.me/553126260038"
                                className="flex min-h-14 w-full items-center justify-center gap-3 rounded-full bg-txt-primary px-7 py-4 text-center text-xs font-black uppercase tracking-[0.18em] text-white shadow-xl transition-colors hover:bg-brand-gold sm:w-auto sm:px-8"
                            >
                                Quero avaliar meu caso agora <ArrowRight className="h-4 w-4" />
                            </motion.a>
                            <motion.a
                                whileHover={{ scale: 1.03 }}
                                whileTap={{ scale: 0.98 }}
                                href="#como-funciona"
                                className="flex min-h-14 w-full items-center justify-center rounded-full border-2 border-txt-primary px-7 py-4 text-center text-xs font-black uppercase tracking-[0.18em] text-txt-primary transition hover:bg-txt-primary hover:text-white sm:w-auto sm:px-8"
                            >
                                Entender valores e etapas
                            </motion.a>
                        </div>

                        <p className="mb-2 max-w-xl text-sm font-semibold leading-6 text-txt-primary/85">
                            Quanto mais tempo você espera, mais o tratamento pode se tornar complexo.
                        </p>

                        <p className="max-w-xl text-xs leading-6 text-gray-500 md:text-sm">
                            *Valor inicial estimado e sujeito à avaliação clínica.
                        </p>

                        <div className="grid grid-cols-2 gap-4 border-t border-gray-100 pt-6 sm:flex sm:items-center sm:gap-12 md:pt-8">
                            <div>
                                <div className="text-3xl font-black text-txt-primary md:text-4xl">15+</div>
                                <div className="text-xs text-gray-400 font-bold uppercase mt-2 tracking-wider">Anos de História</div>
                            </div>
                            <div>
                                <div className="text-3xl font-black text-txt-primary md:text-4xl">5k+</div>
                                <div className="text-xs text-gray-400 font-bold uppercase mt-2 tracking-wider">Vidas Impactadas</div>
                            </div>
                        </div>

                        <div className="mt-7 max-w-xl rounded-2xl border border-black/6 bg-white px-4 py-4 md:mt-9">
                            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-500">
                                Personalização opcional
                            </p>
                            <div className="mt-2 flex flex-col gap-2 sm:flex-row">
                                <input
                                    type="text"
                                    value={nameInput}
                                    onChange={(e) => setNameInput(e.target.value)}
                                    onKeyDown={(e) => e.key === 'Enter' && handlePersonalize()}
                                    className="w-full rounded-full border border-black/10 bg-white px-4 py-2.5 text-sm text-txt-primary outline-none transition placeholder:text-gray-400 focus:border-brand-gold/60"
                                    placeholder="Digite seu primeiro nome"
                                    aria-label="Digite seu primeiro nome"
                                />
                                <button
                                    type="button"
                                    onClick={handlePersonalize}
                                    className="rounded-full bg-[#f4f1eb] px-5 py-2.5 text-[11px] font-bold uppercase tracking-[0.14em] text-txt-primary transition hover:bg-brand-gold hover:text-white"
                                >
                                    Personalizar
                                </button>
                            </div>
                            {userName ? (
                                <button
                                    type="button"
                                    onClick={handleClear}
                                    className="mt-2 text-[10px] font-black uppercase tracking-[0.16em] text-gray-500 transition hover:text-txt-primary"
                                >
                                    Limpar nome
                                </button>
                            ) : null}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative z-10 flex items-center lg:h-[700px]"
                    >
                        <div className="absolute right-4 top-4 -z-10 h-full w-full rotate-3 rounded-[40px] border border-gray-100 bg-gray-50 md:right-10 md:top-10 md:rotate-6 md:rounded-[60px] dark:bg-zinc-800/50" />
                        <div className="relative h-[22rem] w-full overflow-hidden rounded-[28px] shadow-2xl sm:h-[32rem] md:rounded-[40px] lg:h-[650px]">
                            <Image
                                src="/assets/Dr Jeff_edited.avif"
                                alt="Dr. Jefferson Reis"
                                fill
                                priority
                                sizes="(max-width: 1024px) 100vw, 50vw"
                                className="object-cover object-top hover:scale-105 transition duration-1000"
                            />
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
