import React from "react";
import toast from "react-hot-toast";
import "./Contact.css";
const Contact = () => {
  const formHandler = (e)=>{
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const number = form.number.value;
    const message = form.message.value;
    console.log(name, email, number, message)
    const contactData = {
       name,
       email,
       number,
       message
    }
    fetch("https://assignment-10-server-iota.vercel.app/contact", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(contactData)
    })
    .then(()=> {
        toast.success("Send Message Successful")
        return form.reset();
    })
    .catch(()=>toast.error("Send Message Fail! Please try again"))
  }
  return (
    <div className="contact-section p-12">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="contact-wrapper">
          <div className="contact-header p-8">
            <h2 className="text-5xl font-bold pb-5">Contacts</h2>
            <p>
              We are always ready to help. There are many ways to contact us.
              You may drop us a line, give us a call, or send an email, choose
              what suits you most.
            </p>
          </div>
          <div className="contact-address p-8">
            <div className="office-address flex justify-between">
              <h2 className="text-2xl font-medium">Address</h2>
              <p>
                3611 Silas Trail Suite 927 <br /> Port Yasmeenland, PY 20061
              </p>
            </div>
            <div className="office-hours flex justify-between pt-5">
              <h2 className="text-2xl font-medium">Hours</h2>
              <p>
                Mon – Sat: 8AM – 6PM <br /> Sun: 11AM – 3PM
              </p>
            </div>
            <div className="contact-number flex justify-between pt-5">
              <h2 className="text-2xl font-medium">Contacts</h2>
              <p>
                (800) 123 45 67 <br /> email@example.com
              </p>
            </div>
          </div>
        </div>

        <div className="p-8">
          <div className="p-8 rounded-lg shadow-lg bg-white max-w-md center-form">
            <form onSubmit={formHandler}>
              <div className="form-group mb-6">
                <input
                  type="text"
                  className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300  rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  id="exampleInput7"
                  name="name"
                  placeholder="Name"
                />
              </div>
              <div className="form-group mb-6">
                <input
                  type="email"
                  className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300  rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  id="exampleInput8"
                  name="email"
                  placeholder="Email"
                />
              </div>
              <div className="form-group mb-6">
                <input
                  type="number"
                  className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300  rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  id="exampleInput8"
                  name="number"
                  placeholder="Number"
                />
              </div>
              <div className="form-group mb-6">
                <textarea
                  className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300  rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  id="exampleFormControlTextarea13"
                  rows="3"
                  name="message"
                  placeholder="Message"
                ></textarea>
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
      </div>
    </div>
  );
};

export default Contact;
