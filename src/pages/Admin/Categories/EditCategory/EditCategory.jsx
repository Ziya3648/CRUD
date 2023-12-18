import axios from 'axios';
import React, { useState  } from 'react'
import apiUrl from '../../../../utils/api';
import toast from 'react-hot-toast';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import './edit.css'

const EditCategory = () => {
    const { id } = useParams()
    const navigate = useNavigate()

    const location = useLocation()

    const [category, setCategory] = useState({
        name: ''
    })

    const editHandler = async() => {
        try {
            if (category.name.length > 0) {
                await axios.put(`${apiUrl.categoryAPI}/${id}`, category)
                toast.success('Category edited successfully')
                navigate('/manage/categories')
            }
            else {
                toast.error('Category name is required')
            }
        } catch (error) {
            toast.error('Error occured')
        }
    };

    return (
        <div className="container my-4">
            <div className="col-lg-12 mb-2">
                <input onChange={(e) => setCategory({ ...category, name: e.target.value })} className='form-control' 
                type="text" value={location.state.categoryName} placeholder='Enter category name' />
            </div>
            <button onClick={editHandler} className='btn btn-success form-control'>Update category</button>
        </div>
    )
}

export default EditCategory