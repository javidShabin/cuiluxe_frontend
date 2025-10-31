import React from "react";
import { motion } from "framer-motion";
import {
  FaGem,
  FaClock,
  FaHeadset,
  FaBroom,
} from "react-icons/fa";

const About = () => {
  const services = [
    { icon: FaGem, title: "Premium Products", desc: "Only the finest, long-lasting kitchenware." },
    { icon: FaClock, title: "Completion in 2 Days", desc: "Fast delivery and setup within 48 hours." },
    { icon: FaHeadset, title: "24/7 Client Support", desc: "Always here to help, day or night." },
    { icon: FaBroom, title: "Best Cleaning Service", desc: "Professional deep-clean for spotless rooms." },
  ];

  return (
    <div className="bg-white text-gray-900 overflow-hidden py-6 sm:py-10 md:py-12 lg:py-16 min-h-screen w-full">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-16 xl:gap-20 2xl:gap-24 items-start">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="space-y-4 sm:space-y-5 md:space-y-6"
          >
            {/* Heading */}
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-900 leading-tight sm:leading-snug">
              We are a creative interior and architecture design company
            </h1>

            {/* Images */}
            <div className="relative mt-4 sm:mt-6">
              {/* Main Image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="relative z-10 w-full h-[250px] sm:h-[280px] md:h-[320px] lg:h-[360px] xl:h-[400px] 2xl:h-[420px] rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl sm:shadow-2xl group"
              >
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
                <img
                  src="https://plus.unsplash.com/premium_photo-1716112776995-cf224aa387b5?auto=format&fit=crop&q=70&w=1600"
                  alt="Modern Interior Space"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                />
              </motion.div>

              {/* Overlay Image */}
              <motion.div
                initial={{ opacity: 0, x: 25 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="absolute -right-2 sm:-right-4 md:-right-6 lg:-right-8 xl:-right-10 top-1/2 -translate-y-1/2 z-20 w-[55%] sm:w-[60%] md:w-[65%] lg:w-[70%] xl:w-[75%] h-[220px] sm:h-[240px] md:h-[260px] lg:h-[280px] xl:h-[300px] 2xl:h-[320px] rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl sm:shadow-2xl border-2 sm:border-4 border-white group hover:scale-105 transition-transform duration-500 hidden sm:block"
              >
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
                <img
                  src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&q=70&w=800"
                  alt="Cozy Living Room"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                />
              </motion.div>
            </div>
          </motion.div>

          {/* Right Column */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="space-y-4 sm:space-y-5 md:space-y-6 mt-6 sm:mt-8 lg:mt-0"
          >
            {/* Description */}
            <div className="space-y-3 sm:space-y-4">
              <p className="text-xs sm:text-sm md:text-base text-gray-600 leading-relaxed">
                At CUILUXE, we bring complete kitchen and dining solutions designed to combine beauty, comfort, and function. From premium cookware and serveware to elegant dining collections, every product is chosen to make your kitchen stylish and practical.
              </p>
              <p className="text-xs sm:text-sm md:text-base text-gray-600 leading-relaxed">
                We take orders directly from clients or through our website, and our team personally visits to arrange and decorate your kitchen to perfection. We also offer deep cleaning services for your home, ensuring a fresh and organized space that reflects true CUILUXE quality.
              </p>
            </div>

            {/* Services */}
            <div className="space-y-3 sm:space-y-4">
              <h3 className="text-base sm:text-lg md:text-xl font-semibold text-gray-900">
                Our Services
              </h3>
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                {services.map((service, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: idx * 0.1 }}
                    viewport={{ once: true }}
                    className="space-y-1.5 sm:space-y-2"
                  >
                    <div className="w-9 h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg sm:rounded-xl flex items-center justify-center">
                      <service.icon className="text-white text-base sm:text-lg md:text-xl" />
                    </div>
                    <h4 className="text-xs sm:text-sm font-semibold text-gray-900 leading-tight">
                      {service.title}
                    </h4>
                    <p className="text-[10px] sm:text-xs text-gray-600 leading-relaxed">
                      {service.desc}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Bullet Points */}
            <div className="space-y-2 sm:space-y-3 pt-2 sm:pt-4">
              <div className="flex items-start gap-2 sm:gap-3">
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gray-900 rounded-full mt-1.5 sm:mt-2 flex-shrink-0"></div>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  We provide end-to-end solutions from product selection to professional installation and arrangement.
                </p>
              </div>
              <div className="flex items-start gap-2 sm:gap-3">
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gray-900 rounded-full mt-1.5 sm:mt-2 flex-shrink-0"></div>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  Our team ensures every detail is perfect, creating spaces that combine elegance with practicality.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
