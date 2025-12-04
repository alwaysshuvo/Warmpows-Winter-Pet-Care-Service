import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import HeroSlider from "../../Components/Slider/HeroSlider";
import HeroCards from "../../Components/HeroCards/HeroCards";
import WinterTips from "../../Components/WinterTips/WinterTips";
import LoadingSpinner from "../../Components/LoadingSpinner/LoadingSpinner";
import WhyChooseUs from "../../Components/WhyChooseUs/WhyChooseUs";
import Newsletter from "../../Components/Newsletter/Newsletter"; 
import ReviewSection from "../../Components/ReviewSection/ReviewSection";

const Home = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <LoadingSpinner />;

  return (
    <div className=" min-h-screen overflow-hidden">
      
      {/* HERO SECTION */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="my-15"
      >
        <HeroSlider />
      </motion.div>

      {/* POPULAR SERVICES */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mt-16 px-4"
      >
        <h2 className="text-4xl md:text-5xl font-extrabold text-blue-800 mb-3">
          ❄️ Popular Winter Pet Care Services
        </h2>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-8">
          Keep your furry friends warm, happy, and healthy this season with our trusted care services.
        </p>
        <HeroCards limit={8} showSeeAllButton={true} />
      </motion.section>

      {/* WINTER TIPS */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="mt-0"
      >
        <WinterTips />
      </motion.section>


      {/* WHY CHOOSE US */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9 }}
        className="mt-10"
      >
        <WhyChooseUs />
      </motion.section>

      {/* Review Section */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="mt-10"
      >
        <ReviewSection />
      </motion.section>

      {/* NEWSLETTER SECTION */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.1 }}
        className="mt-10"
      >
        <Newsletter />
      </motion.section>

      
    </div>
  );
};

export default Home;
