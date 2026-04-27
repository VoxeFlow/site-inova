'use client';
import { useState, useEffect } from 'react';
import { Plus, Edit2, Trash2, X, Search } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function PatientsPage() {
    const [patients, setPatients] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [showModal, setShowModal] = useState(false);
    const [editingId, setEditingId] = useState(null);
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        cpf: '',
        birthDate: '',
        address: ''
    });

    useEffect(() => {
        loadData();
    }, []);

    const loadData = async () => {
        const res = await fetch('/api/patients');
        setPatients(await res.json());
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (editingId) {
            await fetch('/api/patients', {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ id: editingId, ...formData })
            });
        } else {
            await fetch('/api/patients', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });
        }

        setShowModal(false);
        setEditingId(null);
        setFormData({ name: '', phone: '', email: '', cpf: '', birthDate: '', address: '' });
        loadData();
    };

    const handleEdit = (patient) => {
        setEditingId(patient.id);
        setFormData({
            name: patient.name,
            phone: patient.phone,
            email: patient.email,
            cpf: patient.cpf,
            birthDate: patient.birthDate,
            address: patient.address
        });
        setShowModal(true);
    };

    const handleDelete = async (id) => {
        if (!confirm('Deseja realmente excluir este paciente?')) return;
        await fetch(`/api/patients?id=${id}`, { method: 'DELETE' });
        loadData();
    };

    const filteredPatients = patients.filter(p =>
        p.name?.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div>
            <header className="flex justify-between items-center mb-8">
                <div>
                    <h1 className="text-2xl font-black text-gray-800">Pacientes</h1>
                    <p className="text-gray-500 text-sm">Cadastro e histórico de pacientes.</p>
                </div>
                <button
                    onClick={() => { setShowModal(true); setEditingId(null); }}
                    className="px-4 py-2 bg-brand-gold text-white font-bold rounded-lg hover:bg-brand-gold-dark transition shadow-lg shadow-brand-gold/20 flex items-center gap-2"
                >
                    <Plus size={18} /> Novo Paciente
                </button>
            </header>

            {/* Search */}
            <div className="mb-6 relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                <input
                    type="text"
                    placeholder="Buscar paciente..."
                    value={searchTerm}
                    onChange={e => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg outline-none focus:border-brand-gold"
                />
            </div>

            {/* Table */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                <table className="w-full text-left">
                    <thead className="bg-gray-50 border-b border-gray-100">
                        <tr>
                            <th className="p-4 py-3 text-xs font-bold text-gray-400 uppercase tracking-widest pl-8">Paciente</th>
                            <th className="p-4 py-3 text-xs font-bold text-gray-400 uppercase tracking-widest">Telefone</th>
                            <th className="p-4 py-3 text-xs font-bold text-gray-400 uppercase tracking-widest">Email</th>
                            <th className="p-4 py-3 text-xs font-bold text-gray-400 uppercase tracking-widest">CPF</th>
                            <th className="p-4 py-3 text-xs font-bold text-gray-400 uppercase tracking-widest text-right pr-8">Ações</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-50">
                        {filteredPatients.map(patient => (
                            <tr key={patient.id} className="hover:bg-gray-50/50 transition">
                                <td className="p-4 pl-8 flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center font-bold text-gray-500 text-xs">
                                        {patient.name?.slice(0, 2).toUpperCase()}
                                    </div>
                                    <span className="font-bold text-gray-700">{patient.name}</span>
                                </td>
                                <td className="p-4 text-sm font-medium text-gray-500">{patient.phone}</td>
                                <td className="p-4 text-sm font-medium text-gray-500">{patient.email}</td>
                                <td className="p-4 text-sm font-medium text-gray-500">{patient.cpf}</td>
                                <td className="p-4 text-right pr-8">
                                    <div className="flex items-center justify-end gap-2">
                                        <button
                                            onClick={() => handleEdit(patient)}
                                            className="p-2 hover:bg-gray-100 rounded-lg transition"
                                        >
                                            <Edit2 size={16} className="text-gray-400" />
                                        </button>
                                        <button
                                            onClick={() => handleDelete(patient.id)}
                                            className="p-2 hover:bg-red-50 rounded-lg transition"
                                        >
                                            <Trash2 size={16} className="text-red-400" />
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
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
                            className="bg-white w-full max-w-2xl p-8 rounded-2xl shadow-2xl relative z-10"
                        >
                            <div className="flex justify-between items-center mb-6">
                                <h2 className="text-2xl font-black">{editingId ? 'Editar' : 'Novo'} Paciente</h2>
                                <button onClick={() => setShowModal(false)} className="p-2 hover:bg-gray-100 rounded-lg">
                                    <X size={20} />
                                </button>
                            </div>
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div className="grid grid-cols-2 gap-4">
                                    <input
                                        type="text"
                                        placeholder="Nome Completo"
                                        value={formData.name}
                                        onChange={e => setFormData({ ...formData, name: e.target.value })}
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
                                <input
                                    type="email"
                                    placeholder="Email"
                                    value={formData.email}
                                    onChange={e => setFormData({ ...formData, email: e.target.value })}
                                    className="w-full p-3 border border-gray-200 rounded-lg outline-none focus:border-brand-gold"
                                />
                                <div className="grid grid-cols-2 gap-4">
                                    <input
                                        type="text"
                                        placeholder="CPF"
                                        value={formData.cpf}
                                        onChange={e => setFormData({ ...formData, cpf: e.target.value })}
                                        className="p-3 border border-gray-200 rounded-lg outline-none focus:border-brand-gold"
                                    />
                                    <input
                                        type="date"
                                        placeholder="Data de Nascimento"
                                        value={formData.birthDate}
                                        onChange={e => setFormData({ ...formData, birthDate: e.target.value })}
                                        className="p-3 border border-gray-200 rounded-lg outline-none focus:border-brand-gold"
                                    />
                                </div>
                                <input
                                    type="text"
                                    placeholder="Endereço"
                                    value={formData.address}
                                    onChange={e => setFormData({ ...formData, address: e.target.value })}
                                    className="w-full p-3 border border-gray-200 rounded-lg outline-none focus:border-brand-gold"
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
