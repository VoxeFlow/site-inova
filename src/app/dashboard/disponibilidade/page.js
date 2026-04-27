'use client';

import { useState, useEffect } from 'react';

const DAYS = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];

// Gerar horários baseado no intervalo
function generateTimeSlots(interval = 60) {
    const slots = [];
    const startHour = 8;
    const endHour = 18;

    for (let hour = startHour; hour <= endHour; hour++) {
        if (interval === 30) {
            slots.push(`${hour.toString().padStart(2, '0')}:00`);
            if (hour < endHour) {
                slots.push(`${hour.toString().padStart(2, '0')}:30`);
            }
        } else {
            slots.push(`${hour.toString().padStart(2, '0')}:00`);
        }
    }

    return slots;
}

export default function DisponibilidadePage() {
    const [dentists, setDentists] = useState([]);
    const [selectedDentist, setSelectedDentist] = useState(null);
    const [availability, setAvailability] = useState({});
    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);
    const [timeInterval, setTimeInterval] = useState(60); // 30 ou 60 minutos
    const [hours, setHours] = useState(generateTimeSlots(60));

    useEffect(() => {
        loadDentists();
    }, []);

    useEffect(() => {
        if (selectedDentist) {
            loadAvailability(selectedDentist);
        }
    }, [selectedDentist]);

    useEffect(() => {
        setHours(generateTimeSlots(timeInterval));
    }, [timeInterval]);

    async function loadDentists() {
        try {
            const res = await fetch('/api/dentists');
            const data = await res.json();
            setDentists(data);
            if (data.length > 0) {
                setSelectedDentist(data[0].id);
            }
        } catch (error) {
            console.error('Error loading dentists:', error);
        } finally {
            setLoading(false);
        }
    }

    async function loadAvailability(dentistId) {
        try {
            setLoading(true);
            console.log('📅 Carregando disponibilidade para dentista:', dentistId);

            const res = await fetch(`/api/dentists/${dentistId}/availability`);
            const data = await res.json();

            console.log('📊 Disponibilidade recebida:', data);

            // Availability já vem no formato correto (objeto JSON)
            setAvailability(data.availability || {});
        } catch (error) {
            console.error('❌ Erro ao carregar disponibilidade:', error);
            setAvailability({});
        } finally {
            setLoading(false);
        }
    }

    function toggleSlot(dayOfWeek, hour) {
        const key = `${dayOfWeek}-${hour}`;
        const current = availability[key];

        setAvailability(prev => ({
            ...prev,
            [key]: {
                ...current,
                available: !current?.available,
                start_time: hour,
                end_time: getEndTime(hour)
            }
        }));
    }

    function getEndTime(startTime) {
        const [hours, minutes] = startTime.split(':').map(Number);
        const endMinutes = minutes + timeInterval;

        if (endMinutes >= 60) {
            return `${(hours + 1).toString().padStart(2, '0')}:${(endMinutes - 60).toString().padStart(2, '0')}`;
        }
        return `${hours.toString().padStart(2, '0')}:${endMinutes.toString().padStart(2, '0')}`;
    }

    async function saveAvailability() {
        if (!selectedDentist) {
            alert('Selecione um dentista primeiro');
            return;
        }

        try {
            setSaving(true);
            console.log('💾 Salvando disponibilidade...');
            console.log('Dentista ID:', selectedDentist);
            console.log('Disponibilidade:', availability);

            const response = await fetch(`/api/dentists/${selectedDentist}/availability`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ availability })
            });

            if (!response.ok) {
                const error = await response.text();
                console.error('❌ Erro ao salvar:', error);
                throw new Error('Erro ao salvar disponibilidade');
            }

            const data = await response.json();
            console.log('✅ Disponibilidade salva:', data);

            const totalSlots = Object.keys(availability).filter(key => availability[key]?.available).length;
            alert(`✅ Disponibilidade salva! (${totalSlots} horários disponíveis)`);

            // Recarregar dados
            await loadAvailability(selectedDentist);
        } catch (error) {
            console.error('❌ Erro:', error);
            alert('❌ Erro ao salvar disponibilidade');
        } finally {
            setSaving(false);
        }
    }

    if (loading && dentists.length === 0) {
        return (
            <div className="flex items-center justify-center min-h-screen">
                <div className="text-xl">Carregando...</div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-8">
            <div className="max-w-7xl mx-auto">
                <div className="bg-white rounded-2xl shadow-xl p-8">
                    <h1 className="text-3xl font-bold text-gray-800 mb-6">
                        Gerenciar Disponibilidade
                    </h1>

                    {/* Controls */}
                    <div className="mb-8 flex gap-6">
                        {/* Dentist Selector */}
                        <div className="flex-1">
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Profissional
                            </label>
                            <select
                                value={selectedDentist || ''}
                                onChange={(e) => setSelectedDentist(parseInt(e.target.value))}
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            >
                                {dentists.map(dentist => (
                                    <option key={dentist.id} value={dentist.id}>
                                        {dentist.name}
                                    </option>
                                ))}
                            </select>
                        </div>

                        {/* Time Interval Selector */}
                        <div className="flex-1">
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Intervalo de Atendimento
                            </label>
                            <select
                                value={timeInterval}
                                onChange={(e) => setTimeInterval(parseInt(e.target.value))}
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            >
                                <option value={30}>30 minutos</option>
                                <option value={60}>1 hora</option>
                            </select>
                        </div>
                    </div>

                    {/* Info Box */}
                    <div className="mb-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                        <p className="text-sm text-blue-800">
                            <strong>Horários disponíveis:</strong> Segunda a Sexta (8h-18h) e Sábado (8h-12h)
                        </p>
                        <p className="text-sm text-blue-800 mt-1">
                            <strong>Intervalo selecionado:</strong> {timeInterval === 30 ? '30 minutos' : '1 hora'} por atendimento
                        </p>
                    </div>

                    {/* Availability Grid */}
                    {loading ? (
                        <div className="text-center py-12">
                            <div className="text-gray-500">Carregando disponibilidade...</div>
                        </div>
                    ) : (
                        <>
                            <div className="overflow-x-auto">
                                <table className="w-full border-collapse">
                                    <thead>
                                        <tr>
                                            <th className="p-3 text-left font-semibold text-gray-700 border-b-2 sticky left-0 bg-white">
                                                Horário
                                            </th>
                                            {/* Segunda a Sábado */}
                                            {DAYS.slice(1, 7).map((day, idx) => (
                                                <th key={idx + 1} className="p-3 text-center font-semibold text-gray-700 border-b-2">
                                                    {day}
                                                </th>
                                            ))}
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {hours.map(hour => {
                                            const hourNum = parseInt(hour.split(':')[0]);

                                            return (
                                                <tr key={hour} className="hover:bg-gray-50">
                                                    <td className="p-3 font-medium text-gray-600 border-b sticky left-0 bg-white">
                                                        {hour}
                                                    </td>
                                                    {[1, 2, 3, 4, 5, 6].map(dayOfWeek => {
                                                        // Sábado (6) só até 12h
                                                        if (dayOfWeek === 6 && hourNum > 12) {
                                                            return (
                                                                <td key={dayOfWeek} className="p-3 text-center border-b bg-gray-100">
                                                                    <div className="w-12 h-12 rounded-lg bg-gray-200 mx-auto flex items-center justify-center text-gray-400 text-xs">
                                                                        N/A
                                                                    </div>
                                                                </td>
                                                            );
                                                        }

                                                        const key = `${dayOfWeek}-${hour}`;
                                                        const isAvailable = availability[key]?.available ?? false;

                                                        return (
                                                            <td key={dayOfWeek} className="p-3 text-center border-b">
                                                                <button
                                                                    onClick={() => toggleSlot(dayOfWeek, hour)}
                                                                    className={`w-12 h-12 rounded-lg transition-all duration-200 ${isAvailable
                                                                        ? 'bg-green-500 hover:bg-green-600 text-white shadow-md'
                                                                        : 'bg-gray-200 hover:bg-gray-300 text-gray-400'
                                                                        }`}
                                                                    title={isAvailable ? 'Disponível' : 'Indisponível'}
                                                                >
                                                                    {isAvailable ? '✓' : ''}
                                                                </button>
                                                            </td>
                                                        );
                                                    })}
                                                </tr>
                                            );
                                        })}
                                    </tbody>
                                </table>
                            </div>

                            {/* Save Button */}
                            <div className="mt-8 flex justify-end">
                                <button
                                    onClick={saveAvailability}
                                    disabled={saving}
                                    className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors shadow-lg"
                                >
                                    {saving ? 'Salvando...' : 'Salvar Alterações'}
                                </button>
                            </div>

                            {/* Legend */}
                            <div className="mt-6 flex items-center gap-6 text-sm text-gray-600">
                                <div className="flex items-center gap-2">
                                    <div className="w-6 h-6 bg-green-500 rounded shadow-md"></div>
                                    <span>Disponível</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="w-6 h-6 bg-gray-200 rounded"></div>
                                    <span>Indisponível</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="w-6 h-6 bg-gray-200 rounded flex items-center justify-center text-gray-400 text-xs">N/A</div>
                                    <span>Fora do horário</span>
                                </div>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}
