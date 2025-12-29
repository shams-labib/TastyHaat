import { useState } from "react";
import { motion } from "framer-motion";
import useAuth from "../../../Context/useAuth/useAuth";

const AddMenu = () => {
  const { user } = useAuth();
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    price: "",
    description: "",
    image: "",
    isAvailable: true,
  });

  const API_URL = import.meta.env.VITE_API_URL;

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!user?.email) return alert("User not authenticated");

    setLoading(true);

    const payload = {
      ...formData,
      price: Number(formData.price),
      postedBy: user.email,
    };

    try {
      const res = await fetch(`${API_URL}/menus`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error("Failed to save menu");

      setFormData({
        name: "",
        price: "",
        description: "",
        image: "",
        isAvailable: true,
      });

      alert("Menu added successfully");
    } catch (error) {
      console.error(error);
      alert("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto px-5 p-4 sm:p-6 min-h-screen">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl font-bold text-center mb-10"
      >
        Add <span className="text-primary">Menu</span>
      </motion.h1>

      <motion.form
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        onSubmit={handleSubmit}
        className="max-w-xl mx-auto bg-base-100 p-6 rounded-2xl shadow-lg"
      >
        <div className="space-y-4">
          <div>
            <label className="label font-medium">Menu Name</label>
            <input
              type="text"
              name="name"
              required
              placeholder="Chicken Burger"
              className="input input-bordered w-full transition-all focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/30"
              value={formData.name}
              onChange={handleChange}
            />
          </div>

          <div>
            <label className="label font-medium">Price</label>
            <input
              type="number"
              name="price"
              required
              placeholder="350"
              className="input input-bordered w-full transition-all focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/30"
              value={formData.price}
              onChange={handleChange}
            />
          </div>

          <div>
            <label className="label font-medium">Image URL</label>
            <input
              type="text"
              name="image"
              placeholder="https://image.com/menu.jpg"
              className="input input-bordered w-full transition-all focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/30"
              value={formData.image}
              onChange={handleChange}
            />
          </div>

          <div>
            <label className="label font-medium">Description</label>
            <textarea
              name="description"
              placeholder="Short description of the menu"
              className="textarea textarea-bordered w-full transition-all focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/30"
              value={formData.description}
              onChange={handleChange}
            />
          </div>

          <label className="flex items-center gap-3 cursor-pointer">
            <input
              type="checkbox"
              name="isAvailable"
              checked={formData.isAvailable}
              onChange={handleChange}
              className="checkbox checkbox-primary"
            />
            <span className="font-medium">Available</span>
          </label>

          <button disabled={loading} className="btn btn-lg btn-primary w-full">
            {loading ? "Saving..." : "Add Menu"}
          </button>
        </div>
      </motion.form>
    </div>
  );
};

export default AddMenu;
