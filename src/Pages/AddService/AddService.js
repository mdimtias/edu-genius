import React from 'react';
import toast from 'react-hot-toast';
import useTitle from '../../hooks/useTitle';

const AddService = () => {
    useTitle("Add Service");
    const formHandler = (e)=>{
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const img = form.img.value;
        const owner_name = form.owner_name.value;
        const owner_img = form.owner_img.value;
        const keyword = form.keyword.value;
        const price = form.price.value;
        const short_description = form.short_description.value;
        const long_description = form.long_description.value;
        console.log(name, img, owner_name, owner_img, keyword, short_description, long_description)
        const serviceData = {
            service_name: name,
            short_description: short_description,
            long_description: long_description,
            img: img,
            owner: owner_name,
            owner_img: owner_img,
            keyword: keyword,
            price: price
        }
       
        fetch("https://assignment-10-server-iota.vercel.app/service", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(serviceData)
        })
        .then(()=> {
            toast.success("Add Service Successful")
            return form.reset();
        })
        .catch(()=>toast.error("Add Service Fail! Please try again"))
    }
    return (
        <div>
        <div className="flex flex-col items-center min-h-screen pt-6 sm:justify-center sm:pt-0 bg-gray-50">
            <div>
                <a href="/">
                    <h3 className="text-4xl font-bold text-purple-600">
                        Add New Service
                    </h3>
                </a>
            </div>
            <div className="w-full px-6 py-4 mt-6 overflow-hidden bg-white shadow-md sm:max-w-md sm:rounded-lg">
                <form onSubmit={formHandler}>
                    <div>
                        <label
                            htmlFor="name"
                            className="block text-sm font-medium text-gray-700 undefined"
                        >
                            Service Name
                        </label>
                        <div className="flex flex-col items-start">
                             <input
                                    type="text"
                                    name="name"
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
                    <div className="mt-4">
                        <label
                            htmlFor="img"
                            className="block text-sm font-medium text-gray-700 undefined"
                        >
                            Service Image
                        </label>
                        <div className="flex flex-col items-start">
                            <input
                                type="text"
                                name="img"
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
                    <div className="mt-4">
                        <label
                            htmlFor="owner_name"
                            className="block text-sm font-medium text-gray-700 undefined"
                        >
                            Service Owner Name
                        </label>
                        <div className="flex flex-col items-start">
                            <input
                                type="text"
                                name="owner_name"
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
                    <div className="mt-4">
                        <label
                            htmlFor="owner_img"
                            className="block text-sm font-medium text-gray-700 undefined"
                        >
                            Service Owner Image
                        </label>
                        <div className="flex flex-col items-start">
                            <input
                                type="text"
                                name="owner_img"
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
                    <div className="mt-4">
                        <label
                            htmlFor="keyword"
                            className="block text-sm font-medium text-gray-700 undefined"
                        >
                           Keyword
                        </label>
                        <div className="flex flex-col items-start">
                            <input
                                type="text"
                                name="keyword"
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

                    <div className="mt-4">
                        <label
                            htmlFor="keyword"
                            className="block text-sm font-medium text-gray-700 undefined"
                        >
                           Price
                        </label>
                        <div className="flex flex-col items-start">
                            <input
                                type="number"
                                name="price"
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

                    <div className="mt-4">
                        <label
                            htmlFor="short_description"
                            className="block text-sm font-medium text-gray-700 undefined"
                        >
                           Short Description
                        </label>
                        <div className="flex flex-col items-start">
                            <textarea
                                type="text"
                                name="short_description"
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
                    <div className="mt-4">
                        <label
                            htmlFor="long_description"
                            className="block text-sm font-medium text-gray-700 undefined"
                        >
                           Long Description
                        </label>
                        <div className="flex flex-col items-start">
                            <textarea
                                type="textarea"
                                name="long_description"
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
                    
                    <div className="flex items-center justify-end mt-4">
                        <button
                            type="submit"
                            className="inline-flex items-center px-4 py-2 ml-4 text-xs font-semibold tracking-widest text-white uppercase transition duration-150 ease-in-out bg-gray-900 border border-transparent rounded-md active:bg-gray-900 false"
                        >
                            Add Service
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
    );
};

export default AddService;