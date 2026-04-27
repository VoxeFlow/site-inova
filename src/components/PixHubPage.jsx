import Image from 'next/image';
import Link from 'next/link';
import { pixEntries } from '@/lib/pix-data';

export default function PixHubPage() {
    return (
        <main className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(197,160,89,0.18),_transparent_36%),linear-gradient(180deg,#f6f2eb_0%,#efe9df_100%)] px-4 py-8 text-[#171717]">
            <div className="mx-auto w-full max-w-sm overflow-hidden rounded-[2rem] border border-black/6 bg-white shadow-[0_28px_80px_rgba(0,0,0,0.12)]">
                <div className="border-b border-black/6 bg-[linear-gradient(180deg,#1b1b1b_0%,#262626_100%)] px-6 pb-8 pt-10 text-white">
                    <div className="flex flex-col items-center text-center">
                        <div className="rounded-[1.6rem] border border-white/10 bg-white/6 px-6 py-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.16)]">
                            <Image
                                src="/assets/pix/logo-inova.png"
                                alt="Logo Pix Clínica Inova"
                                width={188}
                                height={68}
                                className="h-auto w-[188px] brightness-[1.04]"
                                priority
                            />
                        </div>
                    </div>

                    <div className="mt-7 text-center">
                        <p className="text-[0.68rem] font-semibold uppercase tracking-[0.32em] text-[#c5a059]">
                            Pagamento via Pix
                        </p>
                        <h1 className="mt-3 text-[2rem] font-semibold leading-[1.02] tracking-[-0.05em]">
                            Selecione o QR Code correspondente
                        </h1>
                        <p className="mx-auto mt-3 max-w-[17rem] text-sm leading-6 text-white/72">
                            Uma leitura simples, segura e organizada para concluir o pagamento com mais praticidade.
                        </p>
                    </div>
                </div>

                <div className="px-5 pb-8 pt-6">
                    <div className="mb-5 rounded-[1.35rem] border border-[#eadfcf] bg-[#fbf8f2] px-4 py-3 text-[0.92rem] leading-6 text-[#68625a]">
                        Caso prefira, cada página individual também mostra a chave Pix digitável como alternativa ao QR Code.
                    </div>

                    <div className="space-y-4">
                        {pixEntries.map((entry, index) => {
                            const primary = index === 0;

                            return (
                                <Link
                                    key={entry.slug}
                                    href={`/pix/${entry.slug}`}
                                    prefetch={false}
                                    className={[
                                        'group flex items-center justify-between rounded-full border px-6 py-4 text-[1.02rem] font-semibold tracking-[-0.02em] transition active:scale-[0.99]',
                                        primary
                                            ? 'border-[#555555] bg-[#595959] text-white shadow-[0_14px_28px_rgba(0,0,0,0.14)]'
                                            : 'border-[#777777] bg-white text-[#292929] shadow-[0_10px_18px_rgba(0,0,0,0.04)] hover:border-[#555555] hover:bg-[#faf7f2]',
                                    ].join(' ')}
                                >
                                    <span>{entry.title}</span>
                                    <span
                                        className={[
                                            'text-xl leading-none transition group-hover:translate-x-0.5',
                                            primary ? 'text-white/82' : 'text-[#7b7b7b]',
                                        ].join(' ')}
                                    >
                                        →
                                    </span>
                                </Link>
                            );
                        })}
                    </div>
                </div>
            </div>
        </main>
    );
}
