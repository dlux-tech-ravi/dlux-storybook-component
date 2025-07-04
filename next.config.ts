import type { NextConfig } from "next";
import { fileURLToPath } from "url";
import path from "path";

const nextConfig: NextConfig = {
  reactStrictMode: true,

  webpack(config) {
    config.module.rules.push({
      test: /\.stories\.(js|jsx|ts|tsx|mdx)$/,
      use: 'null-loader',
    });

    return config;
  },
};

export default nextConfig;
