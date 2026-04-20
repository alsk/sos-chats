/** @type {import('next').NextConfig} */
const path = ''
// const path = '/sos-chats'

const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: { unoptimized: true },
  basePath: path,
  assetPrefix: path,
};

export default nextConfig;