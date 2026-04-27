const steps = [
    {
        title: '1. Avaliação',
        copy: 'Entendemos seu caso e seus objetivos.',
    },
    {
        title: '2. Exames',
        copy: 'Os exames confirmam o melhor plano para você.',
    },
    {
        title: '3. Implante e finalização',
        copy: 'Instalação e ajuste final com acompanhamento clínico.',
    },
];

export default function ImplantJourney() {
    return (
        <section id="como-funciona" className="bg-[#f7f4ef] py-16 md:py-24">
            <div className="mx-auto max-w-7xl px-5 md:px-6">
                <div className="mx-auto mb-10 max-w-3xl text-center md:mb-14">
                    <p className="text-xs font-black uppercase tracking-[0.3em] text-brand-gold">Fluxo do tratamento</p>
                    <h2 className="mt-5 text-3xl font-black leading-tight text-txt-primary md:text-5xl">
                        Como funciona o tratamento com implante?
                    </h2>
                    <p className="mt-4 text-sm leading-7 text-gray-600 md:text-base md:leading-8">
                        Etapas simples para você entender o tratamento com clareza.
                    </p>
                </div>

                <div className="grid gap-4 md:grid-cols-3">
                    {steps.map((step) => (
                        <article
                            key={step.title}
                            className="rounded-[22px] border border-black/8 bg-white px-5 py-5 shadow-[0_14px_40px_rgba(0,0,0,0.04)] md:min-h-[220px]"
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
