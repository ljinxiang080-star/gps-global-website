import type { Metadata } from "next";
import { CountryVideoCases } from "@/components/cases/CountryVideoCases";
import { HeroBanner } from "@/components/HeroBanner";
import { SectionHeader } from "@/components/SectionHeader";
import { countryVideoCases } from "@/lib/case-data";

export const metadata: Metadata = {
  title: "各国视频案例 | 全球 GPS 项目案例",
  description:
    "按国家、地区和跨境路线观看 GPS 平台与手机端的英文操作演示。",
};

export default function CountryVideoCasesPage() {
  return (
    <>
      <HeroBanner
        compact
        eyebrow="全球案例"
        title="各国视频案例"
        description="按国家、地区和跨境路线，观看 GPS 平台与手机端的实际操作演示，了解不同市场的位置管理应用。"
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
            description="使用中文或英文搜索目标市场，查看对应的英文讲解视频。你也可以前往 SAIFUYA YouTube 频道观看更多内容。"
          />
        </div>
      </section>

      <CountryVideoCases cases={countryVideoCases} />
    </>
  );
}
