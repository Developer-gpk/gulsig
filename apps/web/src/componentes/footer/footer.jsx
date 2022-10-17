import React from 'react'
import Image from 'next/image'
import { LogoFooter, IconFacebook, IconInstagram, LogoGoplek } from 'ui'

export default function Footer(){
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
                                <div className='facebook'>
                                    <Image src={IconFacebook} layout="fill" alt='Icono Facebook' />
                                </div>
                                <div className='instagram'>
                                    <Image src={IconInstagram} layout="fill" alt='Icono Instagram' />
                                </div>
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