import React from 'react';
import Slider from './Slider';

const dataArray = [
    {
        imgSrc: 'https://lp-cms-production.imgix.net/2019-06/9483508eeee2b78a7356a15ed9c337a1-bengaluru-bangalore.jpg',
        cityName: "Mumbai",
        description: "lorvnrbvjh hjbkbvnbsmn  vmnsbvnms  nbvsmnbkkrbj capqmcmnemn hbkbvjr kbrjhvrwn"
    },
    {
        imgSrc: 'https://lp-cms-production.imgix.net/2019-06/9483508eeee2b78a7356a15ed9c337a1-bengaluru-bangalore.jpg',
        cityName: "Bengalore",
        description: "lorvnrbvjh hjbkbvnbsmn  vmnsbvnms  nbvsmnbkkrbj capqmcmnemn hbkbvjr kbrjhvrwn"
    },
    {
        imgSrc: 'https://lp-cms-production.imgix.net/2019-06/9483508eeee2b78a7356a15ed9c337a1-bengaluru-bangalore.jpg',
        cityName: "Delhi",
        description: "lorvnrbvjh hjbkbvnbsmn  vmnsbvnms  nbvsmnbkkrbj capqmcmnemn hbkbvjr kbrjhvrwn"
    },
]

const TopStudyPlaces = () => {
    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    }
    return (
        <div>
            <h1 className='heading'>Top Study Places</h1>
            <Slider dataArray={dataArray} />
        </div>
    );
};

export default TopStudyPlaces;
