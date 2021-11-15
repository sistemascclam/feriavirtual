import Head from 'next/head'
import Layout, { siteTitle } from "../components/layout";
import { useState, useEffect } from 'react';
import { useRouter } from "next/router";
import VideoPlayer from "../components/Modals/VideoPlayer"
export default function Recibidor() {
  const Router = useRouter();
  const [users, setusers] = useState(null)

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
      <div className="md:bg-feria lg:bg-feria xl:bg-feria 2xl:bg-feria bg-cover bg-center min-h-screen w-full relative">
        <div className="w-full pl-0 lg:pl-36 pt-5 flex flex-wrap justify-center">
        </div>
      </div>
    </Layout>
  )
}