import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const NotFound = () => {
  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-br from-blue-50 via-white to-blue-100 px-6">

      {/* MAIN CONTAINER */}
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="text-center bg-white shadow-lg rounded-2xl p-10 border border-blue-100 max-w-lg"
      >

        {/* Animated Big 404 Number */}
        <motion.h1
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 120, delay: 0.2 }}
          className="text-7xl md:text-8xl font-extrabold text-blue-700 drop-shadow-lg"
        >
          404
        </motion.h1>

        {/* Cute Pet Icon / Snowflake */}
        <motion.div
          initial={{ rotate: -20, opacity: 0 }}
          animate={{ rotate: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.7 }}
          className="text-6xl mt-4"
        >
          🐾❄️
        </motion.div>

        {/* Text */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-2xl md:text-3xl font-bold text-gray-900 mt-6"
        >
          Oops! Page Not Found
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.75 }}
          className="text-gray-600 mt-3"
        >
          Looks like this page got lost in the winter snow.  
          Don't worry, your pet is still safe! 🐶❄️
        </motion.p>

        {/* Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
        >
          <Link
            to="/"
            className="mt-8 inline-block px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-full shadow hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            ⬅ Go Back Home
          </Link>
        </motion.div>

      </motion.div>
    </div>
  );
};

export default NotFound;
