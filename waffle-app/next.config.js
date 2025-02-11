/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: { styledComponents: true },
  async rewrites() {
    return [
      {
        source: '/api/member',
        destination: `http://waffle2.duckdns.org/member`,
      },
    ];
  },
};

module.exports = nextConfig;
