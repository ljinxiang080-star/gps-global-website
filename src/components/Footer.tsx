import Link from "next/link";
import Image from "next/image";
import type { ReactNode } from "react";
import { footerColumns, type FooterColumn } from "@/lib/site-data";

type FooterProps = {
  logoText?: string;
  logoSubtext?: string;
  logoMark?: string;
  logoImageSrc?: string;
  logoImageAlt?: string;
  description?: string;
  columns?: FooterColumn[];
  copyright?: string;
  legalText?: ReactNode;
};

export function Footer({
  logoText = "Saifuya Global Positioning Solutions",
  logoSubtext = "GPS Website",
  logoMark = "B",
  logoImageSrc = "/images/brand/saifuya-logo.png",
  logoImageAlt = "Saifuya Global Positioning Solutions",
  description = "塞弗亚 SAIFUYA 专业国际 GPS 定位器与物联网终端供应商，面向全球客户提供稳定、实用、智能的定位产品与行业解决方案。",
  columns = footerColumns,
  copyright = "© 2026 深圳市通安星科技有限公司. All rights reserved.",
  legalText = (
    <span className="inline-flex items-center gap-3">
      <Link href="/legal" className="transition hover:text-white">
        法律声明
      </Link>
      <span className="text-white/20">/</span>
      <Link href="/privacy" className="transition hover:text-white">
        隐私政策
      </Link>
    </span>
  ),
}: FooterProps) {
  return (
    <footer className="border-t border-slate-200 bg-[#061936] text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 md:grid-cols-2 lg:grid-cols-[1.4fr_repeat(4,1fr)]">
        <div>
          <Link href="/" className="flex items-center gap-3" aria-label="Home">
            {logoImageSrc ? (
              <Image
                src={logoImageSrc}
                alt={logoImageAlt}
                width={44}
                height={44}
                className="h-11 w-11 rounded-md object-cover shadow-sm ring-1 ring-white/10"
              />
            ) : (
              <span className="grid h-11 w-11 place-items-center rounded-md bg-[#0b68ff] text-sm font-bold text-white">
                {logoMark}
              </span>
            )}
            <span>
              <span className="block text-base font-semibold">{logoText}</span>
              <span className="block text-xs font-medium tracking-[0.16em] text-slate-400">
                {logoSubtext}
              </span>
            </span>
          </Link>
          <p className="mt-5 max-w-sm text-sm leading-7 text-slate-300">
            {description}
          </p>
        </div>

        {columns.map((column) => (
          <div key={column.title}>
            <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-400">
              {column.title}
            </h2>
            <div className="mt-5 grid gap-3">
              {column.links.map((link) => (
                <Link
                  key={`${column.title}-${link.href}-${link.label}`}
                  href={link.href}
                  className="text-sm text-slate-300 transition hover:text-white"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-6 text-sm text-slate-400 md:flex-row md:items-center md:justify-between">
          <span>{copyright}</span>
          <span>{legalText}</span>
        </div>
      </div>
    </footer>
  );
}
