const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['hebbkx1anhila5yf.public.blob.vercel-storage.com'],
  },
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': path.resolve(__dirname, './'),
    };
    return config;
  },
  env: {
    TELEGRAM_BOT_TOKEN: process.env.TELEGRAM_BOT_TOKEN,
    WEBAPP_URL: process.env.WEBAPP_URL,
  },
  async rewrites() {
    return [
      {
        source: '/api/webhook',
        destination: '/api/webhook',
      },
    ];
  },
}

module.exports = nextConfig