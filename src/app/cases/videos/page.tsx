import type { Metadata } from "next";
import { CountryVideoCases } from "@/components/cases/CountryVideoCases";
import { HeroBanner } from "@/components/HeroBanner";
import { SectionHeader } from "@/components/SectionHeader";
import { countryVideoCases } from "@/lib/case-data";

export const metadata: Metadata = {
  title: "各国视频案例 | 全球 GPS 项目案例",
  description:
    "按国家和地区查看 GPS 项目视频、安装现场、平台演示和客户应用案例。",
};

export default function CountryVideoCasesPage() {
  return (
    <>
      <HeroBanner
        compact
        eyebrow="全球案例"
        title="各国视频案例"
        description="按国家和地区整理 GPS 项目视频、安装现场、平台演示和客户应用案例。当前先搭建结构，后续可直接补充 YouTube ID 或普通视频链接。"
        imageSrc="/images/hero/global-gps-network-bg.png"
        imageAlt="全球 GPS 案例视频背景"
        actions={[
          { label: "查看视频案例", href: "#video-cases" },
          { label: "提交案例线索", href: "/contact", variant: "secondary" },
        ]}
      />

      <section className="bg-white py-14">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeader
            eyebrow="Video Cases"
            title="按国家快速查找项目视频"
            description="支持搜索国家、地区、行业和场景。视频数据有 YouTube ID 时弹窗播放，有普通链接时打开链接，暂未补链接时显示视频待上传。"
          />
        </div>
      </section>

      <CountryVideoCases cases={countryVideoCases} />
    </>
  );
}
