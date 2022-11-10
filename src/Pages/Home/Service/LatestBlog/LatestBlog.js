import React from 'react';
import './LatestBlog.css';
import Img1 from '../../../../assets/latestBlog/1.jpg';
import Img2 from '../../../../assets/latestBlog/2.jpg';
const LatestBlog = () => {
    return (
        <div className="latest-news p-8">
            <h1 className="section-heading text-center font-bold">Latest News From Blog</h1>
            <div className="article-wrapper p-2 sm:p-12">
                <div className="grid grid-cols-1 grid-flow-row gap-4 md:grid-cols-2 md:grid-flow-row lg:grid-cols-3 lg:grid-flow-col sm:grid-cols-2 sm:grid-flow-row">
                    <div className="card magic-shadow-sm">
                        <div>
                            <img src={Img1} alt=""></img>
                        </div>
                        <div className="card-content">
                            <div className="post-meta">
                                <span>July 3, 2017</span>
                                <div className="flex justify-between">
                                    <span>Posted By <strong>FleshMeal</strong></span>
                                    <span className="comment-count">12 Comments</span>
                                </div>
                            </div>
                            <h2>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci!</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis vitae, modi quia quaerat quas vero sequi tempore ab aspernatur, velit unde officia.</p>
                        </div>
                    </div>
                    <div className="card magic-shadow-sm">
                        <div>
                            <img src={Img2} alt=""></img>
                        </div>
                        <div className="card-content">
                            <div className="post-meta">
                                <span>July 3, 2017</span>
                                <div className="flex justify-between">
                                    <span>Posted By <strong>FleshMeal</strong></span>
                                    <span className="comment-count">12 Comments</span>
                                </div>
                            </div>
                            <h2>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci!</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis vitae, modi quia quaerat quas vero sequi tempore ab aspernatur, velit unde officia.</p>
                        </div>
                    </div>
                    <div className="card magic-shadow-sm">
                        <div>
                            <img src={Img2} alt=""></img>
                        </div>
                        <div className="card-content">
                            <div className="post-meta">
                                <span>July 3, 2017</span>
                                <div className="flex justify-between">
                                    <span>Posted By <strong>FleshMeal</strong></span>
                                    <span className="comment-count">12 Comments</span>
                                </div>
                            </div>
                            <h2>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci!</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis vitae, modi quia quaerat quas vero sequi tempore ab aspernatur, velit unde officia.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="text-center btn-wrapper">
                <button className="btn btn-secondary">View All</button>
            </div>
        </div>
    );
};

export default LatestBlog;