import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const HeroSlider = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const slides = [
    {
      id: 1,
      image: "https://i.ibb.co.com/SXj3zRsb/Christmas-Kitten-Outfit.jpg",
      title: "Keep Your Pets Warm This Winter",
      subtitle: "Discover cozy clothing and winter grooming options.",
    },
    {
      id: 2,
      image: "https://i.ibb.co.com/VYxRbhqB/Christmas-clothes-for-cat-dog-Winter-Sweater-Christmas-Outfit-for-Christmas-cat-sweatshirt-gift-for.jpg",
      title: "Because They Deserve The Best Care",
      subtitle: "Trusted experts to keep your furry friends safe & happy.",
    },
    {
      id: 3,
      image: "https://i.ibb.co.com/nq7Rxk4H/download-7.jpg",
      title: "Stay Cozy Together",
      subtitle: "Join our community for winter pet wellness tips.",
    },
  ];

  return (
    <div className="relative w-full h-[50vh] sm:h-[55vh] md:h-[60vh] overflow-hidden bg-white">
      <Swiper
        modules={[Autoplay, Pagination, Navigation, EffectFade]}
        effect="fade"
        spaceBetween={0}
        centeredSlides={true}
        loop={true}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation={true}
        grabCursor={true}
        speed={1200}
        className="h-full w-full"
        fadeEffect={{ crossFade: true }}
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="flex flex-col md:flex-row items-center justify-between h-full w-full px-6 md:px-12 lg:px-20">

              {/* LEFT TEXT AREA */}
              <div className="z-20 flex flex-col justify-center md:w-1/2 h-full">
                <motion.h1
                  initial={{ x: -40, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.8 }}
                  className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 drop-shadow mb-4 leading-tight"
                >
                  {slide.title}
                </motion.h1>

                <motion.p
                  initial={{ x: -40, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.8 }}
                  className="text-base sm:text-lg md:text-xl text-gray-700 mb-6 max-w-md"
                >
                  {slide.subtitle}
                </motion.p>

                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                >
                  <Link
                    to="/services"
                    className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-indigo-600 hover:to-blue-600 text-white px-6 py-3 rounded-full text-lg font-semibold shadow-lg transition-all duration-300 hover:scale-105"
                  >
                    Explore Services
                  </Link>
                </motion.div>
              </div>

              {/* RIGHT IMAGE AREA */}
              <div
                className="md:w-1/2 w-full h-full bg-center bg-cover rounded-xl shadow-lg"
                style={{ backgroundImage: `url(${slide.image})` }}
              ></div>
            </div>

            {/* Floating Paw Icon */}
            <div className="absolute bottom-5 right-5 opacity-20 text-8xl md:text-9xl animate-bounce">
              🐾
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HeroSlider;
