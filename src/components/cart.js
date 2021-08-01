import React from 'react'
import "./styles/cart.css"
import { CartItemx } from './cart-item';

export const Cart = () => {
    let dict = JSON.parse(localStorage.getItem("cartItems"));
    let index_arr = Object.keys(dict);
    return (
        <div className="parent">
            <div className="cart-page">
                <p className="p" id="header">Cart</p>
                {index_arr.map((elem) => {
                    return <CartItemx name={dict[elem][elem].Name} key={elem} price={dict[elem][elem].Price}
                        img={dict[elem][elem].Img} />
                })}
            </div>
        </div>
    )
}