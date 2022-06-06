import React, { useContext } from 'react'
import { GlobalContext } from '../../context/GlobalContext'
import './carrito.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'
const Carrito = () => {
    const { isOpenCarrito, carrito, quitarAlCarrito } = useContext(GlobalContext)
    const { productos, total } = carrito
    return (
        <div className={isOpenCarrito ? "container-carrito block" : "container-carrito none"}>
            <h3 className='titleCarrito'>Carrito</h3>
            <div className='tabla'>

                <table className='table'>
                    <thead>
                        <tr>
                            <th scope='col'>Producto</th>
                            <th scope='col'>Cantidad</th>
                            <th scope='col'>Subtotal</th>
                            <th scope='col'></th>
                        </tr>
                    </thead>
                    <div>

                    </div>
                    <tbody className='table-items' >
                        {
                            productos.length < 1 ? (<p>No Se agregaron Productos</p>) : (
                                productos.map(c => (
                                    <tr className='dataTable' key={c.producto.id}>
                                        <th style={{ overflow: 'auto' }} scope="row">{c.producto.name}</th>
                                        <td>{c.cantidad}</td>
                                        <td>${c.cantidad * c.producto.price}</td>
                                        <td><FontAwesomeIcon style={{ color: 'red' }} icon={faTrashCan} onClick={() => quitarAlCarrito(c.producto)} /></td>
                                    </tr>
                                )))
                        }

                    </tbody>
                </table>
            </div>
            <hr />
            <h3>Total: {total}</h3>
        </div>


    )
}



export default Carrito
