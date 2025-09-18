import React, { useState } from 'react';

const Header: React.FC = () => {
  const navItems = [
    { name: "Home", href: "#home" },
    { name: "Tentang Kami", href: "#about" },
    { name: "Paket Harga", href: "#pricing" },
    { name: "Portofolio", href: "#portfolio" },
    { name: "Testimoni", href: "#testimonials" },
    { name: "Blog", href: "#blog" },
    { name: "FAQ", href: "#faq" },
    { name: "Kontak", href: "#contact" },
  ];

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-cream/80 backdrop-blur-lg border-b border-gray-200/50">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <a href="#home" onClick={(e) => handleScroll(e, '#home')} className="text-2xl font-bold tracking-tight text-charcoal">
              SIMULASI GAYA
            </a>
          </div>
          <nav className="hidden lg:flex lg:space-x-8">
            {navItems.map((item) => (
              <a 
                key={item.name} 
                href={item.href} 
                onClick={(e) => handleScroll(e, item.href)}
                className="text-sm font-medium text-gray-600 hover:text-charcoal transition-colors"
              >
                {item.name}
              </a>
            ))}
          </nav>
          <div className="flex items-center">
            <a
              href="https://wa.me/6281244286970"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 text-sm font-semibold text-white bg-charcoal rounded-full hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-charcoal transition-all"
            >
              Konsultasi Sekarang
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;