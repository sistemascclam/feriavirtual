import Head from 'next/head'
import { useState } from 'react';
import Layout, { siteTitle } from "../components/layout";
import Image from 'next/image'
import VideoPlayer from "../components/Modals/VideoPlayer"
import galeria from "../public/content/galeria.json"

export default function SiTeLoPerdiste() {

    return (
        <Layout home>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <div className="min-h-screen bg-gray-100">
                <div className="bg-speakersbanner bg-cover bg-bottom h-96 w-full flex flex-col text-center">
                    <h1 className="text-white text-xl font-bold mt-20">Si te lo perdiste...</h1>
                    <h1 className="text-white text-6xl md:text-7xl font-bold">GALERIA</h1>
                </div>
                <div className="w-full -mt-44 md:-mt-32 flex flex-wrap justify-center">
                    {
                        galeria.map((s, k) =>
                            <CardEvento key={k} evento={s} />
                        )
                    }
                </div>
            </div>
        </Layout>
    )
}

const CardEvento = ({ evento }) => {
    const [isOpen, setisOpen] = useState(false);

    return (
        <div className="w-96 rounded-xl m-6  bg-white shadow-lg relative">
            <div className="relative">
                <Image
                    className="rounded-xl"
                    alt={evento.title}
                    src={evento.thumb}
                    height={60}
                    width={100}
                    layout="responsive"
                    objectFit="cover"
                />
                <div className="absolute inset-0 flex justify-center text-white hover:text-blue-600 hover:bg-opacity-30  rounded-xl cursor-pointer" onClick={() => setisOpen(true)}>
                    <span className="my-auto">
                        <svg viewBox="0 0 16 16" className="h-14 w-14"  fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"></path>
                        </svg>
                    </span>
                </div>
            </div>
            <VideoPlayer src="videos/promovideo.mp4" isOpen={isOpen} closeModal={() => setisOpen(false)} />
            <div className="pt-1 pb-10 px-5  text-blackText bg-white rounded-xl">
                <p className="font-bold mt-2 text-lg leading-tight">{evento.title} <span className="text-sm font-normal"> - {evento.speaker}</span></p>
                <p className="text-sm mt-2 text-gray-500">{evento.horario}</p>
            </div>
        </div>
    )
}