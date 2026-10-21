"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import type { CountryVideoCase } from "@/lib/case-data";
import { CaseMedia } from "@/components/cases/CaseMedia";

const PAGE_SIZE = 12;
const watchUrl = (item: CountryVideoCase) => item.youtubeId
  ? `https://www.youtube.com/watch?v=${item.youtubeId}`
  : item.videoUrl || item.shortsUrl || item.tiktokUrl || "";
const durationLabel = (seconds: number) => `${Math.floor(Math.ceil(seconds) / 60)}:${String(Math.ceil(seconds) % 60).padStart(2, "0")}`;
const filterClass = "mt-2 h-12 w-full rounded-md border border-slate-200 bg-white px-4 text-sm font-normal outline-none focus:border-[#0b68ff] focus:ring-4 focus:ring-blue-100";
const buttonClass = "inline-flex min-h-11 items-center justify-center rounded-md px-4 text-sm font-semibold transition";

export function CountryVideoCases({ cases }: { cases: CountryVideoCase[] }) {
  const [query, setQuery] = useState("");
  const [region, setRegion] = useState("");
  const [country, setCountry] = useState("");
  const [page, setPage] = useState(1);
  const [activeVideo, setActiveVideo] = useState<CountryVideoCase | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const countries = useMemo(() => Array.from(new Set(cases.map(item => item.countryCn))).sort((a, b) => a.localeCompare(b, "zh-CN")), [cases]);
  const regions = useMemo(() => Array.from(new Set(cases.map(item => item.region))), [cases]);
  const filtered = useMemo(() => {
    const search = query.trim().toLowerCase();
    return cases.filter(item => (!region || item.region === region) && (!country || item.countryCn === country) &&
      [item.country, item.countryCn, item.region, item.title, item.summary, item.scenario, ...item.tags].join(" ").toLowerCase().includes(search));
  }, [cases, query, region, country]);
  const pageCount = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const currentPage = Math.min(page, pageCount);
  const visibleCases = filtered.slice((currentPage - 1) * PAGE_SIZE, currentPage * PAGE_SIZE);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!activeVideo || !dialog) return;
    dialog.showModal();
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { dialog.close(); document.body.style.overflow = previous; };
  }, [activeVideo]);

  function changePage(nextPage: number) {
    setPage(nextPage);
    document.getElementById("video-results")?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return <>
    <section id="video-cases" className="bg-slate-50 py-12 lg:py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="rounded-md border border-blue-100 bg-white p-5 shadow-sm lg:p-6">
          <div className="grid gap-4 md:grid-cols-[1fr_280px]">
            <label className="block text-sm font-semibold text-slate-900">搜索国家、地区或路线
              <input type="search" value={query} onChange={event => { setQuery(event.target.value); setPage(1); }} placeholder="例如：马来西亚 / Malaysia / 跨境" className={filterClass} />
            </label>
            <label className="block text-sm font-semibold text-slate-900">国家与地区
              <select value={country} onChange={event => { setCountry(event.target.value); setRegion(""); setPage(1); }} className={filterClass}>
                <option value="">全部国家与地区</option>
                {countries.map(name => <option key={name} value={name}>{name}</option>)}
              </select>
            </label>
          </div>
          <div className="mt-5 flex flex-wrap gap-2" aria-label="按地区筛选">
            {["", ...regions].map(name => <button key={name} type="button" aria-pressed={region === name} onClick={() => { setRegion(name); setCountry(""); setPage(1); }} className={`min-h-10 rounded-full border px-4 text-sm font-semibold transition ${region === name ? "border-[#0b68ff] bg-[#0b68ff] text-white" : "border-blue-100 bg-blue-50 text-[#0b68ff] hover:border-[#0b68ff]"}`}>{name || "全部地区"}</button>)}
          </div>
        </div>
        <div id="video-results" className="mt-8 flex scroll-mt-28 flex-wrap items-center justify-between gap-3">
          <p className="text-sm text-slate-600" aria-live="polite">共 {filtered.length} 个视频案例</p>
          <a href="https://www.youtube.com/@saifuya_gps" target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-[#0b68ff] hover:underline">访问 YouTube 频道 ↗</a>
        </div>
        <div className="mt-5 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {visibleCases.map(item => {
            const canEmbed = Boolean(item.youtubeId && item.youtubeEmbedAllowed !== false);
            const url = watchUrl(item);
            return <article key={item.slug} className="flex flex-col overflow-hidden rounded-md border border-blue-100 bg-white shadow-sm transition hover:border-blue-300 hover:shadow-lg">
              <div className="relative">
                <CaseMedia src={item.thumbnail} alt={item.title} label={`${item.country} GPS video`} className="aspect-video !rounded-none !border-0" />
                {item.durationSeconds ? <span className="absolute bottom-2 right-2 rounded bg-slate-950/85 px-2 py-1 text-xs font-semibold text-white">{durationLabel(item.durationSeconds)}</span> : null}
              </div>
              <div className="flex flex-1 flex-col p-5">
                <div className="flex flex-wrap items-center gap-2 text-xs font-semibold"><span className="rounded-full bg-blue-50 px-3 py-1 text-[#0b68ff]">{item.region}</span><span className="text-slate-500">英文讲解</span></div>
                <h2 className="mt-4 text-lg font-semibold leading-snug text-slate-950">{item.title}</h2>
                <p className="mt-2 text-xs leading-5 text-slate-500">{item.country}</p>
                <p className="mt-3 flex-1 text-sm leading-7 text-slate-600">{item.summary}</p>
                {canEmbed ? <button type="button" onClick={() => setActiveVideo(item)} className={`${buttonClass} mt-5 bg-[#0b68ff] text-white hover:bg-[#0056df]`}>播放视频</button>
                  : url ? <a href={url} target="_blank" rel="noopener noreferrer" className={`${buttonClass} mt-5 border border-blue-200 text-[#0b68ff] hover:bg-blue-50`}>前往 YouTube 观看 ↗</a>
                  : <span className="mt-5 text-sm text-slate-500">视频整理中</span>}
              </div>
            </article>;
          })}
        </div>
        {!filtered.length ? <div className="mt-6 rounded-md border border-dashed border-slate-300 bg-white p-10 text-center text-sm text-slate-500">暂无匹配的视频案例，请调整国家或搜索关键词。</div> : null}
        {pageCount > 1 ? <nav aria-label="视频案例分页" className="mt-10 flex items-center justify-center gap-4 text-sm">
          <button type="button" disabled={currentPage === 1} onClick={() => changePage(currentPage - 1)} className={`${buttonClass} border border-blue-100 bg-white text-[#0b68ff] disabled:cursor-not-allowed disabled:opacity-40`}>上一页</button>
          <span className="text-slate-600">{currentPage} / {pageCount}</span>
          <button type="button" disabled={currentPage === pageCount} onClick={() => changePage(currentPage + 1)} className={`${buttonClass} border border-blue-100 bg-white text-[#0b68ff] disabled:cursor-not-allowed disabled:opacity-40`}>下一页</button>
        </nav> : null}
      </div>
    </section>
    <dialog ref={dialogRef} onClose={() => setActiveVideo(null)} onClick={event => { if (event.target === event.currentTarget) setActiveVideo(null); }} aria-label={activeVideo?.title || "视频案例"} className="fixed inset-0 m-auto max-h-[90dvh] w-[calc(100%_-_2rem)] max-w-4xl overflow-auto rounded-md border border-white/10 bg-slate-950 p-0 text-white shadow-2xl backdrop:bg-slate-950/80">
      {activeVideo ? <>
        <div className="flex items-center justify-between gap-4 border-b border-white/10 px-5 py-4"><h2 className="text-base font-semibold">{activeVideo.title}</h2><button type="button" autoFocus onClick={() => setActiveVideo(null)} className={`${buttonClass} shrink-0 border border-white/20 hover:bg-white/10`}>关闭</button></div>
        <div className="aspect-video bg-black"><iframe className="h-full w-full" src={`https://www.youtube-nocookie.com/embed/${activeVideo.youtubeId}?rel=0`} title={activeVideo.title} referrerPolicy="strict-origin-when-cross-origin" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen /></div>
        <div className="flex flex-wrap items-center justify-between gap-3 px-5 py-4 text-sm text-slate-300"><p>也可以在 YouTube 打开视频观看。</p><a href={watchUrl(activeVideo)} target="_blank" rel="noopener noreferrer" className="font-semibold text-cyan-300 hover:underline">在 YouTube 观看 ↗</a></div>
      </> : null}
    </dialog>
  </>;
}
