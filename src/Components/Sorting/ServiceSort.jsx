import React from "react";

const ServiceSort = ({ sortOrder, setSortOrder }) => {
  return (
    <div className="flex justify-center mb-6">
      <select
        value={sortOrder}
        onChange={(e) => setSortOrder(e.target.value)}
        className="px-4 py-2 border rounded-lg shadow-sm bg-white text-gray-700"
      >
        <option value="">Sort By</option>
        <option value="price-asc">Price: Low → High</option>
        <option value="price-desc">Price: High → Low</option>
        <option value="name-asc">Name: A → Z</option>
        <option value="name-desc">Name: Z → A</option>
      </select>
    </div>
  );
};

export default ServiceSort;
