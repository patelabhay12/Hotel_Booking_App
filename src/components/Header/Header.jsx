import React from 'react';
import './header.css';
import img1 from '../../assets/loga.png';
import { MdOutlineWatchLater } from 'react-icons/md';
import { FaPhoneVolume } from 'react-icons/fa';
import { AiOutlineMail } from 'react-icons/ai';

const Header = () => {
  return (
    <>
      <header><div className="container flex_space">
        <div className="logo">
          <img src={img1} alt="" />
        </div>
        <div className="right-header">
          <div className="header1">
            <div className='size'>
              <MdOutlineWatchLater />
            </div>
            <div className="internal">
              <h4>Working Hours</h4>
              <h5>Monday-Sunday 9:00am to 6:00pm</h5>
            </div>
          </div>
          <div className="header1">
            <div className="size">
              <FaPhoneVolume />
            </div>
            <div className="internal">
              <h4>Call Us</h4>
              <h5>+011 234 4567</h5>
            </div>
          </div>
          <div className="header1">
            <div className="size">
              <AiOutlineMail />
            </div>
            <div className="internal">
              <h4>Mail Us</h4>
              <h5>abhaypatel6794@gmail.com</h5>
            </div>
          </div>
        </div>
      </div></header>
    </>
  )
}

export default Header