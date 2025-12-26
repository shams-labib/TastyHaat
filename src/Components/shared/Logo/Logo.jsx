import { FaUtensils } from "react-icons/fa";
import { motion } from "framer-motion";

const Logo = () => {
  return (
    <motion.div
      className="flex items-center gap-3 cursor-pointer"
      whileHover={{ scale: 1.1 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      {/* Logo Icon */}
      <div className="bg-gradient-to-tr from-red-500 to-orange-500 p-3 rounded-full text-white shadow-md flex items-center justify-center">
        <FaUtensils size={24} />
      </div>

      {/* Logo Text */}
      <span className="text-2xl font-bold text-gray-900 dark:text-white select-none">
        Tasty<span className="text-red-500">Haat</span>
      </span>
    </motion.div>
  );
};

export default Logo;
