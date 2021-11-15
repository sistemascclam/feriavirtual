import Head from 'next/head'
import Layout, { siteTitle } from "../components/layout";
import { useEffect } from 'react';
import { useRouter } from "next/router";

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
      <div className="bg-conferenciafondo bg-cover bg-center min-h-screen w-full relative">
        <div className="w-full flex justify-center">
          <iframe
            className="lg:ml-3 mt-44 xs:mt-16 sm:mt-16 md:mt-16 lg:mt-16"
            id="vid_frame" src="https://www.facebook.com/plugins/video.php?height=314&amp;href=https%3A%2F%2Fwww.facebook.com%2Fcclambayeque%2Fvideos%2F560995758492718%2F&amp;show_text=false&amp;width=560&amp;t=0"
            width="100%"
            height="500"
            style={{ border: "none", overflow: "hidden", width: "715px" }}
            allowFullScreen={true} title=""></iframe>
        </div>
      </div>
    </Layout>
  )
}
