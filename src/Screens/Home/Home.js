import { Component, useEffect, useState } from 'react'
import { Carousel } from 'react-responsive-carousel';
import './home.css'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import ContainerGrid from '../../Components/Container/ContainerGrid';
import Card from '../../Components/Card/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFire } from '@fortawesome/free-solid-svg-icons'
import Carrito from '../../Components/carrito/Carrito';

import { allProducts, ofertaProducto } from '../../services/servicesProductos';
import Loading from '../../Components/Loading/Loading';
const Carrusel = () => {
    return (
        <div className='container-carousel'>
            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel" >
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="https://s3-us-west-2.amazonaws.com/assets.ximaro.net/banners/pictures/000/000/075/original/banner-web-cyber-13.jpg?1617134479" class="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="
                       https://s3-us-west-2.amazonaws.com/assets.ximaro.net/banners/pictures/000/000/085/original/banner-web-comprimido-PSD.jpg?1638471961" class="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="https://s3-us-west-2.amazonaws.com/assets.ximaro.net/banners/pictures/000/000/075/original/banner-web-cyber-13.jpg?1617134479" class="d-block w-100" alt="..." />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div >
    );
}


export const Home = () => {
    const [productos, setproductos] = useState()
    useEffect(() => {

        setproductos(ofertaProducto());

    }, [])
    if (!productos) return <Loading />
    return (
        <div className='home-container'>
            <Carrusel />
            <br />

            <div className='containcerProducto'>

                <p className='etiqueta'>
                    <FontAwesomeIcon style={{ marginRight: '10px' }} color='orange' height={25} icon={faFire} />
                    Hot Deals
                </p>

                <ContainerGrid>

                    {
                        productos.map(p => (

                            <Card key={p.id} producto={p} />
                        ))
                    }

                </ContainerGrid>
            </div>
        </div >
    )

}


