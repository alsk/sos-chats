/** @type {import('next').NextConfig} */

const path = process.env.NODE_ENV === 'production' ? '/sos-chats' : ''

const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: { unoptimized: true },
  // basePath: path,
  // assetPrefix: path,
};

export default nextConfig;