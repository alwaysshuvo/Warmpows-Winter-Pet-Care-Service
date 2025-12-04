import React, { useEffect, useState } from "react";

const ServiceFilter = ({ services, selectedCategory, setSelectedCategory }) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    // Extract unique categories from service list
    const uniqueCats = [
      "All",
      ...Array.from(new Set(services.map((item) => item.category)))
    ];

    setCategories(uniqueCats);
  }, [services]);

  return (
    <div className="flex flex-wrap gap-3 mb-6 justify-center">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => setSelectedCategory(cat)}
          className={`px-4 py-2 rounded-full text-sm font-semibold border transition
            ${
              selectedCategory === cat
                ? "bg-blue-600 text-white border-blue-600"
                : "bg-white text-gray-700 border-gray-300 hover:bg-blue-100"
            }`}
        >
          {cat}
        </button>
      ))}
    </div>
  );
};

export default ServiceFilter;
