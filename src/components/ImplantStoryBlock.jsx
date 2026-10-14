import { SmilePlus, ShieldCheck, BadgeAlert } from 'lucide-react';

const cards = [
    {
        title: 'Voltar a mastigar com segurança',
        icon: ShieldCheck,
    },
    {
        title: 'Alinhar o sorriso com discrição',
        icon: SmilePlus,
    },
    {
        title: 'Entender antes de decidir',
        icon: BadgeAlert,
    },
];

export default function ImplantStoryBlock() {
    return (
        <section className="bg-[#f7f4ef] py-14 md:py-20">
            <div className="mx-auto max-w-6xl px-5 md:px-6">
                <div className="mx-auto max-w-3xl text-center">
                    <p className="text-xs font-medium uppercase tracking-[0.3em] text-brand-gold">Cada sorriso tem uma história</p>
                    <h2 className="mt-4 text-3xl font-black leading-tight text-txt-primary md:text-5xl">
                        O tratamento começa pelo que você quer viver melhor
                    </h2>
                    <p className="mt-4 text-sm leading-7 text-gray-600 md:text-base md:leading-8">
                        Pode ser recuperar a função, sorrir com mais liberdade ou encontrar uma forma discreta de cuidar dos dentes. A Clínica Inova começa entendendo a sua necessidade antes de falar em procedimento.
                    </p>
                </div>

                <div className="mt-8 grid gap-3 md:mt-10 md:grid-cols-3">
                    {cards.map((card) => {
                        const Icon = card.icon;
                        return (
                            <article
                                key={card.title}
                                className="rounded-[22px] border border-black/8 bg-white px-5 py-5 shadow-[0_14px_40px_rgba(0,0,0,0.04)] transition duration-300 hover:-translate-y-0.5 hover:border-brand-gold/35"
                            >
                                <Icon className="h-5 w-5 text-brand-gold" />
                                <h3 className="mt-3 text-base font-black leading-tight text-txt-primary">{card.title}</h3>
                            </article>
                        );
                    })}
                </div>

                <div className="mt-7 text-center">
                    <a
                        href="https://wa.me/553126260038"
                        className="inline-flex min-h-12 items-center justify-center rounded-full border border-txt-primary px-6 text-center text-xs font-black uppercase tracking-[0.16em] text-txt-primary transition hover:bg-txt-primary hover:text-white"
                    >
                        Entender meu caso
                    </a>
                </div>
            </div>
        </section>
    );
}
