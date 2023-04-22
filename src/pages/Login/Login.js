import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import img from '../../assests/images/login/login.svg'
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { AuthContex } from '../../contex/AuthProvider/AuthProvider';

const Login = () => {
    const { signIn, loading } = useContext(AuthContex);
    const navigate = useNavigate();

    const handleLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
            .then(result => {
                const user = result.user;
                const currentUser = {
                    email: user.email
                }


                // get jwt token
                fetch('http://localhost:5000/jwt', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(currentUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        // store token in localStorage
                        localStorage.setItem('doctor-token', data.token)
                        navigate('/')
                    })

            })
            .catch(err => console.error(err))

    }

    const handleGoogleLogIn = () => {

    }


    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row gap-20  ">
                <div className="text-center lg:text-left w-1/2">
                    <img className='w-3/4' src={img} alt="" />
                </div>
                <div className="w-1/2 card flex-shrink-0 max-w-sm shadow-2xl bg-base-100 py-20">
                    <form onSubmit={handleLogin} className="card-body">
                        <h1 className="text-5xl font-bold text-center">Login</h1>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" />
                            <label className="label">
                                <Link href="#" className="label-text-alt link link-hover">Forgot password?</Link>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <input type="submit" className="btn btn-primary" value='login' />

                        </div>
                    </form>
                    <div className='text-center mb-4'>
                        <p className='mb-2'>Or Sign Up with </p>
                        <button onClick={handleGoogleLogIn} className='mr-4 p-3 bg-slate-100 rounded-full'><FaGoogle className='text-xl text-orange-500'></FaGoogle></button>
                        <button className='mr-4 p-3 bg-slate-100 rounded-full'><FaGithub className='text-xl '></FaGithub></button>
                    </div>
                    <p className='text-center'>New to Doctor Service <Link className='text-orange-500 font-bold' to='/register'>Signup</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Login;