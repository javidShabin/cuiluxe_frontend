import React, { useEffect, useState } from "react";
import { axiosInstance } from "../config/axiosInstance";
import { FaTrash, FaEdit, FaPlus } from "react-icons/fa";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useForm } from "react-hook-form";
import EditProductForm from "../components/EditProductForm";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [deleteId, setDeleteId] = useState(null);
  const [editProduct, setEditProduct] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [totalProducts, setTotalProducts] = useState(0);
  const pageSize = 20;
  const navigate = useNavigate();

  const { register, handleSubmit, reset } = useForm();

  useEffect(() => {
    fetchProducts(currentPage);
  }, [currentPage]);

  const fetchProducts = async (page = 1) => {
    try {
      setLoading(true);
      const res = await axiosInstance.get(`/product/get-all-products?page=${page}&limit=${pageSize}`);
      const data = res.data;

      setProducts(data.products);
      setTotalPages(data.pagination.totalPages);
      setTotalProducts(data.pagination.totalProducts);
      setLoading(false);
    } catch (error) {
      console.error(error);
      toast.error("Failed to fetch products");
      setLoading(false);
    }
  };

  useEffect(() => {
    if (currentPage > totalPages && totalPages > 0) {
      setCurrentPage(totalPages);
    }
  }, [totalPages, currentPage]);

  const confirmDelete = (id) => setDeleteId(id);

  const handleRemove = async () => {
    try {
      await axiosInstance.delete(`/product/delete-product/${deleteId}`);
      fetchProducts(currentPage);
      toast.success("Product removed successfully");
      setDeleteId(null);
    } catch (error) {
      console.error(error);
      toast.error("Failed to remove product");
    }
  };

  const handleEdit = (product) => {
    setEditProduct({
      ...product,
      images: product.images || [product.image], // Ensure array of images
      imagesPreview: null, // Reset preview images
    });
  };

  const submitEdit = async (data) => {
    try {
      const formData = new FormData();
  
      // Always send text fields (even if empty)
      formData.append("title", data.title || "");
      formData.append("category", data.category || "");
      formData.append("types", data.types || "");
      formData.append("sku", data.sku || "");
      formData.append("price", data.price || "");
      formData.append("description", data.description || "");
      formData.append("isPackage", data.isPackage ? 'true' : 'false');
  
      // Build existingImages array (copy)
      let existing = Array.isArray(editProduct.images) ? [...editProduct.images] : [];
  
      // If user selected new files, mark their positions as null in existing array
      if (editProduct.imagesPreview && editProduct.imagesPreview.some(f => f != null)) {
        // Ensure existing has same length (5)
        while (existing.length < 5) existing.push(null);
  
        // Append files in index order and mark the slot as null
        for (let i = 0; i < 5; i++) {
          const file = editProduct.imagesPreview?.[i];
          if (file) {
            // mark to be replaced
            existing[i] = null;
          }
        }
  
        // Attach existingImages first (so backend sees which slots need replacement)
        formData.append("existingImages", JSON.stringify(existing));
  
        // Then append files in index order (so order of uploaded files matches null slots)
        for (let i = 0; i < 5; i++) {
          const file = editProduct.imagesPreview?.[i];
          if (file) {
            formData.append("images", file);
          }
        }
      } else {
        // No new files: just send existing images array
        formData.append("existingImages", JSON.stringify(existing));
      }
  
      // IMPORTANT: DO NOT set Content-Type manually. Let browser set boundary.
      await axiosInstance.put(
        `/product/update-product/${editProduct._id}`,
        formData
        // no headers override here
      );
  
      fetchProducts(currentPage);
      toast.success("Product updated successfully");
      setEditProduct(null);
    } catch (error) {
      console.error("submitEdit error:", error);
      toast.error(error.response?.data?.message || "Failed to update product");
    }
  };

  const handleAddMenu = () => navigate("/admin/add-product");

  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = Math.min(startIndex + pageSize, totalProducts);

  const goToPage = (page) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section className="max-w-7xl mx-auto px-4 py-12 mt-24 relative">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-3 sm:gap-0">
        <h2 className="text-2xl font-bold text-gray-900 tracking-tight">Product Management</h2>
        <button
          onClick={handleAddMenu}
          className="flex items-center gap-2 bg-gradient-to-r from-orange-500 to-orange-600 text-white px-4 py-2 rounded-xl hover:shadow-lg transition-all duration-300 text-sm font-medium"
        >
          <FaPlus className="text-white" /> Add Product
        </button>
      </div>

      {loading ? (
        <p className="text-center text-gray-500 text-lg font-medium animate-pulse">Loading products...</p>
      ) : products.length === 0 ? (
        <p className="text-center text-gray-500 text-lg font-medium">No products found.</p>
      ) : (
        <>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {products.map((product) => (
              <div
                key={product._id}
                className="bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 p-4 flex flex-col justify-between border border-gray-100 hover:-translate-y-1"
              >
                <div className="w-full h-32 sm:h-36 rounded-xl overflow-hidden mb-3 bg-gray-50">
                  <img
                    src={product.images?.[0] || "https://via.placeholder.com/300"}
                    alt={product.title}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>

                <div className="space-y-1">
                  <h3 className="text-base font-semibold text-gray-900 truncate">{product.title}</h3>
                  <p className="text-xs text-gray-500 truncate">
                    Category: <span className="text-gray-700 font-medium">{product.category}</span>
                  </p>
                  <p className="text-xs text-gray-500 truncate">
                    Type: <span className="text-gray-700 font-medium">{product.types}</span>
                  </p>
                  <p className="text-xs text-gray-500 truncate">
                    SKU: <span className="text-gray-700 font-medium">{product.sku}</span>
                  </p>
                  <p className="text-orange-600 font-semibold text-sm mt-1">&#8377;{product.price}</p>
                </div>

                <div className="flex justify-between mt-4">
                  <button
                    onClick={() => handleEdit(product)}
                    className="flex-1 flex items-center justify-center gap-1 bg-gradient-to-r from-blue-500 to-blue-600 text-white px-2 py-1.5 rounded-lg hover:shadow-md transition-all duration-300 text-xs font-medium"
                  >
                    <FaEdit size={12} /> Edit
                  </button>
                  <button
                    onClick={() => confirmDelete(product._id)}
                    className="flex-1 flex items-center justify-center gap-1 bg-gradient-to-r from-red-500 to-red-600 text-white px-2 py-1.5 rounded-lg hover:shadow-md transition-all duration-300 ml-2 text-xs font-medium"
                  >
                    <FaTrash size={12} /> Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination controls */}
          <div className="mt-10">
            <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-between">
              <p className="text-xs sm:text-sm text-gray-500">
                Showing <span className="font-semibold text-gray-700">{totalProducts === 0 ? 0 : startIndex + 1}</span>
                – <span className="font-semibold text-gray-700">{endIndex}</span> of <span className="font-semibold text-gray-700">{totalProducts}</span>
              </p>
              <div className="w-full sm:w-auto overflow-x-auto">
                <div className="inline-flex items-center gap-2 whitespace-nowrap select-none">
                  <button
                    aria-label="Previous page"
                    onClick={() => goToPage(currentPage - 1)}
                    disabled={currentPage === 1}
                    className={`px-2 sm:px-3 py-2 rounded-lg text-xs sm:text-sm font-medium border ${currentPage === 1
                        ? "text-gray-400 border-gray-200 cursor-not-allowed"
                        : "text-gray-700 border-gray-300 hover:bg-gray-50"
                      }`}
                  >
                    Prev
                  </button>

                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                    <button
                      aria-label={`Go to page ${page}`}
                      key={page}
                      onClick={() => goToPage(page)}
                      className={`min-w-[2.25rem] px-2 sm:px-3 py-2 rounded-lg text-xs sm:text-sm font-medium border text-center ${currentPage === page
                          ? "bg-orange-500 border-orange-500 text-white"
                          : "text-gray-700 border-gray-300 hover:bg-gray-50"
                        }`}
                    >
                      {page}
                    </button>
                  ))}

                  <button
                    aria-label="Next page"
                    onClick={() => goToPage(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className={`px-2 sm:px-3 py-2 rounded-lg text-xs sm:text-sm font-medium border ${currentPage === totalPages
                        ? "text-gray-400 border-gray-200 cursor-not-allowed"
                        : "text-gray-700 border-gray-300 hover:bg-gray-50"
                      }`}
                  >
                    Next
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      )}

      {/* Delete Modal */}
      <AnimatePresence>
        {deleteId && (
          <motion.div
            className="fixed inset-0 bg-white/30 backdrop-blur-sm flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white rounded-2xl shadow-xl w-80 p-6 text-center"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Confirm Deletion</h3>
              <p className="text-sm text-gray-500 mb-6">
                Are you sure you want to delete this product? This action cannot be undone.
              </p>
              <div className="flex justify-center gap-4">
                <button
                  onClick={handleRemove}
                  className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-xl font-medium transition-all duration-300"
                >
                  Delete
                </button>
                <button
                  onClick={() => setDeleteId(null)}
                  className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-4 py-2 rounded-xl font-medium transition-all duration-300"
                >
                  Cancel
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Edit Modal */}
      <AnimatePresence>
        {editProduct && (
          <EditProductForm
            editProduct={editProduct}
            setEditProduct={setEditProduct}
            onSubmit={submitEdit}
          />
        )}
      </AnimatePresence>
    </section>
  );
};

export default ProductList;
