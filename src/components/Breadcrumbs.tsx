import React from 'react';
import { ChevronRight } from 'lucide-react';
import { AppLink } from '../context/RouterContext';
import { AppRoute } from '../types';

export interface BreadcrumbItem {
  label: string;
  to?: AppRoute;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb" className="mb-6">
      <ol className="flex flex-wrap items-center gap-1.5 text-xs font-mono text-[#A7B3A9]">
        {items.map((item, idx) => {
          const isLast = idx === items.length - 1;
          return (
            <li key={`${item.label}-${idx}`} className="inline-flex items-center gap-1.5">
              {idx > 0 && (
                <ChevronRight
                  className="w-3.5 h-3.5 text-[#A7B3A9]/60 shrink-0"
                  aria-hidden="true"
                />
              )}
              {isLast || !item.to ? (
                <span
                  aria-current={isLast ? 'page' : undefined}
                  className="text-[#F5F7F4] tracking-[0.04em]"
                >
                  {item.label}
                </span>
              ) : (
                <AppLink
                  to={item.to}
                  className="hover:text-[#C5F03C] transition-colors tracking-[0.04em] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C5F03C] rounded-sm"
                >
                  {item.label}
                </AppLink>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
