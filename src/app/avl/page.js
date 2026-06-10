import Image from 'next/image';
import { buildMetadata } from '@/lib/seo';

const googleReviewUrl = 'https://g.page/r/CQtv0yb1UjFkEBM/review';

export const metadata = {
    ...buildMetadata({
        title: 'Avalie a Clínica Inova',
        description: 'Conte como foi sua experiência na Clínica Inova.',
        path: '/avl',
    }),
    robots: {
        index: false,
        follow: true,
    },
};

export default function AvaliacaoPage() {
    return (
        <main className="min-h-screen bg-[#fff8ef] px-4 py-6 text-[#222222] sm:px-6">
            <div className="mx-auto flex min-h-[calc(100vh-3rem)] w-full max-w-md items-center">
                <section className="w-full overflow-hidden rounded-[2rem] border border-[#f5a400]/25 bg-[#fffdf8] shadow-[0_25px_80px_rgba(74,47,29,0.18)]">
                    <div className="bg-gradient-to-br from-[#4a2f1d] via-[#5a3923] to-[#2b1a10] px-6 pb-7 pt-8 text-center text-white">
                        <div className="mx-auto mb-5 flex justify-center">
                            <Image
                                src="/assets/pix/logo-inova-branca.png"
                                alt="Clínica Inova"
                                width={295}
                                height={107}
                                className="h-auto w-[190px]"
                                priority
                            />
                        </div>

                        <div className="text-2xl leading-none tracking-[0.18em]" aria-label="Cinco estrelas">
                            ⭐⭐⭐⭐⭐
                        </div>

                        <p className="mt-4 text-xs font-semibold uppercase tracking-[0.28em] text-[#f5c86a]">
                            Excelência em cada atendimento
                        </p>

                        <h1 className="mt-4 text-[2rem] font-semibold leading-tight tracking-[-0.05em]">
                            Sua opinião vale Ouro Branco
                        </h1>

                        <p className="mt-4 text-sm leading-6 text-white/78">
                            Se nossa equipe conseguiu proporcionar um atendimento acolhedor, atencioso e de qualidade,
                            gostaríamos muito de conhecer sua experiência.
                        </p>
                    </div>

                    <div className="space-y-5 px-6 py-6">
                        <div className="rounded-[1.5rem] border border-[#f5a400]/20 bg-[#fff8ef] px-5 py-5 text-center">
                            <p className="text-sm leading-6 text-[#4a2f1d]/85">
                                Todos os dias trabalhamos para oferecer um atendimento que mereça ser recomendado.
                            </p>
                            <p className="mt-3 text-sm leading-6 text-[#4a2f1d]/85">
                                Seu relato ajuda outras pessoas a encontrarem profissionais de confiança para cuidar da saúde e do sorriso.
                            </p>
                            <p className="mt-3 text-sm font-semibold text-[#4a2f1d]">
                                Leva menos de 30 segundos.
                            </p>
                        </div>

                        <div className="rounded-[1.5rem] border border-[#f5a400]/25 bg-white px-5 py-5 text-center shadow-[0_15px_45px_rgba(245,164,0,0.12)]">
                            <div className="text-xl leading-none tracking-[0.16em]" aria-hidden="true">
                                ⭐⭐⭐⭐⭐
                            </div>
                            <p className="mt-3 text-sm font-semibold text-[#4a2f1d]">
                                Excelência é o que buscamos em cada detalhe.
                            </p>
                        </div>

                        <a
                            href={googleReviewUrl}
                            target="_blank"
                            rel="noreferrer"
                            aria-label="Deixar avaliação da Clínica Inova no Google"
                            className="block rounded-[1.4rem] bg-[#f5a400] px-6 py-4 text-center text-base font-bold text-[#4a2f1d] shadow-[0_18px_40px_rgba(245,164,0,0.32)] transition hover:-translate-y-0.5 hover:bg-[#ffb52e] focus:outline-none focus:ring-4 focus:ring-[#f5a400]/35"
                        >
                            Deixar minha avaliação no Google
                        </a>

                        <div className="rounded-[1.5rem] border border-[#4a2f1d]/10 bg-[#4a2f1d] px-5 py-5 text-center text-white">
                            <div className="text-3xl" aria-hidden="true">
                                🍫
                            </div>
                            <p className="mt-3 text-sm leading-6 text-white/82">
                                Após concluir sua avaliação, mostre a tela na recepção e retire seu Ouro Branco.
                            </p>
                        </div>

                        <div className="rounded-[1.5rem] border border-[#4a2f1d]/10 bg-white px-5 py-5 text-center">
                            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#f5a400]">
                                Acompanhe a Clínica Inova
                            </p>
                            <p className="mt-2 text-sm font-semibold text-[#4a2f1d]">
                                @clinicainova
                            </p>
                            <a
                                href="https://www.instagram.com/clinicainova/"
                                target="_blank"
                                rel="noreferrer"
                                aria-label="Seguir a Clínica Inova no Instagram"
                                className="mt-4 inline-flex rounded-full border border-[#4a2f1d]/15 px-5 py-2 text-sm font-semibold text-[#4a2f1d] transition hover:bg-[#fff8ef]"
                            >
                                Seguir no Instagram
                            </a>
                        </div>

                        <p className="px-4 text-center text-xs leading-5 text-[#4a2f1d]/55">
                            Clínica Inova - Transformamos vidas através do sorriso.
                        </p>
                    </div>
                </section>
            </div>
        </main>
    );
}
