import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-gray-900 via-gray-900 to-black text-gray-300 relative pt-20 pb-8 overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-orange-500/10 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-orange-500/10 to-transparent rounded-full blur-3xl"></div>
      
      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Logo & Description */}
          <div className="lg:col-span-1 space-y-5">
            <Link to="/" className="inline-block text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-400 via-yellow-300 to-orange-400 hover:from-orange-300 hover:via-yellow-200 hover:to-orange-300 transition-all duration-300">
              Cuiluxe
            </Link>
            <p className="text-sm leading-relaxed text-gray-400">
              CUILUXE brings together premium kitchen essentials, cookware, dining, and serveware — all delivered with ease and care. Our team personally assists with selection, delivery, setup, and decoration, along with providing deep cleaning services to keep your space spotless and fresh.
            </p>
            <p className="text-sm font-medium text-orange-400 italic">
              "At CUILUXE, we make your kitchen beautiful, effortless, and complete."
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6 relative inline-block">
              Quick Links
              <span className="absolute bottom-0 left-0 w-8 h-0.5 bg-gradient-to-r from-orange-400 to-yellow-300"></span>
            </h4>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-400 hover:text-orange-400 transition-all duration-300 flex items-center group">
                  <span className="w-0 h-0.5 bg-orange-400 group-hover:w-4 transition-all duration-300 mr-0 group-hover:mr-2"></span>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-orange-400 transition-all duration-300 flex items-center group">
                  <span className="w-0 h-0.5 bg-orange-400 group-hover:w-4 transition-all duration-300 mr-0 group-hover:mr-2"></span>
                  About
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-400 hover:text-orange-400 transition-all duration-300 flex items-center group">
                  <span className="w-0 h-0.5 bg-orange-400 group-hover:w-4 transition-all duration-300 mr-0 group-hover:mr-2"></span>
                  Products
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-orange-400 transition-all duration-300 flex items-center group">
                  <span className="w-0 h-0.5 bg-orange-400 group-hover:w-4 transition-all duration-300 mr-0 group-hover:mr-2"></span>
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6 relative inline-block">
              Company
              <span className="absolute bottom-0 left-0 w-8 h-0.5 bg-gradient-to-r from-orange-400 to-yellow-300"></span>
            </h4>
            <ul className="space-y-3">
              <li>
                <Link to="/privacy" className="text-gray-400 hover:text-orange-400 transition-all duration-300 flex items-center group">
                  <span className="w-0 h-0.5 bg-orange-400 group-hover:w-4 transition-all duration-300 mr-0 group-hover:mr-2"></span>
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-gray-400 hover:text-orange-400 transition-all duration-300 flex items-center group">
                  <span className="w-0 h-0.5 bg-orange-400 group-hover:w-4 transition-all duration-300 mr-0 group-hover:mr-2"></span>
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-gray-400 hover:text-orange-400 transition-all duration-300 flex items-center group">
                  <span className="w-0 h-0.5 bg-orange-400 group-hover:w-4 transition-all duration-300 mr-0 group-hover:mr-2"></span>
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6 relative inline-block">
              Follow Us
              <span className="absolute bottom-0 left-0 w-8 h-0.5 bg-gradient-to-r from-orange-400 to-yellow-300"></span>
            </h4>
            <div className="flex items-center gap-4">
              <a 
                href="#" 
                className="group relative bg-gray-800/50 backdrop-blur-sm p-3.5 rounded-full hover:bg-gradient-to-br hover:from-blue-600 hover:to-blue-700 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/30"
                aria-label="Facebook"
              >
                <FaFacebookF className="text-gray-300 group-hover:text-white transition-colors duration-300" />
              </a>
              <a 
                href="#" 
                className="group relative bg-gray-800/50 backdrop-blur-sm p-3.5 rounded-full hover:bg-gradient-to-br hover:from-sky-500 hover:to-sky-600 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-sky-500/30"
                aria-label="Twitter"
              >
                <FaTwitter className="text-gray-300 group-hover:text-white transition-colors duration-300" />
              </a>
              <a 
                href="#" 
                className="group relative bg-gray-800/50 backdrop-blur-sm p-3.5 rounded-full hover:bg-gradient-to-br hover:from-pink-600 hover:to-purple-600 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-pink-500/30"
                aria-label="Instagram"
              >
                <FaInstagram className="text-gray-300 group-hover:text-white transition-colors duration-300" />
              </a>
              <a 
                href="#" 
                className="group relative bg-gray-800/50 backdrop-blur-sm p-3.5 rounded-full hover:bg-gradient-to-br hover:from-blue-700 hover:to-blue-800 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/30"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn className="text-gray-300 group-hover:text-white transition-colors duration-300" />
              </a>
            </div>
            <p className="text-xs text-gray-500 mt-6">
              Stay connected with us for the latest updates, offers, and kitchen inspiration.
            </p>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="border-t border-gray-800/50 relative">
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-24 h-px bg-gradient-to-r from-transparent via-orange-400 to-transparent"></div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-gray-500 text-sm">
          <p className="text-center md:text-left">
            © {new Date().getFullYear()} Cuiluxe. All rights reserved.
          </p>
          <p className="text-center md:text-right flex items-center gap-2">
            Designed with <span className="text-red-500 animate-pulse">❤️</span> for a premium experience.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
