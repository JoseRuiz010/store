import React, { Component, useState } from 'react'
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
                    <li className='nabvar-item'>Home</li>
                    <li className='nabvar-item'>Liquidacion</li>
                    <li className='nabvar-item'>Novedades</li>
                    <li className='nabvar-item'>Consultas</li>
                </ul>
                <div className='navbar-carrito'>
                    <span className='navbar-carrito'>Carrito</span>
                    <span className='navbar-menu' onClick={() => changeMenu()}> X </span>
                </div>

            </nav>
        </div>
    )

}
