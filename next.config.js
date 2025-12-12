/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,

  experimental: {
    webpackBuildWorker: true
  },

  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.pdf$/i,
      type: "asset/source",
    });

    return config;
  },

  env: {
    BASE_URL: process.env.BASE_URL,
  },

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "img.shields.io",
      }
    ]
  }
};

module.exports = nextConfig;
