import Link from "next/link";
import Image from "next/image";
import type { ReactNode } from "react";
import type { ProductIcon } from "@/lib/site-data";

type ProductCardProps = {
  href: string;
  imageSrc?: string;
  icon?: ProductIcon;
  name: string;
  description: string;
  eyebrow?: string;
  imageAlt?: string;
  scenarioTags?: string[];
  ctaLabel?: string;
};

function ProductIconShell({ children }: { children: ReactNode }) {
  return (
    <svg
      aria-hidden="true"
      className="h-28 w-28 overflow-visible transition duration-300 group-hover:-translate-y-1 group-hover:scale-105"
      viewBox="0 0 128 128"
    >
      <ellipse cx="64" cy="111" fill="#dbeafe" opacity="0.9" rx="37" ry="9" />
      <circle cx="95" cy="29" fill="#79d7ff" opacity="0.22" r="11" />
      <circle cx="29" cy="87" fill="#0b68ff" opacity="0.1" r="13" />
      <g style={{ filter: "drop-shadow(0 14px 16px rgba(11, 104, 255, 0.18))" }}>
        {typeof children === "function" ? null : children}
      </g>
    </svg>
  );
}

function ProductLineIcon({ icon = "asset" }: { icon?: ProductIcon }) {
  const sharedProps = {
    stroke: "#0f3567",
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    strokeWidth: "2.8",
  };

  if (icon === "wired") {
    return (
      <ProductIconShell>
        <path
          d="M50 27h34c8 0 15 7 15 15v53l-10 10H53c-8 0-15-7-15-15V39l12-12Z"
          fill="#b8d7ff"
          {...sharedProps}
        />
        <rect
          x="31"
          y="24"
          width="58"
          height="77"
          rx="17"
          fill="#ffffff"
          {...sharedProps}
        />
        <rect
          x="44"
          y="38"
          width="32"
          height="29"
          rx="7"
          fill="#eaf4ff"
          {...sharedProps}
        />
        <circle cx="60" cy="81" fill="#0b68ff" r="9" />
        <path d="M51 96h18M55 106h10" fill="none" {...sharedProps} />
        <path
          d="M41 31c8-5 31-5 39 0"
          fill="none"
          opacity="0.45"
          stroke="#79d7ff"
          strokeWidth="4"
        />
      </ProductIconShell>
    );
  }

  if (icon === "obd") {
    return (
      <ProductIconShell>
        <path
          d="M47 40h44c7 0 13 6 13 13v34c0 12-10 22-22 22H51c-12 0-22-10-22-22V53c0-7 6-13 13-13h5Z"
          fill="#b8d7ff"
          {...sharedProps}
        />
        <path
          d="M39 34h42c7 0 13 6 13 13v34c0 12-10 22-22 22H41c-12 0-22-10-22-22V47c0-7 6-13 13-13h7Z"
          fill="#ffffff"
          {...sharedProps}
        />
        <path d="M37 34V19M52 34V17M67 34V19" fill="none" {...sharedProps} />
        <rect x="37" y="52" width="39" height="34" rx="7" fill="#eaf4ff" />
        <path
          d="M40 57h31M40 70h22"
          fill="none"
          stroke="#0b68ff"
          strokeWidth="3"
        />
        <path d="M84 49h10v29h-8" fill="none" {...sharedProps} />
      </ProductIconShell>
    );
  }

  if (icon === "grazing") {
    return (
      <ProductIconShell>
        <path
          d="M39 70c-8-2-14-9-15-18l-3-22 17 13c9-9 30-8 42 2l18-13-4 22c-3 18-18 32-38 32h-4c-5 0-9-1-13-2Z"
          fill="#b8d7ff"
          {...sharedProps}
        />
        <path
          d="M33 66c2 15 14 26 29 26h4c15 0 27-11 29-26"
          fill="#ffffff"
          {...sharedProps}
        />
        <path d="M41 48c6 8 7 25 1 38M86 49c-6 8-7 25-1 38" fill="none" {...sharedProps} />
        <circle cx="54" cy="64" fill="#0b68ff" r="4" />
        <circle cx="75" cy="64" fill="#0b68ff" r="4" />
        <path d="M58 77c4 3 9 3 13 0" fill="none" stroke="#0b68ff" strokeWidth="3" />
        <path
          d="M64 20c0-12 18-12 18 0 0 10-18 21-18 21S46 30 46 20c0-12 18-12 18 0Z"
          fill="#ffffff"
          {...sharedProps}
        />
        <circle cx="64" cy="48" fill="#79d7ff" r="5" />
      </ProductIconShell>
    );
  }

  if (icon === "fuel") {
    return (
      <ProductIconShell>
        <path
          d="M42 22h42c7 0 13 6 13 13v73H38V35c0-7 6-13 13-13Z"
          fill="#b8d7ff"
          {...sharedProps}
        />
        <path
          d="M31 19h44c7 0 13 6 13 13v73H31V32c0-7 6-13 13-13Z"
          fill="#ffffff"
          {...sharedProps}
        />
        <rect x="45" y="34" width="26" height="24" rx="4" fill="#eaf4ff" {...sharedProps} />
        <path d="M88 40l14 14v39c0 7-5 12-12 12h-2M102 54H91" fill="none" {...sharedProps} />
        <path
          d="M60 68c8 9 12 16 12 23a12 12 0 0 1-24 0c0-7 4-14 12-23Z"
          fill="#eaf4ff"
          {...sharedProps}
        />
        <path d="M49 101h22M48 76h24" fill="none" stroke="#0b68ff" strokeWidth="3" />
      </ProductIconShell>
    );
  }

  if (icon === "machinery") {
    return (
      <ProductIconShell>
        <path
          d="M22 78h44l22-31h20L98 69h16l-12 20H26Z"
          fill="#b8d7ff"
          {...sharedProps}
        />
        <path
          d="M31 76l11-36h34l12 14-17 22H31Z"
          fill="#ffffff"
          {...sharedProps}
        />
        <path d="M47 48h22l7 8-9 12H41l6-20Z" fill="#eaf4ff" />
        <path d="M30 98h70" fill="none" {...sharedProps} />
        <circle cx="40" cy="91" fill="#ffffff" r="12" {...sharedProps} />
        <circle cx="87" cy="91" fill="#ffffff" r="12" {...sharedProps} />
        <circle cx="40" cy="91" fill="#0b68ff" r="5" />
        <circle cx="87" cy="91" fill="#0b68ff" r="5" />
        <path d="M108 47l-8 22h17l-9-22Z" fill="#ffffff" {...sharedProps} />
      </ProductIconShell>
    );
  }

  if (icon === "bike") {
    return (
      <ProductIconShell>
        <path
          d="M30 83h36l16-25h20"
          fill="none"
          {...sharedProps}
        />
        <path
          d="M47 83l13-38h22l-16 38M60 45l-9-10M82 58l-8-13"
          fill="none"
          {...sharedProps}
        />
        <circle cx="30" cy="83" fill="#ffffff" r="16" {...sharedProps} />
        <circle cx="87" cy="83" fill="#ffffff" r="16" {...sharedProps} />
        <circle cx="30" cy="83" fill="#0b68ff" r="5" />
        <circle cx="87" cy="83" fill="#0b68ff" r="5" />
        <path
          d="M84 36h28c6 0 11 5 11 11v19H76V44c0-4 4-8 8-8Z"
          fill="#ffffff"
          {...sharedProps}
        />
        <path d="M92 48h18M92 59h12" fill="none" stroke="#79d7ff" strokeWidth="4" />
        <path d="M112 45h9" fill="none" stroke="#ef4444" strokeWidth="5" />
      </ProductIconShell>
    );
  }

  if (icon === "wireless") {
    return (
      <ProductIconShell>
        <rect
          x="36"
          y="36"
          width="56"
          height="62"
          rx="16"
          fill="#ffffff"
          {...sharedProps}
        />
        <path
          d="M49 55h30M49 70h18M56 98h16"
          fill="none"
          stroke="#0b68ff"
          strokeWidth="3"
        />
        <circle cx="64" cy="83" fill="#0b68ff" r="7" />
        <path
          d="M44 26c12-10 28-10 40 0M33 15c19-16 43-16 62 0M52 37c7-5 17-5 24 0"
          fill="none"
          stroke="#79d7ff"
          strokeWidth="4"
        />
        <path d="M92 49l14 14v40H50" fill="#b8d7ff" {...sharedProps} />
      </ProductIconShell>
    );
  }

  if (icon === "bluetooth") {
    return (
      <ProductIconShell>
        <rect
          x="35"
          y="32"
          width="58"
          height="68"
          rx="18"
          fill="#ffffff"
          {...sharedProps}
        />
        <path
          d="M64 24v80l24-23-24-17 24-17-24-23Z"
          fill="#eaf4ff"
          {...sharedProps}
        />
        <path
          d="M64 64 42 44M64 64 42 84"
          fill="none"
          stroke="#0b68ff"
          strokeWidth="4"
        />
        <circle cx="97" cy="40" fill="#79d7ff" r="8" />
        <circle cx="31" cy="88" fill="#0b68ff" opacity="0.18" r="10" />
      </ProductIconShell>
    );
  }

  if (icon === "solar") {
    return (
      <ProductIconShell>
        <path
          d="M30 74h66l10 26H40L30 74Z"
          fill="#b8d7ff"
          {...sharedProps}
        />
        <path d="M40 82h58M48 74l8 26M64 74l4 26M80 74l-2 26" fill="none" {...sharedProps} />
        <rect x="46" y="29" width="38" height="37" rx="10" fill="#ffffff" {...sharedProps} />
        <path d="M56 44h18M56 56h11" fill="none" stroke="#0b68ff" strokeWidth="3" />
        <circle cx="95" cy="34" fill="#ffffff" r="13" {...sharedProps} />
        <path d="M95 12v7M95 49v7M73 34h7M110 34h7M80 19l5 5M110 19l-5 5M80 49l5-5M110 49l-5-5" fill="none" stroke="#79d7ff" strokeWidth="3" />
      </ProductIconShell>
    );
  }

  if (icon === "pet") {
    return (
      <ProductIconShell>
        <path
          d="M43 70c-6 0-11-5-11-12s5-12 11-12c5 0 9 3 11 7h20c2-4 6-7 11-7 6 0 11 5 11 12s-5 12-11 12c-5 0-9-3-11-7H54c-2 4-6 7-11 7Z"
          fill="#ffffff"
          {...sharedProps}
        />
        <path d="M53 83c7-8 15-8 22 0l10 13H43l10-13Z" fill="#b8d7ff" {...sharedProps} />
        <circle cx="50" cy="43" fill="#ffffff" r="8" {...sharedProps} />
        <circle cx="79" cy="43" fill="#ffffff" r="8" {...sharedProps} />
        <circle cx="64" cy="57" fill="#0b68ff" r="5" />
        <path
          d="M93 26c0-11 16-11 16 0 0 9-16 18-16 18s-16-9-16-18c0-11 16-11 16 0Z"
          fill="#ffffff"
          {...sharedProps}
        />
      </ProductIconShell>
    );
  }

  if (icon === "personal") {
    return (
      <ProductIconShell>
        <circle cx="64" cy="42" fill="#ffffff" r="18" {...sharedProps} />
        <path
          d="M38 101c3-23 15-35 26-35s23 12 26 35H38Z"
          fill="#b8d7ff"
          {...sharedProps}
        />
        <path d="M64 84v17M52 98h24" fill="none" stroke="#0b68ff" strokeWidth="3" />
        <path
          d="M96 34c0-12 18-12 18 0 0 10-18 21-18 21S78 44 78 34c0-12 18-12 18 0Z"
          fill="#ffffff"
          {...sharedProps}
        />
        <circle cx="96" cy="35" fill="#0b68ff" r="4" />
      </ProductIconShell>
    );
  }

  if (icon === "sim") {
    return (
      <ProductIconShell>
        <path
          d="M43 22h32l22 22v62H43V22Z"
          fill="#ffffff"
          {...sharedProps}
        />
        <path d="M75 22v22h22" fill="#b8d7ff" {...sharedProps} />
        <rect x="55" y="58" width="30" height="27" rx="4" fill="#eaf4ff" {...sharedProps} />
        <path
          d="M55 68h30M65 58v27M75 58v27M50 96h40"
          fill="none"
          stroke="#0b68ff"
          strokeWidth="3"
        />
        <path d="M28 49c-8 9-8 21 0 30M100 49c8 9 8 21 0 30" fill="none" stroke="#79d7ff" strokeWidth="4" />
      </ProductIconShell>
    );
  }

  return (
    <ProductIconShell>
      <path
        d="M38 32h52l16 16v50H54L38 82V32Z"
        fill="#b8d7ff"
        {...sharedProps}
      />
      <rect
        x="22"
        y="20"
        width="64"
        height="64"
        rx="10"
        fill="#ffffff"
        {...sharedProps}
      />
      <path d="M86 20l16 16v64H38L22 84" fill="#eaf4ff" {...sharedProps} />
      <rect x="37" y="36" width="34" height="29" rx="6" fill="#ffffff" {...sharedProps} />
      <path
        d="M34 75h21M86 43h15M86 58h15M42 20V9M58 20V9M74 20V9M42 96V84M58 96V84M74 96V84"
        fill="none"
        stroke="#0b68ff"
        strokeWidth="3"
      />
    </ProductIconShell>
  );
}

export function ProductCard({
  href,
  imageSrc,
  imageAlt,
  icon,
  name,
  description,
  eyebrow,
  scenarioTags = [],
  ctaLabel = "Explore",
}: ProductCardProps) {
  return (
    <Link
      href={href}
      className="group flex min-h-[360px] flex-col items-center justify-between rounded-lg border border-slate-200 bg-white px-5 py-7 text-center shadow-sm transition hover:-translate-y-1 hover:border-blue-300 hover:shadow-xl hover:shadow-blue-950/10"
    >
      <div className="flex h-36 w-full items-center justify-center overflow-hidden rounded-md border border-blue-100 bg-white">
        {imageSrc ? (
          <Image
            src={imageSrc}
            alt={imageAlt ?? name}
            width={420}
            height={420}
            sizes="(min-width: 1280px) 170px, (min-width: 1024px) 30vw, (min-width: 640px) 45vw, 100vw"
            className="h-full w-full object-contain p-2 transition duration-300 group-hover:scale-105"
          />
        ) : (
          <ProductLineIcon icon={icon} />
        )}
      </div>
      <div className="mt-6 flex flex-1 flex-col items-center">
        {eyebrow ? (
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#0b68ff]">
            {eyebrow}
          </p>
        ) : null}
        <h3 className="mt-3 text-lg font-semibold leading-7 text-slate-950">
          {name}
        </h3>
        <p className="mt-3 line-clamp-2 text-sm leading-6 text-slate-500">
          {description}
        </p>
        {scenarioTags.length ? (
          <div className="mt-4 flex min-h-8 flex-wrap justify-center gap-2">
            {scenarioTags.slice(0, 3).map((tag) => (
              <span
                key={`${name}-${tag}`}
                className="rounded-full border border-blue-100 bg-blue-50 px-2.5 py-1 text-[11px] font-semibold text-[#0b68ff]"
              >
                {tag}
              </span>
            ))}
          </div>
        ) : null}
        <span className="mt-5 inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#0b68ff] text-white transition group-hover:bg-[#0056df]">
          <span className="sr-only">{ctaLabel}</span>
          <svg
            aria-hidden="true"
            className="h-4 w-4"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2.2"
            viewBox="0 0 24 24"
          >
            <path d="M9 18l6-6-6-6" />
          </svg>
        </span>
      </div>
    </Link>
  );
}
