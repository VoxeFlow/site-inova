import PixHubPage from '@/components/PixHubPage';
import { buildMetadata } from '@/lib/seo';

export const metadata = {
    ...buildMetadata({
        title: 'PIX | Clínica Inova',
        description: 'Hub interno para seleção dos QR Codes Pix da Clínica Inova.',
        path: '/pix',
    }),
    robots: {
        index: true,
        follow: true,
    },
};

export default function PixPage() {
    return <PixHubPage />;
}
