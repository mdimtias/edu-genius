import React from 'react';
import toast from 'react-hot-toast';
import useTitle from '../../hooks/useTitle';

const AddCategory = () => {
  useTitle("All Category");
    const formHandler = (e)=>{
        e.preventDefault();
        const form = e.target;
        const category_name = form.category_name.value;
        const img = form.img.value;
        const categoryData = {
            category_name,
            img,
        }
        fetch("https://assignment-10-server-iota.vercel.app/category", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(categoryData)
        })
        .then(()=> {
            toast.success("Add Category Successful")
            return form.reset();
        })
        .catch(()=>toast.error("Add Category Fail! Please try again"))
    }
    return (
        <div className="p-8">
          <div className="p-8 rounded-lg shadow-lg bg-white max-w-md center-form">
            <h2 className="text-3xl text-center font-bold p-5">Add New Category</h2>
            <form onSubmit={formHandler}>
              <div className="form-group mb-6">
                <input
                  type="text"
                  className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300  rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  id="exampleInput7"
                  name="category_name"
                  placeholder="Category Name"
                />
              </div>
              <div className="form-group mb-6">
                <input
                  type="text"
                  className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300  rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  id="exampleInput8"
                  name="img"
                  placeholder="Image URL"
                />
              </div>
              <button
                type="submit"
                className="w-full px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0    active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
              >
                Send
              </button>
            </form>
        </div>
        </div>
    );
};

export default AddCategory;