import React from "react";

const WhyChooseUs = () => {
  const features = [
    {
      img: "https://i.ibb.co.com/0ygs8krF/Illustration-of-a-logo-of-a-veterinary-clinic.jpg",
      title: "Certified Vets",
      description: "Our expert veterinarians ensure your pets get top-quality care during winter.",
    },
    {
      img: "https://i.ibb.co.com/WNCz3mcs/download-5.jpg",
      title: "Safe & Warm Environment",
      description: "Warm and cozy spaces designed to keep your pets comfortable in the cold season.",
    },
    {
      img: "https://i.ibb.co.com/5W15JDM4/24-Hour-Service-Label-Design-Vector-24-Hour-Service-Logo-24-Hours-Service-Tag-Emergency-Service-Icon.jpg",
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
            <div key={index} className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center text-center border border-gray-200">
              <img
                src={feature.img}
                alt={feature.title}
                className="mb-4 rounded-lg w-24 h-24 object-cover"
              />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
