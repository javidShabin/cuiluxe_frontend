import React, { useEffect, useState } from "react";
import { axiosInstance } from "../config/axiosInstance";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

const PermiumProduct = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(20);
  const [totalPages, setTotalPages] = useState(1);
  const [types, setTypes] = useState([]);
  const [allCategories, setAllCategories] = useState([]);
  const [selectedType, setSelectedType] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async (page = 1) => {
    try {
      setLoading(true);
      const res = await axiosInstance.get(
        `/product/get-all-products?page=${page}&limit=${itemsPerPage}`
      );

      const fetchedProducts = res.data?.products || [];
      const pagination = res.data?.pagination || { totalPages: 1 };

      setProducts(fetchedProducts);
      setCurrentPage(page);
      setTotalPages(pagination.totalPages);

      // Fetch all products to get types and all categories
      const allRes = await axiosInstance.get("/product/get-all-products?page=1&limit=1000");
      const allProductsData = allRes.data?.products || [];
      const uniqueTypes = [...new Set(allProductsData.map((p) => p.types))];
      setTypes(uniqueTypes);

      setAllCategories(allProductsData.map((p) => ({ type: p.types, category: p.category })));

      setLoading(false);
    } catch (error) {
      console.error(error);
      toast.error("Failed to fetch products");
      setLoading(false);
    }
  };

  const addToCart = async (productId, image, itemName, price) => {
    try {
      const item = { productId, image, itemName, price, quantity: 1 };
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
  }

  // Filter products by type
  const selectType = async (type, page = 1) => {
    try {
      setSelectedType(type);
      setSelectedCategory("");
      setLoading(true);

      const encodedType = encodeURIComponent(type);
      const res = await axiosInstance.get(
        `/product/filter-type?type=${encodedType}&page=${page}&limit=${itemsPerPage}`
      );

      const fetchedProducts = res.data?.products || [];
      const pagination = res.data?.pagination || { totalPages: 1 };

      setProducts(fetchedProducts);
      setCurrentPage(pagination.currentPage || 1);
      setTotalPages(pagination.totalPages || 1);

      setLoading(false);
    } catch (error) {
      console.error(error);
      toast.error("Failed to fetch products for this type");
      setLoading(false);
    }
  };

  // Filter products by category (under selected type if any)
  const fetchProductsByCategory = async (category, page = 1) => {
    try {
      setSelectedCategory(category);
      setLoading(true);
      const url = `/product/filter-product?category=${encodeURIComponent(
        category
      )}${selectedType ? `&type=${encodeURIComponent(selectedType)}` : ""}&page=${page}&limit=${itemsPerPage}`;

      const res = await axiosInstance.get(url);

      const fetchedProducts = res.data?.products || [];
      const pagination = res.data?.pagination || { totalPages: 1 };

      setProducts(fetchedProducts);
      setCurrentPage(page);
      setTotalPages(pagination.totalPages || 1);

      setLoading(false);
      // Close sidebar on mobile after selecting category
      setSidebarOpen(false);
    } catch (error) {
      console.error(error);
      toast.error("Failed to fetch products for this category");
      setLoading(false);
    }
  };

  const goToPage = (page) => {
    if (selectedCategory) {
      fetchProductsByCategory(selectedCategory, page);
    } else if (selectedType) {
      selectType(selectedType, page);
    } else {
      fetchProducts(page);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <p className="text-gray-400 text-lg animate-pulse">Loading products...</p>
      </div>
    );
  }

  // Get categories for the selected type
  const categoriesToShow = selectedType
    ? [...new Set(allCategories.filter(c => c.type === selectedType).map(c => c.category))]
    : [...new Set(allCategories.map(c => c.category))];

  return (
    <div className="max-w-[95%] mx-auto py-10">
      <h2 className="text-3xl md:text-3xl font-extrabold mb-6 mt-10 text-center text-gray-800">
        Our Products
      </h2>

      {/* Type Filter Bar */}
      <div className="flex flex-wrap justify-center gap-3 mb-10">
        <button
          onClick={() => {
            setSelectedType("");
            setSelectedCategory("");
            setCurrentPage(1);
            fetchProducts(1);
          }}
          className={`px-4 py-2 rounded-full font-medium transition-all duration-300 ${
            !selectedType
              ? "bg-orange-500 text-white shadow-lg"
              : "bg-gray-100 text-gray-800 hover:bg-gray-200"
          }`}
        >
          All
        </button>
        {types.map((type) => (
          <button
            key={type}
            onClick={() => selectType(type)}
            className={`px-4 py-2 rounded-full font-medium transition-all duration-300 ${
              selectedType === type
                ? "bg-orange-500 text-white shadow-lg"
                : "bg-gray-100 text-gray-800 hover:bg-gray-200"
            }`}
          >
            {type}
          </button>
        ))}
      </div>

      {/* Mobile Filter Button */}
      <div className="lg:hidden mb-6">
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="bg-orange-500 text-white px-6 py-3 rounded-lg font-semibold shadow-lg hover:bg-orange-600 transition-all duration-300 flex items-center gap-2"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
          </svg>
          Filter Categories
        </button>
      </div>

      <div className="flex flex-col lg:flex-row gap-10">
        {/* Mobile Sidebar Overlay */}
        {sidebarOpen && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
            onClick={() => setSidebarOpen(false)}
          ></div>
        )}

        {/* Sidebar for categories */}
        <div className={`fixed lg:relative top-0 left-0 h-full lg:h-auto w-80 lg:w-1/5 bg-white lg:bg-gray-50 p-5 lg:rounded-2xl shadow-lg lg:shadow-md z-50 transform transition-transform duration-300 ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        }`}>
          <div className="flex items-center justify-between mb-4 lg:hidden">
            <h3 className="font-semibold text-lg">Categories</h3>
            <button
              onClick={() => setSidebarOpen(false)}
              className="text-gray-500 hover:text-gray-700"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <h3 className="font-semibold text-lg mb-4 hidden lg:block">Categories</h3>
          {categoriesToShow.length > 0 ? (
            <ul className="flex flex-col gap-2">
              <li
                onClick={() => {
                  setSelectedCategory("");
                  setSelectedType("");
                  setCurrentPage(1);
                  fetchProducts(1);
                }}
                className={`px-3 py-2 rounded-lg cursor-pointer ${
                  !selectedCategory && !selectedType ? "bg-orange-100" : "hover:bg-orange-100"
                }`}
              >
                All
              </li>
              {categoriesToShow.map((cat) => (
                <li
                  key={cat}
                  onClick={() => fetchProductsByCategory(cat)}
                  className={`px-3 py-2 rounded-lg cursor-pointer ${
                    selectedCategory === cat ? "bg-orange-100" : "hover:bg-orange-100"
                  }`}
                >
                  {cat}
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-400">No categories found</p>
          )}
        </div>

        {/* Products Grid */}
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 flex-1">
          {products?.map((product) => (
            <div
              key={product._id || product.sku}
              className="bg-gradient-to-b from-white to-gray-50 rounded-2xl shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 overflow-hidden flex flex-col"
            >
              <Link to={`/product/${product._id}`}>
              <div  className="relative w-full h-64 overflow-hidden rounded-t-2xl">
                <img
                  src={product.images && product.images.length > 0 ? product.images[0] : product.image}
                  alt={product.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
                <span className="absolute top-3 right-3 bg-orange-500 text-white text-sm font-semibold px-3 py-1 rounded-full shadow-md">
                  ₹{product.price}
                </span>
              </div>
              </Link>
              

              <div className="p-5 flex flex-col flex-1">
                <h3 className="font-bold text-lg md:text-xl mb-1 text-gray-800 truncate">
                  {product.title}
                </h3>
                <p className="text-sm text-gray-500 mb-1 truncate">Type: {product.types}</p>
                <p className="text-sm text-gray-500 mb-1 truncate">Category: {product.category}</p>
                <p className="text-sm text-gray-500 mb-3 truncate">Code: {product.sku}</p>
                <button
                onClick={() =>
                  addToCart(
                    product._id,
                    product.images && product.images.length > 0 ? product.images[0] : product.image,
                    product.title,
                    product.price
                  )
                }
                 className="mt-auto bg-gradient-to-r from-orange-400 to-orange-600 text-white font-semibold py-2 rounded-xl shadow-md hover:scale-105 transition-all duration-300">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center mt-12 gap-3 flex-wrap">
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i + 1}
              onClick={() => goToPage(i + 1)}
              className={`px-5 py-2 rounded-lg font-medium transition-all duration-300 ${
                currentPage === i + 1
                  ? "bg-orange-500 text-white shadow-lg"
                  : "bg-gray-100 text-gray-800 hover:bg-gray-200 hover:shadow-md"
              }`}
            >
              {i + 1}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default PermiumProduct;
