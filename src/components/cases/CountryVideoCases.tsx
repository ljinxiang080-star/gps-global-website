"use client";

import { useMemo, useState } from "react";
import type { CountryVideoCase } from "@/lib/case-data";
import { CaseMedia } from "@/components/cases/CaseMedia";

type CountryVideoCasesProps = {
  cases: CountryVideoCase[];
};

function getPlayableUrl(caseItem: CountryVideoCase) {
  return caseItem.videoUrl || caseItem.shortsUrl || caseItem.tiktokUrl || "";
}

function getActionLabel(caseItem: CountryVideoCase) {
  if (caseItem.youtubeId) return "播放视频";
  if (getPlayableUrl(caseItem)) return "打开链接";
  return "视频待上传";
}

export function CountryVideoCases({ cases }: CountryVideoCasesProps) {
  const [query, setQuery] = useState("");
  const [countryFilter, setCountryFilter] = useState("全部国家");
  const [activeVideo, setActiveVideo] = useState<CountryVideoCase | null>(null);

  const countries = useMemo(
    () => ["全部国家", ...Array.from(new Set(cases.map((item) => item.countryCn)))],
    [cases],
  );

  const filteredCases = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return cases.filter((caseItem) => {
      const matchesCountry =
        countryFilter === "全部国家" || caseItem.countryCn === countryFilter;
      const searchText = [
        caseItem.country,
        caseItem.countryCn,
        caseItem.region,
        caseItem.title,
        caseItem.summary,
        caseItem.scenario,
        caseItem.industry,
        ...caseItem.tags,
      ]
        .join(" ")
        .toLowerCase();

      return matchesCountry && searchText.includes(normalizedQuery);
    });
  }, [cases, countryFilter, query]);

  function handleCaseAction(caseItem: CountryVideoCase) {
    if (caseItem.youtubeId) {
      setActiveVideo(caseItem);
      return;
    }

    const url = getPlayableUrl(caseItem);
    if (url) {
      window.open(url, "_blank", "noopener,noreferrer");
    }
  }

  return (
    <>
      <section id="video-cases" className="bg-slate-50 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="rounded-md border border-blue-100 bg-white p-5 shadow-sm lg:p-6">
            <div className="grid gap-4 lg:grid-cols-[1fr_auto] lg:items-center">
              <label className="block">
                <span className="mb-2 block text-sm font-semibold text-slate-900">
                  搜索国家
                </span>
                <input
                  type="search"
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  aria-label="输入国家、地区、行业或场景"
                  className="h-12 w-full rounded-md border border-slate-200 bg-white px-4 text-sm text-slate-900 outline-none transition focus:border-[#0b68ff] focus:ring-4 focus:ring-blue-100"
                />
                <span className="mt-2 block text-xs leading-5 text-slate-500">
                  输入国家、地区、行业或场景，快速筛选视频案例。
                </span>
              </label>

              <div>
                <span className="mb-2 block text-sm font-semibold text-slate-900">
                  国家快捷筛选
                </span>
                <div className="flex flex-wrap gap-2">
                  {countries.map((country) => (
                    <button
                      key={country}
                      type="button"
                      onClick={() => setCountryFilter(country)}
                      className={`h-10 rounded-full border px-4 text-sm font-semibold transition ${
                        countryFilter === country
                          ? "border-[#0b68ff] bg-[#0b68ff] text-white"
                          : "border-blue-100 bg-blue-50 text-[#0b68ff] hover:border-[#0b68ff]"
                      }`}
                    >
                      {country}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {filteredCases.map((caseItem) => {
              const canPlay = Boolean(caseItem.youtubeId || getPlayableUrl(caseItem));

              return (
                <article
                  key={caseItem.slug}
                  className="flex min-h-full flex-col overflow-hidden rounded-md border border-blue-100 bg-white shadow-sm transition hover:-translate-y-1 hover:border-blue-300 hover:shadow-xl hover:shadow-blue-950/10"
                >
                  <CaseMedia
                    src={caseItem.thumbnail}
                    alt={caseItem.title}
                    label={`${caseItem.country} video case`}
                    className="aspect-[16/10]"
                  />
                  <div className="flex flex-1 flex-col p-6">
                    <div className="flex items-center justify-between gap-3">
                      <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-[#0b68ff]">
                        {caseItem.region}
                      </span>
                      <span className="text-xs font-semibold text-slate-500">
                        {caseItem.countryCn}
                      </span>
                    </div>
                    <h2 className="mt-4 text-lg font-semibold leading-snug text-slate-950">
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
                    <button
                      type="button"
                      disabled={!canPlay}
                      onClick={() => handleCaseAction(caseItem)}
                      className={`mt-6 inline-flex h-11 items-center justify-center rounded-md px-4 text-sm font-semibold transition ${
                        canPlay
                          ? "bg-[#0b68ff] text-white hover:bg-[#0056df]"
                          : "cursor-not-allowed border border-slate-200 bg-slate-50 text-slate-500"
                      }`}
                    >
                      {getActionLabel(caseItem)}
                    </button>
                  </div>
                </article>
              );
            })}
          </div>

          {filteredCases.length === 0 ? (
            <div className="mt-10 rounded-md border border-dashed border-slate-300 bg-white p-10 text-center text-sm text-slate-500">
              暂无匹配的视频案例，请调整国家或搜索关键词。
            </div>
          ) : null}
        </div>
      </section>

      {activeVideo?.youtubeId ? (
        <div
          className="fixed inset-0 z-[80] bg-slate-950/80 p-4 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label={activeVideo.title}
        >
          <div className="mx-auto flex min-h-full max-w-5xl items-center justify-center">
            <div className="w-full overflow-hidden rounded-md border border-white/10 bg-slate-950 shadow-2xl">
              <div className="flex items-center justify-between gap-4 border-b border-white/10 px-5 py-4 text-white">
                <h2 className="text-base font-semibold">{activeVideo.title}</h2>
                <button
                  type="button"
                  onClick={() => setActiveVideo(null)}
                  className="h-9 rounded-md border border-white/20 px-3 text-sm font-semibold transition hover:bg-white/10"
                >
                  关闭
                </button>
              </div>
              <div className="aspect-video bg-black">
                <iframe
                  className="h-full w-full"
                  src={`https://www.youtube-nocookie.com/embed/${activeVideo.youtubeId}`}
                  title={activeVideo.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
