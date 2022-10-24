import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
// import Allitems from '../components/Destination/Allitems';
import HeaderTitle from '../HeadTitle/HeaderTitle';
import './sigle.css';
import Data from '../components/Destination/Sdata';
import EmptyFile from '../common/EmptyFile/EmptyFile';
import {BsTelephoneFill} from 'react-icons/bs'

const SinglePages = () => {

    const { id } = useParams();
    const [item, setitem] = useState(null);
    useEffect(() => {
        let item = Data.find((item) => item.id === parseInt(id));
        if (item) {
            setitem(item);
        }
    }, [id])
    return (
        <>
            <HeaderTitle />
            {item ? (
                <section className='single-page top'>
                    <div className="container">
                        <Link to='/destination' className='primary-btn back'>
                            <i className="fas fa-long-arrow-alt-left">Go Back</i>
                        </Link>

                        <article className='content flex-content'>
                            <div className="main-content">
                                <img src={item.image} alt="image h ree ladke" />
                                <p>{item.desc}</p>
                                <p>{item.desc}</p>
                            </div>

                            <div className="para flex_space">
                                <p>{item.sidepara}</p>
                                <p>{item.sidepara}</p>
                            </div>
                            <h1>What is the {item.title} City?</h1>
                            <p>{item.desc}</p>
                            <p>{item.desc}</p>
                            <div className="image grid1">
                                <div >
                                    <img src={item.paraImage_one} alt="" />
                                </div>
                                <div>
                                    <img src={item.paraImage_two} alt="" />
                                </div>
                            </div>
                            <p>{item.desc}</p>
                            <p>{item.desc}</p>
                        </article>
                    </div>
                    <div className="side-content">
                        <div className="box">
                            <h2>How Can i help You?</h2>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero debitis sint vitae ab ipsam doloribus vel id nostrum, ipsum beatae similique quod obcaecati recusandae, reprehenderit, odio nulla iure voluptatem! Harum repellendus quisquam, animi dolore labore assumenda consectetur fuga dignissimos nisi.
                            </p>
                            <button className='btn4'><BsTelephoneFill/>Contact Us</button>
                        </div>
                        <div className="picture-write">
                            <p>{ item.sidepara}</p>
                        </div>
                    </div>
                </section>

            ) : (
                <EmptyFile />
            )};
        </>
    )
}

export default SinglePages

