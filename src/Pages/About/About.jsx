import React, { useState, useEffect } from "react";
import LoadingSpinner from "../../Components/LoadingSpinner/LoadingSpinner";

const About = () => {
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
          About <span className="text-blue-600">WarmPaws</span>
        </h1>

        <p className="text-center max-w-3xl mx-auto text-gray-600 mb-12">
          WarmPaws is a winter pet care platform designed to keep your furry friends warm,
          healthy, and happy. From professional grooming to premium winter pet clothing,
          we provide everything your pet needs during the cold season.
        </p>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-10 mt-10">
          <div className="p-6 bg-white shadow rounded-lg border border-gray-200">
            <h2 className="text-2xl font-semibold mb-3 text-gray-900">Our Mission</h2>
            <p className="text-gray-600">
              Our mission is to provide trusted winter care services and expert guidance to ensure
              pets stay warm and protected throughout the cold months.
            </p>
          </div>

          <div className="p-6 bg-white shadow rounded-lg border border-gray-200">
            <h2 className="text-2xl font-semibold mb-3 text-gray-900">Our Vision</h2>
            <p className="text-gray-600">
              To become the most reliable winter pet care platform by offering premium-quality
              services, high standards of safety, and expert consultation.
            </p>
          </div>
        </div>

        {/* Team Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">
            Meet Our Team
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="p-6 bg-white shadow rounded-lg text-center border border-gray-200"
              >
                <img
                  src={`https://i.pravatar.cc/150?img=${item + 10}`}
                  alt="team"
                  className="w-24 h-24 rounded-full object-cover mx-auto mb-4"
                />
                <h3 className="text-xl font-semibold text-gray-900">Expert Vet {item}</h3>
                <p className="text-gray-600">Winter Pet Specialist</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default About;
