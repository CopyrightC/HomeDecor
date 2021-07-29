import React from 'react'
import "./styles/detail.css"
import { Reviews } from "./reviews"
export const Detail = () => {

    return (
        <div className="cart">
            <p className="p">About item</p>
            <div className="content">
                <img src="https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/1952383/2017/6/13/11497346322756-fancy-mart-Unisex-Artificial-Flowers-and-Plants-9651497346322615-1.jpg" alt="" />
                <div className="desc">
                    <h3 id="name">Item name</h3>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque reprehenderit reiciendis voluptates magnam nihil aliquid quas, minus modi temporibus a tempore repellat, illum optio saepe praesentium quos odit deserunt fugiat voluptatibus odio est dignissimos ullam, repudiandae omnis. Porro quisquam aliquam magnam, minima deleniti natus libero voluptate fugit magni a ipsum voluptatibus qui reiciendis molestias. Tempora qui culpa sint reiciendis! Sapiente amet ex, eaque dolores architecto laudantium necessitatibus beatae nobis accusamus maxime voluptate facere maiores similique optio sequi saepe earum quasi placeat expedita esse temporibus cupiditate voluptas magni dolor! Nemo laborum, iste suscipit, nesciunt eos voluptatibus dignissimos adipisci in, ipsum maiores hic aspernatur corrupti impedit pariatur eligendi facere quidem tenetur! Quaerat laboriosam id sed, quidem obcaecati, dolor sunt veniam facilis minus labore nihil in rerum voluptas itaque architecto officia quos distinctio ex ipsa deserunt necessitatibus harum nulla quis. Quod ex error, odit quasi ab officia libero, voluptatibus ratione maxime nobis accusantium! Harum illo commodi unde porro, nostrum magnam est in neque nesciunt alias iusto laudantium consequuntur quaerat, quos necessitatibus voluptatum sed officia nisi fuga consequatur. Perspiciatis nihil facilis nisi quod suscipit dignissimos explicabo quos debitis. Quaerat ipsam alias dolorum aliquid amet cumque deserunt quae ullam? Nisi ducimus laboriosam laborum nemo laudantium?</p>
                </div>
                <div className="btns">
                    <button>Add to cart</button>
                    <button>Buy now</button>
                </div>
            </div>
            <p className="p">Customer Reviews</p>
            <div className="margin">
                <Reviews />
            </div>
        </div>
    )
}
