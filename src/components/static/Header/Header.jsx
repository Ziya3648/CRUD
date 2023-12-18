import React from 'react'
import './header.css'
import { Link, NavLink } from 'react-router-dom'
import { GiClothes } from "react-icons/gi";

const Header = () => {
    return (
        <header>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-3">
                        <div className="logo">
                            <Link to='/'><GiClothes /> Yevlakh Shop</Link>
                        </div>
                    </div>
                    <div className="col-lg-9">
                        <nav>
                            <NavLink to='/'>Home</NavLink>
                            <NavLink to='/products'>Products</NavLink>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header