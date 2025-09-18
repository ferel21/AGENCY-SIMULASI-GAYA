
import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="relative bg-cream overflow-hidden py-24 sm:py-32">
       <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div>
                    <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-charcoal">
                        Siap Mengubah Simulasi Menjadi Realita?
                    </h2>
                    <p className="mt-4 text-lg text-gray-600 max-w-xl">
                        Hubungi kami sekarang untuk konsultasi gratis. Mari kita diskusikan bagaimana kami dapat membantu brand fashion Anda tumbuh dan bersinar. Isi form di samping atau hubungi kami melalui detail di bawah ini.
                    </p>
                    <div className="mt-8 space-y-4 text-charcoal">
                         <div className="flex items-start gap-4">
                            <p className="mt-1 font-semibold">Alamat:</p>
                            <p>Jl. Kreatif No. 123, Jakarta, Indonesia</p>
                         </div>
                          <div className="flex items-start gap-4">
                            <p className="mt-1 font-semibold">Email:</p>
                            <a href="mailto:halo@simulasigaya.com" className="hover:text-muted-gold">halo@simulasigaya.com</a>
                         </div>
                          <div className="flex items-start gap-4">
                            <p className="mt-1 font-semibold">Telepon:</p>
                            <a href="tel:+62123456789" className="hover:text-muted-gold">+62 123 456 789</a>
                         </div>
                    </div>
                </div>

                <div className="bg-white p-8 sm:p-12 rounded-2xl shadow-xl">
                    <form action="#" method="POST" className="space-y-6">
                        <div>
                            <label htmlFor="full-name" className="block text-sm font-medium text-charcoal">Nama Lengkap</label>
                            <div className="mt-1">
                                <input type="text" name="full-name" id="full-name" autoComplete="name" className="block w-full rounded-md border-gray-300 shadow-sm focus:border-muted-gold focus:ring-muted-gold sm:text-sm p-3" />
                            </div>
                        </div>
                         <div>
                            <label htmlFor="email" className="block text-sm font-medium text-charcoal">Email</label>
                            <div className="mt-1">
                                <input id="email" name="email" type="email" autoComplete="email" className="block w-full rounded-md border-gray-300 shadow-sm focus:border-muted-gold focus:ring-muted-gold sm:text-sm p-3" />
                            </div>
                        </div>
                         <div>
                            <label htmlFor="subject" className="block text-sm font-medium text-charcoal">Subjek</label>
                            <div className="mt-1">
                                <input type="text" name="subject" id="subject" className="block w-full rounded-md border-gray-300 shadow-sm focus:border-muted-gold focus:ring-muted-gold sm:text-sm p-3" />
                            </div>
                        </div>
                         <div>
                            <label htmlFor="message" className="block text-sm font-medium text-charcoal">Pesan</label>
                            <div className="mt-1">
                                <textarea id="message" name="message" rows={4} className="block w-full rounded-md border-gray-300 shadow-sm focus:border-muted-gold focus:ring-muted-gold sm:text-sm p-3"></textarea>
                            </div>
                        </div>
                        <div>
                             <button
                                type="submit"
                                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-full shadow-sm text-lg font-semibold text-white bg-charcoal hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-charcoal transition-all"
                            >
                                Kirim Pesan
                            </button>
                        </div>
                    </form>
                </div>
            </div>
       </div>
    </section>
  );
};

export default Contact;
