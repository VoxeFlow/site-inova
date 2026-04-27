import PixHubPage from '@/components/PixHubPage';
import { buildMetadata } from '@/lib/seo';

export const metadata = {
    ...buildMetadata({
        title: 'PIX Inova - Jeff | Clínica Inova',
        description: 'Hub interno com os QR Codes Pix da clínica e dos profissionais.',
        path: '/copia-pix',
    }),
    robots: {
        index: true,
        follow: true,
    },
};

export default function CopiaPixPage() {
    return <PixHubPage />;
}
