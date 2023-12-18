import React from 'react'
import { Link } from 'react-router-dom'
import { AiFillHome, AiFillSkin, AiFillGold    } from "react-icons/ai";


const Sidebar = () => {
  return (
    <aside>
        <ul>
          <li>
            <Link to='/manage/index'><AiFillHome /> Home</Link>
          </li>
          <li>
            <Link to='/manage/categories'><AiFillGold /> Categories</Link>
          </li>
          <li>
            <Link to='/manage/products'><AiFillSkin  /> Products</Link>
          </li>
        </ul>
    </aside>
  )
}

export default Sidebar