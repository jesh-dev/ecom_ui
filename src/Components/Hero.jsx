
import bottle from '../assets/Images/bottle.png'
import iphone14 from '../assets/Images/iphone_14_blue.png'
import iphone16 from '../assets/Images/iphone_16_white.png'
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const imageSets = {
  morning: {
    light:bottle ,
    dark: bottle,
  },
  afternoon: {
    light: bottle,
    dark: bottle,
  },
  evening: {
    light: bottle,
    dark: bottle,
  },
  night: {
    light: iphone14,
    dark: iphone16,
  },
};

function getTimePeriod(hour) {
  if (hour >= 6 && hour < 12) return "morning";
  if (hour >= 12 && hour < 18) return "afternoon";
  if (hour >= 18 && hour < 21) return "evening";
  return "night";
}

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentTimePeriod, setCurrentTimePeriod] = useState("morning");
  const [darkMode, setDarkMode] = useState(() =>
    localStorage.getItem("theme") ??
    (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light")
  );

  useEffect(() => {
    const updateTimePeriod = () => {
      const hour = new Date().getHours();
      const period = getTimePeriod(hour);
      setCurrentTimePeriod(period);
    };

    updateTimePeriod();
    const interval = setInterval(updateTimePeriod, 5 * 60 * 1000); // every 5 minutes

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % 4);
    }, 60 * 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    setDarkMode(storedTheme ?? "light");
  }, []);

  const imgSrc = imageSets[currentTimePeriod][darkMode];

  return (
    <section className="min-h-screen flex relative flex-col md:flex-row justify-center items-center
     bg-gradient-to-b from-blue-300 to-blue-700 dark:from-black dark:to-orange-700
      transition-colors duration-500 px-6 overflow-hidden">
      <div className="text-left w-full max-md:mt-20 md:w-1/2 py-12 md:py-0">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4"
        >
          Discover Your Next Favorite Product
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-lg md:text-xl text-gray-200 dark:text-gray-300 mb-6 max-w-xl"
        >
          Explore a wide variety of high-quality items curated for your lifestyle. Fast delivery and best deals just a click away.
        </motion.p>

        <motion.a
          href="/products"
            initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-block px-6 py-3 bg-blue-600 dark:bg-orange-500 text-white rounded-full text-lg shadow hover:bg-blue-700 transition"
        >
          Shop Now
        </motion.a>
      </div>

      <div className="w-full md:w-1/2 max-w-[500px] h-auto flex justify-center items-center">
        <motion.img
          key={imgSrc + currentIndex}
          src={imgSrc}
          alt="Hero Visual"
          className="w-full h-auto object-contain"
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
        />
      </div>
    </section>
  );
}

