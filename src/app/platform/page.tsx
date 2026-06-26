import Image from "next/image";
import Link from "next/link";
import { SectionHeader } from "@/components/SectionHeader";

type PlatformModule = {
  title: string;
  summary: string;
  points: string[];
  value: string;
  image: string;
  imageAlt: string;
};

type SolutionPack = {
  title: string;
  customers: string;
  modules: string;
  value: string;
};

type DemoStep = {
  title: string;
  subtitle: string;
  visual: "monitor" | "analytics" | "risk";
};

const platformModules: PlatformModule[] = [
  {
    title: "首页定位监控总览",
    summary:
      "第一屏展示账户设备树、在线/离线状态、地图位置、车辆气泡详情、搜索设备/客户与地图工具。",
    points: ["设备树", "地图监控", "车辆气泡", "状态刷新", "搜索入口"],
    value: "客户第一眼就能看懂车辆在哪里、多久没动、当前是否在线。",
    image: "/images/platform/01-monitor-overview.png",
    imageAlt: "18GPS 首页定位监控总览平台截图",
  },
  {
    title: "统计报表",
    summary:
      "按时间查看运行总览，支持里程统计、轨迹报告、ACC 里程、超速详单、停留详单和报警统计。",
    points: ["运行总览", "里程统计", "超速详单", "停留详单", "报警统计"],
    value: "用于路线复盘、里程核算、异常停留追责和运营日报。",
    image: "/images/platform/02-report-summary.png",
    imageAlt: "18GPS 统计报表平台截图",
  },
  {
    title: "轨迹回放",
    summary:
      "选择定位类型、日期、开始/结束时间、播放速度和停留标示，在地图上复盘车辆历史路线与事件。",
    points: ["日期选择", "时间范围", "播放速度", "停留点", "打印"],
    value: "帮助运营团队还原车辆行驶过程，快速定位异常路线和关键停留点。",
    image: "/images/platform/03-track-playback.png",
    imageAlt: "18GPS 轨迹回放平台截图",
  },
  {
    title: "风控管理",
    summary:
      "按风险类型组织车辆，覆盖静止车辆、离线车辆、断电报警、位移报警、脱落报警、GSM 干扰、出围栏和停留详单。",
    points: ["静止车辆", "离线车辆", "断电报警", "位移报警", "出围栏"],
    value: "降低车辆失联、私拆设备、越界行驶和资产失控风险。",
    image: "/images/platform/04-risk-control.png",
    imageAlt: "18GPS 风控管理平台截图",
  },
  {
    title: "设备管理",
    summary:
      "展示设备名称、IMEI、车牌/姓名、安装时间、到期时间、状态提示与设置入口。",
    points: ["全部设备", "安装时间", "到期提醒", "脱网设备", "设置入口"],
    value: "适合代理商和企业管理员维护设备生命周期、续费提醒和售后状态。",
    image: "/images/platform/05-device-management.png",
    imageAlt: "18GPS 设备管理平台截图",
  },
  {
    title: "设备信息",
    summary:
      "维护名称、联系人、车牌号、超速提醒、油量异常阈值、车辆图标和备注。",
    points: ["基础档案", "超速阈值", "油量阈值", "车辆图标", "备注"],
    value: "把定位数据和车辆档案绑定，方便客户管理车牌、联系人和项目配置。",
    image: "/images/platform/06-device-information.png",
    imageAlt: "18GPS 设备信息平台截图",
  },
  {
    title: "电子围栏",
    summary:
      "在地图上绘制圆形或多边形围栏，设置车辆进出区域规则，并结合报警中心触发越界提醒。",
    points: ["围栏范围", "进出提醒", "车辆越界", "历史围栏", "风控联动"],
    value: "帮助客户把停车场、工地、牧场、仓库和禁行区域变成可监控的数字边界。",
    image: "/images/platform/07-geo-fence.png",
    imageAlt: "18GPS 电子围栏平台截图",
  },
  {
    title: "支持谷歌实景地图",
    summary:
      "支持道路地图、卫星地图和谷歌实景查看，便于跨国家项目核验位置环境、道路情况和现场周边。",
    points: ["道路地图", "卫星地图", "实景地图", "全球视图", "位置核验"],
    value: "适合跨境客户、海外代理和售后团队远程确认车辆或设备所在环境。",
    image: "/images/platform/08-google-street-view.png",
    imageAlt: "18GPS 谷歌实景地图平台截图",
  },
];

const platformLanguages = [
  { label: "简体中文", region: "Chinese Simplified", code: "CN" },
  { label: "English", region: "Global", code: "EN" },
  { label: "Russian", region: "Russia / CIS", code: "RU" },
  { label: "繁體中文", region: "Traditional Chinese", code: "ZH" },
  { label: "Português", region: "Portugal / Brazil", code: "PT" },
  { label: "Italiano", region: "Italy", code: "IT" },
  { label: "Tiếng Việt", region: "Vietnam", code: "VI" },
  { label: "日本語", region: "Japan", code: "JP" },
  { label: "Deutsch", region: "Germany", code: "DE" },
  { label: "Türkçe", region: "Turkey", code: "TR" },
  { label: "Français", region: "France", code: "FR" },
  { label: "العربية", region: "Middle East", code: "AR" },
  { label: "Español", region: "Spain / Latin America", code: "ES" },
  { label: "فارسی", region: "Persian", code: "FA" },
];

const capabilityLayers = [
  {
    title: "终端接入",
    description: "有线、OBD、无线、资产、油耗、牲畜和人员终端统一接入。",
  },
  {
    title: "地图监控",
    description: "车辆、设备、资产在线状态和实时位置集中显示。",
  },
  {
    title: "报表分析",
    description: "里程、超速、停留、报警、油耗和工时数据形成运营报表。",
  },
  {
    title: "风控报警",
    description: "离线、断电、位移、出围栏和异常停留等风险集中处理。",
  },
  {
    title: "API 集成",
    description: "定位、报警、里程、油耗和设备状态数据可对接客户自有系统。",
  },
];

const solutionPacks: SolutionPack[] = [
  {
    title: "车辆定位监控基础包",
    customers: "企业车队、工程车、行政车辆",
    modules: "首页定位监控、设备列表、地图气泡、在线/离线状态、搜索设备/客户。",
    value: "客户第一眼能看懂车辆在哪里、多久没动、当前是否在线。",
  },
  {
    title: "物流运输调度包",
    customers: "货运、配送、客运、长途运输",
    modules: "轨迹回放、运行统计、里程统计、停留/超速/报警统计、导出打印。",
    value: "用于路线复盘、里程核算、异常停留追责和运营日报。",
  },
  {
    title: "租赁/融资风控包",
    customers: "租车、分期车、资产租赁",
    modules: "风控管理、离线车辆、静止车辆、断电报警、位移报警、出围栏报警。",
    value: "降低车辆失联、私拆设备、越界行驶和资产失控风险。",
  },
  {
    title: "设备运营管理包",
    customers: "设备代理商、渠道商、平台运营",
    modules: "设备管理、安装时间、到期时间、脱网设备管理、设置入口。",
    value: "方便管理设备生命周期、续费提醒、异常设备和售后维护。",
  },
  {
    title: "4S/售后服务包",
    customers: "4S 店、维修连锁、车主服务",
    modules: "设备信息、联系人/车牌、车辆图标、超速阈值、备注、移动端入口。",
    value: "把定位服务延伸到车辆档案、客户触达和养车服务。",
  },
  {
    title: "区域追溯风控包",
    customers: "园区、仓储、租赁、监管场景",
    modules: "区域查车、地图选点、历史轨迹结合查询。",
    value: "用于查某段时间是否经过指定区域，支持事后追溯。",
  },
];

const demoSteps: DemoStep[] = [
  {
    title: "实时掌握车辆位置",
    subtitle: "所有车辆实时在线可视化管理",
    visual: "monitor",
  },
  {
    title: "分析行驶轨迹与运营数据",
    subtitle: "查看历史路线、停留点与行驶行为",
    visual: "analytics",
  },
  {
    title: "风控管理与异常报警",
    subtitle: "防盗、防拆、断油断电与异常行为提醒",
    visual: "risk",
  },
];

function PlatformConsoleMockup() {
  return (
    <div className="relative overflow-hidden rounded-md border border-cyan-300/20 bg-[#071a38] p-4 shadow-2xl shadow-blue-950/30">
      <div className="grid gap-3 rounded-md border border-white/10 bg-white/8 p-3">
        <div className="flex items-center justify-between border-b border-white/10 pb-3">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#79d7ff]">
              18GPS Platform
            </p>
            <p className="mt-1 text-sm font-semibold text-white">
              定位监控总览
            </p>
          </div>
          <div className="flex gap-2 text-[11px] text-slate-300">
            <span className="rounded bg-emerald-400/15 px-2 py-1 text-emerald-200">
              在线 18
            </span>
            <span className="rounded bg-amber-400/15 px-2 py-1 text-amber-200">
              离线 3
            </span>
          </div>
        </div>

        <div className="grid min-h-[320px] gap-3 md:grid-cols-[0.8fr_1.2fr]">
          <div className="rounded-md border border-white/10 bg-slate-950/30 p-3">
            <div className="mb-3 h-8 rounded bg-white/10" />
            {["CW-808436091", "HOV0572056", "Auto Avito 2018", "Prius C"].map(
              (device, index) => (
                <div
                  key={device}
                  className="mb-2 flex items-center justify-between rounded border border-white/10 bg-white/6 px-3 py-2 text-xs text-slate-200"
                >
                  <span>{device}</span>
                  <span
                    className={
                      index === 1 ? "text-amber-200" : "text-emerald-200"
                    }
                  >
                    {index === 1 ? "静止" : "在线"}
                  </span>
                </div>
              ),
            )}
          </div>

          <div className="relative overflow-hidden rounded-md border border-cyan-300/20 bg-[#09234d]">
            <div className="absolute inset-0 bg-[linear-gradient(rgba(121,215,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(121,215,255,0.08)_1px,transparent_1px)] bg-[size:48px_48px]" />
            <div className="absolute left-[18%] top-[58%] h-3 w-3 rounded-full bg-[#79d7ff] shadow-[0_0_24px_rgba(121,215,255,0.9)]" />
            <div className="absolute left-[52%] top-[36%] h-3 w-3 rounded-full bg-[#0b68ff] shadow-[0_0_24px_rgba(11,104,255,0.9)]" />
            <div className="absolute left-[72%] top-[62%] h-3 w-3 rounded-full bg-emerald-300 shadow-[0_0_24px_rgba(110,231,183,0.7)]" />
            <div className="absolute left-1/2 top-1/2 w-56 -translate-x-1/2 -translate-y-1/2 rounded-md border border-cyan-300/25 bg-slate-950/80 p-4 text-xs text-slate-200 shadow-xl">
              <p className="font-semibold text-white">车辆气泡详情</p>
              <div className="mt-3 grid gap-2">
                <span>状态：在线 / 行驶</span>
                <span>速度：42 km/h</span>
                <span>ACC：开启</span>
                <span>位置：地图实时刷新</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function PlatformStepVisual({ visual }: { visual: DemoStep["visual"] }) {
  if (visual === "analytics") {
    return (
      <div className="relative h-48 overflow-hidden rounded-t-md bg-[#071a38] p-4 text-white">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(121,215,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(121,215,255,0.08)_1px,transparent_1px)] bg-[size:36px_36px]" />
        <div className="relative grid h-full gap-3 rounded-md border border-cyan-300/20 bg-slate-950/45 p-3">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#79d7ff]">
              Track Replay
            </span>
            <span className="rounded-full bg-blue-500/20 px-2 py-1 text-[10px] text-blue-100">
              轨迹回放
            </span>
          </div>
          <div className="relative min-h-20 rounded border border-cyan-300/15 bg-[#09234d]">
            <div className="absolute left-5 top-10 h-1 w-16 rotate-[-12deg] rounded-full bg-[#79d7ff]" />
            <div className="absolute left-20 top-8 h-1 w-20 rotate-[18deg] rounded-full bg-[#79d7ff]" />
            <div className="absolute left-36 top-[52%] h-1 w-20 rotate-[-16deg] rounded-full bg-[#79d7ff]" />
            {[["18%", "52%"], ["42%", "38%"], ["66%", "54%"], ["82%", "35%"]].map(
              ([left, top]) => (
                <span
                  key={`${left}-${top}`}
                  className="absolute h-3 w-3 rounded-full border-2 border-white bg-[#0b68ff] shadow-[0_0_18px_rgba(121,215,255,0.9)]"
                  style={{ left, top }}
                />
              ),
            )}
          </div>
          <div className="grid grid-cols-3 gap-2 text-[10px] text-slate-200">
            <div className="rounded border border-white/10 bg-white/8 p-2">
              <p className="text-slate-400">里程</p>
              <p className="mt-1 font-semibold text-white">126 km</p>
            </div>
            <div className="rounded border border-white/10 bg-white/8 p-2">
              <p className="text-slate-400">停留点</p>
              <p className="mt-1 font-semibold text-white">8</p>
            </div>
            <div className="rounded border border-white/10 bg-white/8 p-2">
              <p className="text-slate-400">超速</p>
              <p className="mt-1 font-semibold text-amber-200">2</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (visual === "risk") {
    return (
      <div className="relative h-48 overflow-hidden rounded-t-md bg-[#071a38] p-4 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_28%,rgba(239,68,68,0.24),transparent_28%),linear-gradient(rgba(121,215,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(121,215,255,0.06)_1px,transparent_1px)] bg-[size:auto,36px_36px,36px_36px]" />
        <div className="relative grid h-full grid-cols-[0.85fr_1.15fr] gap-3 rounded-md border border-red-300/25 bg-slate-950/50 p-3">
          <div className="rounded border border-white/10 bg-white/8 p-2">
            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-red-200">
              Risk List
            </p>
            {["防拆报警", "断电报警", "异常移动"].map((item, index) => (
              <div
                key={item}
                className="mt-2 flex items-center justify-between rounded border border-red-300/15 bg-red-500/10 px-2 py-1.5 text-[10px]"
              >
                <span>{item}</span>
                <span className={index === 0 ? "text-red-200" : "text-amber-200"}>
                  {index === 0 ? "高" : "中"}
                </span>
              </div>
            ))}
          </div>
          <div className="relative rounded border border-red-300/20 bg-[#0b1f40] p-3">
            <div className="absolute right-4 top-4 h-3 w-3 rounded-full bg-red-400 shadow-[0_0_18px_rgba(248,113,113,0.85)]" />
            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-red-200">
              Alarm Panel
            </p>
            <p className="mt-3 text-xs font-semibold text-white">报警弹窗</p>
            <p className="mt-2 text-[10px] leading-5 text-slate-300">
              车辆离线 12 分钟，疑似设备拆除或电源异常。
            </p>
            <div className="mt-3 grid grid-cols-2 gap-2 text-[10px] font-semibold">
              <span className="rounded bg-red-500 px-2 py-2 text-center text-white">
                断油
              </span>
              <span className="rounded border border-white/15 bg-white/8 px-2 py-2 text-center text-white">
                锁车
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative h-48 overflow-hidden rounded-t-md bg-[#071a38] p-4 text-white">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(121,215,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(121,215,255,0.08)_1px,transparent_1px)] bg-[size:36px_36px]" />
      <div className="relative grid h-full grid-cols-[0.8fr_1.2fr] gap-3 rounded-md border border-cyan-300/20 bg-slate-950/45 p-3">
        <div className="rounded border border-white/10 bg-white/8 p-2">
          <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#79d7ff]">
            Fleet Online
          </p>
          {["粤B 4621", "Truck 08", "Van 12"].map((item, index) => (
            <div
              key={item}
              className="mt-2 flex items-center justify-between rounded border border-white/10 bg-white/8 px-2 py-1.5 text-[10px]"
            >
              <span>{item}</span>
              <span className={index === 2 ? "text-amber-200" : "text-emerald-200"}>
                {index === 2 ? "静止" : "在线"}
              </span>
            </div>
          ))}
        </div>
        <div className="relative rounded border border-cyan-300/20 bg-[#09234d]">
          <div className="absolute left-[16%] top-[58%] h-1 w-24 rotate-[-18deg] rounded-full bg-[#79d7ff]" />
          <div className="absolute left-[38%] top-[42%] h-1 w-24 rotate-[20deg] rounded-full bg-[#79d7ff]" />
          {[["24%", "54%"], ["48%", "40%"], ["74%", "58%"]].map(
            ([left, top]) => (
              <span
                key={`${left}-${top}`}
                className="absolute h-4 w-4 rounded-full border-2 border-white bg-[#0b68ff] shadow-[0_0_18px_rgba(121,215,255,0.9)]"
                style={{ left, top }}
              />
            ),
          )}
          <div className="absolute bottom-3 right-3 rounded border border-white/10 bg-slate-950/70 px-3 py-2 text-[10px] text-slate-200">
            <p className="font-semibold text-white">地图监控</p>
            <p className="mt-1">在线车辆 18</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function PlatformPage() {
  return (
    <>
      <section className="relative isolate overflow-hidden bg-[#061936] text-white">
        <div
          className="absolute inset-0 -z-10"
          style={{
            background:
              "linear-gradient(90deg, rgba(4, 20, 45, 0.98), rgba(5, 42, 92, 0.92), rgba(4, 20, 45, 0.72))",
          }}
        />
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-[0.86fr_1.14fr] lg:items-center lg:py-24">
          <div>
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.24em] text-[#79d7ff]">
              Platform
            </p>
            <h1 className="text-4xl font-semibold leading-tight text-white md:text-5xl lg:text-6xl">
              GPS Monitoring System Overview
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-200 md:text-lg">
              18GPS 定位平台围绕实时监控地图、车辆在线状态、报表分析、风控报警、轨迹回放、设备管理和 API 集成能力，帮助客户把车辆、设备和资产纳入同一个可视化运营系统。
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                href="#platform-modules"
                className="inline-flex h-12 items-center justify-center rounded-md bg-[#0b68ff] px-6 text-sm font-semibold text-white shadow-lg shadow-blue-950/30 transition hover:bg-[#0056df]"
              >
                查看平台功能
              </Link>
              <Link
                href="/downloads/18gps-platform-feature-solution.pdf"
                className="inline-flex h-12 items-center justify-center rounded-md border border-white/30 px-6 text-sm font-semibold text-white transition hover:border-white hover:bg-white/10"
              >
                下载平台资料
              </Link>
            </div>
          </div>

          <PlatformConsoleMockup />
        </div>
      </section>

      <section className="bg-white py-12 lg:py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-8 rounded-md border border-blue-100 bg-gradient-to-br from-white via-blue-50/60 to-cyan-50/40 p-6 shadow-sm lg:grid-cols-[0.9fr_1.1fr] lg:p-8">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#0b68ff]">
                Multilingual Platform
              </p>
              <h2 className="mt-3 text-2xl font-semibold text-slate-950 md:text-3xl">
                18GPS 平台支持多国语言界面
              </h2>
              <p className="mt-4 text-sm leading-7 text-slate-600">
                适合海外代理、跨境车队和多国家项目统一部署。客户可根据团队所在国家或地区切换平台语言，降低培训、交付和售后沟通成本。
              </p>
              <div className="mt-6 grid grid-cols-3 gap-3 text-sm">
                <div className="rounded-md border border-blue-100 bg-white p-4">
                  <p className="text-2xl font-semibold text-[#0b68ff]">
                    14+
                  </p>
                  <p className="mt-1 text-xs text-slate-500">界面语言</p>
                </div>
                <div className="rounded-md border border-blue-100 bg-white p-4">
                  <p className="text-2xl font-semibold text-[#0b68ff]">
                    Global
                  </p>
                  <p className="mt-1 text-xs text-slate-500">海外项目部署</p>
                </div>
                <div className="rounded-md border border-blue-100 bg-white p-4">
                  <p className="text-2xl font-semibold text-[#0b68ff]">
                    Web
                  </p>
                  <p className="mt-1 text-xs text-slate-500">平台端切换</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
              {platformLanguages.map((language) => (
                <div
                  key={language.label}
                  dir={
                    language.label === "العربية" || language.label === "فارسی"
                      ? "rtl"
                      : "ltr"
                  }
                  className="rounded-md border border-blue-100 bg-white/90 p-3 shadow-sm transition hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-md"
                >
                  <span className="inline-flex h-7 min-w-7 items-center justify-center rounded bg-blue-50 px-2 text-[11px] font-semibold text-[#0b68ff]">
                    {language.code}
                  </span>
                  <p className="mt-3 text-sm font-semibold text-slate-950">
                    {language.label}
                  </p>
                  <p className="mt-1 text-xs leading-5 text-slate-500">
                    {language.region}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeader
            eyebrow="平台逻辑"
            title="从实时监控到轨迹分析，再到风险控制的 GPS 平台流程"
            description="按客户实际使用路径展示：先在地图上查看车辆状态，再复盘历史轨迹和运营数据，最后处理报警、风控和设备控制。"
          />

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {demoSteps.map((step, index) => (
              <article
                key={step.title}
                className="flex min-h-[410px] flex-col overflow-hidden rounded-md border border-blue-100 bg-white shadow-sm transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg hover:shadow-blue-950/10"
              >
                <PlatformStepVisual visual={step.visual} />
                <div className="flex flex-1 flex-col p-6">
                  <span className="inline-flex rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-[#0b68ff]">
                    STEP {String(index + 1).padStart(2, "0")}
                  </span>
                  <h2 className="mt-4 text-xl font-semibold text-slate-950">
                    {step.title}
                  </h2>
                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {step.subtitle}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="platform-modules" className="bg-white py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeader
            eyebrow="功能模块"
            title="客户能直接理解的 18GPS 平台功能"
            description="每个模块都对应平台中的实际管理动作，适合销售演示、渠道培训、方案报价和项目交付说明。"
          />

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {platformModules.map((module, index) => (
              <article
                key={module.title}
                className="rounded-md border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg hover:shadow-blue-950/10"
              >
                <div className="mb-5 overflow-hidden rounded-md border border-blue-100 bg-slate-50">
                  <Image
                    src={module.image}
                    alt={module.imageAlt}
                    width={1200}
                    height={760}
                    className="h-52 w-full object-cover object-top transition duration-500 hover:scale-[1.02] sm:h-60"
                  />
                </div>
                <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-md bg-blue-50 text-sm font-semibold text-[#0b68ff]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h2 className="text-xl font-semibold text-slate-950">
                      {module.title}
                    </h2>
                    <p className="mt-3 text-sm leading-7 text-slate-600">
                      {module.summary}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {module.points.map((point) => (
                        <span
                          key={point}
                          className="rounded-full border border-blue-100 bg-blue-50 px-3 py-1 text-xs font-semibold text-[#0b68ff]"
                        >
                          {point}
                        </span>
                      ))}
                    </div>
                    <p className="mt-5 rounded-md border border-cyan-100 bg-cyan-50/60 p-4 text-sm leading-7 text-slate-700">
                      {module.value}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative isolate overflow-hidden bg-[#061936] py-16 text-white lg:py-24">
        <div
          className="absolute inset-0 -z-10"
          style={{
            background:
              "radial-gradient(circle at 18% 18%, rgba(11, 104, 255, 0.32), transparent 30%), radial-gradient(circle at 80% 22%, rgba(121, 215, 255, 0.16), transparent 34%)",
          }}
        />
        <div className="mx-auto max-w-7xl px-6">
          <div className="[&_h2]:text-white [&_p:last-child]:text-slate-300">
            <SectionHeader
              eyebrow="能力分层"
              title="从终端接入到 API 集成的完整平台能力"
              description="平台不是单一地图页面，而是由终端接入、地图监控、报表分析、风控报警和 API 集成组成的运营系统。"
              align="center"
            />
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-5">
            {capabilityLayers.map((layer, index) => (
              <article
                key={layer.title}
                className="rounded-md border border-cyan-300/15 bg-white/8 p-6 backdrop-blur transition hover:-translate-y-1 hover:border-cyan-300/35 hover:bg-white/12"
              >
                <span className="text-sm font-semibold text-[#79d7ff]">
                  Layer {String(index + 1).padStart(2, "0")}
                </span>
                <h2 className="mt-4 text-xl font-semibold text-white">
                  {layer.title}
                </h2>
                <p className="mt-3 text-sm leading-7 text-slate-300">
                  {layer.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeader
            eyebrow="方案打包"
            title="把平台功能组合成客户能购买的解决方案"
            description="根据 PDF 中的客户演示内容，平台能力可以组合为车辆监控、物流调度、租赁风控、设备运营、4S 售后和区域追溯等方案包。"
          />

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {solutionPacks.map((pack, index) => (
              <article
                key={pack.title}
                className="rounded-md border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg hover:shadow-blue-950/10"
              >
                <div className="flex items-start justify-between gap-4">
                  <h2 className="text-xl font-semibold text-slate-950">
                    {pack.title}
                  </h2>
                  <span className="shrink-0 text-sm font-semibold text-[#0b68ff]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <dl className="mt-5 grid gap-4 text-sm leading-7">
                  <div>
                    <dt className="font-semibold text-slate-950">适合客户</dt>
                    <dd className="mt-1 text-slate-600">{pack.customers}</dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-slate-950">组合功能</dt>
                    <dd className="mt-1 text-slate-600">{pack.modules}</dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-slate-950">客户价值</dt>
                    <dd className="mt-1 text-slate-600">{pack.value}</dd>
                  </div>
                </dl>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 lg:grid-cols-[1fr_0.72fr] lg:items-center">
          <div>
            <SectionHeader
              eyebrow="资料下载"
              title="18GPS 平台高清大图功能展示与解决方案"
              description="该资料包含平台实操路径、首页定位监控、统计报表、设备管理、风控管理、轨迹回放、设备信息、区域查车和方案打包建议，适合销售演示和客户沟通使用。"
            />
          </div>
          <div className="rounded-md border border-blue-100 bg-blue-50/50 p-8 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#0b68ff]">
              PDF Resource
            </p>
            <h2 className="mt-3 text-2xl font-semibold text-slate-950">
              平台功能资料
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-600">
              点击下载 PDF，后续可用于客户演示、渠道培训或方案报价附件。
            </p>
            <Link
              href="/downloads/18gps-platform-feature-solution.pdf"
              className="mt-6 inline-flex h-12 items-center justify-center rounded-md bg-[#0b68ff] px-6 text-sm font-semibold text-white transition hover:bg-[#0056df]"
            >
              下载 PDF
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-[#061936] py-16 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="rounded-xl border border-cyan-300/20 bg-white/8 p-8 shadow-xl shadow-blue-950/20 md:flex md:items-center md:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#79d7ff]">
                Platform CTA
              </p>
              <h2 className="mt-3 text-3xl font-semibold">
                需要按行业场景配置 18GPS 平台？
              </h2>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-300">
                可根据车队、物流、租赁、工程机械、资产、油耗和农牧场项目，组合终端型号、平台模块、报警规则和 API 接口。
              </p>
            </div>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row md:mt-0">
              <Link
                href="/contact"
                className="inline-flex h-12 items-center justify-center rounded-md bg-[#0b68ff] px-6 text-sm font-semibold text-white transition hover:bg-[#0056df]"
              >
                获取方案报价
              </Link>
              <Link
                href="/contact"
                className="inline-flex h-12 items-center justify-center rounded-md border border-white/30 px-6 text-sm font-semibold text-white transition hover:border-white hover:bg-white/10"
              >
                联系技术顾问
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
