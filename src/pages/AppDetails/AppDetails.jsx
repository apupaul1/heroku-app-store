import React, { useState, useEffect } from 'react';
import { useLoaderData, useParams } from 'react-router';
import { useNavigate } from 'react-router';
import download from '../../assets/icon-downloads.png';
import rating from '../../assets/icon-ratings.png';
import review from '../../assets/icon-review.png';
import { toast } from 'react-toastify';
import Rechart from '../../components/Rechart/Rechart';

const AppDetails = () => {
    const navigate = useNavigate();
    const data = useLoaderData();
    const { id } = useParams();
    const singleApp = data.find(app => app.id === parseInt(id));

    const [installed, setInstalled] = useState(false);

    console.log(installed);


    useEffect(() => {
        const installedApps = JSON.parse(localStorage.getItem('installedApps')) || [];
        if (installedApps.includes(singleApp.id)) {
            setInstalled(true);
        }
    }, [singleApp.id]);

    const handleInstall = () => {
        const installedApps = JSON.parse(localStorage.getItem('installedApps')) || [];

        if (!installedApps.includes(singleApp.id)) {
            installedApps.push(singleApp.id);
            localStorage.setItem('installedApps', JSON.stringify(installedApps));
            setInstalled(true);
            toast.success(`Successfully install ${singleApp.title}`)
        }
    };


    function formatNumber(num) {
        if (num >= 1_000_000_000) return (num / 1_000_000_000).toFixed(1) + 'B';
        if (num >= 1_000_000) return (num / 1_000_000).toFixed(1) + 'M';
        if (num >= 1_000) return (num / 1_000).toFixed(1) + 'K';
        return num.toString();
    }

    const ratings = singleApp.ratings;

    return (
        <div className='mx-auto w-11/12 mt-10 mb-16'>
            <div className="card lg:card-side flex gap-4 md:gap-8">
                <figure className='w-40 md:w-65 p-12 border border-amber-200 rounded-2xl bg-base-100'>
                    <img
                        src={singleApp.image}
                        alt="App" />
                </figure>

                <div className="flex-3">
                    <h2 className='text-2xl font-bold text-[#001931] mb-1'>{singleApp.title}</h2>
                    <p className='text-[#627382] text-sm font-bold'>
                        Developed by <span className='bg-clip-text text-transparent bg-linear-to-br from-[#632EE3] to-[#9F62F2]'>{singleApp.companyName}</span>
                    </p>
                    <hr className='w-full my-7 border border-gray-300' />
                    <div className='flex gap-16 mb-5 text-[#001931]'>
                        <div className='space-y-2'>
                            <img className='w-8' src={download} alt="" />
                            <p className='font-light'>Downloads</p>
                            <h1 className='text-3xl font-bold'>{formatNumber(singleApp.downloads)}</h1>
                        </div>
                        <div className='space-y-2'>
                            <img className='w-8' src={rating} alt="" />
                            <p className='font-light'>Average Ratings</p>
                            <h1 className='text-3xl font-bold'>{singleApp.ratingAvg}</h1>
                        </div>
                        <div className='space-y-2'>
                            <img className='w-8' src={review} alt="" />
                            <p className='font-light'>Total Reviews</p>
                            <h1 className='text-3xl font-bold'>{formatNumber(singleApp.reviews)}</h1>
                        </div>
                    </div>
                    <button
                        className="btn bg-[#00D390] text-[#FFFFFF] rounded-md cursor-pointer"
                        onClick={() => !installed && handleInstall()}
                    >
                        {installed ? 'Installed' : `Install Now (${singleApp.size} MB)`}
                    </button>

                </div>
            </div>
            <hr className='w-full my-8 border border-gray-300' />
            <div>
                <Rechart ratings={ratings} />
            </div>
            <hr className='w-full mb-8 border border-gray-300' />
            <div>
                <h1 className='mb-3 text-xl font-semibold text-[#001931]'>Description</h1>
                <p className='text-[#627382] text-md'>{singleApp.description}</p>
            </div>
        </div>
    );
};

export default AppDetails;
