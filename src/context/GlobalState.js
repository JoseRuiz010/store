import { useReducer } from "react"
import { GlobalContext } from "./GlobalContext";
import GlobalReducer, { TipoReducer } from "./GlobalReducer";

const initialState = {
    isOpenCarrito: false,
    isOpenCategoria: false,
    productos: [],
    user: null,
    error: null,
    carrito: {
        productos: [],
        total: 0
    }
}


const GlobalStateProvider = ({ children }) => {
    const [stateGlobal, dispatch] = useReducer(GlobalReducer, initialState);

    const changeCarrito = () => {

        dispatch({
            type: TipoReducer.changeCarrito
        })
    }
    const changeCategoria = () => {

        dispatch({
            type: TipoReducer.changeCategoria
        })
    }

    const agregarAlCarrito = (producto) => {

        dispatch({
            type: TipoReducer.agregarAlCarrito,
            payload: producto
        })
    }
    const quitarAlCarrito = (producto) => {
        console.log(producto);
        dispatch({
            type: TipoReducer.quitarDelCarrito,
            payload: producto
        })
    }


    return (
        <GlobalContext.Provider value={{
            carrito: stateGlobal.carrito,
            isOpenCarrito: stateGlobal.isOpenCarrito,
            isOpenCategoria: stateGlobal.isOpenCategoria,
            changeCarrito,
            agregarAlCarrito,
            quitarAlCarrito,
            changeCategoria
        }}>
            {children}
        </GlobalContext.Provider>
    )
}

export default GlobalStateProvider;