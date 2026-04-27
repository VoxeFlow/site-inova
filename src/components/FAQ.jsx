'use client';
import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

import { homeFaqs } from '@/lib/faqs';

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState(null);

    return (
        <section id="faq" className="bg-gray-50 py-20 md:py-24">
            <div className="max-w-5xl mx-auto px-5 md:px-6">
                <div className="mx-auto mb-12 max-w-3xl text-center md:mb-16">
                    <p className="text-xs font-black uppercase tracking-[0.28em] text-brand-gold">FAQ</p>
                    <h2 className="mt-5 text-3xl font-black text-txt-primary md:text-4xl">Perguntas que mais aparecem antes de agendar.</h2>
                    <p className="mt-5 text-sm leading-7 text-gray-500 md:text-base md:leading-8">
                        Reunimos dúvidas que costumam aparecer em buscas como implante dentário em Betim, preço de implante, dentista em Betim, alinhador invisível e clareamento dental.
                    </p>
                </div>
                <div className="space-y-4">
                    {homeFaqs.map((faq, idx) => (
                        <div key={idx} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                            <button
                                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                                className="flex w-full items-start justify-between gap-4 p-5 text-left font-bold text-gray-800 transition hover:text-brand-gold md:items-center md:p-6"
                            >
                                <span className="pr-2 text-[15px] leading-6 md:text-base md:leading-normal">{faq.q}</span>
                                {openIndex === idx ? <Minus className="w-5 h-5 text-brand-gold" /> : <Plus className="w-5 h-5 text-gray-400" />}
                            </button>
                            <AnimatePresence>
                                {openIndex === idx && (
                                    <motion.div
                                        initial={{ height: 0 }}
                                        animate={{ height: "auto" }}
                                        exit={{ height: 0 }}
                                        className="overflow-hidden"
                                    >
                                        <div className="px-5 pb-5 pt-0 text-sm leading-7 text-gray-500 md:px-6 md:pb-6">
                                            {faq.a}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
                <div className="mt-10 flex flex-wrap justify-center gap-3 md:mt-12">
                    <Link href="/implante-dentario-betim" className="rounded-full border border-gray-200 bg-white px-4 py-3 text-center text-[13px] font-bold text-gray-700 transition hover:border-brand-gold hover:text-brand-gold md:px-5 md:text-sm">
                        Implante dentário em Betim
                    </Link>
                    <Link href="/quanto-custa-implante-dentario-betim" className="rounded-full border border-gray-200 bg-white px-4 py-3 text-center text-[13px] font-bold text-gray-700 transition hover:border-brand-gold hover:text-brand-gold md:px-5 md:text-sm">
                        Quanto custa implante em Betim
                    </Link>
                    <Link href="/dentista-em-betim" className="rounded-full border border-gray-200 bg-white px-4 py-3 text-center text-[13px] font-bold text-gray-700 transition hover:border-brand-gold hover:text-brand-gold md:px-5 md:text-sm">
                        Dentista em Betim
                    </Link>
                </div>
            </div>
        </section>
    );
}
