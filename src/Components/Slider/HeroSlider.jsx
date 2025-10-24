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
      image: "https://i.ibb.co/B29Y12nS/download-6.jpg",
      title: "Keep Your Pets Warm This Winter 🐾",
      subtitle: "Discover cozy clothing and winter grooming options.",
    },
    {
      id: 2,
      image: "https://i.ibb.co/99k7YsrW/Download-free-image-of-Happy-cat-dog-friends-together-by-Aom-W-about-cat-dog-cute-animal-and-face-15.jpg",
      title: "Because They Deserve The Best Care ❄️",
      subtitle: "Trusted experts to keep your furry friends safe & happy.",
    },
    {
      id: 3,
      image: "https://i.ibb.co.com/x86vBLLp/Want-to-give-back-this-season-We-will-be-accepted-all-donations-of-any-unopened-dry-or-canned-pet-fo.jpg",
      title: "Stay Cozy Together ❤️",
      subtitle: "Join our community for winter pet wellness tips.",
    },
  ];

  return (
    <div className="relative w-full h-[90vh] overflow-hidden">
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
            <div className="relative flex flex-col md:flex-row items-center h-full w-full">
              <div className="absolute md:relative z-20 flex flex-col justify-center px-6 md:px-16 lg:px-24 md:w-1/2 h-1/2 md:h-full text-left">
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/0 rounded-md md:rounded-none"></div>
                <motion.div className="relative z-10">
                  <motion.h1
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                    className="text-3xl sm:text-4xl md:text-6xl font-extrabold text-white mb-4 drop-shadow-lg"
                  >
                    {slide.title}
                  </motion.h1>
                  <motion.p
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    className="text-base sm:text-lg md:text-2xl text-gray-200 mb-6 max-w-md drop-shadow"
                  >
                    {slide.subtitle}
                  </motion.p>
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.8, duration: 0.6 }}
                  >
                    <Link
                      to="/services"
                      className="bg-gradient-to-r from-rose-500 to-pink-500 hover:from-pink-500 hover:to-rose-500 text-white px-6 sm:px-8 py-2 sm:py-3 rounded-full text-base sm:text-lg font-semibold shadow-lg transform transition-all duration-300 hover:scale-105"
                    >
                      Explore Services
                    </Link>
                  </motion.div>
                </motion.div>
              </div>
              <div
                className="absolute md:relative md:w-1/2 h-1/2 md:h-full w-full bg-cover bg-center"
                style={{ backgroundImage: `url(${slide.image})` }}
              >
                <div className="absolute inset-0 bg-black/20 md:hidden"></div>
              </div>
            </div>
            <div className="absolute bottom-5 right-5 opacity-20 text-7xl sm:text-8xl md:text-9xl animate-bounce text-white">
              🐾
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HeroSlider;
