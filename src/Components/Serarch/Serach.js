import React, { useState } from 'react'
import './search.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
export const Serach = ({ setserarch }) => {


    return (
        <div class="input-group mb-3">
            <input onChange={(e) => setserarch(e.target.value)} type="text" class="form-control" placeholder="Buscar" aria-label="Username" aria-describedby="basic-addon1" />
            <span class="input-group-text" id="basic-addon1"><FontAwesomeIcon icon={faMagnifyingGlass} /></span>
        </div>
    )
}
