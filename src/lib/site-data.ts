import productsData from "@/data/products.json";
import { caseMenuItems } from "@/lib/case-data";

export type Product = {
  slug: string;
  name: string;
  category: string;
  summary: string;
  image: string;
  heroImage?: string;
  icon: ProductIcon;
  scenarioTags: string[];
  features: string[];
  specs: {
    label: string;
    value: string;
  }[];
  children: ProductModel[];
};

export type ProductModel = {
  slug: string;
  name: string;
  subtitle?: string;
  image?: string;
  summary: string;
  tags: string[];
  specs: {
    label: string;
    value: string;
  }[];
  detail?: ProductModelDetail;
};

export type ProductModelDetail = {
  heroEyebrow: string;
  heroTitle: string;
  heroDescription: string;
  heroBullets: string[];
  features: {
    title: string;
    description: string;
    icon?: string;
  }[];
  applications: {
    title: string;
    description: string;
    image?: string;
  }[];
  overview: string;
  specGroups: {
    title: string;
    items: {
      label: string;
      value: string;
    }[];
  }[];
  downloads?: {
    title: string;
    description: string;
    href: string;
    buttonLabel?: string;
  }[];
};

export type ProductIcon =
  | "wired"
  | "asset"
  | "obd"
  | "grazing"
  | "fuel"
  | "machinery"
  | "bike"
  | "wireless"
  | "bluetooth"
  | "solar"
  | "pet"
  | "personal"
  | "sim";

export type Solution = {
  title: string;
  summary: string;
  image: string;
  visual: SolutionVisual;
  tags: string[];
  href: string;
};

export type SolutionVisual =
  | "fleet"
  | "asset"
  | "machinery"
  | "fuel"
  | "livestock"
  | "integration";

export type SolutionDetail = Solution & {
  slug: string;
  menuDescription: string;
  heroTitle: string;
  heroDescription: string;
  overviewTitle: string;
  overview: string;
  painPoints: string[];
  capabilities: {
    title: string;
    description: string;
  }[];
  recommendedProducts: {
    title: string;
    description: string;
    href: string;
  }[];
  workflow: {
    title: string;
    description: string;
  }[];
};

export type NavItem = {
  label: string;
  href: string;
  description?: string;
  children?: NavItem[];
  showOverview?: boolean;
  dropdownVariant?: "default" | "case";
};

export type FooterColumn = {
  title: string;
  links: {
    label: string;
    href: string;
  }[];
};

export type FeatureItem = {
  title: string;
  description: string;
  icon:
    | "location"
    | "route"
    | "fence"
    | "alert"
    | "fuel"
    | "app"
    | "web"
    | "api";
};

export type PlatformItem = {
  title: string;
  description: string;
};

function getCategoryName(categoryId: string) {
  return (
    productsData.categories.find((category) => category.id === categoryId)
      ?.name ?? categoryId
  );
}

export const solutionDetails: SolutionDetail[] = [
  {
    slug: "fleet-logistics",
    title: "车队与物流管理",
    menuDescription: "实时定位、轨迹回放、电子围栏",
    summary:
      "实时掌握车辆位置、行驶路线、停车状态、超速行为和异常报警，帮助物流车队提升调度效率。",
    image: "/images/applications/realistic-logistics-fleet.png",
    visual: "fleet",
    tags: ["实时定位", "轨迹回放", "电子围栏"],
    href: "/solutions/fleet-logistics",
    heroTitle: "车队与物流 GPS 调度管理方案",
    heroDescription:
      "面向物流运输、城市配送、企业车队和租赁车辆，整合 GPS 终端、平台地图、轨迹回放、电子围栏、报警规则和移动端 APP，帮助企业提升车辆可视化管理能力。",
    overviewTitle: "让车队位置、路线和异常状态集中可见",
    overview:
      "方案围绕车辆实时定位、行驶轨迹、停车状态、超速报警、电子围栏和调度协同展开。企业可以按车辆类型选择有线、OBD、点烟器或无线终端，并在云平台中统一查看车辆位置、历史轨迹、里程、报警和设备状态。",
    painPoints: [
      "车辆分布在不同区域，调度人员难以及时掌握实时位置",
      "历史路线、停车时长和异常用车缺少可追溯记录",
      "超速、越界、断电和异常移动无法及时提醒",
      "多分公司或多项目车队需要统一平台和权限管理",
    ],
    capabilities: [
      {
        title: "实时地图监控",
        description: "集中查看车辆位置、在线状态、速度、方向和分组信息。",
      },
      {
        title: "轨迹回放与报表",
        description: "查询历史轨迹、停留时间、行驶里程和异常路线。",
      },
      {
        title: "电子围栏",
        description: "设置仓库、客户点、运营区域和禁行区域的进出提醒。",
      },
      {
        title: "异常报警",
        description: "支持超速、断电、震动、离线、越界和异常移动提醒。",
      },
    ],
    recommendedProducts: [
      {
        title: "有线追踪器",
        description: "适合长期在线车辆、货运车辆和企业车队安装。",
        href: "/products/hardwired",
      },
      {
        title: "OBD点烟器追踪器",
        description: "适合快速部署、免接线或临时车辆管理。",
        href: "/products/obd-cigarette-lighter",
      },
      {
        title: "无线追踪器",
        description: "适合短期项目、临时车辆和不便布线场景。",
        href: "/products/wireless",
      },
    ],
    workflow: [
      {
        title: "车辆清单确认",
        description: "确认车辆类型、数量、安装环境、网络区域和管理账号。",
      },
      {
        title: "终端选型安装",
        description: "按车辆供电、是否免接线、是否需要断油断电选择终端。",
      },
      {
        title: "平台规则配置",
        description: "配置车辆分组、电子围栏、报警规则、角色权限和报表字段。",
      },
      {
        title: "运营交付",
        description: "完成平台培训、移动端使用、报警联动和后续数据维护。",
      },
    ],
  },
  {
    slug: "asset-container",
    title: "资产与集装箱追踪",
    menuDescription: "资产防丢、长续航、异常移动报警",
    summary:
      "适用于集装箱、工具、设备和高价值移动资产，支持长续航定位、防丢报警和跨区域追踪。",
    image: "/images/products/categories/asset-container-location.jpg",
    visual: "asset",
    tags: ["资产防丢", "长续航", "异常移动报警"],
    href: "/solutions/asset-container",
    heroTitle: "资产与集装箱跨区域追踪方案",
    heroDescription:
      "面向集装箱、工具、周转设备、冷链货物和高价值移动资产，提供长续航终端、无线追踪器、蓝牙信标和平台报警规则，帮助企业降低资产丢失和跨区域监管成本。",
    overviewTitle: "把移动资产从“不可见”变成可追踪、可报警",
    overview:
      "方案重点解决资产离散、周转频繁、跨区域运输和低频维护的问题。企业可以根据资产体积、续航需求、安装方式和定位精度选择资产追踪器、无线强磁追踪器、太阳能追踪器或蓝牙信标。",
    painPoints: [
      "集装箱、工具和移动设备位置分散，盘点成本高",
      "资产被异常移动或拆卸后缺少及时提醒",
      "长期运输或户外存放场景不方便频繁充电维护",
      "跨区域项目需要按客户、仓库和资产类型分组管理",
    ],
    capabilities: [
      {
        title: "长续航定位",
        description: "根据上报频率、休眠策略和电池容量匹配不同资产场景。",
      },
      {
        title: "异常移动报警",
        description: "识别资产移动、离开围栏、低电量和离线等异常状态。",
      },
      {
        title: "跨区域追踪",
        description: "支持不同仓库、港口、运输线路和客户项目的资产监管。",
      },
      {
        title: "资产台账",
        description: "结合平台分组、编号、状态和位置形成资产追踪记录。",
      },
    ],
    recommendedProducts: [
      {
        title: "资产追踪器",
        description: "适合集装箱、周转设备和高价值资产防丢管理。",
        href: "/products/asset",
      },
      {
        title: "无线追踪器",
        description: "适合免接线、强磁安装和临时资产追踪。",
        href: "/products/wireless",
      },
      {
        title: "蓝牙信标追踪器",
        description: "适合仓储、工具和室内近距离资产识别。",
        href: "/products/bluetooth-beacon",
      },
    ],
    workflow: [
      {
        title: "资产类型梳理",
        description: "确认资产尺寸、价值、运输区域、续航周期和安装方式。",
      },
      {
        title: "设备组合选型",
        description: "按长续航、太阳能、强磁、蓝牙信标等需求组合终端。",
      },
      {
        title: "围栏与报警配置",
        description: "设置仓库、港口、客户现场和运输节点的异常提醒。",
      },
      {
        title: "资产台账上线",
        description: "将设备编号、资产编号、客户项目和平台权限关联管理。",
      },
    ],
  },
  {
    slug: "machinery-rental",
    title: "工程机械与租赁设备管理",
    menuDescription: "设备定位、工时统计、租赁管理",
    summary:
      "帮助管理挖掘机、装载机、发电机和租赁设备的位置、工时、使用状态和异常移动。",
    image: "/images/applications/realistic-engineering-vehicles.png",
    visual: "machinery",
    tags: ["设备定位", "工时统计", "租赁管理"],
    href: "/solutions/machinery-rental",
    heroTitle: "工程机械与租赁设备远程监管方案",
    heroDescription:
      "面向挖掘机、装载机、发电机、工程车辆和租赁设备，提供定位终端、工时统计、异常移动、电子围栏和远程平台管理能力，帮助企业掌握设备位置与使用状态。",
    overviewTitle: "让设备位置、工时和租赁风险可控",
    overview:
      "工程机械和租赁设备通常分散在工地、仓库和客户现场，管理难点在于位置不可见、工时无法核对、异常移动滞后和租赁风险控制。方案可结合有线终端、无线终端和平台规则，实现设备定位、工时统计、围栏报警和租赁项目管理。",
    painPoints: [
      "设备分散在多个工地或客户现场，位置核查成本高",
      "工时、使用状态和停机状态缺少统一记录",
      "租赁设备异常移动、超范围使用和逾期归还难以及时发现",
      "设备维修、调拨和回收需要更清晰的数据支撑",
    ],
    capabilities: [
      {
        title: "设备定位",
        description: "查看工程设备当前位置、在线状态和历史移动轨迹。",
      },
      {
        title: "工时统计",
        description: "结合设备状态和平台报表统计运行工时和使用情况。",
      },
      {
        title: "租赁围栏",
        description: "按工地、客户区域和项目范围设置电子围栏报警。",
      },
      {
        title: "异常移动提醒",
        description: "设备离开指定区域、异常移动或离线时自动提醒。",
      },
    ],
    recommendedProducts: [
      {
        title: "有线追踪器",
        description: "适合长期供电设备和工程车辆的稳定在线管理。",
        href: "/products/hardwired",
      },
      {
        title: "无线追踪器",
        description: "适合不便接线或临时租赁设备追踪。",
        href: "/products/wireless",
      },
    ],
    workflow: [
      {
        title: "设备场景确认",
        description: "确认设备类型、供电方式、安装位置和工时统计需求。",
      },
      {
        title: "终端部署",
        description: "按有线、无线、强磁或隐藏安装方式完成设备部署。",
      },
      {
        title: "项目规则配置",
        description: "配置工地围栏、租赁期限、异常移动和离线提醒。",
      },
      {
        title: "报表交付",
        description: "输出设备位置、工时、报警和项目使用记录。",
      },
    ],
  },
  {
    slug: "fuel-abnormal",
    title: "油耗监测与异常用车管理",
    menuDescription: "油耗监测、异常报警、成本控制",
    summary:
      "结合油位传感器与 GPS 终端，监控油耗变化、异常耗油、疑似偷油和车辆使用情况。",
    image: "/images/applications/realistic-logistics-fleet.png",
    visual: "fuel",
    tags: ["油耗监测", "异常报警", "成本控制"],
    href: "/solutions/fuel-abnormal",
    heroTitle: "油耗监测与异常用车管控方案",
    heroDescription:
      "面向货运车辆、工程车辆、客运车辆和油耗敏感型车队，结合 GPS 终端、油位传感器、超声波油耗设备和平台报表，实现油位变化、异常耗油、疑似偷油和车辆使用情况监测。",
    overviewTitle: "围绕油位、里程和异常事件降低运营成本",
    overview:
      "油耗管理不仅需要定位车辆，还需要将油位变化、里程、轨迹和报警事件关联起来。方案可通过油位传感器、超声波设备或油液监测 GPS 终端接入平台，辅助企业识别异常耗油、疑似偷油、路线异常和非计划用车。",
    painPoints: [
      "油费占运营成本比例高，异常耗油难以及时识别",
      "油位变化、车辆里程和行驶轨迹没有统一关联",
      "疑似偷油、异常加油或非计划用车缺少报警证据",
      "油耗报表需要与车队、项目或客户维度关联统计",
    ],
    capabilities: [
      {
        title: "油位变化监测",
        description: "监测油位曲线、加油、耗油和异常下降趋势。",
      },
      {
        title: "轨迹关联",
        description: "将油耗变化与车辆路线、里程和停留点关联分析。",
      },
      {
        title: "异常报警",
        description: "针对疑似偷油、异常耗油、超速和越界进行提醒。",
      },
      {
        title: "成本报表",
        description: "按车辆、车队、线路和项目输出油耗管理数据。",
      },
    ],
    recommendedProducts: [
      {
        title: "油耗检测追踪器",
        description: "适合油位传感器、超声波油耗和油液监测 GPS 项目。",
        href: "/products/fuel-monitoring",
      },
      {
        title: "有线追踪器",
        description: "适合车队长期在线和油耗数据联动管理。",
        href: "/products/hardwired",
      },
      {
        title: "平台能力",
        description: "可在平台中查看轨迹、报警、报表和 API 数据接口。",
        href: "/platform",
      },
    ],
    workflow: [
      {
        title: "车辆与油箱确认",
        description: "确认车辆类型、油箱结构、传感器安装方式和数据接口。",
      },
      {
        title: "设备安装校准",
        description: "完成油位传感器或超声波设备安装，并进行油位标定。",
      },
      {
        title: "报警规则设置",
        description: "配置异常耗油、疑似偷油、断电、超速和围栏规则。",
      },
      {
        title: "油耗报表上线",
        description: "按车辆、项目、线路和时间输出油耗与异常事件报表。",
      },
    ],
  },
  {
    slug: "livestock-farm",
    title: "牲畜与农牧场定位",
    menuDescription: "牲畜定位、放牧管理、离群提醒",
    summary:
      "面向牧场、农场和放牧场景，支持动物位置追踪、活动范围监控和异常离群提醒。",
    image: "/images/products/categories/asset-container-location.jpg",
    visual: "livestock",
    tags: ["牲畜定位", "放牧管理", "离群提醒"],
    href: "/solutions/livestock-farm",
    heroTitle: "牲畜与农牧场 GPS 放牧管理方案",
    heroDescription:
      "面向牛羊养殖、牧场、农场和放牧区域，提供项圈式、太阳能和防水盒定位终端，结合平台电子围栏、离群提醒和活动范围管理，帮助农牧场提升可视化管理能力。",
    overviewTitle: "让牛羊位置、活动范围和离群状态实时可见",
    overview:
      "农牧场场景通常区域大、人员巡查成本高、牲畜分散且容易离群。方案通过牛羊项圈、太阳能牲畜追踪器和防水盒追踪器，把牲畜位置、活动范围、离群状态和历史轨迹接入平台，辅助巡牧和资产管理。",
    painPoints: [
      "放牧区域大，人工巡查成本高",
      "牛羊离群或越界后难以及时发现",
      "户外设备需要防水、防尘和长时间供电",
      "牧场需要按区域、群组和动物编号管理",
    ],
    capabilities: [
      {
        title: "牲畜定位",
        description: "查看牛羊当前位置、活动范围和历史轨迹。",
      },
      {
        title: "电子围栏",
        description: "按牧场、围栏区和禁入区设置进出提醒。",
      },
      {
        title: "离群提醒",
        description: "发现离开群组、越界或异常停留时推送提醒。",
      },
      {
        title: "长续航户外部署",
        description: "支持太阳能、低功耗和户外防护设备选型。",
      },
    ],
    recommendedProducts: [
      {
        title: "智慧放牧追踪器",
        description: "适合牛羊项圈、太阳能牲畜追踪器和防水盒追踪器。",
        href: "/products/grazing",
      },
      {
        title: "太阳能追踪器",
        description: "适合户外长期部署和远端资产位置追踪。",
        href: "/products/solar",
      },
      {
        title: "无线追踪器",
        description: "适合灵活部署、巡牧设备和移动资产管理。",
        href: "/products/wireless",
      },
    ],
    workflow: [
      {
        title: "牧场区域确认",
        description: "确认放牧面积、网络覆盖、动物数量和佩戴方式。",
      },
      {
        title: "终端与佩戴测试",
        description: "按牛羊种类、续航和户外防护需求选择合适设备。",
      },
      {
        title: "围栏规则设置",
        description: "配置牧场边界、禁入区、分组和离群提醒。",
      },
      {
        title: "运营巡查上线",
        description: "通过平台和移动端查看牲畜位置、报警和历史轨迹。",
      },
    ],
  },
  {
    slug: "oem-odm-platform",
    title: "OEM/ODM 与平台集成",
    menuDescription: "硬件定制、API 接口、私有化部署",
    summary:
      "为品牌商、渠道商和集成商提供硬件定制、平台对接、API 接口和私有化部署支持。",
    image: "/images/applications/realistic-engineering-vehicles.png",
    visual: "integration",
    tags: ["OEM/ODM", "API 接口", "平台集成"],
    href: "/solutions/oem-odm-platform",
    heroTitle: "OEM/ODM 与定位平台集成方案",
    heroDescription:
      "面向品牌商、渠道商、系统集成商和项目客户，提供硬件终端选型、外观与功能定制、平台对接、API 数据接口、私有化部署和多语言独立站展示支持。",
    overviewTitle: "从硬件终端到客户系统的项目化集成",
    overview:
      "该方案面向需要品牌化、渠道化或系统集成的客户，重点支持硬件型号组合、固件功能、平台对接、API 接口、数据字段、账号权限和私有化部署。企业可以按目标市场、客户系统和业务流程定制定位管理方案。",
    painPoints: [
      "渠道商需要统一品牌形象和产品资料",
      "客户已有 ERP、TMS、租赁系统或自建平台需要对接定位数据",
      "不同项目对硬件外观、功能、报警和数据字段要求不同",
      "跨区域客户需要多语言、多市场和多权限支持",
    ],
    capabilities: [
      {
        title: "硬件组合选型",
        description: "根据车辆、资产、油耗、牲畜和人员场景组合终端型号。",
      },
      {
        title: "API 数据接口",
        description: "支持位置、轨迹、报警、设备状态和报表数据对接。",
      },
      {
        title: "平台品牌化",
        description: "支持账号体系、视觉标识、语言和客户权限配置。",
      },
      {
        title: "私有化部署",
        description: "按项目需求评估云端部署、私有化部署和集成边界。",
      },
    ],
    recommendedProducts: [
      {
        title: "全产品体系",
        description: "根据客户场景组合有线、无线、资产、油耗、牲畜和人员产品。",
        href: "/products",
      },
      {
        title: "平台能力",
        description: "查看实时定位、轨迹、报警、报表和 API 接口能力。",
        href: "/platform",
      },
      {
        title: "SIM卡",
        description: "用于 GPS 终端联网、跨区域数据流量和设备激活支持。",
        href: "/products/sim-card",
      },
    ],
    workflow: [
      {
        title: "业务与市场确认",
        description: "确认目标国家、客户行业、设备清单和平台接入边界。",
      },
      {
        title: "方案与样机评估",
        description: "提供型号组合、功能配置、资料下载和样机测试建议。",
      },
      {
        title: "接口与品牌配置",
        description: "对接 API 字段、平台权限、品牌视觉和多语言内容。",
      },
      {
        title: "项目上线支持",
        description: "协助设备批量上线、数据验证、客户培训和后续迭代。",
      },
    ],
  },
];

export const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "Products",
    href: "/products",
    children: productsData.products.map((product) => ({
      label: product.name,
      href: `/products/${product.slug}`,
      description: `${getCategoryName(product.category)} tracker category`,
    })),
  },
  {
    label: "Solutions",
    href: "/solutions",
    children: solutionDetails.map((solution) => ({
      label: solution.title,
      href: solution.href,
      description: solution.menuDescription,
    })),
  },
  {
    label: "全球案例",
    href: "/cases/videos",
    showOverview: false,
    dropdownVariant: "case",
    children: caseMenuItems.map((item) => ({
      label: item.label,
      href: item.href,
      description: item.description,
    })),
  },
  {
    label: "Platform",
    href: "/platform",
  },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const productScenarioTagMap: Record<string, string[]> = {
  hardwired: ["物流车队", "租赁车辆", "企业车队"],
  asset: ["集装箱", "工具设备", "跨境资产"],
  "obd-cigarette-lighter": ["临时车队", "私家车", "免安装"],
  "smart-grazing": ["牧场", "农场", "放牧区"],
  "fuel-monitoring": ["货车", "客车", "工程设备"],
  "bicycle-two-wheeler": ["两轮车", "电动车", "山地车"],
  wireless: ["移动资产", "临时车辆", "设备防丢"],
  "bluetooth-beacon": ["仓储", "工具", "室内资产"],
  solar: ["渔船", "集装箱", "户外资产"],
  pet: ["宠物", "猎犬", "户外活动"],
  personal: ["巡检人员", "老人看护", "SOS 报警"],
  "sim-card": ["全球联网", "平台接入", "物联网通信"],
};

function getProductScenarioTags(slug: string) {
  return productScenarioTagMap[slug] ?? ["定位管理", "平台接入", "项目交付"];
}

export const products: Product[] = [
  ...productsData.products.map((product) => ({
    slug: product.slug,
    name: product.name,
    category: getCategoryName(product.category),
    summary: product.shortDescription,
    image: product.image,
    heroImage: "heroImage" in product ? product.heroImage : undefined,
    icon: product.icon as ProductIcon,
    scenarioTags: getProductScenarioTags(product.slug),
    features: product.features,
    specs: product.specifications,
    children: product.children,
  })),
];

export const solutions: Solution[] = solutionDetails.map(
  ({ title, summary, image, visual, tags, href }) => ({
    title,
    summary,
    image,
    visual,
    tags,
    href,
  }),
);

export const capabilityItems = [
  "设备接入",
  "云端管理",
  "移动端应用",
  "API 集成",
] as const;

export const platformItems: PlatformItem[] = [
  {
    title: "设备接入层",
    description:
      "支持 GPS 终端、OBD、资产设备、油位传感器和牲畜定位设备接入。",
  },
  {
    title: "云端平台层",
    description:
      "统一管理实时位置、历史轨迹、设备状态、电子围栏和异常报警。",
  },
  {
    title: "业务应用层",
    description:
      "面向调度中心、运营团队、管理人员和客户移动端提供可视化操作入口。",
  },
  {
    title: "数据集成层",
    description:
      "通过 API 与 ERP、TMS、租赁系统、客户自有平台或第三方系统对接。",
  },
];

export const featureItems: FeatureItem[] = [
  {
    title: "实时定位",
    description: "秒级更新车辆、设备和资产位置，支持地图可视化管理。",
    icon: "location",
  },
  {
    title: "轨迹回放",
    description: "查询历史路线、停留时间、行驶里程和异常轨迹。",
    icon: "route",
  },
  {
    title: "电子围栏",
    description: "设置区域边界，进入或离开指定范围自动触发提醒。",
    icon: "fence",
  },
  {
    title: "异常报警",
    description: "支持震动、断电、超速、离线、异常移动等多种报警类型。",
    icon: "alert",
  },
  {
    title: "油耗监测",
    description: "结合油位传感器，帮助企业识别异常耗油和疑似偷油行为。",
    icon: "fuel",
  },
  {
    title: "移动端 APP",
    description: "支持手机端查看位置、报警、车辆状态和常用管理功能。",
    icon: "app",
  },
  {
    title: "Web 管理平台",
    description: "适合调度中心、运营团队和管理人员统一查看设备数据。",
    icon: "web",
  },
  {
    title: "API 数据接口",
    description: "支持与客户自有系统、ERP、TMS、租赁系统或第三方平台对接。",
    icon: "api",
  },
];

export const footerColumns: FooterColumn[] = [
  {
    title: "Pages",
    links: [
      { label: "Home", href: "/" },
      { label: "Products", href: "/products" },
      { label: "Solutions", href: "/solutions" },
      { label: "Platform", href: "/platform" },
      { label: "About", href: "/about" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Products",
    links: products.map((product) => ({
      label: product.name,
      href: `/products/${product.slug}`,
    })),
  },
  {
    title: "Solutions",
    links: solutions.map((solution) => ({
      label: solution.title,
      href: solution.href,
    })),
  },
  {
    title: "Platform",
    links: platformItems.map((item) => ({
      label: item.title,
      href: "/platform",
    })),
  },
];
