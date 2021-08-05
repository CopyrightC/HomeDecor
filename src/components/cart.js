import React from 'react'
import "./styles/cart.css"
import { CartItemx } from './cart-item';


export const Cart = () => {
    let dict = JSON.parse(localStorage.getItem("cart"));
    let index_arr = []
    for (let i = 0; i <= dict[dict.length - 1].index; ++i) {
        index_arr.push(i)
    }
    console.log(index_arr)
    return (
        < div className="parent" >
            <div className="cart-page">
                <p className="p" id="header">Cart</p>
                {index_arr.map((elem) => {
                    return <CartItemx name={dict[elem].Name} key={elem} price={dict[elem].Price}
                        img={dict[elem].Img} index={elem} />
                })}
            </div>
        </div >
    )
}
