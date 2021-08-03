import React from 'react'
export const CartItemx = (props) => {
    let ifClicked = false;
    return (

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
            <button className="shop" onClick={() => {
                ifClicked = true;
                props.remove(props.index)
                console.log("done")
                ifClicked = false;
            }}>Remove</button>
        </div>
    )
}

/*
onClick={() => {
    if (!ifClicked) {
        props.xyz(true)
    }
    */
