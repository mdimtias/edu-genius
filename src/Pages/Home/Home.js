import React from 'react';
import Slider from '../SharedPage/Slider/Slider';
import Service from './Service/Service';
import './Home.css';
const Home = () => {
    return (
        <>
            <Slider></Slider>
            <div className="popular-service p-8">
              <h2 className='text-center pb-5 text-2xl font-bold'>Our Popular Service</h2>
            
                <div className="grid grid-cols-3 grid-flow-col gap-4">
                    <Service></Service>
                </div>
                <div className="service-btn text-center pt-8">
                    <button className="btn rounded-full">All Service</button>
                </div>
            </div>
        </>
    );
};

export default Home;