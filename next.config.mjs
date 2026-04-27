/** @type {import('next').NextConfig} */
const nextConfig = {
  devIndicators: false,
  async redirects() {
    return [
      {
        source: '/inicio',
        destination: '/',
        statusCode: 301,
      },
      {
        source: '/en',
        destination: '/',
        statusCode: 301,
      },
      {
        source: '/en/:path*',
        destination: '/',
        statusCode: 301,
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: '/c%C3%B3pia-pix',
        destination: '/copia-pix',
      },
      {
        source: '/cópia-pix',
        destination: '/copia-pix',
      },
    ];
  },
};

export default nextConfig;
