import type { FeatureItem } from "@/lib/site-data";
import { SectionHeader } from "@/components/SectionHeader";

type FeatureSectionProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  items: FeatureItem[];
};

const iconPaths: Record<FeatureItem["icon"], string> = {
  location: "M12 21s7-5.2 7-11a7 7 0 1 0-14 0c0 5.8 7 11 7 11Zm0-8.5A2.5 2.5 0 1 0 12 7a2.5 2.5 0 0 0 0 5.5Z",
  route: "M4 6h5a4 4 0 0 1 0 8H8a4 4 0 0 0 0 8h12M4 6l3-3m-3 3 3 3M20 22l-3-3m3 3-3 3",
  fence: "M4 20V7m16 13V7M3 11h18M3 16h18M8 20V5m8 15V5",
  alert: "M12 9v4m0 4h.01M10.3 3.9 2 18a2 2 0 0 0 1.7 3h16.6a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0Z",
  fuel: "M5 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16H5Zm4-14h4v4H9V7Zm8 2 3 3v7a2 2 0 0 1-2 2h-1",
  app: "M8 2h8a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2Zm3 17h2M9 5h6v11H9V5Z",
  web: "M3 5h18v14H3V5Zm0 4h18M8 13h3m3 0h3M8 16h8",
  api: "M7 8 3 12l4 4m10-8 4 4-4 4M14 4l-4 16",
};

function FeatureIcon({ icon }: { icon: FeatureItem["icon"] }) {
  return (
    <div className="flex h-12 w-12 items-center justify-center rounded-md border border-cyan-300/30 bg-cyan-300/10 text-[#79d7ff]">
      <svg
        aria-hidden="true"
        className="h-6 w-6"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
        viewBox="0 0 24 24"
      >
        <path d={iconPaths[icon]} />
      </svg>
    </div>
  );
}

export function FeatureSection({
  eyebrow = "Features",
  title,
  description,
  items,
}: FeatureSectionProps) {
  return (
    <section className="relative isolate overflow-hidden bg-[#061936] py-16 text-white lg:py-24">
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(circle at 22% 12%, rgba(11, 104, 255, 0.35), transparent 28%), radial-gradient(circle at 82% 25%, rgba(121, 215, 255, 0.18), transparent 34%)",
        }}
      />
      <div className="mx-auto max-w-7xl px-6">
        <div className="[&_h2]:text-white [&_p:last-child]:text-slate-300">
          <SectionHeader
            eyebrow={eyebrow}
            title={title}
            description={description}
            align="center"
          />
        </div>
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {items.map((item, index) => (
            <article
              key={`${item.title}-${index}`}
              className="rounded-md border border-cyan-300/15 bg-white/8 p-6 shadow-sm backdrop-blur transition hover:-translate-y-1 hover:border-cyan-300/35 hover:bg-white/12 hover:shadow-xl hover:shadow-blue-950/30"
            >
              <FeatureIcon icon={item.icon} />
              <h3 className="mt-6 text-lg font-semibold text-white">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate-300">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
