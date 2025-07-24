import { useState, useEffect } from "react";
import { ShoppingCart, Menu, X, Moon, Sun, Search } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useCart } from "./CartContext";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  const { cartCount } = useCart();
  const [open, setOpen] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

  const [darkMode, setDarkMode] = useState(() =>
    localStorage.getItem("theme") == "dark"
);
const [isScrolling, setIsScrolling] = useState(false);
  
  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);
  
  //Glowing Effect on scroll
  useEffect(() => {
    let timeout;

    const handleScroll = () => {
      setIsScrolling(true);
      clearTimeout(timeout);
      timeout = setTimeout (() => setIsScrolling(false), 200);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
    
  return (
    <motion.header
    initial={{ y: -80 }}
    animate={{ y: 0 }}
    transition={{ duration: 0.5 }}
          className={`sticky top-0 left-0 right-0 z-50 mt-0 transition-shadow duration-300 ${
        isScrolling
          ? "shadow-lg shadow-blue-400/40 dark:shadow-orange-500"
          : "shadow-none"
      } bg-white dark:bg-black`}
    >

      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-xl text-transparent bg-gradient-to-t from-blue-500 to-violet-500 dark:bg-gradient-to-tr dark:from-orange-500 dark:text-transparent dark:to-orange-900 bg-clip-text font-bold text-gray-900  dark:text-white">
          <a href="/" >SENTRY</a> </h1>

        <nav className="hidden md:flex gap-6 text-gray-700 dark:text-gray-200">
          <a href="/" className="hover:text-blue-500">Home</a>
          <a href="/products" className="hover:text-blue-500">Products</a>
          <a href="#categories" className="hover:text-blue-500">Categories</a>
          <a href="#contact" className="hover:text-blue-500">Contact</a>
        </nav>

        <div className="flex items-center gap-4 relative">
          <motion.button
            whileTap={{ scale: 0.9 }}
            onMouseEnter={() => setShowSearch(true)}
            onMouseLeave={() => setShowSearch(false)}
            className="p-2 text-gray-700 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-800 rounded-full relative"
          >
            <Search className="w-5 h-5" />
            <AnimatePresence>
              {showSearch && (
                <motion.input
                  initial={{ width: 0, opacity: 0 }}
                  animate={{ width: 160, opacity: 1 }}
                  exit={{ width: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  type="text"
                  placeholder="Search..."
                  className="absolute right-10 top-1/2 -translate-y-1/2 px-3 py-1 border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-sm rounded-md focus:outline-none text-gray-800 dark:text-white"
                />
              )}
            </AnimatePresence>
          </motion.button>

          <motion.button
            onClick={() => setDarkMode(!darkMode)}
            whileTap={{ rotate: 360 }}
            className="p-2 text-gray-700 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-800 rounded-full"
          >
            {darkMode ? <Sun className="w-5 h-5 text-yellow-500 shadow-xl hover:scale-[1.09] transition-transform shadow-orange-600" /> : <Moon className="w-5 h-5 text-gray-400 hover:scale-[1.09] transition-transform shadow-xl shadow-blue-600" />}
          </motion.button>

          <button onClick={() => navigate("/cart")} className="relative">
  <ShoppingCart className="w-6 h-6 text-gray-700 dark:text-white" />
  {cartCount > 0 && (
    <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
      {cartCount}
    </span>
  )}
</button>


          <button onClick={() => setOpen(!open)} className="md:hidden text-gray-700  dark:text-white">
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="md:hidden bg-white dark:bg-transparent shadow-md p-4"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            >

            <a href="/" className="block py-3 px-3 text-gray-700 transition duration-500 hover:scale-110 hover:bg-blue-500 hover:text-white rounded-xl dark:hover:scale-110 dark:text-white  dark:rounded-xl dark:hover:bg-orange-600 dark:transition-transform active:animate-ping dark:duration-300">Home</a>
            <a href="/products" className="block py-3 px-3 text-gray-700 transition duration-500 hover:scale-110 hover:bg-blue-500 hover:text-white rounded-xl dark:hover:scale-110 dark:text-white  dark:rounded-xl dark:hover:bg-orange-600 dark:transition-transform active:animate-ping dark:duration-300">Products</a>
            <a href="#categories" className="block py-3 px-3 text-gray-700 transition duration-500 hover:scale-110 hover:bg-blue-500 hover:text-white rounded-xl dark:hover:scale-110 dark:text-white  dark:rounded-xl dark:hover:bg-orange-600 dark:transition-transform active:animate-ping dark:duration-300">Categories</a>
            <a href="#contact" className="block py-3 px-3 text-gray-700 transition duration-500 hover:scale-110 hover:bg-blue-500 hover:text-white rounded-xl dark:hover:scale-110 dark:text-white  dark:rounded-xl dark:hover:bg-orange-600 dark:transition-transform  active:animate-ping dark:duration-300">Contact</a>
          </motion.div>
        )}
      </AnimatePresence>
            </motion.header>
  );
}
