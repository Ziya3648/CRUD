import React, { useContext } from 'react'
import './product.css'
import ProductCard from '../../../components/dynamic/Card/ProductCard'
import Spinner from '../../../components/dynamic/Loader/Spinner'
import Categories from '../../../components/dynamic/Categories/Categories'
import { ProductContext } from '../../../context/ProductContext'

const Products = () => {
  const context = useContext(ProductContext)


  if (context.products.length === 0) {
    return <Spinner />
  }

  return (
    <div className='container my-4'>

      <div className="row my-2">
        <div className="col-lg-12">
          <Categories />
        </div>
      </div>

      <div className='row gy-4'>
        {
          context.products && context.products.map(item => {
            return (
              <ProductCard data={item} key={item.id} />
            )
          })
        }
      </div>

    </div>
  )
}

export default Products