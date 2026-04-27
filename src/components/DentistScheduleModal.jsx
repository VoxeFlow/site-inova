'use client';
import { X, Clock, Calendar, Save } from 'lucide-react';
import { motion } from 'framer-motion';
import { useState } from 'react';

export default function DentistScheduleModal({ dentist, onClose, onSave }) {
    const [schedule, setSchedule] = useState({
        working_days: dentist.working_days || ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
        working_hours_start: dentist.working_hours_start || '08:00',
        working_hours_end: dentist.working_hours_end || '18:00',
        break_start: dentist.break_start || '12:00',
        break_end: dentist.break_end || '13:00',
        unavailable_dates: dentist.unavailable_dates || []
    });

    const [newDate, setNewDate] = useState('');

    const days = [
        { key: 'Mon', label: 'Seg' },
        { key: 'Tue', label: 'Ter' },
        { key: 'Wed', label: 'Qua' },
        { key: 'Thu', label: 'Qui' },
        { key: 'Fri', label: 'Sex' },
        { key: 'Sat', label: 'Sáb' },
        { key: 'Sun', label: 'Dom' }
    ];

    const toggleDay = (day) => {
        setSchedule(prev => ({
            ...prev,
            working_days: prev.working_days.includes(day)
                ? prev.working_days.filter(d => d !== day)
                : [...prev.working_days, day]
        }));
    };

    const addUnavailableDate = () => {
        if (newDate && !schedule.unavailable_dates.includes(newDate)) {
            setSchedule(prev => ({
                ...prev,
                unavailable_dates: [...prev.unavailable_dates, newDate]
            }));
            setNewDate('');
        }
    };

    const removeUnavailableDate = (date) => {
        setSchedule(prev => ({
            ...prev,
            unavailable_dates: prev.unavailable_dates.filter(d => d !== date)
        }));
    };

    const handleSave = async () => {
        await onSave(schedule);
        onClose();
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={onClose}
        >
            <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Header */}
                <div className="sticky top-0 bg-gradient-to-r from-teal-600 to-blue-600 text-white p-6 rounded-t-2xl">
                    <div className="flex items-center justify-between">
                        <div>
                            <h2 className="text-2xl font-bold">Configurar Horários</h2>
                            <p className="text-teal-100 text-sm mt-1">{dentist.name} - {dentist.specialty}</p>
                        </div>
                        <button
                            onClick={onClose}
                            className="p-2 hover:bg-white/20 rounded-lg transition"
                        >
                            <X size={24} />
                        </button>
                    </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-6">
                    {/* Working Days */}
                    <div>
                        <h3 className="font-bold text-gray-700 mb-3 flex items-center gap-2">
                            <Calendar size={18} className="text-teal-600" />
                            Dias de Atendimento
                        </h3>
                        <div className="grid grid-cols-7 gap-2">
                            {days.map(day => (
                                <button
                                    key={day.key}
                                    type="button"
                                    onClick={() => toggleDay(day.key)}
                                    className={`p-3 rounded-lg font-semibold text-sm transition ${schedule.working_days.includes(day.key)
                                            ? 'bg-teal-600 text-white'
                                            : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                                        }`}
                                >
                                    {day.label}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Working Hours */}
                    <div>
                        <h3 className="font-bold text-gray-700 mb-3 flex items-center gap-2">
                            <Clock size={18} className="text-blue-600" />
                            Horário de Atendimento
                        </h3>
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="text-xs text-gray-500 mb-1 block">Início</label>
                                <input
                                    type="time"
                                    value={schedule.working_hours_start}
                                    onChange={e => setSchedule({ ...schedule, working_hours_start: e.target.value })}
                                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                                />
                            </div>
                            <div>
                                <label className="text-xs text-gray-500 mb-1 block">Fim</label>
                                <input
                                    type="time"
                                    value={schedule.working_hours_end}
                                    onChange={e => setSchedule({ ...schedule, working_hours_end: e.target.value })}
                                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Break Time */}
                    <div>
                        <h3 className="font-bold text-gray-700 mb-3">Intervalo (Almoço)</h3>
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="text-xs text-gray-500 mb-1 block">Início</label>
                                <input
                                    type="time"
                                    value={schedule.break_start}
                                    onChange={e => setSchedule({ ...schedule, break_start: e.target.value })}
                                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                                />
                            </div>
                            <div>
                                <label className="text-xs text-gray-500 mb-1 block">Fim</label>
                                <input
                                    type="time"
                                    value={schedule.break_end}
                                    onChange={e => setSchedule({ ...schedule, break_end: e.target.value })}
                                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Unavailable Dates */}
                    <div>
                        <h3 className="font-bold text-gray-700 mb-3">Datas Indisponíveis</h3>
                        <div className="flex gap-2 mb-3">
                            <input
                                type="date"
                                value={newDate}
                                onChange={e => setNewDate(e.target.value)}
                                className="flex-1 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                            />
                            <button
                                type="button"
                                onClick={addUnavailableDate}
                                className="px-4 py-3 bg-teal-600 text-white rounded-lg font-semibold hover:bg-teal-700 transition"
                            >
                                Adicionar
                            </button>
                        </div>
                        {schedule.unavailable_dates.length > 0 && (
                            <div className="space-y-2">
                                {schedule.unavailable_dates.map(date => (
                                    <div key={date} className="flex items-center justify-between bg-gray-50 p-3 rounded-lg">
                                        <span className="text-gray-700">{new Date(date + 'T00:00:00').toLocaleDateString('pt-BR')}</span>
                                        <button
                                            type="button"
                                            onClick={() => removeUnavailableDate(date)}
                                            className="text-red-600 hover:text-red-700 font-semibold"
                                        >
                                            Remover
                                        </button>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>

                {/* Actions */}
                <div className="sticky bottom-0 bg-gray-50 p-6 rounded-b-2xl border-t border-gray-200">
                    <div className="flex gap-3">
                        <button
                            type="button"
                            onClick={onClose}
                            className="flex-1 px-4 py-3 bg-gray-200 text-gray-700 rounded-lg font-semibold hover:bg-gray-300 transition"
                        >
                            Cancelar
                        </button>
                        <button
                            type="button"
                            onClick={handleSave}
                            className="flex-1 px-4 py-3 bg-teal-600 text-white rounded-lg font-semibold hover:bg-teal-700 transition flex items-center justify-center gap-2"
                        >
                            <Save size={18} />
                            Salvar Configurações
                        </button>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
}
