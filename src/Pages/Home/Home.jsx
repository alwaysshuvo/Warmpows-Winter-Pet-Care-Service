import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
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
    <div className="bg-gradient-to-br from-blue-50 via-white to-blue-100 min-h-screen overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <HeroSlider />
      </motion.div>

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
        <HeroCards limit={6} showSeeAllButton={true} />
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="mt-20"
      >
        <WinterTips />
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mt-20"
      >
        <ExpertVets />
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9 }}
        className="mt-20 pb-16"
      >
        <WhyChooseUs />
      </motion.section>

      <motion.footer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="text-center text-gray-500 text-sm py-6"
      >
        © {new Date().getFullYear()} WarmPaws 🐾 — Caring for your pets with love.
      </motion.footer>
    </div>
  );
};

export default Home;
