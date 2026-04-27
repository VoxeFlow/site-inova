'use client';
import { motion } from 'framer-motion';
import { Star, Instagram, Facebook } from 'lucide-react';
import Link from 'next/link';

export default function Testimonials() {
    return (
        <section id="depoimentos" className="border-t border-gray-50 bg-white py-20 md:py-24">
            <div className="max-w-7xl mx-auto px-5 md:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="mx-auto mb-10 max-w-3xl text-center md:mb-16"
                >
                    <p className="text-xs font-black uppercase tracking-[0.32em] text-brand-gold">Confiança antes do agendamento</p>
                    <h2 className="mt-5 text-3xl font-black text-txt-primary md:text-5xl">
                        O que faz alguém sair da dúvida e marcar avaliação?
                    </h2>
                    <p className="mt-5 text-base leading-7 text-gray-600 md:text-lg md:leading-8">
                        Normalmente não é só preço. É sentir que existe estrutura, clareza e uma equipe capaz de conduzir a decisão com segurança.
                    </p>
                </motion.div>

                <div className="mb-16 grid gap-5 md:grid-cols-2 lg:grid-cols-4 md:gap-6 md:mb-20">
                    {/* Review 1 */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
                        className="rounded-[28px] border border-gray-100 bg-gray-50 p-6 transition duration-500 hover:shadow-lg md:rounded-[32px] md:p-8"
                    >
                        <div className="flex gap-1 text-yellow-400 mb-4">
                            {[1, 2, 3, 4, 5].map(i => <Star key={i} fill="currentColor" size={16} />)}
                        </div>
                        <p className="text-sm italic text-gray-600 mb-6 leading-relaxed">
                            &ldquo;Atendimento impecável. Fiz meu implante com o Dr. Lucas e foi super tranquilo. A estrutura passa muita segurança.&rdquo;
                        </p>
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center font-bold text-gray-500 text-xs">CE</div>
                            <p className="text-xs font-bold uppercase text-txt-primary">Cláudia Eustaquia</p>
                        </div>
                    </motion.div>

                    {/* Review 2 */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
                        className="rounded-[28px] border border-gray-100 bg-gray-50 p-6 transition duration-500 hover:shadow-lg md:rounded-[32px] md:p-8"
                    >
                        <div className="flex gap-1 text-yellow-400 mb-4">
                            {[1, 2, 3, 4, 5].map(i => <Star key={i} fill="currentColor" size={16} />)}
                        </div>
                        <p className="text-sm italic text-gray-600 mb-6 leading-relaxed">
                            &ldquo;Estrutura linda e o resultado do Invisalign foi perfeito. O Dr. Jefferson explica tudo com muita clareza.&rdquo;
                        </p>
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center font-bold text-gray-500 text-xs">ML</div>
                            <p className="text-xs font-bold uppercase text-txt-primary">Mário Lúcio</p>
                        </div>
                    </motion.div>

                    {/* Social 1 */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
                    >
                        <Link href="https://instagram.com/clinicainova" target="_blank" className="flex h-full flex-col justify-between rounded-[28px] bg-[linear-gradient(135deg,#111111,#2a2a2a)] p-6 text-white transition duration-500 hover:scale-[1.02] hover:shadow-xl md:rounded-[32px] md:p-8">
                            <Instagram size={34} className="text-brand-gold" />
                            <div>
                                <p className="mb-1 text-lg font-bold text-white">Veja mais histórias no Instagram</p>
                                <p className="text-xs font-medium text-white/72">@clinicainova</p>
                            </div>
                        </Link>
                    </motion.div>

                    {/* Social 2 */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}
                    >
                        <Link href="https://facebook.com/clinicainova" target="_blank" className="flex h-full flex-col justify-between rounded-[28px] border border-black/8 bg-[#fbfaf8] p-6 text-txt-primary transition duration-500 hover:scale-[1.02] hover:shadow-xl md:rounded-[32px] md:p-8">
                            <Facebook size={34} className="text-brand-gold" />
                            <div>
                                <p className="mb-1 text-lg font-bold">Acompanhe a clínica no Facebook</p>
                                <p className="text-xs font-medium text-gray-500">/clinicainova</p>
                            </div>
                        </Link>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
