import React, { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';

const Modal = ({ modalData }) => {
    const { rating, message, id } = modalData;
    const [reviewRating, setReviewRaitng] = useState(rating)
    const [reviewMessage, setReviewMessage] = useState(message)


    const handleReviewUpdate = (event) => {
        event.preventDefault();
        // const form = event.target;
        // const rating = form.rating.value;
        // const message = form.message.value;
        // console.log(reviewRating, reviewMessage)

        const updatedValue = {
            rating: reviewRating,
            message: reviewMessage
        }


        fetch(`http://localhost:5000/reviews/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(updatedValue)
        })
            .then(res => res.json())
            .then(data => {
                toast.success('Your reviews updated succesfully')
                console.log(data)
            })

    }
    useEffect(() => {
        setReviewRaitng(rating)
        setReviewMessage(message)
    }, [rating, message])

    return (
        <div>
            {/* Put this part before </body> tag */}
            <input type="checkbox" id="my-modal-6" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <form onSubmit={handleReviewUpdate} className='my-8 p-6'>
                        <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                            <input onChange={(e) => setReviewRaitng(e.target.value)} name='rating' type="number" value={reviewRating} className="input input-ghost w-full input-bordered" />
                            <input onChange={(e) => setReviewMessage(e.target.value)} name='message' type="text" value={reviewMessage} className="input input-ghost w-full input-bordered" />
                        </div>
                        <div className="modal-action">
                            <label htmlFor="my-modal-6" className="btn btn-accent">Cancel</label>
                            <button htmlFor="my-modal-6" className="btn btn-accent" type='submit'>UpDate</button>
                        </div>
                    </form>
                </div>

            </div>
        </div>
    );
};

export default Modal;