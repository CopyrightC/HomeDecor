import React from 'react'
import "./styles/cart.css"
import { CartItemx } from './cart-item';

export const Cart = (props) => {
    console.log(props.cart)
    const deleteItem = (item) => {
        props.setCart(props.cart.filter((x) => {
            return JSON.stringify(x) !== JSON.stringify(item)
        }))
    }

    try {
        if (props.cart.length !== 0) {
            return (

                < div className="parent" >
                    <div className="cart-page">
                        <div className="carttitle">
                            <p className="p header">Cart</p>
                        </div>
                        {props.cart.map((elem) => {
                            return <CartItemx name={elem.Name} key={elem.index} price={elem.Price}
                                img={elem.Img} index={elem} del={deleteItem} obj={elem} />
                        })}
                    </div>
                    <a href="/checkout">
                        <button className="btn btn-primary" id="proceed">Proceed to checkout</button>
                    </a>
                </div >

            )
        }

        else {
            return (
                < div className="parent" >
                    <div className="cart-page">
                        <div className="carttitle">
                            <p className="p" id="header">Cart</p>
                        </div>
                        <p className="p" id="empty">Cart Empty!</p>
                    </div>
                </div >)
        }
    }

    catch {
        return (
            < div className="parent" >
                <div className="cart-page">
                    <div className="carttitle">
                        <p className="p" id="header">Cart</p>
                    </div>
                    <p className="p" id="empty">Cart Empty!</p>
                </div>
            </div >)
    }

}
