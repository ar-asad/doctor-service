import React, { useEffect, useState } from 'react';
import Service from './Service';
import { Link } from 'react-router-dom';

const Services = () => {
    const [services, setServices] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <div className='mt-36'>
            <div className='text-center w-2/4 mx-auto'>
                <h4 className='font-bold text-blue-500 text-lg'>Service</h4>
                <h1 className="text-5xl font-bold">My Services</h1>
                <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi. </p>

            </div>
            <div className='grid lg:grid-cols-3 grid-cols-1 md:grid-cols-2 gap-6'>
                {
                    services.map(service => <Service key={service._id} service={service}></Service>)
                }
            </div>
            <div className='text-center my-10'>
                <Link to='/serviceall'>
                    <button className="btn btn-outline btn-accent">More Services</button></Link>
            </div>

        </div>
    );
};

export default Services;