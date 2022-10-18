import React from 'react'
import Image from 'next/image'
import { Cover, LogoGulsig, Dulce1, Dulce2, CoverMobile } from 'ui'
import { ScrollParallax } from 'react-just-parallax';

export default function Banner(){
    return(
        <section className='' id='banner'>
            <div className='imagen'>
                <Image src={Cover} layout="fill" alt='Gulsig a granel tienda y proveedor de dulces a granel' />
            </div>
            <div className='imagenDesk'>
                <Image src={CoverMobile} layout="fill" alt='Gulsig a granel tienda y proveedor de dulces a granel' />
            </div>
            <div className='holder'>
                <div className='container-fluid'>
                    <div className='dulce-1'>
                        <ScrollParallax isAbsolutelyPositioned strength="0.10" lerpEase="0.10">
                            <Image src={Dulce1} layout="fill" alt='Dulces a granel' />
                        </ScrollParallax>
                    </div>
                    <h1>Bienvenid@ a la experiencia</h1>
                    <div className='logo'>
                        <Image src={LogoGulsig} layout="fill" alt='Gulsig a granel tienda y proveedor de dulces a granel' />
                    </div>
                    <h2>Una aventura <br /> monstruosamente divertida.</h2>
                    <div className='dulce-2'>
                        <ScrollParallax isAbsolutelyPositioned>
                            <Image src={Dulce2} layout="fill" alt='Dulces a granel' />
                        </ScrollParallax>
                    </div>
                </div>
            </div>
        </section>
    )
}