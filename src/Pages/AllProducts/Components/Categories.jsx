// src/components/Categories.jsx
import { motion } from "framer-motion";
import { categories } from "../../../Data/Categories";

const Categories = () => {
  return (
    <div className="py-6 px-4">
      <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
        Shop by Category
      </h2>
      <div className="flex gap-4 overflow-x-auto no-scrollbar">
        {categories.map((category, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="min-w-[120px] flex-shrink-0 bg-white dark:bg-gray-800 rounded-xl shadow p-4 flex flex-col items-center justify-center text-center cursor-pointer hover:shadow-md transition"
          >
            <div className="text-orange-500 mb-2">{category.icon}</div>
            <p className="text-sm font-medium text-gray-700 dark:text-gray-200">
              {category.name}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
