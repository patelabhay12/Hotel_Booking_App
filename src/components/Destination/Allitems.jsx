import React, { useState } from 'react'
import Dcard from './Dcard'
import Data  from './Sdata'
const Allitems = () => {
    const [items, setitems] = useState(Data);
    return (
        <>
            <section className="gallery desi top">
                <div className="container">
                    <div className="content grid">
                        {
                            Data.map((items) => {
                                return <Dcard key={items.id} items={items} />
                            })
                        }
                    </div>
                </div>
            </section>

        </>
    )
}

export default Allitems