import Image from "next/image";
import { SectionHeader } from "@/components/SectionHeader";

type ContactIconName =
  | "website"
  | "email"
  | "phone"
  | "whatsapp"
  | "address";

type ContactItem = {
  icon: ContactIconName;
  label: string;
  value: string;
  helper?: string;
  href?: string;
};

const contactItems: ContactItem[] = [
  {
    icon: "website",
    label: "官网",
    value: "http://www.taxkjgps.com/",
    href: "http://www.taxkjgps.com/",
  },
  {
    icon: "email",
    label: "邮箱",
    value: "1294571630@qq.com",
    href: "mailto:1294571630@qq.com",
  },
  {
    icon: "phone",
    label: "电话 / 微信",
    value: "+86 13413412015",
    helper: "微信同号",
    href: "tel:+8613413412015",
  },
  {
    icon: "whatsapp",
    label: "WhatsApp",
    value: "+852 6612 1406",
    href: "https://wa.me/85266121406",
  },
  {
    icon: "address",
    label: "地址",
    value: "深圳市光明区光明街道东周社区璟丰路2580号璟霖大厦",
  },
];

const formFields = [
  {
    label: "姓名 / 公司名称",
    name: "name",
    hint: "请输入姓名或公司名称",
  },
  {
    label: "邮箱或 WhatsApp",
    name: "contact",
    hint: "请输入邮箱、WhatsApp 或微信",
  },
  {
    label: "国家 / 地区",
    name: "region",
    hint: "例如：Brazil / Mexico / China",
  },
  {
    label: "关注产品",
    name: "product",
    hint: "例如：有线追踪器 / OBD / 资产追踪器",
  },
];

const officeCards = [
  {
    title: "平台演示与方案沟通",
    description:
      "结合客户车辆、资产、农牧场或油耗监测项目需求，提供终端选型、平台功能演示和接入建议。",
    image: "/images/contact/office-platform-monitoring.jpg",
    alt: "GPS 平台演示与客户方案沟通办公场景",
  },
  {
    title: "项目跟进与服务支持",
    description:
      "围绕样品测试、批量交付、平台账号配置和售后问题跟进，帮助客户更快落地定位管理项目。",
    image: "/images/contact/office-team-space.jpg",
    alt: "GPS 定位方案团队办公支持场景",
  },
];

const processSteps = [
  {
    title: "需求确认",
    description: "确认使用国家、设备数量、安装环境、网络制式和平台接入方式。",
  },
  {
    title: "型号推荐",
    description: "根据车辆、资产、牲畜、人员或油耗场景推荐合适 GPS 终端。",
  },
  {
    title: "样品测试",
    description: "支持样品测试、平台演示、功能确认和客户系统对接评估。",
  },
  {
    title: "批量交付",
    description: "对接订单、资料、包装、物流和后续平台使用支持。",
  },
];

function ContactIcon({ name }: { name: ContactIconName }) {
  const paths: Record<ContactIconName, string> = {
    website:
      "M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18Zm0 0c2.6 2.3 4 5.3 4 9s-1.4 6.7-4 9m0-18c-2.6 2.3-4 5.3-4 9s1.4 6.7 4 9M3.6 9h16.8M3.6 15h16.8",
    email:
      "M4 6.5h16v11H4v-11Zm1.2 1.2 6.8 5.1 6.8-5.1M6.8 16l3.5-3M17.2 16l-3.5-3",
    phone:
      "M7.5 4.5 10 7c.4.4.5 1 .2 1.5l-1 1.7a12 12 0 0 0 4.6 4.6l1.7-1c.5-.3 1.1-.2 1.5.2l2.5 2.5c.4.4.5 1 .2 1.5-.7 1.5-2.2 2.5-3.8 2.5C9.2 21 3 14.8 3 8.1c0-1.6 1-3.1 2.5-3.8.5-.3 1.1-.2 1.5.2Z",
    whatsapp:
      "M4.5 19.5 5.8 16A8 8 0 1 1 9 19.2l-4.5.3Zm5-11c-.3.4-.5.7-.5 1.1 0 1.9 2.4 4.4 4.4 4.4.4 0 .8-.1 1.1-.5l.5-.6c.2-.3.1-.7-.2-.8l-1.4-.7c-.2-.1-.5-.1-.7.1l-.5.5c-.9-.4-1.7-1.2-2.1-2.1l.5-.5c.2-.2.2-.5.1-.7L10 8.7c-.1-.3-.5-.4-.8-.2l.3 0Z",
    address:
      "M12 21s6-5.4 6-11a6 6 0 0 0-12 0c0 5.6 6 11 6 11Zm0-8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z",
  };

  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.8"
    >
      <path d={paths[name]} />
    </svg>
  );
}

function ContactValue({ item }: { item: ContactItem }) {
  const content = (
    <>
      <span className="font-semibold text-slate-950">{item.value}</span>
      {item.helper ? (
        <span className="ml-2 rounded-full bg-blue-50 px-2 py-0.5 text-xs font-semibold text-[#0b68ff]">
          {item.helper}
        </span>
      ) : null}
    </>
  );

  if (!item.href) return <p className="leading-7">{content}</p>;

  return (
    <a
      href={item.href}
      target={item.href.startsWith("http") ? "_blank" : undefined}
      rel={item.href.startsWith("http") ? "noreferrer" : undefined}
      className="leading-7 transition hover:text-[#0b68ff]"
    >
      {content}
    </a>
  );
}

export default function ContactPage() {
  return (
    <>
      <section className="relative isolate overflow-hidden bg-[#061b39] py-20 text-white lg:py-28">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_78%_20%,rgba(11,104,255,0.45),transparent_34%),linear-gradient(120deg,#06162f_0%,#082a55_48%,#061936_100%)]" />
        <div className="absolute inset-x-0 bottom-0 -z-10 h-40 bg-gradient-to-t from-[#041226] to-transparent" />
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-[0.82fr_1.18fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.26em] text-cyan-300">
              联系我们
            </p>
            <h1 className="mt-5 max-w-3xl text-4xl font-semibold tracking-normal md:text-5xl">
              获取 GPS 定位解决方案与产品报价
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-blue-100">
              告诉我们项目场景、设备数量、目标地区和平台需求，我们将协助推荐合适的 GPS 终端、云端平台、移动端 APP 与 API 接入方案。
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href="#inquiry"
                className="rounded-md bg-[#0b68ff] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#0056df]"
              >
                提交项目需求
              </a>
              <a
                href="https://wa.me/85266121406"
                target="_blank"
                rel="noreferrer"
                className="rounded-md border border-white/35 px-6 py-3 text-sm font-semibold text-white transition hover:border-cyan-200 hover:bg-white/10"
              >
                WhatsApp 联系
              </a>
            </div>
          </div>

          <div className="rounded-xl border border-white/15 bg-white/10 p-3 shadow-2xl shadow-blue-950/40 backdrop-blur">
            <Image
              src="/images/contact/company-profile-collage.png"
              alt="赛弗亚 GPS 定位解决方案公司介绍"
              width={1365}
              height={708}
              priority
              sizes="(min-width: 1024px) 58vw, 100vw"
              className="aspect-[16/8.3] w-full rounded-lg object-cover"
            />
          </div>
        </div>
      </section>

      <section id="inquiry" className="bg-slate-50 py-16 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="space-y-6">
            <SectionHeader
              eyebrow="Contact"
              title="直接联系销售与项目顾问"
              description="可通过官网、邮箱、电话、微信或 WhatsApp 联系我们，也可以扫码添加 WhatsApp 快速沟通。"
            />

            <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="grid gap-5">
                {contactItems.map((item) => (
                  <div
                    key={item.label}
                    className="grid grid-cols-[2.75rem_1fr] gap-4 border-b border-slate-100 pb-5 last:border-b-0 last:pb-0"
                  >
                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-blue-50 text-[#0b68ff]">
                      <ContactIcon name={item.icon} />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-slate-500">
                        {item.label}
                      </p>
                      <div className="mt-1 text-sm text-slate-700">
                        <ContactValue item={item} />
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 grid items-center gap-5 rounded-lg border border-blue-100 bg-blue-50/70 p-5 sm:grid-cols-[8.5rem_1fr]">
                <Image
                  src="/images/contact/whatsapp-qr.png"
                  alt="WhatsApp 联系二维码"
                  width={220}
                  height={220}
                  sizes="136px"
                  className="h-32 w-32 rounded-md border border-white bg-white object-contain p-2 shadow-sm"
                />
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#0b68ff]">
                    WhatsApp QR Code
                  </p>
                  <h2 className="mt-2 text-xl font-semibold text-slate-950">
                    扫码快速联系
                  </h2>
                  <p className="mt-2 text-sm leading-7 text-slate-600">
                    适合产品选型、批量报价、样品测试、平台演示和国际项目沟通。
                  </p>
                </div>
              </div>
            </div>
          </div>

          <form
            action="mailto:1294571630@qq.com"
            method="post"
            encType="text/plain"
            className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm lg:p-8"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#0b68ff]">
              Inquiry Form
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-normal text-slate-950">
              留下项目需求
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-600">
              请填写基本联系方式和项目需求，我们会根据应用场景、安装环境、网络地区和数量需求提供选型建议。
            </p>

            <div className="mt-8 grid gap-5 md:grid-cols-2">
              {formFields.map((field) => (
                <label key={field.name} className="grid gap-2">
                  <span className="text-sm font-semibold text-slate-700">
                    {field.label}
                  </span>
                  <input
                    name={field.name}
                    aria-label={field.label}
                    className="h-12 rounded-md border border-slate-200 bg-white px-4 text-sm text-slate-950 outline-none transition focus:border-[#0b68ff] focus:ring-4 focus:ring-blue-100"
                    type="text"
                  />
                  <span className="text-xs leading-5 text-slate-500">
                    {field.hint}
                  </span>
                </label>
              ))}
              <label className="grid gap-2">
                <span className="text-sm font-semibold text-slate-700">
                  预计数量
                </span>
                <select
                  name="quantity"
                  className="h-12 rounded-md border border-slate-200 bg-white px-4 text-sm text-slate-950 outline-none transition focus:border-[#0b68ff] focus:ring-4 focus:ring-blue-100"
                  defaultValue=""
                >
                  <option value="" disabled>
                    请选择数量范围
                  </option>
                  <option>1-10 台样品测试</option>
                  <option>10-100 台项目部署</option>
                  <option>100-1000 台批量采购</option>
                  <option>1000 台以上渠道合作</option>
                </select>
              </label>
              <label className="grid gap-2">
                <span className="text-sm font-semibold text-slate-700">
                  需求类型
                </span>
                <select
                  name="requestType"
                  className="h-12 rounded-md border border-slate-200 bg-white px-4 text-sm text-slate-950 outline-none transition focus:border-[#0b68ff] focus:ring-4 focus:ring-blue-100"
                  defaultValue=""
                >
                  <option value="" disabled>
                    请选择需求类型
                  </option>
                  <option>产品报价</option>
                  <option>样品测试</option>
                  <option>平台演示</option>
                  <option>OEM/ODM 定制</option>
                  <option>API / 系统对接</option>
                </select>
              </label>
              <label className="grid gap-2 md:col-span-2">
                <span className="text-sm font-semibold text-slate-700">
                  项目说明
                </span>
                <textarea
                  name="message"
                  aria-label="项目说明"
                  className="min-h-36 rounded-md border border-slate-200 bg-white px-4 py-3 text-sm text-slate-950 outline-none transition focus:border-[#0b68ff] focus:ring-4 focus:ring-blue-100"
                />
                <span className="text-xs leading-5 text-slate-500">
                  请简单描述车辆类型、资产类型、安装方式、平台功能、目标市场或其他项目要求。
                </span>
              </label>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <button
                type="submit"
                className="h-12 rounded-md bg-[#0b68ff] px-7 text-sm font-semibold text-white transition hover:bg-[#0056df]"
              >
                提交询盘
              </button>
              <p className="text-sm text-slate-500">
                也可以直接通过 WhatsApp 或邮箱发送需求。
              </p>
            </div>
          </form>
        </div>
      </section>

      <section className="bg-white py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeader
            eyebrow="Office"
            title="办公与服务支持"
            description="从方案沟通、平台演示到订单交付，围绕 B2B GPS 定位项目提供清晰的沟通与跟进流程。"
          />

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {officeCards.map((card) => (
              <article
                key={card.title}
                className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm"
              >
                <Image
                  src={card.image}
                  alt={card.alt}
                  width={1230}
                  height={1230}
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="aspect-[16/10] w-full object-cover"
                />
                <div className="p-6">
                  <h2 className="text-xl font-semibold text-slate-950">
                    {card.title}
                  </h2>
                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {card.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#061b39] py-16 text-white lg:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">
                Process
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-normal md:text-4xl">
                从需求到交付的项目沟通流程
              </h2>
              <p className="mt-5 text-sm leading-7 text-blue-100">
                适用于车队、物流、租赁、资产追踪、智慧放牧、油耗监测、人员定位和海外渠道合作。
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {processSteps.map((step, index) => (
                <article
                  key={step.title}
                  className="rounded-xl border border-cyan-300/20 bg-white/8 p-5 shadow-sm backdrop-blur"
                >
                  <span className="text-sm font-semibold text-cyan-300">
                    0{index + 1}
                  </span>
                  <h3 className="mt-3 text-lg font-semibold text-white">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-blue-100">
                    {step.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
