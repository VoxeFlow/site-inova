import Link from 'next/link';

import { blogPosts } from '@/lib/blog';

const featuredPosts = blogPosts.slice(0, 3);

export default function BlogHighlights() {
    return (
        <section className="bg-white py-18 md:py-24">
            <div className="max-w-7xl mx-auto px-5 md:px-6">
                <div className="max-w-3xl mb-10 md:mb-14">
                    <p className="text-xs font-black uppercase tracking-[0.34em] text-brand-gold">Blog</p>
                    <h2 className="mt-5 text-3xl md:text-5xl font-black leading-tight text-txt-primary">
                        Conteúdo para quem ainda está comparando, pesquisando e pensando.
                    </h2>
                    <p className="mt-5 text-base leading-7 text-gray-600 md:text-lg md:leading-8">
                        Em vez de fazer o paciente voltar ao Google, o site pode aprofundar a decisão aqui dentro.
                    </p>
                </div>

                <div className="grid gap-4 lg:grid-cols-3">
                    {featuredPosts.map((post) => (
                        <Link
                            key={post.slug}
                            href={`/blog/${post.slug}`}
                            className="rounded-[24px] border border-black/8 bg-[#fbfaf8] px-5 py-6 transition hover:border-brand-gold hover:shadow-[0_16px_60px_rgba(0,0,0,0.04)] md:rounded-[30px] md:px-7 md:py-8"
                        >
                            <p className="text-xs font-black uppercase tracking-[0.24em] text-brand-gold">{post.category}</p>
                            <h3 className="mt-4 text-[1.55rem] font-black leading-tight text-txt-primary md:text-2xl">{post.title}</h3>
                            <p className="mt-4 text-sm leading-7 text-gray-600 md:text-base md:leading-8">{post.description}</p>
                            <p className="mt-6 text-sm font-black uppercase tracking-[0.16em] text-gray-400">{post.readingTime}</p>
                        </Link>
                    ))}
                </div>

                <div className="mt-8 md:mt-10">
                    <Link
                        href="/blog"
                        className="inline-flex w-full items-center justify-center rounded-full border border-txt-primary px-6 py-4 text-center text-[12px] font-black uppercase tracking-[0.16em] text-txt-primary transition hover:bg-txt-primary hover:text-white md:w-auto md:text-sm"
                    >
                        Ver todos os artigos
                    </Link>
                </div>
            </div>
        </section>
    );
}
