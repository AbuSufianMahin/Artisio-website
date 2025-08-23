/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [

      // Cloudinary
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        pathname: '/**',
      },
      // imgbb
      {
        protocol: 'https',
        hostname: 'i.ibb.co',
        pathname: '/**',
      }
    ],
  },
};




export default nextConfig;

