import Image from 'next/image';
import Link from 'next/link';

export default function PixDetailPage({ title, keyValue, imageSrc, imageAlt }) {
    return (
        <main className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(197,160,89,0.18),_transparent_36%),linear-gradient(180deg,#f6f2eb_0%,#efe9df_100%)] px-4 py-6 text-[#171717]">
            <div className="mx-auto w-full max-w-sm overflow-hidden rounded-[2rem] border border-black/6 bg-white shadow-[0_28px_80px_rgba(0,0,0,0.12)]">
                <div className="border-b border-black/6 bg-[linear-gradient(180deg,#1b1b1b_0%,#262626_100%)] px-5 pb-5 pt-5 text-white">
                    <div className="flex items-center justify-between gap-3">
                        <div>
                            <p className="text-[0.68rem] font-semibold uppercase tracking-[0.3em] text-[#c5a059]">
                                Pagamento via Pix
                            </p>
                            <h1 className="mt-2 text-[1.7rem] font-semibold tracking-[-0.05em]">{title}</h1>
                        </div>
                        <Link
                            href="/pix"
                            className="rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.12)] backdrop-blur-sm transition hover:bg-white/14"
                        >
                            Menu
                        </Link>
                    </div>
                    <p className="mt-3 max-w-[16rem] text-sm leading-6 text-white/70">
                        Aponte a câmera para o QR Code ou use a chave digitável logo abaixo.
                    </p>
                </div>

                <div className="p-4">
                    <div className="overflow-hidden rounded-[1.7rem] border border-[#d7ebe8] bg-white shadow-[0_18px_40px_rgba(0,0,0,0.05)]">
                        <Image
                            src={imageSrc}
                            alt={imageAlt}
                            width={1040}
                            height={1780}
                            className="h-auto w-full"
                            priority
                        />
                    </div>
                </div>

                <div className="px-4 pb-4">
                    <div className="rounded-[1.55rem] border border-[#d7ebe8] bg-[#f8fffe] px-5 py-4">
                        <p className="text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-[#66c5be]">
                            Chave Pix digitável
                        </p>
                        <p className="mt-2 break-all text-[1.05rem] font-semibold tracking-[-0.02em] text-[#2d2d2d]">
                            {keyValue}
                        </p>
                        <p className="mt-2 text-sm leading-6 text-[#6a6a6a]">
                            Se a leitura do QR Code não funcionar, utilize esta chave exatamente como alternativa.
                        </p>
                    </div>
                </div>
            </div>
        </main>
    );
}
