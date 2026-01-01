import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import { Star, Pizza, Coffee } from "lucide-react";
import "swiper/css";
import "swiper/css/pagination";
import { FaStar } from "react-icons/fa";

const topBurgers = [
  {
    name: "Rancho Burger",
    desc: "Kima with poached egg salad",
    price: "$14.00",
    img: "https://assets.bonappetit.com/photos/5b919cb83d923e31d08fed17/4:3/w_2666,h_2000,c_limit/basically-burger-1.jpg",
  },
  {
    name: "Meat Smash Burger",
    desc: "2x Kima with egg salad",
    price: "$16.00",
    img: "https://www.marthastewart.com/thmb/O7vX-fTaCH0__IcKSCSdEc9KOxU=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/MS-911343-thick-burger-2x3-643ff8b571c148a5974166ba32f74e28.jpg",
  },
  {
    name: "Foodish's Burger",
    desc: "Thin Kima with tomato salad",
    price: "$19.00",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHp64n-eLrDSrY29_HCRIuP7-p89ndb18ezw&s",
  },
  {
    name: "Cheesy Delight",
    desc: "Cheese overloaded burger with fries",
    price: "$17.50",
    img: "https://www.recipetineats.com/tachyon/2023/09/Crispy-fried-chicken-burgers_5.jpg",
  },
];

const TopSellerBurgers = () => {
  return (
    <div className="py-16 px-4 relative">
      {/* Heading with animated icons */}
      <h2 className="text-3xl md:text-5xl font-bold text-center mb-12 text-gray-900 dark:text-white relative w-full">
        {/* Floating Star */}
        <motion.div
          className="absolute -top-6 left-1/2 -translate-x-1/2 text-yellow-400"
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <Star size={28} />
        </motion.div>

        {/* Floating Coffee */}
        <motion.div
          className="absolute -top-4 left-1/3 text-red-500"
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2.2 }}
        >
          <Coffee size={28} />
        </motion.div>

        {/* Floating Pizza */}
        <motion.div
          className="absolute -bottom-6 right-1/3 text-green-400"
          animate={{ rotate: [0, 15, 0], scale: [1, 1.2, 1] }}
          transition={{ repeat: Infinity, duration: 3 }}
        >
          <Pizza size={28} />
        </motion.div>

        <span className="relative z-10 inline-block">
          Top Seller <span className="text-primary">Burgers</span>
        </span>
      </h2>

      {/* Swiper */}
      <Swiper
        modules={[Pagination, Autoplay]}
        autoplay={{ delay: 3500, disableOnInteraction: false }}
        loop={true}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{
          clickable: true,
          el: ".custom-pagination",
        }}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {topBurgers.map((burger, i) => (
          <SwiperSlide key={i}>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              whileHover={{ scale: 1.05 }}
              className="flex flex-col items-center text-center cursor-pointer p-6 rounded-2xl bg-white dark:bg-gray-800 shadow-lg hover:shadow-2xl transition-shadow duration-300"
            >
              {/* Burger Image */}
              <div className="w-36 h-36 mb-4 rounded-full overflow-hidden shadow-xl border border-gray-200 dark:border-gray-700">
                <img
                  src={burger.img}
                  alt={burger.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Burger Name */}
              <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                {burger.name}
              </h3>

              {/* Burger Rating */}
              <div className="flex items-center gap-1 mb-3 justify-center">
                {[...Array(5)].map((_, idx) => (
                  <FaStar key={idx} className="text-yellow-400" />
                ))}
              </div>

              {/* Burger Description */}
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 px-2">
                {burger.desc}
              </p>

              {/* Price */}
              <p className="text-lg font-bold text-indigo-600 dark:text-purple-400 mb-4">
                {burger.price}
              </p>

              {/* Order Button */}
              <motion.button
                whileHover={{ scale: 1.1, brightness: 1.2 }}
                className="px-6 py-2 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-semibold transition-all duration-300"
              >
                Order Now
              </motion.button>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Pagination outside */}
      <div className="custom-pagination mt-8 flex justify-center"></div>
    </div>
  );
};

export default TopSellerBurgers;
