import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export',
  images: {
    loader: "custom",
    loaderFile: './imageloader.ts'
  },
};

export default nextConfig;
