import Link from "next/link";
import Image from "next/image";
import { HeroBanner } from "@/components/HeroBanner";
import { SectionHeader } from "@/components/SectionHeader";
import { solutions, type SolutionVisual } from "@/lib/site-data";

const solutionCovers: Record<SolutionVisual, { src: string; alt: string; position: string }> = {
  fleet: { src: "/images/solutions/fleet-logistics.webp", alt: "物流货车公路运输场景", position: "50% 66%" },
  asset: { src: "/images/solutions/asset-container.webp", alt: "集装箱堆场装卸作业场景", position: "50% 50%" },
  machinery: { src: "/images/solutions/machinery-rental.webp", alt: "施工现场的挖掘机设备", position: "50% 70%" },
  fuel: { src: "/images/solutions/fuel-monitoring.webp", alt: "技术人员巡检货车油箱", position: "50% 50%" },
  livestock: { src: "/images/solutions/livestock-farm.webp", alt: "牧场中的牛羊放牧场景", position: "48% 50%" },
  integration: { src: "/images/solutions/platform-integration.webp", alt: "GPS终端、电脑与手机协同调试场景", position: "50% 50%" },
};

const workflow = [
  {
    title: "需求确认",
    description: "明确行业场景、设备类型、安装方式、平台功能和数据对接需求。",
  },
  {
    title: "硬件选型",
    description: "根据车辆、资产、油耗、牲畜或工程机械场景匹配合适终端。",
  },
  {
    title: "平台配置",
    description: "配置设备分组、电子围栏、报警规则、报表字段和账号权限。",
  },
  {
    title: "部署集成",
    description: "支持批量上线、API 对接、移动端使用和后续运营支持。",
  },
];

export default function SolutionsPage() {
  return (
    <>
      <HeroBanner
        compact
        eyebrow="Solutions"
        title="行业场景化 GPS 定位与远程管理方案"
        description="围绕车队物流、资产集装箱、工程机械、油耗监测、牲畜农牧场和 OEM/ODM 集成需求，提供硬件终端、云端平台、移动端 APP 与 API 接口的一体化方案。"
        imageSrc="/images/hero/global-gps-network-bg.png"
        imageAlt="全球 GPS 定位网络背景"
        actions={[
          { label: "查看方案", href: "#solution-list" },
          { label: "获取报价", href: "/contact", variant: "secondary" },
        ]}
      />

      <section id="solution-list" className="bg-white py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeader
            eyebrow="应用场景"
            title="覆盖车辆、资产、设备、油耗和农牧场的解决方案"
            description="每个方案都可以根据终端型号、平台功能、数据接口和客户品牌需求进行组合配置。"
          />

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {solutions.map((solution, index) => (
              <article
                key={solution.title}
                className="overflow-hidden rounded-md border border-blue-100 bg-white shadow-sm transition hover:-translate-y-1 hover:border-blue-300 hover:shadow-xl hover:shadow-blue-950/10"
              >
                <Link href={solution.href} aria-label={solution.title} className="group relative block aspect-[4/3] overflow-hidden bg-slate-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0b68ff]">
                  <Image
                    src={solutionCovers[solution.visual].src}
                    alt={solutionCovers[solution.visual].alt}
                    fill
                    sizes="(min-width: 1280px) 395px, (min-width: 1024px) calc((100vw - 96px) / 3), calc(100vw - 48px)"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    style={{ objectPosition: solutionCovers[solution.visual].position }}
                  />
                  <span className="absolute bottom-3 right-3 rounded bg-slate-950/55 px-2 py-1 text-[10px] font-medium tracking-wide text-white">场景示意</span>
                </Link>
                <div className="p-6">
                  <span className="text-sm font-semibold text-[#0b68ff]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h2 className="mt-3 text-xl font-semibold text-slate-950">
                    {solution.title}
                  </h2>
                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {solution.summary}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {solution.tags.map((tag) => (
                      <span
                        key={`${solution.title}-${tag}`}
                        className="rounded-full border border-blue-100 bg-blue-50 px-3 py-1 text-xs font-semibold text-[#0b68ff]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Link
                    href={solution.href}
                    className="mt-6 inline-flex text-sm font-semibold text-[#0b68ff] transition hover:text-[#0056df]"
                  >
                    查看方案
                    <span aria-hidden="true" className="ml-2">
                      →
                    </span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
            <SectionHeader
              eyebrow="交付流程"
              title="从需求确认到平台上线的标准化交付"
              description="适合渠道商、品牌商、集成商和终端客户快速评估方案可行性，并按项目阶段推进部署。"
            />

            <div className="grid gap-5 md:grid-cols-2">
              {workflow.map((step, index) => (
                <article
                  key={step.title}
                  className="rounded-md border border-slate-200 bg-white p-6 shadow-sm"
                >
                  <span className="text-sm font-semibold text-[#0b68ff]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h2 className="mt-4 text-xl font-semibold text-slate-950">
                    {step.title}
                  </h2>
                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {step.description}
                  </p>
                </article>
              ))}
            </div>
          </div>

          <div className="mt-12 rounded-md bg-[#061936] p-8 text-white md:flex md:items-center md:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#79d7ff]">
                Inquiry
              </p>
              <h2 className="mt-3 text-2xl font-semibold">
                需要按行业定制 GPS 方案？
              </h2>
            </div>
            <Link
              href="/contact"
              className="mt-6 inline-flex h-12 items-center justify-center rounded-md bg-white px-6 text-sm font-semibold text-[#061936] transition hover:bg-blue-50 md:mt-0"
            >
              联系询盘
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
