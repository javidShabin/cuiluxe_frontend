import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { axiosInstance } from "../config/axiosInstance";
import { motion } from "framer-motion";
import toast from "react-hot-toast";

export const SingleProduct = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [mainImage, setMainImage] = useState("");

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axiosInstance.get(`/product/single-product/${productId}`);
        const data = response.data.product;
        setProduct(data);
        setMainImage(data?.images?.[0]);
      } catch (error) {
        console.error("Failed to fetch product details", error);
      }
    };

    if (productId) fetchProduct();
  }, [productId]);

  const addToCart = async () => {
    try {
      const item = { 
        productId: product._id, 
        image: product.images?.[0] || product.image, 
        itemName: product.title, 
        price: product.price, 
        quantity: 1 
      };
      const response = await axiosInstance.post("/cart/add-to-cart", {
        items: [item]
      });
      
      if (response.data) {
        toast.success("Item added to cart successfully!");
      }
    } catch (error) {
      console.error(error);
      toast.error("Failed to add to cart");
    }
  };

  if (!product)
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500 mx-auto mb-4"></div>
          <p className="text-gray-600 text-lg">Loading product details...</p>
        </div>
      </div>
    );

  return (
    <div className="min-h-screen bg-gray-50 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <motion.div
          className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            {/* Left - Product Images */}
            <motion.div
              className="relative bg-gradient-to-b from-gray-50 to-white p-6 lg:p-8"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              {/* Main Image */}
              <div className="relative aspect-square mb-5 rounded-2xl overflow-hidden ring-1 ring-gray-100 bg-white">
                <motion.img
                  src={mainImage}
                  alt={product.title}
                  className="w-full h-full object-contain"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                />
              </div>

              {/* Thumbnail Images */}
              <div className="flex gap-2.5 overflow-x-auto scrollbar-hide">
                {product.images?.slice(0, 5).map((img, i) => (
                  <motion.button
                    key={i}
                    onClick={() => setMainImage(img)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`flex-shrink-0 w-14 h-14 rounded-xl overflow-hidden ring-1 transition-all duration-200 ${
                      mainImage === img
                        ? "ring-orange-400 shadow-md"
                        : "ring-gray-200 hover:ring-orange-300"
                    }`}
                  >
                    <img
                      src={img}
                      alt=""
                      className="w-full h-full object-cover"
                    />
                  </motion.button>
                ))}
              </div>
            </motion.div>

            {/* Right - Product Details */}
            <motion.div
              className="p-6 lg:p-10"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="space-y-6">
                {/* Product Title */}
                <div>
                  <h1 className="text-2xl lg:text-3xl font-bold text-gray-900 leading-tight">
                    {product.title}
                  </h1>
                </div>

                {/* Categories */}
                <div className="flex flex-wrap gap-2">
                  <span className="bg-orange-100 text-orange-800 px-2.5 py-1 rounded-full text-xs font-medium">
                    {product.category}
                  </span>
                  {product.types && (
                    <span className="bg-blue-100 text-blue-800 px-2.5 py-1 rounded-full text-xs font-medium">
                      {product.types}
                    </span>
                  )}
                </div>

                {/* Price */}
                <div className="flex items-center gap-3">
                  <span className="text-3xl font-bold text-gray-900">₹{product.price}</span>
                </div>

                {/* Description */}
                <div>
                  <h3 className="text-base font-semibold text-gray-900 mb-2">Description</h3>
                  <p className="text-gray-700 leading-relaxed text-sm">
                    {product.description}
                  </p>
                </div>


                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <motion.button
                    onClick={addToCart}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex-1 bg-gradient-to-r from-orange-500 to-amber-500 text-white py-3.5 px-5 rounded-xl font-semibold text-base shadow-lg hover:shadow-orange-500/30 hover:scale-[1.01] transition-all duration-200 flex items-center justify-center gap-2"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m6-5v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6m8 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01" />
                    </svg>
                    Add to Cart
                  </motion.button>
                </div>


                {/* SKU */}
                {product.sku && (
                  <div className="text-sm text-gray-500">
                    <span className="font-medium">SKU:</span> {product.sku}
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
