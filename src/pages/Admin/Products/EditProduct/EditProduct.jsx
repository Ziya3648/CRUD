import React, { useState } from 'react'
import './edit.css'
import { useNavigate, useParams } from 'react-router-dom'
import toast from 'react-hot-toast'
import apiUrl from '../../../../utils/api'
import axios from 'axios'
import Categories from '../../components/Categories/Categories'

const EditProducts = () => {
  const { id } = useParams()
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

  const editHandler = async () => {
    try {
      if (product.title.length > 0) {
        await axios.put(`${apiUrl.productAPI}/${id}`, product)
        toast.success('Product edited successfully')
        navigate('/manage/products')
      }
      else {
        toast.error('Product can not updated')
      }
    } catch (error) {
      toast.error('Error occured')
    }
  };

  return (
    <div className="container my-4">
      <div className="row">
        <div className="col-lg-4 mb-2">
          <input onChange={(e) => setProduct({ ...product, title: e.target.value })} className='form-control' type="text" name="producttitle" placeholder='Enter product title' />
        </div>
        <div className="col-lg-4 mb-2">
          <input onChange={(e) => setProduct({ ...product, price: e.target.value })} className='form-control' type="number" min='1' name="productprice" placeholder='Enter product price' />
        </div>
        <div onChange={(e) => setProduct({ ...product, categoryId: e.target.value })} className="col-lg-4 mb-2">
          <Categories />
        </div>
      </div>
      <div className="col-lg-12 mb-2">
        <textarea onChange={(e) => setProduct({ ...product, description: e.target.value })} className='form-control' type="number" name="productdesc" placeholder='Enter product description' />
      </div>
      <div className='col-lg-12 mb-2'>
        <button onClick={editHandler} className='btn btn-success form-control'>Update category</button>
      </div>
    </div>
  )
}

export default EditProducts