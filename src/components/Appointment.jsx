'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { User, Activity, Check, ArrowRight, ArrowLeft, Phone, Calendar, Clock, AlertCircle } from 'lucide-react';
import { clsx } from 'clsx';

import { useUser } from '@/context/UserContext';

// Helper to generate dates
const getAvailableSlots = () => {
    const slots = [];
    const today = new Date();

    for (let i = 1; i <= 15; i++) {
        // Pick ~8 random days out of 15
        if (Math.random() > 0.4) {
            const date = new Date(today);
            date.setDate(today.getDate() + i);
            // Skip weekends if needed, but for scarcity let's keep it simple or skip Sunday
            if (date.getDay() === 0) continue;

            const dayStr = date.toLocaleDateString('pt-BR', { day: '2-digit', month: '2-digit', weekday: 'short' });
            // Logic: First slot (08:00 or 09:00) and Last slot (17:00 or 18:00)
            slots.push({ date: dayStr, time: '08:00', label: 'Manhã' });
            slots.push({ date: dayStr, time: '17:30', label: 'Noite' });
        }
        if (slots.length >= 10) break; // Limit to 10-12 total slots to show "scarcity"
    }
    return slots;
};

export default function Appointment() {
    const { userName, updateName } = useUser();
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({ name: '', treatment: '', phone: '', slot: '' });
    const [availableSlots, setAvailableSlots] = useState([]);
    const [isSubmitting, setIsSubmitting] = useState(false);

    useEffect(() => {
        setAvailableSlots(getAvailableSlots());
        setFormData((prev) => {
            if (!userName || prev.name) {
                return prev;
            }

            return { ...prev, name: userName };
        });
    }, [userName]);

    const handleNext = () => {
        if (step === 1 && formData.name) updateName(formData.name);
        setStep(s => s + 1);
    };
    const handlePrev = () => setStep(s => s - 1);

    const finishBooking = async () => {
        if (formData.phone.length < 8) return alert("Por favor, digite seu telefone corretamente.");

        setIsSubmitting(true);
        try {
            // Parse slot (format: "dd/mm, dia - HH:MM")
            const [datePart, timePart] = formData.slot.split(' - ');

            const appointmentData = {
                patient_name: formData.name,
                treatment: formData.treatment,
                phone: formData.phone,
                date: datePart || formData.slot,
                time: timePart || '08:00',
                status: 'Pendente',
                slot: formData.slot
            };

            console.log('📤 Enviando agendamento:', appointmentData);

            const response = await fetch('/api/appointments', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(appointmentData)
            });

            console.log('📥 Response status:', response.status);

            if (!response.ok) {
                const errorText = await response.text();
                console.error('❌ Error response:', errorText);

                let errorMessage = 'Erro ao enviar';
                try {
                    const errorJson = JSON.parse(errorText);
                    errorMessage = errorJson.error || errorMessage;
                } catch (e) {
                    errorMessage = errorText || errorMessage;
                }

                throw new Error(errorMessage);
            }

            const result = await response.json();
            console.log('✅ Agendamento criado:', result);

            // Success! Show better feedback
            setStep(5); // Move to success step
        } catch (e) {
            console.error('❌ Appointment error:', e);
            alert(`Erro ao agendar: ${e.message}\n\nVerifique o console (F12) para mais detalhes.`);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="agendamento" className="relative overflow-hidden bg-white py-20 md:py-32">
            <div className="relative z-10 mx-auto max-w-6xl px-5 md:px-6">
                <div className="grid overflow-hidden rounded-[28px] border border-gray-100 bg-white shadow-2xl lg:grid-cols-2 md:rounded-[40px]">

                    {/* Left Panel */}
                    <div className="relative flex flex-col justify-center overflow-hidden bg-txt-primary p-7 text-white md:p-16">
                        <div className="absolute top-0 right-0 p-32 bg-brand-gold opacity-10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                        <p className="relative z-10 mb-4 text-[11px] font-black uppercase tracking-[0.28em] text-brand-gold">
                            Etapa final da decisão
                        </p>
                        <h3 className="relative z-10 mb-5 text-2xl font-black md:mb-6 md:text-3xl">Agenda Inteligente.</h3>
                        <p className="relative z-10 mb-7 text-sm leading-7 text-gray-400 md:mb-8 md:text-base md:leading-relaxed">
                            Se você chegou até aqui, provavelmente já não está só curiosa. Está tentando entender se existe um próximo passo seguro, claro e bem conduzido.
                            <br /><strong className="text-brand-gold">A avaliação existe justamente para isso.</strong>
                        </p>
                        <ul className="relative z-10 space-y-4 text-sm font-bold text-gray-300">
                            <li className="flex items-center gap-3"><div className="bg-brand-gold/20 p-2 rounded-full"><Check className="text-brand-gold w-4 h-4" /></div> Leitura inicial do seu caso</li>
                            <li className="flex items-center gap-3"><div className="bg-brand-gold/20 p-2 rounded-full"><Check className="text-brand-gold w-4 h-4" /></div> Clareza sobre tratamento, tempo e investimento</li>
                            <li className="flex items-center gap-3"><div className="bg-brand-gold/20 p-2 rounded-full"><Check className="text-brand-gold w-4 h-4" /></div> Orientação sem pressão para decidir</li>
                        </ul>
                    </div>

                    {/* Right Panel (Form) */}
                    <div className="relative flex flex-col bg-white p-7 md:p-16">
                        <div className="absolute top-0 left-0 w-full h-1 bg-gray-100">
                            <div
                                className="h-full bg-brand-gold transition-all duration-500 ease-out"
                                style={{ width: `${step * 25}%` }} // Adjusted for 4 steps now? Or stick to flow
                            />
                        </div>

                        <div className="flex min-h-[320px] flex-1 flex-col justify-center md:min-h-[350px]">
                            <AnimatePresence mode="wait">

                                {/* STEP 1: NAME */}
                                {step === 1 && (
                                    <motion.div
                                        key="step1"
                                        initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}
                                        className="w-full"
                                    >
                                        <label className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-6 block">Início</label>
                                        <h4 className="mb-3 text-xl font-bold text-txt-primary md:mb-4 md:text-2xl">Para começarmos, qual seu nome?</h4>
                                        <p className="mb-7 text-sm leading-7 text-gray-500 md:mb-8">
                                            Queremos tornar essa experiência mais humana e mais personalizada desde a primeira resposta.
                                        </p>
                                        <div className="relative mb-8">
                                            <User className="absolute left-0 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5 pointer-events-none" />
                                            <input
                                                type="text"
                                                className="w-full border-b-2 border-gray-200 bg-transparent py-4 pl-8 text-base font-medium capitalize outline-none transition focus:border-brand-gold md:text-lg"
                                                placeholder="Digite seu nome..."
                                                value={formData.name}
                                                onChange={e => setFormData({ ...formData, name: e.target.value })}
                                            />
                                        </div>
                                        <button
                                            onClick={() => formData.name.length > 2 && handleNext()}
                                            className={clsx("w-full py-4 bg-brand-gold text-white font-bold rounded-full transition hover:bg-brand-gold-dark flex items-center justify-center gap-2", formData.name.length <= 2 && "opacity-50 cursor-not-allowed")}
                                        >
                                            CONTINUAR <ArrowRight className="w-4 h-4" />
                                        </button>
                                    </motion.div>
                                )}

                                {/* STEP 2: INTEREST */}
                                {step === 2 && (
                                    <motion.div
                                        key="step2"
                                        initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}
                                        className="w-full"
                                    >
                                        <label className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-6 block">Objetivo</label>
                                        <h4 className="mb-3 text-xl font-bold text-txt-primary md:mb-4 md:text-2xl">O que você busca hoje?</h4>
                                        <p className="mb-7 text-sm leading-7 text-gray-500 md:mb-8">
                                            Isso nos ajuda a organizar a avaliação certa antes mesmo do primeiro contato da equipe.
                                        </p>
                                        <div className="mb-8 space-y-3">
                                            {['Invisalign / Alinhadores', 'Implantes / Próteses', 'Estética Geral', 'Outros'].map(item => (
                                                <button
                                                    key={item}
                                                    onClick={() => { setFormData({ ...formData, treatment: item }); handleNext(); }}
                                                    className="group flex w-full items-center gap-3 rounded-xl border border-gray-200 p-4 text-left text-sm font-bold transition hover:border-brand-gold hover:bg-orange-50/50"
                                                >
                                                    <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-white transition"><Activity className="w-4 h-4 text-gray-400 group-hover:text-brand-gold" /></div>
                                                    {item}
                                                </button>
                                            ))}
                                        </div>
                                        <button onClick={handlePrev} className="text-xs font-bold text-gray-400 hover:text-black flex items-center gap-1"><ArrowLeft className="w-3 h-3" /> VOLTAR</button>
                                    </motion.div>
                                )}

                                {/* STEP 3: SMART SCHEDULING (SCARCITY) */}
                                {step === 3 && (
                                    <motion.div
                                        key="step3"
                                        initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}
                                        className="w-full"
                                    >
                                        <div className="flex justify-between items-center mb-6">
                                            <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">Horários Liberados</label>
                                            <div className="flex items-center gap-1 text-[10px] font-bold text-red-500 bg-red-50 px-2 py-1 rounded-full animate-pulse">
                                                <AlertCircle size={10} /> ÚLTIMAS VAGAS
                                            </div>
                                        </div>
                                        <p className="mb-6 text-sm leading-7 text-gray-500">
                                            Escolha o horário que faz mais sentido para sua rotina. Depois a clínica confirma e conduz os próximos passos com você.
                                        </p>

                                        <div className="mb-8 grid max-h-[280px] grid-cols-1 gap-3 overflow-y-auto pr-1 custom-scrollbar sm:grid-cols-2 sm:pr-2">
                                            {availableSlots.map((slot, idx) => (
                                                <button
                                                    key={idx}
                                                    onClick={() => { setFormData({ ...formData, slot: `${slot.date} às ${slot.time}` }); handleNext(); }}
                                                    className="p-3 rounded-xl border border-gray-200 hover:border-brand-gold hover:bg-orange-50/50 transition text-left group"
                                                >
                                                    <p className="text-[10px] font-bold text-gray-400 uppercase mb-1 flex items-center gap-1">
                                                        <Calendar size={10} /> {slot.date}
                                                    </p>
                                                    <p className="text-sm font-bold text-txt-primary group-hover:text-brand-gold">
                                                        {slot.time} <span className="text-[10px] font-normal text-gray-400 ml-1">({slot.label})</span>
                                                    </p>
                                                </button>
                                            ))}
                                        </div>
                                        <button onClick={handlePrev} className="text-xs font-bold text-gray-400 hover:text-black flex items-center gap-1"><ArrowLeft className="w-3 h-3" /> VOLTAR</button>
                                    </motion.div>
                                )}

                                {/* STEP 4: PHONE */}
                                {step === 4 && (
                                    <motion.div
                                        key="step4"
                                        initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}
                                        className="w-full text-center"
                                    >
                                        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center text-green-600 mx-auto mb-6">
                                            <Check className="w-8 h-8" />
                                        </div>
                                        <h4 className="mb-2 text-xl font-bold text-txt-primary">Excelente, {formData.name.split(' ')[0]}!</h4>
                                        <p className="mb-6 text-sm text-gray-500">
                                            Reservamos provisoriamente seu horário: <br />
                                            <strong className="text-brand-gold">{formData.slot}</strong>.
                                        </p>

                                        <div className="relative mb-6 text-left">
                                            <Phone className="absolute left-0 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5 pointer-events-none" />
                                            <input
                                                type="tel"
                                                className="w-full border-b-2 border-gray-200 bg-transparent py-4 pl-8 text-base font-medium outline-none transition focus:border-brand-gold md:text-lg"
                                                placeholder="Seu WhatsApp (31)..."
                                                value={formData.phone}
                                                onChange={e => setFormData({ ...formData, phone: e.target.value })}
                                            />
                                        </div>

                                        <button
                                            onClick={finishBooking}
                                            disabled={isSubmitting}
                                            className={clsx(
                                                "w-full py-4 bg-[#25D366] text-white font-bold rounded-full transition hover:bg-green-600 flex items-center justify-center gap-2 shadow-lg shadow-green-200",
                                                isSubmitting && "opacity-50 cursor-not-allowed"
                                            )}
                                        >
                                            {isSubmitting ? (
                                                <>
                                                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                                    CONFIRMANDO...
                                                </>
                                            ) : (
                                                <>
                                                    <Phone className="w-4 h-4" /> CONCLUIR RESERVA
                                                </>
                                            )}
                                        </button>
                                        <button onClick={handlePrev} className="mt-6 text-xs font-bold text-gray-400 hover:text-black inline-flex items-center gap-1"><ArrowLeft className="w-3 h-3" /> Alterar horário</button>
                                    </motion.div>
                                )}

                                {/* STEP 5: SUCCESS */}
                                {step === 5 && (
                                    <motion.div
                                        key="step5"
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        className="w-full text-center"
                                    >
                                        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center text-green-600 mx-auto mb-6 animate-bounce">
                                            <Check className="w-10 h-10" />
                                        </div>
                                        <h4 className="text-2xl font-bold mb-3 text-txt-primary">Tudo Certo! 🎉</h4>
                                        <p className="text-gray-600 mb-4 leading-relaxed">
                                            Seu agendamento foi registrado com sucesso, <strong>{formData.name.split(' ')[0]}</strong>!
                                        </p>
                                        <div className="bg-orange-50 border border-brand-gold/20 rounded-2xl p-4 mb-6 text-left">
                                            <p className="text-xs font-bold text-gray-400 uppercase mb-2">Resumo</p>
                                            <p className="text-sm text-gray-700 mb-1"><strong>Tratamento:</strong> {formData.treatment}</p>
                                            <p className="text-sm text-gray-700 mb-1"><strong>Horário:</strong> {formData.slot}</p>
                                            <p className="text-sm text-gray-700"><strong>Contato:</strong> {formData.phone}</p>
                                        </div>
                                        <p className="text-xs text-gray-500 mb-6">
                                            Nossa equipe entrará em contato em breve para confirmar! 📱
                                        </p>
                                        <button
                                            onClick={() => window.location.reload()}
                                            className="w-full py-3 bg-brand-gold text-white font-bold rounded-full hover:bg-brand-gold-dark transition"
                                        >
                                            FAZER NOVO AGENDAMENTO
                                        </button>
                                    </motion.div>
                                )}

                            </AnimatePresence>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
