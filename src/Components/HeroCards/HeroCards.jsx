import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";
import servicesData from "../../data/../../public/services.json";

const HeroCards = ({ limit = null, services = null, showSeeAllButton = false }) => {
  const [loading, setLoading] = useState(true);

  const allServices = services || servicesData;

  // correct limited list
  const displayed = limit ? allServices.slice(0, limit) : allServices;

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <LoadingSpinner />;

  return (
    <div className="py-10 px-4 bg-gradient-to-b from-blue-50/60 to-white">
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 max-w-7xl mx-auto">
        
        {displayed.map((service) => (
          <div
            key={service.serviceId}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl border border-gray-200 overflow-hidden transition-all duration-300 hover:-translate-y-2"
          >
            <img
              src={service.image}
              alt={service.serviceName}
              className="h-48 w-full object-cover"
            />

            <div className="p-5">
              <div className="flex items-center justify-between mb-3">
                <span className="px-3 py-1 text-xs font-semibold bg-blue-100 text-blue-700 rounded-full">
                  {service.category}
                </span>

                <div className="flex items-center text-yellow-500">
                  <FaStar className="mr-1" />
                  <span className="font-semibold text-gray-700">{service.rating}</span>
                </div>
              </div>

              <h3 className="text-lg font-bold text-gray-900 mb-2">
                {service.serviceName}
              </h3>

              <p className="text-gray-600 text-sm line-clamp-2 mb-4">
                {service.description}
              </p>

              <div className="flex items-center justify-between">
                <span className="text-blue-700 font-bold text-lg">
                  ${service.price}
                </span>

                <Link
                  to={`/services/${service.serviceId}`}
                  className="px-4 py-2 rounded-lg bg-blue-600 text-white text-sm font-semibold shadow hover:bg-blue-700 transition"
                >
                  View Details
                </Link>
              </div>
            </div>
          </div>
        ))}

      </div>
    </div>
  );
};

export default HeroCards;
