import React from 'react'
import AboutCards from './AboutCards';
import img1 from '../../assets/feature-img-1.jpg';
import { AiOutlineArrowRight } from "react-icons/ai";
import HeaderTitle from '../../HeadTitle/HeaderTitle';

const About = () => {
    return (
        <>
            <HeaderTitle />
            <section className='about top'>
                <div className="container">
                    <AboutCards />
                </div>
            </section>


            <section className='features top'>
                <div className="container aboutCard flex_space">
                    <div className="row1 row">
                        <h1>
                            our <span>Features</span>
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
                            <div className='prev1'>
                                <i className='fas fa-play'></i>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default About;