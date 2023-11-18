/** @type {import('next').NextConfig} */
const { PHASE_DEVELOPMENT_SERVER } = require('next/constants')

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: { unoptimized: true },
  assetPrefix: "/portfolio-v3/",
  basePath: "/portfolio-v3",
  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      '/': { page: '/' },
      '/about': { page: '/about' },
      '/contact': { page: '/contact' },
      '/work': { page: '/work' }
    }
  },
}

module.exports = function (phase, { defaultConfig }) {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    /* development only config options here */

    const devConfig = {
      reactStrictMode: true,
      swcMinify: true,
      images: { unoptimized: true }
    }

    return devConfig;
    ;

  }

  return nextConfig;

}  
