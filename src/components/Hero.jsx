import React from "react";
import { motion } from "framer-motion";
import { FaShoppingBag, FaArrowRight } from "react-icons/fa";

const Hero = () => {
  const images = [
    "https://images.unsplash.com/photo-1610701596061-2ecf227e85b2?ixlib=rb-4.1.0&auto=format&fit=crop&w=1920&q=80",
    "https://images.unsplash.com/photo-1546549039-49ec153f0b8b?ixlib=rb-4.1.0&auto=format&fit=crop&w=1920&q=80",
    "https://images.unsplash.com/photo-1484154218962-a197022b5858?ixlib=rb-4.1.0&auto=format&fit=crop&w=1920&q=80",
  ];
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const lastScrollTimeRef = React.useRef(0);
  const autoplayTimerRef = React.useRef(null);

  const goToIndex = (nextIndex) => {
    const total = images.length;
    const wrapped = ((nextIndex % total) + total) % total;
    setCurrentIndex(wrapped);
  };

  const handleWheel = (e) => {
    const now = Date.now();
    // Simple throttle to avoid skipping too fast
    if (now - lastScrollTimeRef.current < 600) return;
    lastScrollTimeRef.current = now;
    if (e.deltaY > 0) {
      goToIndex(currentIndex + 1);
    } else if (e.deltaY < 0) {
      goToIndex(currentIndex - 1);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "ArrowRight") goToIndex(currentIndex + 1);
    if (e.key === "ArrowLeft") goToIndex(currentIndex - 1);
  };

  // Autoplay
  React.useEffect(() => {
    autoplayTimerRef.current = setInterval(() => {
      setCurrentIndex((prev) => prev + 1);
    }, 5000);
    return () => {
      if (autoplayTimerRef.current) clearInterval(autoplayTimerRef.current);
    };
  }, []);

  return (
    <section
      className="relative w-full h-screen flex items-center justify-center font-cooper text-white overflow-hidden"
      onWheel={handleWheel}
      onKeyDown={handleKeyDown}
      tabIndex={0}
    >
      {/* Background Slider */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="flex h-full"
          style={{
            width: `${images.length * 100}%`,
            transform: `translateX(-${currentIndex * (100 / images.length)}%)`,
            transition: "transform 700ms ease",
          }}
        >
          {images.map((src, idx) => (
            <div
              key={idx}
              className="h-full flex-none relative"
              style={{ width: `${100 / images.length}%` }}
            >
              <img
                src={src}
                alt="Luxury Kitchenware"
                className="w-full h-full object-cover blur-sm"
                draggable={false}
              />
            </div>
          ))}
        </div>
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Frosted Glass Content */}
      <div className="relative z-10 px-6 sm:px-10 lg:px-16 flex flex-col items-center justify-center text-center ">
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-3xl sm:text-3xl lg:text-[45px] font-extrabold leading-tight"
        >
          Crafted Elegance in Kitchen Essentials,
          <span className="block text-white/90 mt-2">Dining & Serveware</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mt-6 text-lg sm:text-md text-white/80 max-w-2xl"
        >
          Get complete kitchen solutions with Cuiluxe. From essentials to dining and serveware, we deliver and arrange everything perfectly for your home.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
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

      {/* Slider Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex gap-2">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => goToIndex(idx)}
            aria-label={`Go to slide ${idx + 1}`}
            className={`${
              idx === currentIndex ? "bg-white" : "bg-white/40 hover:bg-white/70"
            } w-2.5 h-2.5 rounded-full transition-colors`}
          />)
        )}
      </div>

      {/* Glow Elements */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-tr from-white/10 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-gradient-to-tl from-white/10 to-transparent rounded-full blur-3xl"></div>
    </section>
  );
};

export default Hero;
