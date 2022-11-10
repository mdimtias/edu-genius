import React, { useContext, useEffect, useState } from 'react';
import Facebook from '../../assets/social/facebook.png';
import Twitter from '../../assets/social/twitter.png';
import Linkedin from '../../assets/social/linkedin.png';
import Instagram from '../../assets/social/instagram.png';
import { Link } from 'react-router-dom';
import {AuthContext} from '../../App'
import useTitle from '../../hooks/useTitle';
const MyReview = () => {
    useTitle("My Review")
    const [clientReview, setClientReview] = useState([]);
    const {user} =useContext(AuthContext);
    const userEmail =  user?.email;
    useEffect(()=>{
        fetch(`https://assignment-10-server-iota.vercel.app/reviewemail/${userEmail}`)
        .then(res=>res.json())
        .then(data=>setClientReview(data.data))
    },[clientReview, userEmail])
    return (
        <div className="review-section text-center p-4 sm:p-6 md:p-6 lg:p-8">
            <div className="grid grid-cols-1 grid-flow-row gap-5 md:grid-cols-2 md:grid-flow-row lg:grid-cols-3 sm:grid-cols-1 sm:grid-flow-row">
                {
                    clientReview?.map(review=>{
                        return(
                            <div className="review-card p-5" key={review._id}>
                                <div className="card-body p-0 justify-center items-center">
                                    <div className="profile-review-img">
                                        <img src={review.img} alt="" />
                                    </div>
                                    <div className="profile-info">
                                        <h2>{review.name}</h2>
                                        <p>{review.profession}</p>
                                    </div>
                                    <div className="review-text-user">
                                        <p>{review.review_content}</p>
                                    </div>
                                    <div className="card-footer p-5">
                                        <div className="email pb-2">{review.email}</div>
                                        <div className="social-profile flex gap-2 justify-center">
                                            <Link to="/"><img src={Facebook} alt="" /></Link>
                                            <Link to="/"><img src={Twitter} alt="" /></Link>
                                            <Link to="/"><img src={Linkedin} alt="" /></Link>
                                            <Link to="/"><img src={Instagram} alt="" /></Link>
                                        </div>
                                    </div>
                            </div>
                            </div>
                        )
                    })
                }
               
            </div>
            <div className="add-new-service text-center p-5">
            <button className="btn btn-primary text-center"><Link to='../add-review' className="font-bold text-2xl">Add New Review</Link></button>
        </div>
        </div>
    );
};

export default MyReview;