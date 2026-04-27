import { CheckCircle2 } from 'lucide-react';

const factors = [
    'quantidade de dentes',
    'condição óssea',
    'exames',
    'planejamento',
];

export default function ImplantInvestmentSection() {
    return (
        <section id="precos" className="bg-[#111111] py-14 text-white md:py-24">
            <div className="mx-auto max-w-6xl px-5 md:px-6">
                <div className="rounded-[24px] border border-white/12 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.02))] p-5 shadow-[0_24px_80px_rgba(0,0,0,0.2)] md:rounded-[34px] md:p-8">
                    <p className="text-xs font-black uppercase tracking-[0.3em] text-brand-gold">Investimento</p>
                    <h2 className="mt-4 text-[1.85rem] font-black leading-tight md:text-5xl">
                        Quanto custa um implante?
                    </h2>
                    <p className="mt-4 max-w-4xl text-sm leading-7 text-white/74 md:text-base md:leading-8">
                        O valor depende do seu caso, mas muitos tratamentos podem começar com parcelas acessíveis.
                    </p>
                    <p className="mt-2 max-w-4xl text-sm leading-7 text-white/70 md:text-base md:leading-8">
                        Se você pesquisa quanto custa implante dentário, o mais seguro é validar o implante dentário preço após avaliação clínica.
                    </p>
                    <p className="mt-3 text-xl font-black text-white md:text-2xl">
                        a partir de R$150/mês*
                    </p>

                    <ul className="mt-5 grid gap-2.5 md:grid-cols-2">
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
                        Quero saber meu valor
                    </a>

                    <p className="mt-4 text-xs leading-6 text-white/48">
                        *Valor inicial estimado e sujeito à avaliação. Esta informação não substitui consulta profissional.
                    </p>
                    <p className="mt-2 text-xs leading-6 text-white/42">
                        Para entender quanto custa implante dentário e implante dentário preço de forma responsável, a avaliação define o plano, o formato de implante dentário parcelado e as etapas do tratamento.
                    </p>
                </div>
            </div>
        </section>
    );
}
