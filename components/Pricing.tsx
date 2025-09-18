
import React from 'react';
import { CheckIcon } from './icons/CheckIcon';

interface PricingCardProps {
  title: string;
  price: string;
  features: string[];
  isPopular?: boolean;
  buttonText: string;
  buttonHref: string;
}

const PricingCard: React.FC<PricingCardProps> = ({ title, price, features, isPopular = false, buttonText, buttonHref }) => {
  const cardClasses = isPopular
    ? 'bg-charcoal text-white border-muted-gold transform lg:scale-105 shadow-2xl z-10'
    : 'bg-white text-charcoal border-gray-200';
  const buttonClasses = isPopular
    ? 'bg-cream text-charcoal hover:bg-opacity-90'
    : 'bg-charcoal text-white hover:bg-opacity-90';

  return (
    <div className={`relative rounded-2xl border p-8 flex flex-col transition-all duration-300 ${cardClasses}`}>
      {isPopular && (
        <div className="absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2">
            <span className="inline-flex items-center px-4 py-1 text-sm font-semibold tracking-wider text-charcoal bg-muted-gold rounded-full">
                Paling Populer
            </span>
        </div>
      )}
      <h3 className="text-lg font-semibold uppercase tracking-wider">{title}</h3>
      <p className="mt-4 text-5xl font-extrabold tracking-tight">{price}</p>
      <ul role="list" className="mt-8 space-y-4 flex-grow">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <div className="flex-shrink-0">
              <CheckIcon className={`h-6 w-6 ${isPopular ? 'text-muted-gold' : 'text-green-500'}`} />
            </div>
            <p className="ml-3 text-base">{feature}</p>
          </li>
        ))}
      </ul>
      <a
        href={buttonHref}
        target="_blank"
        rel="noopener noreferrer"
        className={`block w-full mt-10 px-6 py-4 text-center text-lg font-semibold rounded-full transition-all ${buttonClasses}`}
      >
        {buttonText}
      </a>
    </div>
  );
};


const Pricing: React.FC = () => {
  const plans = [
    {
      title: "Starter Style",
      price: "Rp 1.500.000",
      features: [
        "3 Desain Kaos Eksklusif",
        "5 Mockup Produk Profesional",
        "Setup Kampanye Iklan (Meta Ads)",
        "Konsultasi Strategi 1 Sesi"
      ],
      buttonText: "Pilih Paket STARTER",
      buttonHref: "https://wa.me/6281244286970"
    },
    {
      title: "Growth Collection",
      price: "Rp 3.500.000",
      features: [
        "8 Desain Kaos Eksklusif",
        "12 Mockup Produk & Marketing Kit",
        "Manajemen Konten 2 Minggu",
        "Produksi 1 Konten Video",
        "Konsultasi Strategi 2 Sesi"
      ],
      isPopular: true,
      buttonText: "Pilih Paket GROWTH",
      buttonHref: "https://wa.me/6281244286970"
    },
    {
      title: "Runway Domination",
      price: "Rp 7.000.000",
      features: [
        "15 Desain Kaos Eksklusif",
        "22 Mockup Produk & Marketing Kit",
        "Manajemen Iklan 1 Bulan Penuh",
        "Pembuatan lookbook (15 foto)",
        "Sesi Foto Produk (Opsional)",
        "Konsultasi & Reporting Bulanan"
      ],
      buttonText: "Pilih Paket RUNWAY",
      buttonHref: "https://wa.me/6281244286970"
    }
  ];

  return (
    <section id="pricing" className="bg-white py-24 sm:py-32">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-charcoal">
            Paket Kolaborasi Marketing & Visual
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Pilih paket yang paling sesuai dengan kebutuhan dan visi brand Anda. Kami siap membantu Anda bertumbuh.
          </p>
        </div>
        <div className="mt-20 grid max-w-md grid-cols-1 gap-8 mx-auto lg:max-w-none lg:grid-cols-3">
          {plans.map((plan, index) => (
            <PricingCard key={index} {...plan} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
