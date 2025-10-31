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
      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-6 py-24 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl sm:text-5xl font-extrabold mb-6 text-gray-900 flex items-center gap-3">
            <FaCrown className="text-yellow-500 drop-shadow" />
            <span className="relative">
              About Us
              <motion.span
                className="absolute left-0 -bottom-2 h-[3px] w-full bg-gradient-to-r from-orange-500 to-yellow-400 rounded-full"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              ></motion.span>
            </span>
          </h2>

          <p className="text-gray-600 leading-relaxed text-lg mb-4">
            At <span className="font-semibold text-gray-900">Cuiluxe</span>, we believe every kitchen deserves a touch of perfection.
            We offer a curated range of premium kitchenware, dining, and serveware designed
            to elevate both beauty and function in your home.
          </p>

          <p className="text-gray-600 leading-relaxed text-lg">
            From elegant dinnerware to daily-use essentials, we bring together craftsmanship,
            quality, and style to make your kitchen a luxurious experience —{" "}
            <span className="italic text-orange-600 font-medium">because your kitchen deserves luxury, simplified.</span>
          </p>
        </motion.div>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="group relative rounded-3xl overflow-hidden shadow-2xl backdrop-blur-xl border border-white/30 bg-white/60">
            <img
              src="https://plus.unsplash.com/premium_photo-1716112776995-cf224aa387b5?auto=format&fit=crop&q=70&w=1000"
              alt="Luxury Kitchen"
              className="w-full h-72 md:h-96 object-cover transform transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute bottom-5 left-5 bg-white/90 backdrop-blur-md rounded-xl px-4 py-2 flex items-center gap-2 shadow-lg">
              <FaLeaf className="text-green-600 text-xl" />
              <span className="text-gray-800 font-medium text-sm">Sustainable & Elegant</span>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Values Section */}
      <section className="py-10 px-6 max-w-6xl mx-auto">
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl sm:text-4xl font-bold text-center mb-14 text-gray-900"
        >
          Our Core Values
          <span className="block w-24 h-[3px] bg-gradient-to-r from-orange-500 to-yellow-400 mx-auto mt-3 rounded-full"></span>
        </motion.h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="group relative bg-white/70 backdrop-blur-sm p-8 rounded-3xl border border-orange-100 shadow-lg hover:shadow-xl hover:bg-white transition-all duration-300 hover:-translate-y-2"
            >
              <div className="mb-5 mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-500 to-yellow-400 text-white shadow-md group-hover:scale-110 transition-transform duration-300">
                <item.icon className="text-2xl" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors">
                {item.title}
              </h4>
              <p className="text-gray-600 text-sm">{item.desc}</p>

              <div className="absolute inset-0 rounded-3xl ring-0 ring-orange-400/0 group-hover:ring-4 group-hover:ring-orange-400/20 transition-all duration-300"></div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;
