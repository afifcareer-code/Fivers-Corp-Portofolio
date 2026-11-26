import React from 'react';
import {
  AlertTriangle,
  ArrowLeft,
  ArrowUpRight,
  BarChart3,
  BookOpen,
  Building2,
  CalendarHeart,
  Cpu,
  Film,
  Wallet,
} from 'lucide-react';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { CTASection } from '../components/CTASection';
import { MediaFrame } from '../components/MediaFrame';
import { ProductCard } from '../components/ProductCard';
import { StatusBadge } from '../components/StatusBadge';
import { useLanguage } from '../context/LanguageContext';
import { AppLink } from '../context/RouterContext';
import { FIVERS_IMAGES } from '../data/fiversData';
import { TRANSLATIONS } from '../data/i18n';
import { ProductIconKey, ProductItem, ProductSlug } from '../types';

const ICON_MAP: Record<ProductIconKey, React.ComponentType<{ className?: string }>> = {
  veluna: CalendarHeart,
  finance: Wallet,
  office: Building2,
  lingua: BookOpen,
  clip: Film,
  forex: BarChart3,
};

interface ProductDetailPageProps {
  slug: ProductSlug;
}

export function ProductDetailPage({ slug }: ProductDetailPageProps) {
  const { language } = useLanguage();
  const copy = TRANSLATIONS[language];

  const product =
    copy.products.items.find((item) => item.slug === slug) ?? copy.products.items[0];
  const relatedProducts: ProductItem[] = product.relatedIds
    .map((id) => copy.products.items.find((item) => item.id === id))
    .filter((item): item is ProductItem => Boolean(item));

  const Icon = ICON_MAP[product.icon];
  const isLive = product.status === 'LIVE';
  const showOfficeVisual = product.id === 'fivers-digital-office';

  return (
    <div>
      {/* 1. Product Hero & Breadcrumbs */}
      <section className="relative border-b border-[#F5F7F4]/10 bg-[#0D120F] overflow-hidden">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-24 right-0 w-[480px] h-[480px] rounded-full bg-[#C5F03C]/[0.03] blur-3xl"
        />

        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8 pt-8 pb-12 sm:pt-12 sm:pb-16 lg:pt-14 lg:pb-20">
          <Breadcrumbs
            items={[
              { label: copy.nav.home, to: '/' },
              { label: copy.nav.products, to: '/products' },
              { label: product.name },
            ]}
          />

          <div
            className={`grid grid-cols-1 ${
              showOfficeVisual ? 'lg:grid-cols-12' : 'lg:grid-cols-12'
            } gap-8 lg:gap-12 items-start`}
          >
            <div className={`${showOfficeVisual ? 'lg:col-span-7' : 'lg:col-span-8'} space-y-6`}>
              <div className="flex flex-wrap items-center gap-3">
                <div
                  className={`w-11 h-11 rounded-sm border flex items-center justify-center shrink-0 ${
                    isLive
                      ? 'border-[#C5F03C]/35 bg-[#C5F03C]/10 text-[#C5F03C]'
                      : 'border-[#F5F7F4]/15 bg-[#151C17] text-[#A7B3A9]'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                </div>

                <StatusBadge status={product.status} />

                <span className="font-mono text-xs tracking-[0.08em] text-[#A7B3A9]">
                  {product.category}
                </span>
              </div>

              <div className="space-y-3">
                <p className="text-sm font-medium text-[#C5F03C]">
                  {product.subtitle}
                </p>
                <h1 className="text-[clamp(2rem,4.4vw,3.5rem)] font-semibold text-[#F5F7F4] leading-[1.08] tracking-[-0.025em]">
                  {product.name}
                </h1>
                <p className="text-base sm:text-xl text-[#F5F7F4]/90 leading-relaxed max-w-2xl">
                  {product.positioning}
                </p>
                <p className="text-sm sm:text-base text-[#A7B3A9] leading-relaxed max-w-2xl">
                  {product.description}
                </p>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3 sm:gap-4">
                {product.url && (
                  <a
                    href={product.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 min-h-[46px] px-6 py-3 rounded-sm bg-[#C5F03C] text-[#0D120F] text-sm font-semibold hover:bg-[#d5f763] transition-colors whitespace-nowrap shrink-0"
                  >
                    <span>{copy.common.visitProduct}</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                )}

                <AppLink
                  to="/contact"
                  className={`inline-flex items-center justify-center min-h-[46px] px-6 py-3 rounded-sm text-sm font-semibold transition-colors whitespace-nowrap shrink-0 ${
                    product.url
                      ? 'border border-[#F5F7F4]/20 bg-[#151C17] text-[#F5F7F4] hover:border-[#C5F03C]/60 hover:text-[#C5F03C]'
                      : 'bg-[#C5F03C] text-[#0D120F] hover:bg-[#d5f763]'
                  }`}
                >
                  {copy.common.inquireAbout} {product.name} →
                </AppLink>

                <AppLink
                  to="/products"
                  className="inline-flex items-center justify-center gap-2 min-h-[46px] px-5 py-3 rounded-sm border border-[#F5F7F4]/15 bg-[#151C17] text-[#A7B3A9] text-sm font-medium hover:text-[#F5F7F4] hover:border-[#F5F7F4]/30 transition-colors whitespace-nowrap shrink-0"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>{copy.common.backToProducts}</span>
                </AppLink>
              </div>
            </div>

            {showOfficeVisual ? (
              <div className="lg:col-span-5">
                <div className="rounded-md border border-[#F5F7F4]/12 bg-[#151C17] overflow-hidden">
                  <div className="aspect-[16/10] w-full">
                    <MediaFrame
                      src={FIVERS_IMAGES.digitalOffice}
                      alt="Minimalist dark-green architectural software studio interior representing Fivers Digital Office"
                      fallbackLabel="Fivers Digital Office"
                      priority
                      className="w-full h-full"
                    />
                  </div>
                  <div className="px-4 py-3 border-t border-[#F5F7F4]/10 flex items-center justify-between text-xs font-mono text-[#A7B3A9]">
                    <span>{product.focusArea}</span>
                    <span className="text-[#C5F03C]">{product.status}</span>
                  </div>
                </div>
              </div>
            ) : (
              <div className="lg:col-span-4">
                <div className="rounded-md border border-[#F5F7F4]/12 bg-[#151C17] p-6 space-y-5">
                  <div className="space-y-1">
                    <p className="font-mono text-xs tracking-[0.08em] text-[#A7B3A9]">
                      {copy.common.focusAreas}
                    </p>
                    <p className="text-sm font-medium text-[#F5F7F4]">
                      {product.focusArea}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[#F5F7F4]/10 space-y-2.5">
                    <p className="font-mono text-xs tracking-[0.08em] text-[#A7B3A9]">
                      {copy.productDetail.availabilityLabel}
                    </p>
                    <p className="text-sm text-[#A7B3A9] leading-relaxed">
                      {product.statusDetail.availability}
                    </p>
                  </div>

                  <ul className="pt-4 border-t border-[#F5F7F4]/10 space-y-2">
                    {product.highlights.map((highlight) => (
                      <li
                        key={highlight}
                        className="flex items-start gap-2.5 text-xs sm:text-sm text-[#F5F7F4]/90"
                      >
                        <span
                          aria-hidden="true"
                          className="mt-1.5 w-1.5 h-1.5 bg-[#C5F03C] shrink-0"
                        />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* 2. Product Overview */}
      <section className="border-b border-[#F5F7F4]/10 bg-[#0D120F] py-14 sm:py-20">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="space-y-2 max-w-2xl">
            <p className="font-mono text-xs tracking-[0.12em] text-[#C5F03C]">
              {copy.productDetail.overviewEyebrow}
            </p>
            <h2 className="text-2xl sm:text-3xl font-semibold text-[#F5F7F4] tracking-tight">
              {copy.productDetail.overviewTitle}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
            <div className="p-6 sm:p-7 rounded-md border border-[#F5F7F4]/12 bg-[#151C17] space-y-2.5">
              <h3 className="font-mono text-xs tracking-[0.08em] text-[#C5F03C]">
                {copy.productDetail.whatItIs}
              </h3>
              <p className="text-sm sm:text-base text-[#F5F7F4]/90 leading-relaxed">
                {product.overview.whatItIs}
              </p>
            </div>

            <div className="p-6 sm:p-7 rounded-md border border-[#F5F7F4]/12 bg-[#151C17] space-y-2.5">
              <h3 className="font-mono text-xs tracking-[0.08em] text-[#C5F03C]">
                {copy.productDetail.problemAddressed}
              </h3>
              <p className="text-sm sm:text-base text-[#A7B3A9] leading-relaxed">
                {product.overview.problemAddressed}
              </p>
            </div>

            <div className="p-6 sm:p-7 rounded-md border border-[#F5F7F4]/12 bg-[#151C17] space-y-2.5">
              <h3 className="font-mono text-xs tracking-[0.08em] text-[#C5F03C]">
                {copy.productDetail.intendedFor}
              </h3>
              <p className="text-sm sm:text-base text-[#A7B3A9] leading-relaxed">
                {product.overview.intendedFor}
              </p>
            </div>

            <div className="p-6 sm:p-7 rounded-md border border-[#F5F7F4]/12 bg-[#151C17] space-y-2.5">
              <h3 className="font-mono text-xs tracking-[0.08em] text-[#C5F03C]">
                {copy.productDetail.whyItExists}
              </h3>
              <p className="text-sm sm:text-base text-[#A7B3A9] leading-relaxed">
                {product.overview.whyItExists}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Core Capabilities & Features */}
      <section className="border-b border-[#F5F7F4]/10 bg-[#0D120F] py-14 sm:py-20">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="space-y-2 max-w-2xl">
            <p className="font-mono text-xs tracking-[0.12em] text-[#C5F03C]">
              {copy.productDetail.capabilitiesEyebrow}
            </p>
            <h2 className="text-2xl sm:text-3xl font-semibold text-[#F5F7F4] tracking-tight">
              {copy.productDetail.capabilitiesTitle}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
            {product.capabilities.map((cap, idx) => (
              <article
                key={cap.title}
                className="p-6 sm:p-7 rounded-md border border-[#F5F7F4]/12 bg-[#151C17] space-y-3"
              >
                <span className="font-mono text-xs text-[#C5F03C] tabular-nums">
                  0{idx + 1}
                </span>
                <h3 className="text-lg font-semibold text-[#F5F7F4] leading-snug">
                  {cap.title}
                </h3>
                <p className="text-sm text-[#A7B3A9] leading-relaxed">
                  {cap.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Product Status, Availability & Technology Approach */}
      <section className="border-b border-[#F5F7F4]/10 bg-[#0D120F] py-14 sm:py-20">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8">
          {/* Status & Availability */}
          <div className="lg:col-span-6 p-6 sm:p-8 rounded-md border border-[#F5F7F4]/12 bg-[#151C17] space-y-5">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <p className="font-mono text-xs tracking-[0.1em] text-[#C5F03C]">
                {copy.productDetail.statusEyebrow}
              </p>
              <StatusBadge status={product.status} />
            </div>

            <h2 className="text-xl sm:text-2xl font-semibold text-[#F5F7F4] tracking-tight">
              {copy.productDetail.statusTitle}
            </h2>

            <p className="text-sm sm:text-base text-[#A7B3A9] leading-relaxed">
              {product.statusDetail.summary}
            </p>

            <div className="pt-4 border-t border-[#F5F7F4]/10 space-y-1.5">
              <p className="font-mono text-xs tracking-[0.06em] text-[#F5F7F4]">
                {copy.productDetail.availabilityLabel}
              </p>
              <p className="text-sm text-[#A7B3A9]">
                {product.statusDetail.availability}
              </p>
            </div>

            {product.disclaimer && (
              <div className="p-4 rounded-sm border border-[#F2B84B]/35 bg-[#F2B84B]/8 flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-[#F2B84B] shrink-0 mt-0.5" />
                <p className="text-xs sm:text-sm text-[#F5F7F4]/90 leading-relaxed">
                  {product.disclaimer}
                </p>
              </div>
            )}
          </div>

          {/* Technology / Product Approach */}
          <div className="lg:col-span-6 p-6 sm:p-8 rounded-md border border-[#F5F7F4]/12 bg-[#151C17] flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between gap-3">
                <p className="font-mono text-xs tracking-[0.1em] text-[#C5F03C]">
                  {copy.productDetail.techEyebrow}
                </p>
                <Cpu className="w-4 h-4 text-[#C5F03C]" />
              </div>

              <h2 className="text-xl sm:text-2xl font-semibold text-[#F5F7F4] tracking-tight">
                {copy.productDetail.techTitle}
              </h2>

              <p className="text-sm sm:text-base text-[#A7B3A9] leading-relaxed">
                {product.technologyApproach.summary}
              </p>
            </div>

            <div className="pt-4 border-t border-[#F5F7F4]/10 flex flex-wrap items-center justify-between gap-3">
              <span className="font-mono text-xs text-[#A7B3A9]">
                {product.technologyApproach.relatedCapabilityLabel}
              </span>
              <AppLink
                to="/technology"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-[#C5F03C] hover:underline underline-offset-4"
              >
                {copy.productDetail.exploreTechCta}
              </AppLink>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Product Context within Fivers Corp */}
      <section className="border-b border-[#F5F7F4]/10 bg-[#0D120F] py-14 sm:py-20">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="max-w-3xl space-y-3">
            <p className="font-mono text-xs tracking-[0.12em] text-[#C5F03C]">
              {copy.productDetail.contextEyebrow}
            </p>
            <h2 className="text-2xl sm:text-3xl font-semibold text-[#F5F7F4] tracking-tight">
              {copy.productDetail.contextTitle}
            </h2>
            <p className="text-sm sm:text-base text-[#A7B3A9] leading-relaxed">
              {product.productContext}
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            {copy.productDetail.contextFlow.map((step, idx) => (
              <div
                key={step}
                className="p-4 sm:p-5 rounded-md border border-[#F5F7F4]/10 bg-[#151C17] flex items-center justify-between gap-2"
              >
                <span className="text-xs sm:text-sm font-medium text-[#F5F7F4]">
                  {step}
                </span>
                <span className="font-mono text-xs text-[#C5F03C]">
                  {idx < copy.productDetail.contextFlow.length - 1 ? '→' : '·'}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Related Products */}
      <section className="bg-[#0D120F] py-14 sm:py-20">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div className="space-y-2">
              <p className="font-mono text-xs tracking-[0.12em] text-[#C5F03C]">
                {copy.productDetail.relatedEyebrow}
              </p>
              <h2 className="text-2xl sm:text-3xl font-semibold text-[#F5F7F4] tracking-tight">
                {copy.productDetail.relatedTitle}
              </h2>
            </div>

            <AppLink
              to="/products"
              className="inline-flex items-center gap-2 text-sm font-medium text-[#C5F03C] hover:underline underline-offset-4"
            >
              {copy.home.productsViewAll}
            </AppLink>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
            {relatedProducts.map((related) => (
              <ProductCard key={related.id} product={related} />
            ))}
          </div>
        </div>
      </section>

      <CTASection
        headline={copy.productDetail.ctaHeadline}
        primaryLabel={copy.productDetail.ctaPrimary}
        primaryTo="/contact"
        secondaryLabel={copy.productDetail.ctaSecondary}
        secondaryTo="/products"
      />
    </div>
  );
}
