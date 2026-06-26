import type { Metadata } from "next";
import { IndustryImageCases } from "@/components/cases/IndustryImageCases";
import { HeroBanner } from "@/components/HeroBanner";
import { SectionHeader } from "@/components/SectionHeader";
import { industryImageCases } from "@/lib/case-data";

export const metadata: Metadata = {
  title: "行业图片案例 | 全球 GPS 项目案例",
  description:
    "按行业场景查看车辆、资产、工程机械、农牧场和油耗监测项目图片。",
};

export default function IndustryImageCasesPage() {
  return (
    <>
      <HeroBanner
        compact
        eyebrow="全球案例"
        title="行业图片案例"
        description="按行业场景展示车辆、资产、工程机械、农牧场和油耗监测项目图片。当前先搭建分类和图库弹窗，后续可直接替换缩略图和图库路径。"
        imageSrc="/images/hero/global-gps-network-bg.png"
        imageAlt="全球 GPS 图片案例背景"
        actions={[
          { label: "查看图片案例", href: "#image-cases" },
          { label: "提交案例线索", href: "/contact", variant: "secondary" },
        ]}
      />

      <section className="bg-white py-14">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeader
            eyebrow="Image Cases"
            title="按行业查看项目现场与应用图片"
            description="支持行业筛选，点击案例卡片即可打开图片图库弹窗。后续补充真实图片后，页面结构无需调整。"
          />
        </div>
      </section>

      <IndustryImageCases cases={industryImageCases} />
    </>
  );
}
