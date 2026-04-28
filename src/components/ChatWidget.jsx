'use client';
import { useRef, useState, useEffect } from 'react';
import { MessageSquare, X, Send, Bot } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { clsx } from 'clsx';

import { useUser } from '@/context/UserContext';
import { useChat } from '@/context/ChatContext';

export default function ChatWidget() {
    const { userName } = useUser();
    const { isChatOpen, toggleChat, closeChat, chatTopic } = useChat();
    const [messages, setMessages] = useState([]);

    // Bot Persona Name
    const BOT_NAME = "Clara (I.A.)";

    // Initial Greeting & Context
    useEffect(() => {
        const greeting = userName ? ` ${userName}` : '';
        let initialMsg = `Olá${greeting}! Sou a Clara, assistente virtual da Clínica Inova.\n\nPosso te orientar sobre tratamentos, investimento inicial e próximos passos.`;

        // Context specific intros (treatment-based)
        if (chatTopic === 'implante') {
            initialMsg = `Olá${greeting}! Sou a Clara, assistente virtual da Clínica Inova.\n\nVi que você está avaliando implante dentário. Se quiser, eu posso te ajudar a entender investimento inicial, indicações e o que costuma pesar mais nessa decisão.`;
        }
        if (chatTopic === 'invisalign') {
            initialMsg = `Olá${greeting}! Sou a Clara, assistente virtual da Clínica Inova.\n\nVi que você está avaliando Invisalign. Posso te explicar diferenças, investimento inicial e próximos passos com clareza.`;
        }
        if (chatTopic === 'geral') {
            initialMsg = `Olá${greeting}! Sou a Clara, assistente virtual da Clínica Inova.\n\nSe quiser, eu posso te orientar sobre clínica geral, atendimento e como funciona a avaliação.`;
        }
        if (chatTopic === 'estetica') {
            initialMsg = `Olá${greeting}! Sou a Clara, assistente virtual da Clínica Inova.\n\nSe você está avaliando estética dental, posso te ajudar a entender opções, previsibilidade e investimento inicial.`;
        }
        if (chatTopic === 'atm') {
            initialMsg = `Olá${greeting}! Sou a Clara, assistente virtual da Clínica Inova.\n\nSe a sua dúvida é sobre ATM, posso organizar as primeiras informações antes do seu contato com a clínica.`;
        }

        // Always update messages when topic or userName changes
        setMessages([{ role: 'assistant', content: initialMsg }]);
    }, [chatTopic, userName]); // Re-run when topic OR userName changes

    const [input, setInput] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isChatOpen]);

    const handleSend = async () => {
        if (!input.trim()) return;

        const userMsg = { role: 'user', content: input };
        setMessages(prev => [...prev, userMsg]);
        setInput('');
        setIsTyping(true);

        try {
            // Call our API route
            const response = await fetch('/api/chat', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ messages: [...messages, userMsg], context: chatTopic }), // Pass context if needed by backend, though backend prompt is generic "Consultant".
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || 'Falha na comunicação');
            }

            setMessages(prev => [...prev, { role: 'assistant', content: data.message }]);
        } catch (error) {
            console.error(error);
            setTimeout(() => {
                const wapLink = `https://wa.me/553126260038?text=${encodeURIComponent("Olá, comecei um atendimento com a Clara no site e gostaria de continuar com a equipe da clínica.")}`;
                setMessages(prev => [
                    ...prev,
                    {
                        role: 'assistant',
                        content:
                            "A Clara está indisponível neste momento.\n\nSe você preferir, a equipe da clínica pode continuar esse atendimento pelo WhatsApp.",
                        isFallback: true
                    },
                    { role: 'system', content: wapLink, type: 'link' }
                ]);
            }, 900);
        } finally {
            setIsTyping(false);
        }
    };

    return (
        <div className="chat-widget-root fixed bottom-20 right-4 z-50 flex flex-col items-end gap-4 md:bottom-6 md:right-6">

            {/* Chat Window */}
            <AnimatePresence>
                {isChatOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        className="flex h-[min(68vh,500px)] w-[calc(100vw-1rem)] max-w-[350px] flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-2xl md:h-[500px] md:w-[350px]"
                    >
                        {/* Header */}
                        <div className="bg-[#075E54] p-4 text-white flex items-center justify-between shadow-md">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center overflow-hidden border-2 border-green-400">
                                    <span className="text-sm font-black tracking-[0.18em] text-[#075E54]">IA</span>
                                </div>
                                <div>
                                    <p className="font-bold text-sm">{BOT_NAME} Inova</p>
                                    <div className="flex items-center gap-1">
                                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                                        <p className="text-[10px] opacity-90 uppercase tracking-wide">Online Agora</p>
                                    </div>
                                </div>
                            </div>
                            <button onClick={closeChat} className="opacity-80 hover:opacity-100 transition">
                                <X className="w-6 h-6" />
                            </button>
                        </div>

                        {/* Messages Area */}
                        <div className="flex-1 overflow-y-auto bg-[#e5ddd5] p-3 space-y-4 md:p-4">
                            {messages.map((msg, idx) => {
                                if (msg.type === 'link') {
                                    return (
                                        <div key={idx} className="flex justify-center my-4">
                                            <a
                                                href={msg.content}
                                                target="_blank"
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    return gtag_report_conversion(msg.content);
                                                }}
                                                className="bg-[#25D366] text-white px-6 py-3 rounded-full font-bold shadow-lg hover:bg-green-600 transition flex items-center gap-2"
                                            >
                                                <MessageSquare size={18} /> CHAMAR NO WHATSAPP
                                            </a>
                                        </div>
                                    );
                                }
                                return (
                                <div key={idx} className={clsx("flex max-w-[88%] flex-col md:max-w-[85%]", msg.role === 'user' ? "ml-auto items-end" : "items-start")}>
                                        <div className={clsx(
                                            "p-3 rounded-2xl text-sm shadow-sm relative",
                                            msg.role === 'user' ? "bg-[#dcf8c6] text-gray-900 rounded-tr-none" : "bg-white text-gray-800 rounded-tl-none"
                                        )}>
                                            {msg.content}
                                        </div>
                                    </div>
                                );
                            })}
                            {isTyping && (
                                <div className="bg-white p-3 rounded-2xl rounded-tl-none w-16 shadow-sm">
                                    <div className="flex gap-1 justify-center">
                                        <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce"></div>
                                        <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce [animation-delay:0.1s]"></div>
                                        <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce [animation-delay:0.2s]"></div>
                                    </div>
                                </div>
                            )}
                            <div ref={messagesEndRef} />
                        </div>

                        {/* Input Area */}
                        <div className="flex items-center gap-2 border-t border-gray-100 bg-white p-3">
                            <input
                                type="text"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                                placeholder="Digite sua dúvida..."
                                className="flex-1 bg-gray-100 text-sm px-4 py-2.5 rounded-full outline-none focus:ring-2 focus:ring-brand-gold/50"
                            />
                            <button
                                onClick={handleSend}
                                disabled={!input.trim() || isTyping}
                                className="w-10 h-10 bg-[#075E54] text-white rounded-full flex items-center justify-center hover:bg-green-700 transition disabled:opacity-50"
                            >
                                <Send className="w-4 h-4" />
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Floating Button bubble */}
            {!isChatOpen && (
                <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={toggleChat}
                    className="group flex items-center gap-3 cursor-pointer"
                >
                    <div className="bg-white px-4 py-2 rounded-xl shadow-lg font-bold text-sm text-gray-700 border border-gray-100 group-hover:bg-gray-50 transition hidden md:block">
                        Olá{userName ? `, ${userName}` : ''}! Posso ajudar?
                    </div>
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl shadow-green-500/30 animate-float md:h-14 md:w-14">
                        <MessageSquare className="w-6 h-6 md:w-7 md:h-7" />
                    </div>
                </motion.div>
            )}

        </div>
    );
}
