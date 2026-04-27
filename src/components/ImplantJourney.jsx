const steps = [
    {
        title: '1. Avaliação',
        copy: 'Entendemos sua necessidade e avaliamos sua saúde bucal.',
    },
    {
        title: '2. Exames',
        copy: 'Verificamos estrutura óssea e condições para o tratamento.',
    },
    {
        title: '3. Planejamento',
        copy: 'Você recebe orientação clara antes de decidir.',
    },
    {
        title: '4. Tratamento',
        copy: 'Procedimento com técnica, cuidado e acompanhamento.',
    },
];

export default function ImplantJourney() {
    return (
        <section id="como-funciona" className="bg-[#f7f4ef] py-16 md:py-24">
            <div className="mx-auto max-w-7xl px-5 md:px-6">
                <div className="mx-auto mb-10 max-w-3xl text-center md:mb-14">
                    <p className="text-xs font-black uppercase tracking-[0.3em] text-brand-gold">Como funciona</p>
                    <h2 className="mt-5 text-3xl font-black leading-tight text-txt-primary md:text-5xl">
                        Um caminho claro, sem promessa rasa.
                    </h2>
                </div>

                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
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
