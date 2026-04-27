const items = [
    'Perdi um ou mais dentes',
    'Uso prótese removível e quero mais segurança',
    'Tenho dificuldade para mastigar',
    'Evito sorrir por vergonha',
    'Quero entender se implante serve para meu caso',
];

export default function ImplantIndications() {
    return (
        <section className="bg-white py-16 md:py-22">
            <div className="mx-auto max-w-6xl px-5 md:px-6">
                <div className="mx-auto max-w-3xl text-center">
                    <p className="text-xs font-black uppercase tracking-[0.3em] text-brand-gold">Indicação</p>
                    <h2 className="mt-5 text-3xl font-black leading-tight text-txt-primary md:text-5xl">
                        Você se identifica com alguma dessas situações?
                    </h2>
                    <p className="mt-5 text-sm leading-7 text-gray-600 md:text-base md:leading-8">
                        A indicação correta depende da avaliação clínica. Por isso, antes de falar em tratamento definitivo, é importante entender sua saúde bucal, exames e expectativas.
                    </p>
                </div>

                <div className="mt-8 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
                    {items.map((item) => (
                        <article
                            key={item}
                            className="rounded-[22px] border border-black/8 bg-[#faf8f4] px-5 py-5 shadow-[0_14px_40px_rgba(0,0,0,0.04)]"
                        >
                            <p className="text-base font-bold leading-7 text-txt-primary">{item}</p>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
