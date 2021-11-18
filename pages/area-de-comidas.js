import Head from 'next/head'
import Layout, { siteTitle } from "../components/layout";
import { motion, AnimatePresence } from "framer-motion"
import { useRouter } from "next/router";
import { useEffect, useState } from 'react';
import Image from 'next/image'
import TransitionVideo from '../components/TransitionVideo';
import standsData from "../public/content/zonaferial.json"
import MenuOptions from '../components/MenuOptions'

export default function Feria() {
  const [areaComidas, setareaComidas] = useState(1);
  const Router = useRouter();
  const [startTransitionarea, setstartTransitionarea] = useState(false);
  const [reverse, setreverse] = useState(false);

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
            standsData.filter(s=>s.zona=="comidas").map((s, k) =>
            <div className="relative"
            key={`image_small_${s.route}_${k}`}>
              <Image
                priority
                alt={k}
                src={`/images/stands/${s.route}.jpg`}
                width="160"
                height="100"
                objectFit="cover"
                layout="responsive"
              />
              <MenuOptions small left info={s} />
              </div>
            )
          }
        </div>
      <AnimatePresence>
        <motion.div
          className="hidden lg:block min-h-screen w-full relative"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.5 }}
          transition={{
            opacity: { duration: 0.5 }
          }}>
          <Image
            priority
            alt={`Área de comidas ${areaComidas}`}
            src={`/images/areadecomidas_${areaComidas}.jpg`}
            layout="fill"
            objectFit="cover"
            quality="100"
          />
          {
            
            areaComidas ===1 ?
            <div className="absolute flex justify-between w-full top-1/2 px-14 mt-8">
              <button className="relative hover:bg-blue-500 hover:bg-opacity-10 rounded-xl w-72 h-40 m-2 mt-6" onClick={()=>Router.push("/stand/elcantaro")}></button>
              <button className="relative hover:bg-blue-500 hover:bg-opacity-10 rounded-xl w-52 h-32 mr-14 mt-3" onClick={()=>Router.push("/stand/laproa")}></button>
              <button className="relative hover:bg-blue-500 hover:bg-opacity-10 rounded-xl w-72 h-32 mr-10" onClick={()=>Router.push("/stand/sipantours")}></button>
            </div>
            :
            (
              areaComidas ===2 ?
              <div className="absolute flex justify-between w-full top-1/2 pl-32 pr-8">
                <button className="relative hover:bg-blue-500 hover:bg-opacity-10 rounded-xl w-4/12 h-52" onClick={()=>Router.push("/stand/caxa")}></button>
                <button className="relative hover:bg-blue-500 hover:bg-opacity-10 rounded-xl w-5/12 h-72 mr-6" onClick={()=>Router.push("/stand/casaandina")}></button>
              </div>
            :
            <div className="absolute flex justify-between w-full top-1/4 mt-28">
              <button className="relative hover:bg-blue-500 hover:bg-opacity-10 rounded-xl w-4/12 h-96" onClick={()=>Router.push("/stand/donbenny")}></button>
              <button className="relative hover:bg-blue-500 hover:bg-opacity-10 rounded-xl w-4/12 h-80" onClick={()=>Router.push("/stand/sanroque")}></button>
            </div>
            )
          }
          {
            areaComidas > 1 ?
              <div className="absolute left-0">
                <button className="w-10 h-screen bg-black bg-opacity-10 hover:bg-opacity-50 rounded-r-xl" onClick={() => { setreverse(true); setareaComidas(areaComidas - 1); setstartTransitionarea(true); }}>
                  <svg xmlns="http://www.w3.org/2000/svg" className="animate-bounceright h-9 w-9 text-white ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
              </div>
              :
              ""
          }
          {
            areaComidas < 3 ?
              <div className="absolute right-0">
                <button className="w-10 h-screen bg-black bg-opacity-10 hover:bg-opacity-50 rounded-l-xl" onClick={() => { setreverse(false); setareaComidas(areaComidas + 1); setstartTransitionarea(true); }}>
                  <svg xmlns="http://www.w3.org/2000/svg" className="animate-bounceright h-9 w-9 text-white ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
              :
              ""
          }
        </motion.div>
      </AnimatePresence>
      {
        startTransitionarea ?
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            exit={{ opacity: 0 }}
          >
            <TransitionVideo
              videroUrl={`/videos/trantitions/areacomidas${reverse ? areaComidas + 1 : areaComidas - 1}${reverse ? areaComidas : areaComidas}.mp4`}
              onEndTransition={() => setstartTransitionarea(false)} />
          </motion.div >
          :
          ""
      }
    </Layout>
  )
}