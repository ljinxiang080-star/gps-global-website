import type { Metadata } from "next";

// Each deployment publishes the same complete catalogue on its own domain.
export const siteUrl = new URL(
  process.env.NEXT_PUBLIC_SITE_URL || "https://www.567gps.com",
).origin;
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
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [absoluteSiteUrl(image)],
    },
  };
}
