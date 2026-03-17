import React from 'react';
import hero from '../../assets/hero.png';
import appStore from '../../assets/app-store.jpeg'
import playStore from '../../assets/play-store.jpeg'
import Statistics from './Statistics';

const Hero = () => {
    return (
        <>
            <div className='mx-10 mt-6 rounded-xl p-10 pb-0'>
                <h1 className='text-center text-[#001931] text-4xl font-bold'>
                    We Build
                    <br />
                    <span className='bg-clip-text text-transparent bg-linear-to-br from-[#632EE3] to-[#9F62F2]'>
                        Productive
                    </span> Apps
                </h1>

                <p className='text-center mt-4 px-52 text-[#627382] text-md italic hidden lg:block'>
                    At HERO.IO , we craft innovative apps designed to make everyday life simpler, smarter, and more exciting. Our goal is to turn your ideas into digital experiences that truly make an impact
                </p>

                <div className=' mt-7 flex gap-4 justify-center'>
                    <button
                        className='btn bg-[#FFFFFF] border-2 border-gray-300 rounded-sm'>
                        <img
                            className='w-6'
                            src={playStore}
                            alt="" />
                        Google Play
                    </button>
                    <button
                        className='btn bg-[#FFFFFF] border-2 border-gray-300 rounded-sm'>
                        <img
                            className='w-6'
                            src={appStore}
                            alt="" />
                        App Store
                    </button>
                </div>
                <div className='flex justify-center mt-8 '>
                    <img
                        src={hero}
                        alt="" />
                </div>
            </div>
            <div className=''>
                <Statistics></Statistics>
            </div>
        </>
    );
};

export default Hero;