import React from 'react';
import logo from '/logo.png'

const Loader = () => {
  return (
    <div className="flex flex-col items-center justify-center h-[80vh] text-[#001931]">
      <div className="flex items-center gap-8 text-4xl text-gray-500 font-bold tracking-widest">
        <span>L</span>
        <span className="mx-1 animate-spin text-blue-500">
          <img className='w-12' src={logo} alt="" />
        </span>
        <span>A</span>
        <span>D</span>
        <span>I</span>
        <span>N</span>
        <span>G</span>
      </div>
    </div>
  );
};

export default Loader;
