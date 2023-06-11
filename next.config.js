/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites(){
    console.log('rewrites in use')
    return[{
      source: "/be/:path*",
      destination:'/api/:path*',
    },
  ];
  },
}

module.exports = nextConfig
