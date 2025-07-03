import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    // ✅ Enables Turbopack (now stable, no longer experimental)
  },
  images: {
    domains: [], // Add domains here for <Image src="..."> external sources
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.(png|jpe?g|gif|svg)$/i,
      type: "asset/resource",
    });
    return config;
  },
};

export default nextConfig;
