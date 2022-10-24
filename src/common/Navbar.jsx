import React, { useState } from 'react';
import './nav.css';
import { Link } from 'react-router-dom';
// import { HiMenu } from 'react-icons/hi';
// import { GrFormClose } from 'react-icons/gr';
import { FaGreaterThan } from 'react-icons/fa';
import Header from '../components/Header/Header';


const Navbar = () => {
    const [Click, setClick] = useState(false);

    const handleClick = () => setClick(!Click);
    const closeMobileMenu = () => setClick(false);
    
    return (
        <>
            <nav className='navbar'>
                <div className="constiner flex_space">
                    <div className="menu-icon" onClick={handleClick}>
                        <i className={Click ? "fas fa-times" : "fas fa-bars"}></i>
                    </div>
                    <ul className={Click ? "nav-menu active" : "nav-menu"}>
                        <li>
                            <Link to='/' onClick={closeMobileMenu}>Home</Link></li>
                        <li>  <Link to='about' onClick={closeMobileMenu}>About us</Link></li>
                        <li>  <Link to='gallery' onClick={closeMobileMenu}>Gallery</Link></li>
                        <li> <Link to='destination' onClick={closeMobileMenu}>Destinations</Link></li>
                        <li> <Link to='blog' onClick={closeMobileMenu}>Blog</Link></li>
                        <li>  <Link to='testmonial' onClick={closeMobileMenu}>Testimonial</Link></li>
                        <li>  <Link to='contact' onClick={closeMobileMenu}>Contact Us</Link></li>
                    </ul>

                    <div className="login-area flex">
                        <li>
                            <Link to='/sign-in'>
                                <div className='some'>
                                    <span><FaGreaterThan />sign in</span>
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link to='/register'>
                                <div className="some">
                                    <span> <FaGreaterThan />Register</span>
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link to='/contact'>
                                <button className='primary-btn'>Request a Quote</button>
                            </Link>
                        </li>
                    </div>
                </div>
            </nav>



{/* ############################# Header Section ################################ */}
            <Header/>
        </>
    )
}

export default Navbar;