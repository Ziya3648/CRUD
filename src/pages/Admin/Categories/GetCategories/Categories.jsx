import React, { useContext } from 'react'
import axios from 'axios'
import apiUrl from '../../../../utils/api'
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';
import { CategoryContext } from '../../../../context/CategoryContext'
import { IoMdAdd } from 'react-icons/io';
import './categories.css'

const Categories = () => {
  const context = useContext(CategoryContext)

  const deleteHandler = async (id) => {
    try {
      await axios.delete(`${apiUrl.categoryAPI}/${id}`)
      toast.success('Category deleted successfully')
      context.setCategories(prevData => prevData.filter(item => item.id !== id))
    }
    catch (error) {
      toast.error('Error occured while delete category')
    }
  }

  if (context.categories.length === 0) {
    return <h3>Category list is empty
      <Link to='/manage/category/add' className='btn btn-success mx-5'><IoMdAdd /> Add category</Link>
    </h3>
  }


  return (
    <div>
      <div>
        <div className="row head-info mt-3">
          <div className='col-lg-10 col-6'>
            <h3>All categories ({context.categories.length})</h3>
          </div>
          <div className='col-lg-2'>
            <Link to='/manage/category/add' className='btn btn-success form-control'><IoMdAdd /> Add category</Link>
          </div>
        </div>
        <table className="table mt-3 table-hover table-bordered">
          <thead>
            <tr className='table-secondary'>
              <th>#</th>
              <th>Category Name</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {
              context.categories && context.categories.map(item => {
                return (
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>
                      
                      <Link to={`/manage/category/${item.id}`} state={{categoryName: item.name}} className='btn btn-sm btn-warning'><AiFillEdit /></Link>

                    <button onClick={() => deleteHandler(item.id)} className='btn btn-sm btn-danger ms-2'><AiFillDelete /></button>
                  </td>
                  </tr>
          )
              })
            }
        </tbody>
      </table>
    </div>
    </div >
  )
}

export default Categories