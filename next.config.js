/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    ACCESS_TOKEN_SECRET: process.env.ACCESS_TOKEN_SECRET
  }
}

module.exports = nextConfig
