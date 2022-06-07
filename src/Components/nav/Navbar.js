import React, { Component, useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { GlobalContext } from '../../context/GlobalContext';
import Carrito from '../carrito/Carrito';
import { ListaCategoria } from '../ListaCategorias/ListaCategoria';
export const Navbar = () => {

    const [isOpenMenu, setisOpenMenu] = useState(false)

    const { changeCarrito, changeCategoria, carrito } = useContext(GlobalContext)
    const navigate = useNavigate()
    const changeMenu = () => {
        setisOpenMenu(!isOpenMenu);
    }

    return (
        <div className='container-Nabvar'>
            <nav className='navbar'>
                <div className='nav-logo' onClick={() => navigate('/Home')}>
                    <img style={{ width: '50px', borderRadius: 20 }} src='https://www.logolynx.com/images/logolynx/29/29764eeae62421a6f00f2ef720287972.jpeg' />
                </div>
                <ul className={isOpenMenu ? "menu-open nabvar-items" : "nabvar-items menu-close"}>
                    <li className='nabvar-item'><Link to="/Home" onClick={() => changeMenu()}>Home</Link></li>
                    <li style={{ position: 'relative' }} className='nabvar-item' onClick={() => { changeMenu(); changeCategoria() }}> Categoria </li>
                    <li className='nabvar-item'><Link to="/Liquidacion" onClick={() => changeMenu()}>Liquidacion</Link></li>
                    <li className='nabvar-item'><Link to="/Perfil" onClick={() => changeMenu()}>Mi Perfil</Link></li>
                    <li className='nabvar-item'><Link to="/Consultas" onClick={() => changeMenu()}>Consultas</Link></li>
                </ul>
                <div className='navbar-carrito'>
                    <span className='navbar-item-carrito' onClick={() => changeCarrito()}>
                        <span style={{ background: '#DC3545', borderRadius: '100%', padding: '2px', textAlign: 'center' }}>{carrito.cantidad}</span><FontAwesomeIcon style={{ height: 18 }} icon={faCartShopping} />
                    </span>
                    <span className='navbar-menu' onClick={() => changeMenu()}>
                        <FontAwesomeIcon icon={faBars} />
                    </span>
                </div>

            </nav>
            <Carrito />
            <ListaCategoria />
        </div >
    )

}
