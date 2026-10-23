import { initOpenNextCloudflareForDev } from "@opennextjs/cloudflare";

/** @type {import("next").NextConfig} */
const nextConfig = {
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.module.rules.push({
        test: /\.md$/,
        type: "asset/source",
      });
    }

    return config;
  },
};

export default nextConfig;

initOpenNextCloudflareForDev();
