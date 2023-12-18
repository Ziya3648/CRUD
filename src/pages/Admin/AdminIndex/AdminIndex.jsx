import React, { useContext } from 'react'
import './index.css'
import { CategoryContext } from '../../../context/CategoryContext'
import { ProductContext } from '../../../context/ProductContext'

const AdminIndex = () => {

  const categoryContext = useContext(CategoryContext)
  const productContext = useContext(ProductContext)

  return (
    <div className='mt-5 row'>
      <div className="col-lg-6">
        <div className="bg-info">
          <h3>{categoryContext.categories.length}</h3>
          <p>Categories</p>
        </div>
      </div>
      <div className="col-lg-6">
        <div className="bg-info">
          <h3>{productContext.products.length}</h3>
          <p>Products</p>
        </div>
      </div>
    </div>
  )
}

export default AdminIndex