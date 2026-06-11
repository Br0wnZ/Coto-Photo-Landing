import React from 'react';

import type { ICertificate } from '@/models/certificate.model';

type CertificateBadgeProps = {
  certificate: ICertificate;
};

const CertificateBadge = ({ certificate }: CertificateBadgeProps) => {
  const { title, year, issuer, description } = certificate;

  const isWeddingAward = title.toLowerCase().includes('award');

  // Define thematic elements for uniformity:
  // - Gold/bronze theme for the Wedding Awards to convey prestige.
  // - Warm taupe theme for the Recommended badge matching the widget brand.
  const themeColor = isWeddingAward ? '#B59A57' : '#A69688';
  const topLabel = isWeddingAward ? 'WEDDING AWARD' : 'RECOMENDADO';
  const bottomLabel = isWeddingAward ? `GANADOR ${year}` : `${certificate.opinionsCount ?? 4} OPINIONES`;

  return (
    <div className="group relative flex flex-col items-center justify-between overflow-hidden rounded-2xl border border-amber-100 bg-gradient-to-b from-amber-50/60 to-white p-6 text-center shadow-md transition-all duration-300 hover:scale-[1.03] hover:border-amber-300 hover:shadow-xl">
      {/* Light glow background decoration */}
      <div className="absolute -right-12 -top-12 h-24 w-24 rounded-full bg-amber-100/40 blur-2xl group-hover:bg-amber-200/50 transition-all duration-300"></div>

      <div className="flex flex-col items-center w-full">
        {/* Uniform Badge Design matching the bodas.net widget style */}
        <div className="flex flex-col items-center w-full pb-1">
          {/* Outline Heart Icon (hand-drawn style) */}
          <svg
            className="h-16 w-16 mb-2 transition-transform duration-300 group-hover:scale-110"
            fill="none"
            stroke={themeColor}
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            viewBox="0 0 100 100"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M50 32 C 45 18, 20 14, 16 32 C 11 52, 32 72, 50 84 C 68 72, 89 52, 84 32 C 80 14, 55 18, 50 32 Z" />
          </svg>

          {/* Top Label (WEDDING AWARD or RECOMENDADO) */}
          <span 
            className="text-[11px] font-extrabold uppercase tracking-[0.25em] text-[#4A4A4A] mb-1 font-sans"
          >
            {topLabel}
          </span>

          {/* bodas.net Brand Script/Serif Text */}
          <span 
            className="font-serif italic text-4xl font-normal text-[#2F3438] mb-2.5 select-none leading-none tracking-tight"
          >
            bodas.net
          </span>

          {/* 5 Yellow Stars */}
          <div className="flex gap-1 mb-2">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className="h-5 w-5 text-[#E3B83F]"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>

          {/* Bottom Label (GANADOR {year} or {opinions} OPINIONES) */}
          <span 
            className="text-[11px] font-bold uppercase tracking-[0.15em] mb-2"
            style={{ color: themeColor }}
          >
            {bottomLabel}
          </span>
        </div>

        {/* Description */}
        {description && (
          <p className="mt-3 text-xs leading-relaxed text-gray-500 px-2 border-t border-amber-100/40 pt-3 w-full">
            {description}
          </p>
        )}
      </div>

      {/* Ribbon Banner at the bottom for dynamic premium look */}
      <div className="mt-4 w-full border-t border-amber-100/60 pt-3 text-[10px] font-bold uppercase tracking-widest text-amber-700">
        Excelente Calidad
      </div>
    </div>
  );
};

export { CertificateBadge };
