import React from "react";
import { useLoaderData } from "react-router-dom";
import { FaStar } from "react-icons/fa";

const HeroCards = ({ limit, showSeeAllButton }) => {
  const services = useLoaderData() || [];
  const displayedServices = limit ? services.slice(0, limit) : services;

  return (
    <div className="bg-gradient-to-b from-blue-50 to-white py-16 px-6" id="services">
      

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 justify-center">
        {displayedServices.map((service) => (
          <div
            key={service.serviceId}
            className="bg-white rounded-2xl shadow-md hover:shadow-2xl transform hover:-translate-y-2 transition duration-300 border border-gray-100"
          >
            <img
              src={service.image}
              alt={service.serviceName}
              className="h-48 w-full object-cover rounded-t-2xl"
            />
            <div className="p-5">
              <div className="flex items-center justify-between mb-2">
                <span className="bg-blue-100 text-blue-700 px-3 py-1 text-xs font-semibold rounded-full">
                  {service.category}
                </span>
                <div className="flex items-center text-yellow-500">
                  <FaStar className="mr-1" />
                  <span className="text-gray-700 font-semibold">{service.rating}</span>
                </div>
              </div>

              <h3 className="text-lg font-bold text-gray-800 mb-1">
                {service.serviceName}
              </h3>

              <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                {service.description}
              </p>

              <div className="flex items-center justify-between mt-4">
                <span className="text-blue-700 font-semibold text-lg">
                  ${service.price}
                </span>

                <button className="bg-blue-600 text-white px-4 py-2 rounded-xl text-sm hover:bg-blue-700 transition">
                  View Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      {showSeeAllButton && (
        <div className="text-center mt-8">
          <a
            href="/services"
            className="bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition"
          >
            See All Services
          </a>
        </div>
      )}
    </div>
  );
};

export default HeroCards;
