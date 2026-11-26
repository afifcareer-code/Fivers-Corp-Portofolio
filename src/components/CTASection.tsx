import React from 'react';
import { AppLink } from '../context/RouterContext';
import { AppRoute } from '../types';

interface CTASectionProps {
  statements?: string[];
  headline: string;
  subtext?: string;
  primaryLabel?: string;
  primaryTo?: AppRoute;
  secondaryLabel?: string;
  secondaryTo?: AppRoute;
}

export function CTASection({
  statements,
  headline,
  subtext,
  primaryLabel = 'Get in Touch',
  primaryTo = '/contact',
  secondaryLabel,
  secondaryTo,
}: CTASectionProps) {
  return (
    <section className="border-t border-[#F5F7F4]/10 bg-[#0D120F] py-16 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center space-y-7 sm:space-y-8">
          {statements && statements.length > 0 && (
            <div className="space-y-2 text-base sm:text-xl text-[#A7B3A9] leading-relaxed">
              {statements.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </div>
          )}

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-semibold text-[#F5F7F4] tracking-tight leading-[1.12] text-balance">
            {headline}
          </h2>

          {subtext && (
            <p className="text-sm sm:text-base text-[#A7B3A9] max-w-xl mx-auto leading-relaxed">
              {subtext}
            </p>
          )}

          <div className="pt-2 flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center justify-center gap-3 sm:gap-4">
            <AppLink
              to={primaryTo}
              className="inline-flex items-center justify-center min-h-[46px] px-7 py-3 rounded-sm bg-[#C5F03C] text-[#0D120F] text-sm font-semibold hover:bg-[#d6f863] transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C5F03C]"
            >
              {primaryLabel}
            </AppLink>

            {secondaryLabel && secondaryTo && (
              <AppLink
                to={secondaryTo}
                className="inline-flex items-center justify-center min-h-[46px] px-7 py-3 rounded-sm border border-[#F5F7F4]/20 bg-[#151C17] text-[#F5F7F4] text-sm font-medium hover:border-[#C5F03C]/50 hover:text-[#C5F03C] transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C5F03C]"
              >
                {secondaryLabel}
              </AppLink>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
