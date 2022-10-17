import React from 'react'
import Head from 'next/head'
import Footer from '../componentes/footer/footer'

export default function Template({children}){
    return(
        <>
            <Head>
                <title>Gulsig a granel | Tienda de dulces a granel en Val´Quirico</title>
                <meta name="description" content="Somos una nueva experiencia que ofrece la mejor variedad de dulces a granel entre otras golosinas de autor ubicados en Val´Quirico, Puebla." />
                <meta name="keywords" content="dulces a granel, gomitas a granel, granel dulcerías, venta de dulces a granel, gomitas enchiladas a granel, dulces a granel por kilo, gomitas a granel precio, venta de gomitas a granel, dulces y botanas a granel, botanas a granel, panditas a granel, skwinkles a granel, kranky a granel, dulces ricolino a granel *, dulces confiados a granel, dulcerias a granel, tienda de dulces, proveedor de dulces a granel, dulces para fiesta, dulces para fiestas infantiles, dulces para cumpleaños infantiles, caramelos para cumpleaños, dulces de fiesta, tiendas de valquirico, que hay en valquirico, valquirico que hay" />
                <meta name="author" content="Goplek" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </Head>
            <div style={{ overflow: "hidden"}}>
                {children}
            </div>
            <Footer />
        </>
    )
}