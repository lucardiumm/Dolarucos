import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: false,
  },
  async headers() {
      return [
        {
          source: '/api/:path*',
          headers: [
            { key: 'Access-Control-Allow-Origin', value: 'http://localhost:3000' },
            { key: 'Access-Control-Allow-Methods', value: 'GET, POST' },
          ],
        }
      ]
  },
}

export default nextConfig