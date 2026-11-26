import React, { useState } from 'react';
import { CTASection } from '../components/CTASection';
import { Hero } from '../components/Hero';
import { ProductCard } from '../components/ProductCard';
import { useLanguage } from '../context/LanguageContext';
import { TRANSLATIONS } from '../data/i18n';
import { ProductStatus } from '../types';

type FilterOption = 'ALL' | ProductStatus;

export function ProductsPage() {
  const { language } = useLanguage();
  const copy = TRANSLATIONS[language];
  const [filter, setFilter] = useState<FilterOption>('ALL');

  const filterTabs: { label: string; value: FilterOption }[] = [
    { label: copy.products.filterAll, value: 'ALL' },
    { label: copy.products.filterLive, value: 'LIVE' },
    { label: copy.products.filterDev, value: 'IN DEVELOPMENT' },
    { label: copy.products.filterExp, value: 'EXPERIMENT' },
  ];

  const liveProducts = copy.products.items.filter((p) => p.status === 'LIVE');
  const devProducts = copy.products.items.filter(
    (p) => p.status === 'IN DEVELOPMENT'
  );
  const experimentProducts = copy.products.items.filter(
    (p) => p.status === 'EXPERIMENT'
  );

  const showGroup = (status: ProductStatus) =>
    filter === 'ALL' || filter === status;

  return (
    <div>
      <Hero
        eyebrow={copy.products.eyebrow}
        title={copy.products.title}
        subtitle={copy.products.subtitle}
        compact
      />

      <section className="bg-[#0D120F] py-12 sm:py-20">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-14">
          {/* Interactive Filter Controls */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pb-6 border-b border-[#F5F7F4]/10">
            <div
              role="tablist"
              aria-label="Filter products by status"
              className="inline-flex flex-wrap items-center gap-1.5 p-1 rounded-md bg-[#151C17] border border-[#F5F7F4]/10 w-full sm:w-auto"
            >
              {filterTabs.map((tab) => {
                const active = filter === tab.value;
                return (
                  <button
                    key={tab.value}
                    type="button"
                    role="tab"
                    aria-selected={active}
                    onClick={() => setFilter(tab.value)}
                    className={`min-h-[38px] px-3 sm:px-4 py-1.5 rounded-sm text-xs sm:text-sm font-medium whitespace-nowrap shrink-0 transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C5F03C] ${
                      active
                        ? 'bg-[#C5F03C] text-[#0D120F]'
                        : 'text-[#A7B3A9] hover:text-[#F5F7F4]'
                    }`}
                  >
                    {tab.label}
                  </button>
                );
              })}
            </div>

            <p className="text-xs font-mono text-[#A7B3A9] tabular-nums">
              {filter === 'ALL'
                ? copy.products.countAll
                : `${
                    copy.products.items.filter((p) => p.status === filter).length
                  } ${copy.products.countFiltered}`}
            </p>
          </div>

          {/* LIVE */}
          {showGroup('LIVE') && (
            <div className="space-y-6">
              <div className="flex flex-wrap items-baseline justify-between gap-2 border-b border-[#F5F7F4]/10 pb-3">
                <h2 className="font-mono text-sm tracking-[0.1em] text-[#C5F03C]">
                  {copy.products.liveHeading}
                </h2>
                <span className="text-xs text-[#A7B3A9]">
                  {copy.products.liveSub}
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
                {liveProducts.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    featured
                  />
                ))}
              </div>
            </div>
          )}

          {/* IN DEVELOPMENT */}
          {showGroup('IN DEVELOPMENT') && (
            <div className="space-y-6">
              <div className="flex flex-wrap items-baseline justify-between gap-2 border-b border-[#F5F7F4]/10 pb-3">
                <h2 className="font-mono text-sm tracking-[0.1em] text-[#F2B84B]">
                  {copy.products.devHeading}
                </h2>
                <span className="text-xs text-[#A7B3A9]">
                  {copy.products.devSub}
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
                {devProducts.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    featured
                  />
                ))}
              </div>
            </div>
          )}

          {/* EXPERIMENTS */}
          {showGroup('EXPERIMENT') && (
            <div className="space-y-6">
              <div className="flex flex-wrap items-baseline justify-between gap-2 border-b border-[#F5F7F4]/10 pb-3">
                <h2 className="font-mono text-sm tracking-[0.1em] text-[#A7B3A9]">
                  {copy.products.expHeading}
                </h2>
                <span className="text-xs text-[#A7B3A9]">
                  {copy.products.expSub}
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
                {experimentProducts.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    featured
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      <CTASection
        headline={copy.products.ctaHeadline}
        primaryLabel={copy.products.ctaPrimary}
        primaryTo="/contact"
        secondaryLabel={copy.products.ctaSecondary}
        secondaryTo="/businesses"
      />
    </div>
  );
}
