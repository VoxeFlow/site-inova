import Link from 'next/link';

const strategicPages = [
    {
        href: '/alinhador-invisivel-betim',
        eyebrow: 'Ortodontia discreta',
        title: 'Invisalign',
        copy: 'Alinhamento com discrição.',
    },
    {
        href: '/clareamento-dental-betim',
        eyebrow: 'Estética dental',
        title: 'Clareamento dental',
        copy: 'Melhora de cor com segurança.',
    },
    {
        href: '/contato',
        eyebrow: 'Cuidado contínuo',
        title: 'Odontologia clínica',
        copy: 'Prevenção e manutenção contínua.',
    },
];

export default function AuthorityHub() {
    return (
        <section className="hidden bg-[#f7f4ef] py-18 md:block md:py-24">
            <div className="max-w-7xl mx-auto px-5 md:px-6">
                <div className="max-w-3xl mb-10 md:mb-14">
                    <p className="text-xs font-black uppercase tracking-[0.34em] text-brand-gold">Complementos</p>
                    <h2 className="mt-5 text-3xl md:text-5xl font-black leading-tight text-txt-primary">
                        Outros tratamentos
                    </h2>
                    <p className="mt-5 text-base leading-7 text-gray-600 md:text-lg md:leading-8">
                        Depois da avaliação, outros cuidados podem complementar seu planejamento, como alinhadores, clareamento ou odontologia clínica.
                    </p>
                </div>

                <div className="grid gap-4 lg:grid-cols-3">
                    {strategicPages.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className="rounded-[24px] border border-black/8 bg-white px-5 py-6 shadow-[0_16px_60px_rgba(0,0,0,0.04)] transition hover:border-brand-gold hover:-translate-y-0.5 md:rounded-[30px] md:px-7 md:py-8"
                        >
                            <p className="text-xs font-black uppercase tracking-[0.24em] text-brand-gold">{item.eyebrow}</p>
                            <h3 className="mt-4 text-[1.55rem] font-black leading-tight text-txt-primary md:text-2xl">{item.title}</h3>
                            <p className="mt-4 text-sm leading-7 text-gray-600 md:text-base md:leading-8">{item.copy}</p>
                            <p className="mt-6 text-sm font-black uppercase tracking-[0.16em] text-gray-400">Abrir página</p>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
