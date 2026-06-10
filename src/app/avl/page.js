cat > src/app/avl/page.js <<'EOF'
import Image from 'next/image';
import { buildMetadata } from '@/lib/seo';

const googleReviewUrl = 'https://g.page/r/CQtv0yb1UjFkEBM/review';
const instagramUrl = 'https://www.instagram.com/clinicainova/';

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
        <main className="min-h-screen bg-[#fff8ef] px-4 py-4 text-[#222222] sm:px-6">
            <div className="mx-auto flex min-h-[calc(100vh-2rem)] w-full max-w-md items-center">
                <section className="w-full rounded-[2rem] border border-[#f5a400]/20 bg-[#fffdf8] px-5 py-6 text-center shadow-[0_20px_60px_rgba(74,47,29,0.12)] sm:px-7">
                    <Image
                        src="/assets/pix/logo-inova.png"
                        alt="Clínica Inova"
                        width={295}
                        height={107}
                        className="mx-auto h-auto w-[175px]"
                        priority
                    />

                    <div className="mt-5 text-3xl leading-none tracking-[0.18em]" aria-label="Cinco estrelas">
                        ⭐⭐⭐⭐⭐
                    </div>

                    <h1 className="mt-5 text-[2rem] font-semibold leading-tight tracking-[-0.05em] text-[#4a2f1d]">
                        Sua experiência merece ser compartilhada
                    </h1>

                    <p className="mx-auto mt-4 max-w-sm text-base leading-7 text-[#4a2f1d]/75">
                        Avalie a Clínica Inova no Google e ajude outras pessoas a encontrarem um atendimento de confiança.
                    </p>

                    <a
                        href={googleReviewUrl}
                        target="_blank"
                        rel="noreferrer"
                        aria-label="Avaliar a Clínica Inova no Google"
                        className="mt-6 block rounded-[1.35rem] bg-[#f5a400] px-6 py-4 text-center text-base font-bold text-[#4a2f1d] shadow-[0_16px_36px_rgba(245,164,0,0.32)] transition hover:bg-[#ffb52e] focus:outline-none focus:ring-4 focus:ring-[#f5a400]/35"
                    >
                        Avaliar no Google
                    </a>

                    <div className="mt-4 rounded-[1.35rem] border border-[#f5a400]/18 bg-white px-5 py-4">
                        <div className="text-2xl" aria-hidden="true">
                            🍫
                        </div>
                        <p className="mt-2 text-sm leading-6 text-[#4a2f1d]/75">
                            Após concluir, mostre a tela na recepção e retire seu Ouro Branco.
                        </p>
                    </div>

                    <a
                        href={instagramUrl}
                        target="_blank"
                        rel="noreferrer"
                        aria-label="Seguir a Clínica Inova no Instagram"
                        className="mt-4 inline-flex rounded-full border border-[#4a2f1d]/15 bg-white px-5 py-2 text-sm font-semibold text-[#4a2f1d] transition hover:bg-[#fff8ef]"
                    >
                        Seguir @clinicainova
                    </a>
                </section>
            </div>
        </main>
    );
}
EOF

npm run build
git status --short
