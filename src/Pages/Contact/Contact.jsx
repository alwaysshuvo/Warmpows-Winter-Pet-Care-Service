import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import LoadingSpinner from "../../Components/LoadingSpinner/LoadingSpinner";

const Contact = () => {
  const [loading, setLoading] = useState(true);

  // form input state
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  // toast state
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 500);
    return () => clearTimeout(timer);
  }, []);

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();

    // Show toast
    setShowToast(true);

    // Hide toast automatically after 3 seconds
    setTimeout(() => setShowToast(false), 3000);

    // Clear form fields
    setName("");
    setEmail("");
    setMessage("");
  };

  if (loading) return <LoadingSpinner />;

  return (
    <div className="min-h-screen py-16 px-5 bg-white text-gray-900 relative">
      <div className="max-w-6xl mx-auto">

        {/* Page Title */}
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-6 text-gray-900"
        >
          Contact <span className="text-blue-600">Us</span>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="text-center max-w-2xl mx-auto text-gray-600 mb-12"
        >
          Have questions? Need help? We’re here for you.
          Send us a message or reach us through the following contact details.
        </motion.p>

        <div className="grid md:grid-cols-2 gap-10">

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="space-y-4"
          >
            <h2 className="text-2xl font-semibold text-gray-900">Get in Touch</h2>

            <p className="text-gray-600">
              <strong>Email:</strong> support@warmpaws.com
            </p>
            <p className="text-gray-600">
              <strong>Phone:</strong> +880 123 456 789
            </p>
            <p className="text-gray-600">
              <strong>Address:</strong> Dhaka, Bangladesh
            </p>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="bg-white p-6 rounded-lg shadow space-y-4 border border-gray-200"
          >
            <motion.input
              whileFocus={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 200 }}
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full p-3 bg-gray-50 border border-gray-300 rounded text-gray-900"
            />

            <motion.input
              whileFocus={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 200 }}
              type="email"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full p-3 bg-gray-50 border border-gray-300 rounded text-gray-900"
            />

            <motion.textarea
              whileFocus={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 200 }}
              placeholder="Your Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              className="w-full p-3 bg-gray-50 border border-gray-300 rounded text-gray-900 h-32"
            />

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-5 py-3 w-full text-white rounded bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 shadow-md"
            >
              Send Message
            </motion.button>
          </motion.form>
        </div>
      </div>

      {/* SUCCESS TOAST */}
      {showToast && (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="fixed bottom-6 right-6 bg-green-600 text-white px-5 py-3 rounded-lg shadow-lg font-medium"
        >
          ✅ Your message has been sent!
        </motion.div>
      )}
    </div>
  );
};

export default Contact;
