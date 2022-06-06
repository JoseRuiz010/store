import React, { Component, useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { GlobalContext } from '../../context/GlobalContext';
import Carrito from '../carrito/Carrito';
export const Navbar = () => {

    const [isOpenMenu, setisOpenMenu] = useState(false)
    const {changeCarrito} = useContext(GlobalContext)

    const changeMenu = () => {
        setisOpenMenu(!isOpenMenu);
    }

    return (
        <div className='container-Nabvar'>
            <nav className='navbar'>
                <div className='nav-logo'>
                    <img style={{ width: '50px', borderRadius: 20 }} src='https://www.logolynx.com/images/logolynx/29/29764eeae62421a6f00f2ef720287972.jpeg' />
                </div>
                <ul className={isOpenMenu ? "menu-open nabvar-items" : "nabvar-items menu-close"}>
                    <li className='nabvar-item'><Link to="/Home">Home</Link></li>
                    <li className='nabvar-item'><Link to="/Liquidacion">Liquidacion</Link></li>
                    <li className='nabvar-item'><Link to="/Novedades">Novedades</Link></li>
                    <li className='nabvar-item'><Link to="/Consultas">Consultas</Link></li>
                </ul>
                <div className='navbar-carrito'>
                    <span className='navbar-item-carrito' onClick={()=>changeCarrito()}>
                        <FontAwesomeIcon style={{ height: 18 }} icon={faCartShopping} />
                    </span>
                    <span className='navbar-menu' onClick={() => changeMenu()}>
                        <FontAwesomeIcon icon={faBars} />
                    </span>
                </div>

            </nav>
            <Carrito/>
        </div>
    )

}
