import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowUp, Facebook, Twitter, Instagram } from "lucide-react";

export default function Footer() {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowTopBtn(window.scrollY > 300);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <>
      <div className="bg-gradient-to-r from-white to-violet-600 dark:bg-gradient-to-r dark:from-orange-600 dark:to-black h-1 w-full border-none rounded-xl "></div>
    <footer className="bg-gray-100 dark:bg-black text-gray-800 dark:text-gray-200 pt-14 pb-6 px-4 mt-0">
      <motion.div
        className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-10"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        {/* Branding */}
        <div className="md:col-span-1">
          <h2 className="text-2xl font-bold mb-2 uppercase text-blue-600 dark:text-orange-500">Sentry</h2>
          <p className="text-sm">
            Discover the best products curated for your lifestyle. Fast delivery and unbeatable quality.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/" className="hover:text-blue-500">Home</a></li>
            <li><a href="/products" className="hover:text-blue-500">Products</a></li>
            <li><a href="#categories" className="hover:text-blue-500">Categories</a></li>
            <li><a href="#contact" className="hover:text-blue-500">Contact</a></li>
            <li><a href="/about" className="hover:text-blue-500">About</a></li>
          </ul>
        </div>

        {/* Agents & Investors */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Agents & Investors</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#agent" className="hover:text-blue-500">Become an Agent</a></li>
            <li><a href="#investor" className="hover:text-blue-500">Investor Relations</a></li>
            <li><a href="#partnership" className="hover:text-blue-500">Start Partnership</a></li>
          </ul>
        </div>

        {/* Partners */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Partners</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#wholesale" className="hover:text-blue-500">Wholesale Program</a></li>
            <li><a href="#affiliate" className="hover:text-blue-500">Affiliate Program</a></li>
            <li><a href="#collab" className="hover:text-blue-500">Collaborations</a></li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Support</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#faq" className="hover:text-blue-500">FAQs</a></li>
            <li><a href="#shipping" className="hover:text-blue-500">Shipping Info</a></li>
            <li><a href="#returns" className="hover:text-blue-500">Returns & Refunds</a></li>
            <li><a href="#help" className="hover:text-blue-500">Help Center</a></li>
          </ul>
        </div>
      </motion.div>

      {/* Bottom Bar */}
      <motion.div
        className="mt-10 border-t border-gray-300 dark:border-gray-700 pt-6 text-sm flex flex-col md:flex-row justify-between items-center gap-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        viewport={{ once: true }}
      >
        <p>&copy; {new Date().getFullYear()} Jeshrun.Store. All rights reserved.</p>
        <div className="flex gap-4 text-gray-600 dark:text-gray-300">
          <a href="#"><Facebook className="hover:text-blue-600" size={20} /></a>
          <a href="#"><Twitter className="hover:text-sky-400" size={20} /></a>
          <a href="#"><Instagram className="hover:text-pink-500" size={20} /></a>
        </div>
      </motion.div>

      {/* Scroll to Top */}
      {showTopBtn && (
        <motion.button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 p-3 rounded-full bg-blue-600 text-white shadow-lg hover:bg-blue-700 z-50"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          >
          <ArrowUp />
        </motion.button>
      )}
    </footer>
      </>
  );
}
