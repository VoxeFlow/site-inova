import PixDetailPage from '@/components/PixDetailPage';
import { getPixEntry } from '@/lib/pix-data';
import { buildMetadata } from '@/lib/seo';

const entry = getPixEntry('dr-lucas-vilela');

export const metadata = {
    ...buildMetadata({
        title: 'PIX Lucas Vilela | Clínica Inova',
        description: 'Página interna do PIX do Dr. Lucas Vilela.',
        path: '/pix/dr-lucas-vilela',
    }),
    robots: {
        index: true,
        follow: true,
    },
};

export default function PixLucasPage() {
    return <PixDetailPage title={entry.personLabel} keyValue={entry.key} imageSrc={entry.imageSrc} imageAlt={entry.imageAlt} />;
}
