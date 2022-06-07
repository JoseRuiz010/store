

const GlobalReducer = (state, action) => {

    switch (action.type) {
        case TipoReducer.mostrarCarrito:
            return {
                ...state,
                isOpenCarrito: !state.isOpenCarrito
            }

        case TipoReducer.changeCarrito:
            return {
                ...state,
                isOpenCarrito: !state.isOpenCarrito
            }
        case TipoReducer.changeCategoria:
            return {
                ...state,
                isOpenCategoria: !state.isOpenCategoria
            }

        case TipoReducer.agregarAlCarrito:
            return {
                ...state,
                carrito: {
                    ...state.carrito,
                    productos: state.carrito.productos.filter(c => c.producto === action.payload).length < 1 ?
                        [...state.carrito.productos, { producto: action.payload, cantidad: 1 }]
                        : state.carrito.productos.map(c => c.producto === action.payload ? { ...c, cantidad: c.cantidad + 1 } : c),

                    total: state.carrito.total + action.payload.price,
                    cantidad: state.carrito.cantidad + 1

                }

            }
        case TipoReducer.quitarDelCarrito:
            return {
                ...state,
                carrito: {
                    ...state.carrito,
                    productos: state.carrito.productos.find(c => c.producto === action.payload).cantidad === 1 ?
                        state.carrito.productos.filter(p => p.producto !== action.payload)
                        : state.carrito.productos.map(c => c.producto === action.payload ? { ...c, cantidad: c.cantidad - 1 } : c),
                    total: state.carrito.total - action.payload.price,
                    cantidad: state.carrito.cantidad - 1
                }
            }
        default: return state;
    }


}

export default GlobalReducer


export const TipoReducer = {
    agregarAlCarrito: "agregarAlCarrito",
    quitarDelCarrito: "quitarDelCarrito",
    mostrarCarrito: "mostrarCarrito",
    ocultarCarrito: "ocultarCarrito",
    changeCarrito: "changeCarrito",
    changeCategoria: "changeCategoria"
}