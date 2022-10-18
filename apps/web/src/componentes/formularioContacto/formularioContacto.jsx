import React from 'react'
import Image from 'next/image'
import { Dulce1, Dulce6 } from 'ui'
import { ScrollParallax } from 'react-just-parallax'
import { Formik, Field, Form } from 'formik'
import * as Yup from 'yup'
import emailjs from 'emailjs-com'

export default function FormularioContacto(){
    const validation = Yup.object().shape({
        nombre : Yup.string().required(),
        telefono: Yup.string().required(),
        email: Yup.string().email().required()
    });

    const ga = function(category, action, label) {
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
        <div className='contacto'>
            <h4>Contacto</h4>
            <div className='dulce-6'>
                <ScrollParallax isAbsolutelyPositioned>
                    <Image src={Dulce1} alt="Dulces a granel" />
                </ScrollParallax>
            </div>
            <Formik
                initialValues={{
                    nombre: "",
                    telefono: "",
                    email: "",
                    mensaje: ""
                }}
                validationSchema={validation}
                onSubmit={async (values, { setSubmitting }) =>{
                    await setTimeout(() =>{
                        setSubmitting(true)
                        emailjs.send(
                            'service_l2eiae9',
                            'template_lk6yb6j',
                            values,
                            'kpo2EQ7r0zH3MVQRy'
                        )
                    }, 5000)
                    await setSubmitting(false)
                }}
            >
                {props =>(
                    <Form>
                        <div className='formulario'>
                            {!props.isSubmitting ? (
                                <>
                                    <div className='izquierda'>
                                        <div className='input'>
                                            <label htmlFor="nombre">Nombre*</label>
                                            <Field type="text" name='nombre' id='nombre' className={`${props.errors.nombre && props.touched.nombre ? ("isError") : null}`} />
                                        </div>
                                        <div className='input'>
                                            <label htmlFor="telefono">Telefono*</label>
                                            <Field type="text" name='telefono' id='telefono' className={`${props.errors.telefono && props.touched.telefono ? ("isError") : null}`}  />
                                        </div>
                                        <div className='input'>
                                            <label htmlFor="email">Email*</label>
                                            <Field type="text" name='email' id='email' className={`${props.errors.email && props.touched.email ? ("isError") : null}`}  />
                                        </div>
                                    </div>
                                    <div className='derecha'>
                                        <div className='input'>
                                            <label htmlFor="mensaje">Email*</label>
                                            <Field as="textarea" name="mensaje" id="mensaje" rows="7"></Field>
                                        </div>
                                        <div className='submit'>
                                            <button type='submit' onClick={ga('Contacto', 'Enviar Formulario', '')}>Enviar</button>
                                        </div>
                                    </div>
                                    <div className='dulce-7'>
                                        <ScrollParallax isAbsolutelyPositioned>
                                            <Image src={Dulce6} alt="Dulces a granel" />
                                        </ScrollParallax>
                                    </div>
                                </>
                            ): (
                                <div className='enviando'>
                                    <h6>ENVIANDO MENSAJE…</h6>
                                </div>
                            )}
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    )
}