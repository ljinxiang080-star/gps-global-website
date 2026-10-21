import countryVideos from "@/data/country-videos.json";

export type CountryVideoCase = {
  slug: string;
  country: string;
  countryCn: string;
  region: string;
  title: string;
  summary: string;
  scenario: string;
  industry: string;
  thumbnail: string;
  tags: string[];
  videoUrl?: string;
  youtubeId?: string;
  youtubeEmbedAllowed?: boolean;
  durationSeconds?: number;
  tiktokUrl?: string;
  shortsUrl?: string;
  status: "ready" | "coming-soon";
};

export type IndustryImageCase = {
  slug: string;
  industry: string;
  title: string;
  summary: string;
  thumbnail: string;
  gallery: string[];
  tags: string[];
  products: string[];
};

export const caseMenuItems = [
  {
    label: "各国视频案例",
    href: "/cases/videos",
    description:
      "按国家和地区查看 GPS 平台与手机端的英文操作演示。",
  },
  {
    label: "行业图片案例",
    href: "/cases/images",
    description:
      "按行业场景查看车辆、资产、工程机械、农牧场和油耗监测项目图片。",
  },
] as const;

export const countryVideoCases: CountryVideoCase[] = countryVideos.map((item) => ({
  ...item,
  status: "ready",
}));

export const industryImageCases: IndustryImageCase[] = [
  {
    slug: "logistics-fleet-image-case",
    industry: "物流车队",
    title: "物流车队定位管理图片案例",
    summary: "展示物流车辆安装 GPS 终端、平台查看车辆位置和路线管理场景。",
    thumbnail: "/images/cases/images/logistics-fleet.jpg",
    gallery: [
      "/images/cases/images/logistics-fleet-01.jpg",
      "/images/cases/images/logistics-fleet-02.jpg",
      "/images/cases/images/logistics-fleet-03.jpg",
    ],
    tags: ["物流车队", "实时定位", "轨迹回放", "电子围栏"],
    products: ["4G 有线定位器", "云端平台", "移动端 APP"],
  },
  {
    slug: "rental-vehicle-image-case",
    industry: "租赁车辆",
    title: "租赁车辆定位与风控图片案例",
    summary: "展示租赁车辆定位终端安装、电子围栏和异常用车管理场景。",
    thumbnail: "/images/cases/images/rental-vehicles.jpg",
    gallery: [
      "/images/cases/images/rental-vehicles-01.jpg",
      "/images/cases/images/rental-vehicles-02.jpg",
      "/images/cases/images/rental-vehicles-03.jpg",
    ],
    tags: ["租赁车辆", "风控管理", "异常报警", "电子围栏"],
    products: ["断油断电定位器", "Web 平台", "移动端 APP"],
  },
  {
    slug: "enterprise-vehicle-image-case",
    industry: "企业车辆",
    title: "企业车辆定位管理图片案例",
    summary: "展示企业车辆、公务车、服务车和运维车辆定位管理应用。",
    thumbnail: "/images/cases/images/enterprise-vehicles.jpg",
    gallery: [
      "/images/cases/images/enterprise-vehicles-01.jpg",
      "/images/cases/images/enterprise-vehicles-02.jpg",
    ],
    tags: ["企业车辆", "车辆管理", "路线查询", "异常提醒"],
    products: ["4G 有线定位器", "Web 平台"],
  },
  {
    slug: "construction-machinery-image-case",
    industry: "工程车辆",
    title: "工程车辆与机械设备图片案例",
    summary: "展示挖掘机、货车、工程设备定位、工时统计和异常移动管理。",
    thumbnail: "/images/cases/images/construction-machinery.jpg",
    gallery: [
      "/images/cases/images/construction-machinery-01.jpg",
      "/images/cases/images/construction-machinery-02.jpg",
    ],
    tags: ["工程车辆", "工程机械", "工时统计", "设备定位"],
    products: ["工程机械追踪器", "4G 有线防水定位器"],
  },
];

export const countryVideoCaseRegions = Array.from(
  new Set(countryVideoCases.map((caseItem) => caseItem.region)),
);

export const countryVideoCaseCountries = Array.from(
  new Set(countryVideoCases.map((caseItem) => caseItem.countryCn)),
);

export const industryImageCaseIndustries = Array.from(
  new Set(industryImageCases.map((caseItem) => caseItem.industry)),
);
