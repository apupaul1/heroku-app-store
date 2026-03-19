import React from 'react';
import { Link } from 'react-router';
import errorpage from '../../assets/error-404.png'
import Navbar from '../../components/shared/Navbar/Navbar';
import Footer from '../../components/shared/Footer/Footer';

const ErrorPage = () => {
    return (
        <>
            <div>
                <Navbar></Navbar>
            </div>
            <div className='p-10 w-11/12 mx-auto rounded-2xl text-center space-y-1.5'>
                <div className='flex justify-center'>
                    <img 
                    className='w-60 md:w-108'
                    src={errorpage} 
                    alt="" />
                </div>
                <h2 className='text-2xl font-bold text-[#0F0F0F]'>OPPS!! Page NOT FOUND!!</h2>
                <p className='text-[#0F0F0F60] font-semibold'>The Page you are requesting is not found on our system.  please try another apps</p>
                <Link to='/'>
                    <button className='btn mt-2 rounded-md px-8 font-bold text-[#FFFFFF] bg-linear-to-br from-[#632EE3] to-[#9F62F2] hover:bg-slate-800'>Go Back!</button>
                </Link>
            </div>
            <div className='mt-37 md:mt-0'>
                <Footer></Footer>
            </div>
        </>
    );
};

export default ErrorPage;