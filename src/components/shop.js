import React from 'react'
import { Furniture } from "./furniture"
import { Detail } from "./detail"

export const Shop = (props) => {

    const [bool, setBool] = React.useState(false);
    const [name, setName] = React.useState("");
    const [img, setImg] = React.useState();
    const [price, setPrice] = React.useState(0);

    return (

        bool ?
            <Detail name={name} img={img} price={price} add={props.func} />
            :
            <div className="main">
                <div className="carttitle">
                    <p className="p header">Shop</p>
                </div>
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