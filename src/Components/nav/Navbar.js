import React, { Component, useState } from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'
export const Navbar = () => {

    const [isOpenMenu, setisOpenMenu] = useState(false)

    const changeMenu = () => {
        setisOpenMenu(!isOpenMenu);
    }

    return (
        <div className='container-Nabvar'>
            <nav className='navbar'>
                <div className='nav-logo'>
                    Logo
                </div>
                <ul className={isOpenMenu ? "menu-open nabvar-items" : "nabvar-items menu-close"}>
                    <li className='nabvar-item'><Link to="/Home">Home</Link></li>
                    <li className='nabvar-item'><Link to="/Liquidacion">Liquidacion</Link></li>
                    <li className='nabvar-item'><Link to="/Novedades">Novedades</Link></li>
                    <li className='nabvar-item'><Link to="/Consultas">Consultas</Link></li>
                </ul>
                <div className='navbar-carrito'>
                    <span className='navbar-carrito'>Carrito</span>
                    <span className='navbar-menu' onClick={() => changeMenu()}> X </span>
                </div>

            </nav>
        </div>
    )

}
