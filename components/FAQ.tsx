
import React, { useState } from 'react';
import { PlusIcon } from './icons/PlusIcon';
import { MinusIcon } from './icons/MinusIcon';

const faqs = [
  {
    question: "Apa saja layanan utama yang ditawarkan oleh Simulasi Gaya?",
    answer: "Kami menawarkan layanan lengkap mulai dari desain grafis untuk kaos dan merchandise, pembuatan mockup produk, manajemen kampanye iklan digital (Meta Ads), hingga sesi foto produk dan konsultasi strategi branding secara keseluruhan.",
  },
  {
    question: "Berapa lama waktu yang dibutuhkan untuk menyelesaikan satu proyek desain?",
    answer: "Waktu pengerjaan bervariasi tergantung pada paket yang dipilih dan kompleksitas permintaan. Untuk paket 'Starter Style', pengerjaan biasanya memakan waktu 5-7 hari kerja. Kami akan memberikan timeline yang lebih detail saat konsultasi awal.",
  },
  {
    question: "Apakah saya bisa meminta revisi desain?",
    answer: "Tentu saja. Setiap paket kami menyertakan sejumlah revisi. Jumlah revisi yang termasuk akan dijelaskan dalam proposal proyek Anda. Kami ingin memastikan Anda puas dengan hasil akhirnya.",
  },
  {
    question: "Bagaimana proses pembayaran dilakukan?",
    answer: "Proses pembayaran biasanya dibagi menjadi dua tahap: 50% uang muka sebelum proyek dimulai, dan 50% sisa pembayaran setelah semua hasil kerja disetujui dan diserahkan.",
  },
  {
    question: "Apakah Simulasi Gaya juga melayani produksi fisik kaos?",
    answer: "Fokus utama kami adalah pada sisi desain dan strategi marketing. Namun, kami memiliki jaringan vendor produksi terpercaya dan dapat membantu mengkoordinasikan proses produksi jika Anda membutuhkannya sebagai layanan tambahan.",
  },
];

const FAQItem: React.FC<{ faq: { question: string; answer: string }; isOpen: boolean; onClick: () => void }> = ({ faq, isOpen, onClick }) => {
  return (
    <div className="border-b border-gray-200 py-6">
      <dt>
        <button
          onClick={onClick}
          className="w-full flex justify-between items-start text-left text-charcoal"
          aria-expanded={isOpen}
        >
          <span className="text-lg font-medium">{faq.question}</span>
          <span className="ml-6 h-7 flex items-center">
            {isOpen ? <MinusIcon className="h-6 w-6" /> : <PlusIcon className="h-6 w-6" />}
          </span>
        </button>
      </dt>
      {isOpen && (
        <dd className="mt-2 pr-12">
          <p className="text-base text-gray-600">{faq.answer}</p>
        </dd>
      )}
    </div>
  );
};

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const handleClick = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="bg-white py-24 sm:py-32">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-center text-4xl sm:text-5xl font-extrabold tracking-tight text-charcoal">
            Pertanyaan yang Sering Diajukan
          </h2>
          <p className="mt-4 text-center text-lg text-gray-600">
            Tidak menemukan jawaban yang Anda cari? Hubungi kami langsung.
          </p>
          <dl className="mt-12 space-y-2">
            {faqs.map((faq, index) => (
              <FAQItem
                key={index}
                faq={faq}
                isOpen={openIndex === index}
                onClick={() => handleClick(index)}
              />
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
