import React from 'react';
import { useLocation } from 'react-router-dom';
import './head.css';
import { Link } from 'react-router-dom';

const HeaderTitle = () => {
    const location = useLocation();
    return (
        <>
            <section className='images-heading'>
                <div className="container">
                    <h1>{location.pathname.split('/')[1]}</h1>
                    <button className='btn'>
                        <Link to='/'>Home /</Link>
                        <span>{location.pathname.split('/')[1]}</span>
                    </button>
                </div>
            </section>
        </>
    )
}

export default HeaderTitle