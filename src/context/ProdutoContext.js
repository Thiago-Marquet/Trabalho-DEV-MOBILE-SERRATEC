import { createContext, useContext, useEffect, useState } from "react";
import axios from 'axios'

export const ContextProduto = createContext({})

const ProdutoProvider = ({children}) =>{

    const [produto, setProduto] = useState([])
    const [id, setId] = useState([])

    const getProduto = async () => {
        const { data } = await axios.get("http://localhost:8080/produtos")
        setProduto(data)
        setId(data.nome)
        console.log(id)
    }

    return (
        <ContextProduto.Provider value={{produto, getProduto, id}}>
            {children}
        </ContextProduto.Provider>
    )
}

export default ProdutoProvider;