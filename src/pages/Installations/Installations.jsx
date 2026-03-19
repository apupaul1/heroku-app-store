import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { MdOutlineFileDownload } from "react-icons/md";
import { MdOutlineStar } from "react-icons/md";
import { toast } from 'react-toastify';

const Installations = () => {
    const data = useLoaderData();
    const [installedApps, setInstalledApps] = useState([]);
    const [sortOrder, setSortOrder] = useState('');

    const applySort = (apps, order) => {
        if (!order || order === '') return apps;
        const sortedApps = [...apps].sort((a, b) => {
            return order === 'asc' ? a.size - b.size : b.size - a.size;
        });
        return sortedApps;
    };

    function formatNumber(num) {
        if (num >= 1_000_000_000) return (num / 1_000_000_000).toFixed(1) + 'B';
        if (num >= 1_000_000) return (num / 1_000_000).toFixed(1) + 'M';
        if (num >= 1_000) return (num / 1_000).toFixed(1) + 'K';
        return num.toString();
    }

    useEffect(() => {
        const installedIds = JSON.parse(localStorage.getItem('installedApps')) || [];
        const apps = data.filter(app => installedIds.includes(app.id));
        setInstalledApps(apps);
    }, [data]);

    const handleRemove = (id) => {
        const updatedInstalled = installedApps.filter(app => app.id !== id);
        setInstalledApps(updatedInstalled);
        toast.success(`Uninstall succesfully`)

        const installedIds = JSON.parse(localStorage.getItem('installedApps')) || [];
        const updatedIds = installedIds.filter(appId => appId !== id);
        localStorage.setItem('installedApps', JSON.stringify(updatedIds));
    };

    const handleSort = (e) => {
        const order = e.target.value;
        setSortOrder(order);
        const sortedApps = applySort(installedApps, order);
        setInstalledApps(sortedApps);
    };


    return (
        <div className=" pt-10 pb-16 min-h-144 md:min-h-143 bg-base-300">
            <div className='mx-auto w-11/12'>
                <div className='text-center mb-8'>
                    <h1 className='text-xl md:text-3xl mb-5 text-[#001931] font-bold'>Your Installed Apps</h1>
                    <p className='text-[#627382] text-sm md:text-md w-2/3 mx-auto md:w-full'>Explore All Trending Apps on the Market developed by us</p>
                </div>

                <div className="flex justify-between items-center mb-4">
                    <h1 className='text-sm md:text-lg font-bold'>{installedApps.length} Apps Found</h1>
                    <select
                        id="sort-select"
                        className="border border-[#D2D2D2] rounded p-2 w-30 md:w-42 text-center text-sm md:text-md"
                        value={sortOrder}
                        onChange={handleSort}
                    >
                        <option value="" disabled>
                            Sort by Size
                        </option>

                        <option value="asc">Low-High</option>
                        <option value="desc">High-Low</option>
                    </select>
                </div>
                {
                    installedApps.length === 0 ?
                        "" :
                        <div>
                            {installedApps.map(app => (
                                <div key={app.id} className="bg-[#FFFFFF] p-3 py-4 rounded-md shadow flex justify-between items-center mb-3">
                                    <div className="flex gap-4">
                                        <div className='p-2 border rounded-md border-gray-300'>
                                            <img src={app.image} alt={app.title} className="w-12 h-12 object-cover rounded-md" />
                                        </div>
                                        <div className='flex flex-col'>
                                            <span className='text-[#001931] font-medium text-sm md:text-md'>{app.title}</span>
                                            <div className='flex gap-3 justify-between items-center'>
                                                <div className="flex text-center text-[#00D390] text-sm md:text-md"> <MdOutlineFileDownload size={20} />{formatNumber(app.downloads)}</div>
                                                <div className="flex text-center text-[#FF8811] text-sm md:text-md">
                                                    <MdOutlineStar size={20} />{app.ratingAvg}</div>
                                                <div className="text-[#627382] p-2 text-center text-sm md:text-md">{app.size} MB</div>
                                            </div>
                                        </div>
                                    </div>


                                    <div className=" p-2 text-center">
                                        <button
                                            onClick={() => handleRemove(app.id)}
                                            className="bg-[#00D390] hover:bg-red-600 text-white rounded-md btn btn-sm md:btn-md"
                                        >
                                            Uninstall
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                }
            </div>
        </div>
    );
};

export default Installations;