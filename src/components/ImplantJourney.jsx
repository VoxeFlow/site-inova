const steps = [
    {
        title: '1. Avaliação inicial',
        copy: 'Você conversa com a equipe e recebe uma leitura inicial do seu caso com foco em segurança e previsibilidade.',
    },
    {
        title: '2. Exames e planejamento',
        copy: 'A clínica organiza os exames necessários para definir o plano ideal, sem promessas genéricas.',
    },
    {
        title: '3. Instalação do implante',
        copy: 'Com planejamento validado, a instalação do implante dentário é conduzida com técnica, critério e acompanhamento próximo.',
    },
    {
        title: '4. Acompanhamento',
        copy: 'Após a etapa cirúrgica, você recebe orientações claras para recuperação e controle da evolução do tratamento.',
    },
    {
        title: '5. Finalização estética e funcional',
        copy: 'A etapa final busca devolver mastigação, conforto e estética de forma estável, respeitando seu caso clínico.',
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
                        Um caminho simples, humano e confiável para quem busca implante dentário em Betim com clareza desde a primeira consulta.
                    </p>
                </div>

                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
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
