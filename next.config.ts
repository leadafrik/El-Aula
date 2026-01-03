import type { NextConfig } from "next";

const config: NextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [],
  },
  headers: async () => {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "Content-Security-Policy",
            value: "default-src 'self' https:; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com https://*.vercel.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https:; connect-src 'self' https:; frame-ancestors 'none'",
          },
        ],
      },
    ];
  },
};

export default config;
