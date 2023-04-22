import React from 'react';
import { toast } from 'react-hot-toast';

const AddServices = () => {

    const handleReviews = (event) => {
        event.preventDefault();
        const form = event.target;
        const title = form.title.value;
        const price = form.price.value;
        const photoURL = form.photoURL.value;
        const description = form.message.value;

        console.log(title, price, photoURL, description)

        const service = {
            title: title,
            img: photoURL,
            price: price,
            description: description

        }

        fetch('http://localhost:5000/services', {
            method: 'POST',
            headers: {
                "content-type": 'application/json'
            },
            body: JSON.stringify(service)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    toast.success('Your Service Added Successfully')
                    form.reset();
                }
            })
            .catch(e => console.error(e));
    }


    return (
        <div>
            <h1 className="text-3xl font-bold text-center m-8">Add Your Service</h1>
            <form onSubmit={handleReviews} className='my-8 p-6'>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                    <input name='title' type="text" placeholder="Service Name" className="input input-ghost w-full input-bordered" />
                    <input name='price' type="number" placeholder="Price" className="input input-ghost w-full input-bordered" />
                    <input name='photoURL' type="text" placeholder="PhotoURL" className="input input-ghost w-full input-bordered" required />
                </div>
                <textarea name='message' placeholder="Description" className="textarea h-24 textarea-bordered textarea-sm w-full mt-5" ></textarea>
                <div className='text-center mt-3'>
                    <input className='btn ' type="submit" value='Add Your Service' />
                </div>
            </form>
        </div>
    );
};

export default AddServices;