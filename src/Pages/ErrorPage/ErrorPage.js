import React from 'react';

const ErrorPage = () => {
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
        <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title">Page Not Found</h2>
          <p>404 Error</p>
        </div>
      </div>
    );
};

export default ErrorPage;