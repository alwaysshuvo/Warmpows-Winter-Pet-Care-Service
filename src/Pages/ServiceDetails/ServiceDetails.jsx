import React, { useState } from "react";
import { useParams, useLoaderData } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

const ServiceDetails = () => {
  const { id } = useParams();
  const services = useLoaderData();
  const service = services.find((s) => s.serviceId === parseInt(id));

  const [formData, setFormData] = useState({ name: "", email: "" });
  const [booked, setBooked] = useState(false);

  if (!service) {
    return (
      <p className="text-center text-red-500 mt-10 font-semibold">
        Service not found
      </p>
    );
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success(`Booked "${service.serviceName}" successfully!`);
    setFormData({ name: "", email: "" });
    setBooked(true);
  };

  return (
    <div className="max-w-6xl mx-auto py-20 px-6">
      <Toaster position="top-right" />

    
      <div className="flex flex-col md:flex-row items-center gap-14">

        <div className="w-full md:w-1/2 flex justify-center">
          <div className="w-full md:w-[95%] bg-white rounded-3xl shadow-xl overflow-hidden flex items-center justify-center p-8 border border-gray-100 hover:shadow-2xl transition duration-500">
            <img
              src={service.image}
              alt={service.serviceName}
              className="w-full h-[440px] object-contain"
            />
          </div>
        </div>

        <div className="w-full md:w-1/2 space-y-5">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight tracking-tight">
            {service.serviceName}
          </h1>

          <p className="text-3xl font-semibold text-indigo-600">
            ${service.price}
          </p>

          <div className="space-y-2 text-gray-700">
            <p>
              <span className="font-semibold text-gray-900">Service ID:</span>{" "}
              <span className="text-gray-600">{service.serviceId}</span>
            </p>
            <p>
              <span className="font-semibold text-gray-900">Category:</span>{" "}
              <span className="text-indigo-700">{service.category}</span>
            </p>
            <p>
              <span className="font-semibold text-gray-900">Provider:</span>{" "}
              <span className="text-amber-700">{service.providerName}</span>
            </p>
            <p>
              <span className="font-semibold text-gray-900">Email:</span>{" "}
              <span className="text-sky-700">{service.providerEmail}</span>
            </p>
            <p>
              <span className="font-semibold text-gray-900">Rating:</span>{" "}
              <span className="text-yellow-500">{service.rating} ⭐</span>
            </p>
            <p>
              <span className="font-semibold text-gray-900">
                Slots Available:
              </span>{" "}
              <span className="text-green-700">{service.slotsAvailable}</span>
            </p>
          </div>
        </div>
      </div>

      <div className="mt-20 border-t border-gray-200 pt-10">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Description</h2>
        <p className="text-gray-700 leading-relaxed text-lg tracking-wide">
          {service.description}
        </p>
      </div>

      <div className="mt-16 bg-gradient-to-r from-indigo-50 to-purple-50 p-10 rounded-3xl shadow-2xl max-w-lg mx-auto">
        <h3 className="text-2xl font-bold mb-6 text-center text-gray-800">
          Book This Service
        </h3>
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition duration-300"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition duration-300"
          />
          <button
            type="submit"
            disabled={booked}
            className={`${
              booked
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600"
            } text-white text-lg font-semibold px-6 py-3 rounded-xl shadow-lg transition-all duration-300`}
          >
            {booked ? "Booked" : "Book Now"}
          </button>
        </form>
      </div>

      
    </div>
  );
};

export default ServiceDetails;
