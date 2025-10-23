import React from "react";
import { FaUserMd, FaSnowflake, FaClock } from "react-icons/fa";

const WhyChooseUs = () => {
  const features = [
    {
      icon: <FaUserMd className="text-white text-3xl" />,
      title: "Certified Vets",
      description: "Our expert veterinarians ensure your pets get top-quality care during winter.",
    },
    {
      icon: <FaSnowflake className="text-white text-3xl" />,
      title: "Safe & Warm Environment",
      description: "Warm and cozy spaces designed to keep your pets comfortable in the cold season.",
    },
    {
      icon: <FaClock className="text-white text-3xl" />,
      title: "24/7 Care",
      description: "Round-the-clock attention to make sure your pets are safe, happy, and healthy.",
    },
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-blue-800 mb-6">Why Choose Us?</h2>
        <p className="text-gray-600 mb-10">
          Discover what makes WarmPaws the best choice for winter pet care.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center text-center">
              <div className="bg-blue-500 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
              <img
                src="https://i.ibb.co.com/Q3xxHM5N/Anicare-Hochwertige-Erg-nzungsmittel-f-r-Haustiere.jpg"
                alt={feature.title}
                className="mt-4 rounded-lg w-full h-32 object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
