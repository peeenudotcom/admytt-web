import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  // Marketing site is fully static-renderable; images are local PNGs with explicit dims.
  images: {
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
