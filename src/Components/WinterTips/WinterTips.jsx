import React from "react";
import winterTips from "../../data/WinterTips/winterTips";

const WinterTips = () => {
  return (
    <div className="bg-gray-50 py-16 px-2">
      <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
        🐾 Winter Care Tips for Pets
      </h2>

      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {winterTips.map((tip) => (
          <div
            key={tip.id}
            className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition duration-300 border border-gray-200"
          >
            <div className="text-4xl mb-4">{tip.icon}</div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">{tip.title}</h3>
            <p className="text-gray-600 text-sm">{tip.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WinterTips;
