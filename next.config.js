/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'images.pexels.com',
      },
      {
        protocol: 'https',
        hostname: 'encrypted-tbn0.gstatic.com',
      },
      {
        protocol: 'https',
        hostname: 'deerdesigner.com',
      },
      {
        protocol: 'https',
        hostname: 'cdn.logojoy.com',
      },
      {
        protocol: 'https',
        hostname: 'marketplace.canva.com',
      },
      {
        protocol: 'https',
        hostname: 'images-platform.99static.com',
      },
      {
        protocol: 'https',
        hostname: 't4.ftcdn.net',
      }
    ],
  },
}

module.exports = nextConfig 