import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CountryVideoCases } from "@/components/cases/CountryVideoCases";
import { countryVideoDestinations } from "@/lib/case-data";

type PageProps = { params: Promise<{ country: string }> };

function getDestination(slug: string) {
  return countryVideoDestinations.find(item => item.path === `/cases/videos/${slug}`);
}

export const dynamicParams = false;

export function generateStaticParams() {
  return countryVideoDestinations.map(item => ({ country: item.path.split("/").at(-1)! }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const destination = getDestination((await params).country);
  if (!destination) return {};
  return {
    title: `${destination.countryCn} GPS 视频案例 | ${destination.country}`,
    description: `观看${destination.countryCn}（${destination.country}）的英文 GPS 平台与手机端操作演示。`,
  };
}

export default async function CountryVideoPage({ params }: PageProps) {
  const destination = getDestination((await params).country);
  if (!destination) notFound();

  return <>
    <section className="bg-[#061936] text-white">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:py-16">
        <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-2 text-sm text-blue-100">
          <Link href="/" className="hover:text-white">首页</Link><span>/</span>
          <Link href="/cases/videos" className="hover:text-white">各国视频案例</Link><span>/</span>
          <span>{destination.countryCn}</span>
        </nav>
        <p className="mt-8 text-sm font-semibold text-[#79d7ff]">{destination.region}</p>
        <h1 className="mt-4 text-3xl font-semibold leading-tight md:text-5xl"><span>{destination.countryCn}</span><span> GPS 视频案例</span></h1>
        <p className="mt-4 text-lg text-blue-100">{destination.country}</p>
        <p className="mt-5 max-w-2xl text-base leading-8 text-slate-200">观看该国家或地区的英文 GPS 平台与手机端操作演示。</p>
        <div className="mt-7 flex flex-wrap gap-3">
          <a href="#video-cases" className="inline-flex min-h-12 items-center justify-center rounded-md bg-[#0b68ff] px-6 text-sm font-semibold hover:bg-[#0056df]">查看视频案例</a>
          <Link href="/cases/videos#video-cases" className="inline-flex min-h-12 items-center justify-center rounded-md border border-white/30 px-6 text-sm font-semibold hover:bg-white/10">浏览其他国家</Link>
        </div>
      </div>
    </section>
    <CountryVideoCases cases={destination.cases} countryPage />
  </>;
}
