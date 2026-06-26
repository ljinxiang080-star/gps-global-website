import Image from "next/image";
import { HeroBanner } from "@/components/HeroBanner";
import { SectionHeader } from "@/components/SectionHeader";

const strengthStats = [
  {
    value: "14+",
    label: "年行业经验",
    description: "Years of Experience",
  },
  {
    value: "50+",
    label: "研发与技术团队",
    description: "R&D & Technical Team",
  },
  {
    value: "120+",
    label: "产品型号",
    description: "Product Models",
  },
  {
    value: "500,000+",
    label: "台年产能",
    description: "Annual Production Capacity",
  },
  {
    value: "100+",
    label: "国家和地区客户网络",
    description: "Global Customer Network",
  },
];

const servicePillars = [
  "一站式服务",
  "多产品线",
  "支持定制",
  "全球合作",
];

const profileCards = [
  {
    title: "主营业务",
    description: "GPS 定位终端、IoT 设备、配件与平台服务。",
  },
  {
    title: "服务能力",
    description: "OEM/ODM、软硬件开发、平台对接和售后支持。",
  },
  {
    title: "应用领域",
    description: "车辆管理、车队运营、资产追踪、宠物与牲畜管理。",
  },
  {
    title: "市场方向",
    description: "服务全球市场、国际客户与跨境合作伙伴。",
  },
];

const companyIntro =
  "深圳市通安星科技有限公司是一家专注于 GPS 定位器与物联网终端产品的科技企业，集研发、生产、销售与服务于一体。主要产品包括车载 GPS 定位器、OBD 定位器、无线定位器、太阳能定位器、宠物与牲畜定位器及相关配件。";

const companySupport =
  "同时提供 OEM/ODM 定制、软硬件开发、平台对接和售后支持，致力于为全球客户提供稳定、实用、智能的定位产品与行业解决方案。";

export default function AboutPage() {
  return (
    <>
      <HeroBanner
        compact
        eyebrow="ABOUT SAIFUYA"
        title="深圳市通安星科技有限公司"
        description="塞弗亚 SAIFUYA 专业国际 GPS 定位器与物联网终端供应商，面向全球客户提供稳定、实用、智能的定位产品与行业解决方案。"
        imageSrc="/images/about/saifuya-cover.png"
        imageAlt="深圳市通安星科技有限公司品牌宣传图"
        actions={[
          { label: "企业实力", href: "#strength" },
          { label: "公司简介", href: "#profile", variant: "secondary" },
        ]}
      />

      <section id="strength" className="bg-white py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 lg:grid-cols-[0.88fr_1.12fr] lg:items-center">
            <div>
              <SectionHeader
                eyebrow="企业实力"
                title="14 年行业积累，覆盖研发、制造、产品与全球客户网络"
                description="结合宣传册中的制造能力、产品展示、车辆与牲畜应用、OEM/ODM 支持，呈现塞弗亚面向 B2B 客户的稳定交付能力。"
              />

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {strengthStats.map((item) => (
                  <div
                    key={item.label}
                    className="rounded-md border border-blue-100 bg-blue-50/60 p-5"
                  >
                    <p className="text-3xl font-semibold text-[#0b68ff]">
                      {item.value}
                    </p>
                    <h3 className="mt-2 text-base font-semibold text-slate-950">
                      {item.label}
                    </h3>
                    <p className="mt-1 text-xs uppercase tracking-[0.12em] text-slate-500">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="overflow-hidden rounded-md border border-blue-100 bg-slate-50 shadow-xl shadow-blue-950/10">
              <Image
                src="/images/about/company-strength.png"
                alt="塞弗亚企业实力宣传图"
                width={1920}
                height={1080}
                priority
                sizes="(min-width: 1024px) 56vw, 100vw"
                className="aspect-[16/9] w-full object-cover"
              />
            </div>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-4">
            {servicePillars.map((item) => (
              <div
                key={item}
                className="rounded-md border border-slate-200 bg-white p-5 text-center shadow-sm"
              >
                <p className="text-sm font-semibold text-[#0b68ff]">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="profile" className="bg-slate-50 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 lg:grid-cols-[1.04fr_0.96fr] lg:items-start">
            <div>
              <SectionHeader
                eyebrow="公司简介"
                title="专注 GPS 定位器与物联网终端的一体化供应商"
                description="围绕研发、制造、销售与服务，提供 GPS 终端、IoT 设备、配件、平台服务和定制化集成支持。"
              />

              <div className="mt-8 rounded-md border border-blue-100 bg-white p-7 shadow-sm">
                <p className="text-sm leading-8 text-slate-600">
                  {companyIntro}
                </p>
                <p className="mt-4 text-sm leading-8 text-slate-600">
                  {companySupport}
                </p>
              </div>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {profileCards.map((card) => (
                  <article
                    key={card.title}
                    className="rounded-md border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg hover:shadow-blue-950/10"
                  >
                    <h3 className="text-lg font-semibold text-slate-950">
                      {card.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-slate-600">
                      {card.description}
                    </p>
                  </article>
                ))}
              </div>
            </div>

            <div className="lg:sticky lg:top-28">
              <div className="overflow-hidden rounded-md border border-blue-100 bg-white shadow-xl shadow-blue-950/10">
                <Image
                  src="/images/about/company-profile.png"
                  alt="塞弗亚公司简介宣传图"
                  width={1920}
                  height={1080}
                  sizes="(min-width: 1024px) 48vw, 100vw"
                  className="aspect-[16/9] w-full object-cover"
                />
              </div>
              <div className="mt-5 grid grid-cols-2 gap-3">
                {["专业方案", "全球服务", "稳定品质", "定制支持"].map(
                  (item) => (
                    <div
                      key={item}
                      className="rounded-md border border-blue-100 bg-white px-4 py-3 text-sm font-semibold text-[#0b68ff] shadow-sm"
                    >
                      {item}
                    </div>
                  ),
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
