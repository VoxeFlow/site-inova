'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight, CheckCircle2, CircleDollarSign } from 'lucide-react';

const WHATSAPP_NUMBER = '553126260038';

const TREATMENT_OPTIONS = [
    {
        key: 'implante',
        label: 'Implante dentário',
        hint: 'Reabilitação oral',
    },
    {
        key: 'alinhadores',
        label: 'Alinhadores / Invisalign',
        hint: 'Ortodontia discreta',
    },
    {
        key: 'clareamento',
        label: 'Clareamento / estética',
        hint: 'Estética dental',
    },
    {
        key: 'nao_sei',
        label: 'Ainda não sei',
        hint: 'Preciso de orientação',
    },
];

const DOUBT_OPTIONS = [
    { key: 'valor', label: 'Quero saber valor' },
    { key: 'solucao', label: 'Quero saber se meu caso tem solução' },
    { key: 'medo', label: 'Tenho medo do tratamento' },
    { key: 'tempo', label: 'Quero entender o tempo' },
];

const INVESTMENT_CARDS = [
    {
        key: 'implante',
        title: 'Implante dentário',
        installment: 'Parcelas a partir de R$ 150*',
        copy: 'Para quem perdeu um ou mais dentes e busca recuperar mastigação, segurança e estética.',
    },
    {
        key: 'alinhadores',
        title: 'Invisalign / alinhadores invisíveis',
        installment: 'Parcelas a partir de R$ 160*',
        copy: 'Para quem deseja alinhar os dentes com mais discrição, previsibilidade e conforto.',
    },
    {
        key: 'clareamento',
        title: 'Clareamento dental',
        installment: 'Parcelas a partir de R$ 90*',
        copy: 'Para quem busca melhorar a cor do sorriso com avaliação segura e orientação profissional.',
    },
];

const CONTEXT_RESPONSES = {
    implante: {
        valor:
            'Na Clínica Inova, tratamentos com implante podem começar com parcelas a partir de R$ 150*. O valor final depende da quantidade de dentes, condição óssea, exames e planejamento cirúrgico.',
        solucao:
            'Na maioria dos casos, existe solução para implante dentário. O que muda é a estratégia: às vezes o caso é direto, em outros pode exigir etapa complementar para garantir segurança e estabilidade.',
        medo:
            'Esse receio é comum. Com anestesia local, planejamento adequado e condução cuidadosa, o procedimento costuma ser mais tranquilo do que a maioria das pessoas imagina.',
        tempo:
            'O tempo varia conforme o seu caso, especialmente pela condição óssea e pelas etapas necessárias. A avaliação mostra com clareza o caminho e o cronograma realista para o seu tratamento.',
    },
    alinhadores: {
        valor:
            'Tratamentos com alinhadores invisíveis e Invisalign podem começar com parcelas a partir de R$ 160*. O investimento depende da complexidade dos movimentos, tempo estimado e tipo de aparelho indicado.',
        solucao:
            'Muitos casos têm boa resposta com alinhadores invisíveis, incluindo Invisalign. A avaliação mostra se o seu caso é indicado e qual abordagem oferece melhor previsibilidade.',
        medo:
            'É natural ter dúvida no início. Em geral, alinhadores são uma opção confortável e discreta, com adaptação progressiva e acompanhamento para manter segurança durante o processo.',
        tempo:
            'O tempo depende da complexidade do alinhamento e da resposta individual. Com planejamento correto, você entende as etapas e consegue visualizar melhor o ritmo do tratamento.',
    },
    clareamento: {
        valor:
            'O clareamento dental pode começar com parcelas a partir de R$ 90*. A indicação depende da cor inicial, sensibilidade, restaurações existentes e expectativa de resultado.',
        solucao:
            'Na maioria dos casos é possível melhorar bastante o sorriso, mas cada pessoa responde de um jeito. A avaliação define a técnica ideal para chegar a um resultado natural.',
        medo:
            'Se existe receio de sensibilidade, isso deve entrar no plano desde o início. Com técnica correta e acompanhamento, o clareamento pode ser feito com mais conforto e segurança.',
        tempo:
            'O tempo varia entre abordagens e objetivos estéticos. A avaliação ajuda a equilibrar resultado, conforto e manutenção para uma evolução previsível.',
    },
    nao_sei: {
        valor:
            'Começar pela dúvida de preço é normal. Sem avaliação, porém, o número pode enganar. O melhor primeiro passo é entender sua necessidade para só depois comparar investimento com critério.',
        solucao:
            'Mesmo sem saber exatamente o tratamento, a avaliação inicial organiza as possibilidades e mostra qual caminho faz mais sentido para o seu momento.',
        medo:
            'Muita gente chega assim. O foco da primeira conversa é justamente ouvir sua história, reduzir inseguranças e explicar os próximos passos com clareza.',
        tempo:
            'Sem identificar a necessidade principal, qualquer prazo vira suposição. A avaliação define prioridades e desenha um plano mais realista para você.',
    },
};

const INVESTMENT_FACTORS = {
    implante: ['Quantidade de dentes', 'Condição óssea', 'Exames e planejamento cirúrgico'],
    alinhadores: ['Complexidade dos movimentos', 'Tempo estimado', 'Tecnologia indicada (incluindo Invisalign)'],
    clareamento: ['Cor inicial', 'Sensibilidade', 'Técnica e número de sessões'],
    nao_sei: ['Objetivo principal do sorriso', 'Condição clínica atual', 'Prioridades de tempo e investimento'],
};

function getContextResponse(treatment, doubt) {
    if (!treatment || !doubt) return '';
    return CONTEXT_RESPONSES[treatment]?.[doubt] || CONTEXT_RESPONSES.nao_sei.valor;
}

export default function PricingEstimator() {
    const [selectedTreatment, setSelectedTreatment] = useState(null);
    const [selectedDoubt, setSelectedDoubt] = useState(null);

    const step = !selectedTreatment ? 1 : !selectedDoubt ? 2 : 3;

    const treatmentLabel = TREATMENT_OPTIONS.find((item) => item.key === selectedTreatment)?.label;
    const doubtLabel = DOUBT_OPTIONS.find((item) => item.key === selectedDoubt)?.label;
    const contextualResponse = getContextResponse(selectedTreatment, selectedDoubt);
    const factors = selectedTreatment ? INVESTMENT_FACTORS[selectedTreatment] : [];

    const whatsappHref = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
        `Olá! Quero agendar uma avaliação. Estou buscando ${treatmentLabel || 'orientação sobre tratamento'} e minha principal dúvida é: ${doubtLabel || 'entender meu caso'}.`,
    )}`;

    const handleBack = () => {
        if (step === 3) {
            setSelectedDoubt(null);
            return;
        }

        if (step === 2) {
            setSelectedTreatment(null);
        }
    };

    const resetFlow = () => {
        setSelectedTreatment(null);
        setSelectedDoubt(null);
    };

    return (
        <section id="precos" className="relative overflow-hidden bg-[linear-gradient(180deg,#0f0f0f,#151515)] py-20 text-white md:py-28">
            <div className="absolute inset-x-0 top-0 h-72 bg-[radial-gradient(circle_at_top,rgba(197,160,89,0.16),transparent_42%)]" />
            <div className="relative z-10 mx-auto max-w-7xl px-5 md:px-6">
                <div className="mx-auto mb-12 max-w-4xl text-center md:mb-16">
                    <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.24em] text-brand-gold">
                        <CircleDollarSign className="h-4 w-4" /> Leitura guiada de investimento
                    </div>
                    <h2 className="mt-7 text-3xl font-black leading-[1.02] md:mt-8 md:text-5xl md:leading-tight">
                        Antes de falar em preço, entenda o caminho do seu tratamento.
                    </h2>
                    <p className="mx-auto mt-5 max-w-3xl text-sm leading-7 text-white/62 md:mt-6 md:text-lg md:leading-8">
                        Cada sorriso tem uma história. Em poucos passos, você entende quais fatores influenciam o investimento e qual tipo de avaliação faz sentido para o seu caso.
                    </p>
                </div>

                <div className="mx-auto mb-8 max-w-5xl rounded-[28px] border border-white/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))] p-5 shadow-[0_24px_80px_rgba(0,0,0,0.18)] md:mb-10 md:rounded-[34px] md:p-8">
                    <h3 className="text-2xl font-black leading-tight text-white md:text-3xl">
                        Quanto custa um implante dentário?
                    </h3>
                    <p className="mt-4 max-w-4xl text-sm leading-7 text-white/62 md:text-base md:leading-8">
                        O valor de um implante dentário pode variar de acordo com a quantidade de dentes, condição óssea, exames necessários e planejamento do caso. Na Clínica Inova, alguns tratamentos podem começar com parcelas a partir de R$150/mês*.
                    </p>
                    <ul className="mt-5 grid gap-3 md:grid-cols-2">
                        <li className="flex items-start gap-3 text-sm leading-7 text-white/64">
                            <CheckCircle2 className="mt-1 h-4 w-4 text-brand-gold" />
                            <span>quantidade de dentes a substituir</span>
                        </li>
                        <li className="flex items-start gap-3 text-sm leading-7 text-white/64">
                            <CheckCircle2 className="mt-1 h-4 w-4 text-brand-gold" />
                            <span>condição óssea</span>
                        </li>
                        <li className="flex items-start gap-3 text-sm leading-7 text-white/64">
                            <CheckCircle2 className="mt-1 h-4 w-4 text-brand-gold" />
                            <span>necessidade de exames</span>
                        </li>
                        <li className="flex items-start gap-3 text-sm leading-7 text-white/64">
                            <CheckCircle2 className="mt-1 h-4 w-4 text-brand-gold" />
                            <span>tipo de planejamento</span>
                        </li>
                        <li className="flex items-start gap-3 text-sm leading-7 text-white/64 md:col-span-2">
                            <CheckCircle2 className="mt-1 h-4 w-4 text-brand-gold" />
                            <span>etapa protética final</span>
                        </li>
                    </ul>
                    <a
                        href="https://wa.me/553126260038"
                        className="mt-6 inline-flex min-h-12 items-center justify-center rounded-full bg-brand-gold px-6 text-center text-sm font-bold text-white transition hover:bg-brand-gold-dark"
                    >
                        Quero avaliar meu caso
                    </a>
                </div>

                <div className="mx-auto mb-8 max-w-5xl rounded-[28px] border border-white/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))] p-5 shadow-[0_24px_80px_rgba(0,0,0,0.18)] md:mb-10 md:rounded-[34px] md:p-8">
                    <h3 className="text-2xl font-black leading-tight text-white md:text-3xl">Investimento inicial</h3>
                    <p className="mt-3 max-w-4xl text-sm leading-7 text-white/62 md:text-base md:leading-8">
                        Alguns tratamentos podem começar com parcelas acessíveis, mas o valor final depende da avaliação clínica, exames e planejamento indicado para cada caso.
                    </p>

                    <div className="mt-6 grid gap-3 md:grid-cols-3 md:gap-4">
                        {INVESTMENT_CARDS.map((card) => (
                            <article
                                key={card.key}
                                className="rounded-[20px] border border-white/10 bg-white/[0.03] px-4 py-5 md:rounded-[24px] md:px-5 md:py-6"
                            >
                                <p className="text-[10px] font-black uppercase tracking-[0.22em] text-brand-gold">
                                    {card.title}
                                </p>
                                <p className="mt-3 text-lg font-black leading-tight text-white">
                                    {card.installment}
                                </p>
                                <p className="mt-3 text-sm leading-7 text-white/60">
                                    {card.copy}
                                </p>
                            </article>
                        ))}
                    </div>

                    <p className="mt-5 text-xs leading-6 text-white/44">
                        *Valores iniciais estimados. O investimento final depende da avaliação clínica, exames, complexidade do caso e planejamento indicado.
                    </p>
                    <p className="mt-2 text-xs leading-6 text-white/44">
                        *Valores iniciais estimados e sujeitos à avaliação. Esta informação não substitui consulta profissional.
                    </p>
                    <p className="mt-2 text-xs leading-6 text-white/30">
                        implante dentário a partir de parcelas de R$ 150 • Invisalign a partir de parcelas de R$ 160 • clareamento dental a partir de parcelas de R$ 90
                    </p>
                </div>

                <div className="mx-auto max-w-5xl rounded-[28px] border border-white/8 bg-white/5 p-5 shadow-[0_24px_80px_rgba(0,0,0,0.24)] backdrop-blur-xl md:rounded-[34px] md:p-8">
                    <p className="mb-4 text-xs font-black uppercase tracking-[0.2em] text-white/34">
                        Agora entenda por que o valor pode variar no seu caso
                    </p>
                    <div className="mb-6 flex items-center justify-between border-b border-white/8 pb-5 md:pb-6">
                        <p className="text-[11px] font-black uppercase tracking-[0.24em] text-white/36">Passo {step} de 3</p>
                        {step > 1 ? (
                            <button
                                onClick={handleBack}
                                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-white/44 transition hover:text-white"
                            >
                                <ArrowLeft className="h-4 w-4" /> Voltar
                            </button>
                        ) : null}
                    </div>

                    <AnimatePresence mode="wait">
                        {step === 1 ? (
                            <motion.div
                                key="step-1"
                                initial={{ opacity: 0, y: 16 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{ duration: 0.3, ease: 'easeOut' }}
                            >
                                <h3 className="text-2xl font-black leading-tight text-white md:text-3xl">
                                    Passo 1 — O que você está buscando?
                                </h3>
                                <p className="mt-3 max-w-2xl text-sm leading-7 text-white/56 md:text-base">
                                    A maioria das pessoas começa pesquisando preço. Aqui, o objetivo é organizar o contexto primeiro para evitar comparações injustas.
                                </p>
                                <div className="mt-8 grid gap-3 md:grid-cols-2">
                                    {TREATMENT_OPTIONS.map((option) => (
                                        <button
                                            key={option.key}
                                            onClick={() => setSelectedTreatment(option.key)}
                                            className="group rounded-[20px] border border-white/8 bg-white/[0.03] px-4 py-4 text-left transition hover:border-brand-gold hover:bg-white/[0.08] md:rounded-[24px] md:px-5 md:py-5"
                                        >
                                            <p className="text-[10px] font-black uppercase tracking-[0.24em] text-white/35 group-hover:text-brand-gold">
                                                {option.hint}
                                            </p>
                                            <p className="mt-2 text-lg font-bold text-white">{option.label}</p>
                                        </button>
                                    ))}
                                </div>
                            </motion.div>
                        ) : null}

                        {step === 2 ? (
                            <motion.div
                                key="step-2"
                                initial={{ opacity: 0, y: 16 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{ duration: 0.3, ease: 'easeOut' }}
                            >
                                <h3 className="text-2xl font-black leading-tight text-white md:text-3xl">
                                    Passo 2 — Qual é sua principal dúvida?
                                </h3>
                                <p className="mt-3 max-w-2xl text-sm leading-7 text-white/56 md:text-base">
                                    Preço sem avaliação pode enganar. Quando entendemos a dúvida principal, fica mais fácil orientar o próximo passo com segurança.
                                </p>
                                <div className="mt-8 grid gap-3 md:grid-cols-2">
                                    {DOUBT_OPTIONS.map((option) => (
                                        <button
                                            key={option.key}
                                            onClick={() => setSelectedDoubt(option.key)}
                                            className="group rounded-[20px] border border-white/8 bg-white/[0.03] px-4 py-4 text-left transition hover:border-brand-gold hover:bg-white/[0.08] md:rounded-[24px] md:px-5 md:py-5"
                                        >
                                            <p className="text-base font-bold text-white">{option.label}</p>
                                            <div className="mt-3 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-white/34 group-hover:text-brand-gold">
                                                Continuar <ArrowRight className="h-4 w-4" />
                                            </div>
                                        </button>
                                    ))}
                                </div>
                            </motion.div>
                        ) : null}

                        {step === 3 ? (
                            <motion.div
                                key="step-3"
                                initial={{ opacity: 0, y: 16 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{ duration: 0.35, ease: 'easeOut' }}
                            >
                                <h3 className="text-2xl font-black leading-tight text-white md:text-3xl">
                                    Passo 3 — Resposta para o seu momento
                                </h3>

                                <div className="mt-5 flex flex-wrap items-center gap-2">
                                    <span className="rounded-full border border-brand-gold/40 bg-brand-gold/12 px-3 py-1 text-[11px] font-black uppercase tracking-[0.18em] text-brand-gold">
                                        {treatmentLabel}
                                    </span>
                                    <span className="rounded-full border border-white/12 bg-white/[0.03] px-3 py-1 text-[11px] font-black uppercase tracking-[0.18em] text-white/70">
                                        {doubtLabel}
                                    </span>
                                </div>

                                <div className="mt-6 rounded-[24px] border border-white/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(197,160,89,0.08))] px-5 py-6 md:px-6 md:py-7">
                                    <p className="text-[11px] font-black uppercase tracking-[0.24em] text-brand-gold">Leitura contextual</p>
                                    <p className="mt-4 text-sm leading-7 text-white/82 md:text-base md:leading-8">{contextualResponse}</p>
                                </div>

                                <div className="mt-6 rounded-[22px] border border-white/8 bg-white/[0.03] p-5 md:p-6">
                                    <p className="text-[11px] font-black uppercase tracking-[0.22em] text-white/34">O que normalmente influencia o investimento</p>
                                    <ul className="mt-4 space-y-3">
                                        {factors.map((factor) => (
                                            <li key={factor} className="flex items-start gap-3 text-sm leading-7 text-white/62">
                                                <CheckCircle2 className="mt-1 h-4 w-4 text-brand-gold" />
                                                <span>{factor}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="mt-8 grid gap-3">
                                    <a
                                        href={whatsappHref}
                                        className="flex w-full items-center justify-center gap-2 rounded-full bg-brand-gold px-6 py-4 text-center text-sm font-bold text-white transition hover:bg-brand-gold-dark"
                                    >
                                        Agendar avaliação pelo WhatsApp <ArrowRight className="h-4 w-4" />
                                    </a>
                                    <p className="px-4 text-center text-sm leading-7 text-white/52">
                                        Em uma conversa inicial, nossa equipe entende sua necessidade e orienta o melhor próximo passo.
                                    </p>
                                    <button
                                        type="button"
                                        onClick={resetFlow}
                                        className="mx-auto text-[11px] font-black uppercase tracking-[0.2em] text-white/36 transition hover:text-white/72"
                                    >
                                        Refazer leitura
                                    </button>
                                </div>
                            </motion.div>
                        ) : null}
                    </AnimatePresence>
                </div>

                <p className="mx-auto mt-6 max-w-5xl text-center text-xs leading-6 text-white/38">
                    *Valores iniciais estimados e sujeitos à avaliação. Esta informação não substitui consulta profissional.
                </p>
            </div>
        </section>
    );
}
