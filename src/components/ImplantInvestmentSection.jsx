import { CheckCircle2 } from 'lucide-react';

const factors = [
    'quantidade de dentes a substituir',
    'condição óssea',
    'exames necessários',
    'planejamento cirúrgico',
    'etapa protética final',
];

export default function ImplantInvestmentSection() {
    return (
        <section id="precos" className="bg-[#111111] py-16 text-white md:py-24">
            <div className="mx-auto max-w-6xl px-5 md:px-6">
                <div className="rounded-[28px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.02))] p-5 shadow-[0_24px_80px_rgba(0,0,0,0.2)] md:rounded-[34px] md:p-8">
                    <p className="text-xs font-black uppercase tracking-[0.3em] text-brand-gold">Investimento</p>
                    <h2 className="mt-5 text-3xl font-black leading-tight md:text-5xl">
                        Quanto custa um implante dentário?
                    </h2>
                    <p className="mt-5 max-w-4xl text-sm leading-7 text-white/70 md:text-base md:leading-8">
                        Muitos pacientes chegam preocupados com o valor, mas descobrem que o primeiro passo é mais simples do que imaginavam: entender o caso com uma avaliação clara.
                    </p>
                    <p className="mt-3 max-w-4xl text-sm leading-7 text-white/70 md:text-base md:leading-8">
                        O valor de um implante dentário varia conforme a quantidade de dentes, condição óssea, exames e planejamento. Por isso, falar em preço sem avaliação pode gerar falsa expectativa.
                    </p>
                    <p className="mt-3 max-w-4xl text-sm leading-7 text-white/70 md:text-base md:leading-8">
                        Em muitos casos, o tratamento pode começar com parcelas a partir de R$150/mês*.
                    </p>

                    <ul className="mt-6 grid gap-3 md:grid-cols-2">
                        {factors.map((factor) => (
                            <li key={factor} className="flex items-start gap-3 text-sm leading-7 text-white/72">
                                <CheckCircle2 className="mt-1 h-4 w-4 text-brand-gold" />
                                <span>{factor}</span>
                            </li>
                        ))}
                    </ul>

                    <a
                        href="https://wa.me/553126260038"
                        className="mt-7 inline-flex min-h-12 items-center justify-center rounded-full bg-brand-gold px-6 text-center text-sm font-bold text-white transition hover:bg-brand-gold-dark"
                    >
                        Quero saber se posso fazer implante
                    </a>

                    <p className="mt-4 text-xs leading-6 text-white/48">
                        *Valor inicial estimado e sujeito à avaliação. Esta informação não substitui consulta profissional.
                    </p>
                </div>
            </div>
        </section>
    );
}
