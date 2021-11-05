/**
 * @type {import('next').NextConfig}
 */
 const nextConfig = {
    // basePath: '/feriavirtual',
    // images: {
    //   domains: ['www.cclam.org.pe', 'localhost','www.tailwindui.com'],
    //   loader: 'imgix',
    //   path: 'https://cclam.org.pe/feriavirtual',
    // },
    env: {
      //NEXT_BK_WS:"https://cclam.org.pe/recursos.feriavirtual/public/api/"
      NEXT_BK_WS:"http://localhost:8000/api/"
    },
  }
  
  module.exports = nextConfig