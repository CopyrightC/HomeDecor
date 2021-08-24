import React from 'react'
import "./styles/furniture.css"
import { Button } from '@material-ui/core';
import { Link } from "react-router-dom"
export const Furniture = (props) => {
    let targetLink = `/details/${props.keyName}`
    return (
        <div id="outer">
            <Link className="link" to={targetLink}>
                <div className="furniture" >
                    <img src={props.img} alt="" />

                    <div className="info">
                        <h2>{props.name}</h2>
                        <h4>{props.price}</h4>
                        <p className="para">Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                            Eveniet atque minima eligendi porro. Sapiente corrupti ratione iure expedita,
                            inventore ad id est at tenetur asperiores sed. Dolore accusantium, ipsum dolor
                            doloremque odio saepe at libero mollitia? Cupiditate?</p>
                    </div>
                    <div className="btn2">
                        <Button variant="contained"
                            color="primary"
                            className="del"
                            style={{ fontSize: '1.4rem' }}
                            onClick={(e) => {
                                e.preventDefault()
                                props.func(props.name, props.price, props.img)
                            }}>Add to cart</Button>
                    </div>

                </div >
            </Link>
        </div>
    )

}
