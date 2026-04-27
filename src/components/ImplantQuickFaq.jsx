const faqs = [
    {
        question: 'Quanto custa implante?',
        answer:
            'Depende do caso, mas alguns tratamentos podem começar com parcelas a partir de R$150/mês após avaliação clínica.',
    },
    {
        question: 'Implante dói?',
        answer:
            'Com anestesia local e planejamento adequado, o procedimento costuma ser mais tranquilo do que muitos imaginam.',
    },
    {
        question: 'Posso fazer mesmo depois de muito tempo?',
        answer:
            'Em muitos casos, sim. A avaliação mostra se há necessidade de etapas complementares antes do implante dentário.',
    },
    {
        question: 'Preciso avaliar antes de saber o valor?',
        answer:
            'Sim. O implante dentário preço depende de exames, condição óssea e planejamento individual.',
    },
];

export default function ImplantQuickFaq() {
    return (
        <section id="duvidas-rapidas" className="bg-white py-16 md:py-22">
            <div className="mx-auto max-w-6xl px-5 md:px-6">
                <div className="mx-auto mb-10 max-w-3xl text-center md:mb-12">
                    <p className="text-xs font-black uppercase tracking-[0.3em] text-brand-gold">FAQ</p>
                    <h2 className="mt-5 text-3xl font-black leading-tight text-txt-primary md:text-4xl">
                        As dúvidas que mais aparecem antes do implante
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
