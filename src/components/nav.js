import React from 'react'
import "./styles/nav.css"
export const Nav = () => {
    return (
        <nav>
            <p id="title">HomeDecor</p>
            <div className="nav-item">
                <a href="/">
                    <li>Home</li>
                </a>
            </div>
            <div className="nav-item">
                <a href="/shop">
                    <li>Shop</li>
                </a>
            </div>
            <div className="nav-item">
                <a href="/cart">
                    <li>Cart</li>
                </a>
            </div>

        </nav>
    )
}
