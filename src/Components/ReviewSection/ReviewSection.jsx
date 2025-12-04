import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";

const reviews = [
  {
    id: 1,
    name: "Sarah Williams",
    pet: "Golden Retriever",
    image: "https://i.pravatar.cc/150?img=12",
    review:
      "WarmPaws has been a lifesaver this winter! The grooming and winter coat fitting kept my dog warm and happy.",
    rating: 5,
  },
  {
    id: 2,
    name: "David Miller",
    pet: "Siberian Husky",
    image: "https://i.pravatar.cc/150?img=33",
    review:
      "Amazing service! Their winter health checkup spotted issues early. Highly recommended.",
    rating: 4,
  },
  {
    id: 3,
    name: "Emily Carter",
    pet: "British Shorthair Cat",
    image: "https://i.pravatar.cc/150?img=45",
    review:
      "My cat loved the cozy winter boots! The staff were friendly and professional.",
    rating: 5,
  },
];

const ReviewSection = () => {
  return (
    <div className="py-10 ">
      <h2 className="text-4xl font-extrabold text-center mb-12 text-blue-900">
        ❤️ What Pet Owners Say
      </h2>

      <div className="max-w-6xl mx-auto grid gap-10 md:grid-cols-3 px-6">
        {reviews.map((item) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl shadow-lg p-6 border border-gray-200 hover:shadow-xl transition"
          >
            <div className="flex items-center gap-4 mb-4">
              <img
                src={item.image}
                alt={item.name}
                className="w-16 h-16 rounded-full object-cover border"
              />
              <div>
                <h3 className="text-lg font-semibold">{item.name}</h3>
                <p className="text-gray-500 text-sm">Owner of {item.pet}</p>
              </div>
            </div>

            <p className="text-gray-700 mb-4">{item.review}</p>

            <div className="flex text-yellow-400">
              {Array(item.rating)
                .fill()
                .map((_, i) => (
                  <FaStar key={i} />
                ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ReviewSection;
