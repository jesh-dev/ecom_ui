import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function CTABanner() {
  return (
    <section className="bg-blue-600 dark:bg-orange-900 text-white py-16 px-6 text-center relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Elevate Your Style?</h2>
        <p className="text-lg md:text-xl mb-6">
          Discover high-quality products with unbeatable deals. Fast shipping, secure payment, and exceptional support await you.
        </p>
        <Link
          to="/products"
          className="inline-block px-8 py-3 text-lg font-semibold bg-white dark:bg-orange-500 dark:text-white text-blue-600 rounded-full shadow-lg hover:bg-gray-100 transition"
        >
          Shop Now
        </Link>
      </motion.div>
    </section>
  );
}
