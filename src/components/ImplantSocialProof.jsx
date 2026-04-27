import Image from 'next/image';

const testimonials = [
    {
        name: 'Paula Justus',
        photo: '/assets/pacientes/Paula Justus.jpeg',
        quote: 'Eu evitava mastigar de um lado. Depois do implante, voltei ao normal.',
    },
    {
        name: 'Charles',
        photo: '/assets/pacientes/Charles.png',
        quote: 'Tinha vergonha de sorrir. Hoje sorrio com segurança.',
    },
    {
        name: 'Lara',
        photo: '/assets/pacientes/Lara.png',
        quote: 'Achei que seria complicado, mas foi muito mais simples do que imaginei.',
    },
];

export default function ImplantSocialProof() {
    return (
        <section className="bg-white py-14 md:py-18">
            <div className="mx-auto max-w-6xl px-5 md:px-6">
                <div className="mx-auto max-w-3xl text-center">
                    <p className="text-xs font-black uppercase tracking-[0.3em] text-brand-gold">Prova social</p>
                    <h2 className="mt-4 text-3xl font-black leading-tight text-txt-primary md:text-4xl">
                        Pacientes que decidiram com segurança
                    </h2>
                </div>

                <div className="mt-8 grid gap-3 md:grid-cols-3">
                    {testimonials.map((item) => (
                        <article
                            key={item.name}
                            className="rounded-[22px] border border-black/8 bg-[#faf8f4] p-5 shadow-[0_14px_40px_rgba(0,0,0,0.04)]"
                        >
                            <div className="flex items-center gap-3">
                                <div className="relative h-16 w-16 overflow-hidden rounded-2xl border border-black/8 bg-white md:h-18 md:w-18">
                                    <Image
                                        src={item.photo}
                                        alt={`Paciente ${item.name}`}
                                        fill
                                        sizes="72px"
                                        className="object-cover object-top"
                                    />
                                </div>
                                <p className="text-sm font-black text-txt-primary">{item.name}</p>
                            </div>
                            <p className="mt-4 text-sm leading-7 text-gray-600">{item.quote}</p>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
