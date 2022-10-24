import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Mostcss.css';
import PopularData from './popData';
import Slider from "react-slick";



const SampleNextArrow = (props) => {
    const { onClick } = props
    return (
        <div className="control-btn" onClick={onClick}>
            <button className='prev'>
                <i className='fa fa-long-arrow-alt-left'></i>
            </button>
        </div>
            
        
    )
}
const Card = () => {
    var settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 2,
        nextArrow:<SampleNextArrow />,
        prevArrow:<SampleNextArrow />,
        responsive: [
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
                }
            },
            
        ]
    };
    return (
        <>
            <Slider {...settings}>
                {
                    PopularData.map((item) => {
                        return (
                            <div className="cards">
                                <div className="item">
                                    <div className="imgae">
                                        <img src={item.image} alt="kuch nhi h ree" />
                                        <i className='fas fa-map-marker-alt'></i>
                                        <label>{item.country}</label>
                                    </div>

                                    <div className="rate">
                                        <i className='fa fa-star'></i>
                                        <i className='fa fa-star'></i>
                                        <i className='fa fa-star'></i>
                                        <i className='fa fa-star'></i>
                                        <i className='fa fa-star'></i>
                                    </div>
                                    <div className="details">
                                        <h2>{item.name}</h2>
                                        <div className="border"></div>
                                        <h3>
                                            {item.price} / <span>Per Night</span>
                                        </h3>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </Slider>
        </>

    )
}

export default Card;