import React from 'react';
import './index.css'

const Card = () => {
    return (
        <div className="card card-slider">
            <img className='college-image' src='https://www.thoughtco.com/thmb/LM4Uj3mZg6tp94NLkTe8Z_3n8HU=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/swarthmore-college-Eric-Behrens-flickr-5706ffe35f9b581408d48cb3.jpg' alt='collegeimage'/>
            <h1 className='college-name'>ABC College</h1>
            <p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean bibendum suscipit velit sit amet iaculis.</p>
            <p className="city">City Name: XYZ City</p>
        </div>
    );
};

export default Card;
