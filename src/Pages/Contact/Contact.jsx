import React, { useState, useEffect } from "react";
import LoadingSpinner from "../../Components/LoadingSpinner/LoadingSpinner";

const Contact = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <LoadingSpinner />;

  return (
    <div className="min-h-screen py-16 px-5 bg-white text-gray-900">
      <div className="max-w-6xl mx-auto">

        <h1 className="text-4xl font-bold text-center mb-6 text-gray-900">
          Contact <span className="text-blue-600">Us</span>
        </h1>

        <p className="text-center max-w-2xl mx-auto text-gray-600 mb-12">
          Have questions? Need help? We’re here for you.  
          Send us a message or reach us through the following contact details.
        </p>

        <div className="grid md:grid-cols-2 gap-10">

          {/* Contact Info */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900">Get in Touch</h2>

            <p className="text-gray-600">
              <strong>Email:</strong> support@warmpaws.com
            </p>
            <p className="text-gray-600">
              <strong>Phone:</strong> +880 123 456 789
            </p>
            <p className="text-gray-600">
              <strong>Address:</strong> Dhaka, Bangladesh
            </p>
          </div>

          {/* Form */}
          <form className="bg-white p-6 rounded-lg shadow space-y-4 border border-gray-200">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 bg-gray-50 border border-gray-300 rounded text-gray-900"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 bg-gray-50 border border-gray-300 rounded text-gray-900"
            />
            <textarea
              placeholder="Your Message"
              className="w-full p-3 bg-gray-50 border border-gray-300 rounded text-gray-900 h-32"
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
