'use client';
import { useState, useEffect } from 'react';
import { Plus, Edit2, Trash2, X, UserCog } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function DentistsPage() {
    const [dentists, setDentists] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [editingId, setEditingId] = useState(null);
    const [formData, setFormData] = useState({
        name: '',
        specialty: '',
        cro: '',
        phone: '',
        email: ''
    });

    useEffect(() => {
        loadData();
    }, []);

    const loadData = async () => {
        const res = await fetch('/api/dentists');
        setDentists(await res.json());
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (editingId) {
            await fetch('/api/dentists', {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ id: editingId, ...formData })
            });
        } else {
            await fetch('/api/dentists', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });
        }

        setShowModal(false);
        setEditingId(null);
        setFormData({ name: '', specialty: '', cro: '', phone: '', email: '' });
        loadData();
    };

    const handleEdit = (dentist) => {
        setEditingId(dentist.id);
        setFormData({
            name: dentist.name,
            specialty: dentist.specialty,
            cro: dentist.cro,
            phone: dentist.phone,
            email: dentist.email
        });
        setShowModal(true);
    };

    const handleDelete = async (id) => {
        if (!confirm('Deseja realmente excluir este dentista?')) return;
        await fetch(`/api/dentists?id=${id}`, { method: 'DELETE' });
        loadData();
    };

    return (
        <div>
            <header className="flex justify-between items-center mb-8">
                <div>
                    <h1 className="text-2xl font-black text-gray-800">Dentistas</h1>
                    <p className="text-gray-500 text-sm">Gerencie a equipe de profissionais da clínica.</p>
                </div>
                <button
                    onClick={() => { setShowModal(true); setEditingId(null); }}
                    className="px-4 py-2 bg-brand-gold text-white font-bold rounded-lg hover:bg-brand-gold-dark transition shadow-lg shadow-brand-gold/20 flex items-center gap-2"
                >
                    <Plus size={18} /> Novo Dentista
                </button>
            </header>

            {/* Grid */}
            <div className="grid grid-cols-3 gap-6">
                {dentists.map(dentist => (
                    <div key={dentist.id} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition">
                        <div className="flex items-start justify-between mb-4">
                            <div className="w-16 h-16 rounded-full bg-brand-gold/10 flex items-center justify-center text-brand-gold font-black text-xl">
                                {dentist.avatar}
                            </div>
                            <div className="flex gap-1">
                                <button
                                    onClick={() => handleEdit(dentist)}
                                    className="p-2 hover:bg-gray-100 rounded-lg transition"
                                >
                                    <Edit2 size={16} className="text-gray-400" />
                                </button>
                                <button
                                    onClick={() => handleDelete(dentist.id)}
                                    className="p-2 hover:bg-red-50 rounded-lg transition"
                                >
                                    <Trash2 size={16} className="text-red-400" />
                                </button>
                            </div>
                        </div>
                        <h3 className="text-lg font-bold text-gray-800 mb-1">{dentist.name}</h3>
                        <p className="text-sm text-brand-gold font-bold mb-3">{dentist.specialty || 'Não especificado'}</p>
                        <div className="space-y-1 text-xs text-gray-500 mb-4">
                            <p><strong>CRO:</strong> {dentist.cro}</p>
                            <p><strong>Tel:</strong> {dentist.phone}</p>
                            <p><strong>Email:</strong> {dentist.email}</p>
                        </div>

                        {/* NOVO: Link para gerenciar horários */}
                        <a
                            href="/dashboard/disponibilidade"
                            className="block w-full py-2 px-3 bg-blue-50 hover:bg-blue-100 text-blue-600 text-center text-sm font-semibold rounded-lg transition flex items-center justify-center gap-2"
                        >
                            <UserCog size={16} />
                            Gerenciar Horários
                        </a>
                    </div>
                ))}
            </div>

            {/* Modal */}
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
                            className="bg-white w-full max-w-lg p-8 rounded-2xl shadow-2xl relative z-10"
                        >
                            <div className="flex justify-between items-center mb-6">
                                <h2 className="text-2xl font-black">{editingId ? 'Editar' : 'Novo'} Dentista</h2>
                                <button onClick={() => setShowModal(false)} className="p-2 hover:bg-gray-100 rounded-lg">
                                    <X size={20} />
                                </button>
                            </div>
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <input
                                    type="text"
                                    placeholder="Nome Completo"
                                    value={formData.name}
                                    onChange={e => setFormData({ ...formData, name: e.target.value })}
                                    className="w-full p-3 border border-gray-200 rounded-lg outline-none focus:border-brand-gold"
                                    required
                                />
                                <input
                                    type="text"
                                    placeholder="Especialidade"
                                    value={formData.specialty}
                                    onChange={e => setFormData({ ...formData, specialty: e.target.value })}
                                    className="w-full p-3 border border-gray-200 rounded-lg outline-none focus:border-brand-gold"
                                    required
                                />
                                <input
                                    type="text"
                                    placeholder="CRO (ex: CRO-MG 12345)"
                                    value={formData.cro}
                                    onChange={e => setFormData({ ...formData, cro: e.target.value })}
                                    className="w-full p-3 border border-gray-200 rounded-lg outline-none focus:border-brand-gold"
                                    required
                                />
                                <input
                                    type="tel"
                                    placeholder="Telefone"
                                    value={formData.phone}
                                    onChange={e => setFormData({ ...formData, phone: e.target.value })}
                                    className="w-full p-3 border border-gray-200 rounded-lg outline-none focus:border-brand-gold"
                                    required
                                />
                                <input
                                    type="email"
                                    placeholder="Email"
                                    value={formData.email}
                                    onChange={e => setFormData({ ...formData, email: e.target.value })}
                                    className="w-full p-3 border border-gray-200 rounded-lg outline-none focus:border-brand-gold"
                                    required
                                />
                                <div className="flex gap-3 pt-4">
                                    <button
                                        type="button"
                                        onClick={() => setShowModal(false)}
                                        className="flex-1 py-3 border border-gray-200 rounded-lg font-bold hover:bg-gray-50 transition"
                                    >
                                        Cancelar
                                    </button>
                                    <button
                                        type="submit"
                                        className="flex-1 py-3 bg-brand-gold text-white rounded-lg font-bold hover:bg-brand-gold-dark transition"
                                    >
                                        {editingId ? 'Salvar' : 'Cadastrar'}
                                    </button>
                                </div>
                            </form>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </div>
    );
}
