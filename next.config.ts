import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Emits a fully static site into ./out — no Node server needed at runtime.
  output: "export",

  // Static export has no Image Optimization API, so next/image must serve files as-is.
  images: { unoptimized: true },

  // Emits /about/index.html instead of /about.html so any static host serves it correctly.
  trailingSlash: true,
};

export default nextConfig;
