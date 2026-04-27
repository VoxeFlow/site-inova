'use client';
import { MapPin, Phone, Car, Navigation } from 'lucide-react';
import Link from 'next/link';
import { CLINIC_INFO } from '@/lib/seo';

export default function Location() {
    return (
        <section className="bg-white py-20 md:py-24">
            <div className="max-w-7xl mx-auto px-5 md:px-6">
                <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
                    <div>
                        <h3 className="mb-5 text-3xl font-black text-txt-primary md:mb-6">ONDE ESTAMOS.</h3>
                        <p className="mb-7 text-base font-medium leading-7 text-gray-500 md:mb-8 md:text-lg">
                            {CLINIC_INFO.address} - {CLINIC_INFO.city}. <br />
                            Fácil acesso e conveniência para você.
                        </p>
                        <div className="mb-8 grid grid-cols-1 gap-3 sm:flex sm:flex-wrap sm:gap-4">
                            <Link href="https://waze.com/ul?q=Clinica+Inova+Betim" target="_blank" className="flex items-center justify-center gap-2 rounded-xl border border-gray-100 bg-gray-50 px-5 py-3 font-bold text-sm text-gray-700 shadow-sm transition hover:border-[#33CCFF] hover:bg-[#33CCFF] hover:text-white sm:justify-start">
                                <Navigation className="w-4 h-4" /> Waze
                            </Link>
                            <Link href={CLINIC_INFO.googleMapsUrl} target="_blank" className="flex items-center justify-center gap-2 rounded-xl border border-gray-100 bg-gray-50 px-5 py-3 font-bold text-sm text-gray-700 shadow-sm transition hover:border-[#DB4437] hover:bg-[#DB4437] hover:text-white sm:justify-start">
                                <MapPin className="w-4 h-4" /> Maps
                            </Link>
                            <Link href="https://m.uber.com/ul/" target="_blank" className="flex items-center justify-center gap-2 rounded-xl border border-gray-100 bg-gray-50 px-5 py-3 font-bold text-sm text-gray-700 shadow-sm transition hover:border-black hover:bg-black hover:text-white sm:justify-start">
                                <Car className="w-4 h-4" /> Uber
                            </Link>
                        </div>
                        <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100 inline-block">
                            <p className="font-bold text-sm text-gray-400 uppercase tracking-wider mb-2">Contato</p>
                            <div className="flex items-center gap-3 text-xl font-bold text-txt-primary">
                                <Phone className="text-brand-gold w-5 h-5" />
                                {CLINIC_INFO.phone}
                            </div>
                        </div>
                    </div>
                    <div className="relative h-[320px] overflow-hidden rounded-[24px] border border-gray-100 bg-gray-200 shadow-lg md:h-[400px] md:rounded-[32px]">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3749.999999999999!2d-44.198!3d-19.968!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDU4JzA0LjgiUyA0NMKwMTEnNTIuOCJX!5e0!3m2!1spt-BR!2sbr!4v1600000000000!5m2!1spt-BR!2sbr"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            title="Mapa da Clínica Inova em Betim"
                            className="grayscale hover:grayscale-0 transition duration-700"
                        ></iframe>
                    </div>
                </div>
            </div>
        </section>
    );
}
