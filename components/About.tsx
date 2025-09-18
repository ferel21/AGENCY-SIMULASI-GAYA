
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="bg-cream py-24 sm:py-32">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative lg:order-last">
            <img 
              src="https://picsum.photos/id/163/800/800" 
              alt="Team at work"
              className="rounded-2xl shadow-xl w-full h-auto object-cover aspect-square"
            />
          </div>
          <div>
            <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-charcoal">
              Tentang SIMULASI GAYA
            </h2>
            <p className="mt-6 text-lg text-gray-600 leading-relaxed">
              Kami adalah agensi kreatif yang bersemangat membantu brand fashion lokal bersinar. Misi kami sederhana: mengubah ide brilian menjadi visual yang memikat dan strategi marketing yang efektif. Kami percaya bahwa setiap brand punya cerita unik, dan tugas kami adalah menerjemahkannya menjadi pengalaman yang tak terlupakan bagi audiens.
            </p>
            <p className="mt-4 text-lg text-gray-600 leading-relaxed">
              Kami bukan hanya vendor, kami adalah partner pertumbuhan Anda. Dengan pendekatan yang kolaboratif, kami mendengarkan, merancang, dan mengeksekusi strategi yang disesuaikan khusus untuk brand Anda.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
