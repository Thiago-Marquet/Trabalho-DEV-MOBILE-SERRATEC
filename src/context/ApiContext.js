import { createContext, useContext, useEffect, useState } from "react";
import api from "../services/api";

export const ApiContext = createContext({})

const ApiProvider = ({children}) =>{

    const [produto, setProduto] = useState([])
    const [categoria, setCategoria] = useState([])


    const getProduto = async () => {
        const { data } = await api.get("/produtos")
        setProduto(data)
    }

    const getCategoria = async () =>{
        const { data } = await api.get("/categorias")
        setCategoria(data)
    }

    return (
        <ApiContext.Provider value={{produto, getProduto, categoria, getCategoria}}>
            {children}
        </ApiContext.Provider>
    )
}

export default ApiProvider;