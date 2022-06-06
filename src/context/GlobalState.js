import { useReducer } from "react"
import { GlobalContext } from "./GlobalContext";
import GlobalReducer, { TipoReducer } from "./GlobalReducer";

const initialState={
    isOpenCarrito:true,
    products:[], 
    user:null,
    error:null,
    carrito:{
        productos:[],
        total:0
    }
}


const  GlobalStateProvider=({children})=> {
   const [stateGlobal, dispatch] = useReducer(GlobalReducer, initialState);

   const changeCarrito=()=>{
       console.log('Click');
       dispatch({
        type:TipoReducer.changeCarrito
       })
   }
  

   return(
       <GlobalContext.Provider value={{
          carrito: stateGlobal.carrito,
          isOpenCarrito: stateGlobal.isOpenCarrito,
          changeCarrito,
       }}>
           {children}
       </GlobalContext.Provider>
   )
}

export default GlobalStateProvider;