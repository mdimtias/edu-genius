import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useTitle from '../../hooks/useTitle';
import './AllBlog.css';
const AllBlog = () => {
    useTitle("Blog");
    const [allBlog, setAllBlog] = useState();
    useEffect( ()=> {
          fetch("https://assignment-10-server-iota.vercel.app/blog")
          .then(res=>res.json())
          .then(data=>setAllBlog(data.data))
          .catch(error =>console.log(error.name))
      },[])
    return (
        <div className="news p-8">
            <h1 className="section-heading text-center font-bold">Latest News From Blog</h1>
            <div className="article-wrapper p-2 sm:p-12">
                <div className="grid grid-cols-1 grid-flow-row gap-4 md:grid-cols-2 md:grid-flow-row lg:grid-cols-3 sm:grid-cols-1 sm:grid-flow-row">
                   {
                    allBlog?.map(blog=>{
                        return(
                            <div key={blog._id} className="card magic-shadow-sm">
                            <div>
                                <img src={blog.thumbnail} alt=""></img>
                            </div>
                            <div className="card-content">
                                <div className="post-meta">
                                    <span>{blog.upload_data}</span>
                                    <div className="flex justify-between">
                                        <span>Posted By <strong>{blog.owner}</strong></span>
                                        <span className="comment-count">0 Comments</span>
                                    </div>
                                </div>
                                <Link to={blog.title}><h2 className='font-bold text-3xxl'>{blog.title}</h2></Link>
                                <p>{blog.content.slice(0,100)}</p>
                            </div>
                        </div>
                        )
                        })
                   }
                  
                </div>
            </div>
        </div>
    );
};

export default AllBlog;