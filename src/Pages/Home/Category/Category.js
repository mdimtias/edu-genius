import React, { useEffect, useState } from 'react';
import './Category.css';
const Category =  () => {
    const [AllCategory, setAllCategory] = useState([])
    // useEffect(()=>{
    //      fetch("https://assignment-10-server-iota.vercel.app/category")
    //     .then(res=>res.json())
    //     .then(data=>setAllCategory(data.data))
    // },[])

    useEffect(() => {
        const fetchData = async () => {
           await fetch('https://assignment-10-server-iota.vercel.app/category')
           .then(res=>res.json())
           .then(data=>setAllCategory(data.data))
        }
      
        fetchData()
            .catch(error=>console.log(error));
      }, [])

    return (
        <div className='category-section p-12'>
            <div className="category-header text-center p-6">
                <h2 className="text-6xl font-bold mb-4">Top Categories</h2>
                <p className='text-2xl'>Consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore</p>
            </div>
            <div className="top-category p-6">
                <div className="categories grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3">
                    {
                        AllCategory?.map(category=>{
                            return(
                                <div key={category._id} className="category-text p-3">
                                    <img src={category.img} alt="" />
                                    <h2>{category.category_name}</h2>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    );
};

export default Category;