import React from 'react';
import { Link } from 'react-router';
import { MdOutlineFileDownload } from "react-icons/md";
import { MdOutlineStar } from "react-icons/md";

const AppCard = ({ app }) => {

    const {id, image, title, ratingAvg, downloads } = app

    function formatNumber(num) {
        if (num >= 1_000_000_000) return (num / 1_000_000_000).toFixed(1) + 'B';
        if (num >= 1_000_000) return (num / 1_000_000).toFixed(1) + 'M';
        if (num >= 1_000) return (num / 1_000).toFixed(1) + 'K';
        return num.toString();
    }


    return (
        <Link to={`/apps/${id}`} className=''>
            <div className="card bg-base-100 shadow-sm p-4 h-full">
                <figure className="px-10 border border-amber-200">
                    <img
                        src={image}
                        alt="Shoes"
                        className="rounded-4xl" />
                </figure>
                <div className="my-3 items-center text-sm font-bold">
                    <h2 className="">{title}</h2>
                </div>
                <div className="flex justify-between gap-3">
                    <button className="btn btn-sm bg-[#F1F5E8] text-[#00D390]">
                        <MdOutlineFileDownload size={15} />
                        {formatNumber(downloads)}
                    </button>
                    <button className='btn btn-sm bg-[#FFF0E1] text-[#FF8811]'>
                        <MdOutlineStar size={15} />
                        {ratingAvg}
                    </button>
                </div>
            </div>
        </Link>
    );
};

export default AppCard;