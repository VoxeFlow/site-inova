import PixDetailPage from '@/components/PixDetailPage';
import { getPixEntry } from '@/lib/pix-data';
import { buildMetadata } from '@/lib/seo';

const entry = getPixEntry('clinica');

export const metadata = {
    ...buildMetadata({
        title: 'PIX Clínica | Clínica Inova',
        description: 'Página interna do PIX da Clínica Inova.',
        path: '/pix/clinica',
    }),
    robots: {
        index: true,
        follow: true,
    },
};

export default function PixClinicaPage() {
    return <PixDetailPage title={entry.personLabel} keyValue={entry.key} imageSrc={entry.imageSrc} imageAlt={entry.imageAlt} />;
}
