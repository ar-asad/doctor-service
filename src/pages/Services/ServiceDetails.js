import React, { useContext, useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContex } from '../../contex/AuthProvider/AuthProvider';
import Reviews from '../Reviews/Reviews';

const ServiceDetails = () => {
    const [reviews, setReviews] = useState([]);
    const [refetch, setRefectch] = useState(false)
    const { user, loading } = useContext(AuthContex)
    const services = useLoaderData();
    const { img, title, price, description, _id } = services;

    const handleReview = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = `${form.firstName.value} ${form.lastName.value}`;
        const email = user?.email || "unregistered";
        const rating = form.rating.value;
        const message = form.message.value;

        const reviews = {
            service: _id,
            serviceName: title,
            price,
            customer: name,
            email,
            rating,
            message
        }

        fetch('http://localhost:5000/reviews', {
            method: 'POST',
            headers: {
                "content-type": 'application/json'
            },
            body: JSON.stringify(reviews)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    alert('Order successfully')
                    setRefectch(!refetch)
                    form.reset();
                }
            })
            .catch(e => console.error(e));
    }

    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [refetch])

    // if (loading) {
    //     return <h1 className='text-4xl'>Loading.......</h1>

    // }

    return (
        <div>
            <div className="card w-full bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={img} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body text-center ">
                    <h2 className="text-2xl text-center font-bold ">{title}</h2>
                    <p className='font-bold text-blue-500 text-lg'>Price : ${price}</p>
                    <p>Description : {description}</p>
                </div>
            </div>

            {user ? <form onSubmit={handleReview} className='my-8'>
                <h2 className='text-4xl'>You are about to : {title}</h2>
                <h4 className='text-3xl'>Price : {price}</h4>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                    <input name='firstName' type="text" placeholder="First Name" className="input input-ghost w-full input-bordered" />
                    <input name='lastName' type="text" placeholder="Last Name" className="input input-ghost w-full input-bordered" />
                    <input name='rating' type="number" placeholder="Rating" className="input input-ghost w-full input-bordered" required />
                    <input name='email' type="email" placeholder="Your Email" defaultValue={user?.email} className="input input-ghost w-full input-bordered" readOnly />
                </div>
                <textarea name='message' placeholder="message" className="textarea h-24 textarea-bordered textarea-sm w-full mt-5" ></textarea>
                <div className='text-center mt-3'>
                    <input className='btn ' type="submit" value='Place Your Review' />
                </div>
            </form>
                :
                <h1 className="text-4xl font-bold text-center m-10"><Link to="/login">Please Login to add review</Link></h1>
            }
            {/* showing all reviws here */}
            <div className='mt-6'>
                <h1 className="text-4xl font-bold text-center m-10">All Reviews Here</h1>
                <div>
                    {
                        reviews.map(review => <Reviews key={review._id} review={review}></Reviews>)
                    }
                </div>
            </div>

        </div>
    );
};

export default ServiceDetails;