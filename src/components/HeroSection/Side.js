import React, { useState } from 'react';
import Data from './Data';
import { GrPrevious, GrNext } from 'react-icons/gr';

const Side = ({ slides }) => {
    // console.log(slides);
    const [current, setcurrent] = useState(0);
    console.log(current);
    const length = slides.length;
    const nextSlide = () => {
        setcurrent(current === length - 1 ? 0 : current + 1);
    }
    const prevSlide = () => {
        setcurrent(current === 0 ? length - 1 : current - 1);
    }

    if (!Array.isArray(slides) || slides.length <= 0) {
        return null;
    }
    return (
        <>
            <section className="slider">
                <div className="control-btn">
                    <button className="prev" onClick={prevSlide}>
                        <div className="nhi">
                            <GrPrevious />
                        </div>
                    </button>
                    <button className="next" onClick={nextSlide}>
                        <div className="nhi">
                            <GrNext />
                        </div>
                    </button>
                </div>

                {Data?.map((slide, index) => {
                    return (
                        <div className={index === current ? "slide active" : "slide"} key={index}>
                            {index === current && <img src={slide?.images} alt="home image" />}
                        </div>
                    )
                })}
            </section>


            <section className='slide-form'>
                <div className="continer">
                    <h2>Enjoy Your Holiday</h2>
                    <span>Search and Book Hotel</span>
                    <form action="">
                        <input type="text" placeholder='Search City' />
                        <div className="flex_space sp">
                            <input type="date"  placeholder='Chenk In'/>
                            <input type="date" placeholder='Check Out'/>
                        </div>
                        <div className='flex_space sp'>
                            <input type="text" placeholder='Adult(s)(18+)' />
                            <input type="text" placeholder='Children(0 - 17)' />
                        </div>
                        <input type="text"  placeholder='Rooms'/>
                        <input type="Submit" value="search" className='submit' />
                    </form>

                </div>
            </section>
        </>
    )
}

export default Side