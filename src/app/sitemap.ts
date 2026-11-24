import type { MetadataRoute } from "next";
import { countryVideoDestinations } from "@/lib/case-data";
import { absoluteSiteUrl } from "@/lib/seo";
import { products, solutionDetails } from "@/lib/site-data";

const mainPages = [
  "/",
  "/products",
  "/solutions",
  "/platform",
  "/cases/videos",
  "/cases/images",
  "/about",
  "/contact",
  "/privacy",
  "/legal",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const productPaths = products.flatMap(({ slug, children }) => [
    `/products/${slug}`,
    ...children.map((model) => `/products/${slug}/${model.slug}`),
  ]);
  const paths = [
    ...mainPages,
    ...productPaths,
    ...solutionDetails.map(({ href }) => href),
    ...countryVideoDestinations.map(({ path }) => path),
  ];

  return paths.map((path) => ({ url: absoluteSiteUrl(path) }));
}
