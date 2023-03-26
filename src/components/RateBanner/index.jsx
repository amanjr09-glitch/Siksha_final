import React from 'react';
import './index.css'
import competitions from './assets/competitions.png'
import customer from './assets/customer.png'
import member from './assets/member.png'
import questions from './assets/questions.png'
import ratings from './assets/ratings.png'
import museum from './assets/museum.png'

const RateBanner = () => {
    return (
        <div className='rate-banner'>
            <div className="grid-container">
                <div className="banner-card" align="center">
                    <div className='banner-content'>
                        <img src={competitions} alt='icons' />
                        <h2>Competitions</h2>
                        <p>122+</p>
                    </div>
                </div>
                <div className="banner-card">
                    <div className='banner-content' align="center">
                        <img src={customer} alt='icons' />
                        <h2>Users</h2>
                        <p>1343+</p>
                    </div>
                </div>
                <div className="banner-card">
                    <div className='banner-content' align="center">
                        <img src={member} alt='icons' />
                        <h2>Members</h2>
                        <p>232</p>
                    </div>
                </div>
                <div className="banner-card">
                    <div className='banner-content' align="center">
                        <img src={questions} alt='icons' />
                        <h2>Queries</h2>
                        <p>311</p>
                    </div>
                </div>
                <div className="banner-card">
                    <div className='banner-content' align="center">
                        <img src={ratings} alt='icons' />
                        <h2>Ratings & Reviews</h2>
                        <p>2232</p>
                    </div>
                </div>
                <div className="banner-card">
                    <div className='banner-content' align="center">
                        <img src={museum} alt='icons' />
                        <h2>Museum</h2>
                        <p>3234</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RateBanner;
