import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "res.cloudinary.com" },
    ],
  },
  // Esto soluciona el error de "Cannot find module" en Next.js 15/16
  serverExternalPackages: ["@prisma/client"],
};

export default nextConfig;