import { useState } from "react";
import { motion } from "framer-motion";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 3000);
      setEmail("");
    }
  };

  return (
    <section className="bg-gray-100 dark:bg-black py-16 px-4">
      <motion.div
        className="max-w-2xl mx-auto text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
          Subscribe to our Newsletter
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          Stay updated with the latest posts and news.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 justify-center">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
            className="w-full sm:w-2/3 p-3 rounded border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200"
          />
          <button
            type="submit"
            className="px-6 py-3 bg-blue-600 dark:bg-orange-700 hover:animate-pulse text-white rounded hover:bg-blue-700 transition"
          >
            Subscribe
          </button>
        </form>

        {submitted && (
          <motion.p
            className="mt-4 text-green-600 dark:text-green-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            Thanks for subscribing!
          </motion.p>
        )}
      </motion.div>
    </section>
  );
}
