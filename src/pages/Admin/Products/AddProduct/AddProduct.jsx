import React, { useState } from 'react'
import './add.css'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import apiUrl from '../../../../utils/api'
import toast from 'react-hot-toast'
import Categories from '../../components/Categories/Categories'

const AddProducts = () => {
  const navigate = useNavigate()

  const [product, setProduct] = useState({
    title: '',
    price: '',
    categoryId: '',
    description: '',
    images: [
      'https://cdn1.vectorstock.com/i/1000x1000/79/10/product-icon-simple-element-vector-27077910.jpg'
    ]
  })

  const addHandler = async () => {
    try {
      await axios.post(`${apiUrl.productAPI}/`, product)
      toast.success('Product created successfully')
      navigate('/manage/products')
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className="container my-4">
      <div className='input-product'>
        <div className="row">
          <div className="col-lg-4 mb-2">
            <input onChange={(e) => setProduct({ ...product, title: e.target.value })} className='form-control' type="text" name="producttitle" placeholder='Enter product title' />
          </div>
          <div className="col-lg-4 mb-2">
            <input onChange={(e) => setProduct({ ...product, price: e.target.value })} className='form-control' type="number" min='0' name="productprice" placeholder='Enter product price' />
          </div>
          <div onChange={(e) => setProduct({ ...product, categoryId: e.target.value })} className="col-lg-4 mb-2">
            <Categories />
          </div>
          </div>
          <div className="col-lg-12 mb-2">
            <textarea onChange={(e) => setProduct({ ...product, description: e.target.value })} className='form-control' type="number" name="productdesc" placeholder='Enter product description' />
          </div>
          <div className='col-lg-12 mb-2'>
            <button onClick={addHandler} className='btn btn-success form-control'>Create product</button>
          </div>
      </div>
    </div>
  )
}

export default AddProducts