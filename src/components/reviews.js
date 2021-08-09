import React from 'react'
import "./styles/reviews.css"

const Review = (props) => {
    return (

        <div className="review">
            <blockquote>
                <p className="para-rev"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi optio saepe quaerat voluptas assumenda impedit illo illum veritatis ab explicabo! Vitae, odio, quam recusandae praesentium laudantium, alias iste debitis aut pariatur eius nostrum ratione!</p>
                <p className="author">- {props.author}</p>
            </blockquote>
        </div>

    )
}

export const Reviews = (props) => {
    return (
        <div className="reviewscont">
            <div className="row">
                <Review author="Patricia" />
                <Review author="James" />
            </div>
            <div className="row">
                <Review author="Bill smith" />
                <Review author="Joe" />
            </div>
        </div>
    )
}
