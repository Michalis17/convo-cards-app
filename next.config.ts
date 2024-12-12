import type { NextConfig } from "next";
import withPWA from "next-pwa";

const isDev = process.env.NODE_ENV === "development";

const nextConfig: NextConfig = withPWA({
  pwa: {
    dest: "public", // Directory where PWA assets (service worker, manifest) will be generated
    disable: isDev, // Disable PWA in development mode
  },
  reactStrictMode: true,
});

export default nextConfig;
