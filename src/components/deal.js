import React from 'react'
import "./styles/deal.css"
export const Deal = (props) => {
    //{ Name , Cross , Price , pic } 
    return (
        <div className="deal">
            <img src="https://th.bing.com/th/id/OIP.q5osVi_MaQ46JjwTkZXkMAHaEo?pid=ImgDet&w=1920&h=1200&rs=1" alt="" />
            <h6>Item name</h6>
            <div className="price">
                <h5 className="strike">$100</h5>
                <h5>$80</h5>
            </div>

            <h3> Deal expires soon! </h3>

        </div>
    )
}
