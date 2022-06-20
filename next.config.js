/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['raw.githubusercontent.com'] // load pages not found in the app
  }
}

module.exports = nextConfig
