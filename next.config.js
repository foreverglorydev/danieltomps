/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['img.shields.io'], //make it 'your-domain.com'
  },
}

module.exports = nextConfig
