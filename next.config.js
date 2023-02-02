/* eslint-disable global-require */
/* eslint-disable @typescript-eslint/no-var-requires */
const { PHASE_PRODUCTION_BUILD } = require('next/constants');

/** @type{import("next").NextConfig} */
const config = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    appDir: true,
  },
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'image.tmdb.org' },
      { protocol: 'https', hostname: 'rb.gy' },
    ],
  },
};

module.exports = (phase) => {
  switch (phase) {
    case PHASE_PRODUCTION_BUILD: {
      const withBundleAnalyzer = require('@next/bundle-analyzer')({
        enabled: process.env.ANALYZE === 'true',
      });

      return withBundleAnalyzer(config);
    }

    default:
      return config;
  }
};
