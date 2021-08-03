import React from 'react'
import "./styles/cart.css"
import { CartItemx } from './cart-item';

let localChanged = false;

const removeItem = (item) => {
    let copyLocal = JSON.parse(localStorage.getItem("cartItems"));
    delete copyLocal[item];
    localStorage.setItem("cartItems", JSON.stringify(copyLocal));
    localChanged = true;
}

export const Cart = () => {
    if (localChanged) { console.log("bigbig") }
    let dict = JSON.parse(localStorage.getItem("cartItems"));
    let index_arr = Object.keys(dict);
    try {
        return (
            <div className="parent">
                <div className="cart-page">
                    <p className="p" id="header">Cart</p>
                    {index_arr.map((elem) => {
                        return <CartItemx name={dict[elem].Name} key={elem} price={dict[elem].Price}
                            img={dict[elem].Img} remove={(item) => removeItem(item)} index={elem} />
                    })}
                </div>
            </div>
        )
    }

    catch {
        return (
            <div className="parent">
                <div className="cart-page">
                    <p className="p" id="header">Cart</p>
                    Nothing to display!
                </div>
            </div>
        )
    }
}