import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "隐私政策 | 深圳市通安星科技",
  description:
    "深圳市通安星科技有限公司官网隐私政策，说明我们如何收集、使用、保护和处理客户信息。",
};

const sections = [
  {
    title: "一、我们可能收集的信息",
    items: [
      "当您通过表单、邮箱、电话、WhatsApp 或微信联系我们时，我们可能收集姓名、公司名称、国家或地区、联系方式、项目需求、关注产品和询盘内容。",
      "当您咨询 GPS 终端、18GPS 平台、移动端 APP 或 API 接入方案时，我们可能记录设备数量、应用行业、安装环境、网络制式、平台功能需求和售后支持需求。",
      "当您访问网站时，我们可能通过服务器日志或基础分析工具收集浏览器类型、访问页面、访问时间、来源页面、设备类型和大致网络环境等信息，用于网站安全和体验优化。",
      "如您使用我们的平台或测试账号，相关设备状态、定位数据、轨迹记录、报警事件、账号配置和操作日志将仅用于平台演示、技术支持、项目交付和服务维护。",
    ],
  },
  {
    title: "二、信息使用目的",
    items: [
      "回复您的询盘、报价请求、样品测试、产品选型和方案咨询。",
      "为车队、物流、租赁、工程机械、资产追踪、油耗监测、农牧场定位等项目提供硬件终端、云端平台、移动端 APP 和 API 接入建议。",
      "进行订单沟通、交付跟进、技术支持、售后维护和客户服务。",
      "维护网站、平台和通信服务的稳定性、安全性，并改进页面内容、产品资料和服务流程。",
      "在法律法规允许或要求的范围内，用于合规审计、争议处理、安全风控和权利保护。",
    ],
  },
  {
    title: "三、信息共享与披露",
    items: [
      "我们不会出售您的个人信息或项目资料。",
      "为完成服务交付，我们可能在必要范围内与物流、云服务、邮件、网站托管、技术支持或支付结算等服务提供方共享有限信息，并要求其按照约定保护相关信息。",
      "如涉及经销商、系统集成商、项目合作伙伴或 OEM/ODM 合作，我们会在业务必要且合理的范围内沟通项目资料。",
      "在法律法规、司法机关、监管要求或保护公司及客户合法权益所必需的情况下，我们可能依法披露相关信息。",
    ],
  },
  {
    title: "四、Cookie 与网站技术",
    items: [
      "本网站可能使用 Cookie、日志文件或类似技术来保持基础访问功能、统计页面访问情况并提升网站体验。",
      "您可以通过浏览器设置管理或拒绝 Cookie，但部分页面功能可能因此受到影响。",
      "如页面包含第三方地图、视频、社交媒体或外部链接，其信息处理规则由相应第三方负责，建议您查看第三方隐私说明。",
    ],
  },
  {
    title: "五、信息存储与安全",
    items: [
      "我们会根据业务目的、合同履行、客户服务和法律合规要求，在必要期限内保存相关信息。",
      "我们采取合理的技术和管理措施保护信息安全，包括权限控制、内部流程管理、数据备份和访问记录等。",
      "互联网传输无法保证绝对安全，如发现异常风险，我们会在合理范围内采取补救措施并与相关方沟通。",
    ],
  },
  {
    title: "六、您的权利",
    items: [
      "您可以要求查询、更正、补充或删除您向我们提供的联系信息和项目资料。",
      "您可以撤回非必要营销沟通授权，或要求我们停止继续使用您的信息进行非必要联系。",
      "如您希望处理上述请求，请通过联系我们页面、邮箱或 WhatsApp 与我们沟通。为保障信息安全，我们可能需要验证您的身份或项目关系。",
    ],
  },
  {
    title: "七、政策更新",
    items: [
      "我们可能根据业务变化、平台服务升级或法律法规要求更新本隐私政策。",
      "更新后的政策将在本页面发布，并以页面标注日期为准。建议您定期查看本页面了解最新信息。",
    ],
  },
];

export default function PrivacyPage() {
  return (
    <>
      <section className="relative isolate overflow-hidden bg-[#061936] py-20 text-white lg:py-28">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_78%_16%,rgba(11,104,255,0.42),transparent_34%),linear-gradient(120deg,#06162f_0%,#082a55_50%,#061936_100%)]" />
        <div className="mx-auto max-w-7xl px-6">
          <p className="text-sm font-semibold uppercase tracking-[0.26em] text-cyan-300">
            Privacy Policy
          </p>
          <h1 className="mt-5 max-w-4xl text-4xl font-semibold tracking-normal md:text-5xl">
            隐私政策
          </h1>
          <p className="mt-6 max-w-3xl text-base leading-8 text-blue-100">
            深圳市通安星科技有限公司重视客户和访问者的信息安全。本政策说明我们在官网、询盘沟通、项目交付和平台支持过程中如何收集、使用、保存和保护相关信息。
          </p>
          <p className="mt-4 text-sm text-blue-200">更新日期：2026 年 6 月 26 日</p>
        </div>
      </section>

      <section className="bg-slate-50 py-16 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 lg:grid-cols-[0.72fr_1.28fr]">
          <aside className="lg:sticky lg:top-28 lg:self-start">
            <div className="rounded-xl border border-blue-100 bg-white p-6 shadow-sm">
              <h2 className="text-lg font-semibold text-slate-950">
                政策范围
              </h2>
              <p className="mt-4 text-sm leading-7 text-slate-600">
                适用于深圳市通安星科技官网、产品询盘、方案沟通、样品测试、18GPS 平台演示和客户支持相关的信息处理活动。
              </p>
              <Link
                href="/contact"
                className="mt-6 inline-flex rounded-md bg-[#0b68ff] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#0056df]"
              >
                联系我们
              </Link>
            </div>
          </aside>

          <div className="space-y-6">
            {sections.map((section) => (
              <article
                key={section.title}
                className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <h2 className="text-xl font-semibold text-slate-950">
                  {section.title}
                </h2>
                <ul className="mt-5 space-y-3 text-sm leading-7 text-slate-600">
                  {section.items.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#0b68ff]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
