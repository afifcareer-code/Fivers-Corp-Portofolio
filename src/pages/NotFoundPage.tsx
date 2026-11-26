import React from 'react';
import { AppLink } from '../context/RouterContext';
import { useLanguage } from '../context/LanguageContext';

export function NotFoundPage() {
  const { language } = useLanguage();
  const isId = language === 'id';

  return (
    <section className="bg-[#0D120F] py-20 sm:py-28 lg:py-36 border-b border-[#F5F7F4]/10">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl space-y-6">
          <p className="font-mono text-xs tracking-[0.16em] text-[#F2B84B]">
            404 · {isId ? 'HALAMAN TIDAK DITEMUKAN' : 'PAGE NOT FOUND'}
          </p>

          <h1 className="text-[clamp(2rem,4.5vw,3.5rem)] font-semibold text-[#F5F7F4] leading-[1.1] tracking-[-0.025em]">
            {isId
              ? 'Halaman yang Anda cari tidak tersedia.'
              : 'The page you are looking for does not exist.'}
          </h1>

          <p className="text-base sm:text-lg text-[#A7B3A9] leading-relaxed">
            {isId
              ? 'Alamat URL mungkin telah berubah atau belum tersedia di situs Fivers Corp. Gunakan tautan di bawah ini untuk kembali menjelajahi halaman utama kami.'
              : 'The URL may have changed or is not part of the Fivers Corp website. Use the links below to return to our main sections.'}
          </p>

          <div className="pt-2 flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3 sm:gap-4">
            <AppLink
              to="/"
              className="inline-flex items-center justify-center min-h-[46px] px-6 py-3 rounded-sm bg-[#C5F03C] text-[#0D120F] text-sm font-semibold hover:bg-[#d5f763] transition-colors whitespace-nowrap shrink-0"
            >
              {isId ? 'Kembali ke Beranda →' : 'Return to Home →'}
            </AppLink>

            <AppLink
              to="/products"
              className="inline-flex items-center justify-center min-h-[46px] px-6 py-3 rounded-sm border border-[#F5F7F4]/20 bg-[#151C17] text-[#F5F7F4] text-sm font-medium hover:border-[#C5F03C]/60 hover:text-[#C5F03C] transition-colors whitespace-nowrap shrink-0"
            >
              {isId ? 'Jelajahi Produk' : 'Explore Products'}
            </AppLink>

            <AppLink
              to="/businesses"
              className="inline-flex items-center justify-center min-h-[46px] px-6 py-3 rounded-sm border border-[#F5F7F4]/20 bg-[#151C17] text-[#F5F7F4] text-sm font-medium hover:border-[#F2B84B]/60 hover:text-[#F2B84B] transition-colors whitespace-nowrap shrink-0"
            >
              {isId ? 'Jelajahi Bisnis' : 'Explore Businesses'}
            </AppLink>
          </div>
        </div>
      </div>
    </section>
  );
}
