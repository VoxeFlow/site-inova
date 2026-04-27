import Link from 'next/link';
import { ArrowRight, CircleCheckBig } from 'lucide-react';

const flow = [
    {
        eyebrow: '1. A dúvida começa no valor',
        title: 'Pesquisar preço é natural. Decidir só pelo preço pode ser arriscado.',
        copy: 'Sem avaliação, o número isolado não mostra complexidade, planejamento e segurança de cada caso.',
    },
    {
        eyebrow: '2. O contexto muda a decisão',
        title: 'O investimento depende do caso, do tempo clínico e da estratégia indicada.',
        copy: 'Quando você entende esses fatores, compara melhor e evita promessas rasas.',
    },
    {
        eyebrow: '3. O próximo passo fica claro',
        title: 'Em poucos passos, você entende seu cenário antes de falar em orçamento final.',
        copy: 'A proposta é orientar, reduzir insegurança e indicar a avaliação mais coerente para você.',
    },
];

export default function MobileDecisionFlow() {
    return (
        <section className="bg-white px-5 pb-4 md:hidden">
            <div className="overflow-hidden rounded-[30px] border border-black/6 bg-[linear-gradient(180deg,#111111,#1a1a1a)] px-5 py-6 text-white shadow-[0_22px_60px_rgba(0,0,0,0.14)]">
                <p className="text-[11px] font-black uppercase tracking-[0.3em] text-brand-gold">
                    Leitura guiada
                </p>
                <h2 className="mt-4 text-[1.95rem] font-black leading-[1.02]">
                    Antes de falar em preço, entenda o caminho.
                </h2>
                <p className="mt-4 text-sm leading-7 text-white/68">
                    Cada sorriso tem uma história. Aqui, você organiza o contexto para decidir com mais segurança.
                </p>

                <div className="mt-6 space-y-4">
                    {flow.map((item) => (
                        <div
                            key={item.eyebrow}
                            className="rounded-[24px] border border-white/8 bg-white/[0.04] px-4 py-4"
                        >
                            <p className="text-[10px] font-black uppercase tracking-[0.24em] text-brand-gold">
                                {item.eyebrow}
                            </p>
                            <p className="mt-3 text-lg font-bold leading-tight text-white">
                                {item.title}
                            </p>
                            <p className="mt-3 text-sm leading-7 text-white/58">
                                {item.copy}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="mt-6 grid gap-3">
                    <Link
                        href="/inicio#precos"
                        className="flex min-h-12 items-center justify-center gap-2 rounded-full bg-brand-gold px-5 text-center text-[12px] font-black uppercase tracking-[0.2em] text-white"
                    >
                        Ver leitura guiada
                        <ArrowRight className="h-4 w-4" />
                    </Link>
                    <Link
                        href="/implante-dentario-betim"
                        className="flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-5 text-center text-[12px] font-black uppercase tracking-[0.2em] text-white"
                    >
                        Entender implante em Betim
                        <CircleCheckBig className="h-4 w-4 text-brand-gold" />
                    </Link>
                </div>
            </div>
        </section>
    );
}
