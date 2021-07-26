import React from 'react'
import "./styles/home.css"
import { Deal } from "./deal"
export const Home = () => {
    return (
        <div className="home-div">
            <p>Today's top deals</p>
            <div className="row">

                <Deal />
                <Deal />

            </div>

            <div className="row">

                <Deal />
                <Deal />

            </div>

            <footer>
                Copyright © All rights reserved.
            </footer>

        </div>
    )
}
