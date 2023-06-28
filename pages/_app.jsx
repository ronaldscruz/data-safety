import "../styles/index.css";
import Script from "next/script";

export default function App({Component, pageProps}) {
  return <>
    <Component {...pageProps} />
    <Script src="https://www.googletagmanager.com/gtag/js?id=G-WCZXYZ2MHS"/>
    <Script id="google-analytics">
      {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
          
            gtag('config', 'G-WCZXYZ2MHS');
          `}
    </Script>
  </>
}
