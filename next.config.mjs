/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: { unoptimized: true },
  basePath: '/sos-chats',
  assetPrefix: '/sos-chats',
};

export default nextConfig;
