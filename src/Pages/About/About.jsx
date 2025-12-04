import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import LoadingSpinner from "../../Components/LoadingSpinner/LoadingSpinner";
import ExpertVets from "../ExpertVets/ExpertVets";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0 },
};

const About = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <LoadingSpinner />;

  return (
    <div className="min-h-screen py-16 px-5 bg-gradient-to-br from-blue-50 to-white text-gray-900">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="show"
          transition={{ duration: 0.6 }}
          className="text-4xl font-extrabold text-center mb-6"
        >
          About <span className="text-blue-600">WarmPaws</span>
        </motion.h1>

        {/* Description */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="show"
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto text-gray-600 mb-12 leading-relaxed"
        >
          WarmPaws is a trusted winter pet care platform dedicated to keeping your furry friends
          warm, healthy, and safe during the cold season. From premium winter clothing to expert
          grooming and care services — we ensure your pets stay cozy and protected.
        </motion.p>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-10 mt-10">
          
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-6 bg-white shadow-lg rounded-xl border border-gray-200"
          >
            <h2 className="text-2xl font-semibold mb-3">Our Mission</h2>
            <p className="text-gray-600 leading-relaxed">
              To provide trusted winter care services, expert guidance, and top-quality grooming
              ensuring your pets stay warm, safe, and comfortable throughout the cold months.
            </p>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="p-6 bg-white shadow-lg rounded-xl border border-gray-200"
          >
            <h2 className="text-2xl font-semibold mb-3">Our Vision</h2>
            <p className="text-gray-600 leading-relaxed">
              To become the most reliable and premium winter pet care platform offering quality
              services, comfort, safety, and expert consultation for every beloved pet.
            </p>
          </motion.div>

        </div>

        {/* Expert Team Section */}
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-3xl font-bold text-center mt-20 mb-10"
        >
          Meet Our Expert Vets
        </motion.h2>

        {/* Reuse Existing Component */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
        >
          <ExpertVets />
        </motion.div>

      </div>
    </div>
  );
};

export default About;
