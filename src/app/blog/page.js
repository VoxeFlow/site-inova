import Link from 'next/link';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ChatWidget from '@/components/ChatWidget';
import { blogPosts } from '@/lib/blog';
import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata({
    title: 'Blog da Clínica Inova | Betim',
    description:
        'Conteúdos da Clínica Inova sobre implante dentário, Invisalign, alinhadores invisíveis, clareamento dental e dúvidas reais de pacientes em Betim.',
    path: '/blog',
    keywords: [
        'blog clínica inova',
        'blog odontologia betim',
        'implante dentário betim blog',
        'invisalign betim blog',
    ],
});

export default function BlogPage() {
    return (
        <main className="min-h-screen bg-white text-txt-primary selection:bg-brand-gold selection:text-white">
            <Navbar />

            <section className="pt-36 pb-20 bg-[linear-gradient(180deg,#f8f6f2,white)]">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="max-w-4xl">
                        <p className="text-xs font-black uppercase tracking-[0.34em] text-brand-gold">Blog</p>
                        <h1 className="mt-6 text-4xl md:text-6xl font-black leading-[0.98]">
                            Conteúdo para quem quer decidir melhor antes de agendar.
                        </h1>
                        <p className="mt-8 text-lg md:text-xl leading-9 text-gray-600 max-w-3xl">
                            O blog da Clínica Inova foi pensado para responder dúvidas que realmente aparecem no Google e na cabeça de quem está prestes a tomar uma decisão importante em odontologia.
                        </p>
                    </div>
                </div>
            </section>

            <section className="pb-24 bg-white">
                <div className="max-w-7xl mx-auto px-6 grid gap-6 lg:grid-cols-3">
                    {blogPosts.map((post) => (
                        <article
                            key={post.slug}
                            className="rounded-[32px] border border-black/8 bg-[#fbfaf8] p-8 shadow-[0_18px_60px_rgba(0,0,0,0.04)]"
                        >
                            <p className="text-xs font-black uppercase tracking-[0.24em] text-brand-gold">{post.category}</p>
                            <h2 className="mt-5 text-2xl font-black leading-tight">
                                <Link href={`/blog/${post.slug}`} className="hover:text-brand-gold transition">
                                    {post.title}
                                </Link>
                            </h2>
                            <p className="mt-4 text-gray-600 leading-8">{post.description}</p>
                            <div className="mt-6 text-sm font-bold text-gray-400">{post.readingTime}</div>
                            <Link
                                href={`/blog/${post.slug}`}
                                className="mt-8 inline-flex items-center gap-2 text-sm font-black uppercase tracking-[0.16em] text-txt-primary hover:text-brand-gold transition"
                            >
                                Ler artigo
                            </Link>
                        </article>
                    ))}
                </div>
            </section>

            <Footer />
            <ChatWidget />
        </main>
    );
}
