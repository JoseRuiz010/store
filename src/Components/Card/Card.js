import React from 'react'
import './card.css'
export default function Card({name,imgUrl,price,category,id}) {
    return (
        <div class="container-card">
            <div className='container-card-imagen'>
                <img src={imgUrl}  alt='producto'/>
            </div>
            <div className='container-card-descripcion'>
               
                <p className='container-card-titulo'>{name}</p>
                <p className='container-card-precio'>${price}</p>
                <button className='button-agregar-carrito'>Agregar </button>
            </div>
        </div>
    )
}
