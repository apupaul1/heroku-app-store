import React from 'react';
import { NavLink } from 'react-router';
import logo from '/logo.png';
import { FaGithub } from "react-icons/fa";
import { Link } from 'react-router';

const Navbar = () => {
    return (
        <>
            <div className='bg-base-100 shadow-lg'>
                <div className="navbar w-11/12 mx-auto mb-3">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className=" mr-5 lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                            </div>
                            <ul
                                tabIndex={0}
                                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                                <li>
                                    <NavLink to='/'>Home</NavLink>
                                </li>
                                <li>
                                    <NavLink to='/bookings'>Apps</NavLink>
                                </li>
                                <li>
                                    <NavLink to='blogs'>Installation</NavLink>
                                </li>
                            </ul>
                        </div>
                        <Link to={'/'}>
                            <div className='flex gap-1 items-center'>
                                <img src={logo} alt="" className='w-6 md:w-10' />
                                <h1 className="text-md md:text-xl font-bold bg-clip-text text-transparent bg-linear-to-br from-[#632EE3] to-[#9F62F2]">HERO.IO</h1>
                            </div>
                        </Link>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className='flex gap-12'>
                            <li>
                                <NavLink className={({ isActive }) => (isActive ? 'bg-clip-text text-transparent bg-linear-to-br from-[#632EE3] to-[#9F62F2] underline-offset-2' : '')} to='/'>Home</NavLink>
                            </li>
                            <li>
                                <NavLink className={({ isActive }) => (isActive ? 'bg-clip-text text-transparent bg-linear-to-br from-[#632EE3] to-[#9F62F2] underline-offset-2' : '')} to='apps'>Apps</NavLink>
                            </li>
                            <li>
                                <NavLink className={({ isActive }) => (isActive ? 'bg-clip-text text-transparent bg-linear-to-br from-[#632EE3] to-[#9F62F2] underline-offset-2' : '')} to='installations'>Installation</NavLink>
                            </li>
                        </ul>
                    </div>
                    <div className="navbar-end">
                        <Link to={'https://github.com/apurbadhar509'}>
                            <button className="btn btn-sm md:btn-md rounded-lg px-8 font-semibold text-[#FFFFFF] bg-linear-to-br from-[#632EE3] to-[#9F62F2] hover:bg-red-500"><FaGithub size={20} />Contribute</button></Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navbar;