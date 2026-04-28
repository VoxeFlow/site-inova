import Image from 'next/image';

import { getPatientGalleryImages } from '@/lib/patient-gallery';

function buildMiniStories(images) {
    const preferred = ['Amanda', 'Amauri', 'Ana Maria', 'Charles'];

    const selected = preferred
        .map((name) => images.find((item) => item.name === name))
        .filter(Boolean);

    if (selected.length >= 4) {
        return selected.slice(0, 4);
    }

    const remaining = images.filter((item) => !selected.some((picked) => picked.filename === item.filename));
    return [...selected, ...remaining].slice(0, 4);
}

const MINI_STORY_COPY = {
    Amanda: {
        category: 'Planejamento individual',
        line: 'Há escolhas que amadurecem com calma e precisam de orientação clara.',
    },
    Amauri: {
        category: 'Jornada de cuidado',
        line: 'Quando o cuidado é bem conduzido, a segurança aparece antes mesmo do resultado.',
    },
    'Ana Maria': {
        category: 'Cuidado com o sorriso',
        line: 'Cada paciente chega com uma história, uma dúvida e um motivo para buscar ajuda.',
    },
    Charles: {
        category: 'Atendimento odontológico',
        line: 'A decisão fica mais leve quando existe escuta, clareza e acompanhamento.',
    },
};

export default function ImplantSocialProof() {
    const gallery = getPatientGalleryImages();

    if (!gallery.length) {
        return null;
    }

    const featured = gallery.find((item) => item.featured) ?? gallery[0];
    const miniStories = buildMiniStories(gallery.filter((item) => item.filename !== featured.filename));

    return (
        <section className="bg-[linear-gradient(180deg,#0f0f10,#161617)] py-16 text-white md:py-22">
            <div className="mx-auto max-w-7xl px-5 md:px-6">
                <div className="mx-auto max-w-3xl text-center">
                    <p className="text-xs font-black uppercase tracking-[0.32em] text-brand-gold">Histórias reais</p>
                    <h2 className="mt-5 text-3xl font-black leading-tight md:text-5xl">
                        Pacientes que confiaram no cuidado da Clínica Inova
                    </h2>
                    <p className="mt-5 text-sm leading-7 text-white/66 md:text-base md:leading-8">
                        Cada caso tem uma história. Aqui, mostramos momentos reais de pacientes que passaram pela clínica, sem prometer resultados e sem exageros.
                    </p>
                </div>

                <article className="mt-9 grid gap-5 rounded-[30px] border border-white/10 bg-white/[0.03] p-4 shadow-[0_26px_90px_rgba(0,0,0,0.35)] md:mt-12 md:grid-cols-[1.15fr_0.85fr] md:gap-8 md:p-6 lg:p-8">
                    <div className="relative overflow-hidden rounded-[24px] border border-white/10 bg-black/20">
                        <div className="relative h-72 md:h-[30rem]">
                            <Image
                                src={featured.src}
                                alt={featured.alt}
                                fill
                                sizes="(max-width: 1024px) 100vw, 55vw"
                                className="object-cover object-top"
                                priority
                            />
                            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/50 to-transparent" />
                        </div>
                    </div>

                    <div className="flex flex-col justify-between rounded-[24px] border border-white/10 bg-white/[0.02] p-5 md:p-6">
                        <div>
                            <p className="text-[10px] font-black uppercase tracking-[0.22em] text-brand-gold">
                                {featured.eyebrow ?? 'Planejamento individual'}
                            </p>
                            <h3 className="mt-3 text-2xl font-black leading-tight md:text-3xl">{featured.name}</h3>
                            <p className="mt-4 text-base font-semibold leading-7 text-white/90 md:text-lg md:leading-8">
                                {featured.title ?? 'Algumas novas fases começam com mais leveza do que alarde.'}
                            </p>
                            <p className="mt-4 text-sm leading-7 text-white/72 md:text-base md:leading-8">
                                {featured.story ?? 'Cada jornada começa com escuta, planejamento e clareza sobre cada etapa.'}
                            </p>
                        </div>

                        <blockquote className="mt-6 rounded-[20px] border border-brand-gold/30 bg-brand-gold/10 px-4 py-4 text-sm leading-7 text-white/92 md:text-base md:leading-8">
                            “{featured.quote ?? 'Não se trata de mudar quem a pessoa é. Trata-se de conduzir o cuidado com mais precisão, harmonia e confiança.'}”
                        </blockquote>
                    </div>
                </article>

                <div className="mt-6 grid gap-3 md:mt-7 md:grid-cols-2 lg:grid-cols-4">
                    {miniStories.map((story) => (
                        <article
                            key={story.filename}
                            className="rounded-[20px] border border-white/10 bg-white/[0.04] p-3 transition duration-300 hover:border-brand-gold/45 hover:bg-white/[0.06]"
                        >
                            <div className="flex items-center gap-3">
                                <div className="relative h-16 w-16 overflow-hidden rounded-xl border border-white/12">
                                    <Image
                                        src={story.src}
                                        alt={story.alt}
                                        fill
                                        sizes="64px"
                                        className="object-cover object-top"
                                    />
                                </div>
                                <div>
                                    <p className="text-sm font-black text-white">{story.name}</p>
                                    <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-brand-gold/90">
                                        {MINI_STORY_COPY[story.name]?.category ?? 'Jornada de cuidado'}
                                    </p>
                                </div>
                            </div>
                            <p className="mt-3 text-xs leading-6 text-white/68 md:text-sm md:leading-7">
                                {MINI_STORY_COPY[story.name]?.line ??
                                    'Há escolhas que amadurecem com calma e precisam de orientação clara.'}
                            </p>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
