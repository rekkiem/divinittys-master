import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
    ],
  },
  experimental: {
    allowedDevOrigins: ["web-q5to7an1yfx2.up-de-fra1-k8s-1.apps.run-on-seenode.com"]
  },
};

export default nextConfig;
