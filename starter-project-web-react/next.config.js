/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/auth/register',
        destination: '/auth/login',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
