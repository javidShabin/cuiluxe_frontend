import React from "react";
import { motion } from "framer-motion";
import {
  FaLeaf,
  FaCrown,
  FaGem,
  FaClock,
  FaHeadset,
  FaGlobe,
  FaBroom,
  FaExchangeAlt,
} from "react-icons/fa";

const About = () => {
  const values = [
    { icon: FaGem, title: "Premium Products", desc: "Only the finest, long-lasting kitchenware." },
    { icon: FaClock, title: "Completion in 2 Days", desc: "Fast delivery and setup within 48 hours." },
    { icon: FaHeadset, title: "24/7 Client Support", desc: "Always here to help, day or night." },
    { icon: FaGlobe, title: "40+ Imported Brands", desc: "Curated selection from global leaders." },
    { icon: FaBroom, title: "Best Cleaning Service", desc: "Professional deep-clean for spotless rooms." },
    // { icon: FaExchangeAlt, title: "Exchange Support", desc: "Hassle-free exchanges with quick processing." },
  ];

  return (
    <div className="text-gray-900 overflow-hidden mt-12">
      {/* Hero Section - full width image with overlay text */}
      <section className="relative w-full min-h-[50vh] h-[55vh] sm:h-[60vh] md:h-[60vh]">
        <img
          src="https://plus.unsplash.com/premium_photo-1716112776995-cf224aa387b5?auto=format&fit=crop&q=70&w=1600"
          alt="Luxury Kitchen"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/25 to-transparent"></div>
        <div className="relative z-10 h-full">
          <div className="max-w-6xl mx-auto h-full px-4 sm:px-6 flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-white"
            >
              <div className="bg-black/30 backdrop-blur-md rounded-2xl p-4 sm:p-6 ring-1 ring-white/10 w-full max-w-4xl">
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[10px] sm:text-xs bg-white/15 text-white ring-1 ring-white/20 font-semibold">Trusted home solutions</span>
                <h2 className="text-3xl sm:text-5xl md:text-4xl font-extrabold leading-tight tracking-tight mt-3 mb-2 drop-shadow flex items-center justify-center gap-3 text-center">
                  
                  <span className="relative">
                    Designed for Everyday Luxury
                    <motion.span
                      className="absolute left-0 -bottom-2 h-[3px] w-full bg-gradient-to-r from-orange-400 to-yellow-300 rounded-full"
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                    ></motion.span>
                  </span>
                </h2>
                <p className="text-white/90 leading-relaxed text-sm sm:text-lg max-w-3xl">
                  At CUILUXE, we bring complete kitchen and dining solutions designed to combine beauty, comfort, and function. From premium cookware and serveware to elegant dining collections, every product is chosen to make your kitchen stylish and practical. We take orders directly from clients or through our website, and our team personally visits to arrange and decorate your kitchen to perfection. We also offer deep cleaning services for your home, ensuring a fresh and organized space that reflects true CUILUXE quality.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      {/* Stats under hero */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-6">
        <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-0 text-center overflow-hidden rounded-2xl bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white shadow-lg ring-1 ring-black/10">
          <div className="py-5 sm:py-6">
            <p className="text-4xl sm:text-3xl font-extrabold tracking-tight">40+</p>
            <p className="text-[10px] sm:text-sm text-white/70">Imported brands</p>
          </div>
          <div className="py-5 sm:py-6 sm:border-x border-white/10">
            <p className="text-4xl sm:text-3xl font-extrabold tracking-tight">2 Days</p>
            <p className="text-[10px] sm:text-sm text-white/70">Completion promise</p>
          </div>
          <div className="py-5 sm:py-6">
            <p className="text-4xl sm:text-3xl font-extrabold tracking-tight">24/7</p>
            <p className="text-[10px] sm:text-sm text-white/70">Client support</p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-10 px-4 sm:px-6 max-w-6xl mx-auto">
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl sm:text-4xl font-bold text-center mb-14 text-gray-900"
        >
          What Makes Cuiluxe Different
          <span className="block w-24 h-[3px] bg-gradient-to-r from-orange-500 to-yellow-400 mx-auto mt-3 rounded-full"></span>
        </motion.h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {values.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="group relative bg-white/80 backdrop-blur p-8 rounded-3xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1"
            >
              <div className="mb-5 mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-500 to-yellow-400 text-white shadow-md group-hover:scale-105 transition-transform duration-300 ring-1 ring-orange-200/40">
                <item.icon className="text-2xl" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">
                {item.title}
              </h4>
              <p className="text-gray-600 text-sm">{item.desc}</p>

              <div className="absolute inset-0 rounded-3xl ring-0 ring-orange-400/0 group-hover:ring-2 group-hover:ring-orange-400/15 transition-all duration-300"></div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;
