import React from 'react'
import { Link } from 'react-router-dom'
import "./styles/deal.css"
export const Deal = (props) => {
    //{ Name , Cross , Price , pic } 
    let targetSite = `/details/${props.keyName}`
    return (

        <div id="deal-outer-div">
            <Link className="link" to={targetSite}>
                <div className="deal">
                    <img src={props.pic} alt="" />
                    <h6>{props.name}</h6>
                    <div className="price">
                        <h5 className="strike">{props.cross}</h5>
                        <h5>{props.price}</h5>
                    </div>

                    <h3> Deal expires soon! </h3>

                </div>
            </Link>
        </div >

    )
}