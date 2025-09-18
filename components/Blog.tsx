
import React from 'react';
import { ArrowRightIcon } from './icons/ArrowRightIcon';

const blogPosts = [
  {
    title: "5 Tren Desain Kaos yang Akan Mendominasi di 2024",
    description: "Tetap terdepan dalam persaingan dengan memahami tren desain yang akan datang. Dari grafis retro hingga minimalisme modern...",
    imageUrl: "https://picsum.photos/id/211/800/600",
    date: "15 Juli 2024",
    category: "Desain",
  },
  {
    title: "Rahasia Sukses Kampanye Iklan Meta untuk Brand Fashion",
    description: "Pelajari cara menargetkan audiens yang tepat, membuat visual yang menarik, dan mengoptimalkan anggaran iklan Anda di platform Meta.",
    imageUrl: "https://picsum.photos/id/212/800/600",
    date: "10 Juli 2024",
    category: "Marketing",
  },
  {
    title: "Pentingnya Mockup Produk yang Realistis untuk Penjualan",
    description: "Mockup bukan hanya soal visual, tapi soal meyakinkan pelanggan. Lihat bagaimana mockup berkualitas tinggi dapat meningkatkan konversi.",
    imageUrl: "https://picsum.photos/id/213/800/600",
    date: "5 Juli 2024",
    category: "Branding",
  },
];

const Blog: React.FC = () => {
  return (
    <section id="blog" className="bg-cream py-24 sm:py-32">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-charcoal">
            Wawasan & Inspirasi
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Dapatkan tips, tren, dan studi kasus terbaru dari dunia branding dan fashion langsung dari tim kami.
          </p>
        </div>
        <div className="mt-16 grid gap-8 lg:grid-cols-3 max-w-none">
          {blogPosts.map((post) => (
            <div key={post.title} className="flex flex-col rounded-2xl shadow-lg overflow-hidden bg-white group">
              <div className="flex-shrink-0">
                <img className="h-48 w-full object-cover" src={post.imageUrl} alt="" />
              </div>
              <div className="flex-1 p-6 flex flex-col justify-between">
                <div className="flex-1">
                  <p className="text-sm font-medium text-muted-gold">
                    <a href="#" className="hover:underline">
                      {post.category}
                    </a>
                  </p>
                  <a href="#" className="block mt-2">
                    <p className="text-xl font-semibold text-charcoal group-hover:text-muted-gold transition-colors">{post.title}</p>
                    <p className="mt-3 text-base text-gray-500">{post.description}</p>
                  </a>
                </div>
                <div className="mt-6 flex items-center justify-between">
                  <div className="text-sm text-gray-500">
                      <time dateTime={post.date}>{post.date}</time>
                  </div>
                   <a href="#" className="text-sm font-semibold text-charcoal hover:text-muted-gold transition-colors flex items-center gap-1">
                      Baca Selengkapnya
                      <ArrowRightIcon className="h-4 w-4" />
                   </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
