import React from 'react';

interface FiversLogoProps {
  variant?: 'dark' | 'light';
  showCorp?: boolean;
  iconOnly?: boolean;
  className?: string;
}

export function FiversLogo({
  variant = 'dark',
  showCorp = false,
  iconOnly = false,
  className = '',
}: FiversLogoProps) {
  const primaryFill = variant === 'dark' ? '#F5F7F4' : '#0D120F';
  const accentFill = variant === 'dark' ? '#C5F03C' : '#3E5E0B';
  const corpColor = variant === 'dark' ? 'text-[#A7B3A9]' : 'text-[#4B584E]';
  const wordColor = variant === 'dark' ? 'text-[#F5F7F4]' : 'text-[#0D120F]';

  return (
    <span className={`inline-flex items-center gap-3 whitespace-nowrap shrink-0 select-none ${className}`}>
      <svg
        width="28"
        height="28"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        className="shrink-0"
      >
        {/* Architectural stepped F mark suggesting forward progression and grounded structure */}
        <path
          d="M5 6H25V10.5H10V15.5H20V20H10V26H5V6Z"
          fill={primaryFill}
        />
        <rect x="21" y="15.5" width="5" height="4.5" fill={accentFill} />
        <rect x="14" y="22.5" width="12" height="3.5" fill={accentFill} fillOpacity="0.32" />
      </svg>

      {!iconOnly && (
        <span className="inline-flex items-baseline gap-1.5 font-display tracking-tight">
          <span className={`text-lg font-bold tracking-[0.04em] ${wordColor}`}>
            FIVERS
          </span>
          {showCorp && (
            <span className={`text-xs font-medium tracking-[0.14em] ${corpColor}`}>
              CORP
            </span>
          )}
        </span>
      )}
    </span>
  );
}
