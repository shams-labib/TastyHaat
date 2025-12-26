import React from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
} from "react-icons/fa";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div
      id="contact"
      className="bg-base-100 dark:bg-gray-800 flex items-center justify-center min-h-[75vh] px-6 py-16"
    >
      <div className="w-full max-w-7xl grid lg:grid-cols-2 gap-8 shadow-2xl rounded-3xl overflow-hidden">
        <motion.div
          className="relative p-10 bg-gradient-to-br from-primary to-secondary text-base-100 rounded-3xl overflow-hidden"
          initial={{ x: -200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="absolute w-36 h-36 bg-white/10 rounded-full -top-16 -left-16"
            animate={{ y: [0, 20, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
          />
          <motion.div
            className="absolute w-36 h-36 bg-white/10 rounded-full -bottom-16 -right-16"
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 5, repeat: Infinity }}
          />

          <h2 className="text-4xl font-bold mb-6">Let's Talk</h2>
          <p className="mb-8 text-white/80 leading-relaxed">
            Questions? Feedback? Or just want to say hi? Reach out and we’ll get
            back to you in no time.
          </p>

          <div className="space-y-4 text-lg mb-8">
            <div className="flex items-center gap-4">
              <FaPhoneAlt className="text-white text-xl" />
              <span>+1 234 567 890</span>
            </div>
            <div className="flex items-center gap-4">
              <FaEnvelope className="text-white text-xl" />
              <span>info@restaurant.com</span>
            </div>
            <div className="flex items-center gap-4">
              <FaMapMarkerAlt className="text-white text-xl" />
              <span>123 Food Street, Gourmet City</span>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-4 flex items-center gap-3">
              <FaClock /> Opening Hours
            </h3>
            <ul className="space-y-2 text-lg">
              <li>Monday - Friday: 10:00 AM - 10:00 PM</li>
              <li>Saturday: 10:00 AM - 11:00 PM</li>
              <li>Sunday: Closed</li>
            </ul>
          </div>
        </motion.div>

        <motion.div
          className="relative p-10 bg-white/70 dark:bg-gray-800/70 backdrop-blur-lg rounded-3xl shadow-xl"
          initial={{ x: 200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold mb-8 text-gray-900 dark:text-white">
            Send a Message
          </h2>
          <form className="space-y-6">
            <motion.input
              type="text"
              placeholder="Your Name"
              className="w-full p-4 rounded-2xl border border-gray-300 dark:border-gray-600 bg-white/60 dark:bg-gray-700/60 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary outline-none backdrop-blur-sm transition"
              whileFocus={{ scale: 1.02 }}
            />
            <motion.input
              type="email"
              placeholder="Your Email"
              className="w-full p-4 rounded-2xl border border-gray-300 dark:border-gray-600 bg-white/60 dark:bg-gray-700/60 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary outline-none backdrop-blur-sm transition"
              whileFocus={{ scale: 1.02 }}
            />
            <motion.textarea
              placeholder="Your Message"
              className="w-full p-4 rounded-2xl border border-gray-300 dark:border-gray-600 bg-white/60 dark:bg-gray-700/60 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary outline-none h-36 resize-none backdrop-blur-sm transition"
              whileFocus={{ scale: 1.02 }}
            ></motion.textarea>
            <motion.button
              type="submit"
              className="w-full py-4 rounded-2xl bg-primary text-primary-content font-bold text-lg hover:bg-secondary transition-colors duration-300 shadow-md hover:shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Send Message
            </motion.button>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
