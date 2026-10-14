'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUpRight, Check, ScanFace, Sparkles, ShieldCheck } from 'lucide-react';
import WhatsAppTrackedLink from '@/components/WhatsAppTrackedLink';
import { useState } from 'react';

const treatments = [
    {
        name: 'Invisalign',
        mark: 'invisalign',
        eyebrow: 'Alinhadores transparentes',
        description: 'Planejamento digital e acompanhamento profissional para alinhar o sorriso com discrição.',
        points: ['Tecnologia de planejamento digital', 'Conforto para a rotina', 'Indicação definida em avaliação'],
        Icon: ScanFace,
    },
    {
        name: 'Self',
        mark: 'self',
        eyebrow: 'Outra possibilidade',
        description: 'Uma alternativa de alinhadores transparentes que deve ser considerada conforme o diagnóstico.',
        points: ['Tratamento individualizado', 'Acompanhamento clínico', 'Escolha baseada no caso'],
        Icon: Sparkles,
    },
    {
        name: 'SouSmile',
        mark: 'sousmile',
        eyebrow: 'Outra possibilidade',
        description: 'Uma opção de alinhadores transparentes para entrar na conversa quando fizer sentido para o paciente.',
        points: ['Alternativa transparente', 'Planejamento responsável', 'Decisão após avaliação'],
        Icon: Check,
    },
    {
        name: 'Convencional',
        mark: 'convencional',
        eyebrow: 'Aparelho fixo',
        description: 'Quando o aparelho convencional é a melhor abordagem, ele também faz parte do plano.',
        points: ['Abordagem comprovada', 'Indicação clínica', 'Acompanhamento próximo'],
        Icon: ShieldCheck,
    },
];

export default function TreatmentSwitcher() {
    const [active, setActive] = useState(0);
    const treatment = treatments[active];
    const Icon = treatment.Icon;

    return (
        <div className="mt-10 overflow-hidden rounded-[32px] border border-black/8 bg-white shadow-[0_24px_80px_rgba(0,0,0,0.06)]">
            <div className="flex overflow-x-auto border-b border-black/8 [scrollbar-width:none] md:grid md:grid-cols-4 [&::-webkit-scrollbar]:hidden">
                {treatments.map((item, index) => (
                    <button
                        key={item.name}
                        type="button"
                        onClick={() => setActive(index)}
                        className={`group relative min-w-[8.5rem] shrink-0 px-5 py-4 text-left transition-colors duration-300 md:min-w-0 md:px-6 md:py-5 ${active === index ? 'bg-[#f5f5f7] text-txt-primary' : 'bg-white text-gray-500 hover:bg-[#faf8f4] hover:text-txt-primary'}`}
                        aria-pressed={active === index}
                    >
                        <span className="text-[10px] font-medium uppercase tracking-[0.22em] opacity-60">0{index + 1}</span>
                        <span className={`mt-2 block text-sm font-normal md:text-base ${item.mark === 'invisalign' ? 'tracking-[-0.04em]' : ''}`}>{item.name}</span>
                        {active === index ? <motion.span layoutId="active-treatment" className="absolute inset-x-5 bottom-0 h-0.5 bg-brand-gold md:inset-x-6" /> : null}
                    </button>
                ))}
            </div>

            <div className="grid gap-6 p-5 md:grid-cols-[0.8fr_1.2fr] md:gap-8 md:p-12">
                <div className="flex items-start gap-4">
                    <motion.div key={`${treatment.name}-icon`} initial={{ scale: 0.7, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="rounded-2xl bg-[#f6f0e5] p-4 text-brand-gold">
                        <Icon className="h-7 w-7" />
                    </motion.div>
                    <div>
                        <p className="text-xs font-medium uppercase tracking-[0.24em] text-brand-gold">{treatment.eyebrow}</p>
                        <h3 className={`mt-3 text-3xl font-normal ${treatment.mark === 'invisalign' ? 'tracking-[-0.06em]' : ''}`}>{treatment.name}</h3>
                    </div>
                </div>

                <AnimatePresence mode="wait">
                    <motion.div key={treatment.name} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.28 }}>
                        <p className="max-w-xl text-base leading-8 text-gray-600">{treatment.description}</p>
                        <div className="mt-5 grid gap-2 sm:grid-cols-3 md:mt-6 md:gap-3">
                            {treatment.points.map((point) => <div key={point} className="rounded-2xl bg-[#faf8f4] px-4 py-4 text-sm font-semibold leading-6 text-gray-700">{point}</div>)}
                        </div>
                        <WhatsAppTrackedLink href={`https://wa.me/553126260038?text=${encodeURIComponent(`Olá, gostaria de conversar sobre ${treatment.name} e saber se é indicado para o meu caso.`)}`} target="_blank" className="mt-6 inline-flex min-h-10 items-center gap-2 text-xs font-medium uppercase tracking-[0.12em] text-txt-primary transition-colors hover:text-brand-gold md:mt-7 md:tracking-[0.16em]">Conversar sobre esta opção <ArrowUpRight className="h-4 w-4" /></WhatsAppTrackedLink>
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    );
}
