import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import AOS from "aos";
import { Link } from "react-router";

const MenuCards = () => {
  const [menus, setMenus] = useState([]);

  useEffect(() => {
    const fetchUrl = `${import.meta.env.VITE_API_URL}/menus`;
    fetch(fetchUrl)
      .then((res) => res.json())
      .then((data) => setMenus(data))
      .catch((err) => console.error("Error loading menu:", err));
  }, []);

  useEffect(() => {
    AOS.refresh();
  }, [menus]);

  return (
    <div id="menu" className="container mx-auto">
      <div className="bg-base-100 dark:bg-gray-800 py-16 px-5">
        <h1
          data-aos="fade-up"
          className="text-4xl dark:text-white font-bold text-center mb-12"
        >
          Popular <span className="text-primary">Menu</span>
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {menus.slice(0, 4).map((menu, index) => (
            <motion.div
              key={menu._id}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              whileHover={{ y: -5, scale: 1.02 }}
              transition={{ type: "tween", duration: 0.15 }}
              className="w-full bg-white/70 dark:bg-gray-800/70 backdrop-blur-lg rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 overflow-hidden cursor-pointer transition-all duration-300"
            >
              <div className="relative overflow-hidden">
                <motion.img
                  src={menu.image}
                  alt={menu.name}
                  className="w-full h-44 object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                />

                <span
                  className="
                  absolute top-3 right-3
                  bg-primary text-white
                  text-xs font-semibold
                  px-3 py-1 rounded-full
                  shadow-md
                "
                >
                  ${menu.price}
                </span>
              </div>

              <div className="p-5">
                <h2 className="text-lg font-semibold mb-2 dark:text-white">
                  {menu.name}
                </h2>

                <p className="text-gray-700 dark:text-gray-200 text-sm leading-relaxed mb-4">
                  {menu.description}
                </p>

                <div className="w-full border-t border-dashed border-gray-300 dark:border-gray-600 mb-4 opacity-60"></div>

                <Link
                  to={`/all-menu/${menu._id}`}
                  className="w-full btn bg-primary hover:bg-secondary rounded-lg font-semibold transition-colors duration-300 text-white"
                >
                  View Details
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MenuCards;
