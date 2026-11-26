import React from 'react';
import { AppLink } from '../context/RouterContext';
import { AppRoute } from '../types';

interface HeroAction {
  label: string;
  to: AppRoute;
  variant?: 'primary' | 'secondary';
}

interface HeroProps {
  eyebrow?: string;
  title: string;
  secondaryTitle?: string;
  subtitle: string;
  actions?: HeroAction[];
  aside?: React.ReactNode;
  compact?: boolean;
}

export function Hero({
  eyebrow,
  title,
  secondaryTitle,
  subtitle,
  actions,
  aside,
  compact = false,
}: HeroProps) {
  return (
    <section
      className={`relative border-b border-[#F5F7F4]/10 bg-[#0D120F] overflow-hidden ${
        compact ? 'py-12 sm:py-18 lg:py-22' : 'py-14 sm:py-22 lg:py-28'
      }`}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 right-0 w-[520px] h-[520px] rounded-full bg-[#C5F03C]/[0.035] blur-3xl"
      />

      <div className="relative mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <div
          className={
            aside
              ? 'grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center'
              : 'max-w-3xl'
          }
        >
          <div className={aside ? 'lg:col-span-7 space-y-5 sm:space-y-6' : 'space-y-5 sm:space-y-6'}>
            {eyebrow && (
              <p className="font-mono text-xs tracking-[0.14em] text-[#C5F03C]">
                {eyebrow}
              </p>
            )}

            <div className="space-y-2">
              <h1 className="text-[clamp(1.95rem,4.4vw,3.75rem)] font-semibold text-[#F5F7F4] leading-[1.08] tracking-[-0.025em] text-balance">
                {title}
              </h1>
              {secondaryTitle && (
                <p className="text-[clamp(1.5rem,3.4vw,2.75rem)] font-semibold text-[#A7B3A9] leading-[1.12] tracking-[-0.02em] text-balance">
                  {secondaryTitle}
                </p>
              )}
            </div>

            <p className="text-base sm:text-lg text-[#A7B3A9] leading-relaxed max-w-2xl">
              {subtitle}
            </p>

            {actions && actions.length > 0 && (
              <div className="pt-2 flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3 sm:gap-4">
                {actions.map((action) => {
                  const isPrimary = action.variant !== 'secondary';
                  return (
                    <AppLink
                      key={action.label}
                      to={action.to}
                      className={`inline-flex items-center justify-center min-h-[44px] px-6 py-3 text-sm font-semibold rounded-sm whitespace-nowrap shrink-0 transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C5F03C] ${
                        isPrimary
                          ? 'bg-[#C5F03C] text-[#0D120F] hover:bg-[#d4f760]'
                          : 'border border-[#F5F7F4]/20 bg-[#151C17] text-[#F5F7F4] hover:border-[#C5F03C]/60 hover:text-[#C5F03C]'
                      }`}
                    >
                      {action.label}
                    </AppLink>
                  );
                })}
              </div>
            )}
          </div>

          {aside && <div className="lg:col-span-5">{aside}</div>}
        </div>
      </div>
    </section>
  );
}
