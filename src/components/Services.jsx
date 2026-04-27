'use client';
import Image from 'next/image';
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Check, ArrowRight, Sparkles, Smile, Activity } from 'lucide-react';
import Link from 'next/link';
import { useChat } from '@/context/ChatContext';

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.3 }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

export default function Services() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const { openChat } = useChat();

    // Helper for chat trigger
    const handleInterest = (topic) => {
        openChat(topic); // Pass topic to context
    };

    return (
        <section id="tratamentos" className="bg-white py-20 md:py-32">
            <div className="max-w-7xl mx-auto px-5 md:px-6" ref={ref}>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    className="mx-auto mb-12 max-w-3xl text-center md:mb-20"
                >
                    <p className="text-xs font-black uppercase tracking-[0.32em] text-brand-gold">Tratamento âncora</p>
                    <h2 className="mt-5 text-3xl font-black text-txt-primary md:text-5xl">
                        Implante dentário em Betim com prioridade clínica
                    </h2>
                    <p className="mt-5 text-base leading-7 text-gray-600 md:text-lg md:leading-8">
                        Se sua dúvida principal é quanto custa implante dentário ou se o seu caso tem solução, comece por aqui. Invisalign, alinhadores invisíveis e clareamento aparecem como complementos ao final.
                    </p>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    className="space-y-10 md:space-y-16"
                >
                    {/* Implants Card */}
                    <motion.div
                        variants={itemVariants}
                        className="group grid overflow-hidden rounded-[28px] bg-gray-50 shadow-sm transition-all duration-500 hover:shadow-xl md:grid-cols-2 md:rounded-[40px]"
                    >
                        <div className="relative flex h-[280px] items-center justify-center overflow-hidden bg-white p-8 md:h-auto md:p-12">
                            <Image
                                src="/assets/img-implante.jpeg"
                                alt="Implante Dentário Inova"
                                fill
                                sizes="(max-width: 768px) 100vw, 50vw"
                                className="object-contain p-8 transition duration-700 group-hover:scale-105 md:p-12"
                            />
                        </div>
                        <div className="flex flex-col justify-center p-7 md:p-16">
                            <div className="text-brand-gold font-bold text-xs uppercase tracking-widest mb-4">Reabilitação Oral</div>
                            <h3 className="mb-5 text-2xl font-bold text-txt-primary md:mb-6 md:text-3xl">Implantes Dentários</h3>
                            <p className="mb-7 text-sm leading-7 text-gray-500 md:mb-8 md:text-base md:leading-relaxed">
                                Recupere o prazer de comer e sorrir com segurança. Trabalhamos com marcas premium mundialmente reconhecidas, como a <strong>Neodent®</strong>, para buscar a máxima durabilidade.
                            </p>
                            <ul className="mb-7 space-y-3 text-sm font-bold text-gray-600 md:mb-8">
                                <li className="flex items-center gap-3"><Check className="text-brand-gold w-5 h-5" /> Implantes de Alta Tecnologia</li>
                                <li className="flex items-center gap-3"><Check className="text-brand-gold w-5 h-5" /> Carga Imediata (Mediante avaliação)</li>
                            </ul>
                            <button
                                onClick={() => handleInterest('implante')}
                                className="text-brand-gold font-bold text-sm border-b-2 border-brand-gold pb-1 self-start hover:text-black hover:border-black transition flex items-center gap-2 cursor-pointer"
                            >
                                QUERO SABER MAIS <ArrowRight className="w-4 h-4" />
                            </button>
                            <Link
                                href="/implante-dentario-betim"
                                className="mt-4 text-xs font-black uppercase tracking-[0.18em] text-gray-500 hover:text-brand-gold transition"
                            >
                                Ver página de implante em Betim
                            </Link>
                        </div>
                    </motion.div>

                    {/* Invisalign Card */}
                    <motion.div
                        variants={itemVariants}
                        className="group grid overflow-hidden rounded-[28px] bg-[#111] text-white shadow-sm transition-all duration-500 hover:shadow-xl md:grid-cols-2 md:rounded-[40px]"
                    >
                        <div className="order-2 flex flex-col justify-center p-7 md:order-1 md:p-16">
                            <div className="text-brand-gold font-bold text-xs uppercase tracking-widest mb-4">Ortodontia Digital</div>
                            <h3 className="mb-5 text-2xl font-bold md:mb-6 md:text-3xl">Invisalign® e Alinhadores</h3>
                            <p className="mb-7 text-sm leading-7 text-gray-400 md:mb-8 md:text-base md:leading-relaxed">
                                O futuro da ortodontia é transparente. Além do <strong>Invisalign®</strong>, oferecemos opções como <strong>SouSmile</strong> e <strong>Self</strong>, garantindo diversos custos-benefícios.
                            </p>
                            <ul className="mb-7 space-y-3 text-sm font-bold text-gray-300 md:mb-8">
                                <li className="flex items-center gap-3"><Check className="text-brand-gold w-5 h-5" /> Planejamento Digital do Sorriso</li>
                                <li className="flex items-center gap-3"><Check className="text-brand-gold w-5 h-5" /> Opções acessíveis de alinhadores</li>
                            </ul>
                            <button
                                onClick={() => handleInterest('invisalign')}
                                className="text-brand-gold font-bold text-sm border-b-2 border-brand-gold pb-1 self-start hover:text-white hover:border-white transition flex items-center gap-2 cursor-pointer"
                            >
                                SIMULAR MEU SORRISO <ArrowRight className="w-4 h-4" />
                            </button>
                            <Link
                                href="/alinhador-invisivel-betim"
                                className="mt-4 text-xs font-black uppercase tracking-[0.18em] text-gray-400 hover:text-brand-gold transition"
                            >
                                Ver alinhadores invisíveis em Betim
                            </Link>
                        </div>
                        <div className="relative order-1 flex h-[280px] items-center justify-center overflow-hidden bg-white md:order-2 md:h-auto">
                            <Image
                                src="/assets/img-alinhadores.jpeg"
                                alt="Alinhadores Inova"
                                fill
                                sizes="(max-width: 768px) 100vw, 50vw"
                                className="object-cover opacity-90 transition duration-700 group-hover:scale-105"
                            />
                        </div>
                    </motion.div>

                    {/* RESTORED: General, ATM, Esthetics Grid */}
                    <motion.div
                        variants={itemVariants}
                        className="grid gap-5 md:grid-cols-3 md:gap-8"
                    >
                        {/* Clínica Geral */}
                        <div
                            onClick={() => handleInterest('geral')}
                            className="group cursor-pointer rounded-[26px] border border-gray-100 bg-white p-6 transition duration-300 hover:shadow-xl md:rounded-[32px] md:p-8"
                        >
                            <div className="w-12 h-12 bg-gray-50 rounded-2xl flex items-center justify-center mb-6 text-txt-primary group-hover:bg-brand-gold group-hover:text-white transition">
                                <Activity className="w-6 h-6" />
                            </div>
                            <h4 className="font-bold text-lg mb-2 text-txt-primary">Clínica Geral</h4>
                            <p className="text-sm text-gray-500 leading-relaxed font-medium">Limpeza, restaurações e prevenção para manter a saúde bucal sempre em dia.</p>
                        </div>

                        {/* ATM e Dor */}
                        <div
                            onClick={() => handleInterest('atm')}
                            className="group cursor-pointer rounded-[26px] border border-gray-100 bg-white p-6 transition duration-300 hover:shadow-xl md:rounded-[32px] md:p-8"
                        >
                            <div className="w-12 h-12 bg-gray-50 rounded-2xl flex items-center justify-center mb-6 text-brand-gold group-hover:bg-brand-gold group-hover:text-white transition">
                                <Smile className="w-6 h-6" />
                            </div>
                            <h4 className="font-bold text-lg mb-2 text-txt-primary">ATM e Dor</h4>
                            <p className="text-sm text-gray-500 leading-relaxed font-medium">Tratamento especializado para bruxismo, estalos e dores na face ou cabeça.</p>
                        </div>

                        {/* Estética */}
                        <div
                            onClick={() => handleInterest('estetica')}
                            className="group cursor-pointer rounded-[26px] border border-gray-100 bg-white p-6 transition duration-300 hover:shadow-xl md:rounded-[32px] md:p-8"
                        >
                            <div className="w-12 h-12 bg-gray-50 rounded-2xl flex items-center justify-center mb-6 text-txt-primary group-hover:bg-brand-gold group-hover:text-white transition">
                                <Sparkles className="w-6 h-6" />
                            </div>
                            <h4 className="font-bold text-lg mb-2 text-txt-primary">Estética</h4>
                            <p className="text-sm text-gray-500 leading-relaxed font-medium">Clareamento, facetas de resina e lentes de contato dental para sorrir mais.</p>
                            <Link
                                href="/clareamento-dental-betim"
                                className="mt-5 inline-block text-xs font-black uppercase tracking-[0.18em] text-gray-500 hover:text-brand-gold transition"
                                onClick={(event) => event.stopPropagation()}
                            >
                                Ver clareamento em Betim
                            </Link>
                        </div>
                    </motion.div>

                </motion.div>
            </div>
        </section>
    );
}
