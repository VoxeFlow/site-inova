import { getPatientGalleryImages } from '@/lib/patient-gallery';
import ImplantSocialProofCarousel from '@/components/ImplantSocialProofCarousel';

export default function ImplantSocialProof() {
    const gallery = getPatientGalleryImages();

    if (!gallery.length) {
        return null;
    }

    return <ImplantSocialProofCarousel stories={gallery} />;
}
