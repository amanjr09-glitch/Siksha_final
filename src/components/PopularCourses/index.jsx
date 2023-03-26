import React from 'react';
import './index.css';
import Card from './Card'

const PopularCourses = () => {
    return (
        <div>
            <h1 className='heading'>Popular Courses</h1>
            <div className='cards'>
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        </div>

    );
};

export default PopularCourses;
