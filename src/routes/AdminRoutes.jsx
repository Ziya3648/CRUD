import React from 'react'
import AdminIndex from '../pages/Admin/AdminIndex/AdminIndex'
import AdminLayout from '../layout/AdminLayout'
import { Route, Routes } from 'react-router-dom'
import Categories from '../pages/Admin/Categories/GetCategories/Categories'
import EditCategory from '../pages/Admin/Categories/EditCategory/EditCategory'
import AddCategory from '../pages/Admin/Categories/AddCategory/AddCategory'
import Products from '../pages/Admin/Products/GetProducts/Products'
import EditProduct from '../pages/Admin/Products/EditProduct/EditProduct'
import AddProduct from '../pages/Admin/Products/AddProduct/AddProduct'
import { ProductContextProvider } from '../context/ProductContext'
import { CategoryContextProvider } from '../context/CategoryContext'

const AdminRoutes = () => {
  return (
    <AdminLayout>
      <Routes>
        <Route path='/manage/index' element={<CategoryContextProvider><ProductContextProvider><AdminIndex /></ProductContextProvider></CategoryContextProvider>} />

        <Route path='/manage/categories' element={<CategoryContextProvider><Categories /></CategoryContextProvider>} />
        <Route path='/manage/category/add' element={<AddCategory />} />
        <Route path='/manage/category/:id' element={<EditCategory />} />

        <Route path='/manage/products' element={<ProductContextProvider><Products /></ProductContextProvider>} />
        <Route path='/manage/product/:id' element={<CategoryContextProvider><EditProduct /></CategoryContextProvider>} />
        <Route path='/manage/product/add' element={<CategoryContextProvider><AddProduct /></CategoryContextProvider>} />
      </Routes>

    </AdminLayout >
  )
}

export default AdminRoutes