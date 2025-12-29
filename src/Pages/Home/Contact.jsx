import React, { useEffect } from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
} from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const Contact = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <div
      id="contact"
      className="bg-base-100 dark:bg-gray-900 flex items-center justify-center px-4 py-16 sm:py-24"
    >
      <div className="w-full max-w-6xl grid gap-8 lg:grid-cols-2">
        {/* Contact Info Card */}
        <div
          className="relative p-8 sm:p-10 bg-gradient-to-br from-primary to-secondary text-white rounded-3xl shadow-lg overflow-hidden"
          data-aos="fade-right"
        >
          {/* Background Circles */}
          <div className="absolute w-32 h-32 bg-white/10 rounded-full -top-12 -left-12 animate-bounce-slow"></div>
          <div className="absolute w-32 h-32 bg-white/10 rounded-full -bottom-12 -right-12 animate-bounce-slow-reverse"></div>

          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Let's Talk</h2>
          <p className="mb-6 sm:mb-8 text-white/80 leading-relaxed">
            Questions? Feedback? Or just want to say hi? Reach out and we'll get
            back to you in no time.
          </p>

          <div className="space-y-4 text-base sm:text-lg mb-6">
            <div className="flex items-center gap-3">
              <FaPhoneAlt className="text-white text-lg sm:text-xl" />
              <span>+1 234 567 890</span>
            </div>
            <div className="flex items-center gap-3">
              <FaEnvelope className="text-white text-lg sm:text-xl" />
              <span>info@restaurant.com</span>
            </div>
            <div className="flex items-center gap-3">
              <FaMapMarkerAlt className="text-white text-lg sm:text-xl" />
              <span>123 Food Street, Gourmet City</span>
            </div>
          </div>

          <div>
            <h3 className="text-xl sm:text-2xl font-semibold mb-2 flex items-center gap-2">
              <FaClock /> Opening Hours
            </h3>
            <ul className="space-y-1 text-sm sm:text-base">
              <li>Monday - Friday: 10:00 AM - 10:00 PM</li>
              <li>Saturday: 10:00 AM - 11:00 PM</li>
              <li>Sunday: Closed</li>
            </ul>
          </div>
        </div>

        {/* Contact Form Card */}
        <div
          className="relative p-8 sm:p-10 bg-white/90 dark:bg-gray-800/80 backdrop-blur-md rounded-3xl shadow-lg"
          data-aos="fade-left"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 sm:mb-8 text-gray-900 dark:text-white">
            Send a Message
          </h2>
          <form className="space-y-4 sm:space-y-6">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 sm:p-4 rounded-2xl border border-gray-300 dark:border-gray-600 bg-white/60 dark:bg-gray-700/60 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary outline-none transition"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 sm:p-4 rounded-2xl border border-gray-300 dark:border-gray-600 bg-white/60 dark:bg-gray-700/60 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary outline-none transition"
            />
            <textarea
              placeholder="Your Message"
              className="w-full p-3 sm:p-4 rounded-2xl border border-gray-300 dark:border-gray-600 bg-white/60 dark:bg-gray-700/60 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary outline-none h-32 resize-none transition"
            ></textarea>
            <button
              type="submit"
              className="w-full py-3 sm:py-4 rounded-2xl bg-primary text-primary-content font-bold text-lg hover:bg-secondary transition-colors duration-300 shadow-md hover:shadow-lg"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

      {/* Tailwind Custom Animations */}
      <style>{`
        @keyframes bounce-slow {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(15px);
          }
        }
        .animate-bounce-slow {
          animation: bounce-slow 4s ease-in-out infinite;
        }
        @keyframes bounce-slow-reverse {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-15px);
          }
        }
        .animate-bounce-slow-reverse {
          animation: bounce-slow-reverse 5s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default Contact;
