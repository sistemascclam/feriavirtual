import Head from 'next/head'
import Layout, { siteTitle } from "../../components/layout";
import { useRouter } from "next/router";
import { motion, AnimatePresence } from "framer-motion"
import { useEffect, useState } from 'react'
import Image from 'next/image'
import standsData from "../../public/content/zonaferial.json"
import MenuOptions from "../../components/MenuOptions"

export default function Stand() {
    const router = useRouter()
    const [background, setbackground] = useState(null);
    const [standinfo, setstandinfo] = useState(null);
    const {
        query: { id },
    } = router

    useEffect(() => {
        if (id) {
            setstandinfo(standsData.find(s => s.route === id))
            setbackground(`/images/stands/${id}.jpg`)
        }
    }, [id])

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
            {
                background ?
                    <AnimatePresence>
                        <motion.div
                            className={`min-h-screen w-full relative`}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0, scale: 1.5 }}
                            transition={{
                                opacity: { duration: 0.5 }
                            }}>
                            <Image
                                priority
                                alt={id}
                                src={background}
                                layout="fill"
                                objectFit="cover"
                                quality="100"
                            />
                            <div className="relative flex justify-center content-center h-screen">
                                <MenuOptions info={standinfo} />
                            </div>
                        </motion.div>
                    </AnimatePresence>
                    :
                    ""
            }
        </Layout>
    );
}