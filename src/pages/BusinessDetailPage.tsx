import React from 'react';
import { ArrowLeft, ArrowRight, MapPin } from 'lucide-react';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { CTASection } from '../components/CTASection';
import { MediaFrame } from '../components/MediaFrame';
import { useLanguage } from '../context/LanguageContext';
import { AppLink } from '../context/RouterContext';
import { TRANSLATIONS } from '../data/i18n';
import { BusinessSlug } from '../types';

interface BusinessDetailPageProps {
  slug: BusinessSlug;
}

export function BusinessDetailPage({ slug }: BusinessDetailPageProps) {
  const { language } = useLanguage();
  const copy = TRANSLATIONS[language];

  const business =
    copy.businesses.items.find((item) => item.slug === slug) ??
    copy.businesses.items[0];
  const otherBusiness = copy.businesses.items.find(
    (item) => item.slug !== business.slug
  );

  return (
    <div>
      {/* 1. Business Hero & Breadcrumbs */}
      <section className="border-b border-[#F5F7F4]/10 bg-[#0D120F]">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8 pt-8 pb-12 sm:pt-12 sm:pb-16 lg:pt-14 lg:pb-20">
          <Breadcrumbs
            items={[
              { label: copy.nav.home, to: '/' },
              { label: copy.nav.businesses, to: '/businesses' },
              { label: business.title },
            ]}
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-6 space-y-5 sm:space-y-6">
              <div className="inline-flex items-center gap-2 font-mono text-xs tracking-[0.08em] text-[#F2B84B]">
                <MapPin className="w-3.5 h-3.5" />
                <span>{business.location}</span>
              </div>

              <div className="space-y-3">
                <h1 className="text-[clamp(2rem,4.4vw,3.5rem)] font-semibold text-[#F5F7F4] leading-[1.08] tracking-[-0.025em]">
                  {business.title}
                </h1>
                <p className="text-base sm:text-lg font-medium text-[#F5F7F4]/90">
                  {business.subtitle}
                </p>
                <p className="text-sm sm:text-base text-[#A7B3A9] leading-relaxed max-w-xl">
                  {business.description}
                </p>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3 sm:gap-4">
                <AppLink
                  to="/contact"
                  className="inline-flex items-center justify-center min-h-[46px] px-6 py-3 rounded-sm bg-[#C5F03C] text-[#0D120F] text-sm font-semibold hover:bg-[#d5f763] transition-colors whitespace-nowrap shrink-0"
                >
                  {copy.businessDetail.ctaPrimary}
                </AppLink>

                <AppLink
                  to="/businesses"
                  className="inline-flex items-center justify-center gap-2 min-h-[46px] px-5 py-3 rounded-sm border border-[#F5F7F4]/15 bg-[#151C17] text-[#A7B3A9] text-sm font-medium hover:text-[#F5F7F4] hover:border-[#F5F7F4]/30 transition-colors whitespace-nowrap shrink-0"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>{copy.common.backToBusinesses}</span>
                </AppLink>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="rounded-md border border-[#F5F7F4]/12 bg-[#151C17] overflow-hidden">
                <div className="aspect-[4/3] w-full">
                  <MediaFrame
                    src={business.image}
                    alt={business.imageAlt}
                    fallbackLabel={business.title}
                    priority
                    className="w-full h-full"
                  />
                </div>
                <div className="px-4 py-3 border-t border-[#F5F7F4]/10 text-xs text-[#A7B3A9]">
                  {copy.businesses.cardFooter}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Business Overview & Current Activities */}
      <section className="border-b border-[#F5F7F4]/10 bg-[#0D120F] py-14 sm:py-20">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8">
          <div className="lg:col-span-6 p-6 sm:p-8 rounded-md border border-[#F5F7F4]/12 bg-[#151C17] space-y-4">
            <p className="font-mono text-xs tracking-[0.12em] text-[#F2B84B]">
              {copy.businessDetail.overviewEyebrow}
            </p>
            <h2 className="text-xl sm:text-2xl font-semibold text-[#F5F7F4] tracking-tight">
              {copy.businessDetail.overviewTitle}
            </h2>
            <p className="text-sm sm:text-base text-[#A7B3A9] leading-relaxed">
              {business.overview}
            </p>
          </div>

          <div className="lg:col-span-6 p-6 sm:p-8 rounded-md border border-[#F5F7F4]/12 bg-[#151C17] space-y-5">
            <div className="space-y-2">
              <p className="font-mono text-xs tracking-[0.12em] text-[#F2B84B]">
                {copy.businessDetail.currentEyebrow}
              </p>
              <h2 className="text-xl sm:text-2xl font-semibold text-[#F5F7F4] tracking-tight">
                {copy.businessDetail.currentTitle}
              </h2>
              <p className="text-sm sm:text-base text-[#A7B3A9] leading-relaxed">
                {business.currentActivitiesSummary}
              </p>
            </div>

            <ul className="pt-4 border-t border-[#F5F7F4]/10 space-y-2.5">
              {business.operationalFocus.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2.5 text-sm text-[#F5F7F4]/90"
                >
                  <span
                    aria-hidden="true"
                    className="mt-2 w-1.5 h-1.5 bg-[#F2B84B] shrink-0"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 3. Real-World Context (Fivers Positioning Clarification) */}
      <section className="border-b border-[#F5F7F4]/10 bg-[#0D120F] py-14 sm:py-20">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
          <div className="p-6 sm:p-10 rounded-md border border-[#F2B84B]/25 bg-[#151C17] space-y-5">
            <div className="space-y-2 max-w-3xl">
              <p className="font-mono text-xs tracking-[0.12em] text-[#F2B84B]">
                {copy.businessDetail.contextEyebrow}
              </p>
              <h2 className="text-2xl sm:text-3xl font-semibold text-[#F5F7F4] tracking-tight">
                {copy.businessDetail.contextTitle}
              </h2>
            </div>

            <p className="text-sm sm:text-base text-[#F5F7F4]/90 leading-relaxed max-w-4xl">
              {business.realWorldContext}
            </p>

            <p className="pt-4 border-t border-[#F5F7F4]/10 text-xs sm:text-sm text-[#A7B3A9] leading-relaxed max-w-4xl">
              {copy.businessDetail.contextNote}
            </p>
          </div>
        </div>
      </section>

      {/* 4. Potential Technology & Digital Applications */}
      <section className="border-b border-[#F5F7F4]/10 bg-[#0D120F] py-14 sm:py-20">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div className="space-y-2 max-w-2xl">
              <p className="font-mono text-xs tracking-[0.12em] text-[#C5F03C]">
                {copy.businessDetail.opportunitiesEyebrow}
              </p>
              <h2 className="text-2xl sm:text-3xl font-semibold text-[#F5F7F4] tracking-tight">
                {copy.businessDetail.opportunitiesTitle}
              </h2>
            </div>

            <AppLink
              to="/technology"
              className="inline-flex items-center gap-2 text-sm font-medium text-[#C5F03C] hover:underline underline-offset-4 whitespace-nowrap shrink-0"
            >
              {copy.productDetail.exploreTechCta}
            </AppLink>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
            {business.potentialApplications.map((app, idx) => (
              <article
                key={app.area}
                className="p-6 sm:p-7 rounded-md border border-[#F5F7F4]/12 bg-[#151C17] space-y-2.5"
              >
                <span className="font-mono text-xs text-[#C5F03C] tabular-nums">
                  0{idx + 1}
                </span>
                <h3 className="text-lg font-semibold text-[#F5F7F4]">
                  {app.area}
                </h3>
                <p className="text-sm text-[#A7B3A9] leading-relaxed">
                  {app.note}
                </p>
              </article>
            ))}
          </div>

          <p className="text-xs sm:text-sm text-[#A7B3A9]/90 leading-relaxed max-w-4xl">
            {copy.businessDetail.opportunitiesDisclaimer}
          </p>
        </div>
      </section>

      {/* 5. Other Real-World Business */}
      {otherBusiness && (
        <section className="bg-[#0D120F] py-14 sm:py-16">
          <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8 space-y-6">
            <h2 className="font-mono text-xs tracking-[0.12em] text-[#A7B3A9]">
              {copy.businessDetail.otherBusinessTitle}
            </h2>

            <AppLink
              to={otherBusiness.route}
              className="group block rounded-md border border-[#F5F7F4]/12 bg-[#151C17] hover:border-[#F2B84B]/45 transition-colors p-6 sm:p-8"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="space-y-1.5">
                  <p className="font-mono text-xs text-[#F2B84B]">
                    {otherBusiness.location}
                  </p>
                  <h3 className="text-xl sm:text-2xl font-semibold text-[#F5F7F4] group-hover:text-[#C5F03C] transition-colors">
                    {otherBusiness.title} — {otherBusiness.subtitle}
                  </h3>
                  <p className="text-sm text-[#A7B3A9] max-w-2xl">
                    {otherBusiness.description}
                  </p>
                </div>

                <span className="inline-flex items-center gap-2 text-sm font-medium text-[#C5F03C] whitespace-nowrap shrink-0">
                  <span>{copy.common.viewBusiness}</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                </span>
              </div>
            </AppLink>
          </div>
        </section>
      )}

      <CTASection
        headline={copy.businessDetail.ctaHeadline}
        primaryLabel={copy.businessDetail.ctaPrimary}
        primaryTo="/contact"
        secondaryLabel={copy.businessDetail.ctaSecondary}
        secondaryTo="/businesses"
      />
    </div>
  );
}
