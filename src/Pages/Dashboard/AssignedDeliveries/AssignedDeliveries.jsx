import React, { useState, useEffect } from "react";
import axios from "axios";

const AssignedDeliveries = () => {
  const [parcels, setParcels] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [openDropdown, setOpenDropdown] = useState(null); // track open dropdown per row

  useEffect(() => {
    axios
      .get("/data/assignedDeliveries.json")
      .then((response) => {
        setParcels(response.data);
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to load delivery data.");
        setLoading(false);
      });
  }, []);

  const updateStatus = (id, status) => {
    setParcels((prev) =>
      prev.map((item) => (item.id === id ? { ...item, status } : item))
    );
    setOpenDropdown(null); // close dropdown after action
  };

  const statusStyle = (status) => {
    switch (status) {
      case "accepted":
        return "bg-blue-100 text-blue-700";
      case "completed":
        return "bg-green-100 text-green-700";
      case "rejected":
        return "bg-red-100 text-red-700";
      default:
        return "bg-yellow-100 text-yellow-700";
    }
  };

  if (loading) return <div className="p-8">Loading...</div>;
  if (error) return <div className="p-8 text-red-600">{error}</div>;

  return (
    <div className="min-h-screen bg-gray-100 p-4 sm:p-8 text-gray-900">
      <h1 className="text-3xl font-bold text-center mb-8">
        Assigned Services ({parcels.length})
      </h1>

      <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
        <table className="w-full border-collapse text-left">
          <thead>
            <tr className="bg-gray-100 text-gray-600 uppercase text-sm font-semibold">
              <th className="px-4 py-2">#</th>
              <th className="px-4 py-2">Service</th>
              <th className="px-4 py-2">Category</th>
              <th className="px-4 py-2">Price</th>
              <th className="px-4 py-2">Earnings</th>
              <th className="px-4 py-2">Status</th>
              <th className="px-4 py-2">Action</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-200">
            {parcels.map((item, index) => (
              <tr key={item.id} className="hover:bg-gray-50">
                <td className="px-4 py-2">{index + 1}</td>

                <td className="px-4 py-2">
                  <div className="font-medium">{item.service_name}</div>
                  <div className="text-xs text-gray-500">{item.created_at}</div>
                </td>

                <td className="px-4 py-2">{item.category}</td>
                <td className="px-4 py-2 font-semibold">{item.price} BDT</td>

                <td className="px-4 py-2 text-blue-600 font-semibold">
                  {item.earnings} BDT
                </td>

                <td className="px-4 py-2">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${statusStyle(
                      item.status
                    )}`}
                  >
                    {item.status.replaceAll("_", " ")}
                  </span>
                </td>

                <td className="px-4 py-2">
                  {/* Desktop Buttons */}
                  <div className="hidden sm:flex space-x-2">
                    <button
                      onClick={() => updateStatus(item.id, "accepted")}
                      className="px-3 py-1 bg-blue-500 text-white rounded text-xs hover:bg-blue-600"
                    >
                      Accept
                    </button>

                    <button
                      onClick={() => updateStatus(item.id, "rejected")}
                      className="px-3 py-1 bg-red-500 text-white rounded text-xs hover:bg-red-600"
                    >
                      Reject
                    </button>

                    <button
                      onClick={() => updateStatus(item.id, "completed")}
                      className="px-3 py-1 bg-green-500 text-white rounded text-xs hover:bg-green-600"
                    >
                      Complete
                    </button>
                  </div>

                  {/* Mobile Dropdown */}
                  <div className="sm:hidden relative">
                    <button
                      onClick={() =>
                        setOpenDropdown(openDropdown === item.id ? null : item.id)
                      }
                      className="px-3 py-1 bg-gray-300 rounded text-xs w-full text-left"
                    >
                      Actions
                    </button>

                    {openDropdown === item.id && (
                      <div className="absolute mt-1 w-full bg-white border rounded shadow-md z-10">
                        <button
                          onClick={() => updateStatus(item.id, "accepted")}
                          className="block w-full text-left px-4 py-2 text-blue-600 hover:bg-blue-100"
                        >
                          Accept
                        </button>
                        <button
                          onClick={() => updateStatus(item.id, "rejected")}
                          className="block w-full text-left px-4 py-2 text-red-600 hover:bg-red-100"
                        >
                          Reject
                        </button>
                        <button
                          onClick={() => updateStatus(item.id, "completed")}
                          className="block w-full text-left px-4 py-2 text-green-600 hover:bg-green-100"
                        >
                          Complete
                        </button>
                      </div>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AssignedDeliveries;
