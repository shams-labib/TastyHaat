import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";

const MyOrders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    AOS.init({ once: true, duration: 800, easing: "ease-in-out" });
  }, []);

  useEffect(() => {
    fetch("/orders.json")
      .then((res) => res.json())
      .then((data) => setOrders(data))
      .catch((err) => console.error("Error loading orders:", err));
  }, []);

  return (
    <div className="container mx-auto py-16 px-5">
      <h1
        data-aos="fade-up"
        className="text-4xl dark:text-white font-bold text-center mb-12"
      >
        My <span className="text-primary">Orders</span>
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {orders.map((order, index) => (
          <motion.div
            key={order.id}
            data-aos="fade-up"
            data-aos-delay={index * 100}
            whileHover={{ y: -5, scale: 1.02 }}
            transition={{ type: "tween", duration: 0.15 }}
            className="
              w-full
              bg-white/70 dark:bg-gray-800/70 backdrop-blur-lg
              rounded-2xl
              shadow-xl border border-gray-200 dark:border-gray-700
              overflow-hidden
              cursor-pointer
              transition-all duration-300
            "
          >
            <div className="relative overflow-hidden">
              <motion.img
                src={order.image}
                alt={order.name}
                className="w-full h-44 object-cover"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.5 }}
              />
            </div>

            <div className="p-5">
              <h2 className="text-lg font-semibold mb-2 dark:text-white">{order.name}</h2>

              <p className="text-gray-700 dark:text-gray-200 text-sm mb-4">
                Price: ৳{order.price}
              </p>

              <div className="w-full border-t border-dashed border-gray-300 dark:border-gray-600 mb-4 opacity-60" />

              <span
                className={`inline-block px-3 py-1 rounded-full font-semibold text-sm
                  ${order.status === "Delivered"
                    ? "bg-green-500 text-white"
                    : "bg-yellow-500 text-white"
                  }`}
              >
                {order.status}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default MyOrders;
