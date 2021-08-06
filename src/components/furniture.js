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
            console.log("dvi")
            if (!ifClicked) {
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

            <button className="shop" onClick={() => {
                ifClicked = true;
                props.func(props.name, props.price, props.img)
            }}>Add to cart</button>

        </div >
    )

}
