import React from 'react';
import { useLoaderData } from 'react-router';
import AppCard from './AppCard';

const TrendingApp = () => {
    const apps = useLoaderData();
    const finalApps = apps.slice(0, 8)

    return (
        <div className='bg-base-300 py-10 pb-10'>
            <div className='max-w-7xl mx-auto'>
                <div className='text-center'>
                    <h1 className='text-4xl mb-5 text-[#001931] font-bold'>Trending Apps</h1>
                    <p className='text-[#627382] '>Explore All Trending Apps on the Market developed by us</p>
                </div>
                <div className='grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-6 px-6 lg:px-0'>
                    {finalApps.map(app => <AppCard key={app.id} app={app}></AppCard>)}
                </div>
                <div className='text-center'>
                    <button className='btn mt-8 text-[#FFFFFF] bg-linear-to-br from-[#632EE3] to-[#9F62F2]'>Show All</button>
                </div>
            </div>
        </div>
    );
};

export default TrendingApp;