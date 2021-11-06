import Head from 'next/head'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { setLocalStorageAuth } from "../redux/actions/auth"
import LogoutButton from "./Floatings/Logout"
import Explore from "./Floatings/Explore"

export const siteTitle = 'I Feria Virtual Bicentenario BANSEGURO 2021 - Regístrate gratis'
export const siteDescription = 'Del 18 al 19 de noviembre, ingresa a la I Feria virtual de banca y seguros 2021. | Cámara de Comercio y Producción de Lambayeque'
// export const siteURL = 'https://cclam.org.pe/feriavirtual/'
// export const siteImage = 'https://cclam.org.pe/feriavirtual/images/post.png'
export const siteURL = 'https://amazon-prod.djd2oct5zvemj.amplifyapp.com/'
export const siteImage = 'https://amazon-prod.djd2oct5zvemj.amplifyapp.com/images/post.png'
export default function Layout({ children }) {
  const { token } = useSelector(({ auth }) => auth);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setLocalStorageAuth());
  }, [])

  return (
    <>
      <Head>
        <link rel="icon" href={`./favicon.ico`} />

        <title>{siteTitle}</title>
        <meta name="title" content={siteTitle} />
        <meta name="description" content={siteDescription} />

        <meta property="og:type" content="website" />
        <meta property="og:url" content={siteURL} />
        <meta property="og:title" content={siteTitle} />
        <meta property="og:description" content={siteDescription} />
        <meta property="og:image" content={siteImage} />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={siteURL} />
        <meta property="twitter:title" content={siteTitle} />
        <meta property="twitter:description" content={siteDescription} />
        <meta property="twitter:image" content={siteImage}></meta>

        <meta name="keywords" content="Feria virtual, Bancos, seguros, feria, cclam" />

      </Head>
      <main className="bg-themeWhite font-poppins">
        {
          token ?
            <>
              <Explore />
              <LogoutButton />
            </>
            :
            ""
        }
        {children}
      </main>
    </>
  )
}