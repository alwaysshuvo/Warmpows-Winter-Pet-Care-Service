import React from "react";
import HeroSlider from "../../Components/Slider/HeroSlider";
import HeroCards from "../../Components/HeroCards/HeroCards";

const Home = () => {
  return (
    <div>
      <HeroSlider />
      <h2 className="text-4xl font-bold text-center text-blue-800 mb-2 mt-10">
        ❄️ Popular Winter Pet Care Services
      </h2>
      <HeroCards limit={6} showSeeAllButton={true} />
    </div>
  );
};

export default Home;
