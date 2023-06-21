/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    BASE_URL_DEV: 'http://127.0.0.1:8000/',
  },
}

module.exports = nextConfig
