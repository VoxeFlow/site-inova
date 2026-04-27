const steps = [
    {
        title: '1. Avaliação',
        copy: 'Entendemos seu caso e suas prioridades.',
    },
    {
        title: '2. Exames e plano',
        copy: 'Definimos o caminho mais seguro para você.',
    },
    {
        title: '3. Tratamento',
        copy: 'Implante com acompanhamento até a finalização.',
    },
];

export default function ImplantJourney() {
    return (
        <section id="como-funciona" className="bg-[#f7f4ef] py-16 md:py-24">
            <div className="mx-auto max-w-7xl px-5 md:px-6">
                <div className="mx-auto mb-10 max-w-3xl text-center md:mb-14">
                    <p className="text-xs font-black uppercase tracking-[0.3em] text-brand-gold">Como funciona</p>
                    <h2 className="mt-5 text-3xl font-black leading-tight text-txt-primary md:text-5xl">
                        Três passos para decidir com clareza
                    </h2>
                </div>

                <div className="grid gap-4 md:grid-cols-3">
                    {steps.map((step) => (
                        <article
                            key={step.title}
                            className="rounded-[22px] border border-black/8 bg-white px-5 py-5 shadow-[0_14px_40px_rgba(0,0,0,0.04)] transition duration-300 hover:-translate-y-0.5 hover:border-brand-gold/35"
                        >
                            <h3 className="text-base font-black leading-tight text-txt-primary">{step.title}</h3>
                            <p className="mt-3 text-sm leading-7 text-gray-600">{step.copy}</p>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
