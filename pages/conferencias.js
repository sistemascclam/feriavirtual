import Head from 'next/head'
import Layout, { siteTitle } from "../components/layout";
import { useEffect } from 'react';
import { useRouter } from "next/router";
import { checklinkurl } from "../redux/actions/conferencia"
import { useDispatch, useSelector } from 'react-redux';
import { motion, AnimatePresence } from "framer-motion"

export default function Feria() {
  const Router = useRouter();
  const dispatch = useDispatch();
  const { codconferencia } = useSelector(({ conferencia }) => conferencia);

  useEffect(() => {
    const accessToken = localStorage.getItem("tokenferia");
    if (!accessToken) {
      Router.replace("/");
    }
  }, [])

  useEffect(() => {
    if (!codconferencia) {
      dispatch(checklinkurl());
    }
  }, [codconferencia])

  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <AnimatePresence>
        <motion.div className="bg-conferenciafondo bg-cover bg-center min-h-screen w-full relative"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.5 }}
        >
        {
          codconferencia ?
          <motion.div className="w-full flex justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.5 }}
          transition={{
            opacity: { duration: 1 }
          }}>
                <iframe
                  className="lg:ml-3 mt-44 xs:mt-16 sm:mt-16 md:mt-16 lg:mt-16"
                  id="vid_frame" src={`https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2Fcclambayeque%2Fvideos%2F${codconferencia}%2F&show_text=false&width=560&t=0`}
                  width="100%"
                  height="500"
                  style={{ border: "none", overflow: "hidden", width: "715px" }}
                  allowFullScreen={true} title=""></iframe>
          </motion.div>
                :
                ""
            }
        </motion.div>
      </AnimatePresence>
    </Layout>
  )
}
