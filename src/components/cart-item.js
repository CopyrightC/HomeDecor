import React from 'react'
import { Furniture } from './furniture'
export const CartItemx = (props) => {

    return (
        <div className="item">
            <Furniture img={props.img}
                name={props.name}
                price={props.price}
                detail="Lorem ipsum dolor sit amet consectetur, adipisicing elit.
         Eveniet atque minima eligendi porro. Sapiente corrupti ratione iure expedita, 
         inventore ad id est at tenetur asperiores sed. Dolore accusantium, ipsum dolor 
         doloremque odio saepe at libero mollitia? Cupiditate?"
                cartItem={true}
            />
        </div>
    )
}
