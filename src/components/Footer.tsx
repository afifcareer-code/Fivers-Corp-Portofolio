import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { AppLink } from '../context/RouterContext';
import { TRANSLATIONS } from '../data/i18n';
import { AppRoute } from '../types';
import { FiversLogo } from './FiversLogo';
import { LanguageSwitcher } from './LanguageSwitcher';

export function Footer() {
  const { language } = useLanguage();
  const copy = TRANSLATIONS[language];

  const footerLinks: { label: string; to: AppRoute }[] = [
    { label: copy.nav.home, to: '/' },
    { label: copy.nav.company, to: '/company' },
    { label: copy.nav.technology, to: '/technology' },
    { label: copy.nav.products, to: '/products' },
    { label: copy.nav.businesses, to: '/businesses' },
    { label: copy.nav.contact, to: '/contact' },
  ];

  return (
    <footer className="border-t border-[#F5F7F4]/10 bg-[#0D120F]">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-8 sm:gap-10 md:gap-8 pb-10 border-b border-[#F5F7F4]/10">
          <div className="sm:col-span-2 md:col-span-6 space-y-4">
            <AppLink to="/" aria-label="Fivers Corp Home">
              <FiversLogo variant="dark" showCorp />
            </AppLink>
            <div className="space-y-1 text-sm sm:text-base text-[#A7B3A9] leading-relaxed">
              <p className="text-[#F5F7F4]">{copy.footer.line1}</p>
              <p>{copy.footer.line2}</p>
            </div>
            <div className="pt-1">
              <LanguageSwitcher />
            </div>
          </div>

          <div className="md:col-span-3 space-y-3">
            <h2 className="text-xs font-mono tracking-[0.08em] text-[#A7B3A9]">
              {copy.footer.navigationTitle}
            </h2>
            <ul className="grid grid-cols-2 sm:grid-cols-1 gap-2.5">
              {footerLinks.map((link) => (
                <li key={link.to}>
                  <AppLink
                    to={link.to}
                    className="inline-block py-0.5 text-sm text-[#F5F7F4]/85 hover:text-[#C5F03C] transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C5F03C] rounded-sm"
                  >
                    {link.label}
                  </AppLink>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3 space-y-3">
            <h2 className="text-xs font-mono tracking-[0.08em] text-[#A7B3A9]">
              {copy.footer.locationTitle}
            </h2>
            <div className="space-y-1.5 text-sm text-[#F5F7F4]/85">
              <p>{copy.footer.region}</p>
              <p className="text-[#A7B3A9]">{copy.footer.country}</p>
            </div>
          </div>
        </div>

        <div className="pt-8 space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 text-xs text-[#A7B3A9]">
            <p>{copy.footer.copyright}</p>
            <p className="text-[#A7B3A9]/80">{copy.footer.tags}</p>
          </div>
          <p className="text-[11px] text-[#A7B3A9]/75 leading-relaxed max-w-4xl">
            {copy.footer.disclaimer}
          </p>
        </div>
      </div>
    </footer>
  );
}
