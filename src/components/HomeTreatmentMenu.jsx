import Link from 'next/link';
import { ArrowUpRight, SmilePlus, Sparkles, ShieldCheck } from 'lucide-react';

const treatments = [
    {
        label: '01 · Função',
        title: 'Implante dentário',
        copy: 'Para recuperar segurança ao mastigar com planejamento e acompanhamento em cada etapa.',
        href: '/implante-dentario-betim',
        Icon: ShieldCheck,
    },
    {
        label: '02 · Discrição',
        title: 'Alinhadores',
        copy: 'Para alinhar o sorriso com menos interferência na rotina e uma indicação individual.',
        href: '/alinhadores-invisiveis-betim',
        Icon: Sparkles,
    },
    {
        label: '03 · Estética',
        title: 'Cuidado estético',
        copy: 'Para valorizar o sorriso com naturalidade, sem transformar cada caso em uma fórmula.',
        href: '/clareamento-dental-betim',
        Icon: SmilePlus,
    },
];

export default function HomeTreatmentMenu() {
    return (
        <section id="tratamentos" className="bg-white py-24 md:py-32">
            <div className="mx-auto max-w-7xl px-5 md:px-10">
                <div className="grid gap-10 md:grid-cols-[0.72fr_1.28fr] md:items-end">
                    <div>
                        <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-brand-gold">Encontre seu próximo passo</p>
                        <h2 className="mt-5 max-w-lg text-4xl font-normal leading-[0.98] tracking-[-0.04em] md:text-6xl">O cuidado começa<br /><span className="text-brand-gold">pelo que importa.</span></h2>
                    </div>
                    <p className="max-w-xl text-base leading-8 text-gray-600 md:text-lg">A necessidade pode ser diferente, mas a forma de começar é a mesma: entender o seu caso antes de indicar qualquer caminho.</p>
                </div>

                <div className="mt-12 grid gap-3 md:grid-cols-3">
                    {treatments.map(({ label, title, copy, href, Icon }) => (
                        <Link key={title} href={href} className="group rounded-3xl border border-black/8 bg-[#f7f4ef] p-7 transition duration-500 hover:-translate-y-1 hover:bg-white hover:shadow-[0_18px_50px_rgba(0,0,0,0.07)]">
                            <div className="flex items-start justify-between gap-4">
                                <Icon className="h-6 w-6 text-brand-gold" />
                                <ArrowUpRight className="h-5 w-5 text-gray-400 transition duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-brand-gold" />
                            </div>
                            <p className="mt-12 text-[10px] font-medium uppercase tracking-[0.24em] text-brand-gold">{label}</p>
                            <h3 className="mt-3 text-2xl font-normal tracking-[-0.03em]">{title}</h3>
                            <p className="mt-3 text-sm leading-7 text-gray-500">{copy}</p>
                            <span className="mt-7 inline-block text-xs font-medium uppercase tracking-[0.16em] text-txt-primary">Conhecer opção</span>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
