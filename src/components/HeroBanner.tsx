import Link from "next/link";
import Image from "next/image";

type HeroAction = {
  label: string;
  href: string;
  variant?: "primary" | "secondary";
};

type HeroBannerProps = {
  eyebrow: string;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt?: string;
  actions?: HeroAction[];
  compact?: boolean;
};

export function HeroBanner({
  eyebrow,
  title,
  description,
  imageSrc,
  imageAlt = "",
  actions = [],
  compact = false,
}: HeroBannerProps) {
  return (
    <section className="relative isolate overflow-hidden bg-[#061936] text-white">
      <Image
        src={imageSrc}
        alt={imageAlt}
        fill
        priority
        sizes="100vw"
        className="absolute inset-0 -z-20 object-cover opacity-55"
      />
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "linear-gradient(90deg, rgba(4, 20, 45, 0.96), rgba(5, 39, 85, 0.78), rgba(4, 20, 45, 0.24))",
        }}
      />
      <div
        className={`mx-auto flex max-w-7xl flex-col px-6 ${
          compact ? "py-20 lg:py-24" : "min-h-[560px] justify-center py-24 lg:py-28"
        }`}
      >
        <div className="max-w-3xl">
          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.24em] text-[#79d7ff]">
            {eyebrow}
          </p>
          <h1 className="text-4xl font-semibold leading-tight text-white md:text-5xl lg:text-6xl">
            {title}
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-200 md:text-lg">
            {description}
          </p>
          {actions.length > 0 ? (
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              {actions.map((action) => (
                <Link
                  key={action.href}
                  href={action.href}
                  className={`inline-flex h-12 items-center justify-center rounded-md px-6 text-sm font-semibold transition ${
                    action.variant === "secondary"
                      ? "border border-white/30 text-white hover:border-white hover:bg-white/10"
                      : "bg-[#0b68ff] text-white shadow-lg shadow-blue-950/30 hover:bg-[#0056df]"
                  }`}
                >
                  {action.label}
                </Link>
              ))}
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
