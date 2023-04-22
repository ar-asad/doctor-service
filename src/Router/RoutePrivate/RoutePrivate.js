import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContex } from '../../contex/AuthProvider/AuthProvider';

const RoutePrivate = ({ children }) => {
    const { user, loading } = useContext(AuthContex);
    const location = useLocation();

    if (loading) {
        return <h1 className='text-4xl'>Loading.......</h1>

    }
    if (!user) {
        return <Navigate to='/login' state={{ from: location }} replace></Navigate>
    }
    return children;
};

export default RoutePrivate;

