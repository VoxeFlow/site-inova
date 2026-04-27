import Image from 'next/image';

export default function TeamAuthority() {
    return (
        <section className="bg-[#f7f4ef] py-16 md:py-22">
            <div className="mx-auto max-w-6xl px-5 md:px-6">
                <div className="grid items-center gap-6 rounded-[26px] border border-black/8 bg-white p-5 shadow-[0_20px_70px_rgba(0,0,0,0.05)] md:grid-cols-[1.2fr_0.8fr] md:gap-10 md:p-8">
                    <div>
                        <p className="text-xs font-black uppercase tracking-[0.3em] text-brand-gold">Autoridade</p>
                        <h2 className="mt-4 text-3xl font-black leading-tight text-txt-primary md:text-4xl">
                            Você não precisa decidir sozinho
                        </h2>
                        <p className="mt-4 text-sm leading-7 text-gray-600 md:text-base md:leading-8">
                            Aqui, o primeiro passo não é falar de preço. É entender exatamente o seu caso e te mostrar o caminho com clareza.
                        </p>
                    </div>
                    <div className="relative h-56 overflow-hidden rounded-[20px] border border-black/6 md:h-72">
                        <Image
                            src="/assets/Dr Jeff_edited.avif"
                            alt="Dr. Jefferson Reis - Clínica Inova"
                            fill
                            sizes="(max-width: 768px) 100vw, 40vw"
                            className="object-cover object-top"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
