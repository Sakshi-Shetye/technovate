// "use client";


// import React, { useState } from "react";

// const EarningsPage = () => {
//   const [earnings] = useState({
//     total: 12500,
//     pending: 3200,
//   });

//   const [transactions] = useState([
//     { id: 1, date: "2025-08-01", service: "Towing", amount: 1500, status: "Completed" },
//     { id: 2, date: "2025-08-03", service: "Fuel Delivery", amount: 700, status: "Completed" },
//     { id: 3, date: "2025-08-05", service: "Ambulance", amount: 1000, status: "Pending" },
//   ]);

//   const [snackbar, setSnackbar] = useState({ show: false, message: "" });

//   const showSnackbar = (message) => {
//     setSnackbar({ show: true, message });
//     setTimeout(() => setSnackbar({ show: false, message: "" }), 3000);
//   };

//   const handleRequestPayout = () => {
//     showSnackbar("Withdrawal request submitted! (Demo)");
//   };

//   return (
//     <div className="flex items-start justify-center min-h-screen px-4 py-8 bg-gray-100 sm:px-6 lg:px-8">
  
//       <div className="w-full max-w-4xl space-y-6">
//         {/* Title */}
//         <h1 className="mb-4 text-2xl font-bold text-gray-900 sm:text-3xl sm:mb-6">
//           Earnings & Payouts
//         </h1>

//         {/* Earnings Summary */}
//         <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
//           {/* Total Earnings */}
//           <div className="p-6 bg-white shadow-lg rounded-2xl">
//             <p className="text-gray-500">Total Earnings</p>
//             <p className="text-2xl font-bold text-green-600 sm:text-3xl">
//               ₹{earnings.total}
//             </p>
//           </div>

//           {/* Pending Payouts */}
//           <div className="flex flex-col justify-between p-6 bg-white shadow-lg rounded-2xl">
//             <div>
//               <p className="text-gray-500">Pending Payouts</p>
//               <p className="text-2xl font-bold text-yellow-600 sm:text-3xl">
//                 ₹{earnings.pending}
//               </p>
//             </div>
//             <button
//               onClick={handleRequestPayout}
//               className="w-full px-4 py-2 mt-4 font-semibold text-white transition-colors duration-300 bg-blue-600 shadow-md hover:bg-blue-700 rounded-xl"
//             >
//               Request Withdrawal
//             </button>
//           </div>
//         </div>

//         {/* Transactions */}
//         <div className="p-6 bg-white shadow-lg rounded-2xl">
//           <h2 className="mb-4 text-lg font-semibold sm:text-xl">
//             Recent Transactions
//           </h2>

//           {/* Table for md+ screens */}
//           <div className="hidden md:block">
//             <table className="w-full text-sm border-collapse sm:text-base">
//               <thead>
//                 <tr className="text-left text-gray-600 bg-gray-100">
//                   <th className="p-3">Date</th>
//                   <th className="p-3">Service</th>
//                   <th className="p-3">Amount</th>
//                   <th className="p-3">Status</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {transactions.map((tx) => (
//                   <tr key={tx.id} className="transition border-b hover:bg-gray-50">
//                     <td className="p-3">{tx.date}</td>
//                     <td className="p-3">{tx.service}</td>
//                     <td className="p-3 font-medium">₹{tx.amount}</td>
//                     <td className="p-3">
//                       <span
//                         className={`px-3 py-1 rounded-full text-sm font-medium ${
//                           tx.status === "Completed"
//                             ? "bg-green-100 text-green-700"
//                             : "bg-yellow-100 text-yellow-700"
//                         }`}
//                       >
//                         {tx.status}
//                       </span>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>

//           {/* Card list for small screens */}
//           <div className="space-y-4 md:hidden">
//             {transactions.map((tx) => (
//               <div
//                 key={tx.id}
//                 className="flex flex-col p-4 space-y-2 border rounded-xl bg-gray-50"
//               >
//                 <div className="flex justify-between text-sm text-gray-600">
//                   <span>{tx.date}</span>
//                   <span
//                     className={`px-3 py-1 rounded-full text-xs font-medium ${
//                       tx.status === "Completed"
//                         ? "bg-green-100 text-green-700"
//                         : "bg-yellow-100 text-yellow-700"
//                     }`}
//                   >
//                     {tx.status}
//                   </span>
//                 </div>
//                 <div className="font-medium text-gray-800">{tx.service}</div>
//                 <div className="font-bold text-green-600">₹{tx.amount}</div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Snackbar */}
//       {snackbar.show && (
//         <div className="fixed px-4 py-3 text-sm text-white bg-gray-900 rounded-lg shadow-xl bottom-6 right-4 sm:right-6 animate-fade-in-up sm:text-base">
//           {snackbar.message}
//         </div>
//       )}

//       {/* Animations */}
//       <style>{`
//         @keyframes fade-in-up {
//           from { opacity: 0; transform: translateY(20px); }
//           to { opacity: 1; transform: translateY(0); }
//         }
//         .animate-fade-in-up {
//           animation: fade-in-up 0.3s ease-out forwards;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default EarningsPage;

"use client";

import React, { useState, useMemo } from "react";
import Header from "@/components/Header";

const EarningsPage = () => {
  const [earnings] = useState({ total: 12500, pending: 3200 });
  const [transactions] = useState([
    { id: 1, date: "2025-08-01", service: "Towing", amount: 1500, status: "Completed" },
    { id: 2, date: "2025-08-03", service: "Fuel Delivery", amount: 700, status: "Completed" },
    { id: 3, date: "2025-08-05", service: "Ambulance", amount: 1000, status: "Pending" },
  ]);

  const [snackbar, setSnackbar] = useState({ show: false, message: "" });
  const [filterType, setFilterType] = useState("All");
  const [filterDate, setFilterDate] = useState("All");
  const [customDateRange, setCustomDateRange] = useState({ start: "", end: "" });

  // Show snackbar
  const showSnackbar = (message: string) => {
    setSnackbar({ show: true, message });
    setTimeout(() => setSnackbar({ show: false, message: "" }), 3000);
  };

  const handleRequestPayout = () => {
    showSnackbar("Withdrawal request submitted! (Demo)");
  };

  // Filter transactions
  const filteredTransactions = useMemo(() => {
    let filtered = [...transactions];

    // Filter by Type
    if (filterType !== "All") {
      filtered = filtered.filter((tx) => tx.service === filterType);
    }

    // Filter by Date
    const now = new Date();
    if (filterDate === "Last7Days") {
      const last7 = new Date();
      last7.setDate(now.getDate() - 7);
      filtered = filtered.filter((tx) => new Date(tx.date) >= last7);
    } else if (filterDate === "Last30Days") {
      const last30 = new Date();
      last30.setDate(now.getDate() - 30);
      filtered = filtered.filter((tx) => new Date(tx.date) >= last30);
    } else if (filterDate === "ThisYear") {
      filtered = filtered.filter((tx) => new Date(tx.date).getFullYear() === now.getFullYear());
    } else if (filterDate === "Custom" && customDateRange.start && customDateRange.end) {
      const start = new Date(customDateRange.start);
      const end = new Date(customDateRange.end);
      filtered = filtered.filter((tx) => {
        const txDate = new Date(tx.date);
        return txDate >= start && txDate <= end;
      });
    }

    return filtered;
  }, [transactions, filterType, filterDate, customDateRange]);

  return (
    <div className="min-h-screen font-sans antialiased bg-sky-100">
      <Header />

      <div className="flex flex-col items-center px-4 py-8 sm:px-6 lg:px-8">
        <div className="w-full max-w-4xl space-y-6">

          {/* Title */}
          <h1 className="text-2xl font-bold text-center text-gray-900 sm:text-3xl">
            Earnings & Payouts
          </h1>

          {/* Filters */}
          <div className="flex flex-wrap items-center gap-4 p-4 bg-white shadow-md rounded-2xl">
            <select
              className="px-3 py-2 border rounded-md"
              value={filterType}
              onChange={(e) => setFilterType(e.target.value)}
            >
              <option value="All">All Types</option>
              <option value="Towing">Towing</option>
              <option value="Fuel Delivery">Fuel Delivery</option>
              <option value="Ambulance">Ambulance</option>
            </select>

            <select
              className="px-3 py-2 border rounded-md"
              value={filterDate}
              onChange={(e) => setFilterDate(e.target.value)}
            >
              <option value="All">All Dates</option>
              <option value="Last7Days">Last 7 Days</option>
              <option value="Last30Days">Last 30 Days</option>
              <option value="ThisYear">This Year</option>
              <option value="Custom">Custom Range</option>
            </select>

            {filterDate === "Custom" && (
              <div className="flex gap-2">
                <input
                  type="date"
                  className="px-2 py-1 border rounded-md"
                  value={customDateRange.start}
                  onChange={(e) =>
                    setCustomDateRange((prev) => ({ ...prev, start: e.target.value }))
                  }
                />
                <input
                  type="date"
                  className="px-2 py-1 border rounded-md"
                  value={customDateRange.end}
                  onChange={(e) =>
                    setCustomDateRange((prev) => ({ ...prev, end: e.target.value }))
                  }
                />
              </div>
            )}
          </div>

          {/* Earnings Summary */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="p-6 bg-white shadow-lg rounded-2xl">
              <p className="text-gray-500">Total Earnings</p>
              <p className="text-2xl font-bold text-green-600 sm:text-3xl">₹{earnings.total}</p>
            </div>
            <div className="flex flex-col justify-between p-6 bg-white shadow-lg rounded-2xl">
              <div>
                <p className="text-gray-500">Pending Payouts</p>
                <p className="text-2xl font-bold text-yellow-600 sm:text-3xl">₹{earnings.pending}</p>
              </div>
              <button
                onClick={handleRequestPayout}
                className="w-full px-4 py-2 mt-4 font-semibold text-white transition-colors duration-300 bg-blue-600 shadow-md hover:bg-blue-700 rounded-xl"
              >
                Request Withdrawal
              </button>
            </div>
          </div>

          {/* Transactions */}
          <div className="w-full p-6 bg-white shadow-lg rounded-2xl">
            <h2 className="mb-4 text-lg font-semibold sm:text-xl">Recent Transactions</h2>

            {/* Table for md+ */}
            <div className="hidden md:block">
              <table className="w-full text-sm border-collapse sm:text-base">
                <thead>
                  <tr className="text-left text-gray-600 bg-gray-100">
                    <th className="p-3">Date</th>
                    <th className="p-3">Service</th>
                    <th className="p-3">Amount</th>
                    <th className="p-3">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredTransactions.map((tx) => (
                    <tr key={tx.id} className="transition border-b hover:bg-gray-50">
                      <td className="p-3">{tx.date}</td>
                      <td className="p-3">{tx.service}</td>
                      <td className="p-3 font-medium">₹{tx.amount}</td>
                      <td className="p-3">
                        <span
                          className={`px-3 py-1 rounded-full text-sm font-medium ${
                            tx.status === "Completed"
                              ? "bg-green-100 text-green-700"
                              : "bg-yellow-100 text-yellow-700"
                          }`}
                        >
                          {tx.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Card list for sm */}
            <div className="space-y-4 md:hidden">
              {filteredTransactions.map((tx) => (
                <div key={tx.id} className="flex flex-col p-4 space-y-2 border rounded-xl bg-gray-50">
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>{tx.date}</span>
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${
                        tx.status === "Completed"
                          ? "bg-green-100 text-green-700"
                          : "bg-yellow-100 text-yellow-700"
                      }`}
                    >
                      {tx.status}
                    </span>
                  </div>
                  <div className="font-medium text-gray-800">{tx.service}</div>
                  <div className="font-bold text-green-600">₹{tx.amount}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Snackbar */}
      {snackbar.show && (
        <div className="fixed px-4 py-3 text-sm text-white bg-gray-900 rounded-lg shadow-xl bottom-6 right-4 sm:right-6 animate-fade-in-up sm:text-base">
          {snackbar.message}
        </div>
      )}

      {/* Animations */}
      <style>{`
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.3s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default EarningsPage;
