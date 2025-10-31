import React from "react";
import { motion } from "framer-motion";
import { FaArrowRightLong } from "react-icons/fa6";

const ShowWork = () => {
  const beforeImg =
    "https://images.unsplash.com/photo-1523419409543-8c1ecaca9923?q=80&w=1600&auto=format&fit=crop";
  const afterImg =
    "https://images.unsplash.com/photo-1505577058444-a3dab90d4253?q=80&w=1600&auto=format&fit=crop";

  return (
    <section className="relative w-full py-16 sm:py-20 bg-gradient-to-b from-white via-gray-50/50 to-gray-50 overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-orange-100/30 to-amber-100/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-orange-100/30 to-amber-100/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-3xl lg:text-4xl font-bold text-gray-900 text-center mb-4"
        >
          What We Do
          <span className="block w-24 h-1 bg-gradient-to-r from-amber-500 via-orange-500 to-orange-400 mx-auto mt-4 rounded-full shadow-lg shadow-orange-200/50"></span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-4 text-center text-gray-600 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed"
        >
          Experience the CUILUXE transformation — from cluttered and dull to
          organized and elegant. Every space we touch reflects premium design
          and functionality.
        </motion.p>

        {/* Before → Arrow → After */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-[2fr_auto_2fr] gap-6 items-center">
          {/* Before Card */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="group relative rounded-3xl overflow-hidden border-2 border-gray-200/80 bg-white shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
          >
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-gray-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
            <img
              src={beforeImg}
              alt="Before"
              className="w-full h-72 sm:h-80 lg:h-96 object-cover transition-transform duration-700 group-hover:scale-110"
            />
            {/* Enhanced badge */}
            <div className="absolute top-5 left-5 px-4 py-2 rounded-full text-xs font-bold bg-white/95 backdrop-blur-sm text-gray-900 shadow-lg ring-2 ring-gray-200/50">
              Before
            </div>
            {/* Enhanced overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-gray-900/80 via-gray-900/40 to-transparent">
              <p className="text-white text-base font-bold drop-shadow-lg">Original Space</p>
              <p className="text-gray-200 text-sm mt-1">Unorganized • Dull</p>
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
            <div className="relative group/arrow">
              <div className="absolute inset-0 w-28 h-28 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full blur-2xl opacity-40 group-hover/arrow:opacity-60 transition-opacity duration-300"></div>
              <div className="relative w-16 h-16 rounded-2xl bg-gradient-to-br from-white to-gray-50 border-2 border-orange-200 shadow-xl flex items-center justify-center group-hover/arrow:scale-110 transition-transform duration-300">
                <FaArrowRightLong className="text-2xl text-orange-600" />
              </div>
              <p className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-xs font-medium text-gray-600 whitespace-nowrap">
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
            className="group relative rounded-3xl overflow-hidden border-2 border-gray-200/80 bg-white shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
          >
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-amber-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
            <img
              src={afterImg}
              alt="After"
              className="w-full h-72 sm:h-80 lg:h-96 object-cover transition-transform duration-700 group-hover:scale-110"
            />
            {/* Enhanced badge */}
            <div className="absolute top-5 left-5 px-4 py-2 rounded-full text-xs font-bold bg-gradient-to-r from-orange-500 to-amber-500 text-white shadow-lg ring-2 ring-orange-200/50">
              After
            </div>
            {/* Enhanced overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-gray-900/80 via-gray-900/40 to-transparent">
              <p className="text-white text-base font-bold drop-shadow-lg">CUILUXE Finish</p>
              <p className="text-gray-200 text-sm mt-1">
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
          className="mt-12 flex flex-wrap justify-center gap-4"
        >
          {[
            "2-Day Completion",
            "Personal Visit & Setup",
            "Premium Organization",
          ].map((item, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}
              className="px-5 py-2.5 rounded-full bg-white border-2 border-gray-200 text-sm font-semibold text-gray-700 shadow-md hover:shadow-lg hover:border-orange-300 hover:bg-orange-50/50 transition-all duration-300 cursor-pointer"
            >
              {item}
            </motion.span>
          ))}
        </motion.div>

        {/* Mobile Arrow Below */}
        <div className="mt-8 flex lg:hidden items-center justify-center">
          <div className="relative group">
            <div className="absolute inset-0 w-20 h-20 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full blur-xl opacity-40 group-hover:opacity-60 transition-opacity duration-300"></div>
            <div className="relative w-12 h-12 rounded-xl bg-gradient-to-br from-white to-gray-50 border-2 border-orange-200 shadow-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <FaArrowRightLong className="text-xl text-orange-600" />
            </div>
            <p className="absolute -bottom-5 left-1/2 -translate-x-1/2 text-[10px] font-medium text-gray-600">
              Swipe
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShowWork;
