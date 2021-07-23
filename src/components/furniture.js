import React from 'react'
import "./styles/furniture.css"
export const Furniture = (props) => {
    return (
        <div className="furniture">
            <img src={props.img} alt="" />
            <h2>{props.name}</h2>
            <h4>{props.price}</h4>
        </div>
    )
}
