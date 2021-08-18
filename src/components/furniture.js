import React from 'react'
import "./styles/furniture.css"
import { Button } from '@material-ui/core';

export const Furniture = (props) => {
    let ifClicked = false;
    return (
        <div className="furniture" onClick={() => {
            if (!ifClicked) {
                props.nameFunc(props.name)
                props.imgFunc(props.img)
                props.priceFunc(props.price)
                props.xyz(true)
            }
        }}>
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
                    onClick={() => {
                        ifClicked = true;
                        alert("Added to cart!")
                        props.func(props.name, props.price, props.img)
                    }}>Add to cart</Button>
            </div>

        </div >
    )

}
