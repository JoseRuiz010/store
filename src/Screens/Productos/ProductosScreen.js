import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Card from '../../Components/Card/Card';
import ContainerGrid from '../../Components/Container/ContainerGrid';
import Loading from '../../Components/Loading/Loading';
import './productos.css'
import { productosByCategoria } from '../../services/servicesProductos';

export const ProductosScreen = () => {
    let { categoria } = useParams();
    const [productos, setproductos] = useState();

    useEffect(() => {

        setproductos(productosByCategoria(categoria));

    }, [categoria])

    if (!productos) return <Loading />
    return (
        <div className='container-ProductosScreen'>
            <ContainerGrid>
                {
                    productos.map(p => (

                        <Card key={p.id} producto={p} />
                    ))
                }
            </ContainerGrid>

        </div>
    )
}
