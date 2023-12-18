import React, { useState } from 'react'
import apiUrl from '../../../../utils/api'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import './add.css'

const AddCategory = () => {
    const navigate = useNavigate()

    const [category, setCategory] = useState({
        name: '',
        image: 'https://t3.ftcdn.net/jpg/03/59/09/04/360_F_359090423_7kA3WC9HnDEf1I9dx4ccGFhhO90vmzhk.jpg'
    })

    const addHandler = async () => {
        try {
            await axios.post(`${apiUrl.categoryAPI}/`, category)
            toast.success('Category created successfully')
            navigate('/manage/categories')
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="container my-4">
            <div className='input-product'>
                <div className="col-lg-12">
                    <div className="col-lg-12 mb-2">
                        <input onChange={(e) => setCategory({ ...category, name: e.target.value })} className='form-control' type="text" name="categoryname" placeholder='Enter category name' />
                    </div>
                    <div className='col-lg-12 mb-2'>
                        <button onClick={addHandler} className='btn btn-success form-control'>Create category</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddCategory