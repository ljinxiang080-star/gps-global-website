"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { localeOptions } from "@/lib/locale-options";
import { navItems, type NavItem } from "@/lib/site-data";

function isActive(pathname: string, href: string) {
  if (href === "/") {
    return pathname === "/";
  }

  return pathname === href || pathname.startsWith(`${href}/`);
}

function isNavActive(pathname: string, item: NavItem) {
  return (
    isActive(pathname, item.href) ||
    Boolean(item.children?.some((child) => isActive(pathname, child.href)))
  );
}

function ChevronDown({ className = "" }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      className={`h-3.5 w-3.5 ${className}`}
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      viewBox="0 0 24 24"
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

function GlobeIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-4 w-4"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.8"
      viewBox="0 0 24 24"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M2 12h20M12 2a15.3 15.3 0 0 1 0 20M12 2a15.3 15.3 0 0 0 0 20" />
    </svg>
  );
}

function closeRegionSwitchers() {
  document
    .querySelectorAll<HTMLDetailsElement>("[data-region-switcher][open]")
    .forEach((switcher) => switcher.removeAttribute("open"));
}

function RegionSwitcher({ onOpen }: { onOpen?: () => void }) {
  return (
    <details
      className="group relative"
      data-no-translate=""
      data-region-switcher=""
    >
      <summary
        className="inline-flex h-10 cursor-pointer list-none items-center justify-center gap-2 rounded-md border border-slate-200 bg-white px-3 text-sm font-semibold text-slate-700 transition hover:border-[#0b68ff] hover:text-[#0b68ff] [&::-webkit-details-marker]:hidden"
        onClick={(event) => {
          const switcher = event.currentTarget
            .parentElement as HTMLDetailsElement | null;
          if (!switcher?.open) {
            closeRegionSwitchers();
          }
          onOpen?.();
        }}
      >
        <GlobeIcon />
        <span className="hidden sm:inline" data-region-current-label="">
          USA and Canada
        </span>
        <span aria-hidden="true" className="sm:hidden" data-region-current-flag="">
          🇺🇸
        </span>
        <ChevronDown className="text-slate-400 transition group-open:rotate-180" />
      </summary>

      <div className="invisible absolute right-0 top-full z-50 mt-3 grid max-h-[70vh] w-[520px] max-w-[calc(100vw-2rem)] gap-1 overflow-y-auto rounded-md border border-white/10 bg-[#070d18] p-4 text-white opacity-0 shadow-2xl shadow-slate-950/25 transition group-open:visible group-open:opacity-100 sm:grid-cols-2">
        {localeOptions.map((option, index) => (
          <button
            key={option.code}
            type="button"
            className="region-option flex w-full items-start gap-3 rounded-md px-3 py-2.5 text-left text-slate-100 transition hover:bg-white/10"
            data-region-option=""
            data-locale-code={option.code}
            data-locale-dir={option.dir}
            data-region-label={option.region}
            data-region-flag={option.flag}
            aria-pressed={index === 0}
          >
            <span className="region-radio mt-1 h-4 w-4 rounded-full border border-white bg-transparent" />
            <span className="min-w-0">
              <span className="block text-sm font-semibold leading-5">
                {option.region}
              </span>
              <span className="mt-1 block text-sm leading-5 text-slate-300">
                {option.flag} {option.language}
              </span>
            </span>
          </button>
        ))}
      </div>
    </details>
  );
}

function desktopDropdownFrameClass(item: NavItem) {
  const widthClass =
    item.dropdownVariant === "case"
      ? "w-[420px] max-w-[calc(100vw-2rem)]"
      : "w-72";

  return `invisible absolute left-1/2 top-full ${widthClass} -translate-x-1/2 pt-7 opacity-0 transition group-open:visible group-open:opacity-100`;
}

function desktopDropdownPanelClass(item: NavItem) {
  return item.dropdownVariant === "case"
    ? "grid max-h-[72vh] gap-3 overflow-y-auto rounded-md border border-blue-100 bg-white p-4 shadow-xl shadow-slate-950/10"
    : "max-h-[72vh] overflow-y-auto rounded-md border border-slate-200 bg-white p-3 shadow-xl shadow-slate-950/10";
}

function desktopChildLinkClass(item: NavItem) {
  return item.dropdownVariant === "case"
    ? "block rounded-md border border-blue-100 bg-white px-4 py-4 shadow-sm transition hover:border-[#0b68ff] hover:bg-blue-50"
    : "block rounded-md px-4 py-3 transition hover:bg-slate-50";
}

type HeaderProps = {
  logoText?: string;
  logoSubtext?: string;
  logoMark?: string;
  logoImageSrc?: string;
  logoImageAlt?: string;
  navigation?: NavItem[];
  ctaLabel?: string;
  ctaHref?: string;
};

export function Header({
  logoText = "Saifuya Global Positioning Solutions",
  logoSubtext = "GPS Website",
  logoMark = "B",
  logoImageSrc = "/images/brand/saifuya-logo.png",
  logoImageAlt = "Saifuya Global Positioning Solutions",
  navigation = navItems,
  ctaLabel = "Inquiry",
  ctaHref = "/contact",
}: HeaderProps) {
  const pathname = usePathname();
  const headerRef = useRef<HTMLElement>(null);
  const [activeDesktopMenu, setActiveDesktopMenu] = useState<string | null>(
    null,
  );
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeMobileMenu, setActiveMobileMenu] = useState<string | null>(null);

  function closeNavigationMenus() {
    setActiveDesktopMenu(null);
    setActiveMobileMenu(null);
    setMobileMenuOpen(false);
  }

  function toggleDesktopMenu(href: string) {
    closeRegionSwitchers();
    setActiveMobileMenu(null);
    setMobileMenuOpen(false);
    setActiveDesktopMenu((current) => (current === href ? null : href));
  }

  function toggleMobileMenu(href: string) {
    closeRegionSwitchers();
    setActiveDesktopMenu(null);
    setActiveMobileMenu((current) => (current === href ? null : href));
  }

  useEffect(() => {
    const timeoutId = window.setTimeout(() => {
      setActiveDesktopMenu(null);
      setActiveMobileMenu(null);
      setMobileMenuOpen(false);
    }, 0);

    return () => window.clearTimeout(timeoutId);
  }, [pathname]);

  useEffect(() => {
    function handlePointerDown(event: PointerEvent) {
      if (
        headerRef.current &&
        event.target instanceof Node &&
        !headerRef.current.contains(event.target)
      ) {
        closeNavigationMenus();
      }
    }

    document.addEventListener("pointerdown", handlePointerDown);
    return () => document.removeEventListener("pointerdown", handlePointerDown);
  }, []);

  return (
    <header
      ref={headerRef}
      className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/95 backdrop-blur"
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <Link
          href="/"
          className="flex items-center gap-3"
          aria-label="Saifuya Global Positioning Solutions GPS Website"
        >
          {logoImageSrc ? (
            <Image
              src={logoImageSrc}
              alt={logoImageAlt}
              width={40}
              height={40}
              priority
              className="h-10 w-10 rounded-md object-cover shadow-sm"
            />
          ) : (
            <span className="grid h-10 w-10 place-items-center rounded-md bg-[#0b68ff] text-sm font-bold text-white">
              {logoMark}
            </span>
          )}
          <span>
            <span className="block text-base font-semibold text-slate-950">
              {logoText}
            </span>
            <span className="block text-xs font-medium tracking-[0.16em] text-slate-500">
              {logoSubtext}
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
          {navigation.map((item) =>
            item.children?.length ? (
              <details
                key={item.href}
                className="group relative"
                data-nav-item={item.label.toLowerCase()}
                open={activeDesktopMenu === item.href}
              >
                <summary
                  className={`inline-flex cursor-pointer list-none items-center gap-1 text-sm font-medium transition [&::-webkit-details-marker]:hidden ${
                    isNavActive(pathname, item)
                      ? "text-[#0b68ff]"
                      : "text-slate-600 hover:text-slate-950"
                  }`}
                  onClick={(event) => {
                    event.preventDefault();
                    toggleDesktopMenu(item.href);
                  }}
                >
                  {item.label}
                  <ChevronDown className="text-slate-400 transition group-open:rotate-180" />
                </summary>
                <div className={desktopDropdownFrameClass(item)}>
                  <div className={desktopDropdownPanelClass(item)}>
                    {item.showOverview !== false ? (
                      <>
                        <Link
                          href={item.href}
                          onClick={closeNavigationMenus}
                          className="block rounded-md px-4 py-3 text-sm font-semibold text-slate-950 hover:bg-blue-50 hover:text-[#0b68ff]"
                        >
                          {item.label} Overview
                        </Link>
                        <div className="my-2 h-px bg-slate-100" />
                      </>
                    ) : null}
                    {item.children.map((child) => (
                      <Link
                        key={`${item.href}-${child.href}-${child.label}`}
                        href={child.href}
                        onClick={closeNavigationMenus}
                        className={desktopChildLinkClass(item)}
                      >
                        <span className="block text-sm font-semibold text-slate-900">
                          {child.label}
                        </span>
                        {child.description ? (
                          <span className="mt-1 block text-xs leading-5 text-slate-500">
                            {child.description}
                          </span>
                        ) : null}
                      </Link>
                    ))}
                  </div>
                </div>
              </details>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                onClick={closeNavigationMenus}
                className={`text-sm font-medium transition ${
                  isNavActive(pathname, item)
                    ? "text-[#0b68ff]"
                    : "text-slate-600 hover:text-slate-950"
                }`}
              >
                {item.label}
              </Link>
            ),
          )}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <RegionSwitcher onOpen={closeNavigationMenus} />
          <Link
            href={ctaHref}
            onClick={closeNavigationMenus}
            className="inline-flex h-11 items-center justify-center rounded-md border border-[#0b68ff] px-5 text-sm font-semibold text-[#0b68ff] transition hover:bg-[#0b68ff] hover:text-white"
          >
            {ctaLabel}
          </Link>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <RegionSwitcher onOpen={closeNavigationMenus} />
          <details className="relative" open={mobileMenuOpen}>
            <summary
              className="flex h-10 w-10 cursor-pointer list-none items-center justify-center rounded-md border border-slate-200 text-slate-900 [&::-webkit-details-marker]:hidden"
              onClick={(event) => {
                event.preventDefault();
                closeRegionSwitchers();
                setActiveDesktopMenu(null);
                setActiveMobileMenu(null);
                setMobileMenuOpen((current) => !current);
              }}
            >
              <span className="sr-only">Open navigation</span>
              <span className="block h-0.5 w-5 bg-current before:block before:h-0.5 before:w-5 before:-translate-y-1.5 before:bg-current before:content-[''] after:block after:h-0.5 after:w-5 after:translate-y-1 after:bg-current after:content-['']" />
            </summary>
            <div className="absolute right-0 mt-3 max-h-[72vh] w-64 overflow-y-auto rounded-md border border-slate-200 bg-white p-3 shadow-xl">
              {navigation.map((item) =>
                item.children?.length ? (
                  <details
                    key={item.href}
                    className="group/mobile"
                    data-nav-item={item.label.toLowerCase()}
                    open={activeMobileMenu === item.href}
                  >
                    <summary
                      className={`flex cursor-pointer list-none items-center justify-between rounded-md px-4 py-3 text-sm font-medium [&::-webkit-details-marker]:hidden ${
                        isNavActive(pathname, item)
                          ? "bg-blue-50 text-[#0b68ff]"
                          : "text-slate-700 hover:bg-slate-50"
                      }`}
                      onClick={(event) => {
                        event.preventDefault();
                        toggleMobileMenu(item.href);
                      }}
                    >
                      {item.label}
                      <ChevronDown className="text-slate-400 transition group-open/mobile:rotate-180" />
                    </summary>
                    <div className="ml-3 border-l border-slate-100 py-1 pl-3">
                      {item.showOverview !== false ? (
                        <Link
                          href={item.href}
                          onClick={closeNavigationMenus}
                          className="block rounded-md px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50"
                        >
                          Overview
                        </Link>
                      ) : null}
                      {item.children.map((child) => (
                        <Link
                          key={`${item.href}-${child.href}-${child.label}`}
                          href={child.href}
                          onClick={closeNavigationMenus}
                          className="block rounded-md px-3 py-2 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#0b68ff]"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </details>
                ) : (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={closeNavigationMenus}
                    className={`block rounded-md px-4 py-3 text-sm font-medium ${
                      isNavActive(pathname, item)
                        ? "bg-blue-50 text-[#0b68ff]"
                        : "text-slate-700 hover:bg-slate-50"
                    }`}
                  >
                    {item.label}
                  </Link>
                ),
              )}
            </div>
          </details>
        </div>
      </div>
    </header>
  );
}
