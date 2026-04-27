'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Phone } from 'lucide-react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        document.body.style.overflow = mobileMenuOpen ? 'hidden' : '';
        document.body.classList.toggle('mobile-menu-open', mobileMenuOpen);
        return () => {
            document.body.style.overflow = '';
            document.body.classList.remove('mobile-menu-open');
        };
    }, [mobileMenuOpen]);

    const navClasses = twMerge(
        'fixed w-full z-50 border-b border-transparent py-4 transition-all duration-300 md:py-6',
        mobileMenuOpen && 'z-[120]',
        scrolled && 'glass py-3 shadow-sm border-gray-100/20'
    );

    return (
        <nav className={navClasses}>
            <div className="max-w-7xl mx-auto flex items-center justify-between px-5 md:px-6">
                <Link href="/" className="z-50 select-none text-[1.45rem] leading-none tracking-tighter text-txt-primary md:text-2xl">
                    <span className="font-normal">CLÍNICA</span> <span className="font-bold">INOVA</span>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden xl:flex gap-10 text-xs font-bold text-gray-500 uppercase tracking-widest items-center">
                    <Link href="/#inicio" className="hover:text-brand-gold transition">INÍCIO</Link>
                    <Link href="/#precos" className="hover:text-brand-gold transition">INVESTIMENTO</Link>
                    <Link href="/#como-funciona" className="hover:text-brand-gold transition">COMO FUNCIONA</Link>
                    <Link href="/#duvidas-rapidas" className="hover:text-brand-gold transition">DÚVIDAS</Link>
                    <Link href="/contato" className="hover:text-brand-gold transition">CONTATO</Link>
                </div>

                <Link
                    href="https://wa.me/553126260038"
                    className="hidden xl:flex border-2 border-brand-gold text-brand-gold font-bold px-6 py-2.5 rounded-full text-xs hover:bg-brand-gold hover:text-white transition items-center gap-2"
                >
                    <Phone className="w-4 h-4" /> WHATSAPP
                </Link>

                {/* Mobile Toggle */}
                {!mobileMenuOpen ? (
                    <button
                        className="xl:hidden z-50 rounded-full border border-gray-200/80 bg-white/80 p-2 text-txt-primary backdrop-blur"
                        onClick={() => setMobileMenuOpen(true)}
                        aria-label="Abrir menu"
                    >
                        <Menu size={28} />
                    </button>
                ) : null}

                {/* Mobile Menu */}
                <div className={clsx(
                    "fixed inset-0 z-[130] xl:hidden transition-all duration-300",
                    mobileMenuOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
                )}>
                    <div className="absolute inset-0 bg-[#f7f3ec]" />
                    <div className="relative flex h-full flex-col overflow-y-auto px-5 pb-8 pt-[max(env(safe-area-inset-top),1.25rem)]">
                        <div className="flex items-center justify-between">
                            <Link href="/" onClick={() => setMobileMenuOpen(false)} className="select-none text-[1.45rem] leading-none tracking-tighter text-txt-primary">
                                <span className="font-normal">CLÍNICA</span> <span className="font-bold">INOVA</span>
                            </Link>
                            <button
                                className="rounded-full border border-gray-200 bg-white/90 p-3 text-txt-primary shadow-sm"
                                onClick={() => setMobileMenuOpen(false)}
                                aria-label="Fechar menu"
                            >
                                <X size={26} />
                            </button>
                        </div>

                        <div className="mt-8 rounded-[28px] border border-black/5 bg-white p-6 shadow-[0_20px_60px_rgba(0,0,0,0.05)]">
                            <p className="text-[11px] font-black uppercase tracking-[0.28em] text-brand-gold">Clínica Inova</p>
                            <h2 className="mt-4 text-2xl font-black leading-tight text-txt-primary">
                                Menos ruído. Mais clareza para decidir.
                            </h2>
                            <p className="mt-3 text-sm leading-7 text-gray-500">
                                Implante, alinhadores e estética em Betim com uma leitura mais séria desde o primeiro contato.
                            </p>
                        </div>

                        <div className="mt-8 grid gap-3">
                            <Link href="/#inicio" onClick={() => setMobileMenuOpen(false)} className="rounded-[22px] border border-black/6 bg-white px-5 py-4 text-lg font-bold text-txt-primary shadow-sm">Início</Link>
                            <Link href="/#precos" onClick={() => setMobileMenuOpen(false)} className="rounded-[22px] border border-black/6 bg-white px-5 py-4 text-lg font-bold text-txt-primary shadow-sm">Investimento</Link>
                            <Link href="/#como-funciona" onClick={() => setMobileMenuOpen(false)} className="rounded-[22px] border border-black/6 bg-white px-5 py-4 text-lg font-bold text-txt-primary shadow-sm">Como funciona</Link>
                            <Link href="/#duvidas-rapidas" onClick={() => setMobileMenuOpen(false)} className="rounded-[22px] border border-black/6 bg-white px-5 py-4 text-lg font-bold text-txt-primary shadow-sm">Dúvidas</Link>
                            <Link href="/contato" onClick={() => setMobileMenuOpen(false)} className="rounded-[22px] border border-black/6 bg-white px-5 py-4 text-lg font-bold text-txt-primary shadow-sm">Contato</Link>
                        </div>

                        <div className="mt-auto grid gap-3 pt-8">
                            <Link href="https://wa.me/553126260038" onClick={() => setMobileMenuOpen(false)} className="flex min-h-14 items-center justify-center rounded-full border border-black/8 bg-[#111111] px-8 text-sm font-black uppercase tracking-[0.18em] text-white">
                                Falar no WhatsApp
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}
