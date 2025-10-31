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
    <div className="bg-white text-gray-900 overflow-hidden py-8 sm:py-12 lg:py-14 h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-18">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-start">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Heading */}
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-900 leading-snug">
              We are a creative interior and architecture design company
            </h1>

            {/* Images */}
            <div className="relative">
              {/* Main Image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="relative z-10 w-full h-[280px] sm:h-[420px] rounded-xl overflow-hidden shadow-md"
              >
                <img
                  src="https://plus.unsplash.com/premium_photo-1716112776995-cf224aa387b5?auto=format&fit=crop&q=70&w=1600"
                  alt="Modern Interior Space"
                  className="w-full h-full object-cover"
                />
              </motion.div>

              {/* Overlay Image */}
              <motion.div
                initial={{ opacity: 0, x: 25 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="absolute -right-3 sm:-right-6 top-1/2 -translate-y-1/2 z-20 w-[60%] sm:w-[50%] h-[250px] sm:h-[320px] rounded-xl overflow-hidden shadow-lg border-4 border-white"
              >
                <img
                  src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&q=70&w=800"
                  alt="Cozy Living Room"
                  className="w-full h-full object-cover"
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
            className="space-y-6"
          >
            {/* Description */}
            <div className="space-y-3">
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                At CUILUXE, we bring complete kitchen and dining solutions designed to combine beauty, comfort, and function. From premium cookware and serveware to elegant dining collections, every product is chosen to make your kitchen stylish and practical.
              </p>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                We take orders directly from clients or through our website, and our team personally visits to arrange and decorate your kitchen to perfection. We also offer deep cleaning services for your home, ensuring a fresh and organized space that reflects true CUILUXE quality.
              </p>
            </div>

            {/* Services */}
            <div className="space-y-4">
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900">
                Our Services
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {services.map((service, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: idx * 0.1 }}
                    viewport={{ once: true }}
                    className="space-y-2"
                  >
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-100 border border-gray-200 rounded-md flex items-center justify-center">
                      <service.icon className="text-gray-700 text-lg sm:text-xl" />
                    </div>
                    <h4 className="text-sm font-semibold text-gray-900">
                      {service.title}
                    </h4>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      {service.desc}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Bullet Points */}
            <div className="space-y-2 pt-2">
              <div className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 bg-gray-900 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  We provide end-to-end solutions from product selection to professional installation and arrangement.
                </p>
              </div>
              <div className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 bg-gray-900 rounded-full mt-2 flex-shrink-0"></div>
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
