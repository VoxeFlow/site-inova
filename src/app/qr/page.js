import Image from 'next/image';
import Link from 'next/link';
import { buildMetadata, CLINIC_INFO } from '@/lib/seo';

export const metadata = {
    ...buildMetadata({
        title: 'QR CODE | Clínica Inova',
        description: 'Página interna de atalhos rápidos da Clínica Inova.',
        path: '/qr',
    }),
    robots: {
        index: true,
        follow: true,
    },
};

const quickLinks = [
    { label: 'Quem Somos', href: '/sobre' },
    { label: 'Informações sobre Implante dentário', href: '/implante-dentario-betim' },
    { label: 'Informações sobre Ortodontia', href: '/alinhador-invisivel-betim' },
    { label: 'Informações sobre outros tratamentos', href: '/inicio#tratamentos' },
    { label: 'Agendar', href: CLINIC_INFO.whatsapp, external: true },
    { label: 'Meu Doutor', href: 'tel:+553135119228', external: true },
    { label: 'Localização', href: CLINIC_INFO.googleMapsUrl, external: true },
];

export default function QrPage() {
    return (
        <main className="min-h-screen bg-[#111111] px-4 py-8 text-white sm:px-6">
            <div className="mx-auto w-full max-w-md overflow-hidden rounded-[2rem] border border-white/10 bg-[#171717] shadow-[0_25px_80px_rgba(0,0,0,0.35)]">
                <section className="border-b border-white/10 px-6 pb-8 pt-8 text-center">
                    <div className="mx-auto mb-6 flex justify-center">
                        <Image
                            src="/assets/pix/logo-inova-branca.png"
                            alt="Clínica Inova"
                            width={295}
                            height={107}
                            className="h-auto w-[210px]"
                            priority
                        />
                    </div>
                    <h1 className="text-[1.9rem] font-semibold leading-tight tracking-[-0.05em]">
                        Seja bem-vindo à Clínica Inova
                    </h1>
                    <p className="mt-3 text-sm leading-6 text-white/72">
                        Aqui você encontrará as melhores opções em tratamento odontológico.
                    </p>
                    <p className="mt-5 text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-[#c5a059]">
                        Selecione a opção desejada
                    </p>
                </section>

                <section className="space-y-3 px-4 py-4">
                    {quickLinks.map((item) => {
                        const className =
                            'block rounded-[1.4rem] border border-white/10 bg-white/[0.04] px-5 py-4 text-sm font-medium leading-6 text-white/88 transition hover:bg-white/[0.08]';

                        if (item.external) {
                            return (
                                <a key={item.label} href={item.href} target="_blank" rel="noreferrer" className={className}>
                                    {item.label}
                                </a>
                            );
                        }

                        return (
                            <Link key={item.label} href={item.href} className={className}>
                                {item.label}
                            </Link>
                        );
                    })}
                </section>

                <section className="border-t border-white/10 px-6 py-6 text-center">
                    <p className="text-sm text-white/82">Telefone: {CLINIC_INFO.phone}</p>
                    <p className="text-sm text-white/82">Whatsapp: {CLINIC_INFO.phone}</p>
                    <p className="text-sm text-white/82">Email: contato@clinicainova.com</p>
                    <p className="text-sm text-white/82">Instagram.com/clinicainova</p>
                    <p className="mt-4 text-xs text-white/50">
                        Razão Social: Inova Odontologia Avançada Ltda. | CNPJ: 37.509.864/0001-43
                    </p>
                </section>
            </div>
        </main>
    );
}
