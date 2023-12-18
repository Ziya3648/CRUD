import React from 'react'
import './card.css'
import { Link } from 'react-router-dom'

const ProductCard = (props) => {
    const { id, title, price, category, images } = props.data
    return (
        <div className='col-lg-3 col-6'>
            <div className="card">
                <div className="card-image">
                    <img src={images[0]} className="card-img-top" alt="..." />
                </div>
                <div className="card-body">
                    <p>Category: {category.name}</p>
                    <h5 className="card-title">{title.length > 40 ? title.slice(0, 40) + "..." : title}</h5>
                    <p>{price} ₼</p>
                    <Link to={`/products/${id}`} className='btn btn-primary form-control'>
                       Show Details
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default ProductCard