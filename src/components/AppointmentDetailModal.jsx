'use client';
import { X, User, Phone, Calendar, Clock, Stethoscope, FileText, CheckCircle, XCircle, Edit3 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

export default function AppointmentDetailModal({ appointment, dentists, onClose, onUpdate }) {
    const [isEditing, setIsEditing] = useState(false);
    const [selectedDentist, setSelectedDentist] = useState(appointment.dentist_id || '');
    const [status, setStatus] = useState(appointment.status || 'Pendente');
    const [notes, setNotes] = useState(appointment.notes || '');
    const [loading, setLoading] = useState(false);

    // Smart dentist suggestion based on treatment
    const suggestDentists = () => {
        const specialtyMap = {
            'Invisalign / Alinhadores': 'Ortodontia',
            'Implantes / Próteses': 'Implantodontia',
            'Estética Geral': 'Estética',
            'Clareamento': 'Estética',
            'Limpeza': 'Clínica Geral'
        };

        const specialty = specialtyMap[appointment.treatment];
        if (!specialty) return dentists;

        const recommended = dentists.filter(d => d.specialty === specialty);
        const others = dentists.filter(d => d.specialty !== specialty);

        return [...recommended, ...others];
    };

    const handleConfirm = async () => {
        if (!selectedDentist) {
            alert('Por favor, selecione um dentista antes de confirmar.');
            return;
        }

        setLoading(true);
        try {
            const dentist = dentists.find(d => d.id === parseInt(selectedDentist));

            // Update appointment
            await fetch('/api/appointments', {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    id: appointment.id,
                    dentist_id: selectedDentist,
                    dentist_name: dentist?.name,
                    status: 'Confirmado',
                    notes,
                    send_confirmation: true // Flag to send WhatsApp
                })
            });

            alert('✅ Agendamento confirmado! WhatsApp enviado ao paciente.');
            onUpdate();
            onClose();
        } catch (error) {
            console.error('Error confirming appointment:', error);
            alert('Erro ao confirmar agendamento. Tente novamente.');
        } finally {
            setLoading(false);
        }
    };

    const handleCancel = async () => {
        if (!confirm('Deseja realmente cancelar este agendamento?')) return;

        setLoading(true);
        try {
            await fetch('/api/appointments', {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    id: appointment.id,
                    status: 'Cancelado',
                    notes: notes + '\n[Cancelado em ' + new Date().toLocaleString('pt-BR') + ']'
                })
            });

            onUpdate();
            onClose();
        } catch (error) {
            console.error('Error canceling appointment:', error);
            alert('Erro ao cancelar agendamento. Tente novamente.');
        } finally {
            setLoading(false);
        }
    };

    const handleSave = async () => {
        setLoading(true);
        try {
            const dentist = dentists.find(d => d.id === parseInt(selectedDentist));

            await fetch('/api/appointments', {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    id: appointment.id,
                    dentist_id: selectedDentist,
                    dentist_name: dentist?.name,
                    status,
                    notes
                })
            });

            onUpdate();
            setIsEditing(false);
        } catch (error) {
            console.error('Error updating appointment:', error);
            alert('Erro ao atualizar agendamento. Tente novamente.');
        } finally {
            setLoading(false);
        }
    };

    const sortedDentists = suggestDentists();
    const isConfirmed = appointment.status === 'Confirmado';
    const isCanceled = appointment.status === 'Cancelado';

    return (
        <AnimatePresence>
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
                    <div className="sticky top-0 bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6 rounded-t-2xl">
                        <div className="flex items-center justify-between">
                            <div>
                                <h2 className="text-2xl font-bold">Detalhes do Agendamento</h2>
                                <p className="text-blue-100 text-sm mt-1">ID: #{appointment.id}</p>
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
                        {/* Patient Info */}
                        <div className="bg-gray-50 rounded-xl p-4">
                            <h3 className="font-bold text-gray-700 mb-3 flex items-center gap-2">
                                <User size={18} className="text-blue-600" />
                                Informações do Paciente
                            </h3>
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <p className="text-xs text-gray-500">Nome</p>
                                    <p className="font-semibold text-gray-800">{appointment.patient_name || 'Não informado'}</p>
                                </div>
                                <div>
                                    <p className="text-xs text-gray-500">Telefone</p>
                                    <p className="font-semibold text-gray-800 flex items-center gap-2">
                                        <Phone size={14} className="text-green-600" />
                                        {appointment.phone || 'Não informado'}
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Appointment Info */}
                        <div className="bg-gray-50 rounded-xl p-4">
                            <h3 className="font-bold text-gray-700 mb-3 flex items-center gap-2">
                                <Calendar size={18} className="text-purple-600" />
                                Detalhes do Agendamento
                            </h3>
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <p className="text-xs text-gray-500">Tratamento</p>
                                    <p className="font-semibold text-gray-800">{appointment.treatment}</p>
                                </div>
                                <div>
                                    <p className="text-xs text-gray-500">Data e Horário</p>
                                    <p className="font-semibold text-gray-800 flex items-center gap-2">
                                        <Clock size={14} className="text-orange-600" />
                                        {appointment.date} às {appointment.time}
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Dentist Assignment */}
                        <div className="bg-gray-50 rounded-xl p-4">
                            <h3 className="font-bold text-gray-700 mb-3 flex items-center gap-2">
                                <Stethoscope size={18} className="text-teal-600" />
                                Dentista Responsável
                            </h3>
                            {isEditing || !isConfirmed ? (
                                <select
                                    value={selectedDentist}
                                    onChange={(e) => setSelectedDentist(e.target.value)}
                                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    disabled={loading}
                                >
                                    <option value="">Selecione um dentista</option>
                                    {sortedDentists.map((dentist, idx) => (
                                        <option key={dentist.id} value={dentist.id}>
                                            {idx < sortedDentists.filter(d => d.specialty === sortedDentists[0].specialty).length ? '⭐ ' : ''}
                                            Dr(a). {dentist.name} - {dentist.specialty}
                                        </option>
                                    ))}
                                </select>
                            ) : (
                                <p className="font-semibold text-gray-800">
                                    {appointment.dentist_name || 'Não atribuído'}
                                </p>
                            )}
                        </div>

                        {/* Status */}
                        <div className="bg-gray-50 rounded-xl p-4">
                            <h3 className="font-bold text-gray-700 mb-3">Status</h3>
                            {isEditing ? (
                                <select
                                    value={status}
                                    onChange={(e) => setStatus(e.target.value)}
                                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    disabled={loading}
                                >
                                    <option value="Pendente">Pendente</option>
                                    <option value="Confirmado">Confirmado</option>
                                    <option value="Cancelado">Cancelado</option>
                                </select>
                            ) : (
                                <span className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold ${isConfirmed ? 'bg-green-100 text-green-700' :
                                    isCanceled ? 'bg-red-100 text-red-700' :
                                        'bg-yellow-100 text-yellow-700'
                                    }`}>
                                    {isConfirmed && <CheckCircle size={16} />}
                                    {isCanceled && <XCircle size={16} />}
                                    {appointment.status}
                                </span>
                            )}
                        </div>

                        {/* Notes */}
                        <div className="bg-gray-50 rounded-xl p-4">
                            <h3 className="font-bold text-gray-700 mb-3 flex items-center gap-2">
                                <FileText size={18} className="text-indigo-600" />
                                Observações
                            </h3>
                            {isEditing || !notes ? (
                                <textarea
                                    value={notes}
                                    onChange={(e) => setNotes(e.target.value)}
                                    placeholder="Adicione observações sobre este agendamento..."
                                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                                    rows={3}
                                    disabled={loading}
                                />
                            ) : (
                                <p className="text-gray-700 whitespace-pre-wrap">{notes}</p>
                            )}
                        </div>
                    </div>

                    {/* Actions */}
                    <div className="sticky bottom-0 bg-gray-50 p-6 rounded-b-2xl border-t border-gray-200">
                        <div className="flex gap-3">
                            {isEditing ? (
                                <>
                                    <button
                                        onClick={() => setIsEditing(false)}
                                        className="flex-1 px-4 py-3 bg-gray-200 text-gray-700 rounded-lg font-semibold hover:bg-gray-300 transition"
                                        disabled={loading}
                                    >
                                        Cancelar
                                    </button>
                                    <button
                                        onClick={handleSave}
                                        className="flex-1 px-4 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition disabled:opacity-50"
                                        disabled={loading}
                                    >
                                        {loading ? 'Salvando...' : 'Salvar Alterações'}
                                    </button>
                                </>
                            ) : (
                                <>
                                    {/* STATUS: PENDENTE */}
                                    {status === 'Pendente' && (
                                        <>
                                            <button
                                                onClick={handleCancel}
                                                className="flex-1 px-4 py-3 bg-red-100 text-red-700 rounded-lg font-semibold hover:bg-red-200 transition disabled:opacity-50"
                                                disabled={loading}
                                            >
                                                Cancelar
                                            </button>
                                            <button
                                                onClick={handleConfirm}
                                                className="flex-1 px-4 py-3 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition disabled:opacity-50 flex items-center justify-center gap-2"
                                                disabled={loading}
                                            >
                                                <CheckCircle size={18} />
                                                {loading ? 'Confirmando...' : 'Confirmar Agendamento'}
                                            </button>
                                        </>
                                    )}

                                    {/* STATUS: CONFIRMADO */}
                                    {status === 'Confirmado' && (
                                        <>
                                            <button
                                                onClick={async () => {
                                                    if (!confirm('Marcar como faltou? Isso enviará uma mensagem de recuperação.')) return;
                                                    setLoading(true);
                                                    try {
                                                        await fetch('/api/appointments', {
                                                            method: 'PUT',
                                                            headers: { 'Content-Type': 'application/json' },
                                                            body: JSON.stringify({ id: appointment.id, status: 'Não Compareceu', send_recovery: true }) // Trigger Recovery
                                                        });
                                                        onUpdate();
                                                        onClose();
                                                    } catch (e) { console.error(e); } finally { setLoading(false); }
                                                }}
                                                className="px-4 py-3 bg-red-50 text-red-600 rounded-lg font-semibold hover:bg-red-100 transition flex flex-col items-center justify-center leading-none text-xs gap-1"
                                                disabled={loading}
                                            >
                                                <XCircle size={16} />
                                                Não Compareceu
                                            </button>

                                            <button
                                                onClick={async () => {
                                                    if (!confirm('Finalizar atendimento? Isso enviará o pedido de avaliação.')) return;
                                                    setLoading(true);
                                                    try {
                                                        await fetch('/api/appointments', {
                                                            method: 'PUT',
                                                            headers: { 'Content-Type': 'application/json' },
                                                            body: JSON.stringify({ id: appointment.id, status: 'Atendido', send_review: true }) // Trigger Review
                                                        });
                                                        onUpdate();
                                                        onClose();
                                                    } catch (e) { console.error(e); } finally { setLoading(false); }
                                                }}
                                                className="flex-1 px-4 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition flex items-center justify-center gap-2"
                                                disabled={loading}
                                            >
                                                <CheckCircle size={18} />
                                                Finalizar & Avaliar
                                            </button>
                                        </>
                                    )}

                                    {/* OUTROS STATUS */}
                                    {(status === 'Atendido' || status === 'Não Compareceu' || status === 'Cancelado') && (
                                        <div className="flex-1 text-center text-gray-400 font-medium py-2">
                                            Agendamento Finalizado ({status})
                                        </div>
                                    )}

                                    <button
                                        onClick={() => setIsEditing(true)}
                                        className="px-4 py-3 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition"
                                        title="Editar Manualmente"
                                    >
                                        <Edit3 size={18} />
                                    </button>
                                </>
                            )}
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
}
