import { useCart } from "../Components/CartContext";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import empty from '../assets/Images/empty.png';
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";


export default function CartPage() {
  const { cartItems, removeFromCart, updateQuantity, clearCart } = useCart();
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({ name: "", address: "", phone: "" });
  const [confirmationModal, setConfirmationModal] = useState(false);

  // const total = cartItems.reduce((sum, item) => {
  //   const price = parseFloat(item.price.replace("$", ""));
  //   return sum + price * item.quantity;
  // }, 0);
  const total = cartItems.reduce((sum, item) => {
  const price = Number(item.price.toString().replace(/[^0-9.]/g, ""));
  return sum + price * item.quantity;
}, 0);

  const handlePay = () => {
    setIsModalOpen(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsModalOpen(false);
    setConfirmationModal(true);
  };

  const handleConfirmationClose = () => {
    setConfirmationModal(false);
    clearCart();
  };

  return (
    <>
    <Navbar/>
    <section className="min-h-screen dark:bg-black  bg-white px-4 py-20">
      {cartItems.length === 0 ? (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center flex flex-col items-center justify-center h-full"
        >
          <img
            src= { empty}
            alt="Empty cart"
            className="mx-auto w-60 h-60 mb-6"
          />
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 dark:text-white mb-2">
            Your cart is empty
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Looks like you haven’t added anything yet.
          </p>
          <button
            onClick={() => navigate("/products")}
            className="px-6 py-2 bg-blue-600 dark:bg-orange-600 text-white rounded-full hover:bg-blue-700 transition"
          >
            Continue Shopping
          </button>
        </motion.div>
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-2xl font-bold text-white dark:text-white mb-6">
            Your Cart
          </h2>

          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex items-center gap-4 mb-4 bg-gray-100 dark:bg-orange-600/10 p-4 rounded-lg"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-20 h-20 object-cover rounded"
              />
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                  {item.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">{item.price}</p>

                <div className="flex items-center gap-2 mt-2">
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    disabled={item.quantity === 1}
                    className="px-2 py-1 rounded bg-blue-500 dark:bg-orange-700 text-black dark:text-white"
                  >
                    -
                  </button>
                  <span className="px-3 text-gray-800 dark:text-white font-medium">
                    {item.quantity}
                  </span>
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    className="px-2 py-1 rounded bg-blue-500 dark:bg-orange-700 text-black dark:text-white"
                  >
                    +
                  </button>
                </div>
              </div>

              <button
                onClick={() => removeFromCart(item.id)}
                className="ml-auto text-red-500 hover:text-red-700 text-sm"
              >
                Remove
              </button>
            </div>
          ))}

          <div className="mt-8 p-4 bg-gray-100 dark:bg-orange-800/10 rounded-lg">
            <div className="flex justify-between text-lg font-semibold text-gray-800 dark:text-white">
              <span>Total:</span>
              <span>${total.toFixed(2)}</span>
            </div>

            <button
              onClick={handlePay}
              className="w-full mt-4 py-3 bg-green-600 hover:bg-green-700 text-white rounded-md font-semibold transition"
            >
              Pay 
            </button>
          </div>
        </motion.div>
      )}

      {/* Shipping and Billing Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50 p-4"
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="bg-white dark:bg-gray-900 p-6 rounded-lg max-w-md w-full relative"
            >
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-4 right-4 text-gray-700 dark:text-gray-300 text-xl"
              >
                &times;
              </button>
              <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4">Shipping & Billing</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full px-4 py-2 border rounded dark:bg-gray-800 dark:border-gray-600 dark:text-white"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                />
                <input
                  type="text"
                  placeholder="Shipping Address"
                  className="w-full px-4 py-2 border rounded dark:bg-gray-800 dark:border-gray-600 dark:text-white"
                  value={formData.address}
                  onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                  required
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full px-4 py-2 border rounded dark:bg-gray-800 dark:border-gray-600 dark:text-white"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  required
                />
                <button
                  type="submit"
                  className="w-full py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                >
                  Confirm & Pay
                </button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Confirmation Modal */}
      <AnimatePresence>
        {confirmationModal && (
            <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="bg-white dark:bg-gray-900 p-6 rounded-lg max-w-sm w-full text-center"
              >
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
                Payment Successful!
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Your order has been placed successfully. Thank you for shopping with us!
              </p>
              <button
                onClick={handleConfirmationClose}
                className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded"
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
    <Footer/>
                </>
  );
}
