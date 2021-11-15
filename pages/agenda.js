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
            <div className="min-h-screen bg-gray-100 pb-10">
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
    <div className="w-96 rounded-xl m-6 hover:scale-101 bg-white shadow-xl px-8 py-6 select-auto">
        <div className="  text-blackText flex flex-col justify-center rounded-xl">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-indigo-600" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
            </svg>
            <p className="text-sm mt-1">{evento.horario}</p>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-indigo-600 mt-3" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M18 13V5a2 2 0 00-2-2H4a2 2 0 00-2 2v8a2 2 0 002 2h3l3 3 3-3h3a2 2 0 002-2zM5 7a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1zm1 3a1 1 0 100 2h3a1 1 0 100-2H6z" clipRule="evenodd" />
            </svg>
            <p className="text-xl leading-none font-bold mt-1">{evento.title}</p>
            {evento.speaker &&
                <>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-indigo-600 mt-3" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                    </svg>
                    <p className="text-sm mt-1">{evento.speaker}</p>
                </>
            }
        </div>
    </div>