"use client";

import { useMemo, useState } from "react";
import type { IndustryImageCase } from "@/lib/case-data";
import { CaseMedia } from "@/components/cases/CaseMedia";

type IndustryImageCasesProps = {
  cases: IndustryImageCase[];
};

type ActiveGallery = {
  caseItem: IndustryImageCase;
  index: number;
};

export function IndustryImageCases({ cases }: IndustryImageCasesProps) {
  const [industryFilter, setIndustryFilter] = useState("全部行业");
  const [activeGallery, setActiveGallery] = useState<ActiveGallery | null>(null);

  const industries = useMemo(
    () => ["全部行业", ...Array.from(new Set(cases.map((item) => item.industry)))],
    [cases],
  );

  const filteredCases = useMemo(
    () =>
      cases.filter(
        (caseItem) =>
          industryFilter === "全部行业" || caseItem.industry === industryFilter,
      ),
    [cases, industryFilter],
  );

  function openGallery(caseItem: IndustryImageCase) {
    setActiveGallery({ caseItem, index: 0 });
  }

  function setGalleryIndex(nextIndex: number) {
    setActiveGallery((current) => {
      if (!current) return current;
      const total = current.caseItem.gallery.length;
      if (total === 0) return current;

      return {
        ...current,
        index: (nextIndex + total) % total,
      };
    });
  }

  const activeImage =
    activeGallery?.caseItem.gallery[activeGallery.index] ||
    activeGallery?.caseItem.thumbnail ||
    "";

  return (
    <>
      <section id="image-cases" className="bg-slate-50 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="rounded-md border border-blue-100 bg-white p-5 shadow-sm lg:p-6">
            <span className="mb-3 block text-sm font-semibold text-slate-900">
              行业筛选
            </span>
            <div className="flex flex-wrap gap-2">
              {industries.map((industry) => (
                <button
                  key={industry}
                  type="button"
                  onClick={() => setIndustryFilter(industry)}
                  className={`h-10 rounded-full border px-4 text-sm font-semibold transition ${
                    industryFilter === industry
                      ? "border-[#0b68ff] bg-[#0b68ff] text-white"
                      : "border-blue-100 bg-blue-50 text-[#0b68ff] hover:border-[#0b68ff]"
                  }`}
                >
                  {industry}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {filteredCases.map((caseItem) => (
              <article
                key={caseItem.slug}
                className="flex min-h-full flex-col overflow-hidden rounded-md border border-blue-100 bg-white shadow-sm transition hover:-translate-y-1 hover:border-blue-300 hover:shadow-xl hover:shadow-blue-950/10"
              >
                <button
                  type="button"
                  onClick={() => openGallery(caseItem)}
                  className="block text-left"
                  aria-label={`打开${caseItem.title}图库`}
                >
                  <CaseMedia
                    src={caseItem.thumbnail}
                    alt={caseItem.title}
                    label={`${caseItem.industry} image case`}
                    className="aspect-[4/3]"
                  />
                </button>
                <div className="flex flex-1 flex-col p-6">
                  <span className="text-sm font-semibold text-[#0b68ff]">
                    {caseItem.industry}
                  </span>
                  <h2 className="mt-3 text-lg font-semibold leading-snug text-slate-950">
                    {caseItem.title}
                  </h2>
                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {caseItem.summary}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {caseItem.tags.map((tag) => (
                      <span
                        key={`${caseItem.slug}-${tag}`}
                        className="rounded-full border border-blue-100 bg-blue-50 px-3 py-1 text-xs font-semibold text-[#0b68ff]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="mt-5 border-t border-slate-100 pt-5">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                      Related Products
                    </p>
                    <p className="mt-2 text-sm leading-7 text-slate-600">
                      {caseItem.products.join(" / ")}
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => openGallery(caseItem)}
                    className="mt-6 inline-flex h-11 items-center justify-center rounded-md bg-[#0b68ff] px-4 text-sm font-semibold text-white transition hover:bg-[#0056df]"
                  >
                    查看图片图库
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {activeGallery ? (
        <div
          className="fixed inset-0 z-[80] bg-slate-950/80 p-4 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label={activeGallery.caseItem.title}
        >
          <div className="mx-auto flex min-h-full max-w-6xl items-center justify-center">
            <div className="w-full overflow-hidden rounded-md border border-white/10 bg-white shadow-2xl">
              <div className="flex items-center justify-between gap-4 border-b border-slate-200 px-5 py-4">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#0b68ff]">
                    {activeGallery.caseItem.industry}
                  </p>
                  <h2 className="mt-1 text-base font-semibold text-slate-950">
                    {activeGallery.caseItem.title}
                  </h2>
                </div>
                <button
                  type="button"
                  onClick={() => setActiveGallery(null)}
                  className="h-9 rounded-md border border-slate-200 px-3 text-sm font-semibold text-slate-700 transition hover:border-[#0b68ff] hover:text-[#0b68ff]"
                >
                  关闭
                </button>
              </div>

              <div className="grid gap-0 lg:grid-cols-[1fr_280px]">
                <div className="bg-slate-50 p-4 lg:p-6">
                  <CaseMedia
                    src={activeImage}
                    alt={activeGallery.caseItem.title}
                    label="gallery image"
                    className="aspect-[4/3] w-full"
                  />
                  <div className="mt-4 flex justify-between gap-3">
                    <button
                      type="button"
                      onClick={() => setGalleryIndex(activeGallery.index - 1)}
                      className="h-10 rounded-md border border-slate-200 bg-white px-4 text-sm font-semibold text-slate-700 transition hover:border-[#0b68ff] hover:text-[#0b68ff]"
                    >
                      上一张
                    </button>
                    <span className="flex h-10 items-center text-sm font-semibold text-slate-500">
                      {activeGallery.index + 1} /{" "}
                      {Math.max(activeGallery.caseItem.gallery.length, 1)}
                    </span>
                    <button
                      type="button"
                      onClick={() => setGalleryIndex(activeGallery.index + 1)}
                      className="h-10 rounded-md border border-slate-200 bg-white px-4 text-sm font-semibold text-slate-700 transition hover:border-[#0b68ff] hover:text-[#0b68ff]"
                    >
                      下一张
                    </button>
                  </div>
                </div>

                <aside className="border-t border-slate-200 p-6 lg:border-l lg:border-t-0">
                  <p className="text-sm leading-7 text-slate-600">
                    {activeGallery.caseItem.summary}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {activeGallery.caseItem.tags.map((tag) => (
                      <span
                        key={`${activeGallery.caseItem.slug}-modal-${tag}`}
                        className="rounded-full border border-blue-100 bg-blue-50 px-3 py-1 text-xs font-semibold text-[#0b68ff]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="mt-6 rounded-md bg-slate-50 p-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                      Products
                    </p>
                    <p className="mt-2 text-sm leading-7 text-slate-700">
                      {activeGallery.caseItem.products.join(" / ")}
                    </p>
                  </div>
                </aside>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
