import React, { useState, useMemo } from 'react';

const categories = ["Semua", "Desain Kaos", "Kampanye Iklan", "Mockup Produk", "Fotografi"];

const portfolioItems = [
  // Desain Kaos
  { src: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=764&auto=format&fit=crop", category: "Desain Kaos" },
  { src: "https://images.unsplash.com/photo-1622584920454-e913a344917f?q=80&w=687&auto=format&fit=crop", category: "Desain Kaos" },
  { src: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=870&auto=format&fit=crop", category: "Desain Kaos" },
  
  // Kampanye Iklan
  { src: "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=870&auto=format&fit=crop", category: "Kampanye Iklan" },
  { src: "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?q=80&w=870&auto=format&fit=crop", category: "Kampanye Iklan" },
  { src: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=870&auto=format&fit=crop", category: "Kampanye Iklan" },
  
  // Mockup Produk
  { src: "https://images.unsplash.com/photo-1620799140408-edc6d5f9650d?q=80&w=772&auto=format&fit=crop", category: "Mockup Produk" },
  { src: "https://images.unsplash.com/photo-1598428142137-53b53f055e8c?q=80&w=687&auto=format&fit=crop", category: "Mockup Produk" },
  { src: "https://images.unsplash.com/photo-1588099768531-a72d4a198538?q=80&w=735&auto=format&fit=crop", category: "Mockup Produk" },

  // Fotografi
  { src: "https://images.unsplash.com/photo-1492707892479-7bc8d5a4ee93?q=80&w=765&auto=format&fit=crop", category: "Fotografi" },
  { src: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?q=80&w=687&auto=format&fit=crop", category: "Fotografi" },
  { src: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=720&auto=format&fit=crop", category: "Fotografi" },
];


const Portfolio: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("Semua");

  const filteredImages = useMemo(() => {
    if (activeCategory === "Semua") {
      return portfolioItems;
    }
    return portfolioItems.filter(item => item.category === activeCategory);
  }, [activeCategory]);

  return (
    <section id="portfolio" className="bg-cream py-24 sm:py-32">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-charcoal">
            Inspirasi Gaya dari Simulasi Kami
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Lihatlah hasil karya dan proyek yang telah kami selesaikan dengan bangga bersama klien kami.
          </p>
        </div>
        <div className="mt-12 flex justify-center flex-wrap gap-4">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 text-sm font-semibold rounded-full transition-colors ${
                activeCategory === category
                  ? 'bg-charcoal text-white shadow-md'
                  : 'bg-white text-charcoal hover:bg-gray-100'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        <div className="mt-16 columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
            {filteredImages.map((item, index) => (
                <div key={`${item.src}-${index}`} className="break-inside-avoid">
                    <img src={item.src} alt={`Portfolio item for ${item.category}`} className="rounded-xl shadow-lg w-full h-auto transition-transform duration-300 hover:scale-105" />
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;