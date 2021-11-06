/**
 * @type {import('next').NextConfig}
 */


//  const nextConfig = {
//     env: {
//       NEXT_BK_WS:"http://localhost:8000/api/"
//     },
//   }

 const nextConfig = {
    basePath: '/feriavirtual',
    images: {
      domains: ['www.cclam.org.pe', 'localhost','www.tailwindui.com'],
      loader: 'imgix',
      path: 'https://cclam.org.pe/feriavirtual',
    },
    env: {
      NEXT_BK_WS:"https://cclam.org.pe/recursos.feriavirtual/public/api/"
    },
  }

  // const nextConfig = {
  //   images: {
  //     domains: ['localhost','www.tailwindui.com','http://www.bicentenariobancoseguro.com.s3-website-sa-east-1.amazonaws.com/'],
  //     loader: 'imgix',
  //     path: 'http://www.bicentenariobancoseguro.com.s3-website-sa-east-1.amazonaws.com/',
  //   },
  //   env: {
  //     NEXT_BK_WS:"https://cclam.org.pe/recursos.feriavirtual/public/api/"
  //   },
  // }
  
  module.exports = nextConfig