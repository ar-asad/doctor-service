import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assests/images/logo/orthologo3.png';
import { AuthContex } from '../../contex/AuthProvider/AuthProvider';


const Header = () => {
    const { user, logOut } = useContext(AuthContex)

    const handleLogOut = () => {
        logOut();
    }

    const menuItem = <>
        <li><Link to='/'>Home</Link></li>
        {user?.uid ? <div className='flex items-center'>
            <li><Link to='/reviews'>My-Reviews</Link></li>
            <li><Link to='/addservices'>Add-Service</Link></li>
            <li className='font-semibold '> {user?.displayName}</li>
            <button className="btn btn-active btn-link text-base-100" onClick={handleLogOut} >Log out</button>
        </div>
            :
            <>
                <li className='font-semibold '><Link className='' to="/login">Login</Link></li>
                <li className='font-semibold '><Link to="/signup">Register</Link></li>
            </>

        }
    </>

    return (
        <div className="navbar bg-blue-700 text-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItem}
                    </ul>
                </div>
                <div className="w-20 ">
                    <img src={logo} alt='' />
                </div>
                <a className="btn btn-ghost normal-case text-xl">Dr. Zaffor Chowdhory</a>
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {menuItem}
                </ul>
            </div>

        </div>
    );
};

export default Header;