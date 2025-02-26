import withPWA from 'next-pwa'

const isProd = process.env.NODE_ENV === 'production'

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/CasaEstoque',
  assetPrefix: isProd ? '/CasaEstoque/' : undefined,
  images: { unoptimized: true },
  distDir: 'docs',
}

export default withPWA({
  dest: 'public',
  register: true,
  skipWaiting: true,
  disable: !isProd,
  buildExcludes: [/chunks\/.*$/]
})(nextConfig)