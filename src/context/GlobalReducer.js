 

const GlobalReducer=(state,action)=> {
  
switch (action.type) {
    case TipoReducer.mostrarCarrito:
        return{
            ...state,
            isOpenCarrito:!state.isOpenCarrito
        }
        
    case TipoReducer.changeCarrito:
        return{
            ...state,
            isOpenCarrito:!state.isOpenCarrito
        }
        
        case TipoReducer.agregarAlCarrito:
            return { ...state, 
                carrito:{...state.carrito,
                    prod:  state.carrito.prod.filter(c=>c.producto===action.payload).length<1?
                    [...state.carrito.prod,{producto:action.payload, cantidad:1}]
                    :state.carrito.prod.map(c=>c.producto===action.payload?{...c,cantidad:c.cantidad+1} :c),
                    
                    total:state.carrito.total+action.payload.price
                
                }
                
                }
        case TipoReducer.quitarAlCarrito:
            return { ...state, 
                carrito:{...state.carrito,
                    prod:  state.carrito.prod.find(c=>c.producto===action.payload).cantidad===1?
                    state.carrito.prod.filter(p=>p.producto!==action.payload)
                    :state.carrito.prod.map(c=>c.producto===action.payload?{...c,cantidad:c.cantidad-1} :c) ,
                    total:state.carrito.total-action.payload.price
                }
                }
    default: return state;
}


}

export default GlobalReducer


export const TipoReducer={
    agregarAlCarrito:"agregarAlCarrito",
    quitarDelCarrito:"quitarDelCarrito",
    mostrarCarrito:"mostrarCarrito",
    ocultarCarrito:"ocultarCarrito",
    changeCarrito:"changeCarrito"
}