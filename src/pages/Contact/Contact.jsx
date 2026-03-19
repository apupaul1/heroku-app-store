import React from 'react';
import { Link } from 'react-router';
import appnotfound from '../../assets/App-Error.png'

const Contact = () => {
    return (
        <div className='p-10 mt-12 w-11/12 mx-auto rounded-2xl text-center space-y-1.5'>
            <div className='flex justify-center'>
                <img src={appnotfound} alt="" />
            </div>
            <h2 className='text-2xl font-bold text-[#0F0F0F]'>OPPS!! APP NOT FOUND!!</h2>
            <p className='text-[#0F0F0F60] font-semibold'>The App you are requesting is not found on our system.  please try another apps</p>
            <Link to='/apps'>
            <button className='btn mt-2 rounded-md px-8 font-bold text-[#FFFFFF] bg-linear-to-br from-[#632EE3] to-[#9F62F2] hover:bg-slate-800'>Go Back!</button>
            </Link>
        </div>
    );
};

export default Contact;