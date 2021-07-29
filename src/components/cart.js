import React from 'react'
import "./styles/cart.css"

const CartItem = (props) => {
    return (
        <>
            <div className="cart-item-row">
                <div className="cart-item">
                    <img src="
                    https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/1952383/2017/6/13/11497346322756-fancy-mart-Unisex-Artificial-Flowers-and-Plants-9651497346322615-1.jpg"
                        alt="" />
                    <h1>Item name</h1>
                    <h4>$100</h4>
                    <button id="remove">Remove this item</button>
                </div>
                <div className="cart-item">

                </div>
                <div className="cart-item">

                </div>
            </div>
        </>
    )
}

export const Cart = () => {
    return (
        <div className="parent">
            <div className="cart-page">
                <p className="p">Cart</p>
                <CartItem />
            </div>
        </div>
    )
}
