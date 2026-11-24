import { IndustryImageCases } from "@/components/cases/IndustryImageCases";
import { HeroBanner } from "@/components/HeroBanner";
import { SectionHeader } from "@/components/SectionHeader";
import { industryImageCases } from "@/lib/case-data";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  path: "/cases/images",
  title: "GPS 定位应用图片案例",
  description:
    "通过图片查看 GPS 定位终端与平台在物流车队、租赁车辆、企业车辆和工程机械中的应用。",
  image: "/images/cases/images/logistics-fleet.jpg",
});

export default function IndustryImageCasesPage() {
  return (
    <>
      <HeroBanner
        compact
        eyebrow="全球案例"
        title="行业图片案例"
        description="通过图片了解物流车队、租赁车辆、企业车辆和工程机械的 GPS 定位应用。"
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
            title="按行业查看 GPS 定位应用图片"
            description="选择行业后，打开图库查看设备安装和平台应用场景。"
          />
        </div>
      </section>

      <IndustryImageCases cases={industryImageCases} />
    </>
  );
}
