import React from 'react';

const Service = () => {
    return (
        <>
        <div className="card bg-base-100 shadow-xl p-5">
            <figure className="">
                <img src="https://placeimg.com/400/225/arch" alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">Shoes!</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions">
                <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
         <div className="card bg-base-100 shadow-xl p-5">
         <figure className="">
             <img src="https://placeimg.com/400/225/arch" alt="Shoes" className="rounded-xl" />
         </figure>
         <div className="card-body items-center text-center">
             <h2 className="card-title">Shoes!</h2>
             <p>If a dog chews shoes whose shoes does he choose?</p>
             <div className="card-actions">
             <button className="btn btn-primary">Buy Now</button>
             </div>
         </div>
     </div>
      <div className="card bg-base-100 shadow-xl p-5">
      <figure className="">
          <img src="https://placeimg.com/400/225/arch" alt="Shoes" className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
          <h2 className="card-title">Shoes!</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions">
          <button className="btn btn-primary">Buy Now</button>
          </div>
      </div>
  </div>
  </>
    );
};

export default Service;