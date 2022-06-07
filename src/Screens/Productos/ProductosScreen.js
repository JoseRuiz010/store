import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Card from '../../Components/Card/Card';
import ContainerGrid from '../../Components/Container/ContainerGrid';
import Loading from '../../Components/Loading/Loading';
import './productos.css'
import { productosByCategoria, productosByNombre } from '../../services/servicesProductos';
import { Serach } from '../../Components/Serarch/Serach';

export const ProductosScreen = () => {
    let { categoria } = useParams();
    const [productos, setproductos] = useState();
    const [serarch, setserarch] = useState('');

    useEffect(() => {

        setproductos(productosByCategoria(categoria));

    }, [categoria])

    useEffect(() => {

        if (serarch !== '') setproductos(productosByNombre(serarch));

    }, [serarch])

    if (!productos) return <Loading />
    return (
        <div className='container-ProductosScreen'>
            <Serach setserarch={setserarch} />
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
