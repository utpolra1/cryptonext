/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config, { isServer }) => {
      if (!isServer) {
        config.resolve.fallback = {
          ...config.resolve.fallback,
          fs: false, // Lightweight Charts doesn’t need fs, but ensure no server-side deps interfere
        };
      }
      return config;
    },
  };
  
  module.exports = nextConfig;