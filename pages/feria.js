import Head from 'next/head'
import Layout, { siteTitle } from "../components/layout";
import { useEffect, useState } from 'react';
import { useRouter } from "next/router";
import { motion, AnimatePresence } from "framer-motion"
import standsData from "../public/content/zonaferial.json"
import Image from 'next/image'
import MenuOptions from '../components/MenuOptions'

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
          <div className="absolute inset-0 z-0 pt-72">
              <svg className="animate-spin h-8 w-8 text-blue-700 mx-auto text-center" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
          </div>
        <div
          className="block lg:hidden min-h-screen w-full relative">
          {
            standsData.filter(s=>s.zona=="ferial").map((s, k) =>
            <div className="relative"
            key={`image_small_${s.route}_${k}`}>
              <Image
                priority
                alt={k}
                src={`/images/stands/${s.route}.jpg`}
                width="120"
                height="100"
                objectFit="cover"
                layout="responsive"
              />
              <MenuOptions small right info={s} />
              </div>
            )
          }
        </div>
      <AnimatePresence>
        <motion.div
          className="hidden lg:block md:bg-feria lg:bg-feria xl:bg-feria 2xl:bg-feria bg-cover bg-top min-h-screen w-full relative"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.5 }}
          transition={{
            opacity: { duration: 0.5 }
          }}>
          <div className="flex flex-col">
            <div className="flex flex-wrap justify-between w-7/12 mx-auto mt-16 px-4">
              <button className="hover:bg-blue-500 hover:bg-opacity-15 w-28 h-24 rounded-xl" onClick={() => Router.push("/stand/edpymealternativa")}></button>
              <button className="hover:bg-blue-500 hover:bg-opacity-15 w-28 h-24 rounded-xl" onClick={() => Router.push("/stand/crediperu")}></button>
              <button className="hover:bg-blue-500 hover:bg-opacity-15 w-28 h-24 rounded-xl" onClick={() => Router.push("/stand/roma")}></button>
            </div>
            <div className="flex flex-wrap justify-between w-8/12 mx-auto">
              <button className="hover:bg-blue-500 hover:bg-opacity-15 w-32 h-24 rounded-xl" onClick={() => Router.push("/stand/fogapi")}></button>
              <button className="hover:bg-blue-500 hover:bg-opacity-15 w-32 h-24 rounded-xl" onClick={() => Router.push("/stand/safex")}></button>
              <button className="hover:bg-blue-500 hover:bg-opacity-15 w-32 h-24 rounded-xl" onClick={() => Router.push("/stand/acsl")}></button>
              <button className="hover:bg-blue-500 hover:bg-opacity-15 w-32 h-24 rounded-xl" onClick={() => Router.push("/stand/coopacsanmartindeporres")}></button>
            </div>
            <div className="flex flex-wrap justify-between w-9/12 mx-auto">
              <button className="hover:bg-blue-500 hover:bg-opacity-15 w-36 h-32 rounded-xl" onClick={() => Router.push("/stand/coopacscb")}></button>
              <button className="hover:bg-blue-500 hover:bg-opacity-15 w-36 h-32 rounded-xl" onClick={() => Router.push("/stand/consultoranorte")}></button>
              <button className="hover:bg-blue-500 hover:bg-opacity-15 w-36 h-32 rounded-xl" onClick={() => Router.push("/stand/cajasullana")}></button>
              <button className="hover:bg-blue-500 hover:bg-opacity-15 w-36 h-32 rounded-xl" onClick={() => Router.push("/stand/cajametropolitana")}></button>
            </div>
            <div className="flex flex-wrap justify-between w-full px-3 mt-3">
              <button className="hover:bg-blue-500 hover:bg-opacity-15 w-48 h-40 rounded-xl" onClick={() => Router.push("/stand/crecer")}></button>
              <button className="hover:bg-blue-500 hover:bg-opacity-15 w-48 h-40 rounded-xl" onClick={() => Router.push("/stand/cajapiura")}></button>
              <button className="hover:bg-blue-500 hover:bg-opacity-15 w-48 h-40 rounded-xl" onClick={() => Router.push("/stand/bbva")}></button>
              <button className="hover:bg-blue-500 hover:bg-opacity-15 w-48 h-40 rounded-xl" onClick={() => Router.push("/stand/inandes")}></button>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </Layout>
  )
}