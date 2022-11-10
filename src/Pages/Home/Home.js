import React from 'react';
import Slider from '../SharedPage/Slider/Slider';
import Service from './Service/Service';
import './Home.css';
import Review from './Review/Review';
import LatestBlog from './LatestBlog/LatestBlog';
import Contact from '../SharedPage/Contact/Contact';
import About from './About/About';
import Category from './Category/Category';
import { Link } from 'react-router-dom';
import useTitle from '../../hooks/useTitle';
const Home = () => {
    useTitle("Home")
    return (
        <>
            <Slider></Slider>
            <div className="popular-service px-8 py-12">
              <h2 className='text-center pb-5 text-4xl font-bold'>Our Popular Service</h2>
            
                <div className="grid grid-cols-1 grid-flow-row gap-4 md:grid-cols-2 md:grid-flow-row lg:grid-cols-3 lg:grid-flow-col sm:grid-cols-2 sm:grid-flow-row" >
                    <Service></Service>
                </div>
                <div className="service-btn text-center pt-8">
                   <Link to="services"> <button className="btn rounded-full">All Service</button></Link>
                </div>
            </div>
            <About></About>
            <Category></Category>
            <div className="main-review-section text-center p-4 sm:p-12">
                <h2 className='text-6xl font-bold'>We Can Teach You</h2>
                <p className="text-xl font-medium pt-3 review-style">Our team is our proud. Each of the team members is dedicated to <br /> delivering the best results to the clients.</p>
                <Review></Review>
            </div>
            <LatestBlog></LatestBlog>
         
            <Contact></Contact>
        </>
    );
};

export default Home;