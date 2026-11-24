import type { Metadata } from "next";

export const siteUrl = "https://www.567gps.com";
export const siteName = "塞弗亚 SAIFUYA";
export const siteLogo = "/images/brand/saifuya-logo.png";
export const siteCover = "/images/hero/global-gps-network-bg.png";

export function absoluteSiteUrl(path: string) {
  return new URL(path, siteUrl).href;
}

export function pageMetadata({
  path,
  title,
  description,
  image = siteCover,
}: {
  path: string;
  title: string;
  description: string;
  image?: string;
}): Metadata {
  const url = absoluteSiteUrl(path);

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      locale: "zh_CN",
      siteName,
      url,
      title,
      description,
      images: [{ url: absoluteSiteUrl(image) }],
    },
  };
}
