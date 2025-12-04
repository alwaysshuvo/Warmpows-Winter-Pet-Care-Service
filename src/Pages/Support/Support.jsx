import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import LoadingSpinner from "../../Components/LoadingSpinner/LoadingSpinner";

const faqData = [
  {
    q: "How can I book a winter pet service?",
    a: "Go to the Services page, browse all available winter care services, and click 'View Details' to book.",
  },
  {
    q: "Do you provide emergency winter care?",
    a: "Yes! Emergency winter support is available 24/7 in selected areas.",
  },
  {
    q: "Is my personal data safe?",
    a: "Absolutely. We use secure encryption and never share your personal information with third parties.",
  },
  {
    q: "Can I cancel a service after booking?",
    a: "Yes, you can cancel your booking up to 24 hours before the appointment without extra charges.",
  },
  {
    q: "Do you offer discounts for multiple pet services?",
    a: "Yes. During winter season we offer bundled discounts for multi-pet bookings.",
  },
  {
    q: "How do I contact customer support?",
    a: "You can message us through the Contact page or email support@warmpaws.com.",
  },
];

const Support = () => {
  const [loading, setLoading] = useState(true);
  const [openIndex, setOpenIndex] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 500);
    return () => clearTimeout(timer);
  }, []);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  if (loading) return <LoadingSpinner />;

  return (
    <div className="min-h-screen py-16 px-5 bg-white text-gray-900">
      <div className="max-w-5xl mx-auto">

        {/* PAGE TITLE */}
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-6 text-gray-900"
        >
          Support <span className="text-blue-600">Center</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="text-center max-w-3xl mx-auto text-gray-600 mb-12"
        >
          Find helpful information below or contact us for assistance.
          We’re always ready to help keep your pets safe and warm this winter.
        </motion.p>

        {/* FAQ SECTION */}
        <div className="space-y-4">
          {faqData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white border border-gray-200 rounded-lg shadow p-5"
            >
              {/* QUESTION */}
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center text-left"
              >
                <h3 className="text-lg font-semibold text-gray-900">{item.q}</h3>
                <span className="text-blue-600 text-xl font-bold">
                  {openIndex === index ? "−" : "+"}
                </span>
              </button>

              {/* ANSWER ANIMATION */}
              <AnimatePresence>
                {openIndex === index && (
                  <motion.p
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-gray-600 mt-3 overflow-hidden"
                  >
                    {item.a}
                  </motion.p>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Support;
