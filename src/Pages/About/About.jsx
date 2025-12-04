import React from "react";

const About = () => {
  return (
    <div className="min-h-screen py-16 px-5 dark:bg-gray-900 dark:text-gray-200">
      <div className="max-w-6xl mx-auto">

        <h1 className="text-4xl font-bold text-center mb-6 dark:text-white">
          About <span className="text-blue-600">WarmPaws</span>
        </h1>

        <p className="text-center max-w-3xl mx-auto text-gray-600 dark:text-gray-300 mb-12">
          WarmPaws is a winter pet care platform designed to keep your furry friends warm,
          healthy, and happy. From professional grooming to premium winter pet clothing,
          we provide everything your pet needs during the cold season.
        </p>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-10 mt-10">
          <div className="p-6 bg-white dark:bg-gray-800 shadow rounded-lg">
            <h2 className="text-2xl font-semibold mb-3 dark:text-white">Our Mission</h2>
            <p className="text-gray-600 dark:text-gray-300">
              Our mission is to provide trusted winter care services and expert guidance to ensure
              pets stay warm and protected throughout the cold months.
            </p>
          </div>

          <div className="p-6 bg-white dark:bg-gray-800 shadow rounded-lg">
            <h2 className="text-2xl font-semibold mb-3 dark:text-white">Our Vision</h2>
            <p className="text-gray-600 dark:text-gray-300">
              To become the most reliable winter pet care platform by offering premium-quality
              services, high standards of safety, and expert consultation.
            </p>
          </div>
        </div>

        {/* Team Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-center mb-8 dark:text-white">
            Meet Our Team
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="p-6 bg-white dark:bg-gray-800 shadow rounded-lg text-center"
              >
                <img
                  src={`https://i.pravatar.cc/150?img=${item + 10}`}
                  alt="team"
                  className="w-24 h-24 rounded-full object-cover mx-auto mb-4"
                />
                <h3 className="text-xl font-semibold dark:text-white">Expert Vet {item}</h3>
                <p className="text-gray-600 dark:text-gray-300">Winter Pet Specialist</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default About;
