"use client";

import Script from "next/script";

export function TranslationRuntime() {
  return (
    <Script
      id="gps-i18n-runtime"
      src="/i18n-runtime.js"
      strategy="afterInteractive"
    />
  );
}
