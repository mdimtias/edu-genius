import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Services.css';
const Services = () => {
    const [services, setServices] = useState([]);
    fetch("https://assignment-10-server-iota.vercel.app/services")
    .then(res=>res.json())
    .then(data=>setServices(data.data))
    return (
        <>
         <div className="grid grid-cols-1 grid-flow-row gap-4 md:grid-cols-2 md:grid-flow-row lg:grid-cols-3 sm:grid-cols-2 sm:grid-flow-row" >
        {services.map(service=>{
            return (
                <div key={service._id} className="card bg-base-100 shadow-xl p-1 sm:p-5">
                <figure className="">
                    <img src={service.img} alt="Shoes" className="rounded-xl service_img" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{service.service_name}</h2>
                    <p>{service.short_description}</p>
                    <div className="card-actions">
                        <Link to={`${`../service/${service.service_name}`}`}><button className="btn btn-primary">Buy Now</button></Link>
                    </div>
                </div>
            </div>
            )
        })}
       
         </div>
         <div className="add-new-service text-center p-5">
            <button className="btn btn-primary text-center"><Link to='../add-service' className="font-bold text-2xl">Add New Service</Link></button>
        </div>
  </>
    );
};

export default Services;