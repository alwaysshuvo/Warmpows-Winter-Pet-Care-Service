import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

const HeroSlider = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const slides = [
    {
      id: 1,
      image:
        "https://i.ibb.co.com/23ryfY6p/Keeping-Your-Pets-Warm-During-Winter-Essential-Tips-and-Advice.jpg",
      title: "Keep Your Pets Warm This Winter 🐾",
      subtitle: "Discover cozy clothing and winter grooming options.",
    },
    {
      id: 2,
      image:
        "https://i.ibb.co.com/xScXBdWn/download.jpg",
      title: "Because They Deserve The Best Care ❄️",
      subtitle: "Trusted experts to keep your furry friends safe & happy.",
    },
    {
      id: 3,
      image:
        "https://i.ibb.co.com/TBH2xPjy/Don-t-forget-to-Enjoy-this-moment.jpg",
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
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        navigation={true}
        className="h-full w-full"
        fadeEffect={{ crossFade: true }}
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div
              className="relative h-full w-full bg-cover bg-center"
              style={{
                backgroundImage: `url(${slide.image})`,
              }}
            >
              <div className="absolute inset-0 bg-black/50 z-[1]"></div>
              <div
                data-aos="fade-up"
                key={slide.id}
                className="absolute inset-0 z-[2] flex flex-col justify-center items-center text-center px-6 translate-y-10 md:translate-y-16"
              >
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 transition-opacity duration-700 ease-in-out">
                  {slide.title}
                </h1>
                <p className="text-lg md:text-2xl text-gray-200 mb-6 max-w-2xl transition-opacity duration-700 ease-in-out">
                  {slide.subtitle}
                </p>
                <Link to= "/services" className="bg-rose-500 hover:bg-rose-600 text-white px-6 py-3 rounded-full text-lg transition">
                  Explore Services
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HeroSlider;
