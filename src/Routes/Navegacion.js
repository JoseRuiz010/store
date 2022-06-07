import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Navbar } from '../Components/nav/Navbar'
import Consultas from '../Screens/Consultas/Consultas'
import { Home } from '../Screens/Home/Home'

import Liquidacion from '../Screens/Liquidacion/Liquidacion'
import MyPerfil from '../Screens/MyPerfil/MyPerfil'
import { ProductosScreen } from '../Screens/Productos/ProductosScreen'

function Navegacion() {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/Home" element={<Home />} />
                <Route path="/Perfil" element={<MyPerfil />} />
                <Route path="/Consultas" element={<Consultas />} />
                <Route path="/Liquidacion" element={<Liquidacion />} />
                <Route path="/Categoria/:categoria" element={<ProductosScreen />} />
                <Route
                    path="*"
                    element={
                        <main style={{ padding: "1rem" }}>
                            <p>There's nothing here!</p>
                        </main>
                    }
                />

            </Routes>
        </>
    )
}

export default Navegacion