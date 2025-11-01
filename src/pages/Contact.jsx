import React from 'react';
import { motion } from 'framer-motion';
import { FaWhatsapp, FaInstagram, FaFacebookF, FaPhone, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
  const contactInfo = [
    {
      icon: FaPhone,
      label: 'Phone',
      value: '+1 (555) 123-4567',
      link: 'tel:+15551234567',
      color: 'from-blue-600 to-blue-700'
    },
    {
      icon: FaEnvelope,
      label: 'Email',
      value: 'contact@cuiluxe.com',
      link: 'mailto:contact@cuiluxe.com',
      color: 'from-gray-700 to-gray-800'
    },
    {
      icon: FaWhatsapp,
      label: 'WhatsApp',
      value: '+91 9526223034',
      link: 'https://wa.me/9526223034',
      color: 'from-green-600 to-emerald-600'
    },
    {
      icon: FaInstagram,
      label: 'Instagram',
      value: '@cuiluxe_official',
      link: 'https://instagram.com/cuiluxe_official',
      color: 'from-pink-600 to-purple-600'
    },
    {
      icon: FaFacebookF,
      label: 'Facebook',
      value: 'cuiluxe.page',
      link: 'https://facebook.com/cuiluxe.page',
      color: 'from-blue-700 to-blue-800'
    }
  ];

  return (
    <section id="contact" className="relative bg-white py-20 md:py-28 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Contact Us
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Get in touch with us. We're here to help and respond to all your inquiries.
        </p>
      </motion.div>

        {/* Contact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {contactInfo.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.a
                key={item.label}
                href={item.link}
                target={item.link.startsWith('http') ? '_blank' : '_self'}
                rel={item.link.startsWith('http') ? 'noopener noreferrer' : ''}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -4 }}
                className="group"
              >
                <div className="relative h-full bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-xl hover:border-gray-300 transition-all duration-300">
                  <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} text-white mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="text-lg" />
                  </div>
                  <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">
                    {item.label}
                  </h3>
                  <p className="text-base font-medium text-gray-900 group-hover:text-orange-600 transition-colors duration-300">
                    {item.value}
                  </p>
                </div>
              </motion.a>
            );
          })}
        </div>

        {/* Bottom Message */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center"
        >
          <p className="text-gray-500 text-sm">
            We typically respond within 24 hours. For urgent matters, please contact us via phone or WhatsApp.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
