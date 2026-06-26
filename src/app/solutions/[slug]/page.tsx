import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SolutionScene } from "@/components/SolutionScene";
import { solutionDetails, type SolutionDetail } from "@/lib/site-data";

type PageParams = Promise<{
  slug: string;
}>;

function getSolution(slug: string) {
  return solutionDetails.find((solution) => solution.slug === slug);
}

type SystemVisualPreset = {
  focus: string;
  online: string;
  risk: string;
  metric: string;
  chartLabel: string;
  alarm: string;
  routeLabel: string;
  list: string[];
};

const defaultSystemVisual: SystemVisualPreset = {
  focus: "GPS 运营总览",
  online: "在线 18",
  risk: "报警 3",
  metric: "运营数据",
  chartLabel: "路线 / 报警趋势",
  alarm: "异常事件提醒",
  routeLabel: "实时轨迹",
  list: ["车辆 01", "设备 02", "资产 03"],
};

const systemVisualPresets: Record<string, SystemVisualPreset> = {
  "fleet-logistics": {
    focus: "车队定位监控",
    online: "在线车辆 128",
    risk: "异常 6",
    metric: "调度效率",
    chartLabel: "里程 / 停留 / 超速",
    alarm: "超速与异常停留提醒",
    routeLabel: "干线轨迹",
    list: ["粤B 4621", "Truck 08", "Van 12"],
  },
  "asset-container": {
    focus: "资产跨区追踪",
    online: "在线资产 86",
    risk: "移动报警 4",
    metric: "资产状态",
    chartLabel: "位置 / 电量 / 移动",
    alarm: "异常移动与低电量提醒",
    routeLabel: "资产轨迹",
    list: ["Container A12", "Tool Box 07", "Asset 305"],
  },
  "machinery-rental": {
    focus: "设备租赁风控",
    online: "在线设备 42",
    risk: "越界 5",
    metric: "工时数据",
    chartLabel: "工时 / 位置 / 围栏",
    alarm: "越界与断电风险提醒",
    routeLabel: "工地轨迹",
    list: ["Excavator 01", "Loader 06", "Generator 03"],
  },
  "fuel-abnormal": {
    focus: "油耗异常监控",
    online: "监控车辆 64",
    risk: "油耗异常 8",
    metric: "油耗曲线",
    chartLabel: "油位 / 里程 / 报警",
    alarm: "疑似偷油与异常耗油提醒",
    routeLabel: "油耗轨迹",
    list: ["Truck Fuel 01", "Coach 08", "Crane 12"],
  },
  "livestock-farm": {
    focus: "牧场定位管理",
    online: "在线牲畜 230",
    risk: "离群 7",
    metric: "活动范围",
    chartLabel: "位置 / 电量 / 离群",
    alarm: "离群与区域越界提醒",
    routeLabel: "放牧轨迹",
    list: ["Cattle 102", "Sheep 33", "Ranch Gate"],
  },
  "oem-odm-platform": {
    focus: "平台集成管理",
    online: "接入设备 500+",
    risk: "接口异常 2",
    metric: "API 数据",
    chartLabel: "请求 / 设备 / 报警",
    alarm: "接口与设备状态提醒",
    routeLabel: "数据流",
    list: ["API Client", "Private Cloud", "Channel A"],
  },
};

function getSystemVisual(solution: SolutionDetail) {
  return systemVisualPresets[solution.slug] ?? defaultSystemVisual;
}

export function generateStaticParams() {
  return solutionDetails.map((solution) => ({
    slug: solution.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: PageParams;
}): Promise<Metadata> {
  const { slug } = await params;
  const solution = getSolution(slug);

  if (!solution) {
    return {};
  }

  return {
    title: `${solution.title} | GPS 定位解决方案`,
    description: solution.summary,
  };
}

function SolutionHero({ solution }: { solution: SolutionDetail }) {
  return (
    <section className="relative isolate overflow-hidden bg-[#061936] text-white">
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(circle at 74% 18%, rgba(11,104,255,0.34), transparent 34%), radial-gradient(circle at 12% 82%, rgba(121,215,255,0.16), transparent 34%), linear-gradient(135deg, #061936 0%, #082756 52%, #061936 100%)",
        }}
      />
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 lg:grid-cols-[0.92fr_1.08fr] lg:items-center lg:py-24">
        <div>
          <nav
            aria-label="Breadcrumb"
            className="flex flex-wrap items-center gap-2 text-sm text-blue-100/80"
          >
            <Link href="/" className="transition hover:text-white">
              首页
            </Link>
            <span>/</span>
            <Link href="/solutions" className="transition hover:text-white">
              解决方案
            </Link>
            <span>/</span>
            <span className="text-white">{solution.title}</span>
          </nav>

          <p className="mt-8 text-sm font-semibold uppercase tracking-[0.22em] text-[#79d7ff]">
            解决方案
          </p>
          <h1 className="mt-4 text-4xl font-semibold leading-tight md:text-5xl">
            {solution.heroTitle}
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-200">
            {solution.heroDescription}
          </p>

          <div className="mt-8 flex flex-wrap gap-2">
            {solution.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-cyan-300/20 bg-white/10 px-3 py-1 text-xs font-semibold text-cyan-100"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="#solution-detail"
              className="inline-flex h-12 items-center justify-center rounded-md bg-[#0b68ff] px-6 text-sm font-semibold text-white shadow-lg shadow-blue-950/30 transition hover:bg-[#0056df]"
            >
              查看方案结构
            </Link>
            <Link
              href={`/contact?solution=${solution.slug}`}
              className="inline-flex h-12 items-center justify-center rounded-md border border-white/30 px-6 text-sm font-semibold text-white transition hover:border-white hover:bg-white/10"
            >
              获取方案报价
            </Link>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-5 rounded-xl bg-[#0b68ff]/20 blur-2xl" />
          <div className="relative overflow-hidden rounded-xl border border-cyan-300/20 bg-white/10 p-5 shadow-2xl shadow-blue-950/30 backdrop-blur">
            <SolutionScene
              visual={solution.visual}
              className="aspect-[4/3] w-full rounded-lg border border-white/10 bg-white"
            />
          </div>
        </div>
      </div>
    </section>
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

function ProblemSection({ solution }: { solution: SolutionDetail }) {
  return (
    <section id="solution-detail" className="bg-white py-16 lg:py-24">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[0.86fr_1.14fr] lg:items-start">
        <div className="lg:sticky lg:top-28">
          <SectionHeading
            eyebrow="Problem Layer"
            title={`行业痛点：${solution.title}`}
            description="先识别行业运营中的可视化、风控和数据断点，再决定终端型号、平台模块和接口方式。这里不先讲产品，而是把客户真实管理问题摆清楚。"
          />
        </div>

        <div className="grid gap-5">
          {solution.painPoints.map((item, index) => (
            <article
              key={item}
              className="rounded-xl border border-blue-100 bg-gradient-to-br from-blue-50/70 to-white p-6 shadow-sm"
            >
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-white text-sm font-semibold text-[#0b68ff] shadow-sm">
                {String(index + 1).padStart(2, "0")}
              </span>
              <p className="mt-3 text-base font-semibold leading-7 text-slate-900">
                {item}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function SystemConsoleVisual({ visual }: { visual: SystemVisualPreset }) {
  const trendBars = [58, 78, 46, 88, 66, 74];

  return (
    <div className="overflow-hidden rounded-xl border border-cyan-300/20 bg-[#071a38] p-4 shadow-2xl shadow-blue-950/30">
      <div className="rounded-lg border border-white/10 bg-white/8 p-4">
        <div className="flex flex-col gap-4 border-b border-white/10 pb-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#79d7ff]">
              18GPS System Console
            </p>
            <h3 className="mt-2 text-xl font-semibold text-white">
              {visual.focus}
            </h3>
          </div>
          <div className="flex flex-wrap gap-2 text-xs">
            <span className="rounded bg-emerald-400/15 px-3 py-1 font-semibold text-emerald-200">
              {visual.online}
            </span>
            <span className="rounded bg-rose-400/15 px-3 py-1 font-semibold text-rose-200">
              {visual.risk}
            </span>
          </div>
        </div>

        <div className="mt-4 grid min-h-[420px] gap-4 lg:grid-cols-[0.78fr_1.3fr_0.82fr]">
          <div className="rounded-lg border border-white/10 bg-slate-950/30 p-4">
            <div className="mb-4 h-9 rounded-md bg-white/10" />
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
              Online List
            </p>
            {visual.list.map((item, index) => (
              <div
                key={item}
                className="mb-3 rounded-md border border-white/10 bg-white/6 px-3 py-3 text-sm text-slate-200"
              >
                <div className="flex items-center justify-between gap-3">
                  <span>{item}</span>
                  <span
                    className={
                      index === 1 ? "text-amber-200" : "text-emerald-200"
                    }
                  >
                    {index === 1 ? "静止" : "在线"}
                  </span>
                </div>
                <div className="mt-2 h-1.5 rounded-full bg-white/10">
                  <div
                    className="h-full rounded-full bg-[#79d7ff]"
                    style={{ width: `${58 + index * 14}%` }}
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="relative overflow-hidden rounded-lg border border-cyan-300/20 bg-[#09234d]">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(121,215,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(121,215,255,0.08) 1px, transparent 1px)",
                backgroundSize: "48px 48px",
              }}
            />
            <svg
              viewBox="0 0 620 420"
              className="absolute inset-0 h-full w-full"
              aria-hidden="true"
            >
              <path
                d="M68 322 C140 236 190 290 248 210 C304 132 374 172 440 102 C502 38 562 78 592 50"
                fill="none"
                stroke="#79d7ff"
                strokeWidth="8"
                strokeLinecap="round"
                opacity="0.18"
              />
              <path
                d="M92 305 C150 250 202 282 258 214 C312 148 376 178 438 118 C492 65 548 82 580 58"
                fill="none"
                stroke="#0b68ff"
                strokeWidth="5"
                strokeLinecap="round"
              />
              {[
                [92, 305],
                [258, 214],
                [438, 118],
                [580, 58],
              ].map(([cx, cy], index) => (
                <g key={`${cx}-${cy}`}>
                  <circle cx={cx} cy={cy} r="15" fill="#071a38" />
                  <circle
                    cx={cx}
                    cy={cy}
                    r="8"
                    fill={index === 2 ? "#ef4444" : "#79d7ff"}
                  />
                </g>
              ))}
            </svg>
            <div className="absolute left-6 top-6 rounded-md border border-cyan-300/20 bg-slate-950/75 px-4 py-3 text-xs text-slate-200 shadow-xl">
              <p className="font-semibold text-white">{visual.routeLabel}</p>
              <p className="mt-2 text-slate-300">GPS / BDS / LBS</p>
            </div>
            <div className="absolute bottom-8 right-8 w-64 rounded-lg border border-cyan-300/25 bg-slate-950/85 p-4 text-sm text-slate-200 shadow-xl">
              <p className="font-semibold text-white">{visual.focus}</p>
              <div className="mt-3 grid gap-2 text-xs leading-5">
                <span>位置：地图实时刷新</span>
                <span>轨迹：可回放 / 可追溯</span>
                <span className="text-rose-200">报警：{visual.alarm}</span>
              </div>
            </div>
          </div>

          <div className="grid gap-4">
            <div className="rounded-lg border border-white/10 bg-slate-950/30 p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                Dashboard
              </p>
              <h3 className="mt-2 text-lg font-semibold text-white">
                {visual.metric}
              </h3>
              <p className="mt-1 text-xs text-slate-400">
                {visual.chartLabel}
              </p>
              <div className="mt-5 flex h-28 items-end gap-2">
                {trendBars.map((height, index) => (
                  <div
                    key={`${height}-${index}`}
                    className="flex-1 rounded-t bg-gradient-to-t from-[#0b68ff] to-[#79d7ff]"
                    style={{ height: `${height}%` }}
                  />
                ))}
              </div>
            </div>
            <div className="rounded-lg border border-rose-300/20 bg-rose-500/10 p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-rose-200">
                Alarm Popup
              </p>
              <h3 className="mt-2 text-lg font-semibold text-white">
                {visual.alarm}
              </h3>
              <p className="mt-3 text-sm leading-6 text-slate-300">
                触发后同步进入 Web 平台、移动端 APP 和通知规则，方便运营人员快速处理。
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function SystemVisualizationSection({ solution }: { solution: SolutionDetail }) {
  return (
    <section className="bg-[#061936] py-16 text-white lg:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-3xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-[#79d7ff]">
            System Visualization
          </p>
          <h2 className="text-3xl font-semibold leading-tight md:text-4xl">
            系统运行画面：地图、轨迹、报表和报警联动
          </h2>
          <p className="mt-5 text-base leading-8 text-slate-200">
            把车辆位置、设备状态、历史轨迹、油耗/运营数据和异常报警放在同一个监控系统中，让客户看到平台正在管理真实业务。
          </p>
        </div>

        <div className="mt-10">
          <SystemConsoleVisual visual={getSystemVisual(solution)} />
        </div>
      </div>
    </section>
  );
}

function CapabilitiesSection({ solution }: { solution: SolutionDetail }) {
  return (
    <section className="bg-slate-50 py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Capability Layer"
          title="把定位、报警、报表和接口沉淀为系统能力"
          description="能力不只是单个功能按钮，而是围绕地图可视化、轨迹分析、异常识别、设备状态和系统集成形成可持续运营的管理闭环。"
        />

        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {solution.capabilities.map((capability, index) => (
            <article
              key={capability.title}
              className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-blue-300 hover:shadow-lg hover:shadow-blue-950/10"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-blue-50 text-sm font-semibold text-[#0b68ff]">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-5 text-lg font-semibold text-slate-950">
                {capability.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                {capability.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function IndustryUseCaseSection({ solution }: { solution: SolutionDetail }) {
  const industryUseCases = [
    {
      title: "物流车队",
      description: `用于车辆在途可视化、轨迹复盘、停留与超速识别，把 ${solution.title} 落到日常调度和运营复盘。`,
    },
    {
      title: "租赁车辆",
      description:
        "围绕车辆位置、电子围栏、断电/拆机和异常移动提醒，帮助租赁业务降低资产失控风险。",
    },
    {
      title: "企业车队",
      description:
        "适合公务车、服务车和销售车辆管理，统一查看在线状态、用车轨迹和异常行为。",
    },
    {
      title: "工程机械",
      description:
        "用于挖掘机、装载机、发电机等设备的位置监管、工时统计、越界和异常移动提醒。",
    },
  ];

  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Industry Use Case"
          title="同一套系统能力可落到不同业务场景"
          description={`根据 ${solution.title} 的项目目标，可把定位、轨迹、报警、设备状态和数据接口组合到物流、租赁、企业车队和工程机械等场景。`}
        />

        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {industryUseCases.map((item, index) => (
            <article
              key={item.title}
              className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-blue-300 hover:shadow-lg hover:shadow-blue-950/10"
            >
              <span className="text-sm font-semibold text-[#0b68ff]">
                Use Case {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-4 text-xl font-semibold text-slate-950">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                {item.description}
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {["地图", "轨迹", "报警", "数据"].map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-blue-100 bg-blue-50 px-3 py-1 text-xs font-semibold text-[#0b68ff]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProductSection({ solution }: { solution: SolutionDetail }) {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="推荐配置"
          title="按项目需求选择适合的终端与平台模块"
          description="这里仅展示一级产品类目入口，具体型号在产品类目详情页中继续选择。"
        />

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {solution.recommendedProducts.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="group rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-blue-300 hover:shadow-lg hover:shadow-blue-950/10"
            >
              <h3 className="text-xl font-semibold text-slate-950">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                {item.description}
              </p>
              <span className="mt-6 inline-flex text-sm font-semibold text-[#0b68ff] transition group-hover:text-[#0056df]">
                查看产品
                <span aria-hidden="true" className="ml-2">
                  →
                </span>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function WorkflowSection({ solution }: { solution: SolutionDetail }) {
  return (
    <section className="bg-[#061936] py-16 text-white lg:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-3xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-[#79d7ff]">
            Delivery
          </p>
          <h2 className="text-3xl font-semibold leading-tight md:text-4xl">
            从需求确认到平台上线的交付路径
          </h2>
          <p className="mt-5 text-base leading-8 text-slate-200">
            适合渠道商、集成商和终端客户按项目阶段推进，不把所有能力一次性堆到菜单或页面顶部。
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {solution.workflow.map((step, index) => (
            <article
              key={step.title}
              className="rounded-xl border border-cyan-300/20 bg-white/10 p-6 backdrop-blur"
            >
              <span className="text-sm font-semibold text-[#79d7ff]">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-4 text-lg font-semibold text-white">
                {step.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate-200">
                {step.description}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-12 rounded-xl border border-cyan-300/20 bg-white p-8 text-slate-950 shadow-xl shadow-blue-950/20 md:flex md:items-center md:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#0b68ff]">
              Inquiry
            </p>
            <h2 className="mt-3 text-2xl font-semibold">
              <span>需要按你的项目细化</span>
              <span> {solution.title}</span>
              <span>？</span>
            </h2>
          </div>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row md:mt-0">
            <Link
              href={`/contact?solution=${solution.slug}`}
              className="inline-flex h-12 items-center justify-center rounded-md bg-[#0b68ff] px-6 text-sm font-semibold text-white transition hover:bg-[#0056df]"
            >
              获取方案报价
            </Link>
            <Link
              href="/contact"
              className="inline-flex h-12 items-center justify-center rounded-md border border-slate-300 px-6 text-sm font-semibold text-slate-900 transition hover:border-[#0b68ff] hover:text-[#0b68ff]"
            >
              联系技术顾问
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default async function SolutionDetailPage({
  params,
}: {
  params: PageParams;
}) {
  const { slug } = await params;
  const solution = getSolution(slug);

  if (!solution) {
    notFound();
  }

  return (
    <>
      <SolutionHero solution={solution} />
      <ProblemSection solution={solution} />
      <SystemVisualizationSection solution={solution} />
      <CapabilitiesSection solution={solution} />
      <IndustryUseCaseSection solution={solution} />
      <ProductSection solution={solution} />
      <WorkflowSection solution={solution} />
    </>
  );
}
