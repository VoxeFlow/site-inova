import Link from 'next/link';
import WhatsAppTrackedLink from '@/components/WhatsAppTrackedLink';

export default function HomeFinalCta() {
    return (
        <section className="bg-[#f7f4ef] py-16 text-txt-primary md:py-22">
            <div className="mx-auto max-w-5xl px-5 text-center md:px-6">
                <p className="text-xs font-black uppercase tracking-[0.3em] text-brand-gold">Próximo passo</p>
                <h2 className="mt-5 text-3xl font-black leading-tight md:text-5xl">
                    Seu próximo passo começa com uma conversa.
                </h2>
                <p className="mx-auto mt-5 max-w-3xl text-sm leading-7 text-gray-600 md:text-base md:leading-8">
                    Fale com a Clínica Inova, conte o que você busca e receba uma orientação inicial pelo WhatsApp.
                </p>
                <WhatsAppTrackedLink
                    href="https://wa.me/553126260038"
                    className="mt-7 inline-flex min-h-12 items-center justify-center rounded-full bg-txt-primary px-7 text-center text-sm font-medium text-white transition hover:bg-brand-gold"
                >
                    Falar com a clínica agora
                </WhatsAppTrackedLink>
                <div className="mt-6 flex flex-wrap items-center justify-center gap-2 text-xs font-bold uppercase tracking-[0.12em]">
                    <Link href="/implante-dentario-betim" className="rounded-full border border-black/8 bg-white px-4 py-2 text-gray-700 transition hover:border-brand-gold hover:text-brand-gold">
                        Implante
                    </Link>
                    <Link href="/quanto-custa-implante-dentario-betim" className="rounded-full border border-black/8 bg-white px-4 py-2 text-gray-700 transition hover:border-brand-gold hover:text-brand-gold">
                        Quanto custa implante
                    </Link>
                    <Link href="/protocolo-dentario-betim" className="rounded-full border border-black/8 bg-white px-4 py-2 text-gray-700 transition hover:border-brand-gold hover:text-brand-gold">
                        Protocolo
                    </Link>
                    <Link href="/clareamento-dental-betim" className="rounded-full border border-black/8 bg-white px-4 py-2 text-gray-700 transition hover:border-brand-gold hover:text-brand-gold">
                        Clareamento
                    </Link>
                    <Link href="/invisalign-betim" className="rounded-full border border-black/8 bg-white px-4 py-2 text-gray-700 transition hover:border-brand-gold hover:text-brand-gold">
                        Invisalign
                    </Link>
                    <Link href="/alinhadores-invisiveis-betim" className="rounded-full border border-black/8 bg-white px-4 py-2 text-gray-700 transition hover:border-brand-gold hover:text-brand-gold">
                        Alinhadores
                    </Link>
                    <Link href="/dr-lucas-vilela" className="rounded-full border border-black/8 bg-white px-4 py-2 text-gray-700 transition hover:border-brand-gold hover:text-brand-gold">
                        Dr. Lucas Vilela
                    </Link>
                </div>
            </div>
        </section>
    );
}
