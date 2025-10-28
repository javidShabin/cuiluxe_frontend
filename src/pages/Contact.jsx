import React from 'react';
import { motion } from 'framer-motion';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="relative bg-gradient-to-b from-white via-white to-orange-50 text-gray-900 py-24 px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto text-center mb-14"
      >
        <span className="inline-block px-3 py-1 text-xs font-semibold tracking-wider bg-orange-100 text-orange-600 rounded-full">
          Contact CUILUXE
        </span>
        <h2 className="text-3xl sm:text-4xl font-extrabold mt-4">We’d love to hear from you</h2>
        <p className="text-gray-600 text-base sm:text-lg leading-relaxed mt-3">
          Questions, quotes, or collaborations — message us and we’ll respond promptly.
        </p>
      </motion.div>

      {/* Content Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 gap-8 xl:gap-10">
        {/* Info Card */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative overflow-hidden rounded-3xl border border-gray-100 bg-white/80 backdrop-blur-xl shadow-[0_10px_40px_rgba(0,0,0,0.06)] p-6 sm:p-8 md:p-10"
        >
          <div className="absolute -top-12 -right-12 w-56 h-56 bg-orange-200/40 rounded-full blur-3xl" />
          <div className="space-y-6 relative z-10">
            <div className="flex items-start gap-4 p-5 rounded-2xl bg-white/70 border border-gray-100 hover:shadow-md transition">
              <div className="p-3 rounded-xl bg-orange-100 text-orange-600">
                <FaPhoneAlt />
              </div>
              <div>
                <h4 className="text-gray-900 font-semibold">Phone</h4>
                <p className="text-gray-600">+1 234 567 890</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-5 rounded-2xl bg-white/70 border border-gray-100 hover:shadow-md transition">
              <div className="p-3 rounded-xl bg-orange-100 text-orange-600">
                <FaEnvelope />
              </div>
              <div>
                <h4 className="text-gray-900 font-semibold">Email</h4>
                <p className="text-gray-600">contact@cuiluxe.com</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-5 rounded-2xl bg-white/70 border border-gray-100 hover:shadow-md transition">
              <div className="p-3 rounded-xl bg-orange-100 text-orange-600">
                <FaMapMarkerAlt />
              </div>
              <div>
                <h4 className="text-gray-900 font-semibold">Address</h4>
                <p className="text-gray-600">123 Luxury Street, Gourmet City, USA</p>
              </div>
            </div>

            <div className="mt-6 p-5 rounded-2xl bg-gradient-to-r from-orange-50 to-amber-50 border border-orange-100">
              <p className="text-gray-700">
                Prefer messaging? Reach us instantly on WhatsApp — we usually reply within minutes.
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom Note */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-center text-gray-500 text-sm mt-16 max-w-3xl mx-auto leading-relaxed"
      >
        We value every message and will respond promptly. Your satisfaction and experience with CUILUXE is our top priority.
      </motion.p>
    </section>
  );
};

export default Contact;
