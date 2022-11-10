import React from 'react';
import './About.css';

const About = () => {
    return (
        <div className='p-16 about-section'>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div className="about-img">
                    <img src="https://cdn.pixabay.com/photo/2016/07/28/20/34/book-1549589__340.jpg" alt="" />
                </div>
                <div className="about-content">
                    <div className="about-header">
                        <h3 className='text-2xl text-gray-400'>ABOUT US</h3>
                        <p className='text-5xl font-bold'>Learn & Grow Your Skills <br /> From Anywhere</p>
                    </div>
                    <div className="about-text pt-5">
                        <p className="text-gray-400">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita facilis, consectetur reprehenderit iusto corrupti odit facere aliquam rerum laborum praesentium vero quis, labore officia quia tenetur odio voluptate pariatur illo.</p>
                        <ul className="pt-5 font-bold">
                            <li>Expert Trainers</li>
                            <li>Online Remote Learning</li>
                            <li>Lifetime Access</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;