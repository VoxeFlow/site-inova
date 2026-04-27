'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useUser } from '@/context/UserContext';
import { ArrowRight } from 'lucide-react';

export default function WelcomeModal() {
    const [isOpen, setIsOpen] = useState(false);
    const [nameInput, setNameInput] = useState('');
    const { userName, updateName } = useUser();

    useEffect(() => {
        const savedName = localStorage.getItem('inova_user_name');
        if (savedName?.trim()) {
            return;
        }

        const timer = setTimeout(() => setIsOpen(true), 800);
        return () => clearTimeout(timer);
    }, [updateName]);

    const handleStart = () => {
        if (nameInput.trim().length > 0) {
            updateName(nameInput.trim());
        }
        closeModal();
    };

    const closeModal = () => {
        setIsOpen(false);
    };

    if (userName) return null;

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute inset-0 bg-[rgba(12,12,12,0.36)] backdrop-blur-[18px]"
                        onClick={closeModal}
                    />

                    <motion.div
                        initial={{ opacity: 0, scale: 0.94, y: 16 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.97, y: 10 }}
                        transition={{ duration: 0.34, ease: 'easeOut' }}
                        className="liquid-glass-panel relative w-full max-w-[29rem] overflow-hidden rounded-[2rem] px-7 py-8 text-center sm:px-9 sm:py-10"
                    >
                        <div className="absolute inset-x-12 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />
                        <div className="absolute -left-10 top-8 h-24 w-24 rounded-full bg-white/12 blur-2xl" />
                        <div className="absolute -right-8 bottom-6 h-28 w-28 rounded-full bg-white/8 blur-2xl" />

                        <div className="relative z-10">
                            <p className="text-[11px] font-bold uppercase tracking-[0.34em] text-black/42">
                                INOVA
                            </p>
                            <p className="mx-auto mt-5 max-w-[23rem] text-[24px] font-semibold leading-[1.12] tracking-[-0.04em] text-black/88 sm:text-[29px]">
                                Como podemos te chamar?
                            </p>
                        </div>

                        <div className="relative z-10 mt-8">
                            <input
                                type="text"
                                autoFocus
                                value={nameInput}
                                onChange={(e) => setNameInput(e.target.value)}
                                onKeyDown={(e) => e.key === 'Enter' && handleStart()}
                                className="w-full rounded-[1.35rem] border border-black/10 bg-white/48 px-5 py-4 text-center text-base font-semibold text-black/78 outline-none transition placeholder:text-black/34 focus:border-brand-gold/60 focus:bg-white/62"
                                placeholder="Seu primeiro nome"
                            />
                        </div>

                        <div className="relative z-10 mt-5">
                            <button
                                onClick={handleStart}
                                className="inline-flex w-full items-center justify-center gap-2 rounded-[1.35rem] border border-white/35 bg-white/18 px-6 py-4 text-sm font-bold uppercase tracking-[0.14em] text-black/72 transition hover:bg-white/28 hover:text-black/86"
                            >
                                Continuar
                                <ArrowRight className="w-4 h-4" />
                            </button>
                        </div>

                        <button
                            onClick={closeModal}
                            className="relative z-10 mt-5 text-[10px] font-bold uppercase tracking-[0.28em] text-black/34 transition hover:text-black/62"
                        >
                            Pular apresentação
                        </button>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}
