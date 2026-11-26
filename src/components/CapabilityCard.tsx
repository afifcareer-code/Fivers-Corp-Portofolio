import React from 'react';
import { Capability } from '../types';

interface CapabilityCardProps {
  capability: Capability;
}

export function CapabilityCard({ capability }: CapabilityCardProps) {
  return (
    <article className="flex flex-col justify-between p-6 rounded-md border border-[#F5F7F4]/10 bg-[#151C17] hover:border-[#F5F7F4]/25 transition-colors duration-150 space-y-5">
      <div className="space-y-3">
        <div className="flex items-center justify-between gap-3">
          <span className="font-mono text-xs text-[#C5F03C] tabular-nums tracking-[0.08em]">
            {capability.number}
          </span>
          <span className="text-xs text-[#A7B3A9]">{capability.scope}</span>
        </div>

        <h3 className="text-lg font-semibold text-[#F5F7F4] tracking-tight">
          {capability.title}
        </h3>

        <p className="text-sm text-[#A7B3A9] leading-relaxed">
          {capability.description}
        </p>
      </div>
    </article>
  );
}
