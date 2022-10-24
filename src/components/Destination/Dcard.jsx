import React from 'react'
import { Link } from 'react-router-dom'

const Dcard = ({ items: { id, image, title, desc, sidepara, paraImage_one, paraImage_two } }) => {
    return (
        <>
            <div className="items" key={id}>
                <div className="img">
                    <img src={image} alt="New Photo" />

                    <Link to={`/SinglePages/${id}`} className='blogItem-link'>
                        <i className='fas fa-external-link-alt'></i>
                    </Link>
                </div>
                <div className="title">
                    <h3>{title}</h3>
                </div>
            </div>
        </>
    )
}

export default Dcard