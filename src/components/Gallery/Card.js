import React from 'react'
import './gallary.css'

const Card = (props) => {
    return (
        <>
            <div className="items">
                <div className="img">
                    <img src={props.images} alt="blank"/>
                    <i className='fas fa-imge'></i>
                </div>
                <div className="title">
                    <h3>{ props.title}</h3>
                </div>
            </div>

            {/* <div className="popup">
                <div className="hide"></div>
                <div className="popup-content"></div>
                <button>Close</button>
                <img src="" alt="" />
            </div> */}
        </>
    )
}

export default Card