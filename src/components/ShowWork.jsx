import React from "react";
import { motion } from "framer-motion";
import { FaArrowRightLong } from "react-icons/fa6";

const ShowWork = () => {
  const beforeImg = "https://images.unsplash.com/photo-1523419409543-8c1ecaca9923?q=80&w=1600&auto=format&fit=crop";
  const afterImg = "https://images.unsplash.com/photo-1505577058444-a3dab90d4253?q=80&w=1600&auto=format&fit=crop";

  return (
    <section className="relative w-full py-16 sm:py-20 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-extrabold text-gray-900 text-center"
        >
          See Our Work
          <span className="block w-24 h-[3px] bg-gradient-to-r from-orange-500 to-yellow-400 mx-auto mt-3 rounded-full"></span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-3 text-center text-gray-600 max-w-2xl mx-auto"
        >
          A quick look at how a typical space transforms with Cuiluxe — from
          cluttered to curated, finished with premium organization and styling.
        </motion.p>

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-6 items-center">
          {/* Before */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="group relative rounded-3xl overflow-hidden border border-gray-200 bg-white shadow-sm hover:shadow-lg transition-all duration-500 hover:-translate-y-1"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent opacity-90"></div>
            <img src={beforeImg} alt="Before" className="w-full h-72 sm:h-80 object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute top-4 left-4 px-3 py-1.5 rounded-full text-xs font-semibold bg-white/90 text-gray-900 shadow">Before</div>
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <div className="relative backdrop-blur bg-white/70 rounded-xl px-4 py-2 shadow flex items-center justify-between overflow-hidden">
                <span className="pointer-events-none absolute inset-0 -translate-x-full group-hover:translate-x-0 transition-transform duration-700 bg-gradient-to-r from-transparent via-white/30 to-transparent"></span>
                <span className="text-sm font-semibold text-gray-900">Original Space</span>
                <span className="text-xs text-gray-600">Unorganized • Dull</span>
              </div>
            </div>
          </motion.div>

          {/* Arrow connector */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="hidden lg:flex items-center justify-center"
          >
            <div className="relative">
              <div className="w-28 h-28 rounded-full bg-gradient-to-br from-orange-500 to-yellow-400 blur-xl opacity-40 absolute -inset-4"></div>
              <div className="relative w-16 h-16 rounded-2xl bg-white text-gray-900 shadow-xl border border-gray-200 flex items-center justify-center">
                <FaArrowRightLong className="text-2xl" />
              </div>
              <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-xs text-gray-500">Transformation</div>
            </div>
          </motion.div>

          {/* After */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="group relative rounded-3xl overflow-hidden border border-gray-200 bg-white shadow-sm hover:shadow-lg transition-all duration-500 hover:-translate-y-1"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent opacity-90"></div>
            <img src={afterImg} alt="After" className="w-full h-72 sm:h-80 object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute top-4 left-4 px-3 py-1.5 rounded-full text-xs font-semibold bg-white/90 text-gray-900 shadow">After</div>
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <div className="relative backdrop-blur bg-white/80 rounded-xl px-4 py-2 shadow flex items-center justify-between overflow-hidden">
                <span className="pointer-events-none absolute inset-0 -translate-x-full group-hover:translate-x-0 transition-transform duration-700 bg-gradient-to-r from-transparent via-white/40 to-transparent"></span>
                <span className="text-sm font-semibold text-gray-900">Cuiluxe Finish</span>
                <span className="text-xs text-gray-600">Organized • Premium • Bright</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Benefits chips */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-8 flex flex-wrap justify-center gap-2"
        >
          <span className="px-3 py-1.5 rounded-full bg-white border border-gray-200 text-sm text-gray-700">2‑day completion</span>
          <span className="px-3 py-1.5 rounded-full bg-white border border-gray-200 text-sm text-gray-700">Personal visit & setup</span>
          <span className="px-3 py-1.5 rounded-full bg-white border border-gray-200 text-sm text-gray-700">Premium organization</span>
        </motion.div>

        {/* Mobile arrow below */}
        <div className="mt-6 flex lg:hidden items-center justify-center">
          <div className="relative">
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-orange-500 to-yellow-400 blur-xl opacity-40 absolute -inset-4"></div>
            <div className="relative w-12 h-12 rounded-2xl bg-white text-gray-900 shadow-xl border border-gray-200 flex items-center justify-center">
              <FaArrowRightLong className="text-xl" />
            </div>
            <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 text-[10px] text-gray-500">Swipe</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShowWork;


