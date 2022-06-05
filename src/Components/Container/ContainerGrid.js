import React from 'react'
import './containerGrid.css'
function ContainerGrid({ children }) {
    return (

        <div class="grid-container grid-container--fit">
            {children}
        </div>

    )
}

export default ContainerGrid