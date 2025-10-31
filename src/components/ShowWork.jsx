import React from "react";
import { motion } from "framer-motion";
import { FaArrowRightLong } from "react-icons/fa6";

const ShowWork = () => {
  const beforeImg =
    "https://images.unsplash.com/photo-1523419409543-8c1ecaca9923?q=80&w=1600&auto=format&fit=crop";
  const afterImg =
    "https://images.unsplash.com/photo-1505577058444-a3dab90d4253?q=80&w=1600&auto=format&fit=crop";

  return (
    <section className="relative w-full py-14 sm:py-18 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-semibold text-gray-900 text-center"
        >
          What We Do
          <span className="block w-20 h-[3px] bg-gradient-to-r from-amber-500 to-orange-400 mx-auto mt-3 rounded-full"></span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-3 text-center text-gray-600 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed"
        >
          Experience the CUILUXE transformation — from cluttered and dull to
          organized and elegant. Every space we touch reflects premium design
          and functionality.
        </motion.p>

        {/* Before → Arrow → After */}
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          {/* Before Card */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="group relative rounded-2xl overflow-hidden border border-gray-200 bg-white shadow-sm hover:shadow-md transition-all duration-500"
          >
            <img
              src={beforeImg}
              alt="Before"
              className="w-full h-72 sm:h-80 object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute top-4 left-4 px-3 py-1.5 rounded-full text-xs font-medium bg-white/90 text-gray-800 shadow-sm">
              Before
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-gray-900/60 to-transparent">
              <p className="text-white text-sm font-medium">Original Space</p>
              <p className="text-gray-200 text-xs">Unorganized • Dull</p>
            </div>
          </motion.div>

          {/* Arrow Connector */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="hidden lg:flex items-center justify-center"
          >
            <div className="relative">
              <div className="absolute inset-0 w-24 h-24 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full blur-xl opacity-30"></div>
              <div className="relative w-14 h-14 rounded-xl bg-white border border-gray-200 shadow-md flex items-center justify-center">
                <FaArrowRightLong className="text-xl text-gray-800" />
              </div>
              <p className="absolute -bottom-5 left-1/2 -translate-x-1/2 text-xs text-gray-500">
                Transformation
              </p>
            </div>
          </motion.div>

          {/* After Card */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="group relative rounded-2xl overflow-hidden border border-gray-200 bg-white shadow-sm hover:shadow-md transition-all duration-500"
          >
            <img
              src={afterImg}
              alt="After"
              className="w-full h-72 sm:h-80 object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute top-4 left-4 px-3 py-1.5 rounded-full text-xs font-medium bg-white/90 text-gray-800 shadow-sm">
              After
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-gray-900/60 to-transparent">
              <p className="text-white text-sm font-medium">CUILUXE Finish</p>
              <p className="text-gray-200 text-xs">
                Organized • Premium • Bright
              </p>
            </div>
          </motion.div>
        </div>

        {/* Benefits Chips */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-10 flex flex-wrap justify-center gap-3"
        >
          {[
            "2-Day Completion",
            "Personal Visit & Setup",
            "Premium Organization",
          ].map((item, i) => (
            <span
              key={i}
              className="px-3.5 py-1.5 rounded-full bg-white border border-gray-200 text-sm text-gray-700 shadow-sm hover:border-gray-300 transition"
            >
              {item}
            </span>
          ))}
        </motion.div>

        {/* Mobile Arrow Below */}
        <div className="mt-6 flex lg:hidden items-center justify-center">
          <div className="relative">
            <div className="absolute inset-0 w-16 h-16 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full blur-lg opacity-30"></div>
            <div className="relative w-10 h-10 rounded-lg bg-white border border-gray-200 shadow-md flex items-center justify-center">
              <FaArrowRightLong className="text-lg text-gray-800" />
            </div>
            <p className="absolute -bottom-4 left-1/2 -translate-x-1/2 text-[10px] text-gray-500">
              Swipe
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShowWork;
