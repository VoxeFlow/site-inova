'use client';
import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Calendar, Users, UserCog, LogOut, Menu, X } from 'lucide-react';
import { clsx } from 'clsx';

export default function DashboardLayout({ children }) {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [credentials, setCredentials] = useState({ user: '', pass: '' });
    const [sidebarOpen, setSidebarOpen] = useState(true);
    const pathname = usePathname();

    const handleLogin = (e) => {
        e.preventDefault();
        if (credentials.user === 'AdminInova' && credentials.pass === 'Qwerty@123') {
            setIsAuthenticated(true);
        } else {
            alert('Credenciais Inválidas.');
        }
    };

    const menuItems = [
        { href: '/dashboard', label: 'Agendamentos', icon: Calendar },
        { href: '/dashboard/dentistas', label: 'Dentistas', icon: UserCog },
        { href: '/dashboard/pacientes', label: 'Pacientes', icon: Users },
    ];

    if (!isAuthenticated) {
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
                <div className="bg-white p-10 rounded-2xl shadow-xl w-full max-w-sm text-center">
                    <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                        <Users className="text-gray-400" />
                    </div>
                    <h2 className="text-2xl font-black text-gray-800 mb-2">Acesso Restrito</h2>
                    <p className="text-gray-500 mb-6 text-sm">Painel Administrativo Clínica Inova.</p>
                    <form onSubmit={handleLogin} className="space-y-4">
                        <input
                            type="text"
                            className="w-full bg-gray-50 border border-gray-200 p-3 rounded-lg text-sm font-bold focus:border-brand-gold outline-none"
                            placeholder="Usuário"
                            value={credentials.user}
                            onChange={e => setCredentials({ ...credentials, user: e.target.value })}
                            autoFocus
                        />
                        <input
                            type="password"
                            className="w-full bg-gray-50 border border-gray-200 p-3 rounded-lg text-sm font-bold focus:border-brand-gold outline-none"
                            placeholder="Senha"
                            value={credentials.pass}
                            onChange={e => setCredentials({ ...credentials, pass: e.target.value })}
                        />
                        <button className="w-full py-3 bg-brand-gold text-white font-bold rounded-lg hover:bg-brand-gold-dark transition">
                            ENTRAR
                        </button>
                    </form>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 flex">
            {/* Sidebar */}
            <aside className={clsx(
                "bg-txt-primary text-white transition-all duration-300 flex flex-col",
                sidebarOpen ? "w-64" : "w-20"
            )}>
                <div className="p-6 border-b border-gray-800 flex items-center justify-between">
                    {sidebarOpen && <h1 className="text-xl font-black">INOVA GESTÃO</h1>}
                    <button onClick={() => setSidebarOpen(!sidebarOpen)} className="p-2 hover:bg-gray-800 rounded-lg">
                        {sidebarOpen ? <X size={20} /> : <Menu size={20} />}
                    </button>
                </div>

                <nav className="flex-1 p-4 space-y-2">
                    {menuItems.map(item => {
                        const Icon = item.icon;
                        const isActive = pathname === item.href;
                        return (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={clsx(
                                    "flex items-center gap-3 p-3 rounded-lg transition font-bold text-sm",
                                    isActive ? "bg-brand-gold text-white" : "text-gray-400 hover:bg-gray-800 hover:text-white"
                                )}
                            >
                                <Icon size={20} />
                                {sidebarOpen && <span>{item.label}</span>}
                            </Link>
                        );
                    })}
                </nav>

                <div className="p-4 border-t border-gray-800">
                    <button
                        onClick={() => setIsAuthenticated(false)}
                        className="flex items-center gap-3 p-3 rounded-lg text-gray-400 hover:bg-gray-800 hover:text-white transition font-bold text-sm w-full"
                    >
                        <LogOut size={20} />
                        {sidebarOpen && <span>Sair</span>}
                    </button>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 p-8 overflow-auto">
                {children}
            </main>
        </div>
    );
}
