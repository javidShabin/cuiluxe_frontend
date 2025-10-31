import React, { useEffect, useState } from "react";
import { FaPlus, FaMinus, FaTrash } from "react-icons/fa";
import { FaIndianRupeeSign } from "react-icons/fa6";
import { axiosInstance } from "../config/axiosInstance";
import toast from "react-hot-toast";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import Swal from "sweetalert2";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [clientName, setClientName] = useState("");
  const [clientAddress, setClientAddress] = useState("");
  const [clientEmail, setClientEmail] = useState("");
  const [clientPhone, setClientPhone] = useState("");

  const seller = {
    name: "Cuiluxe",
    address: "123 Kitchen Ave, Suite 7, City, Country",
    email: "contact@cuiluxe.com",
    phone: "+1 (555) 123-4567",
  };

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
  if (!clientName || !clientAddress || !clientEmail || !clientPhone) {
    Swal.fire({
      icon: 'warning',
      title: 'Missing Details',
      text: 'Please add client name, address, email, and phone to generate the PDF.',
      confirmButtonColor: '#f97316', // orange
    });
    return;
  }

  const doc = new jsPDF("p", "mm", "a4");
  const pageWidth = doc.internal.pageSize.getWidth();
  const marginX = 14;
  const brandColor = [33, 53, 94]; // deep navy
  const grayText = [60, 60, 60];

  // Header Bar
  doc.setFillColor(...brandColor);
  doc.rect(0, 0, pageWidth, 40, "F");
  doc.setTextColor(255, 255, 255);
  // Left: logo placeholder and company name
  doc.setFont("helvetica", "bold");
  doc.setFontSize(22);
  doc.text("CUILUXE", marginX, 24);
  // Right: INVOICE label
  doc.setFontSize(26);
  doc.text("INVOICE", pageWidth - marginX, 20, { align: "right" });

  // Company & Invoice Meta (two columns beneath header)
  let cursorY = 50;
  doc.setTextColor(...grayText);
  const invoiceNo = `INV-${Date.now().toString().slice(-6)}`;
  const issuedDate = new Date().toLocaleDateString();
  // Right meta stack
  doc.setFont("helvetica", "bold");
  doc.setFontSize(10);
  doc.text("Invoice No :", pageWidth - 60, cursorY);
  doc.text("Invoice Date :", pageWidth - 60, cursorY + 6);
  doc.setFont("helvetica", "normal");
  doc.text(invoiceNo, pageWidth - marginX, cursorY, { align: "right" });
  doc.text(issuedDate, pageWidth - marginX, cursorY + 6, { align: "right" });

  // Seller and Bill To blocks (two columns with labels)
  cursorY += 16;
  const colGap = 8;
  const colWidth = (pageWidth - marginX * 2 - colGap) / 2;
  const leftX = marginX;
  const rightX = marginX + colWidth + colGap;
  const labelColor = [120, 120, 120];

  // Left: Seller
  doc.setFont("helvetica", "bold");
  doc.setFontSize(11);
  doc.text("Seller", leftX, cursorY);
  doc.setFont("helvetica", "normal");
  doc.setFontSize(10);
  doc.setTextColor(...labelColor);
  doc.text("Name", leftX, cursorY + 6);
  doc.text("Address", leftX, cursorY + 12);
  doc.text("Mail", leftX, cursorY + 18);
  doc.text("Phone", leftX, cursorY + 24);
  doc.setTextColor(...grayText);
  doc.text(`:  ${seller.name}`, leftX + 24, cursorY + 6);
  doc.text(`:  ${seller.address}`, leftX + 24, cursorY + 12);
  doc.text(`:  ${seller.email}`, leftX + 24, cursorY + 18);
  doc.text(`:  ${seller.phone}`, leftX + 24, cursorY + 24);

  // Right: Bill To
  doc.setFont("helvetica", "bold");
  doc.setTextColor(...grayText);
  doc.text("Bill To", rightX, cursorY);
  doc.setFont("helvetica", "normal");
  doc.setFontSize(10);
  doc.setTextColor(...labelColor);
  doc.text("Name", rightX, cursorY + 6);
  doc.text("Address", rightX, cursorY + 12);
  doc.text("Mail", rightX, cursorY + 18);
  doc.text("Phone", rightX, cursorY + 24);
  doc.setTextColor(...grayText);
  doc.text(`:  ${clientName}`, rightX + 26, cursorY + 6);
  doc.text(`:  ${clientAddress}`, rightX + 26, cursorY + 12);
  doc.text(`:  ${clientEmail}`, rightX + 26, cursorY + 18);
  doc.text(`:  ${clientPhone}`, rightX + 26, cursorY + 24);

  // Advance cursor for table start beneath blocks
  cursorY += 34;

  // Table
  const columns = [
    { header: "No.", dataKey: "idx" },
    { header: "Description", dataKey: "name" },
    { header: "Quantity", dataKey: "qty" },
    { header: "Item Price", dataKey: "price" },
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
    startY: cursorY,
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
      qty: { cellWidth: 20, halign: "center" },
      price: { cellWidth: 30, halign: "right" },
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

      {/* Invoice Header: Seller + Bill To */}
      <div className="mb-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg border border-gray-200 p-4">
          <h3 className="text-sm font-semibold text-gray-900 mb-2">Seller</h3>
          <p className="text-sm text-gray-700">{seller.name}</p>
          <p className="text-sm text-gray-700">{seller.address}</p>
          <p className="text-sm text-gray-700">{seller.email}</p>
          <p className="text-sm text-gray-700">{seller.phone}</p>
        </div>
        <div className="bg-white rounded-lg border border-gray-200 p-4">
          <h3 className="text-sm font-semibold text-gray-900 mb-3">Bill To</h3>
          <div className="grid grid-cols-1 gap-3">
            <input
              type="text"
              placeholder="Client name"
              value={clientName}
              onChange={(e) => setClientName(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-400 focus:outline-none text-sm"
            />
            <input
              type="text"
              placeholder="Client address"
              value={clientAddress}
              onChange={(e) => setClientAddress(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-400 focus:outline-none text-sm"
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <input
                type="email"
                placeholder="Client email"
                value={clientEmail}
                onChange={(e) => setClientEmail(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-400 focus:outline-none text-sm"
              />
              <input
                type="tel"
                placeholder="Client phone"
                value={clientPhone}
                onChange={(e) => setClientPhone(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-400 focus:outline-none text-sm"
              />
            </div>
            <p className="text-xs text-gray-500">PDF can be generated only after all client details are filled.</p>
          </div>
        </div>
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
                  <p className="text-sm text-gray-600 flex items-center"><FaIndianRupeeSign />{item.price.toFixed(2)}</p>
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
            <p className="text-lg font-semibold text-gray-900 flex items-center">
              Total: <FaIndianRupeeSign />{totalPrice.toFixed(2)}
            </p>
            <button
              onClick={handleCheckout}
              disabled={!clientName || !clientAddress || !clientEmail || !clientPhone}
              className={`mt-4 sm:mt-0 px-6 py-2 rounded-lg transition ${(!clientName || !clientAddress || !clientEmail || !clientPhone) ? 'bg-gray-300 text-gray-600 cursor-not-allowed' : 'bg-orange-500 text-white hover:bg-orange-600'}`}
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
