import React, { useState, useEffect } from "react";
import HeroSlider from "../../Components/Slider/HeroSlider";
import HeroCards from "../../Components/HeroCards/HeroCards";
import WinterTips from "../../Components/WinterTips/WinterTips";
import ExpertVets from "../ExpertVets/ExpertVets";
import LoadingSpinner from "../../Components/LoadingSpinner/LoadingSpinner";
import WhyChooseUs from "../../Components/WhyChooseUs/WhyChooseUs";

const Home = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
   
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <LoadingSpinner />;

  return (
    <div>
      <HeroSlider />
      <h2 className="text-4xl font-bold text-center text-blue-800 mb-2 mt-10">
        ❄️ Popular Winter Pet Care Services
      </h2>
      <HeroCards limit={6} showSeeAllButton={true} />
      <WinterTips />
      <ExpertVets />
      <WhyChooseUs />
    </div>
  );
};

export default Home;
