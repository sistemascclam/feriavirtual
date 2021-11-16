import Head from 'next/head'
import Layout, { siteTitle } from "../components/layout";
import { motion, AnimatePresence } from "framer-motion"
import { useRouter } from "next/router";
import { useEffect } from 'react';
export default function Feria() {
  const Router = useRouter();
  useEffect(() => {
    const accessToken = localStorage.getItem("tokenferia");
    if (!accessToken) {
      Router.replace("/");
    }
  }, [])
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <AnimatePresence>
        <motion.div
        className="md:bg-feria lg:bg-feria xl:bg-feria 2xl:bg-feria bg-cover bg-center min-h-screen w-full relative"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.5 }}
      transition={{
        opacity: { duration: 0.5 }
      }}>
        <div className="w-full pl-0 lg:pl-36 pt-5 flex flex-wrap justify-center">
          {/* <FeriaSmallCard /> */}
        </div>
        </motion.div>
      </AnimatePresence>
    </Layout>
  )
}

const FeriaSmallCard = () =>{
return(
<>
  {/* <VideoPlayer src="videos/promovideo.mp4" isOpen={isOpen} closeModal={() => setisOpen(false)} /> */}
  <div className="w-80 h-64 rounded-lg m-6 bg-gray-100 relative">
    <div className="absolute right-0 bottom-3 flex flex-col gap-1">
      <a href={`https://wa.me/51984632346`} target="_blank" className="rounded-full h-12 w-12 bg-blue-500 hover:bg-blue-600 flex items-center justify-center shadow-3xl hover:scale-105">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-white" viewBox="0 0 20 20" fill="currentColor">
          <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z" />
        </svg>
      </a>
      <a href={`https://wa.me/51984632346`} target="_blank" className="rounded-full h-12 w-12 bg-yellow-500 hover:bg-yellow-600 flex items-center justify-center shadow-3xl hover:scale-105">
        <svg viewBox="0 0 24 24" className="h-7 w-7 text-white" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M21.999 8a.997.997 0 0 0-.143-.515L19.147 2.97A2.01 2.01 0 0 0 17.433 2H6.565c-.698 0-1.355.372-1.714.971L2.142 7.485A.997.997 0 0 0 1.999 8c0 1.005.386 1.914 1 2.618V20a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-5h4v5a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-9.382c.614-.704 1-1.613 1-2.618zm-2.016.251A2.002 2.002 0 0 1 17.999 10c-1.103 0-2-.897-2-2 0-.068-.025-.128-.039-.192l.02-.004L15.219 4h2.214l2.55 4.251zm-9.977-.186L10.818 4h2.361l.813 4.065C13.957 9.138 13.079 10 11.999 10s-1.958-.862-1.993-1.935zM6.565 4h2.214l-.76 3.804.02.004c-.015.064-.04.124-.04.192 0 1.103-.897 2-2 2a2.002 2.002 0 0 1-1.984-1.749L6.565 4zm3.434 12h-4v-3h4v3z"></path></svg>
      </a>
      <a href={`https://wa.me/51984632346`} target="_blank" className="rounded-full h-12 w-12 bg-green-500 hover:bg-green-600 flex items-center justify-center shadow-3xl hover:scale-105">
        <svg className="h-7 w-7" viewBox="-23 -21 682 682.66669" xmlns="http://www.w3.org/2000/svg"><path fill="white" d="m544.386719 93.007812c-59.875-59.945312-139.503907-92.9726558-224.335938-93.007812-174.804687 0-317.070312 142.261719-317.140625 317.113281-.023437 55.894531 14.578125 110.457031 42.332032 158.550781l-44.992188 164.335938 168.121094-44.101562c46.324218 25.269531 98.476562 38.585937 151.550781 38.601562h.132813c174.785156 0 317.066406-142.273438 317.132812-317.132812.035156-84.742188-32.921875-164.417969-92.800781-224.359376zm-224.335938 487.933594h-.109375c-47.296875-.019531-93.683594-12.730468-134.160156-36.742187l-9.621094-5.714844-99.765625 26.171875 26.628907-97.269531-6.269532-9.972657c-26.386718-41.96875-40.320312-90.476562-40.296875-140.28125.054688-145.332031 118.304688-263.570312 263.699219-263.570312 70.40625.023438 136.589844 27.476562 186.355469 77.300781s77.15625 116.050781 77.132812 186.484375c-.0625 145.34375-118.304687 263.59375-263.59375 263.59375zm144.585938-197.417968c-7.921875-3.96875-46.882813-23.132813-54.148438-25.78125-7.257812-2.644532-12.546875-3.960938-17.824219 3.96875-5.285156 7.929687-20.46875 25.78125-25.09375 31.066406-4.625 5.289062-9.242187 5.953125-17.167968 1.984375-7.925782-3.964844-33.457032-12.335938-63.726563-39.332031-23.554687-21.011719-39.457031-46.960938-44.082031-54.890626-4.617188-7.9375-.039062-11.8125 3.476562-16.171874 8.578126-10.652344 17.167969-21.820313 19.808594-27.105469 2.644532-5.289063 1.320313-9.917969-.664062-13.882813-1.976563-3.964844-17.824219-42.96875-24.425782-58.839844-6.4375-15.445312-12.964843-13.359374-17.832031-13.601562-4.617187-.230469-9.902343-.277344-15.1875-.277344-5.28125 0-13.867187 1.980469-21.132812 9.917969-7.261719 7.933594-27.730469 27.101563-27.730469 66.105469s28.394531 76.683594 32.355469 81.972656c3.960937 5.289062 55.878906 85.328125 135.367187 119.648438 18.90625 8.171874 33.664063 13.042968 45.175782 16.695312 18.984374 6.03125 36.253906 5.179688 49.910156 3.140625 15.226562-2.277344 46.878906-19.171875 53.488281-37.679687 6.601563-18.511719 6.601563-34.375 4.617187-37.683594-1.976562-3.304688-7.261718-5.285156-15.183593-9.253906zm0 0" /></svg>
      </a>
    </div>
  </div>
  </>
)}