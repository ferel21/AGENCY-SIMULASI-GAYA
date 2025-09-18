
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative overflow-hidden py-24 sm:py-32">
        <div className="absolute inset-0 bg-cream z-0"></div>
        <div 
          className="absolute inset-0 opacity-10 z-0" 
          style={{backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%232c2c2c\' fill-opacity=\'0.4\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")'
        }}></div>
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter text-charcoal">
              Bawa Brand Lokal Anda ke Level Selanjutnya.
            </h1>
            <p className="mt-6 text-lg text-gray-600 max-w-xl mx-auto lg:mx-0">
              SIMULASI GAYA adalah partner strategis Anda dalam membangun identitas visual dan strategi marketing yang menjual untuk brand fashion Anda.
            </p>
            <div className="mt-10">
              <a
                href="https://wa.me/6281244286970"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-4 text-lg font-semibold text-white bg-charcoal rounded-full hover:bg-opacity-90 transform hover:scale-105 transition-all shadow-lg"
              >
                Diskusi Proyek Anda
              </a>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="relative w-full max-w-md">
                <div className="absolute -inset-2 bg-gradient-to-br from-muted-gold to-cream opacity-50 rounded-2xl blur-lg"></div>
                <img
                  src="https://picsum.photos/id/1075/600/800"
                  alt="Modern Architecture"
                  className="relative rounded-2xl shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500 w-full"
                />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
