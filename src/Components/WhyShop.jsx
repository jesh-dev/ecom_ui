import { motion } from "framer-motion";
import { BiMoneyWithdraw } from "react-icons/bi";
import { CiDeliveryTruck } from "react-icons/ci";
import { MdHighQuality } from "react-icons/md";

export default function WhyShopWithUs() {
  return (
    <section className="py-12 bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-gray-900 dark:text-white mb-6 text-center"
        >
          Why Shop With Us
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Fast Delivery",
              icon: <CiDeliveryTruck />,
              text: "Get your orders delivered quickly and on time with our trusted logistics.",
            },
            {
              title: "Secure Payments",
              icon: <BiMoneyWithdraw />,
              text: "Enjoy safe and encrypted payment options for a worry-free shopping experience.",
            },
            {
              title: "Quality Guarantee",
              icon: <MdHighQuality />,
              text: "We offer only the best products from reputable brands you can trust.",
            },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.2, duration: 0.5 }}
              className="p-6 bg-gray-100 dark:shadow-md dark:hover:shadow-orange-600 dark:bg-orange-700/50 rounded-xl shadow hover:shadow-lg transition duration-700 text-center"
            >
              <div className="flex items-center justify-center w-24 h-24 text-blue-500 dark:text-orange-500 text-6xl mx-auto mb-4">
                {item.icon}
              </div>

              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                {item.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
