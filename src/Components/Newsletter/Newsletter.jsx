import React from "react";
import { motion } from "framer-motion";

const Newsletter = () => {
  return (
    <div className=" py-5 px-6 mb-10">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto text-center bg-white shadow-xl rounded-3xl p-10 border border-blue-100"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-blue-700 mb-4">
          Stay Updated With Winter Pet Tips ❄️🐾
        </h2>

        <p className="text-gray-600 max-w-xl mx-auto mb-8">
          Get expert winter care advice, grooming reminders, exclusive discounts 
          and safety alerts directly in your inbox. Keep your furry friends warm, 
          healthy, and happy this season!
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-3 justify-center">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-5 py-3 rounded-xl w-full sm:w-80 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-700 text-white font-semibold rounded-xl shadow hover:shadow-lg hover:opacity-90 transition-all duration-300">
            Subscribe
          </button>
        </div>

        <p className="text-xs text-gray-400 mt-4">
          We care about your privacy. No spam — only helpful pet tips ❤️
        </p>
      </motion.div>
    </div>
  );
};

export default Newsletter;
