import HomePage from '@/components/HomePage';
import { SITE_URL } from '@/lib/seo';

export const metadata = {
    metadataBase: new URL(SITE_URL),
    title: 'Clínica Inova | Odontologia em Betim',
    description:
        'Clínica Inova em Betim: implantes, alinhadores e estética com planejamento individual, equipe experiente e acompanhamento próximo.',
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
