import React from 'react';
import './index.css'

const TopStudyPlaces = ({ sliderClass, data }) => {
    return (
        <div className={`top-study-places ${sliderClass}`}>
            <div className="cover">
                <img src={data.imgSrc} alt="cover" />
            </div>
            <div className="content">
                <h1>{data.cityName}</h1>
                <p>{data.description}</p>
            </div>
        </div>
    );
};

export default TopStudyPlaces;
