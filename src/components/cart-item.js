import React from 'react'
import { Button } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';

export const CartItemx = (props) => {

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
            <div className="btn2">
                <Button
                    variant="contained"
                    color="secondary"
                    className="del"
                    onClick={() => props.del(props.obj)}
                    startIcon={<DeleteIcon />}
                    style={{ fontSize: '1.6rem', color: "pink" }}
                >
                    Delete
                </Button>
            </div>
        </div >
    )
}