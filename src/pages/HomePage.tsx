import React from 'react';
import { Cpu, Layers, Sprout } from 'lucide-react';
import { BusinessCard } from '../components/BusinessCard';
import { CTASection } from '../components/CTASection';
import { MediaFrame } from '../components/MediaFrame';
import { ProductCard } from '../components/ProductCard';
import { SectionHeader } from '../components/SectionHeader';
import { useLanguage } from '../context/LanguageContext';
import { AppLink } from '../context/RouterContext';
import { FIVERS_IMAGES } from '../data/fiversData';
import { TRANSLATIONS } from '../data/i18n';

export function HomePage() {
  const { language } = useLanguage();
  const copy = TRANSLATIONS[language];

  const liveProducts = copy.products.items.filter((p) => p.status === 'LIVE');
  const pipelineProducts = copy.products.items.filter((p) => p.status !== 'LIVE');

  return (
    <div>
      {/* 07 — HERO */}
      <section className="relative border-b border-[#F5F7F4]/10 bg-[#0D120F] overflow-hidden">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-24 right-0 w-[620px] h-[620px] rounded-full bg-[#C5F03C]/[0.03] blur-3xl"
        />

        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8 pt-10 pb-14 sm:pt-16 sm:pb-22 lg:pt-20 lg:pb-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-12 items-center">
            <div className="lg:col-span-6 space-y-5 sm:space-y-6">
              <p className="font-mono text-xs tracking-[0.16em] text-[#C5F03C]">
                {copy.home.heroEyebrow}
              </p>

              <h1 className="text-[clamp(1.95rem,4.4vw,3.75rem)] font-semibold text-[#F5F7F4] leading-[1.08] tracking-[-0.025em] text-balance">
                {copy.home.heroTitleLead}{' '}
                <span className="text-[#A7B3A9]">
                  {copy.home.heroTitleAccent}
                </span>
              </h1>

              <p className="text-base sm:text-lg text-[#A7B3A9] leading-relaxed max-w-xl">
                {copy.home.heroSubtitle}
              </p>

              <div className="pt-2 flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3 sm:gap-4">
                <AppLink
                  to="/technology"
                  className="inline-flex items-center justify-center min-h-[46px] px-6 py-3 rounded-sm bg-[#C5F03C] text-[#0D120F] text-sm font-semibold hover:bg-[#d5f763] transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C5F03C]"
                >
                  {copy.home.heroPrimaryCta}
                </AppLink>

                <AppLink
                  to="/products"
                  className="inline-flex items-center justify-center min-h-[46px] px-6 py-3 rounded-sm border border-[#F5F7F4]/20 bg-[#151C17] text-[#F5F7F4] text-sm font-medium hover:border-[#C5F03C]/60 hover:text-[#C5F03C] transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C5F03C]"
                >
                  {copy.home.heroSecondaryCta}
                </AppLink>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative rounded-md border border-[#F5F7F4]/12 bg-[#151C17] overflow-hidden">
                <div className="aspect-[16/10] sm:aspect-[16/9] w-full">
                  <MediaFrame
                    src={FIVERS_IMAGES.heroTechCore}
                    alt="Modern dark architectural technology studio with clean software architecture diagram on a glass display"
                    fallbackLabel="Fivers Corp — Technology at the Core"
                    priority
                    className="w-full h-full"
                  >
                    <div
                      aria-hidden="true"
                      className="absolute inset-0 bg-gradient-to-t from-[#0D120F]/88 via-[#0D120F]/15 to-transparent"
                    />
                    <div className="absolute bottom-3 left-4 right-4 sm:bottom-4 sm:left-5 sm:right-5 flex flex-wrap items-center justify-between gap-2 text-[11px] sm:text-xs text-[#F5F7F4]/90">
                      <span>{copy.home.heroCaptionLeft}</span>
                      <span className="font-mono text-[#C5F03C]">
                        {copy.home.heroCaptionRight}
                      </span>
                    </div>
                  </MediaFrame>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 08 — COMPANY OVERVIEW */}
      <section className="border-b border-[#F5F7F4]/10 bg-[#0D120F] py-16 sm:py-22 lg:py-24">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-12">
          <SectionHeader
            index={copy.home.overviewIndex}
            eyebrow={copy.home.overviewEyebrow}
            title={copy.home.overviewTitle}
            subtitle={copy.home.overviewSubtitle}
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
            <article className="flex flex-col justify-between p-6 sm:p-8 rounded-md border border-[#F5F7F4]/15 bg-[#151C17] hover:border-[#C5F03C]/45 transition-colors duration-150 space-y-7 sm:space-y-8">
              <div className="space-y-4">
                <div className="w-10 h-10 rounded-sm border border-[#C5F03C]/30 bg-[#C5F03C]/10 text-[#C5F03C] flex items-center justify-center">
                  <Cpu className="w-5 h-5" />
                </div>
                <div className="space-y-1.5">
                  <h3 className="text-xl sm:text-2xl font-semibold text-[#F5F7F4] tracking-tight">
                    {copy.home.overviewCards.technology.title}
                  </h3>
                  <p className="text-sm font-medium text-[#C5F03C]">
                    {copy.home.overviewCards.technology.lead}
                  </p>
                </div>
                <p className="text-sm sm:text-base text-[#A7B3A9] leading-relaxed">
                  {copy.home.overviewCards.technology.desc}
                </p>
              </div>
              <div className="pt-4 border-t border-[#F5F7F4]/10">
                <AppLink
                  to="/technology"
                  className="inline-flex items-center gap-2 text-sm font-medium text-[#C5F03C] hover:underline underline-offset-4"
                >
                  {copy.home.overviewCards.technology.cta}
                </AppLink>
              </div>
            </article>

            <article className="flex flex-col justify-between p-6 sm:p-8 rounded-md border border-[#F5F7F4]/12 bg-[#151C17] hover:border-[#C5F03C]/45 transition-colors duration-150 space-y-7 sm:space-y-8">
              <div className="space-y-4">
                <div className="w-10 h-10 rounded-sm border border-[#F5F7F4]/15 bg-[#0D120F] text-[#F5F7F4] flex items-center justify-center">
                  <Layers className="w-5 h-5" />
                </div>
                <div className="space-y-1.5">
                  <h3 className="text-xl sm:text-2xl font-semibold text-[#F5F7F4] tracking-tight">
                    {copy.home.overviewCards.products.title}
                  </h3>
                  <p className="text-sm font-medium text-[#F5F7F4]/90">
                    {copy.home.overviewCards.products.lead}
                  </p>
                </div>
                <p className="text-sm sm:text-base text-[#A7B3A9] leading-relaxed">
                  {copy.home.overviewCards.products.desc}
                </p>
              </div>
              <div className="pt-4 border-t border-[#F5F7F4]/10">
                <AppLink
                  to="/products"
                  className="inline-flex items-center gap-2 text-sm font-medium text-[#C5F03C] hover:underline underline-offset-4"
                >
                  {copy.home.overviewCards.products.cta}
                </AppLink>
              </div>
            </article>

            <article className="flex flex-col justify-between p-6 sm:p-8 rounded-md border border-[#F5F7F4]/12 bg-[#151C17] hover:border-[#F2B84B]/45 transition-colors duration-150 space-y-7 sm:space-y-8">
              <div className="space-y-4">
                <div className="w-10 h-10 rounded-sm border border-[#F2B84B]/25 bg-[#F2B84B]/10 text-[#F2B84B] flex items-center justify-center">
                  <Sprout className="w-5 h-5" />
                </div>
                <div className="space-y-1.5">
                  <h3 className="text-xl sm:text-2xl font-semibold text-[#F5F7F4] tracking-tight">
                    {copy.home.overviewCards.businesses.title}
                  </h3>
                  <p className="text-sm font-medium text-[#F2B84B]">
                    {copy.home.overviewCards.businesses.lead}
                  </p>
                </div>
                <p className="text-sm sm:text-base text-[#A7B3A9] leading-relaxed">
                  {copy.home.overviewCards.businesses.desc}
                </p>
              </div>
              <div className="pt-4 border-t border-[#F5F7F4]/10">
                <AppLink
                  to="/businesses"
                  className="inline-flex items-center gap-2 text-sm font-medium text-[#C5F03C] hover:underline underline-offset-4"
                >
                  {copy.home.overviewCards.businesses.cta}
                </AppLink>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* 09 — TECHNOLOGY PHILOSOPHY */}
      <section className="border-b border-[#F5F7F4]/10 bg-[#0D120F] py-16 sm:py-22 lg:py-24">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-end">
            <div className="lg:col-span-6 space-y-3">
              <p className="font-mono text-xs tracking-[0.12em] text-[#C5F03C]">
                {copy.home.philosophyEyebrow}
              </p>
              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-semibold text-[#F5F7F4] tracking-tight leading-[1.1] text-balance">
                {copy.home.philosophyTitle}
              </h2>
            </div>

            <div className="lg:col-span-6">
              <p className="text-base sm:text-lg text-[#A7B3A9] leading-relaxed max-w-xl">
                {copy.home.philosophySubtitle}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {copy.home.leverageFlow.map((step, idx) => (
              <div
                key={step.verb}
                className={`flex flex-col justify-between p-5 sm:p-6 rounded-md border border-[#F5F7F4]/10 bg-[#151C17] space-y-4 ${
                  idx === 4 ? 'sm:col-span-2 lg:col-span-1' : ''
                }`}
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between gap-2">
                    <span className="font-mono text-xs font-medium tracking-[0.1em] text-[#C5F03C]">
                      {step.verb}
                    </span>
                    {idx < copy.home.leverageFlow.length - 1 && (
                      <span
                        aria-hidden="true"
                        className="text-xs font-mono text-[#A7B3A9]/70 hidden lg:inline"
                      >
                        →
                      </span>
                    )}
                  </div>

                  <h3 className="text-lg font-semibold text-[#F5F7F4] leading-snug">
                    {step.subject}
                  </h3>

                  <p className="text-sm text-[#A7B3A9] leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10 — FEATURED PRODUCTS */}
      <section className="border-b border-[#F5F7F4]/10 bg-[#0D120F] py-16 sm:py-22 lg:py-24">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-12">
          <SectionHeader
            index={copy.home.productsIndex}
            eyebrow={copy.home.productsEyebrow}
            title={copy.home.productsTitle}
            subtitle={copy.home.productsSubtitle}
            action={
              <AppLink
                to="/products"
                className="inline-flex items-center gap-2 text-sm font-medium text-[#C5F03C] hover:underline underline-offset-4 whitespace-nowrap shrink-0"
              >
                {copy.home.productsViewAll}
              </AppLink>
            }
          />

          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
              {liveProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  featured
                />
              ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {pipelineProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 11 — REAL-WORLD BUSINESS */}
      <section className="bg-[#0D120F] py-16 sm:py-22 lg:py-24">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-end">
            <div className="lg:col-span-6 space-y-3">
              <div className="flex items-center gap-2.5 text-xs font-mono tracking-[0.08em] text-[#A7B3A9]">
                <span className="text-[#F2B84B] tabular-nums">
                  {copy.home.businessIndex}
                </span>
                <span aria-hidden="true">·</span>
                <span>{copy.home.businessEyebrow}</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-semibold text-[#F5F7F4] tracking-tight leading-[1.12] text-balance">
                {copy.home.businessTitle}
              </h2>
            </div>

            <div className="lg:col-span-6 space-y-3">
              <p className="text-base text-[#A7B3A9] leading-relaxed">
                {copy.home.businessP1}
              </p>
              <p className="text-sm text-[#A7B3A9]/90 leading-relaxed">
                {copy.home.businessP2}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
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

      {/* 12 — CLOSING STATEMENT */}
      <CTASection
        headline={copy.home.closingHeadline}
        subtext={copy.home.closingSubtext}
        primaryLabel={copy.home.closingPrimaryCta}
        primaryTo="/contact"
        secondaryLabel={copy.home.closingSecondaryCta}
        secondaryTo="/company"
      />
    </div>
  );
}
