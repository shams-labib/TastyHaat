import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const MenuCards = () => {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    fetch("/menu.json")
      .then((res) => res.json())
      .then((data) => setMenu(data))
      .catch((err) => console.error("Error loading menu:", err));
  }, []);

  return (
    <div id="menu" className="max-w-7xl mx-auto">
      <div className="min-h-screen bg-base-100 dark:bg-gray-800 py-16 px-5">
        <h1 className="text-4xl dark:text-white font-bold text-center mb-12">Our <span className="text-primary">Menu</span></h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {menu.map((item) => (
            <motion.div
              key={item.id}
              className="dark:bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl cursor-pointer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <motion.div
                className="overflow-hidden"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                <img src={item.image} alt={item.name} className="w-full h-48 object-cover" />
              </motion.div>

              <div className="p-6">
                <h2 className="text-xl font-bold mb-2">{item.name}</h2>
                <p className="text-gray-600 text-sm text-justify mb-4">{item.description}</p>
                <p className="text-sm font-semibold text-primary mb-4">${item.price}</p>
                <button
                  className={`w-full btn rounded-lg ${item.isAvailable
                      ? "bg-primary hover:bg-secondary"
                      : "bg-gray-400 cursor-not-allowed"
                    } dark:text-white font-semibold transition-colors duration-300`}
                  disabled={!item.isAvailable}
                >
                  {item.isAvailable ? "Order Now" : "Unavailable"}
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MenuCards;
