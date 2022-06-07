import { categorias } from "./datos"

export const getAllCategoria = () => { return categorias }



export const servicesCategoria = () => {
    return { getAllCategoria }
}
