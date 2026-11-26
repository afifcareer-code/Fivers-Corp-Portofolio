import React from 'react';
import { CapabilityCard } from '../components/CapabilityCard';
import { CTASection } from '../components/CTASection';
import { Hero } from '../components/Hero';
import { MediaFrame } from '../components/MediaFrame';
import { SectionHeader } from '../components/SectionHeader';
import { useLanguage } from '../context/LanguageContext';
import { FIVERS_IMAGES } from '../data/fiversData';
import { TRANSLATIONS } from '../data/i18n';

export function CompanyPage() {
  const { language } = useLanguage();
  const copy = TRANSLATIONS[language];

  return (
    <div>
      <Hero
        eyebrow={copy.company.eyebrow}
        title={copy.company.title}
        subtitle={copy.company.subtitle}
        compact
      />

      {/* Who We Are & Our Direction */}
      <section className="border-b border-[#F5F7F4]/10 bg-[#0D120F] py-14 sm:py-22 lg:py-24">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start">
            <div className="lg:col-span-5">
              <SectionHeader
                index={copy.company.whoIndex}
                eyebrow={copy.company.whoEyebrow}
                title={copy.company.whoTitle}
              />
            </div>

            <div className="lg:col-span-7 space-y-5 text-base sm:text-lg text-[#A7B3A9] leading-relaxed">
              {copy.company.whoParagraphs.map((paragraph, idx) => (
                <p key={idx} className={idx === 0 ? 'text-[#F5F7F4]' : ''}>
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6 pt-8 border-t border-[#F5F7F4]/10">
            <div className="lg:col-span-6 p-6 sm:p-8 rounded-md border border-[#C5F03C]/30 bg-[#151C17] space-y-4">
              <p className="font-mono text-xs tracking-[0.12em] text-[#C5F03C]">
                {copy.company.coreLabel}
              </p>
              <h3 className="text-xl sm:text-2xl font-semibold text-[#F5F7F4]">
                {copy.company.coreTitle}
              </h3>
              <p className="text-sm sm:text-base text-[#A7B3A9] leading-relaxed">
                {copy.company.coreDesc}
              </p>
            </div>

            <div className="lg:col-span-6 p-6 sm:p-8 rounded-md border border-[#F5F7F4]/12 bg-[#151C17] space-y-4">
              <p className="font-mono text-xs tracking-[0.12em] text-[#F2B84B]">
                {copy.company.extLabel}
              </p>
              <h3 className="text-xl sm:text-2xl font-semibold text-[#F5F7F4]">
                {copy.company.extTitle}
              </h3>
              <p className="text-sm sm:text-base text-[#A7B3A9] leading-relaxed">
                {copy.company.extDesc}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="border-b border-[#F5F7F4]/10 bg-[#0D120F] py-14 sm:py-22 lg:py-24">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-12">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <SectionHeader
              index={copy.company.howIndex}
              eyebrow={copy.company.howEyebrow}
              title={copy.company.howTitle}
              subtitle={copy.company.howSubtitle}
            />

            <div className="px-4 py-3 rounded-sm border border-[#C5F03C]/25 bg-[#151C17] self-start lg:self-auto shrink-0">
              <p className="text-sm font-medium text-[#F5F7F4]">
                {copy.company.howMantraLead}{' '}
                <span className="text-[#C5F03C]">{copy.company.howMantraAccent}</span>
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {copy.company.workflowSteps.map((item) => (
              <div
                key={item.step}
                className="flex flex-col justify-between p-6 rounded-md border border-[#F5F7F4]/12 bg-[#151C17] space-y-3"
              >
                <span className="font-mono text-xs text-[#C5F03C] tabular-nums">
                  {item.step}
                </span>
                <h3 className="text-lg font-semibold text-[#F5F7F4]">
                  {item.title}
                </h3>
                <p className="text-sm text-[#A7B3A9] leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities Behind Fivers */}
      <section className="border-b border-[#F5F7F4]/10 bg-[#0D120F] py-14 sm:py-22 lg:py-24">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-12">
          <SectionHeader
            index={copy.company.capIndex}
            eyebrow={copy.company.capEyebrow}
            title={copy.company.capTitle}
            subtitle={copy.company.capSubtitle}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {copy.company.capabilities.map((capability, idx) => (
              <div
                key={capability.number}
                className={idx === 6 ? 'md:col-span-2 lg:col-span-3' : ''}
              >
                <CapabilityCard capability={capability} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder */}
      <section className="bg-[#0D120F] py-14 sm:py-22 lg:py-24">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-12">
          <SectionHeader
            index={copy.company.founderIndex}
            eyebrow={copy.company.founderEyebrow}
            title={copy.company.founderTitle}
          />

          <div className="rounded-md border border-[#F5F7F4]/12 bg-[#151C17] overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-12 items-stretch">
              <div className="md:col-span-4 aspect-[3/4] md:aspect-auto md:min-h-[360px]">
                <MediaFrame
                  src={FIVERS_IMAGES.founderPortrait}
                  alt="Afif Firmansyah, Founder and Director of Fivers Corp"
                  fallbackLabel="Afif Firmansyah"
                  className="w-full h-full"
                  imgClassName="object-top"
                />
              </div>

              <div className="md:col-span-8 p-6 sm:p-10 lg:p-12 flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <div>
                    <p className="font-mono text-xs text-[#C5F03C] tracking-[0.08em]">
                      {copy.company.founderRole}
                    </p>
                    <h3 className="text-2xl sm:text-3xl font-semibold text-[#F5F7F4] mt-1.5">
                      Afif Firmansyah
                    </h3>
                  </div>

                  <p className="text-sm sm:text-base text-[#A7B3A9] leading-relaxed max-w-2xl">
                    {copy.company.founderP1}
                  </p>
                  <p className="text-sm sm:text-base text-[#A7B3A9] leading-relaxed max-w-2xl">
                    {copy.company.founderP2}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#F5F7F4]/10 flex flex-wrap items-center justify-between gap-2 text-xs text-[#A7B3A9]">
                  <span>Fivers Corp</span>
                  <span>
                    {copy.footer.region} · {copy.footer.country}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        headline={copy.company.ctaHeadline}
        primaryLabel={copy.company.ctaPrimary}
        primaryTo="/technology"
        secondaryLabel={copy.company.ctaSecondary}
        secondaryTo="/products"
      />
    </div>
  );
}
