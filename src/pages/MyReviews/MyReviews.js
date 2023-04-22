import React, { useContext, useEffect, useState } from 'react';
import MyReviewsCard from './MyReviewsCard';
import { AuthContex } from '../../contex/AuthProvider/AuthProvider';
import Modal from '../Modal/Modal';

const MyReviews = () => {
    const { user, logOut } = useContext(AuthContex);
    const [myReviews, setMyReviews] = useState([]);
    const [refetch, setRefectch] = useState(true)
    const [modalData, setModalData] = useState(null);

    useEffect(() => {
        fetch(`http://localhost:5000/myreviews?email=${user?.email}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('doctor-token')}`
            }
        })
            .then(res => {
                console.log(res.status)
                if (res.status === 401 || res.status === 403) {
                    logOut();
                }
                return res.json()
            })
            .then(data => {
                console.log(data)
                setMyReviews(data)
            })
    }, [user?.email, refetch, logOut])


    const handleDeleteReview = (id) => {
        const pocced = window.confirm('Are you sure cancel this order')
        if (pocced) {
            fetch(`http://localhost:5000/reviews/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        setRefectch(!refetch)
                    }
                })
        }
    }

    return (
        <div className="overflow-x-auto w-full">
            <table className="table w-full">
                {/* head */}
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>reviews</th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        myReviews.map(myreview => <MyReviewsCard key={myreview._id} myreview={myreview} handleDeleteReview={handleDeleteReview} setModalData={setModalData}></MyReviewsCard>)
                    }

                </tbody>
            </table>
            {modalData && <Modal modalData={modalData}></Modal>}
        </div>
    );
};

export default MyReviews;