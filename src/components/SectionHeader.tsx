import React from 'react';

interface SectionHeaderProps {
  index?: string;
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  action?: React.ReactNode;
}

export function SectionHeader({
  index,
  eyebrow,
  title,
  subtitle,
  align = 'left',
  action,
}: SectionHeaderProps) {
  const isCentered = align === 'center';

  return (
    <div
      className={`flex flex-col gap-4 ${
        isCentered
          ? 'items-center text-center mx-auto max-w-2xl'
          : 'md:flex-row md:items-end md:justify-between'
      }`}
    >
      <div className={isCentered ? 'space-y-3' : 'space-y-3 max-w-2xl'}>
        {(index || eyebrow) && (
          <div
            className={`flex items-center gap-2.5 text-xs font-mono tracking-[0.08em] text-[#A7B3A9] ${
              isCentered ? 'justify-center' : ''
            }`}
          >
            {index && <span className="text-[#C5F03C] tabular-nums">{index}</span>}
            {index && eyebrow && <span aria-hidden="true">·</span>}
            {eyebrow && <span>{eyebrow}</span>}
          </div>
        )}
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#F5F7F4] tracking-tight leading-[1.15] text-balance">
          {title}
        </h2>
        {subtitle && (
          <p className="text-base text-[#A7B3A9] leading-relaxed max-w-xl">
            {subtitle}
          </p>
        )}
      </div>

      {action && !isCentered && <div className="shrink-0">{action}</div>}
    </div>
  );
}
