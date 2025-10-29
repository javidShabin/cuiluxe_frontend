import React from "react";
import { motion } from "framer-motion";
import { FaLeaf, FaCrown, FaGem, FaClock, FaHeadset, FaGlobe, FaBroom, FaExchangeAlt } from "react-icons/fa";

const About = () => {
  return (
    <div className="bg-white text-gray-900 overflow-hidden mt-13">
      {/* Hero / About Us Section */}
      <section className="max-w-5xl mx-auto px-4 py-20 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 flex items-center gap-2">
            <FaCrown className="text-yellow-500" /> About Us
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
          At Cuiluxe, we believe every kitchen deserves a touch of perfection. We offer a complete range of kitchen essentials, dining, and serveware designed to bring beauty, comfort, and convenience into your home. Our team personally connects with each customer, helping them choose the right products, delivering everything directly, and arranging it to perfection — so your kitchen is not just functional, but truly complete.
          From elegant dinnerware to everyday kitchen tools, Cuiluxe combines quality, style, and service to create the ultimate kitchen experience — because your kitchen deserves luxury, simplified.
          </p>
         
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="overflow-hidden rounded-2xl shadow-xl">
            <img
              src="https://plus.unsplash.com/premium_photo-1716112776995-cf224aa387b5?auto=format&fit=crop&q=70&w=1000"
              alt="Premium Cookware"
              className="w-full h-64 md:h-80 object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute -bottom-4 -right-4 bg-white/90 backdrop-blur-md rounded-xl p-3 flex items-center gap-2 shadow">
              <FaLeaf className="text-green-600 text-xl" />
              <span className="text-gray-700 text-sm font-medium">
                Sustainable & Elegant
              </span>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Values Section */}
      <section className="py-16 px-4 max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
        {[
          { icon: FaGem, title: "Premium Materials", desc: "Only the finest, long‑lasting materials." },
          { icon: FaClock, title: "Completion in 2 Days", desc: "Fast delivery and setup within 48 hours." },
          { icon: FaHeadset, title: "24/7 Client Support", desc: "Always here to help, day or night." },
          { icon: FaGlobe, title: "40+ Imported Brands", desc: "Curated selection from global leaders." },
          { icon: FaBroom, title: "Best Cleaning Service", desc: "Professional deep-clean for spotless kitchens." },
          { icon: FaExchangeAlt, title: "Exchange Support", desc: "Hassle‑free exchanges with quick processing." },
        ].map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.15 }}
            className="group relative bg-gradient-to-br from-yellow-50 to-white p-6 rounded-2xl shadow hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border border-yellow-100"
          >
            <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-yellow-100 text-yellow-700 shadow-inner group-hover:bg-yellow-200 group-hover:text-yellow-800 transition-colors duration-300">
              <item.icon className="text-xl" />
            </div>
            <h4 className="text-base font-semibold mb-1 text-gray-900">{item.title}</h4>
            <p className="text-gray-600 text-sm">{item.desc}</p>
            <div className="pointer-events-none absolute inset-0 rounded-2xl ring-0 ring-yellow-300/0 group-hover:ring-2 group-hover:ring-yellow-300/40 transition-all duration-300"></div>
          </motion.div>
        ))}
      </section>
    </div>
  );
};

export default About;
