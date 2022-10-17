import React from 'react'
import Image from 'next/image'
import { DPS, Dulce3, Dulce4, Dulce5 } from 'ui'
import { ScrollParallax } from 'react-just-parallax'
import FormularioContacto from '../formularioContacto/formularioContacto'

export default function Contacto(){
    return(
        <section className='' id='contacto'>
            <div className='holder'>
                <div className='container-fluid'>
                    <div className='dulce-3'>
                        <ScrollParallax isAbsolutelyPositioned>
                            <Image src={Dulce3} alt="Dulces a granel" />
                        </ScrollParallax>
                    </div>
                    <div className="dulce-4">
                        <ScrollParallax isAbsolutelyPositioned>
                            <Image src={Dulce4} alt="Dulces a granel" />
                        </ScrollParallax>
                    </div>
                    <div className='logo-text'>
                        <Image src={DPS} layout="fill" alt='Gulsig a granel tienda y proveedor de dulces a granel' />
                    </div>
                    <h3>Tenemos <span>gramos</span> de todos los <br /> <span>sabores para cada gusto.</span></h3>
                    <div className="dulce-5">
                        <ScrollParallax isAbsolutelyPositioned>
                            <Image src={Dulce5} alt="Dulces a granel" />
                        </ScrollParallax>
                    </div>
                    <FormularioContacto />
                </div>
            </div>
        </section>
    )
}