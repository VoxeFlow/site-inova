import { CheckCircle2 } from 'lucide-react';

const factors = [
    'Quantidade de dentes',
    'Condição óssea',
    'Exames',
    'Planejamento',
];

export default function ImplantInvestmentSection() {
    return (
        <section id="precos" className="bg-[#111111] py-14 text-white md:py-22">
            <div className="mx-auto max-w-6xl px-5 md:px-6">
                <div className="rounded-[24px] border border-white/12 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.02))] p-5 shadow-[0_24px_80px_rgba(0,0,0,0.2)] md:rounded-[34px] md:p-8">
                    <p className="text-xs font-black uppercase tracking-[0.3em] text-brand-gold">Investimento</p>
                    <h2 className="mt-4 text-[1.85rem] font-black leading-tight md:text-5xl">
                        Quanto custa um implante dentário?
                    </h2>
                    <p className="mt-4 max-w-4xl text-sm leading-7 text-white/74 md:text-base md:leading-8">
                        Em muitos casos, o tratamento pode começar com parcelas a partir de R$150/mês*.
                    </p>

                    <div className="mt-5 rounded-[20px] border border-brand-gold/40 bg-white/[0.03] px-4 py-4 md:max-w-xl">
                        <p className="text-xs font-black uppercase tracking-[0.24em] text-brand-gold">Referência inicial</p>
                        <p className="mt-2 text-3xl font-black leading-none text-white">A partir de R$150/mês*</p>
                    </div>

                    <ul className="mt-6 grid gap-2.5 md:grid-cols-2">
                        {factors.map((factor) => (
                            <li key={factor} className="flex items-start gap-3 text-sm leading-7 text-white/74">
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
                </div>
            </div>
        </section>
    );
}
