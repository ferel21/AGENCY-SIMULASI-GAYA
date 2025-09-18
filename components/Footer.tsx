
import React from 'react';
import { TwitterIcon } from './icons/TwitterIcon';
import { FacebookIcon } from './icons/FacebookIcon';
import { InstagramIcon } from './icons/InstagramIcon';


const Footer: React.FC = () => {
  const navItems = [
    { name: "Home", href: "#home" },
    { name: "Tentang Kami", href: "#about" },
    { name: "Paket Harga", href: "#pricing" },
    { name: "Portofolio", href: "#portfolio" },
  ];

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({
        behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-charcoal text-gray-400">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="space-y-4">
            <a href="#home" onClick={(e) => handleScroll(e, '#home')} className="text-2xl font-bold tracking-tight text-white">
              SIMULASI GAYA
            </a>
            <p className="text-sm max-w-xs">Partner strategis Anda dalam membangun identitas visual dan strategi marketing untuk brand fashion Anda.</p>
             <div className="flex space-x-6 pt-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors"><TwitterIcon className="h-6 w-6" /></a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors"><FacebookIcon className="h-6 w-6" /></a>
                <a href="https://www.instagram.com/simulasigaya?igsh=MXMzZ2lwZjFnYTk3NA==" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors"><InstagramIcon className="h-6 w-6" /></a>
            </div>
          </div>
          <div>
            <h3 className="text-sm font-semibold tracking-wider text-white uppercase">Navigasi</h3>
            <ul className="mt-4 space-y-2">
              {navItems.map(item => (
                <li key={item.name}>
                  <a href={item.href} onClick={(e) => handleScroll(e, item.href)} className="text-base text-gray-400 hover:text-white transition-colors">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
           <div>
            <h3 className="text-sm font-semibold tracking-wider text-white uppercase">Hubungi Kami</h3>
            <ul className="mt-4 space-y-2">
                <li><p className="text-base text-gray-400">Jl. Kreatif No. 123, Jakarta</p></li>
                <li><a href="mailto:halo@simulasigaya.com" className="text-base text-gray-400 hover:text-white">halo@simulasigaya.com</a></li>
                <li><a href="tel:+62123456789" className="text-base text-gray-400 hover:text-white">+62 123 456 789</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-16 pt-8 border-t border-gray-700 text-center text-sm">
            <p>&copy; {new Date().getFullYear()} SIMULASI GAYA. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
