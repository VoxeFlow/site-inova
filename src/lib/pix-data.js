export const pixEntries = [
    {
        slug: 'clinica',
        title: 'PIX Clínica',
        personLabel: 'Clínica Inova',
        key: 'pixclinicainova@gmail.com',
        imageSrc: '/assets/pix/qrs/pix-clinica.png',
        imageAlt: 'PIX oficial da Clínica Inova',
    },
    {
        slug: 'dr-lucas-vilela',
        title: 'PIX Lucas Vilela',
        personLabel: 'Dr. Lucas Vilela',
        key: '37.543.596/0001-86',
        imageSrc: '/assets/pix/qrs/pix-lucas-vilela.png',
        imageAlt: 'PIX oficial do Dr. Lucas Vilela',
    },
    {
        slug: 'dra-rose',
        title: 'PIX Rose',
        personLabel: 'Dra. Rose',
        key: '034.608.246-38',
        imageSrc: '/assets/pix/qrs/pix-rose.png',
        imageAlt: 'PIX oficial da Dra. Rose',
    },
    {
        slug: 'dra-reysla',
        title: 'PIX Reysla',
        personLabel: 'Dra. Reysla',
        key: 'reyslapix@yahoo.com',
        imageSrc: '/assets/pix/qrs/pix-reysla.png',
        imageAlt: 'PIX oficial da Dra. Reysla',
    },
    {
        slug: 'dr-arthur',
        title: 'PIX Arthur',
        personLabel: 'Dr Arthur',
        key: '122.819.456-42',
        imageSrc: '/assets/pix/qrs/pix-arthur.png',
        imageAlt: 'PIX oficial do Dr. Arthur',
    },
    {
        slug: 'dra-carolina',
        title: 'PIX Carolina',
        personLabel: 'Dra. Carolina',
        key: 'carolinavilela19@gmail.com',
        imageSrc: '/assets/pix/qrs/pix-carolina.png',
        imageAlt: 'PIX oficial da Dra. Carolina',
    },
];

export function getPixEntry(slug) {
    return pixEntries.find((entry) => entry.slug === slug);
}
