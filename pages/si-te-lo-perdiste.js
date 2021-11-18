import Head from 'next/head'
import { useEffect } from 'react';
import Layout, { siteTitle } from "../components/layout";
import { listsiteloperdiste } from "../redux/actions/videoalmacen"
import { useDispatch, useSelector } from 'react-redux';
import Image from 'next/image'
import moment from "moment";

export default function SiTeLoPerdiste() {
    const dispatch = useDispatch();
    const { siteloperdisteList } = useSelector(({ videoalmacen }) => videoalmacen);

    useEffect(() => {
        dispatch(listsiteloperdiste())
    }, [])

    return (
        <Layout home>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <div className="min-h-screen bg-gray-100">
                <div className="absolute top-3 left-3">
                    <Image
                    className="rounded-xl"
                        priority
                        alt="Logo CCLAM"
                        src="/images/logobancayseguros.jpeg"
                        height={100}
                        width={250}
                        objectFit="cover"
                        quality="100"
                    />
                </div>
                <div className="bg-speakersbanner bg-cover bg-top h-80 w-full flex flex-col text-center">
                    <h1 className="text-white text-xl font-bold mt-14">Si te lo perdiste...</h1>
                    <h1 className="text-white text-6xl md:text-7xl font-bold">GALERIA</h1>
                </div>
                <div className="w-full -mt-44 md:-mt-32 flex flex-wrap justify-center">
                    {
                        siteloperdisteList.length===0 ? <p className="text-white text-xl text-opacity-80 rounded-full">Vuelve pronto para ver las grabaciones...</p> : ""
                    }
                    {
                        siteloperdisteList.map((s, k) =>
                            <CardVideo key={k} evento={s} />
                        )
                    }
                </div>
            </div>
        </Layout>
    )
}

const CardVideo = ({ evento }) => {
    return (
        <div className="w-96 rounded-xl m-6 bg-white shadow-lg relative">
            <div className="relative h-60">
                <iframe 
                className="rounded-t-xl"
                src={`https://www.youtube.com/embed/${evento.embedCod}`}
                    frameBorder='0'
                    allow='encrypted-media'
                    allowFullScreen
                    title='video'
                    width='100%'
                    height='100%'
                />
            </div>
            <div className="pt-1 pb-5 px-5  text-blackText bg-white rounded-xl">
                <p className="font-bold mt-2 text-lg leading-tight">{evento.title} <span className="text-sm font-normal"> - {evento.speaker}</span></p>
                <p className="text-sm mt-2 text-gray-500">{moment(evento.datetime).format("lll")}</p>
            </div>
        </div>
    )
}