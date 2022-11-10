import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../App';
import './ServiceDetail.css';
import loader from '../../assets/loader/loader.gif'
import useTitle from '../../hooks/useTitle';
const ServiceDetail = ({name}) => {
    useTitle()
    const {user, loading} = useContext(AuthContext)
    const service = useLoaderData();
    const [reviews, setReviews] = useState([]);
    const serviceData = service.data[0];
    const {service_name, short_description, long_description, img, owner, owner_img} = serviceData;
    useTitle(service_name)
    if(loading){
        return  <div className='flex justify-center items-center p-12'><img src={loader} alt="Loader..." /></div> 
    }
    fetch(`https://assignment-10-server-iota.vercel.app/reviews/${service_name}`)
    .then(res=>res.json())
    .then(data=>setReviews(data.data))

    const formHandler = (e)=>{
        e.preventDefault();
        const form = e.target;
        const review = form.review.value;
        console.log(review, user)
        const reviewData = {
            review_service_name: service_name,
            review_content: review,
            name: user.displayName,
            email: user.email,
            img: user.photoURL,
        }
        console.log(reviewData)
        fetch("https://assignment-10-server-iota.vercel.app/review", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(reviewData)
        })
        .then(()=> {
            toast.success("Add Review Successful")
            return form.reset();
        })
        .catch(()=>toast.error("Add Review Fail! Please try again"))
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
            <div className="write-review grid grid-cols-3">
                <div></div>
                <form action="" onSubmit={formHandler}>
                    {user?.email ?
                <div>
                        <label
                            htmlFor="name"
                            className="block text-sm font-medium text-gray-700 undefined"
                        >
                           Write Review
                        </label>
                        <div className="flex flex-col items-start w-50">
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
                            <div className="flex items-center justify-end mt-4">
                                <button
                                    type="submit"
                                    className="inline-flex items-center px-4 py-2 ml-4 text-xs font-semibold tracking-widest text-white uppercase transition duration-150 ease-in-out bg-gray-900 border border-transparent rounded-md active:bg-gray-900 false"
                                >
                                    Review
                                </button>
                         </div>
                    </div>
                     :  <div className="font-bold text-2xxl text-center">Please <Link to='../login' className="text-red-500">Login</Link> to add a review</div>  }
                </form>
                <div></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-12">
                {reviews.map((review=>{
                    return(
                        <div key={review._id} className="review-content">
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