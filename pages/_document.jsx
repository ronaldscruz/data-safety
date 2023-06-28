import {Head, Html, Main, NextScript} from "next/document";

import Script from 'next/script';

export default function Document() {
  return (
    <Html lang="pt-br">
      <Head>
        <script
          async
          defer
          data-website-id="69eec61c-1dde-4554-899a-fbea2662349a"
          data-domains="datasafety.tec.br"
          src="https://umami.techessecurity.com.br/umami.js"
        ></script>
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-WCZXYZ2MHS"/>
        <Script id="google-analytics">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
          
            gtag('config', 'G-WCZXYZ2MHS');
          `}
        </Script>
      </Head>
      <body>
      <Main/>
      <NextScript/>
      </body>
    </Html>
  );
}
