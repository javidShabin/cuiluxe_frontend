import React, { useEffect, useState } from "react";
import { FaPlus, FaMinus, FaTrash } from "react-icons/fa";
import { axiosInstance } from "../config/axiosInstance";
import toast from "react-hot-toast";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import Swal from "sweetalert2";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [clientName, setClientName] = useState("");

  useEffect(() => {
    const getCart = async () => {
      try {
        const response = await axiosInstance.get("/cart/get-cart");
        const items = response.data.cart?.items || [];
        setCartItems(items);
        const total = items.reduce((acc, item) => acc + item.quantity * item.price, 0);
        setTotalPrice(total);
      } catch (error) {
        console.error("Error loading cart:", error);
        toast.error("Failed to load cart items");
      }
    };
    getCart();
  }, []);

  const handleIncrease = async (productId) => {
    try {
      const response = await axiosInstance.put("/cart/update-cart", {
        productId,
        action: "increase",
      });
      const items = response.data.cart?.items || [];
      setCartItems(items);
      setTotalPrice(items.reduce((acc, i) => acc + i.quantity * i.price, 0));
    } catch (error) {
      console.error("Error increasing quantity:", error);
      toast.error("Failed to update quantity");
    }
  };

  const handleDecrease = async (productId) => {
    try {
      const response = await axiosInstance.put("/cart/update-cart", {
        productId,
        action: "decrease",
      });
      const items = response.data.cart?.items || [];
      setCartItems(items);
      setTotalPrice(items.reduce((acc, i) => acc + i.quantity * i.price, 0));
    } catch (error) {
      console.error("Error decreasing quantity:", error);
      toast.error("Failed to update quantity");
    }
  };

  const handleRemove = async (productId) => {
    console.log(productId)
    try {
      const response = await axiosInstance.delete('/cart/remove-item', {
        data: {productId}
      });
      
      if (response.data && response.data.message) {
        toast.success(response.data.message);
      } else {
        toast.success("Product removed from cart");
      }
      
      // Update cart items and total price
      const items = response.data.cart?.items || [];
      setCartItems(items);
      setTotalPrice(items.reduce((acc, i) => acc + i.quantity * i.price, 0));
    } catch (error) {
      console.error("Error removing product:", error);
      toast.error(error.response?.data?.message || "Failed to remove product from cart");
    }
  };
  

const handleCheckout = () => {
  if (!clientName) {
    Swal.fire({
      icon: 'warning',
      title: 'Missing Name',
      text: 'Please enter your name before generating the invoice.',
      confirmButtonColor: '#f97316', // orange
    });
    return;
  }

  const doc = new jsPDF("p", "mm", "a4");
  const pageWidth = doc.internal.pageSize.getWidth();
  const marginX = 14;
  const brandColor = [249, 115, 22]; // orange-500
  const grayText = [80, 80, 80];

  // Header Bar
  doc.setFillColor(...brandColor);
  doc.rect(0, 0, pageWidth, 34, "F");
  doc.setTextColor(255, 255, 255);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(20);
  doc.text("CUILUXE", marginX, 20);
  doc.setFontSize(11);
  doc.setFont("helvetica", "normal");
  doc.text("Invoice", pageWidth - marginX, 20, { align: "right" });

  // Company & Invoice Meta
  let cursorY = 44;
  doc.setTextColor(...grayText);
  doc.setFontSize(12);
  doc.setFont("helvetica", "bold");
  doc.text("Cuiluxe", marginX, cursorY);
  doc.setFont("helvetica", "normal");
  doc.setFontSize(10);
  doc.text("Premium kitchen & dining solutions", marginX, cursorY + 6);
  doc.text("contact@cuiluxe.com", marginX, cursorY + 12);

  const invoiceNo = `INV-${Date.now().toString().slice(-6)}`;
  const issuedDate = new Date().toLocaleDateString();
  const rightColX = pageWidth - marginX;
  doc.setFont("helvetica", "bold");
  doc.text("Invoice No:", rightColX - 40, cursorY);
  doc.setFont("helvetica", "normal");
  doc.text(invoiceNo, rightColX, cursorY, { align: "right" });
  doc.setFont("helvetica", "bold");
  doc.text("Date:", rightColX - 40, cursorY + 6);
  doc.setFont("helvetica", "normal");
  doc.text(issuedDate, rightColX, cursorY + 6, { align: "right" });

  // Bill To
  cursorY += 22;
  doc.setDrawColor(235, 235, 235);
  doc.roundedRect(marginX, cursorY - 8, pageWidth - marginX * 2, 20, 2, 2);
  doc.setFont("helvetica", "bold");
  doc.text("Bill To", marginX + 4, cursorY);
  doc.setFont("helvetica", "normal");
  doc.text(`${clientName}`, marginX + 4, cursorY + 7);

  // Table
  const columns = [
    { header: "#", dataKey: "idx" },
    { header: "Item", dataKey: "name" },
    { header: "Price", dataKey: "price" },
    { header: "Qty", dataKey: "qty" },
    { header: "Total", dataKey: "total" },
  ];
  const rows = cartItems.map((item, index) => ({
    idx: index + 1,
    name: item.itemName,
    price: `INR ${item.price.toFixed(2)}`,
    qty: item.quantity,
    total: `INR ${(item.price * item.quantity).toFixed(2)}`,
  }));

  autoTable(doc, {
    startY: cursorY + 20,
    columns,
    body: rows,
    styles: { fontSize: 10, textColor: [55, 55, 55] },
    headStyles: {
      fillColor: brandColor,
      textColor: [255, 255, 255],
      fontStyle: "bold",
      halign: "left",
    },
    columnStyles: {
      idx: { cellWidth: 10, halign: "center" },
      name: { cellWidth: 80 },
      price: { cellWidth: 30, halign: "right" },
      qty: { cellWidth: 15, halign: "center" },
      total: { cellWidth: 35, halign: "right" },
    },
    alternateRowStyles: { fillColor: [249, 249, 249] },
    theme: "grid",
    margin: { left: marginX, right: marginX },
  });

  // Totals box (right aligned)
  const afterTableY = doc.lastAutoTable.finalY + 8;
  const boxWidth = 70;
  const boxX = pageWidth - marginX - boxWidth;
  const lineHeight = 7;

  doc.setDrawColor(235, 235, 235);
  doc.roundedRect(boxX, afterTableY, boxWidth, 3 * lineHeight + 10, 2, 2);

  const subtotal = cartItems.reduce((sum, i) => sum + i.price * i.quantity, 0);
  const grandTotal = totalPrice;

  doc.setFontSize(10);
  doc.setTextColor(90, 90, 90);
  doc.text("Subtotal", boxX + 6, afterTableY + lineHeight);
  doc.text(`INR ${subtotal.toFixed(2)}`, boxX + boxWidth - 6, afterTableY + lineHeight, { align: "right" });

  // Divider
  doc.setDrawColor(235, 235, 235);
  doc.line(boxX + 6, afterTableY + lineHeight + 3, boxX + boxWidth - 6, afterTableY + lineHeight + 3);

  // Grand Total emphasized
  doc.setFont("helvetica", "bold");
  doc.setTextColor(...brandColor);
  doc.text("Grand Total", boxX + 6, afterTableY + 2 * lineHeight + 6);
  doc.text(`INR ${grandTotal.toFixed(2)}`, boxX + boxWidth - 6, afterTableY + 2 * lineHeight + 6, { align: "right" });

  // Footer
  const footerY = 286;
  doc.setTextColor(140, 140, 140);
  doc.setFont("helvetica", "normal");
  doc.setFontSize(9);
  doc.text("Thank you for choosing CUILUXE.", marginX, footerY);
  doc.text("cuiluxe.com", pageWidth - marginX, footerY, { align: "right" });

  doc.save(`Cuiluxe_Invoice_${invoiceNo}.pdf`);
};

  return (
    <section className="max-w-6xl mx-auto px-4 py-12">
      <h2 className="text-1xl font-semibold text-gray-900 mb-8 text-center">
        Your Cart
      </h2>

      {/* Client Name Input */}
      <div className="mb-8 flex justify-center">
        <input
          type="text"
          placeholder="Enter your name"
          value={clientName}
          onChange={(e) => setClientName(e.target.value)}
          className="w-full max-w-sm px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-400 focus:outline-none text-sm"
        />
      </div>

      {cartItems.length === 0 ? (
        <p className="text-center text-gray-500 text-base">Your cart is empty.</p>
      ) : (
        <>
          <div className="space-y-4">
            {cartItems.map((item) => (
              <div
                key={item._id || item.productId}
                className="flex items-center justify-between p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-20 h-20 flex-shrink-0 rounded-lg overflow-hidden">
                  <img src={item.image} alt={item.itemName} className="w-full h-full object-cover" />
                </div>

                <div className="flex-1 ml-4">
                  <h3 className="text-md font-medium text-gray-900">{item.itemName}</h3>
                  <p className="text-sm text-gray-600">${item.price.toFixed(2)}</p>
                </div>

                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => handleDecrease(item.productId._id ? item.productId._id : item.productId)}
                    className="p-2 rounded-md bg-gray-200 hover:bg-gray-300 transition"
                  >
                    <FaMinus size={12} />
                  </button>
                  <span className="w-6 text-center">{item.quantity}</span>
                  <button
                    onClick={() => handleIncrease(item.productId._id ? item.productId._id : item.productId)}
                    className="p-2 rounded-md bg-gray-200 hover:bg-gray-300 transition"
                  >
                    <FaPlus size={12} />
                  </button>
                </div>

                <button
                  onClick={() => handleRemove(item.productId._id ? item.productId._id : item.productId)}
                  className="ml-4 p-2 rounded-md bg-red-500 hover:bg-red-600 text-white transition"
                >
                  <FaTrash size={12} />
                </button>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-col sm:flex-row justify-between items-center bg-gray-100 p-6 rounded-lg">
            <span className="text-lg font-semibold text-gray-900">
              Total: ${totalPrice.toFixed(2)}
            </span>
            <button
              onClick={handleCheckout}
              className="mt-4 sm:mt-0 px-6 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition"
            >
              Proceed to Checkout
            </button>
          </div>
        </>
      )}
    </section>
  );
};

export default Cart;
