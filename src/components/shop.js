import React from 'react'
import { Furniture } from "./furniture"
import { Detail } from "./detail"

export const Shop = (props) => {

    const [bool, setBool] = React.useState(false);
    const [name, setName] = React.useState("");
    const [img, setImg] = React.useState();
    const [price, setPrice] = React.useState(0);

    return (
        /*
        
        <Deal pic="https://images-na.ssl-images-amazon.com/images/I/81vIiMXn68L._AC_SL1500_.jpg"
            cross="$468.26" price="$376.25" name="Abstract Big Penh Flower Oil Painting" />
            */
        bool ?
            <Detail name={name} img={img} price={price} add={props.func} />
            :
            <div className="main">
                <div className="carttitle">
                    <p className="p header">Shop</p>
                </div>
                <Furniture img="https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/1952383/2017/6/13/11497346322756-fancy-mart-Unisex-Artificial-Flowers-and-Plants-9651497346322615-1.jpg"
                    name="Purple Artificial Fern Grass Plant with Pot"
                    price="$15"

                    xyz={bool => setBool(bool)}
                    func={props.func}
                    nameFunc={name => setName(name)}
                    imgFunc={img => setImg(img)}
                    priceFunc={price => setPrice(price)} />

                <Furniture img="https://images-na.ssl-images-amazon.com/images/I/81vIiMXn68L._AC_SL1500_.jpg"
                    name="Abstract Big Penh Flower Oil Painting"
                    price="$376.25"
                    xyz={bool => setBool(bool)}
                    func={props.func}
                    nameFunc={name => setName(name)}
                    imgFunc={img => setImg(img)}
                    priceFunc={price => setPrice(price)} />
                <Furniture img="https://images-na.ssl-images-amazon.com/images/I/81K8cuT1QDL._AC_SL1500_.jpg"
                    name="Bookshelf"
                    price="$79.99"

                    xyz={bool => setBool(bool)}
                    func={props.func}
                    nameFunc={name => setName(name)}
                    imgFunc={img => setImg(img)}
                    priceFunc={price => setPrice(price)} />

                <Furniture img="https://images-na.ssl-images-amazon.com/images/I/61o2dXPWi3L._AC_SL1200_.jpg"
                    name="Office Chair"
                    price="$109.24"
                    priceFunc={price => setPrice(price)}
                    xyz={bool => setBool(bool)}
                    func={props.func}
                    nameFunc={name => setName(name)}
                    imgFunc={img => setImg(img)}
                />
                <Furniture img="https://i5.walmartimages.com/asr/c6901836-a66a-4534-97ff-8a69adc692b0_1.e0584f1e235b828ddf8a490e759a5001.jpeg"
                    price="$297.48"
                    name="Canvas wall art"
                    priceFunc={price => setPrice(price)}
                    xyz={bool => setBool(bool)}
                    func={props.func}
                    nameFunc={name => setName(name)}
                    imgFunc={img => setImg(img)}
                />
                <Furniture img="https://images-na.ssl-images-amazon.com/images/I/41YViS9mhKL._AC_.jpg"
                    price="$199.76"
                    name="Two Frogs in a Boat Faberge Styled Trinket Box"
                    priceFunc={price => setPrice(price)}
                    xyz={bool => setBool(bool)}
                    func={props.func}
                    nameFunc={name => setName(name)}
                    imgFunc={img => setImg(img)} />
                <Furniture img="https://images-na.ssl-images-amazon.com/images/I/71wC7OKtS2L._AC_SL1500_.jpg"
                    name="Shoe rack"
                    price="$24.86"
                    priceFunc={price => setPrice(price)}
                    xyz={bool => setBool(bool)}
                    func={props.func}
                    nameFunc={name => setName(name)}
                    imgFunc={img => setImg(img)} />

                <Furniture img="https://images-na.ssl-images-amazon.com/images/I/81lGjABXq%2BS._AC_SL1500_.jpg"
                    name="Dresser"
                    price="$62.87"
                    priceFunc={price => setPrice(price)}
                    xyz={bool => setBool(bool)}
                    func={props.func}
                    nameFunc={name => setName(name)}
                    imgFunc={img => setImg(img)} />

                <Furniture img="https://images-na.ssl-images-amazon.com/images/I/61mmhQcG0sS._AC_SL1500_.jpg"
                    name="Picture Frame"
                    price="$7.27"
                    priceFunc={price => setPrice(price)}
                    xyz={bool => setBool(bool)}
                    func={props.func}
                    nameFunc={name => setName(name)}
                    imgFunc={img => setImg(img)} />

                <Furniture img="https://m.media-amazon.com/images/I/91HUri7OB0L._AC_SL1500_.jpg"
                    name="Armchair"
                    price="$102.99"
                    priceFunc={price => setPrice(price)}
                    xyz={bool => setBool(bool)}
                    func={props.func}
                    nameFunc={name => setName(name)}
                    imgFunc={img => setImg(img)} />

                <Furniture img="https://images-na.ssl-images-amazon.com/images/I/61-nYtfzswL._AC_SL1000_.jpg"
                    name="Vanity Table"
                    price="$132.44"
                    xyz={bool => setBool(bool)}
                    func={props.func}
                    priceFunc={price => setPrice(price)}
                    nameFunc={name => setName(name)}
                    imgFunc={img => setImg(img)} />

            </div>

    )
}