import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  products,
  type Product,
  type ProductModel,
  type ProductModelDetail,
} from "@/lib/site-data";

type PageParams = Promise<{
  slug: string;
  modelSlug: string;
}>;

type ModelContext = {
  product: Product;
  model: ProductModel;
};

const capabilityMatrix = [
  "实时定位",
  "轨迹回放",
  "电子围栏",
  "异常报警",
  "平台接入",
  "API 对接",
];

const anchorItems = [
  { label: "产品特性", href: "#features" },
  { label: "应用领域", href: "#applications" },
  { label: "产品概述", href: "#overview" },
  { label: "技术规格", href: "#specifications" },
  { label: "相关产品", href: "#related-products" },
  { label: "获取报价", href: "#inquiry" },
];

const defaultApplicationImageByCategory: Record<string, string> = {
  Wired: "/images/applications/fleet-logistics.svg",
  Asset: "/images/applications/container-yard.svg",
  OBD: "/images/applications/enterprise-vehicle.svg",
  Grazing: "/images/applications/livestock-pasture.svg",
  Fuel: "/images/applications/fuel-monitoring.svg",
  Machinery: "/images/applications/construction-machinery.svg",
  "Two-Wheeler": "/images/products/models/k6-bicycle-tail-light-tracker.png",
  Wireless: "/images/applications/fleet-logistics.svg",
  Bluetooth: "/images/applications/tool-equipment.svg",
  Solar: "/images/applications/container-yard.svg",
  Pet: "/images/applications/pet-outdoor.svg",
  Personal: "/images/applications/personal-safety.svg",
  "SIM Card": "/images/applications/sim-connectivity.svg",
};

const applicationImageRules = [
  {
    keywords: ["租赁车辆"],
    image: "/images/applications/realistic-rental-vehicles.png",
  },
  {
    keywords: ["企业车辆", "企业车队"],
    image: "/images/applications/realistic-enterprise-vehicles.png",
  },
  {
    keywords: ["工程车辆", "工程机械"],
    image: "/images/applications/realistic-engineering-vehicles.png",
  },
  {
    keywords: ["自行车", "山地车", "电动车", "两轮车", "骑行"],
    image: "/images/products/models/k6-bicycle-tail-light-tracker.png",
  },
  {
    keywords: ["集装箱", "货柜", "资产", "高价值"],
    image: "/images/applications/container-yard.svg",
  },
  {
    keywords: ["工具", "周转"],
    image: "/images/applications/tool-equipment.svg",
  },
  {
    keywords: ["油", "油耗", "油位", "偷油", "燃油"],
    image: "/images/applications/fuel-monitoring.svg",
  },
  {
    keywords: ["牲畜", "牛", "羊", "牧场", "农场", "放牧"],
    image: "/images/applications/livestock-pasture.svg",
  },
  {
    keywords: ["平台", "API", "系统", "接入"],
    image: "/images/applications/platform-integration.svg",
  },
  {
    keywords: ["宠物", "猎狗", "犬"],
    image: "/images/applications/pet-outdoor.svg",
  },
  {
    keywords: ["人员", "SOS", "巡检", "考勤", "安全"],
    image: "/images/applications/personal-safety.svg",
  },
  {
    keywords: ["SIM", "联网", "通信"],
    image: "/images/applications/sim-connectivity.svg",
  },
  {
    keywords: ["物流车队", "货运车辆"],
    image: "/images/applications/realistic-logistics-fleet.png",
  },
];

function getModelContext(slug: string, modelSlug: string): ModelContext | null {
  const product = products.find((item) => item.slug === slug);

  if (!product) {
    return null;
  }

  const model = product.children.find((item) => item.slug === modelSlug);

  if (!model) {
    return null;
  }

  return { product, model };
}

function getApplicationImage(title: string, product: Product) {
  const matchedRule = applicationImageRules.find((rule) =>
    rule.keywords.some((keyword) => title.includes(keyword)),
  );

  return (
    matchedRule?.image ??
    defaultApplicationImageByCategory[product.category] ??
    "/images/applications/platform-integration.svg"
  );
}

function isRealisticVehicleApplicationImage(src: string) {
  return src.startsWith("/images/applications/realistic-");
}

function getDetail(product: Product, model: ProductModel): ProductModelDetail {
  if (model.detail) {
    return model.detail;
  }

  return {
    heroEyebrow: "产品详情",
    heroTitle: model.name,
    heroDescription: model.summary,
    heroBullets: [
      "支持项目型 GPS 定位部署",
      "可接入 Web 平台、移动端 APP 与 API",
      "适合企业车辆、资产或设备管理场景",
      "具体配置可按项目需求确认",
    ],
    features: [
      {
        title: "实时定位",
        description: "查看车辆、设备或资产当前位置，支持平台可视化管理。",
      },
      {
        title: "轨迹回放",
        description: "查询历史路线、停留时间和行驶轨迹，辅助运营追溯。",
      },
      {
        title: "电子围栏",
        description: "设置区域范围，进入或离开指定区域时触发提醒。",
      },
      {
        title: "异常报警",
        description: "结合设备能力支持异常移动、断电、离线等提醒。",
      },
    ],
    applications: [
      {
        title: product.name,
        description: `适合 ${product.name} 相关项目的定位、追踪和远程管理。`,
      },
      {
        title: "企业项目部署",
        description: "适合渠道商、集成商和终端企业进行项目型选型。",
      },
      {
        title: "平台接入",
        description: "可根据项目需求接入云平台、移动端 APP 或 API。",
      },
    ],
    overview: `${model.name} 面向 B2B 定位管理项目，可结合硬件终端、云端平台、移动端 APP 和 API 接口使用。具体网络、接口、防护和扩展能力以实际型号配置为准。`,
    specGroups: [
      {
        title: "基础规格",
        items: model.specs,
      },
      {
        title: "项目配置",
        items: [
          { label: "平台接入", value: "Web 平台 / 移动端 APP / API" },
          { label: "部署方式", value: "具体以项目需求和实际型号配置为准" },
        ],
      },
    ],
  };
}

export function generateStaticParams() {
  return products.flatMap((product) =>
    product.children.map((model) => ({
      slug: product.slug,
      modelSlug: model.slug,
    })),
  );
}

export async function generateMetadata({
  params,
}: {
  params: PageParams;
}): Promise<Metadata> {
  const { slug, modelSlug } = await params;
  const context = getModelContext(slug, modelSlug);

  if (!context) {
    return {};
  }

  const detail = getDetail(context.product, context.model);

  return {
    title: `${context.model.name} | ${context.product.name} | GPS 定位解决方案`,
    description: context.model.summary || detail.heroDescription,
  };
}

function DetailIcon({ index }: { index: number }) {
  const variants = [
    "M12 21s7-4.6 7-10a7 7 0 1 0-14 0c0 5.4 7 10 7 10Zm0-7.2a2.8 2.8 0 1 0 0-5.6 2.8 2.8 0 0 0 0 5.6Z",
    "M4 17.5 9 12l4 3 7-8.5M4 20h16",
    "M5 5h14v14H5zM9 9h6v6H9z",
    "M12 3l8 4v6c0 4.2-2.6 7.2-8 8-5.4-.8-8-3.8-8-8V7l8-4Z",
    "M6 12h12M12 6v12M5 5l14 14",
    "M4 18V8l8-4 8 4v10l-8 4-8-4Zm8-14v18",
  ];

  return (
    <svg
      aria-hidden="true"
      className="h-6 w-6"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.8"
      viewBox="0 0 24 24"
    >
      <path d={variants[index % variants.length]} />
    </svg>
  );
}

function ProductDetailHero({
  product,
  model,
  detail,
}: {
  product: Product;
  model: ProductModel;
  detail: ProductModelDetail;
}) {
  const contactHref = `/contact?product=${model.slug}`;
  const datasheetHref = "#downloads";

  return (
    <section className="relative isolate overflow-hidden bg-[#061936] text-white">
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(circle at 78% 18%, rgba(11, 104, 255, 0.34), transparent 32%), radial-gradient(circle at 14% 84%, rgba(121, 215, 255, 0.16), transparent 34%), linear-gradient(135deg, #061936 0%, #071e3d 52%, #061936 100%)",
        }}
      />
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-14 lg:grid-cols-[0.92fr_1.08fr] lg:items-center lg:py-20">
        <div>
          <nav
            aria-label="Breadcrumb"
            className="flex flex-wrap items-center gap-2 text-sm text-blue-100/80"
          >
            <Link href="/" className="transition hover:text-white">
              首页
            </Link>
            <span>/</span>
            <Link href="/products" className="transition hover:text-white">
              产品
            </Link>
            <span>/</span>
            <Link
              href={`/products/${product.slug}`}
              className="transition hover:text-white"
            >
              {product.name}
            </Link>
            <span>/</span>
            <span className="text-white">{model.name}</span>
          </nav>

          <p className="mt-8 text-sm font-semibold uppercase tracking-[0.22em] text-[#79d7ff]">
            {detail.heroEyebrow}
          </p>
          <h1 className="mt-4 text-4xl font-semibold leading-tight md:text-5xl">
            {detail.heroTitle}
          </h1>
          {model.subtitle ? (
            <p className="mt-4 text-lg font-semibold leading-8 text-blue-100">
              {model.subtitle}
            </p>
          ) : null}
          <p className="mt-5 max-w-2xl text-base leading-8 text-slate-200">
            {detail.heroDescription}
          </p>

          <div className="mt-7 grid gap-3 sm:grid-cols-2">
            {detail.heroBullets.map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 rounded-lg border border-white/10 bg-white/5 p-3 text-sm leading-6 text-slate-100"
              >
                <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-[#79d7ff]" />
                <span>{item}</span>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href={contactHref}
              className="inline-flex h-12 items-center justify-center rounded-md bg-[#0b68ff] px-6 text-sm font-semibold text-white shadow-lg shadow-blue-950/30 transition hover:bg-[#0056df]"
            >
              获取报价
            </Link>
            <Link
              href={datasheetHref}
              className="inline-flex h-12 items-center justify-center rounded-md border border-white/30 px-6 text-sm font-semibold text-white transition hover:border-white hover:bg-white/10"
            >
              下载资料
            </Link>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-5 rounded-xl bg-[#0b68ff]/20 blur-2xl" />
          <div className="relative overflow-hidden rounded-xl border border-white/10 bg-white p-5 shadow-2xl shadow-blue-950/30">
            <Image
              src={model.image ?? product.image}
              alt={model.name}
              width={1000}
              height={1000}
              priority
              sizes="(min-width: 1024px) 48vw, 100vw"
              className="aspect-square w-full rounded-lg bg-slate-50 object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function AnchorNavigation() {
  return (
    <div className="sticky top-20 z-40 border-b border-slate-200 bg-white/95 backdrop-blur">
      <nav
        aria-label="Product detail sections"
        className="mx-auto flex max-w-7xl gap-3 overflow-x-auto px-6 py-3"
      >
        {anchorItems.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="whitespace-nowrap rounded-md px-3 py-2 text-sm font-semibold text-slate-600 transition hover:bg-blue-50 hover:text-[#0b68ff]"
          >
            {item.label}
          </a>
        ))}
      </nav>
    </div>
  );
}

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="max-w-3xl">
      <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-[#0b68ff]">
        {eyebrow}
      </p>
      <h2 className="text-3xl font-semibold leading-tight text-slate-950 md:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-5 text-base leading-8 text-slate-600">
          {description}
        </p>
      ) : null}
    </div>
  );
}

function FeaturesSection({ detail }: { detail: ProductModelDetail }) {
  return (
    <section id="features" className="scroll-mt-32 bg-white py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Features"
          title="产品特性"
          description="围绕定位、报警、平台接入和项目部署能力，帮助企业搭建可视化定位管理体系。"
        />

        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {detail.features.map((feature, index) => (
            <article
              key={feature.title}
              className="group rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-blue-300 hover:shadow-lg hover:shadow-blue-950/10"
            >
              <div className="grid h-12 w-12 place-items-center rounded-lg bg-blue-50 text-[#0b68ff] transition group-hover:bg-[#0b68ff] group-hover:text-white">
                <DetailIcon index={index} />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-slate-950">
                {feature.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                {feature.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ApplicationsSection({
  product,
  detail,
}: {
  product: Product;
  detail: ProductModelDetail;
}) {
  return (
    <section
      id="applications"
      className="scroll-mt-32 bg-slate-50 py-16 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Applications"
          title="应用领域"
          description="根据车辆类型、安装环境、管理目标和平台接入需求选择适合的定位终端。"
        />

        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {detail.applications.map((application) => {
            const imageSrc =
              application.image ??
              getApplicationImage(application.title, product);
            const isRealisticImage =
              isRealisticVehicleApplicationImage(imageSrc);

            return (
              <article
                key={application.title}
                className="group overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:border-blue-300 hover:shadow-lg hover:shadow-blue-950/10"
              >
                <div
                  className={
                    isRealisticImage
                      ? "aspect-[4/3] overflow-hidden bg-slate-100"
                      : "grid aspect-[4/3] place-items-center bg-gradient-to-br from-blue-50 to-slate-50 p-6"
                  }
                >
                  <Image
                    src={imageSrc}
                    alt={application.title}
                    width={960}
                    height={720}
                    sizes="(min-width: 1280px) 25vw, (min-width: 768px) 50vw, 100vw"
                    className={
                      isRealisticImage
                        ? "h-full w-full object-cover transition duration-300 group-hover:scale-[1.03]"
                        : "h-full w-full object-contain"
                    }
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-slate-950">
                    {application.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {application.description}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function OverviewSection({ detail }: { detail: ProductModelDetail }) {
  return (
    <section id="overview" className="scroll-mt-32 bg-white py-16 lg:py-24">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[1fr_420px] lg:items-start">
        <div>
          <SectionHeading eyebrow="Overview" title="产品概述" />
          <p className="mt-7 text-base leading-8 text-slate-600">
            {detail.overview}
          </p>
        </div>

        <aside className="rounded-xl border border-blue-100 bg-[#061936] p-6 text-white shadow-lg shadow-blue-950/10">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#79d7ff]">
            Capability Matrix
          </p>
          <h3 className="mt-3 text-2xl font-semibold">能力矩阵</h3>
          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
            {capabilityMatrix.map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold text-slate-100"
              >
                <span className="h-2.5 w-2.5 rounded-full bg-[#79d7ff]" />
                {item}
              </div>
            ))}
          </div>
        </aside>
      </div>
    </section>
  );
}

function SpecificationsSection({ detail }: { detail: ProductModelDetail }) {
  return (
    <section
      id="specifications"
      className="scroll-mt-32 bg-slate-50 py-16 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Specifications"
          title="技术规格"
          description="以下信息用于项目选型参考，具体配置请以实际型号和项目方案为准。"
        />

        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {detail.specGroups.map((group) => (
            <article
              key={group.title}
              className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm"
            >
              <h3 className="px-6 py-5 text-lg font-semibold text-slate-950">
                {group.title}
              </h3>
              <div className="border-t border-slate-200">
                {group.items.map((item) => (
                  <div
                    key={`${group.title}-${item.label}`}
                    className="grid grid-cols-[116px_1fr] border-b border-slate-200 text-sm last:border-b-0"
                  >
                    <div className="bg-slate-50 px-4 py-4 font-semibold text-slate-900">
                      {item.label}
                    </div>
                    <div className="px-4 py-4 leading-7 text-slate-600">
                      {item.value}
                    </div>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function DownloadsSection({
  model,
  detail,
}: {
  model: ProductModel;
  detail: ProductModelDetail;
}) {
  const downloads = detail.downloads ?? [
    {
      title: "资料下载",
      description: "获取产品规格书、平台接入说明和项目选型建议。",
      href: `/contact?product=${model.slug}&request=datasheet`,
    },
  ];

  return (
    <section id="downloads" className="scroll-mt-32 bg-white py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading eyebrow="Downloads" title="资料下载" />

        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {downloads.map((download) => (
            <article
              key={download.title}
              className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-blue-300 hover:shadow-lg hover:shadow-blue-950/10"
            >
              <div className="grid h-12 w-12 place-items-center rounded-lg bg-blue-50 text-[#0b68ff]">
                <DetailIcon index={4} />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-slate-950">
                {download.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                {download.description}
              </p>
              <a
                href={download.href}
                download={
                  download.href.startsWith("/downloads/") ? true : undefined
                }
                className="mt-6 inline-flex h-11 items-center justify-center rounded-md bg-[#0b68ff] px-5 text-sm font-semibold text-white transition hover:bg-[#0056df]"
              >
                {download.buttonLabel ?? "联系获取资料"}
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function RelatedProductsSection({
  product,
  model,
}: {
  product: Product;
  model: ProductModel;
}) {
  const related = product.children
    .filter((item) => item.slug !== model.slug)
    .slice(0, 3);

  return (
    <section
      id="related-products"
      className="scroll-mt-32 bg-slate-50 py-16 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Related"
          title="相关产品"
          description="同一产品分类下的其他型号，可根据安装环境、控制能力和平台需求继续比较。"
        />

        {related.length ? (
          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {related.map((item) => (
              <article
                key={item.slug}
                className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-blue-300 hover:shadow-lg hover:shadow-blue-950/10"
              >
                <h3 className="text-lg font-semibold text-slate-950">
                  {item.name}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {item.summary}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span
                      key={`${item.slug}-${tag}`}
                      className="rounded-full border border-blue-100 bg-blue-50 px-3 py-1 text-xs font-semibold text-[#0b68ff]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <Link
                  href={`/products/${product.slug}/${item.slug}`}
                  className="mt-6 inline-flex text-sm font-semibold text-[#0b68ff] transition hover:text-[#0056df]"
                >
                  查看详情
                </Link>
              </article>
            ))}
          </div>
        ) : (
          <div className="mt-10 rounded-xl border border-slate-200 bg-white p-6 text-sm leading-7 text-slate-600 shadow-sm">
            暂无更多同类产品。你可以联系我们获取项目选型建议。
          </div>
        )}
      </div>
    </section>
  );
}

function InquiryCta({ model }: { model: ProductModel }) {
  return (
    <section id="inquiry" className="scroll-mt-32 bg-[#061936] py-16 text-white">
      <div className="mx-auto grid max-w-7xl gap-6 px-6 md:grid-cols-[1fr_auto] md:items-center">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#79d7ff]">
            Inquiry
          </p>
          <h2 className="mt-3 text-3xl font-semibold">
            需要为项目选择合适的定位终端？
          </h2>
          <p className="mt-4 max-w-3xl text-base leading-8 text-slate-200">
            告诉我们车辆类型、安装环境、网络区域和平台需求，我们将推荐适合的 GPS 终端和平台方案。
          </p>
        </div>
        <Link
          href={`/contact?product=${model.slug}`}
          className="inline-flex h-12 items-center justify-center rounded-md bg-white px-6 text-sm font-semibold text-[#061936] transition hover:bg-blue-50"
        >
          获取方案报价
        </Link>
      </div>
    </section>
  );
}

export default async function ProductModelDetailPage({
  params,
}: {
  params: PageParams;
}) {
  const { slug, modelSlug } = await params;
  const context = getModelContext(slug, modelSlug);

  if (!context) {
    notFound();
  }

  const detail = getDetail(context.product, context.model);

  return (
    <>
      <ProductDetailHero
        product={context.product}
        model={context.model}
        detail={detail}
      />
      <AnchorNavigation />
      <FeaturesSection detail={detail} />
      <ApplicationsSection product={context.product} detail={detail} />
      <OverviewSection detail={detail} />
      <SpecificationsSection detail={detail} />
      <DownloadsSection model={context.model} detail={detail} />
      <RelatedProductsSection product={context.product} model={context.model} />
      <InquiryCta model={context.model} />
    </>
  );
}
