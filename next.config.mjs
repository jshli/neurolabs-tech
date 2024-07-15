/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'https://staging.api.neurolabs.ai/v2/:path*',
      },
    ];
  },
};

export default nextConfig;
