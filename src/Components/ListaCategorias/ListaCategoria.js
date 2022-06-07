import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { GlobalContext } from '../../context/GlobalContext';
import { getAllCategoria, servicesCategoria } from '../../services/servicesCategoria';
import Loading from '../Loading/Loading';
import './listaCategoria.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDumbbell } from '@fortawesome/free-solid-svg-icons'

export const ListaCategoria = () => {
    const [categorias, setcategoria] = useState();
    const { isOpenCategoria, changeCategoria } = useContext(GlobalContext)
    const navigate = useNavigate()

    useEffect(() => {
        setcategoria(getAllCategoria());
    }, [])

    if (!categorias) return (<Loading />);
    return (
        <div className={isOpenCategoria ? 'mostrarCategoria containcerCategoria ' : 'containcerCategoria ocultarCategoria'
        }>
            <div className='container-items-categoria'>
                {
                    categorias.map(c => (
                        <p className='item-categoria' onClick={() => { navigate(`Categoria/${c.name}`); changeCategoria() }} key={c.id}>{c.name}</p>
                    ))
                }
            </div>
        </div >
    )
}
