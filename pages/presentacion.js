import { useRouter } from 'next/router';
import Layout, { siteTitle } from "../components/layout";
import Head from 'next/head'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'

export default function Presentacion() {
  const router = useRouter()
  const videoElement = useRef(null);
  const [playerState, setPlayerState] = useState({
    isPlaying: false,
    progress: 0,
    speed: 1,
    isMuted: false,
  });

  useEffect(() => {
    const accessToken = localStorage.getItem("tokenferia");
    if (!accessToken) {
      router.replace("/");
    }
  }, [])

  useEffect(() => {
    playerState.isPlaying
      ? videoElement.current.play()
      : videoElement.current.pause();
  }, [playerState.isPlaying, videoElement]);


  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <div className="min-h-screen w-full">
        <div className="min-w-full h-screen overflow-hidden">
          <Link href={`/feria`}>
            <a className="absolute z-10 right-5 top-3 text-base flex content-center bg-black bg-opacity-40 hover:bg-opacity-60 cursor-pointer py-2 px-5 rounded-full text-white shadow-md">
              Omitir
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 my-auto ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7M5 5l7 7-7 7" />
              </svg>
            </a>
          </Link>
          <video width="100%" controls
            onPlay={() => setPlayerState({ ...playerState, isPlaying: true })}
            onPause={() => setPlayerState({ ...playerState, isPlaying: false })}
            onEnded={()=>router.push("feria")}
            ref={videoElement} >
            <source src={"videos/promovideo.mp4"} type="video/mp4" />
            Tu buscador no soporta este tipo de video.
          </video>
          {
            !playerState.isPlaying ?
              <button className="hidden md:flex absolute inset-0 text-gray-900 text-opacity-80 mx-auto  items-center " style={{ left: '45%' }}
                onClick={() => setPlayerState({ ...playerState, isPlaying: !playerState.isPlaying })}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-32 w-32" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                </svg>
              </button>
              :
              ""
          }
        </div>
      </div>
    </Layout>
  )
}
