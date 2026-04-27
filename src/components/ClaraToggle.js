'use client';

import { useState, useEffect } from 'react';

export default function ClaraToggle() {
    const [claraEnabled, setClaraEnabled] = useState(true);
    const [loading, setLoading] = useState(true);
    const [toggling, setToggling] = useState(false);

    useEffect(() => {
        loadStatus();
    }, []);

    async function loadStatus() {
        try {
            const res = await fetch('/api/clara/toggle');
            const data = await res.json();
            setClaraEnabled(data.enabled);
        } catch (error) {
            console.error('Error loading Clara status:', error);
        } finally {
            setLoading(false);
        }
    }

    async function toggle() {
        try {
            setToggling(true);
            const res = await fetch('/api/clara/toggle', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ enabled: !claraEnabled })
            });
            const data = await res.json();
            setClaraEnabled(data.enabled);

            // Show notification
            const message = data.enabled ? '✅ Clara ativada!' : '⚠️ Clara desativada';
            if (typeof window !== 'undefined' && window.alert) {
                alert(message);
            }
        } catch (error) {
            console.error('Error toggling Clara:', error);
            alert('❌ Erro ao alterar status da Clara');
        } finally {
            setToggling(false);
        }
    }

    if (loading) {
        return (
            <div className="flex items-center gap-4 bg-white px-6 py-3 rounded-xl shadow-lg">
                <div className="text-sm text-gray-500">Carregando...</div>
            </div>
        );
    }

    return (
        <div className="flex items-center gap-4 bg-white px-6 py-3 rounded-xl shadow-lg">
            <div className="flex items-center gap-2">
                <span className="text-sm font-medium text-gray-700">🤖 Clara AI</span>
                <div className={`w-2 h-2 rounded-full ${claraEnabled ? 'bg-green-500 animate-pulse' : 'bg-red-500'}`}></div>
            </div>

            <button
                onClick={toggle}
                disabled={toggling}
                className={`relative inline-flex h-8 w-14 items-center rounded-full transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 ${claraEnabled ? 'bg-green-500 focus:ring-green-500' : 'bg-gray-300 focus:ring-gray-400'
                    } ${toggling ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
                title={claraEnabled ? 'Clique para desativar Clara' : 'Clique para ativar Clara'}
            >
                <span
                    className={`inline-block h-6 w-6 transform rounded-full bg-white shadow-lg transition-transform duration-200 ${claraEnabled ? 'translate-x-7' : 'translate-x-1'
                        }`}
                />
            </button>

            <span className={`text-xs font-semibold ${claraEnabled ? 'text-green-600' : 'text-gray-500'}`}>
                {claraEnabled ? 'Ativa' : 'Inativa'}
            </span>
        </div>
    );
}
