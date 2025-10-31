import React from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { FaShoppingBag, FaArrowRight } from "react-icons/fa";

const Hero = () => {
  const slides = [
    {
      image:
        "https://images.unsplash.com/photo-1610701596061-2ecf227e85b2?ixlib=rb-4.1.0&auto=format&fit=crop&w=1920&q=80",
      headingTop: "Crafted Elegance in Kitchen Essentials,",
      headingBottom: "Dining & Serveware",
      blurb:
        "Complete kitchen solutions — curated, delivered, and arranged perfectly for your home.",
    },
    {
      image:
        "https://i.pinimg.com/736x/4c/ae/8a/4cae8a5f977f5eacbd5fd9e2dbecfb2a.jpg",
      headingTop: "Premium Serveware Collections",
      headingBottom: "Delivered & Installed",
      blurb:
        "From selection to setup, we handle everything end-to-end with care.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1484154218962-a197022b5858?ixlib=rb-4.1.0&auto=format&fit=crop&w=1920&q=80",
      headingTop: "Design. Organize. Shine.",
      headingBottom: "Your Kitchen, Upgraded",
      blurb:
        "Fast delivery, expert arrangement, and a premium finish you’ll love.",
    },
  ];

  return (
    <section
      className="relative w-full h-screen flex items-center justify-center font-cooper text-white overflow-hidden"
      tabIndex={0}
    >
      {/* Swiper with Background + Content */}
      <Swiper
        modules={[Autoplay, Pagination, EffectFade]}
        effect="fade"
        loop
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        speed={800}
        pagination={{ clickable: true }}
        className="absolute inset-0 h-full w-full"
      >
        {slides.map((slide, idx) => (
          <SwiperSlide key={idx}>
            <div className="relative w-full h-full">
              <img
                src={slide.image}
                alt="Luxury Kitchenware"
                className="w-full h-full object-cover object-[center_60%] md:object-center"
                draggable={false}
              />
              <div className="absolute inset-0 bg-black/50"></div>

              {/* Slide Content */}
              <div className="absolute inset-0 flex items-center justify-center px-6">
                <div className="relative z-10 px-6 sm:px-10 lg:px-16 flex flex-col items-center justify-center text-center text-white">
                  <motion.h1
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight"
                  >
                    {slide.headingTop}
                    <span className="block text-white/90 mt-2">
                      {slide.headingBottom}
                    </span>
                  </motion.h1>

                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="mt-6 text-lg sm:text-xl leading-relaxed text-white/85 max-w-3xl"
                  >
                    {slide.blurb}
                  </motion.p>

                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.35 }}
                    className="mt-10 flex flex-wrap gap-5 justify-center"
                  >
                    <button className="flex items-center gap-2 bg-white text-gray-900 font-semibold py-3 px-8 rounded-full shadow-lg hover:bg-gray-200 transition duration-300">
                      <FaShoppingBag /> Shop Now
                    </button>
                    <button className="flex items-center gap-2 border border-white hover:bg-white/10 text-white font-medium py-3 px-8 rounded-full transition duration-300">
                      Learn More <FaArrowRight />
                    </button>
                  </motion.div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Glow Elements */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-tr from-white/10 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-gradient-to-tl from-white/10 to-transparent rounded-full blur-3xl"></div>
    </section>
  );
};

export default Hero;
