import React from 'react';
import toast from 'react-hot-toast';

const AddReview = () => {
    const formHandler = async (e)=>{
        e.preventDefault();
        const form = e.target;
        const name = form.review_service_name.value;
        const content = form.review_content.value;
        const img =form.img.value;
        const email =form.email.value;
        const profession =form.profession.value;
        console.log(name, content, img, email, profession)
        const reviewData = {
            review_service_name: name, 
            review_content: content,
            img,
            email,
            profession,
        }
      await fetch("https://assignment-10-server-iota.vercel.app/review", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(reviewData)
        })
        .then(()=> {
            toast.success("Add your Review Successful")
            return form.reset();
        })
        .catch(()=>toast.error("Add Review Fail! Please try again"))

    }
    return (
        <div className="p-8">
        <div className="p-8 rounded-lg shadow-lg bg-white max-w-md center-form">
          <h2 className="text-3xl text-center font-bold p-5">Add New Review</h2>
          <form onSubmit={formHandler}>
            <div className="form-group mb-6">
              <input
                type="text"
                className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300  rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                id="exampleInput7"
                name="review_service_name"
                placeholder="Service Name"
                required
              />
            </div>
            <div className="form-group mb-6">
              <input
                type="text"
                className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300  rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                id="exampleInput8"
                name="review_content"
                placeholder="Write Review Content"
                required
              />
            </div>
            
            <div className="form-group mb-6">
              <input
                type="text"
                className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300  rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                id="exampleInput8"
                name="img"
                placeholder="Profile Img"
                required
              />
            </div>
            <div className="form-group mb-6">
              <input
                type="text"
                className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300  rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                id="exampleInput8"
                name="email"
                placeholder="Email"
                required
              />
            </div>
            <div className="form-group mb-6">
              <input
                type="text"
                className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300  rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                id="exampleInput8"
                name="profession"
                placeholder="Profession"
                required
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

export default AddReview;