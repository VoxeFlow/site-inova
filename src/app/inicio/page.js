import HomePage from '@/components/HomePage';
import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata({
    title: 'Clínica Inova | Dentista em Betim, Implante, Invisalign e Clareamento',
    description:
        'Clínica Inova em Betim: implante dentário, alinhadores invisíveis, Invisalign, clareamento dental e odontologia particular com mais critério.',
    path: '/inicio',
    keywords: [
        'dentista em betim',
        'implante dentário betim',
        'alinhadores invisíveis betim',
        'invisalign betim',
        'clareamento dental betim',
    ],
});

export default function InicioPage() {
    return <HomePage />;
}
