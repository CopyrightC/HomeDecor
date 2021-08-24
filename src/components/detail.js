import React, { useEffect } from 'react';
import "./styles/detail.css";
import { Reviews } from "./reviews";
import { Button } from '@material-ui/core';
import { Link } from "react-router-dom"
let itemDetails = {}

function addVals(name, displayName, price, img) {
    itemDetails[name] = { price: price, img: img, dis: displayName }
}

addVals("Pot", "Purple Artificial Fern Grass Plant with Pot", "$15.98", "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/1952383/2017/6/13/11497346322756-fancy-mart-Unisex-Artificial-Flowers-and-Plants-9651497346322615-1.jpg")
addVals("Painting", "Abstract Big Penh Flower Oil Painting", "$376.25", "https://images-na.ssl-images-amazon.com/images/I/81vIiMXn68L._AC_SL1500_.jpg")
addVals("Bookshelf", "Bookshelf", "$79.99", "https://images-na.ssl-images-amazon.com/images/I/81K8cuT1QDL._AC_SL1500_.jpg")
addVals("Chair", "Office chair", "$109.24", "https://images-na.ssl-images-amazon.com/images/I/61o2dXPWi3L._AC_SL1200_.jpg")
addVals("Art", "Canvas wall art", "$297.48", "https://i5.walmartimages.com/asr/c6901836-a66a-4534-97ff-8a69adc692b0_1.e0584f1e235b828ddf8a490e759a5001.jpeg")
addVals("Trinket", "Two Frogs in a Boat Faberge Styled Trinket Box", "$199.76", "https://images-na.ssl-images-amazon.com/images/I/41YViS9mhKL._AC_.jpg")
addVals("Shoerack", "Shoerack", "$24.86", "https://images-na.ssl-images-amazon.com/images/I/71wC7OKtS2L._AC_SL1500_.jpg")
addVals("Dresser", "Dresser", "$62.87", "https://images-na.ssl-images-amazon.com/images/I/81lGjABXq%2BS._AC_SL1500_.jpg")
addVals("Frame", "Picture frame", "$7.27", "https://images-na.ssl-images-amazon.com/images/I/61mmhQcG0sS._AC_SL1500_.jpg")
addVals("Armchair", "Armchair", "$102.99", "https://m.media-amazon.com/images/I/91HUri7OB0L._AC_SL1500_.jpg")
addVals("Vanity", "Vanity table", "$132.44", "https://images-na.ssl-images-amazon.com/images/I/61-nYtfzswL._AC_SL1000_.jpg")



export const Detail = (props) => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    /*
    name - itemDetails[keyList[x]]["dis"]
    img - itemDetails[keyList[x]]["img"]
    price - itemDetails[keyList[x]]["price"]
    */


    let path = window.location.pathname.split("/")[2]
    let keyList = Object.keys(itemDetails)

    for (let x = 0; x < keyList.length; ++x) {
        if (path === keyList[x].toLowerCase()) {
            return (
                <div className="imgbg">
                    <div className="cart">
                        <p className="p">About item</p>
                        <div className="content">
                            <img src={itemDetails[keyList[x]]["img"]} alt="" />
                            <div className="desc">
                                <h3 id="ok">{itemDetails[keyList[x]]["dis"]}</h3>
                                <p id="paradesc">Lorem ipsum dolor sit amet consectetur, dis voluptates magnam nihil aliquid quas, minus modi temporibus a tempore repellat, illum optio saepe praesentium quos odit deserunt fugiat voluptatibus odio est dignissimos ullam, repudiandae omnis. Porro quisquam aliquam magnam, minima deleniti natus libero voluptate fugit magni a ipsum voluptatibus qui reiciendis molestias. Tempora qui culpa sint reiciendis! Sapiente amet ex, eaque dolores architecto laudantium necessitatibus beatae nobis acccusamus maxime voluptate facere maiores similique optio sequi saepe earum quasi placeat expedita esse temporibus cupiditate voluptas magni dolor! Nemo laborum, iste suscipit, nesciunt eos voluptatibus dignissimos adipisci in, ipsum maiores hic aspernatur corrupti impedit pariatur eligendi facere quidem tenetur! Quaerat laboriosam id sed, quidem obcaecati, dolor sunt veniam facilis minus labore nihil in rerum voluptas itaque architecto officia quos distinctio ex ipsa deserunt necessitatibus harum nulla quis. Quod ex error, odit quasi ab officia libero, voluptatibus ratione maxime nobis accusantium! Harum illo commodi unde porro, nostrum magnam est in neque nesciunt alias iusto laudantium consequuntur quaerat, quos necessitatibus voluptatum sed officia nisi fuga consequatur. Perspiciatis nihil facilis nisi quod suscipit dignissimos explicabo quos debitis. Quaerat ipsam alias dolorum aliquid amet cumque deserunt quae ullam? Nisi ducimus laboriosam laborum nemo laudantium?</p>
                                <Button variant="contained" color="primary" id="Add-to-cart" onClick={() =>
                                    props.add(itemDetails[keyList[x]]["dis"], itemDetails[keyList[x]]["price"], itemDetails[keyList[x]]["img"])
                                }>
                                    Add to cart
                                </Button>
                                <h3 id="price">{itemDetails[keyList[x]]["price"]}</h3>
                            </div>

                        </div>
                        <p className="p">Customer Reviews</p>
                        <div className="margin">
                            <Reviews />
                        </div>
                    </div>
                </div >
            )
        }
    }

    return (
        <div className="default">
            <div id="errorpath">
                <p> No such item exists</p>
                <Link to="/shop">
                    <Button variant="contained" color="primary" id="browseShop">
                        Browse Shop
                    </Button>
                </Link>
            </div>
        </div>
    )

}