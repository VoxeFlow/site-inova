'use client';
import { useState, useEffect } from 'react';
import { Search, Plus, CheckCircle, Clock, Edit2, Trash2, X, List, CalendarDays, AlertCircle, UserCheck } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { clsx } from 'clsx';
import CalendarView from '@/components/CalendarView';
import AppointmentDetailModal from '@/components/AppointmentDetailModal';
import ClaraToggle from '@/components/ClaraToggle';

export default function AppointmentsPage() {
    const [appointments, setAppointments] = useState([]);
    const [dentists, setDentists] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    // Workflow States
    const [activeTab, setActiveTab] = useState('pre_booking'); // 'pre_booking' | 'official'
    const [viewMode, setViewMode] = useState('list'); // 'list' or 'calendar'

    // Filters & Modals
    const [filterDentist, setFilterDentist] = useState('all');
    const [showModal, setShowModal] = useState(false);
    const [showDetailModal, setShowDetailModal] = useState(false);
    const [selectedAppointment, setSelectedAppointment] = useState(null);
    const [editingId, setEditingId] = useState(null);

    const [formData, setFormData] = useState({
        patient_name: '',
        treatment: '',
        date: '',
        time: '',
        phone: '',
        dentist_id: '',
        status: 'Pendente'
    });

    useEffect(() => {
        loadData();
    }, []);

    const loadData = async () => {
        try {
            const [apptRes, dentRes] = await Promise.all([
                fetch('/api/appointments'),
                fetch('/api/dentists')
            ]);
            const appts = await apptRes.json();
            setAppointments(appts);
            setDentists(await dentRes.json());
            await syncPatientsFromAppointments(appts);
        } catch (error) {
            console.error("Failed to load data", error);
        }
    };

    const syncPatientsFromAppointments = async (appts) => {
        // ... (Logica de sync mantida - simplificada aqui para focar no workflow)
        try {
            const patientsRes = await fetch('/api/patients');
            const existingPatients = await patientsRes.json();
            if (!Array.isArray(existingPatients)) return;

            for (const appt of appts) {
                if (!appt.patient_name || !appt.phone) continue;
                const exists = existingPatients.find(p => p.phone === appt.phone);
                if (!exists) {
                    await fetch('/api/patients', {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({
                            name: appt.patient_name,
                            phone: appt.phone || '',
                            email: '',
                            address: ''
                        })
                    });
                }
            }
        } catch (e) {
            console.error(e);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // VALIDAÇÃO 1: Dentista é obrigatório
        if (!formData.dentist_id) {
            alert('⚠️ Por favor, selecione um dentista antes de agendar.');
            return;
        }

        // VALIDAÇÃO 2: Verificar disponibilidade
        if (formData.date && formData.time) {
            try {
                // Converter data DD/MM/YYYY para YYYY-MM-DD
                let dateISO;
                if (formData.date.includes('/')) {
                    const [day, month, year] = formData.date.split('/');
                    dateISO = `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`;
                } else {
                    dateISO = formData.date;
                }

                console.log('🔍 Verificando disponibilidade...');
                console.log('Dentista:', formData.dentist_id);
                console.log('Data original:', formData.date);
                console.log('Data ISO:', dateISO);
                console.log('Horário:', formData.time);

                const response = await fetch('/api/availability/check', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        dentist_id: parseInt(formData.dentist_id),
                        date: dateISO
                    })
                });

                const data = await response.json();
                console.log('📊 Resposta da API:', data);

                const slot = data.all_slots?.find(s => s.time === formData.time);
                console.log('🎯 Slot encontrado:', slot);

                if (!slot || !slot.available) {
                    const reason = slot?.reason || 'Horário não disponível';
                    alert(`❌ HORÁRIO INDISPONÍVEL\n\n${reason}\n\n✅ Solução:\n1. Escolha outro horário\n2. Configure a disponibilidade em "Disponibilidade" no menu`);
                    return;
                }

                console.log('✅ Horário disponível! Prosseguindo com agendamento...');
            } catch (error) {
                console.error('❌ Erro ao verificar disponibilidade:', error);
                alert('⚠️ Erro ao verificar disponibilidade. Verifique o console.');
                return; // Bloquear em caso de erro
            }
        }

        const dentist = dentists.find(d => d.id === parseInt(formData.dentist_id));
        const payload = {
            ...formData,
            dentist_name: dentist?.name || 'Não atribuído',
            slot: `${formData.date} às ${formData.time}`
        };

        if (editingId) {
            await fetch('/api/appointments', {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ id: editingId, ...payload })
            });
        } else {
            await fetch('/api/appointments', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            });
        }

        setShowModal(false);
        setEditingId(null);
        setFormData({ patient_name: '', treatment: '', date: '', time: '', phone: '', dentist_id: '', status: 'Pendente' });
        loadData();
    };

    const handleEdit = (appt) => {
        setSelectedAppointment(appt);
        setShowDetailModal(true);
    };

    const handleNewAppointment = () => {
        setEditingId(null);
        setFormData({
            patient_name: '',
            treatment: 'Limpeza',
            date: '',
            time: '',
            phone: '',
            dentist_id: '',
            observations: '', // NOVO: Campo de observações
            status: 'Agendado' // MUDADO: Agendado ao invés de Confirmado
        });
        setShowModal(true);
    };

    const handleRowClick = (appt) => {
        // Ensure we open the detailed review modal
        setSelectedAppointment(appt);
        setShowDetailModal(true);
    };

    const handleDelete = async (id) => {
        if (!confirm('Deseja realmente excluir este agendamento?')) return;
        await fetch(`/api/appointments?id=${id}`, { method: 'DELETE' });
        loadData();
    };

    const handleCreateFromCalendar = (slotData) => {
        setFormData({
            patient_name: '',
            treatment: 'Limpeza',
            date: slotData.date,
            time: slotData.time,
            phone: '',
            dentist_id: '',
            observations: '',
            status: 'Agendado'
        });
        setShowModal(true);
    };

    // Handle calendar slot click (for both empty slots and existing appointments)
    const handleCalendarSlotClick = (slotData) => {
        if (slotData.appointments && slotData.appointments.length > 0) {
            // Has appointments, open first one for editing
            handleEdit(slotData.appointments[0]);
        } else {
            // Empty slot, create new appointment
            handleCreateFromCalendar(slotData);
        }
    };

    // --- FILTER LOGIC ---
    // 1. First filtered by Search and Dentist (Global Filters)
    const baseFilteredAppointments = appointments.filter(appt => {
        const matchesSearch = appt.patient_name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
            appt.phone?.includes(searchTerm);
        const matchesDentist = filterDentist === 'all' || appt.dentist_id === parseInt(filterDentist);
        return matchesSearch && matchesDentist;
    });

    // 2. Then split by Workflow Tab
    const shownAppointments = baseFilteredAppointments.filter(appt => {
        if (viewMode === 'calendar') return true; // Show all in calendar (will be styled differently)

        if (activeTab === 'pre_booking') {
            return appt.status === 'Pendente';
        } else {
            // official tab: Agendado, Confirmado, Aguardando, Atendido
            return ['Agendado', 'Confirmado', 'Aguardando', 'Atendido'].includes(appt.status);
        }
    });

    const stats = {
        today: appointments.filter(a => a.date?.includes(new Date().toLocaleDateString('pt-BR').slice(0, 5))).length,
        pre_booking: appointments.filter(a => a.status === 'Pendente').length,
        confirmed: appointments.filter(a => a.status === 'Confirmado').length,
        week: appointments.length
    };

    const [systemStatus, setSystemStatus] = useState('checking'); // 'online' | 'offline' | 'checking'

    useEffect(() => {
        loadData();
        checkSystemHealth();
    }, []);

    const checkSystemHealth = async () => {
        try {
            const res = await fetch('/api/health');
            const data = await res.json();
            setSystemStatus(data.status);
        } catch (e) {
            setSystemStatus('offline');
        }
    };

    // ... (rest of loadData)

    return (
        <div>
            <header className="flex justify-between items-center mb-8">
                <div>
                    <div className="flex items-center gap-3">
                        <h1 className="text-2xl font-black text-gray-800">Agendamentos</h1>
                        {systemStatus === 'online' && (
                            <span className="px-2 py-1 bg-green-100 text-green-700 text-[10px] font-bold uppercase rounded-full border border-green-200 flex items-center gap-1">
                                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                                Sistema Online
                            </span>
                        )}
                        {systemStatus === 'offline' && (
                            <span className="px-2 py-1 bg-red-100 text-red-700 text-[10px] font-bold uppercase rounded-full border border-red-200 flex items-center gap-1">
                                <div className="w-2 h-2 rounded-full bg-red-500"></div>
                                WhatsApp Offline
                            </span>
                        )}
                    </div>
                    <p className="text-gray-500 text-sm">Gerencie o fluxo da clínica.</p>
                </div>
                <div className="flex gap-3">
                    <ClaraToggle />
                    <div className="flex bg-gray-100 rounded-lg p-1">
                        <button
                            onClick={() => setViewMode('list')}
                            className={clsx(
                                "px-3 py-2 rounded-lg font-bold text-sm transition flex items-center gap-2",
                                viewMode === 'list' ? "bg-white shadow-sm text-gray-800" : "text-gray-500"
                            )}
                        >
                            <List size={16} /> Lista
                        </button>
                        <button
                            onClick={() => setViewMode('calendar')}
                            className={clsx(
                                "px-3 py-2 rounded-lg font-bold text-sm transition flex items-center gap-2",
                                viewMode === 'calendar' ? "bg-white shadow-sm text-gray-800" : "text-gray-500"
                            )}
                        >
                            <CalendarDays size={16} /> Agenda
                        </button>
                    </div>
                    <button
                        onClick={handleNewAppointment}
                        className="px-4 py-2 bg-brand-gold text-white font-bold rounded-lg hover:bg-brand-gold-dark transition shadow-lg shadow-brand-gold/20 flex items-center gap-2"
                    >
                        <Plus size={18} /> Novo
                    </button>
                </div>
            </header>

            {/* Workflow Tabs (Only visible in List Mode) */}
            {viewMode === 'list' && (
                <div className="flex gap-6 border-b border-gray-100 mb-6">
                    <button
                        onClick={() => setActiveTab('pre_booking')}
                        className={clsx(
                            "pb-3 font-bold text-sm transition relative",
                            activeTab === 'pre_booking' ? "text-brand-gold" : "text-gray-400 hover:text-gray-600"
                        )}
                    >
                        <div className="flex items-center gap-2">
                            <Clock size={16} />
                            Pré-Agendamentos
                            <span className="bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full text-xs">
                                {stats.pre_booking}
                            </span>
                        </div>
                        {activeTab === 'pre_booking' && (
                            <motion.div layoutId="activeTab" className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-gold" />
                        )}
                    </button>
                    <button
                        onClick={() => setActiveTab('official')}
                        className={clsx(
                            "pb-3 font-bold text-sm transition relative",
                            activeTab === 'official' ? "text-green-600" : "text-gray-400 hover:text-gray-600"
                        )}
                    >
                        <div className="flex items-center gap-2">
                            <CheckCircle size={16} />
                            Agenda Oficial
                            <span className="bg-green-50 text-green-700 px-2 py-0.5 rounded-full text-xs">
                                {stats.confirmed}
                            </span>
                        </div>
                        {activeTab === 'official' && (
                            <motion.div layoutId="activeTab" className="absolute bottom-0 left-0 right-0 h-0.5 bg-green-500" />
                        )}
                    </button>
                </div>
            )}

            {/* Filters Bar */}
            <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 mb-6 flex gap-4 items-center">
                <div className="flex-1 relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                    <input
                        type="text"
                        placeholder="Buscar por nome ou telefone..."
                        value={searchTerm}
                        onChange={e => setSearchTerm(e.target.value)}
                        className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg outline-none focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/20 transition"
                    />
                </div>

                <div className="flex items-center gap-2 border-l border-gray-200 pl-4">
                    <span className="text-xs font-bold text-gray-400 uppercase">Filtrar:</span>
                    <select
                        value={filterDentist}
                        onChange={e => setFilterDentist(e.target.value)}
                        className="px-4 py-2 border border-gray-200 rounded-lg outline-none focus:border-brand-gold font-bold text-sm bg-gray-50 hover:bg-white transition cursor-pointer"
                    >
                        <option value="all">Todos os Dentistas</option>
                        {dentists.map(d => (
                            <option key={d.id} value={d.id}>Dr(a). {d.name}</option>
                        ))}
                    </select>
                </div>
            </div>

            {/* Content Area */}
            {viewMode === 'calendar' ? (
                /* Calendar View passes ALL filtered appointments, but view handles display logic */
                <CalendarView
                    appointments={shownAppointments}
                    dentists={dentists}
                    onCreateAppointment={handleCreateFromCalendar}
                    onEditAppointment={handleEdit}
                    onSlotClick={handleCalendarSlotClick}
                    filterDentist={filterDentist}
                />
            ) : (
                /* List View */
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden min-h-[400px]">
                    {shownAppointments.length === 0 ? (
                        <div className="flex flex-col items-center justify-center p-12 text-gray-400">
                            <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mb-4">
                                {activeTab === 'pre_booking' ? <Clock size={32} /> : <CheckCircle size={32} />}
                            </div>
                            <p className="font-bold text-lg">Nenhum agendamento nesta aba.</p>
                            <p className="text-sm">Os agendamentos {activeTab === 'pre_booking' ? 'pendentes' : 'confirmados'} aparecerão aqui.</p>
                        </div>
                    ) : (
                        <table className="w-full text-left">
                            <thead className="bg-gray-50 border-b border-gray-100">
                                <tr>
                                    <th className="p-4 py-3 text-xs font-bold text-gray-400 uppercase tracking-widest pl-8">Paciente</th>
                                    <th className="p-4 py-3 text-xs font-bold text-gray-400 uppercase tracking-widest">Tratamento</th>
                                    <th className="p-4 py-3 text-xs font-bold text-gray-400 uppercase tracking-widest">Dentista</th>
                                    <th className="p-4 py-3 text-xs font-bold text-gray-400 uppercase tracking-widest">Data/Hora</th>
                                    <th className="p-4 py-3 text-xs font-bold text-gray-400 uppercase tracking-widest">Status</th>
                                    <th className="p-4 py-3 text-xs font-bold text-gray-400 uppercase tracking-widest text-right pr-8">Confirmação</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-50">
                                {shownAppointments.map((item) => (
                                    <tr
                                        key={item.id}
                                        onClick={() => handleRowClick(item)}
                                        className="hover:bg-blue-50/50 transition cursor-pointer group"
                                    >
                                        <td className="p-4 pl-8 flex items-center gap-3">
                                            <div className={clsx(
                                                "w-10 h-10 rounded-full flex items-center justify-center font-bold text-xs border transition",
                                                item.status === 'Confirmado' ? "bg-green-100 text-green-700 border-green-200" : "bg-gray-100 text-gray-500 border-transparent"
                                            )}>
                                                {item.patient_name?.slice(0, 2).toUpperCase() || 'PX'}
                                            </div>
                                            <div>
                                                <div className="font-bold text-gray-700">{item.patient_name}</div>
                                                {item.phone && <div className="text-xs text-gray-400">{item.phone}</div>}
                                            </div>
                                        </td>
                                        <td className="p-4 text-sm font-medium text-gray-500">{item.treatment}</td>
                                        <td className="p-4 text-sm font-medium text-gray-500">{item.dentist_name || 'Não atribuído'}</td>
                                        <td className="p-4 text-sm font-medium text-gray-500">
                                            <div className="font-bold text-gray-700">{item.date}</div>
                                            <div className="text-xs text-gray-400">{item.time}</div>
                                        </td>
                                        <td className="p-4">
                                            <span className={clsx(
                                                "px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wide border",
                                                item.status === 'Confirmado' && 'bg-green-50 text-green-600 border-green-100',
                                                item.status === 'Pendente' && 'bg-yellow-50 text-yellow-600 border-yellow-100',
                                                item.status === 'Cancelado' && 'bg-red-50 text-red-600 border-red-100'
                                            )}>
                                                {item.status === 'Pendente' ? 'Pré-Agendado' : item.status}
                                            </span>
                                        </td>
                                        <td className="p-4 text-right pr-8">
                                            {item.status === 'Pendente' && (
                                                <button
                                                    onClick={(e) => { e.stopPropagation(); handleRowClick(item); }}
                                                    className="px-4 py-1.5 bg-brand-gold text-white text-xs font-bold rounded-lg hover:bg-brand-gold-dark shadown-sm"
                                                >
                                                    Confirmar
                                                </button>
                                            )}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    )}
                </div>
            )}

            {/* Quick Create Modal */}
            <AnimatePresence>
                {showModal && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                            onClick={() => setShowModal(false)}
                        />
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            className="bg-white w-full max-w-2xl p-8 rounded-2xl shadow-2xl relative z-10"
                        >
                            {/* Simplified Create Form implementation */}
                            <div className="flex justify-between items-center mb-6">
                                <h2 className="text-2xl font-black">Novo Agendamento</h2>
                                <button onClick={() => setShowModal(false)} className="p-2 hover:bg-gray-100 rounded-lg">
                                    <X size={20} />
                                </button>
                            </div>
                            <form onSubmit={handleSubmit} className="space-y-4">

                                <div className="grid grid-cols-2 gap-4">
                                    <input
                                        type="text"
                                        placeholder="Nome do Paciente"
                                        value={formData.patient_name || ''}
                                        onChange={e => setFormData({ ...formData, patient_name: e.target.value })}
                                        className="p-3 border border-gray-200 rounded-lg outline-none focus:border-brand-gold"
                                        required
                                    />
                                    <input
                                        type="tel"
                                        placeholder="Telefone"
                                        value={formData.phone}
                                        onChange={e => setFormData({ ...formData, phone: e.target.value })}
                                        className="p-3 border border-gray-200 rounded-lg outline-none focus:border-brand-gold"
                                        required
                                    />
                                </div>
                                {/* ... Rest of form inputs same as before ... */}
                                <select
                                    value={formData.treatment}
                                    onChange={e => setFormData({ ...formData, treatment: e.target.value })}
                                    className="w-full p-3 border border-gray-200 rounded-lg outline-none focus:border-brand-gold"
                                    required
                                >
                                    <option value="">Selecione o Tratamento</option>
                                    <option value="Implantes">Implantes</option>
                                    <option value="Invisalign">Invisalign</option>
                                    <option value="Estética Geral">Estética Geral</option>
                                    <option value="Clínica Geral">Clínica Geral</option>
                                    <option value="ATM">ATM</option>
                                </select>
                                <div className="grid grid-cols-2 gap-4">
                                    <input
                                        type="text"
                                        value={formData.date}
                                        readOnly
                                        placeholder="Data"
                                        className="p-3 border border-gray-200 rounded-lg outline-none bg-gray-50 text-gray-700 cursor-not-allowed"
                                    />
                                    <input
                                        type="text"
                                        value={formData.time}
                                        readOnly
                                        placeholder="Horário"
                                        className="p-3 border border-gray-200 rounded-lg outline-none bg-gray-50 text-gray-700 cursor-not-allowed"
                                    />
                                </div>
                                <div className="grid grid-cols-1 gap-4">
                                    <select
                                        value={formData.dentist_id}
                                        onChange={(e) => setFormData({ ...formData, dentist_id: e.target.value })}
                                        className="w-full p-3 border border-gray-200 rounded-lg outline-none focus:border-brand-gold transition"
                                        required
                                    >
                                        <option value="">Selecione o Dentista *</option>
                                        {dentists.map(d => (
                                            <option key={d.id} value={d.id}>Dr(a). {d.name}</option>
                                        ))}
                                    </select>
                                </div>

                                {/* NOVO: Campo de Observações */}
                                <textarea
                                    placeholder="Observações (opcional)"
                                    value={formData.observations || ''}
                                    onChange={e => setFormData({ ...formData, observations: e.target.value })}
                                    className="w-full p-3 border border-gray-200 rounded-lg outline-none focus:border-brand-gold resize-none"
                                    rows={3}
                                />

                                <div className="flex gap-3 pt-4">
                                    <button onClick={() => setShowModal(false)} type="button" className="flex-1 py-3 border rounded-lg"> Cancelar </button>
                                    <button type="submit" className="flex-1 py-3 bg-brand-gold text-white rounded-lg font-bold"> Criar Agendamento </button>
                                </div>
                            </form>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>

            {/* Appointment Detail Modal (For Confirmation) */}
            {showDetailModal && selectedAppointment && (
                <AppointmentDetailModal
                    appointment={selectedAppointment}
                    dentists={dentists}
                    onClose={() => {
                        setShowDetailModal(false);
                        setSelectedAppointment(null);
                    }}
                    onUpdate={() => {
                        loadData();
                    }}
                />
            )}
        </div>
    );
}
