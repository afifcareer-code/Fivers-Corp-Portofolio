import React, { useState } from 'react';
import { FiversLogo } from './FiversLogo';

interface MediaFrameProps {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
  fallbackLabel?: string;
  priority?: boolean;
  children?: React.ReactNode;
}

export function MediaFrame({
  src,
  alt,
  className = '',
  imgClassName = '',
  fallbackLabel,
  priority = false,
  children,
}: MediaFrameProps) {
  const [hasError, setHasError] = useState(false);

  return (
    <div className={`relative overflow-hidden bg-[#151C17] ${className}`}>
      {!hasError ? (
        <img
          src={src}
          alt={alt}
          referrerPolicy="no-referrer"
          loading={priority ? 'eager' : 'lazy'}
          fetchPriority={priority ? 'high' : 'auto'}
          decoding="async"
          onError={() => setHasError(true)}
          className={`w-full h-full object-cover ${imgClassName}`}
        />
      ) : (
        <div
          aria-label={alt}
          className="w-full h-full flex flex-col items-center justify-center gap-3 p-6 bg-gradient-to-br from-[#151C17] via-[#1B241E] to-[#0D120F]"
        >
          <FiversLogo iconOnly variant="dark" />
          {fallbackLabel && (
            <span className="text-xs text-[#A7B3A9] text-center max-w-[20ch]">
              {fallbackLabel}
            </span>
          )}
        </div>
      )}
      {children}
    </div>
  );
}
