import React from 'react'
import "./styles/nav.css"
import { Link } from 'react-router-dom'
export const Nav = () => {
    return (
        <nav>
            <p id="title">HomeDecor</p>
            <Link to="/">
                <div className="nav-item">
                    <li>Home</li>
                </div>
            </Link>
            <Link to="/shop">
                <div className="nav-item">
                    <li>Shop</li>
                </div>
            </Link>
            <Link to="/cart">
                <div className="nav-item">
                    <li>Cart</li>
                </div>
            </Link>
            <Link to="/contact" id="btnx">
                <button id="cncbtn">Contact</button>
            </Link>
        </nav>
    )
}
