'use client';
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Plus, X, Lock } from 'lucide-react';
import { motion } from 'framer-motion';
import { clsx } from 'clsx';

export default function CalendarView({ appointments, onSlotClick, filterDentist, onCreateAppointment, onEditAppointment }) {
    const [currentDate, setCurrentDate] = useState(new Date());
    const [availabilityCache, setAvailabilityCache] = useState({});
    const [loading, setLoading] = useState(false);

    // Week navigation logic
    const getWeekDays = () => {
        const start = new Date(currentDate);
        start.setDate(start.getDate() - start.getDay());
        return Array.from({ length: 7 }, (_, i) => {
            const date = new Date(start);
            date.setDate(start.getDate() + i);
            return date;
        });
    };
    const weekDays = getWeekDays();
    const timeSlots = Array.from({ length: 20 }, (_, i) => {
        const hour = Math.floor(i / 2) + 8;
        const minute = (i % 2) * 30;
        return `${String(hour).padStart(2, '0')}:${String(minute).padStart(2, '0')}`;
    });

    // Carregar disponibilidade quando mudar dentista ou semana
    useEffect(() => {
        if (filterDentist && filterDentist !== 'all') {
            loadAvailabilityForWeek();
        } else {
            setAvailabilityCache({});
        }
    }, [filterDentist, currentDate]);

    async function loadAvailabilityForWeek() {
        setLoading(true);
        const cache = {};

        try {
            // Carregar disponibilidade para cada dia da semana
            const promises = weekDays.map(async (day) => {
                const dateStr = day.toISOString().split('T')[0];
                try {
                    const response = await fetch('/api/availability/check', {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({
                            dentist_id: parseInt(filterDentist),
                            date: dateStr
                        })
                    });

                    if (response.ok) {
                        const data = await response.json();
                        cache[dateStr] = data.all_slots || [];
                    }
                } catch (error) {
                    console.error(`Erro ao carregar ${dateStr}:`, error);
                }
            });

            await Promise.all(promises);
            setAvailabilityCache(cache);
        } catch (error) {
            console.error('Erro ao carregar disponibilidade:', error);
        } finally {
            setLoading(false);
        }
    }

    const getAppointmentsForSlot = (date, time) => {
        const dateStr = date.toLocaleDateString('pt-BR');
        return appointments.filter(appt => {
            let apptDateStr = appt.date;
            if (apptDateStr && apptDateStr.includes('às')) {
                const match = apptDateStr.match(/(\d{2}\/\d{2})/);
                if (match) {
                    apptDateStr = match[1] + '/' + date.getFullYear();
                }
            }
            const apptDateMatch = apptDateStr === dateStr ||
                (apptDateStr && dateStr.startsWith(apptDateStr.slice(0, 5)));
            const apptTimeMatch = appt.time === time;
            return apptDateMatch && apptTimeMatch;
        });
    };

    const isSlotAvailable = (day, time) => {
        if (!filterDentist || filterDentist === 'all') {
            return null; // Não mostrar cores se não tem filtro
        }

        const dateStr = day.toISOString().split('T')[0];
        const daySlots = availabilityCache[dateStr];

        if (!daySlots) {
            return null; // Ainda carregando
        }

        const slot = daySlots.find(s => s.time === time);
        return slot?.available || false;
    };

    return (
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="p-6 border-b border-gray-100 flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <button
                        onClick={() => setCurrentDate(new Date(currentDate.setDate(currentDate.getDate() - 7)))}
                        className="p-2 hover:bg-gray-100 rounded-lg transition"
                    >
                        <ChevronLeft size={20} />
                    </button>
                    <h3 className="font-black text-xl">
                        {currentDate.toLocaleDateString('pt-BR', { month: 'long', year: 'numeric' })}
                    </h3>
                    <button
                        onClick={() => setCurrentDate(new Date(currentDate.setDate(currentDate.getDate() + 7)))}
                        className="p-2 hover:bg-gray-100 rounded-lg transition"
                    >
                        <ChevronRight size={20} />
                    </button>
                </div>
                {loading && (
                    <div className="text-sm text-gray-400">Carregando disponibilidade...</div>
                )}
            </div>

            <div className="overflow-x-auto">
                <div className="min-w-[800px]">
                    <div className="grid grid-cols-8 border-b border-gray-100">
                        <div className="p-4"></div>
                        {weekDays.map((day, idx) => (
                            <div key={idx} className="p-4 text-center border-l border-gray-50">
                                <div className="text-xs font-bold text-gray-400">{day.toLocaleDateString('pt-BR', { weekday: 'short' }).toUpperCase()}</div>
                                <div className="font-black text-lg">{day.getDate()}</div>
                            </div>
                        ))}
                    </div>

                    <div className="max-h-[600px] overflow-y-auto">
                        {timeSlots.map((time, timeIdx) => (
                            <div key={time} className="grid grid-cols-8 border-b border-gray-50">
                                <div className="p-2 text-xs font-bold text-gray-400">{time}</div>
                                {weekDays.map((day, dayIdx) => {
                                    const appts = getAppointmentsForSlot(day, time);
                                    const hasAppointment = appts.length > 0;
                                    const available = isSlotAvailable(day, time);

                                    // Determinar cor de fundo
                                    let bgColor = '';
                                    let showUnavailable = false;

                                    if (hasAppointment) {
                                        bgColor = ''; // Agendamento define a cor
                                    } else if (available === true) {
                                        bgColor = 'bg-green-50 hover:bg-green-100'; // Disponível
                                    } else if (available === false) {
                                        bgColor = 'bg-gray-100'; // Indisponível
                                        showUnavailable = true;
                                    }

                                    return (
                                        <div
                                            key={dayIdx}
                                            onClick={() => {
                                                // Bloquear se indisponível
                                                if (available === false && !hasAppointment) {
                                                    alert('❌ Horário indisponível\n\nEste dentista não atende neste horário.\n\nConfigure a disponibilidade em "Disponibilidade" no menu.');
                                                    return;
                                                }

                                                onSlotClick({
                                                    date: day.toLocaleDateString('pt-BR'),
                                                    time,
                                                    appointments: appts
                                                });
                                            }}
                                            className={clsx(
                                                "min-h-[60px] border-l border-gray-50 p-1 transition-colors relative",
                                                bgColor,
                                                available === false ? 'cursor-not-allowed' : 'cursor-pointer'
                                            )}
                                        >
                                            {hasAppointment ? (
                                                appts.map(appt => (
                                                    <div key={appt.id} className={clsx(
                                                        "p-2 rounded-lg text-xs font-bold shadow-sm mb-1",
                                                        appt.status === 'Confirmado' ? "bg-green-500 text-white" :
                                                            appt.status === 'Cancelado' ? "bg-red-100 text-red-500" :
                                                                appt.status === 'Atendido' ? "bg-blue-100 text-blue-600" :
                                                                    appt.status === 'Não Compareceu' ? "bg-orange-100 text-orange-600" :
                                                                        "bg-gray-100 text-gray-500 border border-gray-200"
                                                    )}>
                                                        {appt.status === 'Pendente' ? (
                                                            <div className="flex items-center gap-1 justify-center h-full">
                                                                <Lock size={12} />
                                                                Pré-agendado
                                                            </div>
                                                        ) : (
                                                            <>
                                                                <div className="font-black">{appt.patient_name}</div>
                                                                <div className="text-[10px] opacity-75">{appt.treatment}</div>
                                                            </>
                                                        )}
                                                    </div>
                                                ))
                                            ) : showUnavailable ? (
                                                <div className="flex items-center justify-center h-full">
                                                    <div className="text-xs text-gray-400">-</div>
                                                </div>
                                            ) : null}
                                        </div>
                                    );
                                })}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
