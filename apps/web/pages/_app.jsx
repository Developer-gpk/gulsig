import React from 'react'
import '../src/styles/global.scss'

export default function MyApp({ Component, pageProps }){
    return <Component {...pageProps} />
}