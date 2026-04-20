/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true, // recommended for static hosts
  images: { unoptimized: true }, // Next.js image optimization needs a server
};

export default nextConfig;
