import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { TRANSLATIONS } from '../data/i18n';
import { ProductStatus } from '../types';

interface StatusBadgeProps {
  status: ProductStatus;
}

export function StatusBadge({ status }: StatusBadgeProps) {
  const { language } = useLanguage();
  const label = TRANSLATIONS[language].statusLabels[status];

  const styles: Record<
    ProductStatus,
    { border: string; text: string; square: string }
  > = {
    LIVE: {
      border: 'border-[#C5F03C]/35 bg-[#C5F03C]/8',
      text: 'text-[#C5F03C]',
      square: 'bg-[#C5F03C]',
    },
    'IN DEVELOPMENT': {
      border: 'border-[#F2B84B]/35 bg-[#F2B84B]/8',
      text: 'text-[#F2B84B]',
      square: 'bg-[#F2B84B]',
    },
    EXPERIMENT: {
      border: 'border-[#A7B3A9]/30 bg-[#F5F7F4]/4',
      text: 'text-[#A7B3A9]',
      square: 'bg-[#A7B3A9]',
    },
  };

  const config = styles[status];

  return (
    <span
      className={`inline-flex items-center gap-2 px-2.5 py-1 rounded-sm border font-mono text-[11px] font-medium tracking-[0.08em] whitespace-nowrap shrink-0 ${config.border} ${config.text}`}
    >
      <span className={`w-1.5 h-1.5 shrink-0 ${config.square}`} aria-hidden="true" />
      <span>{label}</span>
    </span>
  );
}
