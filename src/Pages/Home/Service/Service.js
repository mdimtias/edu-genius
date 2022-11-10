import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Img1 from '../../../assets/slider/1.jpg';
import './Service.css';
const Service = () => {
    const [services, setServices] = useState([]);
    fetch("https://assignment-10-server-iota.vercel.app/services")
    .then(res=>res.json())
    .then(data=>setServices(data.data))
    return (
        <>
        {services.slice(0, 3).map(service=>{
            return (
                <div key={service._id} className="card bg-base-100 shadow-xl p-1 sm:p-5">
                <figure className="">
                    <img src={service.img} alt="Shoes" className="rounded-xl service_img" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{service.service_name}</h2>
                    <p>{service.short_description}</p>
                    <div className="card-actions">
                        <Link to={`service/${service.service_name}`}><button className="btn btn-primary">Buy Now</button></Link>
                    </div>
                </div>
            </div>
            )
        })}
       
  </>
    );
};

export default Service;