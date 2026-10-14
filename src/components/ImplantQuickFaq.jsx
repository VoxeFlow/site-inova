const faqs = [
    {
        question: 'Como saber qual tratamento é indicado?',
        answer:
            'A indicação depende da avaliação clínica, dos exames necessários e dos seus objetivos. O plano é definido depois de entender o caso.',
    },
    {
        question: 'Quanto custa um tratamento?',
        answer:
            'O investimento varia conforme o diagnóstico, a complexidade, o tempo e a modalidade indicada. Por isso, não há uma tabela única para todos.',
    },
    {
        question: 'Alinhadores funcionam para todos os casos?',
        answer:
            'Nem sempre. A avaliação mostra se Invisalign, Self, SouSmile ou aparelho convencional fazem sentido para o seu caso.',
    },
    {
        question: 'Preciso avaliar antes de saber o valor?',
        answer:
            'Sim. A avaliação organiza as possibilidades e permite explicar etapas, prazo estimado e investimento com mais clareza.',
    },
];

export default function ImplantQuickFaq() {
    return (
        <section id="duvidas-rapidas" className="bg-white py-16 md:py-22">
            <div className="mx-auto max-w-6xl px-5 md:px-6">
                <div className="mx-auto mb-10 max-w-3xl text-center md:mb-12">
                    <p className="text-xs font-black uppercase tracking-[0.3em] text-brand-gold">FAQ</p>
                    <h2 className="mt-5 text-3xl font-normal leading-tight tracking-[-0.03em] text-txt-primary md:text-5xl">
                        Perguntas importantes antes de começar
                    </h2>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                    {faqs.map((item) => (
                        <article
                            key={item.question}
                            className="rounded-[22px] border border-black/8 bg-[#faf8f4] px-5 py-5 shadow-[0_14px_40px_rgba(0,0,0,0.04)] transition duration-300 hover:-translate-y-0.5 hover:border-brand-gold/35"
                        >
                            <h3 className="text-lg font-black leading-tight text-txt-primary">{item.question}</h3>
                            <p className="mt-3 text-sm leading-6 text-gray-600">{item.answer}</p>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
