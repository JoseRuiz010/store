import React, { useState } from 'react'
import { preguntasRespuestas } from '../../services/datos'
import './consultas.css'


const PreguntaRespuesta = ({ pregunta, respuesta }) => {
    const [isVisible, setisVisible] = useState(false)
    return (
        <div className={"container-pregunta-respuesta "}>
            <div className='Pregunta' onClick={() => setisVisible(!isVisible)}>
                <h4>{pregunta}</h4>
            </div>
            <div className={isVisible ? "respuesta mostrarRespuesta" : "respuesta ocultarRespuesta "} >
                <p>{respuesta}</p>
            </div>
        </div>
    )
}


function Consultas() {
    return (
        <div className='container-consulta'>
            <h3 className='title-consulta'>Preguntas Frecuentes</h3>

            <div className='container-preguntas'>
                {
                    preguntasRespuestas.map(p => (
                        <PreguntaRespuesta key={p.pregunta} {...p} />
                    ))
                }
            </div>

        </div>
    )
}

export default Consultas