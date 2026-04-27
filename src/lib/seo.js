export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.clinicainova.com';

export const CLINIC_INFO = {
    name: 'Clínica Inova',
    legalName: 'Clínica Inova Odontologia',
    phone: '(31) 2626-0038',
    phoneHref: 'tel:+553126260038',
    whatsapp: 'https://wa.me/553126260038',
    address: 'Av. Amazonas, 698 - Centro',
    city: 'Betim',
    state: 'MG',
    zip: '32600-000',
    latitude: '-19.9680',
    longitude: '-44.1980',
    googleMapsUrl: 'https://maps.google.com/?q=Cl%C3%ADnica+Inova+Betim',
    image: '/assets/favicon.png',
};

export function absoluteUrl(path = '/') {
    return `${SITE_URL}${path}`;
}

export function buildMetadata({
    title,
    description,
    path,
    keywords = [],
}) {
    return {
        title,
        description,
        keywords,
        alternates: {
            canonical: absoluteUrl(path),
        },
        openGraph: {
            title,
            description,
            url: absoluteUrl(path),
            siteName: CLINIC_INFO.name,
            locale: 'pt_BR',
            type: 'website',
        },
    };
}

export function buildDentistSchema() {
    return {
        '@context': 'https://schema.org',
        '@type': ['Dentist', 'LocalBusiness'],
        name: CLINIC_INFO.name,
        url: SITE_URL,
        telephone: CLINIC_INFO.phone,
        image: absoluteUrl(CLINIC_INFO.image),
        logo: absoluteUrl(CLINIC_INFO.image),
        address: {
            '@type': 'PostalAddress',
            streetAddress: CLINIC_INFO.address,
            addressLocality: CLINIC_INFO.city,
            addressRegion: CLINIC_INFO.state,
            postalCode: CLINIC_INFO.zip,
            addressCountry: 'BR',
        },
        geo: {
            '@type': 'GeoCoordinates',
            latitude: CLINIC_INFO.latitude,
            longitude: CLINIC_INFO.longitude,
        },
        areaServed: `${CLINIC_INFO.city} - ${CLINIC_INFO.state}`,
        openingHoursSpecification: [
            {
                '@type': 'OpeningHoursSpecification',
                dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
                opens: '08:00',
                closes: '18:00',
            },
        ],
        sameAs: [
            CLINIC_INFO.whatsapp,
            CLINIC_INFO.googleMapsUrl,
            'https://www.instagram.com/clinicainova',
            'https://www.facebook.com/clinicainova',
        ],
    };
}

export function buildServiceSchema({ name, description, path }) {
    return {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name,
        description,
        areaServed: `${CLINIC_INFO.city} - ${CLINIC_INFO.state}`,
        provider: {
            '@type': 'Dentist',
            name: CLINIC_INFO.name,
            url: SITE_URL,
        },
        url: absoluteUrl(path),
    };
}

export function buildFaqSchema(items) {
    return {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: items.map((item) => ({
            '@type': 'Question',
            name: item.q,
            acceptedAnswer: {
                '@type': 'Answer',
                text: item.a,
            },
        })),
    };
}

export function buildBreadcrumbSchema(items) {
    return {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: items.map((item, index) => ({
            '@type': 'ListItem',
            position: index + 1,
            name: item.name,
            item: absoluteUrl(item.path),
        })),
    };
}

export function buildArticleSchema({ title, description, path, datePublished }) {
    return {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: title,
        description,
        datePublished,
        dateModified: datePublished,
        author: {
            '@type': 'Organization',
            name: CLINIC_INFO.name,
        },
        publisher: {
            '@type': 'Organization',
            name: CLINIC_INFO.name,
        },
        mainEntityOfPage: absoluteUrl(path),
        url: absoluteUrl(path),
    };
}
