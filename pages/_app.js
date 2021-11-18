import { Provider } from 'react-redux'
import { useStore } from '../redux/store/index'
import '../styles/globals.css';
// import Script from 'next/script'
// import Router from 'next/router';
// import NProgress from 'nprogress';
// import 'nprogress/nprogress.css';
// Router.events.on('routeChangeStart', () => NProgress.start()); Router.events.on('routeChangeComplete', () => NProgress.done()); Router.events.on('routeChangeError', () => NProgress.done()); 

// <!-- Global site tag (gtag.js) - Google Analytics -->
// <script async src="https://www.googletagmanager.com/gtag/js?id=G-R64EL0KMZH"></script>
// <script>
//   window.dataLayer = window.dataLayer || [];
//   function gtag(){dataLayer.push(arguments);}
//   gtag('js', new Date());

//   gtag('config', 'G-R64EL0KMZH');
// </script>

function MyApp({ Component, pageProps }) {
  const store = useStore(pageProps.initialReduxState)

  return (
    <Provider store={store}>
      {/* <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=G-R64EL0KMZH`}
      />

      <Script strategy="lazyOnload">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-R64EL0KMZH');
        `}
      </Script> */}

      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp
