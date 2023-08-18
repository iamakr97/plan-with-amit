import React, { useState } from 'react'
import '../data';
import './Tours.css';


function Tours({ id, name, image, info, price ,intrestHandler}) {
    let [readMore, setReadMore] = useState("Read More");
    let [infoUpdate, setInfoUpdate] = useState(`${info.substring(0, 200)}...`);
    function spanHandler() {
        if (readMore === "Read More") {
            setInfoUpdate(info);
            setReadMore("Show Less");
        } else {
            setInfoUpdate(`${info.substring(0, 200)}...`);
            setReadMore("Read More");
        }
    }
    
    return (
        <div className='card'>
            <div className="image">
                <img src={image} />
            </div>
            <div className='items'>
                <h2 className="price-tag">{price}</h2>
                <h2 className="city-name">{name}</h2>
                <p className="city-description">
                    {infoUpdate}
                    <span onClick={spanHandler}>{readMore}</span>
                </p>
                <button className="not-intrested" onClick={()=>intrestHandler(id)}>Not Instrested</button>
            </div>
        </div>
    )
}
export default Tours;