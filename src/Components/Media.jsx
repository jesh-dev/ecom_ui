import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import bottle from '../assets/Images/bottle.png'
import bottle1 from '../assets/Images/bottle1.jpg'
import empty from '../assets/Images/empty.png'
import iphone16 from "../assets/images/iphone_16_pink.png"
import iphone16w from "../assets/images/iphone_16_white.png"
import ps1 from "../assets/images/ps1.png";
import watch1 from "../assets/images/watch1.png";
import bts1b from "../assets/images/bts1b.png";
import macb from "../assets/images/mac1b.png";
import buds1a from "../assets/images/buds1a.png";

const mediaImages = [
  buds1a,
  iphone16w,
  macb,
  ps1,
  watch1,
  bts1b,
];

export default function MediaShowcase() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section className="py-20 px-4 bg-gray-50 dark:bg-black text-center">
      <motion.h2
        className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-10"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Follow Us on Instagram
      </motion.h2>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-6xl mx-auto">
        {mediaImages.map((img, idx) => (
          <motion.div
            key={idx}
            className="relative overflow-hidden hover:shadow-blue-500 dark:hover:shadow-orange-600 rounded-lg group shadow-md cursor-pointer"
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ delay: idx * 0.1, duration: 0.4 }}
            viewport={{ once: true }}
            onClick={() => setSelectedImage(img)}
          >
            <img
              src={img}
              alt={`media ${idx + 1}`}
              className="w-full h-40 md:h-48 object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center text-white font-semibold text-sm transition-opacity duration-300">
              @Jeshrun.Store
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 bg-transparent backdrop-blur-sm flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.img
              src={selectedImage}
              alt="Preview"
              className="max-h-[80vh] max-w-[90vw] rounded-lg shadow-lg"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              transition={{ duration: 0.4 }}
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-6 right-6 text-blue-900 text-3xl font-bold"
            >
              &times;
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
