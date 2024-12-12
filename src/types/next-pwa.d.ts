declare module "next-pwa" {
    import { NextConfig } from "next";
  
    interface PWAOptions {
      dest: string;
      disable?: boolean;
      register?: boolean;
      skipWaiting?: boolean;
      runtimeCaching?: any[];
      buildExcludes?: string[];
      fallbacks?: {
        image?: string;
        document?: string;
        font?: string;
        audio?: string;
        video?: string;
      };
      maximumFileSizeToCacheInBytes?: number;
      mode?: "production" | "development";
    }
  
    export default function withPWA(nextConfig: NextConfig & { pwa?: PWAOptions }): NextConfig;
  }
  