import React from 'react'
import Allitems from '../../Destination/Allitems';

const DestinationHome = () => {
    return (
        <>
            <section className="popular top">
                <div className="full_container">
                    <div className="heading">
                        <h1>Most Popular Destination</h1>
                        <div className="line"></div>
                    </div>
                    <div className="content">
                        <Allitems/>
                    </div>
                </div>
            </section>
        </>
    )
}

export default DestinationHome;