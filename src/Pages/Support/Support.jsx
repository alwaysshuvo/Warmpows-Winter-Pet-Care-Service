import React, { useState, useEffect } from "react";
import LoadingSpinner from "../../Components/LoadingSpinner/LoadingSpinner";

const Support = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <LoadingSpinner />;

  return (
    <div className="min-h-screen py-16 px-5 bg-white text-gray-900">
      <div className="max-w-5xl mx-auto">

        <h1 className="text-4xl font-bold text-center mb-6 text-gray-900">
          Support <span className="text-blue-600">Center</span>
        </h1>

        <p className="text-center max-w-3xl mx-auto text-gray-600 mb-12">
          Find helpful information below or contact us for assistance.  
          We are always ready to help your pet stay safe in winter.
        </p>

        {/* FAQ */}
        <div className="space-y-6">
          
          <div className="p-6 bg-white shadow rounded-lg border border-gray-200">
            <h3 className="text-xl font-semibold text-gray-900">How can I book a winter pet service?</h3>
            <p className="text-gray-600 mt-2">
              Visit the Services page and explore our available winter care options.
            </p>
          </div>

          <div className="p-6 bg-white shadow rounded-lg border border-gray-200">
            <h3 className="text-xl font-semibold text-gray-900">Do you provide emergency winter care?</h3>
            <p className="text-gray-600 mt-2">
              Yes, emergency help is available 24/7 in selected areas.
            </p>
          </div>

          <div className="p-6 bg-white shadow rounded-lg border border-gray-200">
            <h3 className="text-xl font-semibold text-gray-900">Is my personal data safe?</h3>
            <p className="text-gray-600 mt-2">
              We never share personal information and follow industry-standard security practices.
            </p>
          </div>

        </div>

      </div>
    </div>
  );
};

export default Support;
