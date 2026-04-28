import Link from 'next/link';
import WhatsAppTrackedLink from '@/components/WhatsAppTrackedLink';
import { Clock3, MapPin, Phone, MessageCircle } from 'lucide-react';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ChatWidget from '@/components/ChatWidget';
import JsonLd from '@/components/JsonLd';
import { buildBreadcrumbSchema, buildDentistSchema, buildMetadata, CLINIC_INFO } from '@/lib/seo';

export const metadata = buildMetadata({
    title: 'Contato da Clínica Inova | Betim',
    description:
        'Entre em contato com a Clínica Inova em Betim. Endereço, telefone, WhatsApp, localização e formas de iniciar seu atendimento.',
    path: '/contato',
    keywords: [
        'contato clínica inova',
        'telefone clínica inova betim',
        'whatsapp dentista betim',
        'endereço clínica inova betim',
    ],
});

export default function ContatoPage() {
    return (
        <main className="min-h-screen bg-white text-txt-primary selection:bg-brand-gold selection:text-white">
            <JsonLd data={buildDentistSchema()} />
            <JsonLd
                data={buildBreadcrumbSchema([
                    { name: 'Início', path: '/inicio' },
                    { name: 'Contato', path: '/contato' },
                ])}
            />

            <Navbar />

            <section className="pt-36 pb-20 bg-[linear-gradient(180deg,#f8f6f2,white)]">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="max-w-4xl">
                        <div className="text-xs font-bold uppercase tracking-[0.24em] text-gray-400">
                            <Link href="/inicio" className="hover:text-brand-gold transition">Início</Link> / Contato
                        </div>
                        <p className="mt-8 text-xs font-black uppercase tracking-[0.34em] text-brand-gold">Contato</p>
                        <h1 className="mt-6 text-4xl md:text-6xl font-black leading-[0.98]">
                            A conversa certa começa quando o contato é simples.
                        </h1>
                        <p className="mt-8 text-lg md:text-xl leading-9 text-gray-600 max-w-3xl">
                            Se você quer tirar uma dúvida, entender o tratamento ou validar um próximo passo, a Clínica Inova atende em Betim com foco em clareza, organização e acompanhamento.
                        </p>
                    </div>
                </div>
            </section>

            <section className="pb-24 bg-white">
                <div className="max-w-7xl mx-auto px-6 grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
                    <div className="rounded-[32px] border border-black/8 bg-[#141414] px-8 py-10 text-white">
                        <p className="text-xs font-black uppercase tracking-[0.34em] text-brand-gold">Clínica Inova</p>
                        <div className="mt-8 space-y-5">
                            <div className="rounded-[22px] border border-white/10 bg-white/[0.04] px-5 py-5">
                                <div className="flex items-start gap-3">
                                    <MapPin className="mt-1 w-5 h-5 text-brand-gold" />
                                    <div>
                                        <p className="font-black">Endereço</p>
                                        <p className="mt-1 text-white/66">{CLINIC_INFO.address} - {CLINIC_INFO.city} - {CLINIC_INFO.state}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="rounded-[22px] border border-white/10 bg-white/[0.04] px-5 py-5">
                                <div className="flex items-start gap-3">
                                    <Phone className="mt-1 w-5 h-5 text-brand-gold" />
                                    <div>
                                        <p className="font-black">Telefone</p>
                                        <p className="mt-1 text-white/66">{CLINIC_INFO.phone}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="rounded-[22px] border border-white/10 bg-white/[0.04] px-5 py-5">
                                <div className="flex items-start gap-3">
                                    <Clock3 className="mt-1 w-5 h-5 text-brand-gold" />
                                    <div>
                                        <p className="font-black">Horário</p>
                                        <p className="mt-1 text-white/66">Segunda a sexta, de 8h às 18h</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mt-8 flex flex-wrap gap-3">
                            <WhatsAppTrackedLink
                                href={CLINIC_INFO.whatsapp}
                                target="_blank"
                                className="rounded-full bg-brand-gold px-6 py-4 text-sm font-black uppercase tracking-[0.16em] text-white transition hover:bg-brand-gold-dark"
                            >
                                Falar no WhatsApp
                            </WhatsAppTrackedLink>
                            <Link
                                href={CLINIC_INFO.phoneHref}
                                className="rounded-full border border-white/14 px-6 py-4 text-sm font-black uppercase tracking-[0.16em] text-white/84 transition hover:bg-white/[0.06]"
                            >
                                Ligar para a clínica
                            </Link>
                        </div>
                    </div>

                    <div className="rounded-[32px] border border-black/8 bg-[#fbfaf8] p-4 shadow-[0_18px_60px_rgba(0,0,0,0.04)]">
                        <div className="h-[520px] overflow-hidden rounded-[24px] border border-black/8 bg-white">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3749.999999999999!2d-44.198!3d-19.968!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDU4JzA0LjgiUyA0NMKwMTEnNTIuOCJX!5e0!3m2!1spt-BR!2sbr!4v1600000000000!5m2!1spt-BR!2sbr"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Mapa da Clínica Inova em Betim"
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section className="pb-24 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="rounded-[32px] border border-black/8 bg-[#fbfaf8] px-8 py-10 md:px-10">
                        <p className="text-xs font-black uppercase tracking-[0.34em] text-brand-gold">Caminhos rápidos</p>
                        <div className="mt-8 grid gap-4 md:grid-cols-3">
                            <Link href="/implante-dentario-betim" className="rounded-[22px] border border-black/8 bg-white px-5 py-5 transition hover:border-brand-gold">
                                <p className="font-black">Implante dentário em Betim</p>
                                <p className="mt-2 text-gray-600 leading-7">Para quem quer contexto antes de decidir por preço.</p>
                            </Link>
                            <Link href="/quanto-custa-implante-dentario-betim" className="rounded-[22px] border border-black/8 bg-white px-5 py-5 transition hover:border-brand-gold">
                                <p className="font-black">Quanto custa implante em Betim</p>
                                <p className="mt-2 text-gray-600 leading-7">Para quem quer entender valor com mais critério.</p>
                            </Link>
                            <Link href="/blog" className="rounded-[22px] border border-black/8 bg-white px-5 py-5 transition hover:border-brand-gold">
                                <p className="font-black">Blog da Clínica Inova</p>
                                <p className="mt-2 text-gray-600 leading-7">Para quem ainda está pesquisando e comparando possibilidades.</p>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
            <ChatWidget />
        </main>
    );
}
