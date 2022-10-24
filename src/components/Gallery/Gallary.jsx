import React from 'react'
import HeaderTitle from '../../HeadTitle/HeaderTitle';
import Card from './Card';
import GallaryData from './GallaryData';
import './gallary.css';

const Gallary = () => {
    return (
        <>
            <HeaderTitle />
            <div className="heading">
                <h1>Our Gallery</h1>
            </div>
            <section className='gallery top'>
                <div className="container grid">
                    {
                        GallaryData?.map((value, i) => {
                                return <Card images={value?.img} title={value?.title} />
                        })
                    }
                    <Card />
                </div>
            </section>
        </>
    )
}

export default Gallary;