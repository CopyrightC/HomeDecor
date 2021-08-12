import React from 'react'
import "./styles/checkout.css"

const PayementSuccess = () => {
    return (
        <div className="paid">
            <div className="cont">
                Paid $1000 successfully !
                <br />
                Your order is on the way :)
            </div>
        </div>
    )
}

export const Checkout = () => {
    const [bool, setBool] = React.useState(false);
    const [title, setTitle] = React.useState("Pay via");
    const [paid, setPaid] = React.useState(false);

    const Onsumbit = (boolVal) => {
        if (!boolVal) {
            try {
                let nameinp = document.getElementById("name").value;
                let contact = document.getElementById("contactinp").value
                let addr = document.getElementById("add").value

                if (!boolVal && (!nameinp || !contact || !addr)) {
                    alert("Please fill all the required fields.")
                    return false;
                }
                return true;

            }
            catch { }
        }
        if (boolVal) {
            if (title == "Pay via") {
                alert("Please choose a payment option")
                return false
            }
            return true
        }

    }

    if (!bool) {
        return (
            <div className="checkout">
                <p className="p">Enter details</p>

                <div className="contact">
                    <h2 className="h2" >Name</h2>
                    <input className="input" id="name" type="text" placeholder="Name" />
                    <h2 className="h2">Contact</h2>
                    <textarea className="input" type="text" placeholder="Mobile number" id="contactinp" />
                    <h2 className="h2">Address</h2>
                    <textarea className="input" type="text" id="add" placeholder="Address" />
                    <button className="order btn btn-primary" onClick={() => { if (Onsumbit(false)) { setBool(true) } }}>Next step</button>
                </div>
            </div>
        )
    }

    else if (paid) {
        return (
            <PayementSuccess />
        )
    }

    return (
        <div className="checkout">
            <p className="p">Checkout</p>

            <div className="contact">
                <p className="enlarge">Subtotal - $1000</p>
                <div className="dropdown">
                    <button className="drop btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                        {title}
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                        <li><a className="dropdown-item" href="#" onClick={() => setTitle("UPI")}>UPI</a></li>
                        <li><a className="dropdown-item" href="#" onClick={() => setTitle("Cash")}>Cash</a></li>
                        <li><a className="dropdown-item" href="#" onClick={() => setTitle("Debit/Credit card")}>Credit/Debit card</a></li>
                    </ul>
                </div>
                <button className="order btn btn-primary" onClick={() => { if (Onsumbit(true)) { setPaid(true) } }}>Pay securely</button>
            </div>
        </div >
    )
}