import Head from 'next/head'
import Layout, { siteTitle } from "../components/layout";
import StateEvent from "../components/StateEvent/index";
import Message from "../components/Floatings/Message"

export default function Home() {

  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <Message />
      <StateEvent />
    </Layout>
  )
}
