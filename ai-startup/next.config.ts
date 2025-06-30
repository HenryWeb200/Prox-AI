import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    // ✅ Enables Turbopack (now stable, no longer experimental)
  },
  images: {
    domains: [], // Add domains here for <Image src="..."> external sources
  },
};

export default nextConfig;
