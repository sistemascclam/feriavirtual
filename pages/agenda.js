import Head from 'next/head'
import Layout, { siteTitle } from "../components/layout";
import { useEffect } from 'react';
import { useRouter } from "next/router";
import Image from 'next/image'

import agenda from "../public/content/agenda.json"

export default function Agenda() {
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
            <div className="min-h-screen bg-gray-100 pb-10">
                <div className="absolute top-3 left-3 hidden lg:block">
                    <Image
                        className="rounded-xl"
                        priority
                        alt="Logo COMITE BANCA"
                        src="/images/logobancayseguros.jpeg"
                        height={100}
                        width={250}
                        objectFit="cover"
                    />
                </div>
                <div className="bg-speakersbanner bg-cover bg-top h-80 w-full flex flex-col text-center">
                    <h1 className="text-white text-xl font-bold mt-14">Conoce nuestra</h1>
                    <h1 className="text-white text-6xl md:text-7xl font-bold">AGENDA</h1>
                </div>
                <div className="w-full -mt-44 md:-mt-32 flex flex-wrap lg:flex-nowrap">
                    {
                        agenda.map((s, k) =>
                            <SectionDay key={k} dia={s} />
                        )
                    }
                </div>
            </div>
        </Layout>
    )
}

const SectionDay = ({ dia }) =>
    <div className="bg-white w-full m-4 py-8 px-4 rounded-2xl shadow-xl">
        <div className="text-blue-600 font-bold text-center flex w-max mx-auto text-xl">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 my-auto mr-2 " viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
            </svg>
            {dia.dia}
        </div>
        <div className="flex flex-col py-8">
            {
                dia.eventos.map((s, k) =>
                    <CardEvento key={k} evento={s} last={k === dia.eventos.length - 1} />
                )
            }
        </div>
    </div>

const CardEvento = ({ evento, last }) =>
    <div className="flex">
        <div className="py-1 px-2">
            <div className="bg-blue-600 w-4 h-4 shadow-xl rounded-full"></div>
            {
                !last &&
                <div className="bg-blue-600 -mt-1 mx-auto w-1 h-full rounded-full"></div>
            }
        </div>
        <div className="text-gray-700 flex flex-col justify-center rounded-xl content-center pb-10 px-8">
            <p className="text-base leading-none font-bold mt-1">{evento.title}</p>
            {evento.speaker &&
                <p className="text-base leading-tight mt-2">por {evento.speaker}</p>
            }
            <i className="text-base leading-tight mt-1">{evento.horario}</i>
        </div>
    </div>