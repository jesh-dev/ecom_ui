import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "../../../Components/Navbar";
import Footer from "../../../Components/Footer";
import { products } from "./Products";
import { useCart } from "../../../Components/CartContext"; // Ensure this path is correct
import { toast } from "react-hot-toast";
import Breadcrumb from "./Breadcrumb";
// import SearchFilter from "../../../Components/SearchFilter";

export default function ProductPage() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [mainImage, setMainImage] = useState(null);

  const handleSelectProduct = (product) => {
    setSelectedProduct(product);
    setMainImage(product.image);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const { addToCart } = useCart();
  const handleAddToCart = () => {
    addToCart(selectedProduct);
    toast.success(`${selectedProduct.name} added to cart!`);
  }

  return (
    <>
    <Navbar/>
    {/* <SearchFilter/> */}
     <section className="bg-white dark:bg-black py-16 px-4">

    <div className="px-4 mt-10 py-10 max-w-7xl mx-auto">
          <Breadcrumb
            items={[
              { label: "Home", href: "/" },
              { label: "Products", href: "/products" },
              selectedProduct && { label: selectedProduct.name },
            ].filter(Boolean)}
          />
      <AnimatePresence>
        {selectedProduct && (
          <motion.div
            layout
            key={selectedProduct.id}
            className="bg-white dark:bg-black shadow-xl rounded-xl p-6 mb-10 flex flex-col md:flex-row gap-10  border-gray-200 dark:border-orange-800"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            <div className="md:w-1/2">
              <motion.img
                src={mainImage}
                alt={selectedProduct.name}
                className="w-full h-[400px] object-contain rounded-lg  border-gray-200 dark:border-orange-700 mb-4"
                initial={{ opacity: 0.5 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
              <div className="flex gap-3">
                {selectedProduct.gallery.map((img, idx) => (
                  <img
                    key={idx}
                    src={img}
                    onClick={() => setMainImage(img)}
                    className={`w-20 h-20 object-cover rounded  cursor-pointer transition-all duration-200"
                                                 ${
                                                   mainImage === img
                                                     ? "border-blue-500 dark:border-orange-500"
                                                     : "border-gray-300 dark:border-gray-600"
                                                 }`}
                    alt="thumb"
                  />
                ))}
              </div>
            </div>
            <div className="md:w-1/2 text-gray-900 dark:text-white">
              <h2 className="text-3xl font-bold mb-2">
                {selectedProduct.name}
              </h2>
              <p className="text-xl text-blue-600 dark:text-orange-600 font-semibold mb-4">
                ${selectedProduct.price}
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                {selectedProduct.description}
              </p>
              <div className="mb-6">
                <h4 className="font-semibold mb-2">Select Size</h4>
                <div className="flex gap-3">
                  {["X", "M", "L", "XL"].map((size) => (
                    <button
                      key={size}
                      className="px-4 py-2  border-gray-300 dark:border-orange-600 rounded hover:bg-blue-600 dark:hover:bg-orange-600 hover:text-white"
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
              <button
                className="mt-4 w-full md:w-auto px-6 py-3 bg-blue-600 hover:animate-pulse active:animate-ping dark:bg-orange-600 text-white rounded hover:bg-blue-700 transition"
                onClick={handleAddToCart}
              >
                Add to Cart
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <motion.div
            layout
            key={product.id}
            onClick={() => handleSelectProduct(product)}
            className="cursor-pointer bg-white dark:bg-black    border-blue-400 dark:border-orange-700 rounded-lg dark:hover:shadow-lg dark:hover:shadow-orange-600 overflow-hidden shadow hover:shadow-xl transition duration-700"
            whileHover={{ scale: 1.02 }}
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-60 group-hover:scale-110 object-contain  p-4 bg-gray-50 dark:bg-black"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                {product.name}
              </h3>
              <p className="text-blue-600 dark:text-orange-600 font-semibold">${product.price}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
            </section>
            <Footer/>
    </>
  );
}
