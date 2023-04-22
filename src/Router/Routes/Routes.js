import React from 'react';
import Main from '../../Layout/Main';
import Home from '../../pages/Home/Home/Home';
import { createBrowserRouter } from 'react-router-dom';
import Login from '../../pages/Login/Login';
import Sinup from '../../pages/Login/Sinup';
import ServiceAll from '../../pages/Services/ServiceAll';
import ServiceDetails from '../../pages/Services/ServiceDetails';
import MyReviews from '../../pages/MyReviews/MyReviews';
import AddServices from '../../pages/AddServices/AddServices';
import RoutePrivate from '../RoutePrivate/RoutePrivate';


const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Sinup></Sinup>
            },
            {
                path: '/serviceall',
                element: <ServiceAll></ServiceAll>,
                loader: () => fetch('http://localhost:5000/serviceall')
            },
            {
                path: '/serviceall/:id',
                element: <ServiceDetails></ServiceDetails>,
                loader: ({ params }) => fetch(`http://localhost:5000/serviceall/${params.id}`)
            },
            {
                path: '/reviews',
                element: <RoutePrivate><MyReviews></MyReviews></RoutePrivate>
            },
            {
                path: '/addservices',
                element: <RoutePrivate><AddServices></AddServices></RoutePrivate>
            }

        ]
    }
]);

export default router;



