import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "法律声明 | 深圳市通安星科技",
  description:
    "深圳市通安星科技有限公司官网法律声明，说明网站内容、知识产权、责任限制和使用规范。",
};

const legalSections = [
  {
    title: "一、网站所有权与适用范围",
    content:
      "本网站由深圳市通安星科技有限公司运营和维护。访问、浏览或使用本网站，即表示您理解并同意遵守本法律声明及网站相关规则。",
  },
  {
    title: "二、知识产权",
    content:
      "本网站展示的文字、页面设计、产品资料、图片、图形、图标、品牌名称、标识和其他内容，除另有说明外，均由深圳市通安星科技有限公司或相关权利人依法享有相应权益。未经授权，不得用于复制、传播、改编、商业展示或其他可能侵犯权利的用途。",
  },
  {
    title: "三、产品与资料说明",
    content:
      "网站中的 GPS 终端、18GPS 平台、移动端 APP、API 接口、行业方案、技术参数和下载资料用于产品选型和项目沟通参考。具体配置、网络制式、功能支持、交付内容和适用场景，应以双方确认的合同、规格书、报价单或项目文件为准。",
  },
  {
    title: "四、第三方链接",
    content:
      "本网站可能包含第三方网站、地图、视频、通信工具或外部资料链接。第三方内容由对应服务方负责，深圳市通安星科技有限公司不对第三方网站的信息准确性、安全性或可用性作出承诺。",
  },
  {
    title: "五、合理使用与禁止行为",
    content:
      "用户不得利用本网站从事破坏网站运行、干扰网络安全、恶意抓取数据、冒用他人身份、侵犯知识产权、发布违法信息或其他违反法律法规和商业诚信的行为。",
  },
  {
    title: "六、责任限制",
    content:
      "我们将尽力保持网站信息准确、及时和可访问，但不保证所有内容在任何时间均完全无误或不中断。因网络环境、第三方服务、不可抗力或用户不当使用造成的损失，深圳市通安星科技有限公司将在法律允许范围内不承担超出法定责任的赔偿义务。",
  },
  {
    title: "七、声明更新与联系",
    content:
      "深圳市通安星科技有限公司可根据业务发展、网站调整或法律要求更新本声明。若您对网站内容、知识产权、隐私或合规事项有疑问，请通过联系我们页面与我们沟通。",
  },
];

export default function LegalPage() {
  return (
    <>
      <section className="relative isolate overflow-hidden bg-[#061936] py-20 text-white lg:py-28">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_76%_18%,rgba(11,104,255,0.42),transparent_34%),linear-gradient(120deg,#06162f_0%,#082a55_50%,#061936_100%)]" />
        <div className="mx-auto max-w-7xl px-6">
          <p className="text-sm font-semibold uppercase tracking-[0.26em] text-cyan-300">
            Legal Notice
          </p>
          <h1 className="mt-5 max-w-4xl text-4xl font-semibold tracking-normal md:text-5xl">
            法律声明
          </h1>
          <p className="mt-6 max-w-3xl text-base leading-8 text-blue-100">
            本声明用于说明深圳市通安星科技有限公司官网内容、资料、知识产权和访问使用规则。网站信息仅作为业务沟通和产品选型参考，不构成最终合同承诺。
          </p>
          <p className="mt-4 text-sm text-blue-200">更新日期：2026 年 6 月 26 日</p>
        </div>
      </section>

      <section className="bg-slate-50 py-16 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 lg:grid-cols-[0.72fr_1.28fr]">
          <aside className="lg:sticky lg:top-28 lg:self-start">
            <div className="rounded-xl border border-blue-100 bg-white p-6 shadow-sm">
              <h2 className="text-lg font-semibold text-slate-950">
                法律与合规联系
              </h2>
              <p className="mt-4 text-sm leading-7 text-slate-600">
                如需反馈网站内容、品牌资料、隐私合规或知识产权问题，请通过联系页面提交信息。
              </p>
              <Link
                href="/contact"
                className="mt-6 inline-flex rounded-md bg-[#0b68ff] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#0056df]"
              >
                联系深圳市通安星科技
              </Link>
            </div>
          </aside>

          <div className="space-y-6">
            {legalSections.map((section) => (
              <article
                key={section.title}
                className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <h2 className="text-xl font-semibold text-slate-950">
                  {section.title}
                </h2>
                <p className="mt-4 text-sm leading-8 text-slate-600">
                  {section.content}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
