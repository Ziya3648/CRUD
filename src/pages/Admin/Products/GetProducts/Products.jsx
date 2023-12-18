import React, { useContext } from 'react'
import axios from 'axios'
import apiUrl from '../../../../utils/api'
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';
import { ProductContext } from '../../../../context/ProductContext'
import { IoMdAdd } from 'react-icons/io';
import './products.css'

const Products = () => {
  const context = useContext(ProductContext)

  const deleteHandler = async (id) => {
    try {
      await axios.delete(`${apiUrl.productAPI}/${id}`)
      toast.success('Product deleted successfully')
      context.setProducts(prevData => prevData.filter(item => item.id !== id))
    }
    catch (error) {
      toast.error('Error occured while delete category')
    }
  }

  if (context.products.length === 0) {
    return <h3>Product list is empty 
      <Link to='/manage/product/add' className='btn btn-success mx-5'><IoMdAdd /> Add product</Link>
    </h3>
  }

  return (
    <div>
      <div className="row head-info mt-3">
        <div className='col-lg-10'>
          <h3>All products ({context.products.length})</h3>
        </div>
        <div className='col-lg-2'>
          <Link to='/manage/product/add' className='btn btn-success form-control'><IoMdAdd /> Add product</Link>
        </div>
      </div>
      <table className="table mt-3 table-hover table-bordered">
        <thead>
          <tr className='table-secondary'>
            <th>#</th>
            <th>Title</th>
            <th>Price</th>
            <th>Category</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {
            context.products && context.products.map(item => {
              return (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.title}</td>
                  <td>{item.price}</td>
                  <td>{item.category.name}</td>
                  <td>
                    <Link to={{ pathname: `/manage/product/${item.id}`, state: { name: item.name } }} className='btn btn-sm btn-warning'>
                      <AiFillEdit />
                    </Link>
                    <button onClick={() => deleteHandler(item.id)} className='btn btn-sm btn-danger ms-2'><AiFillDelete /></button>
                  </td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
  )
}

export default Products