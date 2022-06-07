import { productos } from "./datos"


export const allProducts = () => { return productos }

export const ofertaProducto = () => { return productos.slice(4, 10) }

export const productosByCategoria = (categoria) => categoria === "Todas" ? productos : productos.filter(p => p.category === categoria)
export const servicesProductos = () => {
    return {
        allProducts
    }
}
