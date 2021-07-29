import React from 'react'
import "./styles/furniture.css"

export const Furniture = (props) => {

    return (
        <div className="furniture" onClick={() => props.xyz(true)}>

            <img src={props.img} alt="" />

            <div className="info">
                <h2>{props.name}</h2>
                <h4>{props.price}</h4>
                <p>{props.detail}</p>
            </div>

            <button className="shop">Add to cart</button>

        </div >
    )

}
