import { SITE_URL } from '@/lib/seo';
import { blogPosts } from '@/lib/blog';

const routes = [
    '',
    '/blog',
    '/sobre',
    '/contato',
    '/implante-dentario-betim',
    '/quanto-custa-implante-dentario-betim',
    '/dentista-em-betim',
    '/alinhador-invisivel-betim',
    '/invisalign-betim',
    '/clareamento-dental-betim',
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
