import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Navbar } from '../Components/nav/Navbar'
import Consultas from '../Screens/Consultas/Consultas'
import { Home } from '../Screens/Home/Home'

import Liquidacion from '../Screens/Liquidacion/Liquidacion'
import MyPerfil from '../Screens/MyPerfil/MyPerfil'

function Navegacion() {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/Home" element={<Home />} />
                <Route path="/Perfil" element={<MyPerfil />} />
                <Route path="/Consultas" element={<Consultas />} />
                <Route path="/Liquidacion" element={<Liquidacion />} />
            </Routes>
        </>
    )
}

export default Navegacion