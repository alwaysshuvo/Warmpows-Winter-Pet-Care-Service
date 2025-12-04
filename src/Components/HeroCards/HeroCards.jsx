import React, { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import LoadingSpinner from "../../Components/LoadingSpinner/LoadingSpinner";

const HeroCards = ({ limit, showSeeAllButton }) => {
  const services = useLoaderData() || [];
  const displayedServices = limit ? services.slice(0, limit) : services;

  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <LoadingSpinner />;

  return (
    <div className="py-14 px-4">
      <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">

        {displayedServices.map((service) => (
          <div
            key={service.serviceId}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition transform hover:-translate-y-2 border border-gray-100 flex flex-col h-full"
          >
            <img
              src={service.image}
              alt={service.serviceName}
              className="h-48 w-full object-cover rounded-t-2xl"
            />

            <div className="p-5 flex flex-col flex-grow">
              <div className="flex items-center justify-between mb-2">
                <span className="bg-blue-100 text-blue-700 px-3 py-1 text-xs font-semibold rounded-full">
                  {service.category}
                </span>

                <div className="flex items-center text-yellow-500 text-sm">
                  <FaStar className="mr-1" />
                  {service.rating}
                </div>
              </div>

              <h3 className="text-lg font-bold text-gray-800 mb-1">
                {service.serviceName}
              </h3>

              <p className="text-gray-600 text-sm mb-3 line-clamp-2 flex-grow">
                {service.description}
              </p>

              <div className="flex items-center justify-between mt-auto pt-3">
                <span className="text-blue-700 font-semibold text-lg">
                  ${service.price}
                </span>

                <Link
                  to={`/services/${service.serviceId}`}
                  className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-4 py-2 rounded-xl text-sm font-semibold shadow-md hover:scale-105 transition"
                >
                  View Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {showSeeAllButton && (
        <div className="text-center mt-10">
          <Link
            to="/services"
            className="bg-gradient-to-r from-purple-700 to-purple-900 text-white px-6 py-3 rounded-xl font-semibold shadow-lg hover:scale-105 transition"
          >
            See All Services
          </Link>
        </div>
      )}
    </div>
  );
};

export default HeroCards;
