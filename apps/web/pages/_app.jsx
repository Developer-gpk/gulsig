import React from 'react'
import '../src/styles/global.scss'
import Script from 'next/script';

export default function MyApp({ Component, pageProps }){
    return(
        <>
            <Script strategy="lazyOnload" src={`https://www.googletagmanager.com/gtag/js?id=G-SSSMX98E3Y`} />
            <Script strategy="lazyOnload">
                {`
                      window.dataLayer = window.dataLayer || [];
                      function gtag(){dataLayer.push(arguments);}
                      gtag('js', new Date());
                      gtag('config', 'G-SSSMX98E3Y', {
                      page_path: window.location.pathname,
                      });
                `}
            </Script>
            <Component {...pageProps} />
        </>
    )
}