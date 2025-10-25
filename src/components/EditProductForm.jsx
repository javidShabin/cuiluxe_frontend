import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";

const EditProductForm = ({ editProduct, setEditProduct, onSubmit }) => {
  const { register, handleSubmit, reset } = useForm();

  // Reset form with product data when editProduct changes
  useEffect(() => {
    if (editProduct) {
      reset({
        title: editProduct.title || "",
        category: editProduct.category || "",
        types: editProduct.types || "",
        sku: editProduct.sku || "",
        price: editProduct.price || "",
        description: editProduct.description || "",
      });
    }
  }, [editProduct, reset]);

  return (
    <motion.div
      className="fixed inset-0 bg-white/30 backdrop-blur-sm flex items-center justify-center z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="bg-white rounded-2xl shadow-xl w-full max-w-6xl mx-4 sm:mx-6 lg:mx-8 p-4 sm:p-6 max-h-[95vh] overflow-y-auto"
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0.8 }}
      >
        <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-4 sm:mb-6">Edit Product</h3>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 sm:space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
            <input
              type="text"
              {...register("title")}
              placeholder="Product Name"
              className="w-full border border-gray-300 rounded-xl px-3 py-2 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              {...register("category")}
              placeholder="Category"
              className="w-full border border-gray-300 rounded-xl px-3 py-2 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              {...register("types")}
              placeholder="Type"
              className="w-full border border-gray-300 rounded-xl px-3 py-2 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              {...register("sku")}
              placeholder="SKU"
              className="w-full border border-gray-300 rounded-xl px-3 py-2 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="number"
              {...register("price")}
              placeholder="Price"
              className="w-full border border-gray-300 rounded-xl px-3 py-2 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <textarea
              {...register("description")}
              placeholder="Description"
              rows="3"
              className="w-full border border-gray-300 rounded-xl px-3 py-2 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-500 sm:col-span-2 lg:col-span-1"
            />
          </div>

          <div className="border-t pt-4 sm:pt-6">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-4 gap-3">
              <label className="text-base sm:text-lg font-semibold text-gray-700">Product Images (5 editable)</label>
              <div className="flex gap-2 flex-wrap">
                <button
                  type="button"
                  onClick={() => {
                    const input = document.createElement('input');
                    input.type = 'file';
                    input.accept = 'image/*';
                    input.multiple = true;
                    input.onchange = (e) => {
                      const files = Array.from(e.target.files);
                      if (files.length > 0) {
                        const newImagesPreview = new Array(5).fill(null);
                        files.slice(0, 5).forEach((file, index) => {
                          newImagesPreview[index] = file;
                        });
                        setEditProduct((prev) => ({
                          ...prev,
                          imagesPreview: newImagesPreview,
                        }));
                      }
                    };
                    input.click();
                  }}
                  className="text-xs sm:text-sm bg-green-500 hover:bg-green-600 text-white px-2 sm:px-3 py-1 sm:py-1.5 rounded-lg transition-colors flex-1 sm:flex-none"
                >
                  Upload All
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setEditProduct((prev) => ({
                      ...prev,
                      imagesPreview: new Array(5).fill(null),
                    }));
                  }}
                  className="text-xs sm:text-sm bg-red-500 hover:bg-red-600 text-white px-2 sm:px-3 py-1 sm:py-1.5 rounded-lg transition-colors flex-1 sm:flex-none"
                >
                  Clear All
                </button>
              </div>
            </div>
            
            <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4">
              {[0, 1, 2, 3, 4].map((index) => (
                <div key={index} className="flex flex-col items-center gap-2 sm:gap-3">
                  <div className="relative">
                    <img
                      src={
                        editProduct.imagesPreview?.[index]
                          ? URL.createObjectURL(editProduct.imagesPreview[index])
                          : editProduct.images?.[index] ||
                            "https://via.placeholder.com/150x150?text=No+Image"
                      }
                      alt={`Preview ${index + 1}`}
                      className={`w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 object-cover rounded-xl border-2 transition-colors ${
                        editProduct.imagesPreview?.[index] 
                          ? 'border-green-400 ring-2 ring-green-200' 
                          : 'border-gray-300 hover:border-blue-400'
                      }`}
                    />
                    {editProduct.imagesPreview?.[index] && (
                      <div className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 bg-green-500 text-white rounded-full w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center text-xs font-bold">
                        ✓
                      </div>
                    )}
                    {editProduct.images?.[index] && !editProduct.imagesPreview?.[index] && (
                      <div className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 bg-blue-500 text-white rounded-full w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center text-xs font-bold">
                        {index + 1}
                      </div>
                    )}
                  </div>
                  <div className="w-full">
                    <input
                      type="file"
                      accept="image/*"
                      onChange={(e) => {
                        const file = e.target.files[0];
                        if (file) {
                          const newImagesPreview = editProduct.imagesPreview
                            ? [...editProduct.imagesPreview]
                            : new Array(5).fill(null);
                          newImagesPreview[index] = file;
                          setEditProduct((prev) => ({
                            ...prev,
                            imagesPreview: newImagesPreview,
                          }));
                        }
                      }}
                      className="w-full text-xs file:mr-1 sm:mr-2 file:py-0.5 sm:py-1 file:px-1 sm:px-2 file:rounded-lg file:border-0 file:text-xs file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                    />
                  </div>
                  <div className="text-center">
                    <p className="text-xs text-gray-500">Image {index + 1}</p>
                    {editProduct.imagesPreview?.[index] && (
                      <p className="text-xs text-green-600 font-medium">New</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Summary of changes */}
            {editProduct.imagesPreview && editProduct.imagesPreview.some(img => img !== null) && (
              <div className="mt-3 sm:mt-4 p-2 sm:p-3 bg-green-50 border border-green-200 rounded-lg">
                <h4 className="text-xs sm:text-sm font-medium text-green-800 mb-2">Image Changes Summary:</h4>
                <div className="flex flex-wrap gap-1 sm:gap-2">
                  {editProduct.imagesPreview.map((img, index) => (
                    img && (
                      <div key={index} className="flex items-center gap-1 text-xs text-green-700">
                        <span className="bg-green-200 px-1 sm:px-2 py-0.5 sm:py-1 rounded text-xs">Image {index + 1}</span>
                        <span className="text-xs">→</span>
                        <span className="bg-green-100 px-1 sm:px-2 py-0.5 sm:py-1 rounded text-xs">New</span>
                      </div>
                    )
                  ))}
                </div>
              </div>
            )}

            {editProduct.images && editProduct.images.length > 0 && (
              <div className="mt-3 sm:mt-4 p-2 sm:p-3 bg-blue-50 border border-blue-200 rounded-lg">
                <h4 className="text-xs sm:text-sm font-medium text-blue-800 mb-2">Current Images:</h4>
                <div className="flex gap-1 sm:gap-2 flex-wrap">
                  {editProduct.images.map((img, index) => (
                    <div key={index} className="relative">
                      <img
                        src={img}
                        alt={`Current ${index + 1}`}
                        className="w-12 h-12 sm:w-16 sm:h-16 object-cover rounded-lg border border-blue-200"
                      />
                      <div className="absolute -top-0.5 -right-0.5 sm:-top-1 sm:-right-1 bg-blue-500 text-white rounded-full w-4 h-4 sm:w-5 sm:h-5 flex items-center justify-center text-xs font-bold">
                        {index + 1}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="flex flex-col sm:flex-row justify-end gap-2 sm:gap-3 mt-4 sm:mt-6 pt-3 sm:pt-4 border-t">
            <button
              type="button"
              onClick={() => setEditProduct(null)}
              className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-4 sm:px-6 py-2 rounded-xl font-medium transition-all duration-300 text-sm sm:text-base order-2 sm:order-1"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 sm:px-6 py-2 rounded-xl font-medium transition-all duration-300 text-sm sm:text-base order-1 sm:order-2"
            >
              Save Changes
            </button>
          </div>
        </form>
      </motion.div>
    </motion.div>
  );
};

export default EditProductForm;
