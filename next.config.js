/**
 * @type {import('next').NextConfig}
 */


 const nextConfig = {
    env: {
      NEXT_BK_WS:"http://localhost:8000/api/"
    },
  }

//  const nextConfig = {
//     basePath: '/feriavirtual',
//     images: {
//       domains: ['www.cclam.org.pe', 'localhost','www.tailwindui.com'],
//       loader: 'imgix',
//       path: 'https://cclam.org.pe/feriavirtual',
//     },
//     env: {
//       NEXT_BK_WS:"https://cclam.org.pe/recursos.feriavirtual/public/api/"
//     },
//   }

  // const nextConfig = {
  //   images: {
  //     domains: ['localhost','www.tailwindui.com','https://feriabancaseguros.com/'],
  //     loader: 'imgix',
  //     path: 'https://feriabancaseguros.com/',
  //   },
  //   env: {
  //     NEXT_BK_WS:"https://cclam.org.pe/recursos.feriavirtual/public/api/"
  //   },
  // }
  
  module.exports = nextConfig