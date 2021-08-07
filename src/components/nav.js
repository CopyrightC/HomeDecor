import React from 'react'
import "./styles/nav.css"
export const Nav = () => {
    return (
        <nav>
            <p id="title">HomeDecor</p>
            <a href="/">
                <div className="nav-item">
                    <li>Home</li>
                </div>
            </a>
            <a href="/shop">
                <div className="nav-item">
                    <li>Shop</li>
                </div>
            </a>
            <a href="/cart">
                <div className="nav-item">
                    <li>Cart</li>
                </div>
            </a>
        </nav>
    )
}
