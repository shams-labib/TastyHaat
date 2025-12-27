import React from "react";
import {
  Mail,
  Phone,
  MapPin,
  Edit,
  ShieldCheck,
  Briefcase,
} from "lucide-react";
import { motion } from "framer-motion";

const cardAnim = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const MyProfile = () => {
  return (
    <div className="w-full space-y-10">
      {/* ================= PROFILE SECTION ================= */}
      <motion.div
        className="grid grid-cols-1 lg:grid-cols-3 gap-6"
        variants={cardAnim}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.6 }}
      >
        {/* LEFT PROFILE CARD */}
        <div className="rounded-3xl bg-base-100 dark:bg-gray-900 shadow-xl overflow-hidden">
          <div className="flex flex-col items-center p-6 bg-gradient-to-br from-orange-500 to-red-500 text-white">
            <div className="avatar">
              <div className="w-24 rounded-full ring ring-white ring-offset-4 ring-offset-orange-500 shadow-lg">
                <img src="https://i.ibb.co/7QpKsCX/user.png" alt="profile" />
              </div>
            </div>

            <h2 className="mt-4 text-xl font-bold">Shams Uddin</h2>

            <p className="text-sm opacity-90 flex items-center gap-1">
              <Briefcase className="w-4 h-4" /> Food Lover
            </p>

            <span className="mt-3 badge badge-success gap-1">
              <ShieldCheck className="w-3 h-3" /> Active User
            </span>
          </div>

          <div className="p-5">
            <button className="btn btn-primary btn-sm w-full flex gap-2">
              <Edit className="w-4 h-4" /> Edit Profile
            </button>
          </div>
        </div>

        {/* RIGHT INFO CARD */}
        <div className="lg:col-span-2 rounded-3xl bg-base-100 dark:bg-gray-900 shadow-xl p-6">
          <h3 className="text-2xl font-semibold mb-6 dark:text-white">
            Profile Information
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <InfoCard
              icon={<Mail className="w-5 h-5 text-orange-500" />}
              label="Email"
              value="shams@example.com"
            />
            <InfoCard
              icon={<Phone className="w-5 h-5 text-orange-500" />}
              label="Phone"
              value="+880 1234-567890"
            />
            <InfoCard
              icon={<MapPin className="w-5 h-5 text-orange-500" />}
              label="Location"
              value="Dhaka, Bangladesh"
            />
          </div>
        </div>
      </motion.div>

      {/* ================= FOOD ADVERTISEMENT SECTION ================= */}
      <motion.div
        className="grid grid-cols-1 lg:grid-cols-3 gap-6"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        {/* BIG FOOD AD */}
        <div className="lg:col-span-2 relative rounded-3xl overflow-hidden bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 text-white shadow-2xl">
          <div className="absolute inset-0 bg-black/30"></div>

          <div className="relative z-10 p-8 md:p-10">
            <span className="badge badge-warning mb-3">🔥 Hot Deal</span>

            <h2 className="text-3xl md:text-4xl font-extrabold mb-3">
              Fresh & Delicious Food
            </h2>

            <p className="text-sm md:text-base opacity-90 max-w-md mb-6">
              Order your favorite meals from top restaurants. Fast delivery,
              best taste — only on TastyHaat 🍽️
            </p>

            <div className="flex flex-wrap gap-4">
              <button className="btn bg-white text-red-600 hover:bg-gray-100">
                🍔 Order Now
              </button>
              <button className="btn btn-outline border-white text-white hover:bg-white hover:text-red-600">
                🍕 Explore Menu
              </button>
            </div>
          </div>

          <img
            src="https://images.unsplash.com/photo-1600891964599-f61ba0e24092"
            alt="food"
            className="absolute right-0 bottom-0 w-60 md:w-80 opacity-90"
          />
        </div>

        {/* SIDE OFFER CARD */}
        <div className="rounded-3xl p-6 bg-base-100 dark:bg-gray-900 shadow-xl flex flex-col justify-between">
          <div>
            <h4 className="text-xl font-bold mb-2 dark:text-white">
              🎁 Combo Offer
            </h4>
            <p className="text-sm opacity-80 mb-4 dark:text-gray-300">
              Buy 1 Get 1 free on selected food items.
            </p>
          </div>

          <button className="btn btn-primary btn-sm">Grab Offer</button>
        </div>
      </motion.div>
    </div>
  );
};

/* ================= REUSABLE INFO CARD ================= */
const InfoCard = ({ icon, label, value }) => {
  return (
    <div className="flex items-center gap-4 p-4 rounded-2xl bg-base-200 dark:bg-gray-800">
      {icon}
      <div>
        <p className="text-xs opacity-70 dark:text-gray-300">{label}</p>
        <p className="text-sm font-medium dark:text-white">{value}</p>
      </div>
    </div>
  );
};

export default MyProfile;
