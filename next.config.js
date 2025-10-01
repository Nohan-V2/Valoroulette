/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'media.valorant-api.com',
      },
    ],
  },
  // Optimisation de la performance
  reactStrictMode: true,
  // Compression
  compress: true,
  // Optimisation des polices
  optimizeFonts: true,
}

module.exports = nextConfig
