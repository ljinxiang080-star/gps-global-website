import { HeroBanner } from "@/components/HeroBanner";
import { ProductCard } from "@/components/ProductCard";
import { SectionHeader } from "@/components/SectionHeader";
import { products } from "@/lib/site-data";

export default function ProductsPage() {
  return (
    <>
      <HeroBanner
        compact
        eyebrow="产品中心"
        title="GPS 追踪器产品分类"
        description="按安装方式、供电方式、管理对象和联网需求选择合适终端，配合 18GPS 平台形成车辆、设备与资产管理方案。"
        imageSrc="/images/hero/global-gps-network-bg.png"
      />

      <section className="bg-white py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeader
            eyebrow="设备分类"
            title="按设备类型选择项目终端"
            description="产品分类用于终端选型，行业方案请从 Solutions 入口进入，平台能力请从 Platform 入口查看。"
          />

          <div className="mt-10 flex flex-wrap gap-3">
            {[
              "有线安装",
              "资产追踪",
              "OBD",
              "智慧放牧",
              "油耗监测",
              "两轮车",
              "无线部署",
              "蓝牙信标",
              "太阳能",
              "宠物",
              "人员",
              "SIM 联网",
            ].map((item, index) => (
              <button
                key={`${item}-${index}`}
                className="h-10 rounded-md border border-slate-200 bg-white px-4 text-sm font-medium text-slate-600 transition hover:border-[#0b68ff] hover:text-[#0b68ff]"
                type="button"
              >
                {item}
              </button>
            ))}
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
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
          <SectionHeader
            eyebrow="选型维度"
            title="按项目场景对比终端能力"
            description="从供电方式、安装方式、联网能力和平台接入角度快速判断产品类型，具体型号参数请进入类目页查看。"
          />
          <div className="mt-10 overflow-x-auto rounded-md border border-slate-200 bg-white shadow-sm">
            <div className="min-w-[820px]">
              <div className="grid grid-cols-4 bg-slate-100 text-sm font-semibold text-slate-700">
                <div className="p-4">选型维度</div>
                <div className="p-4">适合场景</div>
                <div className="p-4">终端类型</div>
                <div className="p-4">平台能力</div>
              </div>
              {[
                {
                  dimension: "车辆长期在线",
                  scenarios: "物流、租赁、企业车队、工程车辆",
                  devices: "有线、OBD、点烟器、两轮车",
                  capability: "实时定位、轨迹回放、电子围栏、异常报警",
                },
                {
                  dimension: "资产与设备防丢",
                  scenarios: "集装箱、工具、设备、高价值资产",
                  devices: "资产、无线、蓝牙信标、太阳能",
                  capability: "长续航、异常移动、区域追踪、低电报警",
                },
                {
                  dimension: "行业运营管理",
                  scenarios: "油耗、农牧场、人员安全、SIM 联网",
                  devices: "油耗检测、智慧放牧、人员、SIM卡",
                  capability: "油耗报表、离群提醒、SOS、API 数据接口",
                },
              ].map((row) => (
                <div
                  key={row.dimension}
                  className="grid grid-cols-4 border-t border-slate-200 text-sm text-slate-600"
                >
                  <div className="p-4 font-medium text-slate-900">{row.dimension}</div>
                  <div className="p-4">{row.scenarios}</div>
                  <div className="p-4">{row.devices}</div>
                  <div className="p-4">{row.capability}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
