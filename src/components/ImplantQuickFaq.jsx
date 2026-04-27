const faqs = [
    {
        question: 'Quanto custa um implante dentário em Betim?',
        answer:
            'O valor depende do caso, mas alguns tratamentos podem começar com parcelas a partir de R$150/mês. A avaliação é necessária para definir exames, quantidade de dentes e planejamento.',
    },
    {
        question: 'Implante dentário dói?',
        answer:
            'Na maioria dos casos, o procedimento é feito com anestesia local e controle adequado do pós-operatório. O desconforto costuma ser manejável com orientação correta.',
    },
    {
        question: 'Quanto tempo dura um implante?',
        answer:
            'Com planejamento e manutenção, o implante pode durar muitos anos. A durabilidade depende da saúde bucal, hábitos e acompanhamento clínico.',
    },
    {
        question: 'Posso fazer implante se perdi o dente há muito tempo?',
        answer:
            'Muitas vezes, sim. Em alguns casos, pode ser necessária uma etapa complementar para preparar a região antes do implante dentário.',
    },
    {
        question: 'Preciso fazer avaliação antes de saber o valor?',
        answer:
            'Sim. O preço do implante dentário depende da condição óssea, quantidade de dentes e tipo de planejamento. A avaliação evita promessas rasas e ajuda a orientar o melhor caminho.',
    },
    {
        question: 'O implante melhora a mastigação?',
        answer:
            'Sim. Quando bem indicado, o implante ajuda a recuperar estabilidade e eficiência mastigatória, além de melhorar segurança ao sorrir e falar.',
    },
];

export default function ImplantQuickFaq() {
    return (
        <section id="duvidas-rapidas" className="bg-white py-16 md:py-22">
            <div className="mx-auto max-w-6xl px-5 md:px-6">
                <div className="mx-auto mb-10 max-w-3xl text-center md:mb-12">
                    <p className="text-xs font-black uppercase tracking-[0.3em] text-brand-gold">Dúvidas rápidas</p>
                    <h2 className="mt-5 text-3xl font-black leading-tight text-txt-primary md:text-4xl">
                        Dúvidas comuns sobre implante dentário
                    </h2>
                    <p className="mt-4 text-sm leading-7 text-gray-600 md:text-base md:leading-8">
                        Respostas curtas e objetivas para quem pesquisa implante dentário preço e quer tomar decisão com segurança.
                    </p>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                    {faqs.map((item) => (
                        <article
                            key={item.question}
                            className="rounded-[22px] border border-black/8 bg-[#faf8f4] px-5 py-5 shadow-[0_14px_40px_rgba(0,0,0,0.04)]"
                        >
                            <h3 className="text-lg font-black leading-tight text-txt-primary">{item.question}</h3>
                            <p className="mt-3 text-sm leading-7 text-gray-600">{item.answer}</p>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
