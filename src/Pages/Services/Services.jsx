import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
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
    <div className="bg-gradient-to-br from-blue-50 via-white to-blue-100 min-h-screen py-16">
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-center mb-10"
      >
        <h2 className="text-4xl md:text-5xl font-extrabold text-blue-800 mb-3">
          ❄️ All Winter Pet Care Services
        </h2>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          Explore all our specialized winter care services to keep your pets healthy, cozy, and happy throughout the season.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="px-4"
      >
        <HeroCards />
      </motion.div>

      <motion.footer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 1 }}
        className="text-center text-gray-500 text-sm mt-16"
      >
        © {new Date().getFullYear()} WarmPaws 🐾 — Dedicated to your pet’s comfort.
      </motion.footer>
    </div>
  );
};

export default Services;
