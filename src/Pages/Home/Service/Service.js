import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { PhotoView } from 'react-photo-view';
import './Service.css';
import { AuthContext } from '../../../App';
import loader from '../../../assets/loader/loader.gif'
const Service = () => {
    const [services, setServices] = useState([]);
    const {loading} = useContext(AuthContext);
    if(loading){
        return  <div className='flex justify-center items-center p-12'><img src={loader} alt="Loader..." /></div> 
    }
    fetch("https://assignment-10-server-iota.vercel.app/services")
    .then(res=>res.json())
    .then(data=>{
        setServices(data.data.reverse())
    })
    .catch(error=>{
        console.log(error)
    })
    return (
        <>
        
        {services.slice(0, 3).map(service=>{
            return (
                
                <div key={service._id} className="card bg-base-100 shadow-xl p-1 sm:p-5">
                <PhotoView key={service._id} src={service.img}>
                <figure className="">
                    <img src={service.img} alt="Shoes" className="rounded-xl service_img" />
                </figure>
                </PhotoView>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{service.service_name}</h2>
                    <p>{service.short_description.slice(0, 100)}</p>
                    <p className="font-bold text-3xxl p-2">Price: ${service.price}</p>
                    <div className="card-actions">
                        <Link to={`service/${service.service_name}`}><button className="btn btn-primary">Details</button></Link>
                    </div>
                </div>
            </div>
           
            )
        })}
       
  </>
    );
};

export default Service;