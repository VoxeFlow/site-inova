import Image from 'next/image';

export default function PixPosterPage({ imageSrc, imageAlt }) {
    return (
        <main className="min-h-screen bg-[#f3efe8] px-3 py-3 sm:px-6 sm:py-6">
            <div className="mx-auto max-w-md">
                <div className="overflow-hidden rounded-[1.75rem] border border-black/6 bg-white shadow-[0_24px_70px_rgba(0,0,0,0.12)]">
                    <Image
                        src={imageSrc}
                        alt={imageAlt}
                        width={1170}
                        height={2532}
                        className="h-auto w-full"
                        priority
                    />
                </div>
            </div>
        </main>
    );
}
