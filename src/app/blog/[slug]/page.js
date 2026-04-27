import Link from 'next/link';
import { notFound } from 'next/navigation';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ChatWidget from '@/components/ChatWidget';
import JsonLd from '@/components/JsonLd';
import { blogPosts, getPostBySlug } from '@/lib/blog';
import { buildArticleSchema, buildBreadcrumbSchema, buildMetadata } from '@/lib/seo';

export function generateStaticParams() {
    return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }) {
    const { slug } = await params;
    const post = getPostBySlug(slug);

    if (!post) {
        return buildMetadata({
            title: 'Blog | Clínica Inova',
            description: 'Conteúdos da Clínica Inova.',
            path: '/blog',
        });
    }

    return buildMetadata({
        title: `${post.title} | Blog Clínica Inova`,
        description: post.description,
        path: `/blog/${post.slug}`,
        keywords: post.keywords,
    });
}

export default async function BlogPostPage({ params }) {
    const { slug } = await params;
    const post = getPostBySlug(slug);

    if (!post) {
        notFound();
    }

    const relatedPosts = blogPosts.filter((item) => post.relatedSlugs.includes(item.slug));

    return (
        <main className="min-h-screen bg-white text-txt-primary selection:bg-brand-gold selection:text-white">
            <JsonLd
                data={buildBreadcrumbSchema([
                    { name: 'Início', path: '/inicio' },
                    { name: 'Blog', path: '/blog' },
                    { name: post.title, path: `/blog/${post.slug}` },
                ])}
            />
            <JsonLd
                data={buildArticleSchema({
                    title: post.title,
                    description: post.description,
                    path: `/blog/${post.slug}`,
                    datePublished: post.date,
                })}
            />

            <Navbar />

            <article className="pt-36 pb-24">
                <div className="max-w-4xl mx-auto px-6">
                    <div className="text-xs font-black uppercase tracking-[0.28em] text-gray-400">
                        <Link href="/inicio" className="hover:text-brand-gold transition">Início</Link> / <Link href="/blog" className="hover:text-brand-gold transition">Blog</Link> / {post.category}
                    </div>
                    <p className="mt-8 text-xs font-black uppercase tracking-[0.34em] text-brand-gold">{post.category}</p>
                    <h1 className="mt-6 text-4xl md:text-6xl font-black leading-[0.98]">{post.heroTitle}</h1>
                    <p className="mt-8 text-lg md:text-xl leading-9 text-gray-600">{post.heroIntro}</p>
                    <div className="mt-8 text-sm font-bold text-gray-400">{post.readingTime}</div>
                </div>

                <div className="max-w-4xl mx-auto px-6 mt-16 space-y-14">
                    {post.sections.map((section) => (
                        <section key={section.title}>
                            <h2 className="text-2xl md:text-3xl font-black leading-tight">{section.title}</h2>
                            <div className="mt-6 space-y-6 text-lg leading-9 text-gray-700">
                                {section.paragraphs.map((paragraph) => (
                                    <p key={paragraph}>{paragraph}</p>
                                ))}
                            </div>
                            {section.bullets ? (
                                <div className="mt-8 grid gap-3">
                                    {section.bullets.map((item) => (
                                        <div key={item} className="rounded-[20px] border border-black/8 bg-[#fbfaf8] px-5 py-4 text-gray-700">
                                            {item}
                                        </div>
                                    ))}
                                </div>
                            ) : null}
                        </section>
                    ))}

                    <section className="rounded-[32px] border border-black/8 bg-[#131313] px-8 py-10 text-white">
                        <p className="text-2xl md:text-3xl font-black leading-tight">{post.closing}</p>
                        <div className="mt-8 flex flex-wrap gap-3">
                            <Link
                                href="/inicio#agendamento"
                                className="rounded-full bg-brand-gold px-6 py-4 text-sm font-black uppercase tracking-[0.16em] text-white transition hover:bg-brand-gold-dark"
                            >
                                Agendar avaliação
                            </Link>
                            <Link
                                href="/inicio#precos"
                                className="rounded-full border border-white/14 px-6 py-4 text-sm font-black uppercase tracking-[0.16em] text-white/84 transition hover:bg-white/[0.06]"
                            >
                                Ver simulador
                            </Link>
                        </div>
                    </section>

                    {relatedPosts.length ? (
                        <section className="pt-8">
                            <p className="text-xs font-black uppercase tracking-[0.34em] text-brand-gold">Relacionados</p>
                            <div className="mt-6 grid gap-4 md:grid-cols-2">
                                {relatedPosts.map((item) => (
                                    <Link
                                        key={item.slug}
                                        href={`/blog/${item.slug}`}
                                        className="rounded-[24px] border border-black/8 bg-[#fbfaf8] px-6 py-6 transition hover:border-brand-gold"
                                    >
                                        <p className="text-xs font-black uppercase tracking-[0.24em] text-gray-400">{item.category}</p>
                                        <h3 className="mt-3 text-xl font-black leading-tight">{item.title}</h3>
                                        <p className="mt-3 text-gray-600 leading-7">{item.description}</p>
                                    </Link>
                                ))}
                            </div>
                        </section>
                    ) : null}
                </div>
            </article>

            <Footer />
            <ChatWidget />
        </main>
    );
}
