import React, { useEffect } from 'react'
const getAmount = () => {
    let dict = JSON.parse(localStorage.getItem("cart"))
    let price = 0;
    dict.map((count) => {
        return price += parseFloat(count.Price.slice(1, count.Price.length - 1))
    })
    return price;
}

export const Paid = (props) => {
    const { setCart } = props
    useEffect(() => {
        setCart([])
    }, [setCart])
    let finalPrice = getAmount();
    return (
        <div className="paid">
            <div className="cont">
                Paid ${finalPrice} successfully !
                <br />
                Your order is on the way :)
            </div>
        </div>)
}
