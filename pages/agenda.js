import Head from 'next/head'
import Layout, { siteTitle } from "../components/layout";
import { useEffect } from 'react';
import { useRouter } from "next/router";

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
            <div className="min-h-screen bg-gray-100">
                <div className="bg-speakersbanner bg-cover bg-bottom h-96 w-full flex flex-col text-center">
                    <h1 className="text-white text-xl font-bold mt-20">Conoce nuestra</h1>
                    <h1 className="text-white text-6xl md:text-7xl font-bold">AGENDA</h1>
                </div>
                <div className="w-full -mt-44 md:-mt-32 flex flex-wrap justify-evenly">
                    {
                        agenda.map((s, k) =>
                            <CardEvento key={k} evento={s} />
                        )
                    }
                </div>
            </div>
        </Layout>
    )
}

const CardEvento = ({ evento }) =>
    <div className="w-96 rounded-xl m-6 hover:scale-101 bg-white shadow-lg py-10 px-5 ">
        <div className="  text-blackText flex flex-col justify-center content-center items-center bg-white rounded-xl">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
            </svg>
            <p className="text-center text-sm mt-1 ">{evento.horario}</p>

            <p className="text-center text-2xl font-bold mt-2">{evento.title}</p>

            <p className="text-center text-sm">por {evento.speaker}</p>
        </div>
    </div>