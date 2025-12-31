import React, { useEffect, useState } from "react";
import axios from "axios";

const EarningsSummary = () => {
  const [deliveries, setDeliveries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("/data/earningsSummary.json") 
      .then((response) => {
        setDeliveries(response.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setError("Failed to load earnings data.");
        setLoading(false);
      });
  }, []);

  const totalEarnings = deliveries.reduce((sum, item) => sum + item.earnings, 0);

  if (loading) return <div className="p-8 text-gray-700">Loading...</div>;
  if (error) return <div className="p-8 text-red-600">{error}</div>;

  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-8 font-sans text-gray-800">
      <div className="flex flex-col items-center mb-8">
       
        <h1 className="text-3xl font-bold text-center text-gray-900">
          Deliveries Earnings Summary
        </h1>
        <p className="text-blue-600 mt-1">Completed Deliveries: {deliveries.length}</p>
      </div>

      <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
        <table className="w-full border-collapse text-left">
          <thead>
            <tr className="bg-gray-100 text-gray-600 uppercase text-xs font-bold border-b">
              <th className="px-6 py-4">#</th>
              <th className="px-6 py-4">Service Name</th>
              <th className="px-6 py-4">Created At</th>
              <th className="px-6 py-4">Category</th>
              <th className="px-6 py-4 text-blue-600">Price</th>
              <th className="px-6 py-4 text-green-600">Earnings</th>
              <th className="px-6 py-4">Actions</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-100">
            {deliveries.map((item, index) => (
              <tr key={item.id} className="hover:bg-gray-50 transition-colors">
                <td className="px-6 py-5 font-bold">{index + 1}</td>
                <td className="px-6 py-5 font-medium">{item.service_name}</td>
                <td className="px-6 py-5 text-gray-500">{item.created_at}</td>
                <td className="px-6 py-5 text-gray-500">{item.category}</td>
                <td className="px-6 py-5 font-bold text-blue-600">{item.price} BDT</td>
                <td className="px-6 py-5 font-bold text-green-600">{item.earnings} BDT</td>
                <td className="px-6 py-5">
                  <button className="bg-primary  text-white px-4 py-2 rounded-lg text-sm font-semibold shadow-md transition-all">
                    Cash Out
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="p-6 text-right font-bold text-xl bg-gray-100 border-t">
          Total Combined Earnings:{" "}
          <span className="text-green-600">{totalEarnings} BDT</span>
        </div>
      </div>
    </div>
  );
};

export default EarningsSummary;
