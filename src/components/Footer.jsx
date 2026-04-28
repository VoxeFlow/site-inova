import Link from 'next/link';
import { Facebook, Instagram, MapPin, Phone } from 'lucide-react';
import { CLINIC_INFO } from '@/lib/seo';

export default function Footer() {
    return (
        <footer className="bg-txt-primary pb-10 pt-16 text-white md:pt-20">
            <div className="max-w-7xl mx-auto grid gap-10 border-b border-gray-800 px-5 pb-12 md:grid-cols-3 md:gap-12 md:px-6">
                <div>
                    <div className="text-2xl font-bold mb-6">CLÍNICA INOVA</div>
                    <p className="text-gray-400 text-sm mb-6">
                        15 anos transformando sorrisos e vidas em Betim. Ética, tecnologia e responsabilidade.
                    </p>
                    <div className="flex gap-4 text-gray-400">
                        <Link href="https://instagram.com/clinicainova" target="_blank" className="hover:text-brand-gold transition">
                            <Instagram className="w-6 h-6" />
                        </Link>
                        <Link href="https://facebook.com/clinicainova" target="_blank" className="hover:text-brand-gold transition">
                            <Facebook className="w-6 h-6" />
                        </Link>
                    </div>
                </div>
                <div>
                    <h4 className="font-bold uppercase text-xs tracking-widest mb-6 text-brand-gold">Contato</h4>
                    <ul className="space-y-4 text-gray-400 text-sm">
                        <li className="flex items-center gap-2">
                            <Phone className="w-4 h-4 text-brand-gold" /> {CLINIC_INFO.phone}
                        </li>
                        <li className="flex items-center gap-2">
                            <MapPin className="w-4 h-4 text-brand-gold" /> {CLINIC_INFO.address}, {CLINIC_INFO.city} - {CLINIC_INFO.state}
                        </li>
                    </ul>
                </div>
                <div>
                    <h4 className="font-bold uppercase text-xs tracking-widest mb-6 text-brand-gold">Páginas estratégicas</h4>
                    <div className="flex flex-col gap-3 text-sm">
                        <Link href="/implante-dentario-betim" className="text-gray-400 hover:text-white transition">
                            Implante dentário em Betim
                        </Link>
                        <Link href="/dr-lucas-vilela" className="text-gray-400 hover:text-white transition">
                            Dr. Lucas Vilela
                        </Link>
                        <Link href="/quanto-custa-implante-dentario-betim" className="text-gray-400 hover:text-white transition">
                            Quanto custa implante em Betim
                        </Link>
                        <Link href="/dentista-em-betim" className="text-gray-400 hover:text-white transition">
                            Dentista em Betim
                        </Link>
                        <Link href="/alinhador-invisivel-betim" className="text-gray-400 hover:text-white transition">
                            Alinhador invisível em Betim
                        </Link>
                        <Link href="/sobre" className="text-gray-400 hover:text-white transition">
                            Sobre a clínica
                        </Link>
                        <Link href="/contato" className="text-gray-400 hover:text-white transition">
                            Contato
                        </Link>
                        <Link href="/blog" className="text-gray-400 hover:text-white transition">
                            Blog da Clínica Inova
                        </Link>
                    </div>
                </div>
            </div>
            <div className="pt-8 text-center text-xs text-gray-600 font-bold flex flex-col gap-2">
                <p>© 2026 Clínica Inova. Resp. Téc: Dr. Jefferson Reis.</p>
                <Link href="/dashboard" className="opacity-10 hover:opacity-50 transition">Acesso Administrativo</Link>
            </div>
        </footer>
    );
}
