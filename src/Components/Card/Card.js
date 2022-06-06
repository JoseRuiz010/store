import React, { useContext } from 'react'
import { GlobalContext } from '../../context/GlobalContext'
import './card.css'
export default function Card({ producto }) {
    const { agregarAlCarrito } = useContext(GlobalContext)
    const { name, imgUrl, price, category, id } = producto
    return (
        <div class="container-card">
            <div className='container-card-imagen'>
                <img src={imgUrl} alt='producto' />
            </div>
            <div className='container-card-descripcion'>

                <p className='container-card-titulo'>{name}</p>
                <p className='container-card-precio'>${price}</p>
                <button className='button-agregar-carrito' onClick={() => agregarAlCarrito(producto)}>Agregar </button>
            </div>
        </div>
    )
}
