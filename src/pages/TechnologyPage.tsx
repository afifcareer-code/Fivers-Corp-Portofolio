import React from 'react';
import { CTASection } from '../components/CTASection';
import { Hero } from '../components/Hero';
import { MediaFrame } from '../components/MediaFrame';
import { SectionHeader } from '../components/SectionHeader';
import { StatusBadge } from '../components/StatusBadge';
import { TechnologyCard } from '../components/TechnologyCard';
import { useLanguage } from '../context/LanguageContext';
import { AppLink } from '../context/RouterContext';
import { FIVERS_IMAGES } from '../data/fiversData';
import { TRANSLATIONS } from '../data/i18n';

export function TechnologyPage() {
  const { language } = useLanguage();
  const copy = TRANSLATIONS[language];

  return (
    <div>
      <Hero
        eyebrow={copy.technology.eyebrow}
        title={copy.technology.title}
        subtitle={copy.technology.subtitle}
        compact
      />

      {/* Core Technology Areas */}
      <section className="border-b border-[#F5F7F4]/10 bg-[#0D120F] py-14 sm:py-22 lg:py-24">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-12">
          <SectionHeader
            index={copy.technology.coreIndex}
            eyebrow={copy.technology.coreEyebrow}
            title={copy.technology.coreTitle}
            subtitle={copy.technology.coreSubtitle}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
            {copy.technology.areas.map((area) => (
              <TechnologyCard key={area.number} area={area} />
            ))}
          </div>
        </div>
      </section>

      {/* Fivers Digital Office */}
      <section className="bg-[#0D120F] py-14 sm:py-22 lg:py-24">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-12">
          <SectionHeader
            index={copy.technology.officeIndex}
            eyebrow={copy.technology.officeEyebrow}
            title={copy.technology.officeTitle}
            subtitle={copy.technology.officeSubtitle}
          />

          <div className="rounded-md border border-[#F5F7F4]/12 bg-[#151C17] overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
              <div className="lg:col-span-6 p-6 sm:p-10 lg:p-12 flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <span className="font-mono text-xs text-[#C5F03C] tracking-[0.08em]">
                      {copy.technology.officeTag}
                    </span>
                    <StatusBadge status="IN DEVELOPMENT" />
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-semibold text-[#F5F7F4] tracking-tight">
                    {copy.technology.officeHeading}
                  </h3>

                  <p className="text-sm sm:text-base text-[#A7B3A9] leading-relaxed">
                    {copy.technology.officeP1}
                  </p>

                  <p className="text-sm sm:text-base text-[#A7B3A9] leading-relaxed">
                    {copy.technology.officeP2}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#F5F7F4]/10 flex flex-wrap items-center justify-between gap-3">
                  <span className="text-xs text-[#A7B3A9]">
                    {copy.technology.officeFooter}
                  </span>
                  <AppLink
                    to="/products/fivers-digital-office"
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-[#C5F03C] hover:underline underline-offset-4"
                  >
                    {copy.common.viewProduct}
                  </AppLink>
                </div>
              </div>

              <div className="lg:col-span-6 aspect-[16/10] lg:aspect-auto lg:min-h-[380px]">
                <MediaFrame
                  src={FIVERS_IMAGES.digitalOffice}
                  alt="Minimalist dark-green architectural software studio interior at Fivers"
                  fallbackLabel="Fivers Digital Office"
                  className="w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        headline={copy.technology.ctaHeadline}
        primaryLabel={copy.technology.ctaPrimary}
        primaryTo="/products"
        secondaryLabel={copy.technology.ctaSecondary}
        secondaryTo="/contact"
      />
    </div>
  );
}
