import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import AppCard from '../../components/TrendingApp/AppCard';
import Loader from '../../components/shared/Loader/Loader';

const Apps = () => {
    const apps = useLoaderData();
    const [searchItem, setSearchItem] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const [filteredApps, setFilteredApps] = useState(apps);


    const handleOnChange = (e) => {
        setSearchItem(e.target.value);
        setIsLoading(true);
    }

    useEffect(() => {
        const result = apps.filter(app =>
            app.title.toLowerCase().includes(searchItem.toLowerCase())
        );
        setFilteredApps(result);
        setIsLoading(false);

    }, [searchItem, apps]);



    return (
        <div className='bg-base-300 py-10 pb-10 min-h-screen'>
            <div className='max-w-7xl mx-auto'>
                <div className='text-center mb-10'>
                    <h1 className='text-xl md:text-3xl mb-5 text-[#001931] font-bold'>Our All Applications</h1>
                    <p className='text-[#627382] text-sm md:text-md w-2/3 mx-auto md:w-full'>Explore All Apps on the Market developed by us. We code for Millions</p>
                </div>
                <div className='flex justify-between items-center px-6 md:px-0'>
                    <h1 className='text-sm md:text-lg'>({filteredApps.length}) Apps Found</h1>
                    <label className="input ">
                        <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <g
                                strokeLinejoin="round"
                                strokeLinecap="round"
                                strokeWidth="2.5"
                                fill="none"
                                stroke="currentColor"
                            >
                                <circle cx="11" cy="11" r="8"></circle>
                                <path d="m21 21-4.3-4.3"></path>
                            </g>
                        </svg>
                        <input onChange={handleOnChange} type="search" className="grow" placeholder="Search" name='search' />
                    </label>
                </div>
                {isLoading ?
                    <Loader></Loader> :
                    (
                        <div className='grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-6 px-6 lg:px-0'>
                            {filteredApps.length > 0 ?
                                (
                                    filteredApps.map(app => (
                                        <AppCard key={app.id} app={app} />
                                    ))
                                ) :
                                (
                                    <p className="col-span-full text-center">
                                        No apps found for "{searchItem}"
                                    </p>
                                )}
                        </div>
                    )}
            </div>
        </div>
    );
};

export default Apps;