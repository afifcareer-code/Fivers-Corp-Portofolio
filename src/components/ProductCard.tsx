import React from 'react';
import {
  ArrowUpRight,
  BarChart3,
  BookOpen,
  Building2,
  CalendarHeart,
  Film,
  Wallet,
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { AppLink } from '../context/RouterContext';
import { TRANSLATIONS } from '../data/i18n';
import { ProductIconKey, ProductItem } from '../types';
import { StatusBadge } from './StatusBadge';

const ICON_MAP: Record<ProductIconKey, React.ComponentType<{ className?: string }>> = {
  veluna: CalendarHeart,
  finance: Wallet,
  office: Building2,
  lingua: BookOpen,
  clip: Film,
  forex: BarChart3,
};

interface ProductCardProps {
  product: ProductItem;
  featured?: boolean;
}

export function ProductCard({ product, featured = false }: ProductCardProps) {
  const { language } = useLanguage();
  const copy = TRANSLATIONS[language];
  const Icon = ICON_MAP[product.icon];
  const isLive = product.status === 'LIVE';

  return (
    <article
      className={`group relative flex flex-col justify-between rounded-md border transition-colors duration-150 ${
        featured && isLive
          ? 'bg-[#151C17] border-[#F5F7F4]/15 hover:border-[#C5F03C]/50 p-5 sm:p-8'
          : 'bg-[#151C17]/80 border-[#F5F7F4]/10 hover:border-[#F5F7F4]/25 p-5 sm:p-6'
      }`}
    >
      <div className="space-y-5">
        <div className="flex items-start justify-between gap-3 flex-wrap">
          <div
            className={`w-10 h-10 rounded-sm border flex items-center justify-center shrink-0 ${
              isLive
                ? 'border-[#C5F03C]/30 bg-[#C5F03C]/10 text-[#C5F03C]'
                : 'border-[#F5F7F4]/12 bg-[#0D120F] text-[#A7B3A9]'
            }`}
          >
            <Icon className="w-5 h-5" />
          </div>

          <StatusBadge status={product.status} />
        </div>

        <div className="space-y-2">
          <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-[#A7B3A9]">
            <span>{product.category}</span>
            <span aria-hidden="true">·</span>
            <span>{product.subtitle}</span>
          </div>

          <h3
            className={`font-semibold text-[#F5F7F4] tracking-tight ${
              featured && isLive ? 'text-xl sm:text-2xl' : 'text-lg sm:text-xl'
            }`}
          >
            <AppLink
              to={product.route}
              className="hover:text-[#C5F03C] transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C5F03C] rounded-sm"
            >
              {product.name}
            </AppLink>
          </h3>

          <p className="text-sm sm:text-base text-[#A7B3A9] leading-relaxed">
            {product.description}
          </p>

          {product.disclaimer && (
            <p className="pt-2 text-xs text-[#A7B3A9]/80 leading-relaxed border-t border-[#F5F7F4]/8">
              {copy.products.forexShortDisclaimer}
            </p>
          )}
        </div>
      </div>

      <div className="pt-5 mt-6 border-t border-[#F5F7F4]/10 flex items-center justify-between gap-4">
        <AppLink
          to={product.route}
          className="inline-flex items-center gap-2 min-h-[36px] text-sm font-medium text-[#F5F7F4] group-hover:text-[#C5F03C] transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C5F03C] rounded-sm"
        >
          <span>{copy.common.viewProduct}</span>
        </AppLink>

        {product.url && (
          <a
            href={product.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 min-h-[36px] text-xs font-medium text-[#C5F03C] hover:underline underline-offset-4"
          >
            <span>{copy.common.visitProduct}</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        )}
      </div>
    </article>
  );
}
