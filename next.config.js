/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains:['i.seadn.io','ipfs','nft-cdn.alchemy.com']
  }
}

module.exports = nextConfig
