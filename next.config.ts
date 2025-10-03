import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      { source: "/app", destination: "/app/index.html" },
      { source: "/app/", destination: "/app/index.html" },
    ];
  },
  async headers() {
    return [
      {
        source: "/app/:path*",
        headers: [
          { key: "Cross-Origin-Embedder-Policy", value: "require-corp" },
          { key: "Cross-Origin-Opener-Policy", value: "same-origin" },
        ],
      },
    ];
  },
};

export default nextConfig;
