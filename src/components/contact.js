import React, { useState } from 'react'
import "./styles/contact.css"
import { Button } from '@material-ui/core';

export const Contact = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [msg, setMsg] = useState("");
    const [done, setDone] = useState(false)

    function onSubmit(e) {


        e.preventDefault();
        setName("");
        setEmail("");
        setMsg("");
        setDone(true)
    }

    return (
        <div className="contactpg">
            <div className="carttitle">
                <h1 id="cnc-title" className="p">Contact Us</h1>
            </div>
            <div id="slo-h4">
                <h4 id="cnc-slo">
                    Got some questions? Feel free to contact us.
                </h4>
            </div>
            <div className="contactform">
                <form action="" onSubmit={(e) => onSubmit(e)}>
                    <label htmlFor="name" >Name - </label>
                    <textarea className="forminp" value={name} onChange={(e) => setName(e.target.value)} type="text" />
                    <label htmlFor="Email">Email - </label>
                    <textarea type="text" value={email} onChange={(e) => setEmail(e.target.value)} className="forminp" />
                    <label htmlFor="msg">Message - </label>
                    <textarea type="text" value={msg} className="forminp" onChange={(e) => setMsg(e.target.value)} id="msginp" />
                    <Button variant="contained"
                        color="primary" type="submit" value="Submit" id="submitform" >Submit</Button>
                </form>
            </div>
            {done ?
                <div id="success">
                    <img src="https://image.flaticon.com/icons/png/512/190/190411.png" alt="" id="tick" />
                    <h3 id="textsuc">Submitted successfully!</h3>
                    <div id="clickable" onClick={() => setDone(false)}>
                        <img src="https://image.flaticon.com/icons/png/512/748/748122.png" alt="" id="cross" />
                    </div>
                </div>
                :
                null
            }

        </div >
    )
}