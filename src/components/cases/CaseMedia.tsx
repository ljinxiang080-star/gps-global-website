"use client";

import { useState } from "react";

type CaseMediaProps = {
  src: string;
  alt: string;
  label?: string;
  className?: string;
};

export function CaseMedia({
  src,
  alt,
  label = "CASE IMAGE",
  className = "",
}: CaseMediaProps) {
  const [failed, setFailed] = useState(!src);

  return (
    <div
      className={`relative overflow-hidden rounded-md border border-blue-100 bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50 ${className}`}
    >
      {!failed ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={src}
          alt={alt}
          className="h-full w-full object-cover"
          loading="lazy"
          onError={() => setFailed(true)}
        />
      ) : (
        <div className="flex h-full min-h-48 flex-col items-center justify-center px-6 text-center">
          <div className="relative h-20 w-28">
            <span className="absolute left-1 top-8 h-8 w-8 rounded-full bg-blue-100" />
            <span className="absolute right-0 top-0 h-8 w-8 rounded-full bg-cyan-100" />
            <span className="absolute left-6 top-3 h-16 w-[72px] rounded-md border-2 border-[#0b68ff] bg-white shadow-sm" />
            <span className="absolute left-11 top-8 h-2 w-8 rounded-full bg-blue-200" />
            <span className="absolute left-11 top-12 h-2 w-12 rounded-full bg-cyan-300" />
          </div>
          <span className="mt-4 text-[10px] font-bold uppercase tracking-[0.22em] text-slate-500">
            {label}
          </span>
        </div>
      )}
    </div>
  );
}
