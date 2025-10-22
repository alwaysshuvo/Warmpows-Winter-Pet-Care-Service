import React from 'react';
import { FaPaw } from 'react-icons/fa'; 

const LoadingSpinner = () => {
    return (
         <div className="w-full h-screen flex flex-col justify-center items-center bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-500">
      
      <h1 className="text-6xl md:text-7xl font-extrabold text-white flex items-center gap-2 animate-bounce">
        Pet
        <span className="relative inline-block">
          P
          <FaPaw className="absolute -top-4 -right-2 text-yellow-300 animate-pulse" />
        </span>
        ws
      </h1>

      <div className="flex mt-10 space-x-2">
        <span className="w-4 h-4 bg-white rounded-full animate-bounce delay-100"></span>
        <span className="w-4 h-4 bg-white rounded-full animate-bounce delay-200"></span>
        <span className="w-4 h-4 bg-white rounded-full animate-bounce delay-300"></span>
      </div>

      <p className="mt-6 text-white text-lg md:text-xl animate-pulse">
        Loading...
      </p>
    </div>
    );
};

export default LoadingSpinner;
