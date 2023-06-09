/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites(){
    console.log('rewrites in use')
    return[{
      source: "/be/:slug*",
      destination:'/be/endpoint=:slug*',
    },
  ];
  },
}

module.exports = nextConfig
