import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TodaySchedule = () => {
    const [filterDate, setFilterDate] = useState('2025-12-10'); 
    const [schedules, setSchedules] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Load JSON data from public folder
    useEffect(() => {
        axios.get('/data/assignedDeliveries.json') // Make sure JSON is at public/data/assignedDeliveries.json
            .then((res) => {
                setSchedules(res.data);
                setLoading(false);
            })
            .catch((err) => {
                console.error(err);
                setError('Failed to load schedules.');
                setLoading(false);
            });
    }, []);

    // Filter schedules by selected date
    const filteredSchedules = schedules.filter(item => item.created_at === filterDate);

    return (
        <div className="min-h-screen bg-gray-50 text-gray-800 p-8 font-sans">
            <div className="max-w-6xl mx-auto">
                
                {/* Header Section */}
                <h1 className="text-3xl font-medium text-center mb-10">
                    Today's Schedule : <span className="font-light">{filteredSchedules.length}</span>
                </h1>

                {/* Filter Controls */}
                <div className="flex items-center gap-4 mb-6">
                    <label className="text-sm text-gray-700">Filter by date:</label>
                    <input 
                        type="date" 
                        value={filterDate}
                        onChange={(e) => setFilterDate(e.target.value)}
                        className="bg-white border border-gray-300 rounded-md px-3 py-1.5 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                    />
                </div>

                {/* Table Container */}
                <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-md">
                    {loading ? (
                        <div className="py-16 text-center text-gray-500 text-sm">Loading...</div>
                    ) : error ? (
                        <div className="py-16 text-center text-red-600 text-sm">{error}</div>
                    ) : (
                        <table className="w-full text-left">
                            <thead>
                                <tr className="bg-gray-100 text-gray-600 text-sm">
                                    <th className="px-4 py-3 font-semibold w-12">#</th>
                                    <th className="px-4 py-3 font-semibold">Service</th>
                                    <th className="px-4 py-3 font-semibold">Tracking ID</th>
                                    <th className="px-4 py-3 font-semibold text-center">Category</th>
                                    <th className="px-4 py-3 font-semibold text-center">Location</th>
                                    <th className="px-4 py-3 font-semibold text-center">Cost (BDT)</th>
                                    <th className="px-4 py-3 font-semibold text-right pr-6">Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {filteredSchedules.length > 0 ? (
                                    filteredSchedules.map((item, index) => (
                                        <tr key={item.id} className="border-t border-gray-200 hover:bg-gray-50">
                                            <td className="px-4 py-3 font-bold">{index + 1}</td>
                                            <td className="px-4 py-3">{item.service_name}</td>
                                            <td className="px-4 py-3">{item.id}</td>
                                            <td className="px-4 py-3 text-center">{item.category}</td>
                                            <td className="px-4 py-3 text-center">-</td>
                                            <td className="px-4 py-3 text-center font-bold text-blue-600">{item.price}</td>
                                            <td className={`px-4 py-3 text-right pr-6 font-semibold ${
                                                item.status === 'accepted' ? 'text-green-600' :
                                                item.status === 'rejected' ? 'text-red-600' :
                                                'text-gray-600'
                                            }`}>
                                                {item.status}
                                            </td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan="7" className="py-16 text-center text-gray-500 text-sm italic">
                                            No deliveries scheduled for this date.
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    )}
                </div>
            </div>
        </div>
    );
};

export default TodaySchedule;
