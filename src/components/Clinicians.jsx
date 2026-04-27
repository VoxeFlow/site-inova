'use client';
import Image from 'next/image';
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowRight, User2 } from 'lucide-react';

const TEAM = [
    {
        name: "Dr. Jefferson Reis",
        role: "Invisalign Doctor",
        focus: "Ortodontia invisível e planejamento digital",
        img: "/assets/Dr%20Jeff_edited.avif",
        imageClass: "object-[center_top]",
    },
    {
        name: "Dra. Rose Neves",
        role: "Ortodontia & ATM",
        focus: "Mordida, alinhamento e equilíbrio funcional",
        img: "/assets/Dra%20Rose.JPG",
        imageClass: "object-[center_12%]",
    },
    {
        name: "Dr. Lucas Vilela",
        role: "Implantodontista",
        focus: "Implantes e reabilitação com mais previsibilidade",
        img: "/assets/Dr%20Lucas%20Vilela.jpeg",
        imageClass: "object-[center_18%]",
    },
    {
        name: "Dra. Reysla Soares",
        role: "Ortodontia",
        focus: "Correção ortodôntica com leitura individual",
        img: "/assets/Dra%20Reysla.jpeg",
        imageClass: "object-[center_14%]",
    },
    {
        name: "Dr. Arthur Xavier",
        role: "Reabilitação Oral",
        focus: "Planejamento funcional e estética ao sorrir",
        img: "/assets/Dr%20Arthur.jpeg",
        imageClass: "object-[center_18%]",
    },
    {
        name: "Dra. Carolina Vilela",
        role: "Clínica Geral",
        focus: "Cuidado contínuo, prevenção e rotina clínica",
        img: "/assets/Dra%20Carolina%20Vilela.jpeg",
        imageClass: "object-[center_14%]",
    },
];

export default function Clinicians() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section id="corpo-clinico" className="bg-gray-50 py-20 md:py-32">
            <div className="max-w-7xl mx-auto px-5 md:px-6" ref={ref}>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    className="mb-12 max-w-4xl md:mb-20"
                >
                    <p className="text-xs font-black uppercase tracking-[0.34em] text-brand-gold">Corpo clínico</p>
                    <h2 className="mt-5 text-3xl md:text-5xl font-black text-txt-primary leading-tight">
                        Equipe para quem quer mais do que atendimento. Quer critério.
                    </h2>
                    <p className="mt-5 max-w-3xl text-base leading-7 text-gray-600 md:mt-6 md:text-lg md:leading-8">
                        Cada decisão importante em odontologia depende de quem lê o caso, conduz o plano e sustenta o resultado depois. É por isso que a equipe precisa comunicar confiança antes mesmo da avaliação.
                    </p>
                </motion.div>
                <motion.div
                    className="grid gap-5 md:grid-cols-2 md:gap-8 lg:grid-cols-3 lg:gap-10"
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    variants={{
                        visible: { transition: { staggerChildren: 0.1 } }
                    }}
                >
                    {TEAM.map((member, idx) => (
                        <motion.div
                            key={idx}
                            variants={{
                                hidden: { opacity: 0, y: 20 },
                                visible: { opacity: 1, y: 0 }
                            }}
                            className="group overflow-hidden rounded-[26px] border border-black/8 bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-[0_20px_70px_rgba(0,0,0,0.08)] md:rounded-[32px]"
                        >
                            <div className="relative h-[21rem] overflow-hidden bg-[linear-gradient(180deg,#f8f8f8,#efefef)] md:h-[24rem]">
                                {member.img ? (
                                    <Image
                                        src={member.img}
                                        alt={member.name}
                                        fill
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        className={`object-cover grayscale-[0.08] group-hover:grayscale-0 group-hover:scale-[1.02] transition duration-700 ${member.imageClass || 'object-top'}`}
                                    />
                                ) : (
                                    <div className="flex h-full w-full flex-col items-center justify-center bg-[radial-gradient(circle_at_top,rgba(197,160,89,0.18),transparent_42%)]">
                                        <div className="flex h-24 w-24 items-center justify-center rounded-full border border-black/8 bg-white shadow-sm">
                                            <User2 className="w-12 h-12 text-gray-300" />
                                        </div>
                                        <p className="mt-5 text-xs font-black uppercase tracking-[0.22em] text-gray-400">
                                            Foto em atualização
                                        </p>
                                    </div>
                                )}
                                <div className="absolute inset-x-0 bottom-0 h-24 bg-[linear-gradient(180deg,transparent,rgba(17,17,17,0.08))]" />
                            </div>
                            <div className="p-5 md:p-6">
                                <p className="text-[11px] font-black uppercase tracking-[0.24em] text-brand-gold">
                                    {member.role}
                                </p>
                                <h4 className="mt-3 text-[1.6rem] font-black text-txt-primary md:text-2xl">{member.name}</h4>
                                <p className="mt-3 text-sm leading-7 text-gray-600 md:text-base">{member.focus}</p>
                                <div className="mt-6 inline-flex items-center gap-2 text-[11px] font-black uppercase tracking-[0.18em] text-gray-400 transition group-hover:text-brand-gold">
                                    Conhecer profissional
                                    <ArrowRight className="w-4 h-4" />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
