const items = [
    'Clínica em Betim',
    'Planejamento individual',
    'Tecnologia e exames',
    'Atendimento próximo',
];

export default function ImplantTrustBlock() {
    return (
        <section className="bg-[#f7f4ef] py-16 md:py-22">
            <div className="mx-auto max-w-7xl px-5 md:px-6">
                <div className="mx-auto max-w-4xl text-center">
                    <p className="text-xs font-black uppercase tracking-[0.3em] text-brand-gold">Confiança clínica</p>
                    <h2 className="mt-5 text-3xl font-black leading-tight text-txt-primary md:text-5xl">
                        Por que escolher a Clínica Inova?
                    </h2>
                    <p className="mt-5 text-sm leading-7 text-gray-600 md:text-base md:leading-8">
                        Planejamento claro, tecnologia e atendimento humano com dentista em Betim.
                    </p>
                </div>

                <div className="mt-8 grid gap-3 md:mt-10 md:grid-cols-2 lg:grid-cols-4">
                    {items.map((item) => (
                        <article
                            key={item}
                            className="rounded-[22px] border border-black/8 bg-white px-4 py-5 text-center shadow-[0_14px_40px_rgba(0,0,0,0.04)]"
                        >
                            <p className="text-sm font-bold leading-7 text-txt-primary">{item}</p>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
