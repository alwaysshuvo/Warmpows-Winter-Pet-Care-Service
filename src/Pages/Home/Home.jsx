import React from "react";
import HeroSlider from "../../Components/Slider/HeroSlider";
import HeroCards from "../../Components/HeroCards/HeroCards";
import WinterTips from "../../Components/WinterTips/WinterTips";
import ExpertVets from "../ExpertVets/ExpertVets";

const Home = () => {
  return (
    <div>
      <HeroSlider />
      <h2 className="text-4xl font-bold text-center text-blue-800 mb-2 mt-10">
        ❄️ Popular Winter Pet Care Services
      </h2>
      <HeroCards limit={6} showSeeAllButton={true} />
      <WinterTips />
      <ExpertVets />
    </div>
  );
};

export default Home;
