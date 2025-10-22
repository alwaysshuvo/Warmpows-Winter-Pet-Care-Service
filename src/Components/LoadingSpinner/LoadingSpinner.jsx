import React from "react";
import { FaPaw } from "react-icons/fa";

const LoadingSpinner = () => {
  return (
    <div className="fixed inset-0 flex justify-center items-center bg-white z-50">

     
      <h1 className="text-8xl md:text-9xl font-extrabold flex items-center gap-4 bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-500 bg-clip-text text-transparent animate-scaleUp">
        Pet P
        <FaPaw className="text-yellow-300 animate-pulse" />
        ws
      </h1>
      <style>
        {`
          @keyframes scaleUp {
            0% { transform: scale(0.2); opacity: 0; }
            100% { transform: scale(1); opacity: 1; }
          }

          .animate-scaleUp {
            animation: scaleUp 2s ease-out forwards;
          }
        `}
      </style>
    </div>
  );
};

export default LoadingSpinner;
