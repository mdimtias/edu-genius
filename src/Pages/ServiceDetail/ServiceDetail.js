import React, { useContext, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../App';
import './ServiceDetail.css';
const ServiceDetail = ({name}) => {
    const {user} = useContext(AuthContext)
    const service = useLoaderData();
    const [reviews, setReviews] = useState([]);
    const serviceData = service.data[0];
    const {service_name, short_description, long_description, img, owner, owner_img} = serviceData;

    fetch(`https://assignment-10-server-iota.vercel.app/reviews/${service_name}`)
    .then(res=>res.json())
    .then(data=>setReviews(data.data))

    const formHandler = (e)=>{
        e.preventDefault();
        const form = e.target;
        const review = form.review.value;
        console.log(review, user)
        const reviewData = {
            review_content: review
        }
        console.log(reviewData)
        // fetch("https://assignment-10-server-iota.vercel.app/review", {
        //     method: "POST",
        //     headers: {
        //         'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify(serviceData)
        // })
        // .then(()=> {
        //     toast.success("Add Service Successful")
        //     return form.reset();
        // })
        // .catch(()=>toast.error("Add Service Fail! Please try again"))
    }
    return (
        <>
        <div className='service-header-section'>
            <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="service-text flex justify-center flex-col">
                    <h2>{service_name}</h2>
                    <p>{short_description}</p>
                    <div className="owner-info flex items-center gap-2 p-5">
                        <img src={owner_img} alt="" />
                        <h3><span className='text-sm text-slate-300'>Created By </span> <br/>{owner}</h3>
                    </div>
                </div>
                <div className="service-img flex items-center justify-center">
                    <img src={img} alt="" />
                </div>
            </div>
        </div>
        <div className="service-content p-12 bg-base-200">
            <p>{long_description}</p>
        </div>
        <div className="reviews-section">
            <div className="product-review p-5">
                <h3 className='text-center text-6xl font-bold'>Product Review</h3>
            </div>
            <div className="write-review">
                <form action="" onClick={formHandler}>
                <div>
                        <label
                            htmlFor="name"
                            className="block text-sm font-medium text-gray-700 undefined"
                        >
                           Write Review
                        </label>
                        <div className="flex flex-col items-start">
                             <textarea
                                    type="text"
                                    name="review"
                                    required
                                    className="form-control
                                    block
                                    w-full
                                    px-3
                                    py-1.5
                                    text-base
                                    font-normal
                                    text-gray-700
                                    bg-white bg-clip-padding
                                    border border-solid border-gray-300
                                    rounded
                                    transition
                                    ease-in-out
                                    m-0
                                    focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                />
                        </div>
                    </div>
                </form>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-12">
                {reviews.map((review=>{
                    return(
                        <div className="review-content">
                            <div className="review-header px-14 py-5 flex gap-3 items-center">
                                <img src={review.img} className="mt-3" alt="" />
                               <div className="review-header-text">
                                    <h2 className="font-bold text-lg">{review.name}</h2>
                                    <p className="font-bold text-sm"> Service Name: {review.review_service_name}</p>
                               </div>
                            </div>
                            <div className="review-text p-5 bg-stone-600">
                                <p>{review.review_content}</p>
                            </div>
                        </div>
                    )
                }))}
            </div>

        </div>
        </>
    );
};

export default ServiceDetail;