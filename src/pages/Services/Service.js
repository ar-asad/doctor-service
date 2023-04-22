import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { Link } from 'react-router-dom';

const Service = ({ service }) => {
    const { img, title, price, description, _id } = service;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <PhotoProvider>
                    <PhotoView src={img}>
                        <img src={img} alt="Shoes" className="rounded-xl" />
                    </PhotoView>
                </PhotoProvider>
            </figure>
            <div className="card-body  ">
                <h2 className="card-title font-bold ">{title}</h2>
                <p className='font-bold text-blue-500 text-lg'>Price : ${price}</p>
                <p>Description : {description.slice(0, 100)}</p>
                <div className="card-actions justify-end">
                    <Link to={`/serviceall/${_id}`} >
                        <button className="btn btn-outline btn-accent">veiw details</button>
                    </Link>
                </div>
            </div>
        </div>
    );

};

export default Service;