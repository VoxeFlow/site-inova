import HomePage from '@/components/HomePage';
import { SITE_URL } from '@/lib/seo';

export const metadata = {
    metadataBase: new URL(SITE_URL),
    title: 'Implante Dentário em Betim | Clínica Inova',
    description:
        'Implante dentário em Betim com avaliação individualizada e parcelas a partir de R$150/mês. Fale com a Clínica Inova.',
    alternates: {
        canonical: 'https://www.clinicainova.com/',
    },
    robots: {
        index: true,
        follow: true,
    },
};

export default function Home() {
    return <HomePage />;
}
