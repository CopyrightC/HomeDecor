import React from 'react'
import "./styles/reviews.css"

const Review = () => {
    return (

        <div className="review">
            <blockquote>
                <p className="para-rev"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi optio saepe quaerat voluptas assumenda impedit illo illum veritatis ab explicabo! Vitae, odio, quam recusandae praesentium laudantium, alias iste debitis aut pariatur eius nostrum ratione!</p>
                <p className="author">- Patricia</p>
            </blockquote>
        </div>

    )
}

export const Reviews = (props) => {
    return <Review />
}
