import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useCart } from "../Components/CartContext"; // Ensure this path is correct
import bottle from '../assets/Images/bottle.png'
import buds1 from '../assets/Images/buds1.png';
import bts1c from '../assets/Images/bts1c.png';
import watch1 from '../assets/Images/watch1.png';
import watch1a from '../assets/Images/watch1a.png';
import ps1 from '../assets/Images/ps1.png';
import mac1a from '../assets/Images/mac1a.png';
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";



const products = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: "$99",
    image: buds1,
    description: "High quality wireless headphones with noise cancellation.",
    sizes: ["M", "L", "XL"],
    category: "Electronics"
  },
  {
    id: 2,
    name: "Smart Watch",
    price: "$149",
    image: watch1a,
    description: "Stay connected and track your fitness on the go.",
    sizes: ["M", "L"],
    category: "Wearables"
  },
  {
    id: 3,
    name: "Gaming Mouse",
    price: "$59",
    image: ps1,
    description: "Ergonomic gaming mouse with customizable buttons.",
    sizes: ["L", "XL"],
    category: "Accessories"
  },
  {
    id: 4,
    name: "Bluetooth Speaker",
    price: "$89",
    image: bts1c,
    description: "Portable speaker with powerful bass and clear sound.",
    sizes: ["S", "M", "L"],
    category: "Electronics"
  },
  {
    id: 5,
    name: "Smart Watch",
    price: "$109",
    image: watch1,
    description: "Stay connected and track your fitness with this stylish smartwatch.",
    sizes: ["S", "M", "L"],
    category: "Wearables"
  },
  {
    id: 6,
    name: "MacBook Pro",
    price: "$190",
    image: mac1a,
    description: "Portable speaker with powerful bass and clear sound.",
    sizes: ["S", "M", "L"],
    category: "Electronics"
  },
];

const categories = ["All", ...new Set(products.map((p) => p.category))];

export default function ProductGrid() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [filter, setFilter] = useState("All");
  const [search, setSearch] = useState("");
  const { addToCart } = useCart();
//   const navigate = useNavigate();

  const filteredProducts = products.filter((p) => {
    const matchesCategory = filter === "All" || p.category === filter;
    const matchesSearch = p.name.toLowerCase().includes(search.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section className="bg-white dark:bg-black py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-gray-900 dark:text-white mb-6 text-center"
        >
          Featured Products
        </motion.h2>

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
          <div className="flex gap-2 flex-wrap justify-center">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-full border dark:border-gray-700 transition text-sm font-medium ${
                  filter === cat
                    ? "bg-blue-600 dark:bg-orange-500 text-white"
                    : "text-gray-800 dark:text-gray-200 hover:bg-blue-100 dark:hover:bg-gray-700"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <input
            type="text"
            placeholder="Search products..."
            className="px-4 py-2 border rounded-full dark:bg-orange-800 dark:text-white dark:border-gray-600"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {filteredProducts.map((product) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
              className="relative group bg-white dark:bg-black/5 hover:shadow-blue-500  dark:hover:shadow-orange-500 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow cursor-pointer"
              onClick={() => setSelectedProduct(product)}
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-80 group-hover:scale-110 object-fit transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <h3 className="text-lg font-semibold text-white">{product.name}</h3>
                <p className="text-blue-400 dark:text-orange-600 font-bold">{product.price}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <AnimatePresence>
          {selectedProduct && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black bg-opacity-70 z-50 flex justify-center items-center p-4"
            >
              <motion.div
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
                className="bg-white dark:bg-black rounded-lg max-w-2xl w-full p-6 relative"
              >
                <button
                  onClick={() => setSelectedProduct(null)}
                  className="absolute top-4 right-4 text-gray-600 dark:text-gray-300 text-xl"
                >
                  &times;
                </button>
                <img
                  src={selectedProduct.image}
                  alt={selectedProduct.name}
                  className="w-full h-80 object-fit rounded mb-4"
                />
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  {selectedProduct.name}
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  {selectedProduct.description}
                </p>
                <p className= " text-blue-500 dark:text-orange-600 font-bold mb-4">{selectedProduct.price}</p>
                <div className="mb-4">
                  <label className="block text-gray-800 dark:text-orange-500 mb-2">Size:</label>
                  <div className="flex gap-2">
                    {selectedProduct.sizes.map((size) => (
                      <button
                        key={size}
                        className="px-4 py-1 text-blue-700 dark:text-orange-500 border rounded dark:border-gray-600 hover:bg-blue-500 hover:text-white transition"
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>
                <button
                  onClick={() => {
                    addToCart(selectedProduct);
                    setSelectedProduct(null);
                    // navigate("/cart");
                  }}
                  className="mt-4 px-6 py-2 bg-blue-600 dark:bg-orange-500 text-white rounded-xl hover:bg-blue-700 transition"
                >
                  <Link to="/cart">Add to Cart</Link>
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
