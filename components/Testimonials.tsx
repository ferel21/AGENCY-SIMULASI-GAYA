import React, { useState, useEffect, useCallback } from 'react';
import { QuoteIcon } from './icons/QuoteIcon';
import { ChevronLeftIcon } from './icons/ChevronLeftIcon';
import { ChevronRightIcon } from './icons/ChevronRightIcon';

const mainTestimonials = [
  {
    quote: "Kerja sama dengan Simulasi Gaya benar-benar mengubah cara kami memandang branding. Dari konsep hingga eksekusi, semuanya profesional dan hasilnya luar biasa. Brand kami sekarang jauh lebih kompetitif.",
    author: "Ahmad Dhani",
    company: "Founder, Local Pride Apparel",
    image: "https://picsum.photos/id/342/800/800"
  },
  {
    quote: "Tim Simulasi Gaya sangat responsif dan kreatif. Mereka berhasil menerjemahkan visi kami menjadi kampanye iklan yang tidak hanya indah secara visual tetapi juga efektif dalam meningkatkan penjualan.",
    author: "Bunga Citra",
    company: "Marketing Director, Urban Chic",
    image: "https://picsum.photos/id/343/800/800"
  },
  {
    quote: "Desain dan mockup produk yang mereka hasilkan sangat realistis dan membantu kami dalam presentasi ke investor. Pelayanan yang cepat dan hasil yang memuaskan. Sangat direkomendasikan!",
    author: "Reza Rahardian",
    company: "CEO, Nusantara Threads",
    image: "https://picsum.photos/id/344/800/800"
  }
];

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % mainTestimonials.length);
  }, []);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + mainTestimonials.length) % mainTestimonials.length);
  };

  useEffect(() => {
    const slideInterval = setInterval(nextSlide, 5000); // Change slide every 5 seconds
    return () => clearInterval(slideInterval);
  }, [nextSlide]);

  const { quote, author, company, image } = mainTestimonials[currentIndex];

  return (
    <section id="testimonials" className="bg-white py-24 sm:py-32">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
             <div className="absolute -inset-2 bg-gradient-to-br from-cream to-muted-gold opacity-30 rounded-2xl blur-lg"></div>
            <img 
              src={image}
              alt={`Satisfied client ${author}`} 
              className="rounded-2xl shadow-xl w-full h-auto object-cover aspect-square relative transition-all duration-500"
            />
          </div>
          <div className="relative">
            <QuoteIcon className="absolute -top-12 -left-8 h-24 w-24 text-muted-gold/30" />
            <div className="relative h-64 flex items-center">
                <p className="text-2xl sm:text-3xl font-medium text-charcoal leading-relaxed">
                  {quote}
                </p>
            </div>
            <footer className="mt-8">
              <div className="font-semibold text-charcoal">{author}</div>
              <div className="text-gray-500">{company}</div>
            </footer>
             <div className="absolute bottom-0 right-0 flex items-center gap-4">
                <button onClick={prevSlide} aria-label="Previous testimonial" className="p-2 rounded-full bg-cream hover:bg-gray-200 transition-colors">
                    <ChevronLeftIcon className="h-6 w-6 text-charcoal" />
                </button>
                <button onClick={nextSlide} aria-label="Next testimonial" className="p-2 rounded-full bg-cream hover:bg-gray-200 transition-colors">
                    <ChevronRightIcon className="h-6 w-6 text-charcoal" />
                </button>
            </div>
          </div>
        </div>

        <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8">
            <TestimonialCard 
                quote="Desain kaosnya keren dan sesuai dengan target market kami. Proses revisi juga cepat dan mudah."
                // FIX: Changed `author:` to `author` prop
                author="Andi Wijaya"
                company="Owner, Streetwear Inc."
            />
            <TestimonialCard 
                quote="Manajemen iklan Meta Ads yang mereka lakukan sangat efektif, ROI kami meningkat 200% dalam sebulan."
                // FIX: Changed `author:` to `author` prop
                author="Sari Pertiwi"
                company="Manager, Daily Fashion"
            />
            <TestimonialCard 
                quote="Mockup produk yang diberikan sangat realistis dan membantu kami dalam presentasi ke calon distributor."
                // FIX: Changed `author:` to `author` prop
                author="Budi Santoso"
                company="Founder, Kids Wear"
            />
        </div>
      </div>
    </section>
  );
};

interface TestimonialCardProps {
    quote: string;
    author: string;
    company: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ quote, author, company }) => {
    return (
        <div className="bg-cream/60 p-8 rounded-2xl border border-gray-200/50 shadow-sm relative">
            <QuoteIcon className="absolute top-6 left-6 h-10 w-10 text-muted-gold/40" />
            <p className="relative z-10 mt-4 text-charcoal">{quote}</p>
            <div className="mt-6 border-t border-gray-300/50 pt-4">
                <div className="font-semibold text-charcoal">{author}</div>
                <div className="text-sm text-gray-500">{company}</div>
            </div>
        </div>
    )
}

export default Testimonials;