import React, { useEffect, useState } from "react";
import HeroCards from "../../Components/HeroCards/HeroCards";
import LoadingSpinner from "../../Components/LoadingSpinner/LoadingSpinner";

const Services = () => {
     const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <LoadingSpinner />;

  return (
    <div>
        <h2 className="text-4xl font-bold text-center text-blue-800 mb-2 mt-20">
        ❄️ All Winter Pet Care Services
      </h2>
      <HeroCards />
    </div>
  );
};

export default Services;
