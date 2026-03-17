import React from 'react';

const Statistics = () => {
    return (
        <div className='mb-16 text-center py-16 bg-linear-to-br from-[#632EE3] to-[#9F62F2] text-[#FFFFFF]'>
            <h1 className='text-4xl font-bold'>
                Trusted by Millions, Built for You
            </h1>
            <div className="stats mt-3 space-x-20">
                <div className="stat place-items-center space-y-3">
                    <div className="stat-title text-[#FFFFFF90]">Total Downloads</div>
                    <div className="stat-value text-4xl">29.6M</div>
                    <div className="stat-desc text-[#FFFFFF90]">21% more than last month</div>
                </div>

                <div className="stat place-items-center space-y-3 ">
                    <div className="stat-title text-[#FFFFFF90]">Total Reviews</div>
                    <div className="stat-value text-4xl">906K</div>
                    <div className="stat-desc text-[#FFFFFF90]">46% more than last month</div>
                </div>

                <div className="stat place-items-center space-y-3">
                    <div className="stat-title text-[#FFFFFF90]">Active Apps</div>
                    <div className="stat-value text-4xl">132+</div>
                    <div className="stat-desc text-[#FFFFFF90]">31 more will Launch</div>
                </div>
            </div>
        </div>
    );
};

export default Statistics;