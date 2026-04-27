import PixDetailPage from '@/components/PixDetailPage';
import { getPixEntry } from '@/lib/pix-data';
import { buildMetadata } from '@/lib/seo';

const entry = getPixEntry('dra-rose');

export const metadata = {
    ...buildMetadata({
        title: 'PIX Rose | Clínica Inova',
        description: 'Página interna do PIX da Dra. Rose.',
        path: '/pix/dra-rose',
    }),
    robots: {
        index: true,
        follow: true,
    },
};

export default function PixRosePage() {
    return <PixDetailPage title={entry.personLabel} keyValue={entry.key} imageSrc={entry.imageSrc} imageAlt={entry.imageAlt} />;
}
