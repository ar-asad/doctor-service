import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ServiceAllCard from './ServiceAllCard';

const ServiceAll = () => {
    const services = useLoaderData();
    return (
        <div className='grid lg:grid-cols-3 grid-cols-1 md:grid-cols-2 gap-6'>
            {
                services.map(service => <ServiceAllCard key={service._id} service={service}></ServiceAllCard>)
            }
        </div>
    );
};

export default ServiceAll;