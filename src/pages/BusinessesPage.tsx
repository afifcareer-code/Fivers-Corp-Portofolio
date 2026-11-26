import React from 'react';
import { BusinessCard } from '../components/BusinessCard';
import { CTASection } from '../components/CTASection';
import { Hero } from '../components/Hero';
import { useLanguage } from '../context/LanguageContext';
import { TRANSLATIONS } from '../data/i18n';

export function BusinessesPage() {
  const { language } = useLanguage();
  const copy = TRANSLATIONS[language];

  return (
    <div>
      <Hero
        eyebrow={copy.businesses.eyebrow}
        title={copy.businesses.title}
        secondaryTitle={copy.businesses.secondaryTitle}
        subtitle={copy.businesses.subtitle}
        compact
      />

      {/* Context Statement */}
      <section className="border-b border-[#F5F7F4]/10 bg-[#0D120F] py-10 sm:py-14">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
          <div className="p-5 sm:p-8 rounded-md border border-[#F2B84B]/25 bg-[#151C17]">
            <p className="text-sm sm:text-lg text-[#F5F7F4] leading-relaxed max-w-4xl">
              {copy.businesses.contextCallout}
            </p>
          </div>
        </div>
      </section>

      {/* Agriculture & Layer Poultry Index */}
      <section className="bg-[#0D120F] py-14 sm:py-22 lg:py-24">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {copy.businesses.items.map((business) => (
              <BusinessCard
                key={business.id}
                business={business}
                ctaTo={business.route}
                ctaLabel={copy.common.viewBusiness}
                showOpportunities
              />
            ))}
          </div>
        </div>
      </section>

      <CTASection
        headline={copy.businesses.ctaHeadline}
        primaryLabel={copy.businesses.ctaPrimary}
        primaryTo="/contact"
        secondaryLabel={copy.businesses.ctaSecondary}
        secondaryTo="/company"
      />
    </div>
  );
}
