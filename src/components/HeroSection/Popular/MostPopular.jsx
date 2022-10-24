import React from 'react';
import Card from './Card';
import './Mostcss.css';

const MostPopular = () => {
    return (
        <section className='popular popular-top'>
            <div className="fullcontainer">
                <div className="heading">
                    <h1>Most Popular Hotel</h1>
                    <div className="line"></div>
                </div>
            </div>
            <div className="content">
                <Card/>
            </div>
        </section>
    )
}

export default MostPopular;