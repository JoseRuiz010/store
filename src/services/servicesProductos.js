import { productos } from "./datos"


export const allProducts = () => productos;

export const ofertaProducto = () => productos.slice(4, 10);

export const productosByNombre = (name) => productos.filter(p => p.name.toUpperCase().includes(name.toUpperCase()));

export const productosByCategoria = (categoria) => categoria === "Todas" ? productos : productos.filter(p => p.category === categoria)




