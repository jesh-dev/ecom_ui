


import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useMediaQuery } from "react-responsive";
import james from "../assets/Images/james.jpg";
import maria from "../assets/Images/maria.jpg";
import sarah from "../assets/Images/sarah.jpg";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  /* your six testimonial objects */
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
  {
    id: 4,
    name: "Emma Brown",
    role: "New Customer",
    image: sarah,
    text: "The site was easy to use and my package arrived on time. I’ll definitely shop again!",
    rating: 4,
  },
  {
    id: 5,
    name: "Daniel Smith",
    role: "Frequent Buyer",
    image: james,
    text: "Prices are fair and the products are genuine. 5 stars from me.",
    rating: 5,
  },
  {
    id: 6,
    name: "Liam White",
    role: "Loyal Shopper",
    image: maria,
    text: "I’ve recommended this store to all my friends. Great experience every time.",
    rating: 5,
  },

];

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const [hovered, setHovered] = useState(false);
  const timeoutRef = useRef(null);

  const isDesktop = useMediaQuery({ minWidth: 1024 });
  const itemsToShow = isDesktop ? 3 : 1;

  // auto-advance
  useEffect(() => {
    if (!hovered) {
      timeoutRef.current = setInterval(
        () => setIndex((i) => (i + 1) % testimonials.length),
        4000
      );
    }
    return () => clearInterval(timeoutRef.current);
  }, [hovered]);

  const prev = () =>
    setIndex((i) => (i - 1 + testimonials.length) % testimonials.length);
  const next = () =>
    setIndex((i) => (i + 1) % testimonials.length);

  // build the visible slice
  const visible = [];
  for (let i = 0; i < itemsToShow; i++) {
    visible.push(testimonials[(index + i) % testimonials.length]);
  }

  return (
    <section
      className="bg-gray-50 dark:bg-black py-20 px-4"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="max-w-6xl mx-auto text-center">
        {/* Title */}
        <motion.h2
          className="text-3xl font-bold mb-10 text-gray-800 dark:text-white"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          What Our Customers Say
        </motion.h2>

        {/* Controls */}
        <div className="flex justify-between items-center mb-4 px-2">
          <button onClick={prev} className="text-gray-600 hover:text-black dark:hover:text-white">
            <ChevronLeft size={28} />
          </button>
          <button onClick={next} className="text-gray-600 hover:text-black dark:hover:text-white">
            <ChevronRight size={28} />
          </button>
        </div>

        {/* Carousel */}
        <div className={`flex gap-6 overflow-hidden`}>
          <AnimatePresence initial={false} mode="popLayout">
            {visible.map((t, idx) => {
              const isExiting = idx === visible.length - 1; // the rightmost will exit
              return (
                <motion.div
                  key={t.id}
                  layout
                  initial={isExiting ? { opacity: 1 } : { opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 100 }}
                  transition={{ duration: 0.5 }}
                  className={`flex-shrink-0 bg-white dark:bg-orange-600/10 dark:shadow-md dark:shadow-orange-600 p-6 rounded-xl shadow-md
                    ${isDesktop ? "w-1/3 h-80" : "w-full h-80"}`}
                >
                  {/* Avatar & Name */}
                  <div className="flex items-center gap-4 mb-4">
                    <img
                      src={t.image}
                      alt={t.name}
                      className="w-14 h-14 rounded-full object-cover border-2 border-blue-600 dark:border-orange-600"
                    />
                    <div className="text-left">
                      <h4 className="font-semibold text-lg text-gray-800 dark:text-white">
                        {t.name}
                      </h4>
                      <p className="text-sm text-gray-500 dark:text-gray-400">{t.role}</p>
                    </div>
                  </div>
                  {/* Text */}
                  <p className="text-gray-600 dark:text-gray-300 mb-4">"{t.text}"</p>
                  {/* Rating */}
                  <div className="flex gap-1">
                    {Array.from({ length: 5 }, (_, i) => (
                      <span
                        key={i}
                        className={
                          i < t.rating
                            ? "text-yellow-400"
                            : "text-gray-300 dark:text-gray-600"
                        }
                      >
                        ★
                      </span>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
