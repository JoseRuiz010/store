import React from 'react'
import './card.css'
export default function Card() {
    return (
        <div class="container-card">
            <div className='container-card-imagen'>
                <img src='https://s3-us-west-2.amazonaws.com/assets.ximaro.net/pictures/files/000/005/084/original/KIT-LED-RGB-PARA-AUTO-AUDIORITMICO-01.jpg?1651528089' />
            </div>
            <div className='container-card-descripcion'>
                <p className='container-card-titulo'>TIRA DE LED PARA AUTO</p>
                <p className='container-card-precio'>$2.800</p>
                <button className='button-agregar-carrito'>Agregar </button>
            </div>
        </div>
    )
}
