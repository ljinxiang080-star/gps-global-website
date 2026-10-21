import Image from "next/image";
import Link from "next/link";
import { FeatureSection } from "@/components/FeatureSection";
import { HeroBanner } from "@/components/HeroBanner";
import { LanguageMarketStrip } from "@/components/LanguageMarketStrip";
import { ProductCard } from "@/components/ProductCard";
import { SectionHeader } from "@/components/SectionHeader";
import { SolutionScene } from "@/components/SolutionScene";
import { featureItems, products, solutions } from "@/lib/site-data";

const solutionStats = [
  { value: "6", label: "行业场景" },
  { value: "4", label: "接入端" },
  { value: "API", label: "数据接口" },
  { value: "OEM", label: "定制支持" },
];

const solutionHighlights = [
  "硬件终端",
  "云端平台",
  "移动端 APP",
  "API 对接",
  "报警规则",
  "行业交付",
];

const solutionMatrixDescription =
  "根据行业场景选择定位终端，再组合地图监控、轨迹回放、电子围栏、油耗报表和 API 对接能力，形成可落地的项目方案。";

const industryEntries = [
  {
    title: "车队管理",
    subtitle: "Fleet Management",
    href: "/solutions/fleet-logistics",
    summary: "统一查看车辆位置、在线状态、路线和报警，提升调度与安全管理效率。",
    image: "/images/applications/realistic-enterprise-vehicles.png",
    imageAlt: "企业车辆整齐停放的车队管理场景",
  },
  {
    title: "物流运输",
    subtitle: "Logistics",
    href: "/solutions/fleet-logistics",
    summary: "面向干线运输、城市配送和跨区域物流，掌握在途位置、停留和轨迹。",
    image: "/images/applications/realistic-logistics-fleet.png",
    imageAlt: "物流货车在公路上运输货物的场景",
  },
  {
    title: "租赁车辆",
    subtitle: "Rental Vehicles",
    href: "/solutions/machinery-rental",
    summary: "围绕租赁车辆位置、越界、断电和异常移动进行风险控制。",
    image: "/images/applications/realistic-rental-vehicles.png",
    imageAlt: "多辆厢式车辆集中停放的租赁车队场景",
  },
  {
    title: "工程机械",
    subtitle: "Construction",
    href: "/solutions/machinery-rental",
    summary: "管理挖掘机、装载机和租赁设备的位置、工时、状态和异常移动。",
    image: "/images/applications/realistic-engineering-vehicles.png",
    imageAlt: "建筑工地中的挖掘机和工程机械",
  },
  {
    title: "资产追踪",
    subtitle: "Asset Tracking",
    href: "/solutions/asset-container",
    summary: "适合集装箱、工具、周转设备和高价值移动资产的跨区域追踪。",
    image: "/images/products/categories/asset-container-location.jpg",
    imageAlt: "仓储货架与定位终端结合的资产追踪场景示意",
  },
  {
    title: "油耗管理",
    subtitle: "Fuel Monitoring",
    href: "/solutions/fuel-abnormal",
    summary: "结合油位传感器和 GPS 数据识别异常耗油、疑似偷油和成本风险。",
    image: "/images/products/categories/fuel-monitoring-truck.jpg",
    imageAlt: "货运车辆与油位传感器结合的油耗监测场景示意",
  },
  {
    title: "农牧场",
    subtitle: "Livestock Tracking",
    href: "/solutions/livestock-farm",
    summary: "支持牛羊定位、活动范围监控、离群提醒和放牧区域管理。",
    image: "/images/products/categories/smart-grazing-livestock.jpg",
    imageAlt: "牛只与定位设备结合的农牧场追踪场景示意",
  },
] as const;

function IndustryEntrySection() {
  return (
    <section className="bg-slate-50 py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeader
            eyebrow="行业入口"
            title="先选择行业场景，再匹配终端与平台能力"
            description="从车队、物流、租赁、工程机械、资产、油耗到农牧场，把客户的业务问题先归类，再组合 GPS 终端、18GPS 平台和数据接口。"
          />
          <Link
            href="/solutions"
            className="inline-flex h-11 items-center justify-center rounded-md border border-blue-200 bg-white px-5 text-sm font-semibold text-[#0b68ff] transition hover:border-[#0b68ff] hover:bg-blue-50"
          >
            查看全部行业方案
          </Link>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {industryEntries.map((entry) => (
            <Link
              key={entry.title}
              href={entry.href}
              className="group rounded-md border border-blue-100 bg-white p-4 shadow-sm transition hover:-translate-y-1 hover:border-blue-300 hover:shadow-xl hover:shadow-blue-950/10"
            >
              <div className="relative h-36 overflow-hidden rounded-md border border-slate-200 bg-slate-100">
                <Image
                  src={entry.image}
                  alt={entry.imageAlt}
                  fill
                  sizes="(min-width: 1280px) 280px, (min-width: 768px) 50vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-2 pt-5">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#0b68ff]">
                  {entry.subtitle}
                </p>
                <h3 className="mt-2 text-xl font-semibold text-slate-950">
                  {entry.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {entry.summary}
                </p>
                <span className="mt-5 inline-flex items-center text-sm font-semibold text-[#0b68ff]">
                  进入方案
                  <span
                    aria-hidden="true"
                    className="ml-2 transition group-hover:translate-x-1"
                  >
                    →
                  </span>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <HeroBanner
        eyebrow="B2B GPS Tracking Solution Provider"
        title="让每一辆车、每一台设备、每一份资产都实时可见"
        description="面向车队、物流、租赁、工程机械、资产和农牧场，提供车辆/设备/资产可视化管理、轨迹与报表复盘、风控报警、油耗监测和数据平台接入能力。"
        imageSrc="/images/hero/global-gps-network-bg.png"
        actions={[
          { label: "获取方案报价", href: "#contact" },
          { label: "查看产品分类", href: "#products", variant: "secondary" },
        ]}
      />

      <LanguageMarketStrip />

      <IndustryEntrySection />

      <section id="products" className="bg-white py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeader
            eyebrow="设备分类"
            title="按安装方式与管理对象选择 GPS 终端"
            description="产品分类作为第二层选型入口，用于匹配有线安装、无线部署、资产、OBD、油耗、两轮车、太阳能、人员和 SIM 联网等项目需求。"
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
            {products.map((product) => (
              <ProductCard
                key={product.slug}
                href={`/products/${product.slug}`}
                imageSrc={product.image}
                icon={product.icon}
                eyebrow={product.category}
                name={product.name}
                description={product.summary}
                scenarioTags={product.scenarioTags}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-10 lg:grid-cols-[minmax(320px,0.9fr)_minmax(0,1.45fr)] lg:items-start">
            <div className="lg:sticky lg:top-28">
              <SectionHeader
                eyebrow="解决方案"
                title="面向不同行业场景的 GPS 定位与远程管理方案"
                description="从车辆、资产、油耗到工程机械和农牧场，提供硬件终端、云端平台、移动端 APP 与 API 接口的一体化定位管理能力。"
              />

              <div className="relative isolate mt-8 overflow-hidden rounded-md bg-[#061936] p-6 text-white shadow-xl shadow-blue-950/20">
                <div
                  className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_18%_15%,rgba(11,104,255,0.42),transparent_30%),radial-gradient(circle_at_92%_20%,rgba(121,215,255,0.18),transparent_32%)]"
                  aria-hidden="true"
                />
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#79d7ff]">
                  Solution Matrix
                </p>
                <h3 className="mt-3 text-2xl font-semibold">
                  终端 + 平台 + 数据接口组合交付
                </h3>
                <p className="mt-4 text-sm leading-7 text-slate-300">
                  {solutionMatrixDescription}
                </p>

                <div className="mt-6 grid grid-cols-2 gap-3">
                  {solutionStats.map((item) => (
                    <div
                      key={item.label}
                      className="rounded-md border border-cyan-300/15 bg-white/10 p-4"
                    >
                      <p className="text-2xl font-semibold text-white">
                        {item.value}
                      </p>
                      <p className="mt-1 text-xs font-semibold text-slate-300">
                        {item.label}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-6 flex flex-wrap gap-2">
                  {solutionHighlights.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1 text-xs font-semibold text-[#79d7ff]"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <div className="mt-7 flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
                  <Link
                    href="/solutions"
                    className="inline-flex h-11 items-center justify-center rounded-md bg-white px-5 text-sm font-semibold text-[#061936] transition hover:bg-blue-50"
                  >
                    查看全部解决方案
                  </Link>
                  <Link
                    href="/contact"
                    className="inline-flex h-11 items-center justify-center rounded-md border border-white/25 px-5 text-sm font-semibold text-white transition hover:bg-white/10"
                  >
                    联系方案顾问
                  </Link>
                </div>
              </div>
            </div>

            <div className="grid auto-rows-fr gap-5 md:grid-cols-2">
              {solutions.map((solution, index) => (
                <Link
                  href={solution.href}
                  key={solution.title}
                  className="group flex min-h-[318px] flex-col rounded-md border border-blue-100 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:border-blue-300 hover:shadow-xl hover:shadow-blue-950/10"
                >
                  <div className="grid flex-1 gap-4 sm:grid-cols-[minmax(0,1fr)_128px] sm:items-start">
                    <div className="min-w-0">
                      <span className="text-sm font-semibold text-[#0b68ff]">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <h3 className="mt-2 min-h-[3.5rem] text-xl font-semibold leading-7 text-slate-950">
                        {solution.title}
                      </h3>

                      <p className="mt-4 text-sm leading-7 text-slate-600">
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
                    </div>

                    <SolutionScene
                      visual={solution.visual}
                      className="order-first h-36 sm:order-none sm:h-32"
                    />
                  </div>

                  <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#0b68ff]">
                    查看方案
                    <svg
                      aria-hidden="true"
                      className="h-4 w-4 transition group-hover:translate-x-1"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 12h14M13 5l7 7-7 7" />
                    </svg>
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <FeatureSection
        eyebrow="平台能力"
        title="从硬件终端到云端平台的一体化追踪能力"
        description="围绕定位、轨迹、报警、油耗、设备状态和数据接口，帮助企业把分散的车辆与资产变成可视、可控、可追溯的运营网络。"
        items={featureItems}
      />

      <section id="contact" className="bg-[#061936] py-16 text-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#79d7ff]">
              Contact
            </p>
            <h2 className="mt-3 text-3xl font-semibold">
              让车辆、设备和资产接入 18GPS 管理体系
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-300">
              说明你的行业场景、设备数量和平台接入需求，我们会按终端、平台、报警规则和数据接口给出项目方案。
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex h-12 items-center justify-center rounded-md bg-white px-6 text-sm font-semibold text-[#061936] transition hover:bg-blue-50"
            >
              获取方案报价
            </Link>
            <Link
              href="/contact"
              className="inline-flex h-12 items-center justify-center rounded-md border border-white/25 px-6 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              联系技术顾问
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
