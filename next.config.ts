import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/products/grazing",
        destination: "/products/smart-grazing",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
