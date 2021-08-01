import React from 'react'
import "./styles/furniture.css"

// object structure -
// {
//     1 : {
//         name : {},
//         price : {},
//         pic : {}
//     },

//     2 : ...
// }

export const Furniture = (props) => {
    let ifClicked = false;
    return (
        <div className="furniture" onClick={() => {
            if (!ifClicked) {
                props.xyz(true)
            }
        }}>
            <img src={props.img} alt="" />

            <div className="info">
                <h2>{props.name}</h2>
                <h4>{props.price}</h4>
                <p>{props.detail}</p>
            </div>

            {props.cartItem ?

                <button className="shop" onClick={() => {
                    ifClicked = true;
                    props.func(props.name, props.price, props.img)
                    ifClicked = false;
                }}>Remove</button>

                :

                <button className="shop" onClick={() => {
                    ifClicked = true;
                    props.func(props.name, props.price, props.img)
                    ifClicked = false;
                }}>Add to cart</button>
            }
        </div >
    )

}
