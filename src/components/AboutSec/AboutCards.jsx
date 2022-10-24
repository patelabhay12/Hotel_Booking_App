import React from 'react';
import './about.css';
import { AiOutlineArrowRight } from "react-icons/ai";
import img1 from '../../assets/about-img-1.jpg';

const AboutCards = () => {
    return (
        <>
            <div className="aboutCard mtop flex_space">
                <div className="row row1">
                    <h4>About Us</h4>
                    <h1>
                        We<span>provide Solution</span>to grow your business
                    </h1>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum, quia! Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, autem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, ad.</p>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, consequatur! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui, voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, eaque.</p>

                    <button className='secondary-btn'>
                        Explore More
                        <div className="thoda-sa">
                            <AiOutlineArrowRight />
                        </div>
                    </button>
                </div>

                <div className="row image">
                    <img src={img1} alt="some thing new nikal yaha se" />
                    <div className="control-btn">
                        <div className='prev'>
                            <i className='fas fa-play'></i>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutCards;