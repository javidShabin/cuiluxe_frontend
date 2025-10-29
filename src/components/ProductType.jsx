import React from "react";
import premium from "../public/images/permium.jpeg";
import normal from "../public/images/normal.jpeg";
import { Link } from "react-router-dom";

const ProductTypes = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-20">
      {/* Section Title */}
      <div className="text-center mb-12">
        <span className="inline-block px-3 py-1 text-xs font-semibold tracking-wider bg-orange-100 text-orange-600 rounded-full">Explore</span>
        <h1 className="mt-4 text-3xl sm:text-4xl font-extrabold tracking-tight bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
          Select Your Choice
        </h1>
        <p className="mt-3 text-gray-600 max-w-2xl mx-auto">Curated collections for every need — premium luxury or everyday value.</p>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Premium Product Card */}

        <div
          className="relative rounded-3xl overflow-hidden h-80 shadow-xl group transform transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl cursor-pointer"
          style={{
            backgroundImage: `url(${premium})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent transition-colors duration-500"></div>

          <div className="relative flex flex-col justify-end h-full p-6 text-white">
            <div className="flex items-center gap-2 mb-3">
              <span className="px-2 py-1 text-[10px] font-semibold rounded-full bg-white/15 border border-white/20 backdrop-blur">Premium</span>
              <span className="px-2 py-1 text-[10px] font-semibold rounded-full bg-orange-500 text-white">Top Rated</span>
            </div>
            <h3 className="text-2xl font-bold mb-1 drop-shadow">Our Products</h3>
            <p className="text-sm sm:text-base mb-5 text-white/90 max-w-md">Experience luxury with our top‑tier, high‑quality products crafted for perfection.</p>
            <div className="flex gap-3">
              <Link to={"/premium-product"}>
                <button className="bg-white text-gray-900 hover:bg-gray-100 px-5 py-2 rounded-2xl text-sm font-semibold transition-all duration-300 shadow-md">
                  Shop Now
                </button>
              </Link>
              <Link to={"/premium-product"}>
                <button className="bg-white/10 border border-white/30 hover:bg-white/20 text-white px-5 py-2 rounded-2xl text-sm font-semibold transition-all duration-300">
                  Explore
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* Normal Product Card */}
        <div
          className="relative rounded-3xl overflow-hidden h-80 shadow-xl group transform transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl cursor-pointer"
          style={{
            backgroundImage: `url(${normal})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent transition-colors duration-500"></div>

          <div className="relative flex flex-col justify-end h-full p-6 text-white">
            <div className="flex items-center gap-2 mb-3">
              <span className="px-2 py-1 text-[10px] font-semibold rounded-full bg-white/15 border border-white/20 backdrop-blur">Value</span>
              <span className="px-2 py-1 text-[10px] font-semibold rounded-full bg-emerald-500 text-white">Best Seller</span>
            </div>
            <h3 className="text-2xl font-bold mb-1 drop-shadow">Our Packages</h3>
            <p className="text-sm sm:text-base mb-5 text-white/90 max-w-md">High‑quality, reliable products for everyday use at an affordable price.</p>
            <div className="flex gap-3">
              <Link to={"/normal-product"}>
                <button className="bg-white text-gray-900 hover:bg-gray-100 px-5 py-2 rounded-2xl text-sm font-semibold transition-all duration-300 shadow-md">
                  Shop Now
                </button>
              </Link>
              <Link to={"/normal-product"}>
                <button className="bg-white/10 border border-white/30 hover:bg-white/20 text-white px-5 py-2 rounded-2xl text-sm font-semibold transition-all duration-300">
                  Explore
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Longer Paragraph at the bottom */}
      <p className="text-center text-gray-700 text-sm sm:text-base mt-12 max-w-3xl mx-auto leading-relaxed">
        Explore our carefully curated product types designed to meet every need
        and preference. Whether you are looking for luxurious premium items that
        elevate your lifestyle or dependable normal products that offer
        exceptional value, our collection provides the perfect solution. Each
        product is crafted with attention to detail, quality materials, and a
        focus on your satisfaction, ensuring that every purchase is an
        investment in both style and functionality.
      </p>
    </div>
  );
};

export default ProductTypes;
