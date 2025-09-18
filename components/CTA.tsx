
import React from 'react';

const CTA: React.FC = () => {
  return (
    <section id="cta" className="bg-white">
        <div className="relative isolate overflow-hidden">
            <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
                <div className="max-w-2xl mx-auto text-center">
                    <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-charcoal">
                        Siap Mengubah Simulasi Menjadi Realita?
                    </h2>
                    <p className="mt-6 text-lg leading-8 text-gray-600">
                        Hubungi kami sekarang untuk konsultasi gratis dan mari kita bangun brand fashion Anda bersama.
                    </p>
                    <div className="mt-10">
                        <a
                            href="#"
                            className="inline-block px-8 py-4 text-lg font-semibold text-white bg-charcoal rounded-full hover:bg-opacity-90 transform hover:scale-105 transition-all shadow-lg"
                        >
                            Mulai Proyek Anda via WhatsApp
                        </a>
                    </div>
                </div>
            </div>
            <svg
                viewBox="0 0 1024 1024"
                className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)]"
                aria-hidden="true"
            >
                <circle cx={512} cy={512} r={512} fill="url(#8d958450-c69f-4251-94bc-4e091a323369)" fillOpacity="0.7" />
                <defs>
                <radialGradient id="8d958450-c69f-4251-94bc-4e091a323369">
                    <stop stopColor="#F9F7F1" />
                    <stop offset={1} stopColor="#BFA07A" />
                </radialGradient>
                </defs>
            </svg>
        </div>
    </section>
  );
};

export default CTA;
