import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { AppLink } from '../context/RouterContext';
import { TRANSLATIONS } from '../data/i18n';
import { AppRoute, RealBusiness } from '../types';
import { MediaFrame } from './MediaFrame';

interface BusinessCardProps {
  business: RealBusiness;
  ctaTo?: AppRoute;
  ctaLabel?: string;
  showOpportunities?: boolean;
}

export function BusinessCard({
  business,
  ctaTo,
  ctaLabel,
  showOpportunities = true,
}: BusinessCardProps) {
  const { language } = useLanguage();
  const copy = TRANSLATIONS[language];
  const resolvedTo = ctaTo ?? business.route;
  const resolvedCta = ctaLabel ?? copy.common.viewBusiness;

  return (
    <article className="group flex flex-col rounded-md border border-[#F5F7F4]/12 bg-[#151C17] overflow-hidden hover:border-[#F2B84B]/40 transition-colors duration-150">
      <div className="relative aspect-[4/3] w-full overflow-hidden">
        <MediaFrame
          src={business.image}
          alt={business.imageAlt}
          fallbackLabel={business.title}
          className="w-full h-full"
          imgClassName="transition-transform duration-500 group-hover:scale-[1.03]"
        >
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-t from-[#0D120F]/92 via-[#0D120F]/30 to-transparent"
          />
          <div className="absolute bottom-4 left-4 right-4 sm:left-5 sm:right-5">
            <p className="text-xs font-mono text-[#F2B84B] tracking-[0.06em]">
              {business.location}
            </p>
            <h3 className="text-xl sm:text-2xl font-semibold text-[#F5F7F4] mt-1">
              <AppLink
                to={resolvedTo}
                className="hover:text-[#C5F03C] transition-colors"
              >
                {business.title}
              </AppLink>
            </h3>
          </div>
        </MediaFrame>
      </div>

      <div className="flex-1 flex flex-col justify-between p-5 sm:p-7 space-y-6">
        <div className="space-y-4">
          <div className="space-y-2">
            <p className="text-sm font-medium text-[#F5F7F4]">{business.subtitle}</p>
            <p className="text-sm sm:text-base text-[#A7B3A9] leading-relaxed">
              {business.description}
            </p>
          </div>

          {showOpportunities && (
            <div className="pt-4 border-t border-[#F5F7F4]/10 space-y-2.5">
              <p className="text-xs font-mono tracking-[0.06em] text-[#A7B3A9]">
                {copy.common.potentialFutureAreas}
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2">
                {business.futureOpportunities.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 text-xs sm:text-sm text-[#A7B3A9]"
                  >
                    <span
                      aria-hidden="true"
                      className="mt-1.5 w-1 h-1 bg-[#F2B84B] shrink-0"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {resolvedTo && (
          <div className="pt-1">
            <AppLink
              to={resolvedTo}
              className="inline-flex items-center gap-2 min-h-[36px] text-sm font-medium text-[#C5F03C] hover:underline underline-offset-4"
            >
              {resolvedCta}
            </AppLink>
          </div>
        )}
      </div>
    </article>
  );
}
