import PixDetailPage from '@/components/PixDetailPage';
import { getPixEntry } from '@/lib/pix-data';
import { buildMetadata } from '@/lib/seo';

const entry = getPixEntry('dr-arthur');

export const metadata = {
    ...buildMetadata({
        title: 'PIX Arthur | Clínica Inova',
        description: 'Página interna do PIX do Dr. Arthur.',
        path: '/pix/dr-arthur',
    }),
    robots: {
        index: true,
        follow: true,
    },
};

export default function PixArthurPage() {
    return <PixDetailPage title={entry.personLabel} keyValue={entry.key} imageSrc={entry.imageSrc} imageAlt={entry.imageAlt} />;
}
