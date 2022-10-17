import React from 'react'
import Template from '../src/template/template'
import Banner from '../src/componentes/banner/banner'
import Contacto from '../src/componentes/contacto/contacto'

export default function Index(){
  return(
    <Template>
      <Banner />
      <Contacto />
    </Template>
  )
}
