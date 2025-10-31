import React from "react";
import { motion } from "framer-motion";
import { FaBroom, FaCogs, FaBolt, FaCheckCircle } from "react-icons/fa";

const Services = () => {
  return (
    <div className="bg-white text-gray-900 overflow-hidden mt-5">
      {/* Hero Section */}
      <section className="relative max-w-6xl mx-auto px-4 pt-24 pb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <span className="inline-block px-3 py-1 text-xs font-semibold tracking-wider bg-orange-100 text-orange-600 rounded-full">
            What we do
          </span>
          <h1 className="mt-4 text-2xl sm:text-3xl md:text-4xl font-extrabold">
            Our Services
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-gray-600">
          From kitchen accessories to home cleaning, we handle it all for you.
          Our team visits directly, takes orders, and delivers everything to your door.
          </p>
        </motion.div>
      </section>

      {/* Services Grid */}
      <section className="max-w-6xl mx-auto px-4 pb-20 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Service 1 */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="group relative overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm hover:shadow-xl transition-shadow"
        >
          <div className="relative h-48 sm:h-56 overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?q=80&w=1600&auto=format&fit=crop"
              alt="Curated kitchen and dining essentials"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/0 to-transparent"></div>
          </div>
          <div className="p-7">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 rounded-xl bg-orange-100 text-orange-600">
                <FaCogs className="text-xl" />
              </div>
              <h3 className="text-xl font-bold">OUR SERVICES</h3>
            </div>
            <p className="text-gray-700 leading-relaxed">
              At CUILUXE, we provide complete kitchen and dining solutions designed for modern homes. From premium kitchen essentials, elegant diningware, to stylish serveware, we bring everything directly to you — saving your time and effort.
            </p>
            <p className="text-gray-700 leading-relaxed mt-3">
              You don’t need to search from place to place — everything you need is right at your fingertips. Our team handles everything from selection to setup, and we also decorate your kitchen to make it stylish, functional, and beautifully organized, giving you a seamless and hassle‑free experience.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-gray-200 text-sm text-gray-700"><FaCheckCircle className="text-green-500"/> Selection to setup</span>
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-gray-200 text-sm text-gray-700"><FaCheckCircle className="text-green-500"/> Premium essentials</span>
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-gray-200 text-sm text-gray-700"><FaCheckCircle className="text-green-500"/> Decor & organization</span>
            </div>
          </div>
        </motion.div>

        {/* Service 2 */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="group relative overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm hover:shadow-xl transition-shadow"
        >
          <div className="relative h-48 sm:h-56 overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1485968579580-b6d095142e6e?q=80&w=1600&auto=format&fit=crop"
              alt="Professional deep home cleaning"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/0 to-transparent"></div>
          </div>
          <div className="p-7">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 rounded-xl bg-emerald-100 text-emerald-700">
                <FaBroom className="text-xl" />
              </div>
              <h3 className="text-xl font-bold">Deep Home Cleaning</h3>
            </div>
            <p className="text-gray-700 leading-relaxed">
              UILUXE also offers professional deep cleaning for your entire home. With just a quick message, our team responds instantly to ensure your home stays spotless, refreshed, and perfectly maintained.
            </p>
            <p className="text-gray-700 leading-relaxed mt-3">
              We focus on hygiene, detail, and convenience — keeping your space clean while saving your valuable time.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-gray-200 text-sm text-gray-700"><FaBolt className="text-emerald-600"/> Instant response</span>
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-gray-200 text-sm text-gray-700"><FaCheckCircle className="text-green-500"/> Hygiene first</span>
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-gray-200 text-sm text-gray-700"><FaCheckCircle className="text-green-500"/> Time‑saving service</span>
            </div>
          </div>
        </motion.div>
      </section>

      {/* CTA */}
      <section className="px-4 pb-24">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-orange-500 to-amber-500 text-white p-8 sm:p-12 shadow-xl"
          >
            <div className="relative z-10">
              <h3 className="text-2xl sm:text-3xl font-extrabold">Ready to elevate your home?</h3>
              <p className="mt-2 text-white/90 max-w-2xl">
                Message us now for product curation, setup, decor, or deep cleaning.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a href="#contact" className="px-5 py-3 bg-white text-gray-900 rounded-full font-semibold hover:opacity-95 transition">
                  Contact Us
                </a>
                <a href="/products" className="px-5 py-3 bg-black/20 border border-white/30 rounded-full font-semibold hover:bg-black/30 transition">
                  Explore Products
                </a>
              </div>
            </div>
            <div className="absolute -right-10 -bottom-10 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;


