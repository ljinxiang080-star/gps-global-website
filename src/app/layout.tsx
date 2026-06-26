import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { TranslationRuntime } from "@/components/TranslationRuntime";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.taxkjgps.com"),
  title: {
    default: "塞弗亚全球定位解决方案 | 深圳市通安星科技 GPS 官网",
    template: "%s | 塞弗亚全球定位解决方案",
  },
  description:
    "深圳市通安星科技提供 4G GPS 定位器、18GPS 云平台、移动端 APP 与 API 接口，面向车队、物流、租赁、工程机械、资产、油耗和农牧场项目提供全球定位管理方案。",
  keywords: [
    "GPS定位器",
    "18GPS平台",
    "车队管理",
    "资产追踪",
    "油耗监测",
    "深圳市通安星科技",
    "SAIFUYA",
  ],
  openGraph: {
    title: "塞弗亚全球定位解决方案 | 深圳市通安星科技 GPS 官网",
    description:
      "4G GPS 追踪器、18GPS 平台、移动端 APP 与 API 接口的一体化定位管理方案。",
    url: "https://www.taxkjgps.com",
    siteName: "塞弗亚全球定位解决方案",
    images: [
      {
        url: "/images/brand/saifuya-logo.png",
        width: 512,
        height: 512,
        alt: "塞弗亚全球定位解决方案",
      },
    ],
    locale: "zh_CN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" className="h-full antialiased" data-scroll-behavior="smooth">
      <body className="flex min-h-full flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <TranslationRuntime />
      </body>
    </html>
  );
}
