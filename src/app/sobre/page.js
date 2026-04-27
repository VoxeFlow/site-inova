import SeoPageLayout from '@/components/SeoPageLayout';
import {
    buildBreadcrumbSchema,
    buildDentistSchema,
    buildMetadata,
} from '@/lib/seo';

export const metadata = buildMetadata({
    title: 'Sobre a Clínica Inova | Betim',
    description:
        'Conheça a Clínica Inova em Betim, sua proposta de odontologia particular, equipe, estrutura e visão de atendimento.',
    path: '/sobre',
    keywords: [
        'sobre clínica inova',
        'clínica odontológica betim',
        'dentista particular betim',
        'clínica inova betim',
    ],
});

export default function SobrePage() {
    return (
        <SeoPageLayout
            schema={[
                buildDentistSchema(),
                buildBreadcrumbSchema([
                    { name: 'Início', path: '/inicio' },
                    { name: 'Sobre', path: '/sobre' },
                ]),
            ]}
            breadcrumb={[
                { label: 'Início', href: '/inicio' },
                { label: 'Sobre', href: '/sobre' },
            ]}
            eyebrow="Sobre a Clínica Inova"
            title="Uma clínica em Betim para quem não quer decidir odontologia no automático."
            description="A Clínica Inova nasceu para atender com mais contexto, mais critério e mais previsibilidade. Em vez de acelerar decisões, a proposta é sustentar escolhas melhores em implante, alinhadores, estética e odontologia particular."
            bulletPoints={[
                'Odontologia particular em Betim',
                'Equipe com foco em planejamento e previsibilidade',
                'Estrutura pensada para confiança clínica e experiência',
            ]}
            sections={[
                {
                    eyebrow: 'Visão',
                    title: 'O posicionamento da clínica não gira em torno de volume. Gira em torno de decisão bem conduzida.',
                    copy: 'Em odontologia, o que muda o resultado quase nunca está na pressa. Está no diagnóstico, no tempo clínico, na estratégia e na responsabilidade com o caso. É essa lógica que orienta a Clínica Inova.',
                },
                {
                    eyebrow: 'Equipe',
                    title: 'Implante, ortodontia, estética e clínica geral com leitura mais individual.',
                    copy: 'A clínica reúne profissionais com atuação em áreas estratégicas para atender desde demandas funcionais até decisões estéticas mais exigentes.',
                    items: [
                        'Dr. Jefferson Reis',
                        'Dr. Lucas Vilela',
                        'Dr. Arthur Xavier',
                        'Dra. Rose Neves',
                        'Dra. Reysla Soares',
                        'Dra. Carolina Vilela',
                    ],
                },
                {
                    eyebrow: 'Betim',
                    title: 'Estar em Betim é parte da experiência, não só da geolocalização.',
                    copy: 'A relação com a cidade importa porque confiança odontológica também depende de acesso, retorno, acompanhamento e vínculo local. Uma clínica bem posicionada em Betim precisa funcionar na rotina real do paciente.',
                },
                {
                    eyebrow: 'Critério',
                    title: 'Mais importante do que parecer premium é sustentar a decisão depois.',
                    copy: 'É por isso que a clínica fala tanto de planejamento, previsibilidade e contexto. O objetivo não é empolgar rápido. É fazer o paciente escolher melhor.',
                },
            ]}
            ctaTitle="Quer conhecer a clínica antes de decidir o tratamento?"
            ctaCopy="Às vezes, a confiança começa antes mesmo da avaliação. Começa quando o paciente entende quem está por trás da estrutura."
            relatedLinks={[
                { href: '/dentista-em-betim', label: 'Dentista em Betim' },
                { href: '/contato', label: 'Contato' },
                { href: '/blog', label: 'Blog' },
            ]}
        />
    );
}
