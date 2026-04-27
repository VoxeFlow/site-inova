import PixDetailPage from '@/components/PixDetailPage';
import { getPixEntry } from '@/lib/pix-data';
import { buildMetadata } from '@/lib/seo';

const entry = getPixEntry('dra-carolina');

export const metadata = {
    ...buildMetadata({
        title: 'PIX Carolina | Clínica Inova',
        description: 'Página interna do PIX da Dra. Carolina.',
        path: '/pix/dra-carolina',
    }),
    robots: {
        index: true,
        follow: true,
    },
};

export default function PixCarolinaPage() {
    return <PixDetailPage title={entry.personLabel} keyValue={entry.key} imageSrc={entry.imageSrc} imageAlt={entry.imageAlt} />;
}
