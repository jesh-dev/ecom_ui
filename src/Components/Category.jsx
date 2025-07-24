import { motion } from "framer-motion";
import {
  Shirt,
  Tv2,
  Home,
  Sparkles,
  Dumbbell,
  Book,
  ToyBrick,
} from "lucide-react";

const categories = [
  { name: "Clothing", icon: <Shirt /> },
  { name: "Electronics", icon: <Tv2 /> },
  { name: "Home", icon: <Home /> },
  { name: "Beauty", icon: <Sparkles /> },
  { name: "Sports", icon: <Dumbbell /> },
  { name: "Books", icon: <Book /> },
  { name: "Toys", icon: <ToyBrick /> },
];

export default function PopularCategories() {
  return (
    <section className="py-12 bg-gray-100 dark:bg-black">
      <div className="max-w-7xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-gray-900 flex justify-center dark:text-white mb-6"
        >
          Popular Categories
        </motion.h2>

        <div className="flex gap-4 overflow-x-auto scrollbar-thin scrollbar-thumb-blue-400 dark:scrollbar-thumb-orange-700 py-2">
          {categories.map((category, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="min-w-[150px]  flex-shrink-0 p-4  bg-white dark:bg-orange-600/20 rounded-lg shadow-md dark:shadow-md dark:shadow-orange-600 text-center cursor-pointer hover:shadow-lg transition"
            >
              <div className="flex items-center justify-center w-24 h-24 text-blue-500 dark:text-orange-500 text-6xl mx-auto mb-4">
                {category.icon}
              </div>

              <p className="text-gray-800 dark:text-gray-200 text-sm font-semibold">
                {category.name}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
