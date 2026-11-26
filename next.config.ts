import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/products/grazing",
        destination: "/products/smart-grazing",
        permanent: true,
      },
      ...[
        ["/index.asp", "/"],
        ["/about.asp", "/about"],
        ["/products.asp", "/products"],
        ["/products-info.asp", "/products"],
        ["/solution.asp", "/solutions"],
        ["/contact.asp", "/contact"],
        ["/feedback.asp", "/contact"],
        ["/web.asp", "/platform"],
      ].map(([source, destination]) => ({
        source,
        destination,
        permanent: true,
      })),
    ];
  },
};

export default nextConfig;
