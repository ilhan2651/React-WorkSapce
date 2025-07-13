import React from 'react'
import './css/Course.css'

function Course({ course }) {
    const { id, title, description, price, link, image } = course;

    return (
        <div className='course'>
            <div>
                <img className='course-image' src={image} alt="image" />
                <h4 className='course-title'>{title}</h4>
                <h4>{id}</h4>
                <p className='course-desc'>{description}</p>
                <h3 className='course-price'>{price} ₺ </h3>
                <div className="course-link"><a
                    style={{ textDecoration: "none" }} href={link}>Satın almak için</a></div>
            </div>


        </div>
    )

}

export default Course