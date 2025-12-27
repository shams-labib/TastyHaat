import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";
import useAuth from "../../Context/useAuth/useAuth";
import Loader from "../Loader/Loader";

const MenuDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user, loading } = useAuth();
  const [menu, setMenu] = useState(null);
  const [fetching, setFetching] = useState(true);

  useEffect(() => {
    // You can replace this with your real API endpoint

    // fetch("/menus/:id")
    fetch("/menu.json")
      .then((res) => res.json())
      .then((data) => {
        const item = data.find((p) => p.id === parseInt(id));
        setMenu(item || null);
        setFetching(false);
      })
      .catch((err) => {
        console.error(err);
        setFetching(false);
      });
  }, [id]);

  if (loading || fetching) return <Loader />;

  if (!user) {
    navigate("/login");
    return null;
  }

  if (!menu)
    return (
      <p className="text-center text-gray-500 dark:text-gray-300 mt-10">
        Menu not found.
      </p>
    );

  const handleOrder = async () => {
    const orderData = {
      userId: user.uid,
      username: user.displayName || "User",
      email: user.email,
      phone: user.phoneNumber || "",
      menuId: menu.id,
      menuName: menu.name,
      price: menu.price,
      quantity: 1,
      status: "pending",
      createdAt: new Date().toISOString(),
    };

    try {
      const res = await fetch("http://localhost:3000/orders", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(orderData),
      });

      if (res.ok) {
        alert("Order created! Please proceed to payment.");
        // Navigate to payment page or order summary
        navigate("/dashboard/my-orders");
      } else {
        alert("Failed to create order");
      }
    } catch (err) {
      console.error(err);
      alert("Something went wrong");
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-5 space-y-6">
      <div className="flex flex-col md:flex-row gap-6 bg-white dark:bg-gray-900 rounded-3xl shadow-lg overflow-hidden">
        <img
          src={menu.image}
          alt={menu.name}
          className="w-full md:w-1/2 h-64 md:h-auto object-cover"
        />

        <div className="p-6 flex flex-col justify-between">
          <div>
            <h1 className="text-3xl font-bold mb-3 dark:text-white">
              {menu.name}
            </h1>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              {menu.description}
            </p>
            <p className="text-xl font-semibold mb-6 dark:text-white">
              Price: ${menu.price}
            </p>
          </div>

          <button
            onClick={handleOrder}
            disabled={!menu.isAvailable}
            className={`w-full py-3 rounded-lg font-semibold transition-colors duration-300 ${
              menu.isAvailable
                ? "bg-primary text-white hover:bg-secondary"
                : "bg-gray-400 cursor-not-allowed text-gray-200"
            }`}
          >
            {menu.isAvailable ? "Pay" : "Unavailable"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default MenuDetails;
