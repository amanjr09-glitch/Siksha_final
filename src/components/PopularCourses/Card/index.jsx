import React from 'react';
import './index.css'

const Card = () => {
    return (
        <div class="course-card card-slider">
            <img src="https://media.istockphoto.com/id/1176842849/photo/over-the-shoulder-shot-of-engineer-working-with-cad-software-on-desktop-computer-screen-shows.jpg?s=612x612&w=0&k=20&c=7eQF_06OsuB5zEOIiRDDhyAHRgbo6QSezbAejr1XXf8=" alt="[Image Description]" />
            <div>
                <h2>Engineering</h2>
                <p><strong>Colleges Offering the Course:</strong> 300</p>
                <p><strong>Specializations Available:</strong> 30+</p>
                <p><strong>Description:</strong>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque iure accusantium odio debitis quis illum illo, porro quo expedita voluptatibus molestiae, maxime obcaecati ipsa doloribus sunt fugit itaque et laudantium!
                </p>
            </div>
        </div>

    );
};

export default Card;
