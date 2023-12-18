import axios from "axios";
import { createContext, useState } from "react";
import apiUrl from "../utils/api";

const CategoryContext = createContext()

const CategoryContextProvider = ({ children }) => {
    const [categories, setCategories] = useState([])


    const getCategories = async () => {
        try {
            await axios.get(`${apiUrl.categoryAPI}`)
                .then(response => setCategories(response.data))
        } catch (error) {
            console.log(error);
        }
    }

    getCategories()

    return (
        <CategoryContext.Provider value={{ categories, getCategories }}>
            {children}
        </CategoryContext.Provider>
    )
}


export { CategoryContext, CategoryContextProvider };