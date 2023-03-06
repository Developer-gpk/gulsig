import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import '../src/styles/global.scss'
import Script from 'next/script'
import * as ga from '../src/componentes/libs/gtag' 

export default function MyApp({ Component, pageProps }){
    const router = useRouter()
    useEffect(() => {
        const handleRouteChange = (url) => {
            ga.pageview(url)
        }
        //When the component is mounted, subscribe to router changes
        //and log those page views
        router.events.on('routeChangeComplete', handleRouteChange)
    
        // If the component is unmounted, unsubscribe
        // from the event with the `off` method
        return () => {
            router.events.off('routeChangeComplete', handleRouteChange)
        }
    }, [router.events])
    return(
        <>
            <Script id='analytics-cdn' strategy="lazyOnload" src={`https://www.googletagmanager.com/gtag/js?id=UA-246056744-1`} />
            <Script id='googleAds-cdn' strategy="lazyOnload" src={`https://www.googletagmanager.com/gtag/js?id=AW-11002374286`} />
            <Script id='script-analytics' strategy="lazyOnload">
                {`
                      window.dataLayer = window.dataLayer || [];
                      function gtag(){dataLayer.push(arguments);}
                      gtag('js', new Date());
                    
                      gtag('config', 'UA-246056744-1');
                `}
            </Script>
            <Script id='script-googleads' strategy="lazyOnload">
                {`
                      window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'AW-11002374286');
                `}
            </Script>
            <Script id='script-facebook' strategy="afterInteractive">
                {`
                      !function(f,b,e,v,n,t,s)
                      {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                      n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                      if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                      n.queue=[];t=b.createElement(e);t.async=!0;
                      t.src=v;s=b.getElementsByTagName(e)[0];
                      s.parentNode.insertBefore(t,s)}(window,document,'script',
                      'https://connect.facebook.net/en_US/fbevents.js');
                       fbq('init', '889448342020241'); 
                      fbq('track', 'PageView');
                `}
            </Script>
            <Component {...pageProps} />
        </>
    )
}