import React from "react";
import vets from "../../data/Vets/vets";

const ExpertVets = () => {
  return (
    <div className="bg-gray-50 py-16 px-6">
      <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
        🩺 Meet Our Expert Vets
      </h2>

      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {vets.map((vet) => (
          <div
            key={vet.id}
            className="bg-white rounded-2xl shadow-md p-5 hover:shadow-xl transition duration-300 text-center"
          >
            <img
              src={vet.image}
              alt={vet.name}
              className="w-32 h-32 mx-auto rounded-full object-cover mb-4"
            />
            <h3 className="text-xl font-semibold mb-1">{vet.name}</h3>
            <p className="text-blue-600 font-medium text-sm mb-1">{vet.specialization}</p>
            <p className="text-gray-600 text-sm">{vet.experience}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExpertVets;
