import { useReducer } from "react"
import { GlobalContext } from "./GlobalContext";
import GlobalReducer, { TipoReducer } from "./GlobalReducer";

const initialState = {
    isOpenCarrito: false,
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
        console.log('Click');
        dispatch({
            type: TipoReducer.changeCarrito
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
            changeCarrito,
            agregarAlCarrito,
            quitarAlCarrito
        }}>
            {children}
        </GlobalContext.Provider>
    )
}

export default GlobalStateProvider;