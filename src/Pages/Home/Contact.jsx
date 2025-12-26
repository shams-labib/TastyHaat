import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaClock } from "react-icons/fa";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div id="contact" className="bg-base-100 dark:bg-gray-800 flex items-center justify-center min-h-[75vh] px-8 py-16">
      <div className="w-full max-w-7xl grid lg:grid-cols-2 shadow-2xl rounded-3xl overflow-hidden">

        <motion.div
          className="bg-linear-to-br from-primary to-secondary text-base-100 p-10 flex flex-col justify-between relative overflow-hidden"
          initial={{ x: -200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="absolute w-32 h-32 bg-accent opacity-20 rounded-full -top-12 -left-12"
            animate={{ y: [0, 20, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
          />
          <motion.div
            className="absolute w-32 h-32 bg-accent opacity-10 rounded-full -bottom-16 -right-16"
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 5, repeat: Infinity }}
          />

          <div>
            <h2 className="text-4xl font-bold mb-6">Let's Talk</h2>
            <p className="mb-8 text-white/80">
              Questions? Feedback? Or just want to say hi? Reach out and we’ll get back to you in no time.
            </p>

            <div className="space-y-4 text-lg mb-6">
              <div className="flex items-center">
                <FaPhoneAlt className="mr-4 text-white" />
                <span>+1 234 567 890</span>
              </div>
              <div className="flex items-center">
                <FaEnvelope className="mr-4 text-white" />
                <span>info@restaurant.com</span>
              </div>
              <div className="flex items-center">
                <FaMapMarkerAlt className="mr-4 text-white" />
                <span>123 Food Street, Gourmet City</span>
              </div>
            </div>
          </div>

          <div className="mt-6">
            <h3 className="text-2xl font-semibold mb-3 flex items-center">
              <FaClock className="mr-3" /> Opening Hours
            </h3>
            <ul className="space-y-2 text-lg">
              <li>Monday - Friday: 10:00 AM - 10:00 PM</li>
              <li>Saturday: 10:00 AM - 11:00 PM</li>
              <li>Sunday: Closed</li>
            </ul>
          </div>
        </motion.div>

        <motion.div
          className="bg-base-200 p-10 flex flex-col justify-center relative"
          initial={{ x: 200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold mb-8 text-base-content">Send a Message</h2>
          <form className="space-y-6">
            <motion.input
              type="text"
              placeholder="Your Name"
              className="w-full p-4 rounded-2xl border border-secondary bg-base-100 text-base-content focus:ring-2 focus:ring-secondary outline-none"
              whileFocus={{ scale: 1.02 }}
            />
            <motion.input
              type="email"
              placeholder="Your Email"
              className="w-full p-4 rounded-2xl border border-secondary bg-base-100 text-base-content focus:ring-2 focus:ring-secondary outline-none"
              whileFocus={{ scale: 1.02 }}
            />
            <motion.textarea
              placeholder="Your Message"
              className="w-full p-4 rounded-2xl border border-secondary bg-base-100 text-base-content focus:ring-2 focus:ring-secondary outline-none h-36 resize-none"
              whileFocus={{ scale: 1.02 }}
            ></motion.textarea>
            <motion.button
              type="submit"
              className="w-full py-4 rounded-2xl bg-primary text-primary-content font-bold text-lg hover:bg-secondary transition-colors duration-300"
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
