import React, { useEffect, useState } from 'react'
import './details.css'
import { useParams } from 'react-router-dom'
import Spinner from '../../../components/dynamic/Loader/Spinner'
import axios from 'axios'
import apiUrl from '../../../utils/api'

const ProductDetails = () => {
    const { id } = useParams()

    const [item, setItem] = useState()

    useEffect(() => {
        const getItem = async () => {
            await axios.get(`${apiUrl.productAPI}/${id}`)
                .then(response => setItem(response.data))
                .catch(error => console.log(error))
        }

        getItem()
    }, [id])

    return (
        <div>
            {
                item ? <div className="container">
                    <div className="card mt-4">
                        <div className="card-body">
                            <h3 className="card-title">{item.title}</h3>
                            <h6 className="card-subtitle">Category: {item.category.name}</h6>
                            <div className="row">
                                <div className="col-lg-3 col-md-5 col-sm-6">
                                    <div className="item-image text-center">
                                        <img src={item.images[0]} alt='...'/>
                                    </div>
                                </div>
                                <div className="col-lg-7 col-md-7 col-sm-6">
                                    <h4 className="box-title mt-1">Product description</h4>
                                    <p>{item.description}</p>
                                    <h2 className="mt-3">
                                        {item.price} ₼
                                    </h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> : <Spinner />
            }
        </div>
    )
}

export default ProductDetails