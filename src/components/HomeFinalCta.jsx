import Link from 'next/link';

export default function HomeFinalCta() {
    return (
        <section className="bg-[#111111] py-16 text-white md:py-22">
            <div className="mx-auto max-w-5xl px-5 text-center md:px-6">
                <p className="text-xs font-black uppercase tracking-[0.3em] text-brand-gold">Próximo passo</p>
                <h2 className="mt-5 text-3xl font-black leading-tight md:text-5xl">
                    Quer saber se o implante é indicado para você?
                </h2>
                <p className="mx-auto mt-5 max-w-3xl text-sm leading-7 text-white/70 md:text-base md:leading-8">
                    Fale com a Clínica Inova e receba uma orientação inicial pelo WhatsApp.
                </p>
                <a
                    href="https://wa.me/553126260038"
                    className="mt-7 inline-flex min-h-12 items-center justify-center rounded-full bg-brand-gold px-7 text-center text-sm font-bold text-white transition hover:bg-brand-gold-dark"
                >
                    Falar com a clínica agora
                </a>
                <div className="mt-6 flex flex-wrap items-center justify-center gap-2 text-xs font-bold uppercase tracking-[0.12em]">
                    <Link href="/implante-dentario-betim" className="rounded-full border border-white/18 bg-white/[0.04] px-4 py-2 text-white/85 transition hover:bg-white/[0.1]">
                        Implante
                    </Link>
                    <Link href="/quanto-custa-implante-dentario-betim" className="rounded-full border border-white/18 bg-white/[0.04] px-4 py-2 text-white/85 transition hover:bg-white/[0.1]">
                        Quanto custa implante
                    </Link>
                    <Link href="/protocolo-dentario-betim" className="rounded-full border border-white/18 bg-white/[0.04] px-4 py-2 text-white/85 transition hover:bg-white/[0.1]">
                        Protocolo
                    </Link>
                </div>
            </div>
        </section>
    );
}
