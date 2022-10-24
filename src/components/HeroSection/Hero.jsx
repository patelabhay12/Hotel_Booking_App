import React from 'react';
import './hero.css';
import Side from './Side';
import Data from './Data.js';
import HomeAbout from './HomeAbout';
import DestinationHome from './Destina/DestinationHome';
import MostPopular from './Popular/MostPopular';

const Hero = () => {
    return (
        <>
            <Side slides={Data} /> 
            <HomeAbout />
            <MostPopular/>
            <DestinationHome/>
        </>
    )
}

export default Hero;
