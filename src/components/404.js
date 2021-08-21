import React from 'react'
import "./styles/404.css"
export const PageDoesntExists = () => {
    return (
        <div id="error">
            <p className="errormsg"> Go to <a href="/">home</a> page</p>
        </div>
    )
}
