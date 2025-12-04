import React from "react";

const Contact = () => {
  return (
    <div className="min-h-screen py-16 px-5 dark:bg-gray-900 dark:text-gray-200">
      <div className="max-w-6xl mx-auto">

        <h1 className="text-4xl font-bold text-center mb-6 dark:text-white">
          Contact <span className="text-blue-600">Us</span>
        </h1>

        <p className="text-center max-w-2xl mx-auto text-gray-600 dark:text-gray-300 mb-12">
          Have questions? Need help? We’re here for you.  
          Send us a message or reach us through the following contact details.
        </p>

        <div className="grid md:grid-cols-2 gap-10">

          {/* Contact Info */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold dark:text-white">Get in Touch</h2>

            <p className="text-gray-600 dark:text-gray-300">
              <strong>Email:</strong> support@warmpaws.com
            </p>
            <p className="text-gray-600 dark:text-gray-300">
              <strong>Phone:</strong> +880 123 456 789
            </p>
            <p className="text-gray-600 dark:text-gray-300">
              <strong>Address:</strong> Dhaka, Bangladesh
            </p>
          </div>

          {/* Form */}
          <form className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 bg-gray-100 dark:bg-gray-900 rounded border dark:border-gray-700"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 bg-gray-100 dark:bg-gray-900 rounded border dark:border-gray-700"
            />
            <textarea
              placeholder="Your Message"
              className="w-full p-3 bg-gray-100 dark:bg-gray-900 rounded border dark:border-gray-700 h-32"
            />
            <button
              className="px-5 py-3 w-full text-white rounded bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500"
            >
              Send Message
            </button>
          </form>

        </div>
      </div>
    </div>
  );
};

export default Contact;
