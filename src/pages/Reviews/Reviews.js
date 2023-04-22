import React from 'react';

const Reviews = ({ review }) => {
    console.log(review)
    const { customer, message, rating, serviceName, price } = review;
    return (
        <div className="card w-full bg-base-100 shadow-xl">
            <div className="card-body">
                <h2 className="card-title">{serviceName}</h2>
                <p>Name : {customer}</p>
                <p>Price : {price}</p>
                <p>Rating : {rating}</p>
                <p>Reviews-description : {message}</p>
            </div>
        </div>
    );
};

export default Reviews;