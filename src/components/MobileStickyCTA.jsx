import Link from 'next/link';
import { MessageCircle } from 'lucide-react';

export default function MobileStickyCTA() {
    return (
        <div className="mobile-sticky-cta fixed inset-x-0 bottom-0 z-40 border-t border-black/5 bg-white/92 px-4 pb-[calc(env(safe-area-inset-bottom,0px)+0.85rem)] pt-3 shadow-[0_-10px_30px_rgba(0,0,0,0.08)] backdrop-blur-xl md:hidden">
            <div className="mx-auto flex max-w-xl gap-3">
                <Link
                    href="https://wa.me/553126260038"
                    className="flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-[#25D366] px-4 text-center text-[13px] font-bold text-white shadow-lg shadow-green-500/20"
                >
                    <MessageCircle className="h-4 w-4" />
                    Falar no WhatsApp
                </Link>
            </div>
        </div>
    );
}
