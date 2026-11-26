import React from 'react';
import { Language, useLanguage } from '../context/LanguageContext';

function FlagUK() {
  return (
    <svg
      width="18"
      height="12"
      viewBox="0 0 18 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className="shrink-0 rounded-[2px] border border-[#F5F7F4]/20"
    >
      <rect width="18" height="12" fill="#012169" />
      <path d="M0 0L18 12M18 0L0 12" stroke="#FFFFFF" strokeWidth="2.2" />
      <path d="M0 0L18 12M18 0L0 12" stroke="#C8102E" strokeWidth="1.1" />
      <path d="M9 0V12M0 6H18" stroke="#FFFFFF" strokeWidth="3.2" />
      <path d="M9 0V12M0 6H18" stroke="#C8102E" strokeWidth="1.8" />
    </svg>
  );
}

function FlagID() {
  return (
    <svg
      width="18"
      height="12"
      viewBox="0 0 18 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className="shrink-0 rounded-[2px] border border-[#F5F7F4]/20"
    >
      <rect width="18" height="6" fill="#CE1126" />
      <rect y="6" width="18" height="6" fill="#FFFFFF" />
    </svg>
  );
}

interface LanguageSwitcherProps {
  compact?: boolean;
}

export function LanguageSwitcher({ compact = false }: LanguageSwitcherProps) {
  const { language, setLanguage } = useLanguage();

  const options: { code: Language; label: string; fullLabel: string; flag: React.ReactNode }[] = [
    { code: 'en', label: 'EN', fullLabel: 'English', flag: <FlagUK /> },
    { code: 'id', label: 'ID', fullLabel: 'Indonesia', flag: <FlagID /> },
  ];

  return (
    <div
      role="group"
      aria-label="Language selector"
      className="inline-flex items-center p-0.5 rounded-sm border border-[#F5F7F4]/15 bg-[#151C17] shrink-0"
    >
      {options.map((opt) => {
        const active = language === opt.code;
        return (
          <button
            key={opt.code}
            type="button"
            onClick={() => setLanguage(opt.code)}
            aria-pressed={active}
            aria-label={`Switch language to ${opt.fullLabel}`}
            className={`inline-flex items-center gap-1.5 rounded-[2px] font-mono text-[11px] font-medium whitespace-nowrap shrink-0 transition-colors duration-150 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C5F03C] ${
              compact ? 'min-h-[34px] px-2 py-1' : 'min-h-[34px] px-2.5 py-1'
            } ${
              active
                ? 'bg-[#C5F03C] text-[#0D120F]'
                : 'text-[#A7B3A9] hover:text-[#F5F7F4]'
            }`}
          >
            {opt.flag}
            <span>{opt.label}</span>
          </button>
        );
      })}
    </div>
  );
}
