import axios from "axios";
import { createContext, useState } from "react";
import apiUrl from "../utils/api";

const ProductContext = createContext()

const ProductContextProvider = ({ children }) => {
    const [products, setProducts] = useState([])


    const getProducts = async () => {
        try {
            await axios.get(`${apiUrl.productAPI}`)
                .then(response => setProducts(response.data))
        } catch (error) {
            console.log(error);
        }
    }

    getProducts()

    return (
        <ProductContext.Provider value={{ products, getProducts }}>
            {children}
        </ProductContext.Provider>
    )
}


export { ProductContext, ProductContextProvider };