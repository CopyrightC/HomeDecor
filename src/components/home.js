import React from 'react'
import "./styles/home.css"
import { Deal } from "./deal"
import { Reviews } from "./reviews"
import { Link } from 'react-router-dom'
export const Home = () => {
    return (
        <div className="homepar">
            <div className="homemain">
                <div id="header2">
                    <h2 >HomeDecor</h2>
                </div>
                <h1 id="slog">Buy the best for your home!</h1>
                <Link to="/shop">
                    <button className="btn btn-primary" id="shopnow">Shop now!</button>
                </Link>
            </div>
            <div className="home-div">
                <p className="p">Today's top deals</p>
                <div className="row">

                    <Deal pic="https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/1952383/2017/6/13/11497346322756-fancy-mart-Unisex-Artificial-Flowers-and-Plants-9651497346322615-1.jpg"
                        cross="$25" price="$15" name="Purple Artificial Fern Grass Plant with Pot" keyName="pot" />
                    <Deal pic="https://images-na.ssl-images-amazon.com/images/I/81vIiMXn68L._AC_SL1500_.jpg"
                        cross="$468.26" price="$376.25" name="Abstract Big Penh Flower Oil Painting" keyName="painting" />
                    {
                        console.log("ok")
                    }
                </div>

                <div className="row">

                    <Deal pic="https://i5.walmartimages.com/asr/c6901836-a66a-4534-97ff-8a69adc692b0_1.e0584f1e235b828ddf8a490e759a5001.jpeg"
                        cross="$350.88" price="$297.48" name="Canvas wall art" keyName="art" />
                    <Deal pic="https://images-na.ssl-images-amazon.com/images/I/41YViS9mhKL._AC_.jpg"
                        cross="$252" price="$199.76" name="Two Frogs in a Boat Faberge Styled Trinket Box" keyName="trinket" />

                </div>
                <p id="rev" className="p">Feedbacks</p>
                <Reviews />
                <footer>
                    Copyright © All rights reserved.
                </footer>


            </div>
        </div>

    )
}
