import React from 'react'
import { Furniture } from "./furniture"
import { Detail } from "./detail"

export const Shop = (props) => {

    const [bool, setBool] = React.useState(false);
    const [name, setName] = React.useState("");
    const [img, setImg] = React.useState();

    return (
        //bool
        bool ?
            <>
                <Detail name={name} img={img} />
            </>
            :
            <div className="main">
                <Furniture img="https://images-na.ssl-images-amazon.com/images/I/81K8cuT1QDL._AC_SL1500_.jpg"
                    name="Bookshelf"
                    price="$79.99"

                    xyz={bool => setBool(bool)}
                    func={props.func}
                    nameFunc={name => setName(name)}
                    imgFunc={img => setImg(img)} />

                <Furniture img="https://images-na.ssl-images-amazon.com/images/I/61o2dXPWi3L._AC_SL1200_.jpg"
                    name="Office Chair"
                    price="$109.24"

                    xyz={bool => setBool(bool)}
                    func={props.func}
                    nameFunc={name => setName(name)}
                    imgFunc={img => setImg(img)}
                />

                <Furniture img="https://images-na.ssl-images-amazon.com/images/I/71wC7OKtS2L._AC_SL1500_.jpg"
                    name="Shoe rack"
                    price="$24.86"
                    xyz={bool => setBool(bool)}
                    func={props.func}
                    nameFunc={name => setName(name)}
                    imgFunc={img => setImg(img)} />

                <Furniture img="https://images-na.ssl-images-amazon.com/images/I/81lGjABXq%2BS._AC_SL1500_.jpg"
                    name="Dresser"
                    price="$62.87"

                    xyz={bool => setBool(bool)}
                    func={props.func}
                    nameFunc={name => setName(name)}
                    imgFunc={img => setImg(img)} />

                <Furniture img="https://images-na.ssl-images-amazon.com/images/I/61mmhQcG0sS._AC_SL1500_.jpg"
                    name="Picture Frame"
                    price="$7.27"

                    xyz={bool => setBool(bool)}
                    func={props.func}
                    nameFunc={name => setName(name)}
                    imgFunc={img => setImg(img)} />

                <Furniture img="https://m.media-amazon.com/images/I/91HUri7OB0L._AC_SL1500_.jpg"
                    name="Armchair"
                    price="$102.99"

                    xyz={bool => setBool(bool)}
                    func={props.func}
                    nameFunc={name => setName(name)}
                    imgFunc={img => setImg(img)} />

                <Furniture img="https://images-na.ssl-images-amazon.com/images/I/61-nYtfzswL._AC_SL1000_.jpg"
                    name="Vanity Table"
                    price="$132.44"
                    xyz={bool => setBool(bool)}
                    func={props.func}
                    nameFunc={name => setName(name)}
                    imgFunc={img => setImg(img)} />

            </div>

    )
}