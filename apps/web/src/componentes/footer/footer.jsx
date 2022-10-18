import React from 'react'
import Image from 'next/image'
import { LogoFooter, IconFacebook, IconInstagram, LogoGoplek } from 'ui'

export default function Footer(){

    const gaFooter = function(category, action, label) {
        if ("function" === typeof gtag
            && "string" === typeof category
            && "string" === typeof action) {
            var object = {
                "event_action": action,
                "event_label" : label || ''
            };

            // Send to Google Analytics.
            gtag('event', category, object);

            // Print in console.
            if ("console" in window) {
                console.log(
                    'ga: [category: %s, action: %s, label: %s]',
                    category,
                    object['event_action'],
                    object['event_label']
                );
            }
        }
    }

    return(
        <section className='' id='footer'>
            <div className='holder'>
                <div className='container-fluid'>
                    <div className='logo-derecho'>
                        <div className='logo'>
                            <Image src={LogoFooter} layout="fill" alt='Gulsig a granel tienda y proveedor de dulces a granel' />
                        </div>
                        <div className='derechos'>
                            <h5>2022 ©  Gulsig · Todos los derechos Reservados</h5>
                            <h6>Aviso de privacidad</h6>
                        </div>
                    </div>
                    <div className='extras'>
                        <div className='direccion'>
                            <h4>Dirección</h4>
                            <h5>Val´Quirico</h5>
                            <h6>Carretera Santa Isabel Tetlatauca,<br /> km 2, 90710 San Miguel Xoxtla,<br /> Tlaxcala</h6>
                            <span>Local 110-010</span>
                        </div>
                        <div className='redes'>
                            <h4>Síguenos en</h4>
                            <div className='icons'>
                                <a href='https://www.facebook.com' className='facebook' onClick={gaFooter('Contacto', 'Abrir Facebook', '')} target='_blank' rel="noopener noreferrer">
                                    <Image src={IconFacebook} layout="fill" alt='Icono Facebook' />
                                </a>
                                <a href='https://www.instagram.com' className='instagram' onClick={gaFooter('Contacto', 'Abrir Instagram', '')} target='_blank' rel="noopener noreferrer">
                                    <Image src={IconInstagram} layout="fill" alt='Icono Instagram' />
                                </a>
                            </div>
                        </div>
                        <div className='logo-goplek'>
                            <Image src={LogoGoplek} layout="fill" alt='Logo Goplek' />
                        </div>
                    </div>
                    <div className='logo-derechos'>
                        <div className='derechos'>
                            <h5>2022 ©  Gulsig · Todos los derechos Reservados</h5>
                            <h6>Aviso de privacidad</h6>
                        </div>
                        <div className='logo-goplek'>
                            <Image src={LogoGoplek} layout="fill" alt='Logo Goplek' />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
