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

    return (
        <div className="furniture" onClick={() => props.xyz(true)}>

            <img src={props.img} alt="" />

            <div className="info">
                <h2>{props.name}</h2>
                <h4>{props.price}</h4>
                <p>{props.detail}</p>
            </div>

            <button className="shop" onClick={() => props.func(props.name, props.price, props.img)}>Add to cart</button>

        </div >
    )

}
