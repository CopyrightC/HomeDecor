import React from 'react'
import "./styles/checkout.css"
export const Checkout = () => {
    const [bool, setBool] = React.useState(false);
    if (!bool) {
        return (
            <div className="checkout">
                <p className="p">Enter details</p>

                <div className="contact">
                    <h2 className="h2">Name</h2>
                    <textarea className="input" type="text" placeholder="Name" />
                    <h2 className="h2">Contact</h2>
                    <textarea className="input" type="text" placeholder="Mobile number" id="" />
                    <h2 className="h2">Address</h2>
                    <textarea className="input" type="text" id="add" placeholder="Address" />
                    <button className="order btn btn-primary" onClick={() => setBool(true)}>Next step</button>
                </div>
            </div>
        )
    }

    return (
        <div className="checkout">
            <p className="p">Checkout</p>

            <div className="contact">
                <p className="enlarge">Subtotal - $1000</p>
                <div className="dropdown">
                    <button className="drop btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                        Pay via
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                        <li><a className="dropdown-item" href="#">UPI</a></li>
                        <li><a className="dropdown-item" href="#">Cash</a></li>
                        <li><a className="dropdown-item" href="#">Credit/Debit card</a></li>
                    </ul>
                </div>
                <button className="order btn btn-primary">Pay securely</button>
            </div>
        </div>
    )
}
