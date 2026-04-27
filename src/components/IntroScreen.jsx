'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

const INTRO_SEQUENCE = [
    { key: 'message-one', duration: 3500 },
    { key: 'message-two', duration: 3500 },
    { key: 'brand-center', duration: 2400 },
];

export default function IntroScreen() {
    const router = useRouter();
    const [stepIndex, setStepIndex] = useState(0);

    useEffect(() => {
        if (stepIndex >= INTRO_SEQUENCE.length) {
            router.push('/inicio');
            return;
        }

        const timer = window.setTimeout(() => {
            setStepIndex((current) => current + 1);
        }, INTRO_SEQUENCE[stepIndex].duration);

        return () => window.clearTimeout(timer);
    }, [router, stepIndex]);

    const currentStep = INTRO_SEQUENCE[stepIndex]?.key;
    const showInlineLockup = currentStep === 'message-one' || currentStep === 'message-two';
    const isClosing = currentStep === 'brand-center';

    return (
        <main className="flex min-h-[100svh] items-center justify-center bg-black px-5 pb-[env(safe-area-inset-bottom,0px)] pt-[env(safe-area-inset-top,0px)] text-white md:min-h-screen md:px-6">
            <div className="relative flex min-h-[100svh] w-full items-center justify-center md:min-h-screen">
                <div
                    className={`absolute transition-all duration-700 md:translate-y-0 ${
                        showInlineLockup
                            ? 'translate-y-[-4svh] opacity-100 md:translate-y-0'
                            : 'pointer-events-none translate-y-[calc(-4svh+0.25rem)] opacity-0 md:translate-y-1'
                    }`}
                >
                    <div className="flex w-full max-w-[21rem] items-center justify-center gap-3 md:grid md:w-[37rem] md:max-w-none md:grid-cols-[9.2rem_1.6rem_25.9rem] md:justify-items-start md:gap-0">
                        <div className="flex items-center justify-end md:w-full">
                            <p className="text-[13px] font-bold uppercase tracking-[0.24em] text-white/88 md:text-[14px]">
                                INOVA
                            </p>
                        </div>
                        <div className="flex items-center justify-center md:w-full">
                            <span className="text-[15px] font-extralight text-white/42 md:text-[16px]">|</span>
                        </div>
                        <div className="relative min-w-0 flex-1 text-left md:w-full md:flex-none md:-translate-x-2.5">
                            <p
                                className={`text-[12px] font-normal leading-[1.5] tracking-[-0.01em] text-white/76 transition-all duration-700 md:whitespace-nowrap md:text-[13px] ${
                                    currentStep === 'message-one'
                                        ? 'translate-y-0 opacity-100'
                                        : 'pointer-events-none translate-y-1 opacity-0'
                                }`}
                            >
                                Você chegou até aqui por um motivo.
                            </p>

                            <p
                                className={`absolute text-[12px] font-normal leading-[1.5] tracking-[-0.01em] text-white/76 transition-all duration-700 md:text-[13px] ${
                                    currentStep === 'message-two'
                                        ? 'translate-y-0 opacity-100'
                                        : 'pointer-events-none translate-y-1 opacity-0'
                                }`}
                                style={{ top: 0, left: 0 }}
                            >
                                A partir de agora, conte conosco!
                            </p>
                        </div>
                    </div>
                </div>

                <div
                    className={`absolute text-center transition-all duration-[1400ms] ${
                        currentStep === 'brand-center'
                            ? 'scale-100 opacity-100'
                            : 'pointer-events-none scale-[0.985] opacity-0'
                    }`}
                >
                    <p
                        className={`text-[18px] font-bold uppercase tracking-[0.28em] text-white/90 md:text-[22px] ${
                            isClosing ? 'animate-intro-outro' : ''
                        }`}
                    >
                        INOVA
                    </p>
                </div>
            </div>
        </main>
    );
}
