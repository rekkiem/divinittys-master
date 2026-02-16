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
  // Añade esto para asegurar que Prisma se cargue correctamente
  serverExternalPackages: ["@prisma/client"],
};

export default nextConfig;