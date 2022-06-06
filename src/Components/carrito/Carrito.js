import React, { useContext } from 'react'
import { GlobalContext } from '../../context/GlobalContext'
import './carrito.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'
const Carrito = () => {
    const {isOpenCarrito} = useContext(GlobalContext)
    return (
        <div className={isOpenCarrito?"container-carrito block": "container-carrito none"}>
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
                    <tr className='dataTable'>
                        <th scope="row">Auricular</th>
                        <td>{10}</td>
                        <td>${10000}</td>
                        <td><FontAwesomeIcon style={{color:'red'}} icon={faTrashCan} /></td>
                    </tr>
                    <tr className='dataTable'>
                        <th scope="row">Auricular</th>
                        <td>{10}</td>
                        <td>${10000}</td>
                        <td><FontAwesomeIcon style={{color:'red'}} icon={faTrashCan} /></td>
                    </tr>
                    <tr className='dataTable'>
                        <th scope="row">Auricular</th>
                        <td>{10}</td>
                        <td>${10000}</td>
                        <td><FontAwesomeIcon style={{color:'red'}} icon={faTrashCan} /></td>
                    </tr>
                    <tr className='dataTable'>
                        <th scope="row">Auricular</th>
                        <td>{10}</td>
                        <td>${10000}</td>
                        <td><FontAwesomeIcon style={{color:'red'}} icon={faTrashCan} /></td>
                    </tr>
                    <tr className='dataTable'>
                        <th scope="row">Auricular</th>
                        <td>{10}</td>
                        <td>${10000}</td>
                        <td><FontAwesomeIcon style={{color:'red'}} icon={faTrashCan} /></td>
                    </tr>
                    <tr className='dataTable'>
                        <th scope="row">Auricular</th>
                        <td>{10}</td>
                        <td>${10000}</td>
                        <td><FontAwesomeIcon style={{color:'red'}} icon={faTrashCan} /></td>
                    </tr>
                   
                    <tr className='dataTable'>
                        <th scope="row">Auricular</th>
                        <td>{10}</td>
                        <td>${10000}</td>
                        <td><FontAwesomeIcon style={{color:'red'}} icon={faTrashCan} /></td>
                    </tr>
                   
                    <tr className='dataTable'>
                        <th scope="row">Auricular</th>
                        <td>{10}</td>
                        <td>${10000}</td>
                        <td><FontAwesomeIcon style={{color:'red'}} icon={faTrashCan} /></td>
                    </tr>
                   
                    <tr className='dataTable'>
                        <th scope="row">Auricular</th>
                        <td>{10}</td>
                        <td>${10000}</td>
                        <td><FontAwesomeIcon style={{color:'red'}} icon={faTrashCan} /></td>
                    </tr>
                   
                </tbody>
            </table>
           </div>
            <hr />
             <h3>Total:  $5000</h3>
        </div>


    )
}



export default Carrito
