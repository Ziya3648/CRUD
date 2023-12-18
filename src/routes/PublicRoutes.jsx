import React from 'react'
import Layout from '../layout/Layout'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../pages/User/Index/HomePage'
import Products from '../pages/User/Products/Products'
import ProductDetails from '../pages/User/ProductDetails/ProductDetails'
import { ProductContextProvider } from '../context/ProductContext'
import { CategoryContextProvider } from '../context/CategoryContext'

const PublicRoutes = () => {
    return (
        <Layout>
            <Routes>
                <Route path='/' element={<HomePage />} />

                <Route path='/products' element={<CategoryContextProvider><ProductContextProvider><Products /></ProductContextProvider></CategoryContextProvider>} />
                <Route path='/products/:id' element={<ProductDetails />} />
            </Routes>
        </Layout>
    )
}

export default PublicRoutes