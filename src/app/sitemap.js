import { SITE_URL } from '@/lib/seo';
import { blogPosts } from '@/lib/blog';

const routes = [
    '',
    '/blog',
    '/sobre',
    '/contato',
    '/dr-lucas-vilela',
    '/implante-dentario-betim',
    '/quanto-custa-implante-dentario-betim',
    '/implante-dentario-parcelado-betim',
    '/dentista-implante-betim',
    '/enxerto-osseo-implante-betim',
    '/protocolo-dentario-betim',
    '/implante-protocolo-all-on-4-betim',
    '/protocolo-dentario-preco-betim',
    '/protocolo-dentario-antes-depois',
    '/clareamento-dental-betim',
    '/invisalign-betim',
    '/alinhadores-invisiveis-betim',
    '/invisalign-doctor-betim',
    '/dentista-em-betim',
    '/alinhador-invisivel-betim',
];

export default function sitemap() {
    return [
        ...routes.map((route) => ({
            url: `${SITE_URL}${route}`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: route === '' ? 1 : 0.85,
        })),
        ...blogPosts.map((post) => ({
            url: `${SITE_URL}/blog/${post.slug}`,
            lastModified: new Date(post.date),
            changeFrequency: 'monthly',
            priority: 0.8,
        })),
    ];
}
