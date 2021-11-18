import Head from 'next/head'
import Layout, { siteTitle } from "../components/layout";
import { useState, useEffect } from 'react';
import { useRouter } from "next/router";
import { motion, AnimatePresence } from "framer-motion"

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
      <AnimatePresence>
        <motion.div
          className="bg-entrada bg-cover bg-bottom min-h-screen w-full relative"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.5 }}
          transition={{
            opacity: { duration: 0.5 }
          }}>
          <div className="w-full pl-0 lg:pl-36 pt-5 flex flex-wrap justify-center">
            {/* <FeriaSmallCard /> */}
          </div>
        </motion.div>
      </AnimatePresence>
    </Layout>
  )
}