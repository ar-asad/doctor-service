import React from 'react';

const MyReviewsCard = ({ myreview, handleDeleteReview, setModalData }) => {
    const { serviceName, message, customer, _id, rating } = myreview;

    const modalData = {
        id: _id,
        rating,
        message
    }

    return (
        <tr>
            <td>
                <div className="flex items-center space-x-3">
                    <div>
                        <div className="font-bold">{serviceName}</div>
                        <div className="text-sm opacity-50">{customer}</div>
                    </div>
                </div>
            </td>
            <td>
                <p>{message}</p>
            </td>
            <th>
                {/* <label htmlFor="my-modal" className="btn btn-ghost btn-xs">Update</label> */}
                <label onClick={() => setModalData(modalData)} htmlFor="my-modal-6" className="btn btn-ghost btn-xs">open modal</label>

            </th>
            <th>
                <button onClick={() => handleDeleteReview(_id)} className="btn btn-ghost btn-xs">Delete</button>
            </th>
        </tr>
    );
};

export default MyReviewsCard;