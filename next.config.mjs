const isProd = process.env.NODE_ENV === "production"

const nextConfig = {
  output: "export",
  basePath: "/CasaEstoque",
  assetPrefix: isProd ? "/CasaEstoque/" : undefined,
  images: {
    unoptimized: true,
  },
  distDir: "docs",
}

export default nextConfig
