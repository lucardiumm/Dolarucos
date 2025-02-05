import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  async headers() {
      return [
        {
          source: '/api/:path*',
          headers: [
            { key: 'Access-Control-Allow-Origin', value: 'https://dolarucos.vercel.app/' },
            { key: 'Access-Control-Allow-Methods', value: 'GET, POST' },
          ],
        }
      ]
  },
}

export default nextConfig