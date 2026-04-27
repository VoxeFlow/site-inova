import PixDetailPage from '@/components/PixDetailPage';
import { getPixEntry } from '@/lib/pix-data';
import { buildMetadata } from '@/lib/seo';

const entry = getPixEntry('dra-reysla');

export const metadata = {
    ...buildMetadata({
        title: 'PIX Reysla | Clínica Inova',
        description: 'Página interna do PIX da Dra. Reysla.',
        path: '/pix/dra-reysla',
    }),
    robots: {
        index: true,
        follow: true,
    },
};

export default function PixReyslaPage() {
    return <PixDetailPage title={entry.personLabel} keyValue={entry.key} imageSrc={entry.imageSrc} imageAlt={entry.imageAlt} />;
}
