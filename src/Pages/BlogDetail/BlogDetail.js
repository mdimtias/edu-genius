import React from 'react';
import { useLoaderData } from 'react-router-dom';
import './BlogDetail.css';
import useTitle from '../../hooks/useTitle';
const BlogDetail = () => {
    const blogData = useLoaderData();
    const blog = blogData.data[0];
    useTitle(blog.title);
    return (
        <div className="latest-news p-8">
            <div className="article-wrapper p-2 sm:p-12">
                <div className="grid">
                   {/* {
                    blogDetail?.slice(0,3).map(blog=>{
                        return( */}
                            <div className='flex justify-center items-center'>
                                <img src={blog.thumbnail} alt=""></img>
                            </div>

                            <h1 className="section-heading text-center font-bold">{blog.title}</h1>

                            <div className="card-content p-12">
                                <div className="post-meta">
                                    <span>{blog.upload_data}</span>
                                    <div className="flex justify-between">
                                        <span>Posted By <strong>{blog.owner}</strong></span>
                                        <span className="comment-count">0 Comments</span>
                                    </div>
                                </div>
                                <p>{blog.content}</p>
                            </div>
                        {/* )
                        })
                   } */}
                  
                </div>
            </div>
        </div>
    );
};

export default BlogDetail;