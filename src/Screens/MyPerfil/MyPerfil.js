import React, { useEffect, useState } from 'react'
import './myPerfil.css'
const MyPerfil = () => {
    const [user, setuser] = useState();
    useEffect(() => {
        console.log('user');
        const user = fetch('https://randomuser.me/api/')
            .then(res => res.json())
            .then(data => setuser(data.results[0]))

    }, [])

    if (!user) return (
        <div style={{ width: '550px', margin: 'auto', textAlign: 'center', marginTop: '30%' }}>
            <div class="spinner-grow spinner-grow-sm" role="status" style={{ marginRight: 5 }}>
                <span class="visually-hidden">Loading...</span>
            </div>
            <div class="spinner-grow spinner-grow-sm" role="status" style={{ marginRight: 5 }}>
                <span class="visually-hidden">Loading...</span>
            </div><div class="spinner-grow spinner-grow-sm" role="status" style={{ marginRight: 5 }}>
                <span class="visually-hidden">Loading...</span>
            </div>
        </div>
    )
    const { gender, name: { first, last }, location: { city, state, country }, email, phone, picture: { large, medium, thumbnail } } = user;

    const ItemData = ({ data }) => {
        const { tag, value } = data
        return (
            <div className='item-data-user' >
                <h6>{tag}:</h6> <h6 style={{ marginLeft: 10, fontWeight: '300', color: 'black' }}>{value}</h6>
            </div>
        )
    }

    return (
        <div className='container-perfil'>
            <div className='container-imagen-user'>
                <img src={large} alt="imagen Perfil" />
            </div>
            <div className='container-date'>
                <h5>{first + " " + last} </h5>
                <p>{email}</p>
                <hr />
            </div>
            <div className='container-date-user'>
                <ItemData data={{ tag: 'Nombre', value: first + " " + last }} />
                <ItemData data={{ tag: 'Email', value: email }} />
                <ItemData data={{ tag: 'Telefono', value: phone }} />
                <ItemData data={{ tag: 'Pais', value: country }} />
                <ItemData data={{ tag: 'Ciudad', value: city }} />
                <ItemData data={{ tag: 'Estado', value: state }} />
                <ItemData data={{ tag: 'Genero', value: gender }} />
            </div>

        </div>
    )
}

export default MyPerfil