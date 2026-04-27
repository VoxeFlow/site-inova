'use client';
import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, BadgeDollarSign, CheckCircle2, CircleHelp } from 'lucide-react';

const WHATSAPP_NUMBER = '553126260038';

const TREATMENTS = {
    implante: {
        label: 'Implante dentário',
        baseRange: [1800, 4200],
        prompt: 'Quero entender o valor estimado de implante dentário.',
        factors: [
            'Quantidade de implantes necessários',
            'Necessidade de enxerto ou etapas preparatórias',
            'Tipo de reabilitação planejada',
        ],
    },
    alinhadores: {
        label: 'Alinhadores invisíveis',
        baseRange: [4500, 14000],
        prompt: 'Quero entender o valor estimado de alinhadores invisíveis.',
        factors: [
            'Complexidade do alinhamento',
            'Marca e planejamento digital utilizados',
            'Tempo previsto de tratamento',
        ],
    },
    clareamento: {
        label: 'Clareamento dental',
        baseRange: [900, 2800],
        prompt: 'Quero entender o valor estimado de clareamento dental.',
        factors: [
            'Técnica indicada para o caso',
            'Condição clínica antes do tratamento',
            'Quantidade de sessões e manutenção',
        ],
    },
    estetica: {
        label: 'Facetas e estética dental',
        baseRange: [1200, 4800],
        prompt: 'Quero entender o valor estimado de facetas e estética dental.',
        factors: [
            'Número de dentes envolvidos',
            'Material e acabamento do tratamento',
            'Objetivo estético e planejamento do sorriso',
        ],
    },
};

const PAYMENT_OPTIONS = {
    vista: { label: 'À vista', multiplier: 0.94 },
    parcelado: { label: 'Parcelado', multiplier: 1 },
    premium: { label: 'Planejamento completo', multiplier: 1.12 },
};

function formatPrice(value) {
    return new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
        maximumFractionDigits: 0,
    }).format(value);
}

export default function PricingEstimatorClassic() {
    const [selectedTreatment, setSelectedTreatment] = useState('implante');
    const [selectedPayment, setSelectedPayment] = useState('parcelado');
    const [needsPreparation, setNeedsPreparation] = useState(false);

    const treatment = TREATMENTS[selectedTreatment];
    const payment = PAYMENT_OPTIONS[selectedPayment];

    const estimate = useMemo(() => {
        const prepMultiplier = needsPreparation ? 1.18 : 1;
        const min = Math.round(treatment.baseRange[0] * payment.multiplier * prepMultiplier);
        const max = Math.round(treatment.baseRange[1] * payment.multiplier * prepMultiplier);

        return {
            min,
            max,
            monthly:
                selectedPayment === 'parcelado'
                    ? Math.round(max / 12)
                    : null,
        };
    }, [needsPreparation, payment.multiplier, selectedPayment, treatment.baseRange]);

    const whatsappHref = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
        `${treatment.prompt} Vi no site uma estimativa entre ${formatPrice(estimate.min)} e ${formatPrice(estimate.max)} e gostaria de entender meu caso.`,
    )}`;

    return (
        <section id="precos" className="py-28 bg-[#f6f4ef]">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid lg:grid-cols-[0.95fr_1.05fr] gap-10 items-start">
                    <div>
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white text-[11px] font-bold uppercase tracking-[0.24em] text-brand-gold shadow-sm border border-white/70">
                            <BadgeDollarSign className="w-4 h-4" /> Quanto custa
                        </div>
                        <h2 className="mt-8 text-4xl md:text-5xl font-black text-txt-primary leading-tight">
                            Preço importa.
                            <br />
                            Contexto também.
                        </h2>
                        <p className="mt-6 text-base md:text-lg leading-8 text-gray-500 max-w-xl">
                            Quando alguém pesquisa preço no Google, raramente quer apenas um número. Quer entender se o tratamento cabe no momento de vida atual. Por isso, criamos uma estimativa inicial para orientar sem prometer o que só a avaliação pode confirmar.
                        </p>

                        <div className="mt-10 space-y-4">
                            {[
                                'Estimativa inicial visível para captar buscas com intenção de preço',
                                'Explicação objetiva do que realmente altera o valor',
                                'Saída rápida para WhatsApp com contexto já preenchido',
                            ].map((item) => (
                                <div key={item} className="flex items-start gap-3 text-sm text-gray-600 font-medium">
                                    <CheckCircle2 className="w-5 h-5 text-brand-gold mt-0.5" />
                                    <span>{item}</span>
                                </div>
                            ))}
                        </div>

                        <div className="mt-10 rounded-[28px] border border-black/5 bg-white p-6 shadow-sm">
                            <div className="flex items-start gap-3">
                                <CircleHelp className="w-5 h-5 text-brand-gold mt-0.5" />
                                <p className="text-sm leading-7 text-gray-500">
                                    Para SEO, isso funciona melhor do que esconder preço ou usar valores soltos sem contexto. O Google tende a premiar páginas que realmente ajudam a pessoa a decidir, não páginas que só repetem palavra-chave.
                                </p>
                            </div>
                        </div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-80px' }}
                        transition={{ duration: 0.55, ease: 'easeOut' }}
                        className="bg-white rounded-[36px] border border-black/6 shadow-[0_24px_80px_rgba(17,17,17,0.08)] overflow-hidden"
                    >
                        <div className="px-8 py-7 border-b border-gray-100">
                            <p className="text-xs font-bold uppercase tracking-[0.24em] text-gray-400">Simulador inicial</p>
                            <h3 className="mt-3 text-2xl font-black text-txt-primary">Estimativa de investimento</h3>
                        </div>

                        <div className="p-8">
                            <div className="grid gap-6">
                                <div>
                                    <label className="block text-xs font-bold uppercase tracking-[0.18em] text-gray-400 mb-3">
                                        Tratamento
                                    </label>
                                    <div className="grid sm:grid-cols-2 gap-3">
                                        {Object.entries(TREATMENTS).map(([key, item]) => (
                                            <button
                                                key={key}
                                                onClick={() => setSelectedTreatment(key)}
                                                className={`rounded-2xl border px-4 py-4 text-left transition ${
                                                    selectedTreatment === key
                                                        ? 'border-brand-gold bg-orange-50/60 shadow-sm'
                                                        : 'border-gray-200 hover:border-brand-gold/50'
                                                }`}
                                            >
                                                <p className="text-sm font-bold text-txt-primary">{item.label}</p>
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                <div className="grid sm:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-xs font-bold uppercase tracking-[0.18em] text-gray-400 mb-3">
                                            Forma de planejamento
                                        </label>
                                        <div className="space-y-3">
                                            {Object.entries(PAYMENT_OPTIONS).map(([key, option]) => (
                                                <button
                                                    key={key}
                                                    onClick={() => setSelectedPayment(key)}
                                                    className={`w-full rounded-2xl border px-4 py-3 text-left text-sm font-bold transition ${
                                                        selectedPayment === key
                                                            ? 'border-brand-gold bg-orange-50/60 text-txt-primary'
                                                            : 'border-gray-200 text-gray-500 hover:border-brand-gold/50'
                                                    }`}
                                                >
                                                    {option.label}
                                                </button>
                                            ))}
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-xs font-bold uppercase tracking-[0.18em] text-gray-400 mb-3">
                                            Complexidade
                                        </label>
                                        <button
                                            onClick={() => setNeedsPreparation((value) => !value)}
                                            className={`w-full rounded-2xl border px-4 py-4 text-left transition ${
                                                needsPreparation
                                                    ? 'border-brand-gold bg-orange-50/60'
                                                    : 'border-gray-200 hover:border-brand-gold/50'
                                            }`}
                                        >
                                            <p className="text-sm font-bold text-txt-primary">
                                                {needsPreparation ? 'Pode exigir etapa preparatória' : 'Caso sem etapa preparatória aparente'}
                                            </p>
                                            <p className="mt-2 text-xs text-gray-500 leading-6">
                                                Ajuste inicial para casos que possam envolver enxerto, planejamento adicional ou maior complexidade.
                                            </p>
                                        </button>
                                    </div>
                                </div>

                                <div className="rounded-[28px] bg-[#111] text-white px-6 py-7">
                                    <p className="text-[11px] uppercase tracking-[0.22em] text-white/45 font-bold">Faixa estimada</p>
                                    <p className="mt-4 text-3xl md:text-4xl font-black">
                                        {formatPrice(estimate.min)} a {formatPrice(estimate.max)}
                                    </p>
                                    {estimate.monthly ? (
                                        <p className="mt-3 text-sm text-white/65">
                                            Em uma projeção simples, isso pode representar parcelas a partir de {formatPrice(estimate.monthly)}.
                                        </p>
                                    ) : null}
                                </div>

                                <div className="rounded-[28px] border border-gray-100 bg-gray-50 p-6">
                                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-gray-400 mb-4">O que muda o preço</p>
                                    <ul className="space-y-3">
                                        {treatment.factors.map((factor) => (
                                            <li key={factor} className="text-sm text-gray-600 font-medium flex items-start gap-3">
                                                <CheckCircle2 className="w-4 h-4 text-brand-gold mt-0.5" />
                                                <span>{factor}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                                    <a
                                        href={whatsappHref}
                                        className="flex-1 py-4 rounded-full bg-brand-gold text-white font-bold text-sm hover:bg-brand-gold-dark transition flex items-center justify-center gap-2"
                                    >
                                        Tirar dúvidas sobre preço <ArrowRight className="w-4 h-4" />
                                    </a>
                                    <p className="text-xs leading-6 text-gray-400 max-w-xs">
                                        Estimativa inicial, não orçamento definitivo. A avaliação define o plano com precisão.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
