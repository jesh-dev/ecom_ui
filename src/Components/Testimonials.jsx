import { useEffect } from "react";
import { motion } from "framer-motion";
import james from '../assets/Images/james.jpg'
import maria from '../assets/Images/maria.jpg'
import sarah from '../assets/Images/sarah.jpg'

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Happy Customer",
      image: sarah,
      text: "Absolutely love the product! Great quality and fast delivery. Highly recommend this store to everyone.",
      rating: 5,
    },
    {
      id: 2,
      name: "James Lee",
      role: "Verified Buyer",
      image: james,
      text: "Very satisfied with my purchase. The support team was responsive and helpful throughout.",
      rating: 4,
    },
    {
      id: 3,
      name: "Maria Gomez",
      role: "Returning Customer",
      image: maria,
      text: "This is my third order and the quality remains top-notch. Fast shipping and secure packaging!",
      rating: 5,
    },
  ];

  return (
    <section className="bg-gray-50 dark:bg-black py-20 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          className="text-3xl font-bold mb-10 text-gray-800 dark:text-white"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          What Our Customers Say
        </motion.h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, index) => (
            <motion.div
              key={t.id}
              className="bg-white dark:bg-orange-600/10 dark:shadow-md dark:shadow-orange-600 p-6 rounded-xl shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-14 h-14 rounded-full object-cover border-2 border-blue-600 dark:border-orange-600"
                />
                <div className="text-left">
                  <h4 className="font-semibold text-lg text-gray-800 dark:text-white">{t.name}</h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{t.role}</p>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-4">"{t.text}"</p>
              <div className="flex gap-1">
                {Array.from({ length: 5 }, (_, i) => (
                  <span key={i} className={`text-yellow-400 ${i < t.rating ? 'text-yellow-400' : 'text-gray-300 dark:text-gray-600'}`}>
                    ★
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
