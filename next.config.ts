import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',  // This is better than 'standalone' for SPAs
  images: {
    unoptimized: true,  // Required for static export
  },
  // This ensures your app is treated as a client-side SPA
  trailingSlash: true,
};

export default nextConfig;