import React from 'react'
import "./styles/deal.css"
export const Deal = (props) => {
    //{ Name , Cross , Price , pic } 
    return (
        <div className="deal">
            <img src={props.pic} alt="" />
            <h6>{props.name}</h6>
            <div className="price">
                <h5 className="strike">{props.cross}</h5>
                <h5>{props.price}</h5>
            </div>

            <h3> Deal expires soon! </h3>

        </div>
    )
}