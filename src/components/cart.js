import React from 'react'
import "./styles/cart.css"
import { CartItemx } from './cart-item';


export const Cart = (props) => {


    let dict = JSON.parse(localStorage.getItem("cart"));
    if (dict.length !== 0) {
        return (

            < div className="parent" >
                <div className="cart-page">
                    <p className="p" id="header">Cart</p>
                    {dict.map((elem) => {
                        return <CartItemx name={elem.Name} key={elem.index} price={elem.Price}
                            img={elem.Img} index={elem} del={props.del} obj={elem} />
                    })}
                </div>
            </div >

        )
    }

    else {
        return (
            < div className="parent" >
                <div className="cart-page">
                    <p className="p" id="header">Cart</p>
                    OK
                </div>
            </div >)
    }

}
