import React from 'react';
import { TechnologyArea } from '../types';

interface TechnologyCardProps {
  area: TechnologyArea;
}

export function TechnologyCard({ area }: TechnologyCardProps) {
  return (
    <article className="flex flex-col justify-between p-6 sm:p-8 rounded-md border border-[#F5F7F4]/12 bg-[#151C17] space-y-6">
      <div className="space-y-3">
        <span className="font-mono text-xs text-[#C5F03C] tabular-nums tracking-[0.08em]">
          {area.number}
        </span>

        <h3 className="text-xl sm:text-2xl font-semibold text-[#F5F7F4] tracking-tight">
          {area.title}
        </h3>

        <p className="text-sm sm:text-base text-[#A7B3A9] leading-relaxed">
          {area.summary}
        </p>
      </div>

      <ul className="pt-5 border-t border-[#F5F7F4]/10 space-y-2.5">
        {area.points.map((point) => (
          <li
            key={point}
            className="flex items-start gap-3 text-sm text-[#F5F7F4]/90"
          >
            <span
              aria-hidden="true"
              className="mt-2 w-1.5 h-1.5 bg-[#C5F03C] shrink-0"
            />
            <span>{point}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}
