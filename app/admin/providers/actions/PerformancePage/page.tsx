// "use client";

// import { useState, useEffect } from "react";
// import { useSearchParams } from "next/navigation";
// import Header from "@/components/Header";
// import BottomNav from "@/components/admin/BottomNav";

// interface ProviderPerformance {
//   id: string;
//   requestsAssigned: number;
//   completed: number;
//   rejected: number;
//   earnings: number;
//   rating: number;
// }

// export default function PerformancePage() {
//   const searchParams = useSearchParams();
//   const providerId = searchParams.get("id");
//   const [performance, setPerformance] = useState<ProviderPerformance | null>(null);

//   useEffect(() => {
//     if (providerId) {
//       const mockData: ProviderPerformance[] = [
//         { id: "MH-001", requestsAssigned: 120, completed: 98, rejected: 5, earnings: 145000, rating: 4.7 },
//         { id: "MH-002", requestsAssigned: 150, completed: 130, rejected: 10, earnings: 175000, rating: 4.9 },
//       ];
//       const found = mockData.find((p) => p.id === providerId);
//       setPerformance(found || null);
//     }
//   }, [providerId]);

//   if (!performance) return <div className="p-4">Performance data not found.</div>;

//   return (
//     <div className="flex flex-col min-h-screen bg-[#EAF4FB]">
//       <Header />
//       <main className="flex-grow max-w-2xl p-4 pb-24 mx-auto space-y-6">
//         <h1 className="mb-4 text-2xl font-bold">Provider Performance</h1>

//         <div className="grid grid-cols-2 gap-4 p-4 text-center bg-white shadow-md rounded-xl sm:grid-cols-4">
//           <div className="flex flex-col items-center">
//             <span className="text-lg font-bold">{performance.requestsAssigned}</span>
//             <span className="text-sm text-gray-600">Assigned</span>
//           </div>
//           <div className="flex flex-col items-center">
//             <span className="text-lg font-bold">{performance.completed}</span>
//             <span className="text-sm text-gray-600">Completed</span>
//           </div>
//           <div className="flex flex-col items-center">
//             <span className="text-lg font-bold">{performance.rejected}</span>
//             <span className="text-sm text-gray-600">Rejected</span>
//           </div>
//           <div className="flex flex-col items-center">
//             <span className="text-lg font-bold">₹ {performance.earnings.toLocaleString()}</span>
//             <span className="text-sm text-gray-600">Earnings</span>
//           </div>
//         </div>

//         <div className="p-4 text-center bg-white shadow-md rounded-xl">
//           <span className="text-gray-700">Average Rating: </span>
//           <span className="text-lg font-bold">{performance.rating} ⭐</span>
//         </div>
//       </main>
//       <footer className="sticky bottom-0">
//         <BottomNav />
//       </footer>
//     </div>
//   );
// }



// "use client";

// import { useState, useEffect } from "react";
// import { useSearchParams } from "next/navigation";
// import Header from "@/components/Header";
// import BottomNav from "@/components/admin/BottomNav";
// import { ChevronDown } from "lucide-react";

// interface Request {
//   id: string;
//   type: "Repair" | "Fuel Delivery" | "Maintenance";
//   date: string;
//   location: string;
//   status: "Assigned" | "Completed" | "Rejected";
//   paymentReceived: number;
// }

// interface ProviderPerformance {
//   id: string;
//   rating: number;
//   requests: Request[];
// }

// export default function PerformancePage() {
//   const searchParams = useSearchParams();
//   const providerId = searchParams.get("id");

//   const [performance, setPerformance] = useState<ProviderPerformance | null>(null);
//   const [filterType, setFilterType] = useState<"All" | "Repair" | "Fuel Delivery" | "Maintenance">("All");
//   const [filterDate, setFilterDate] = useState<"All" | "Last7Days" | "Last30Days" | "ThisYear">("All");

//   useEffect(() => {
//     if (providerId) {
//       // Mock data for requests
//       const mockRequests: Request[] = Array.from({ length: 20 }, (_, i) => ({
//         id: `REQ-${1000 + i}`,
//         type: ["Repair", "Fuel Delivery", "Maintenance"][i % 3] as Request["type"],
//         date: `2025-09-${(i % 30) + 1}`.padStart(10, "0"),
//         location: ["Ratnagiri", "Sawantwadi", "Chiplun"][i % 3],
//         status: i % 5 === 0 ? "Rejected" : i % 4 === 0 ? "Assigned" : "Completed",
//         paymentReceived: i % 5 === 0 ? 0 : 2000 + i * 50,
//       }));

//       setPerformance({
//         id: providerId,
//         rating: 4.7,
//         requests: mockRequests,
//       });
//     }
//   }, [providerId]);

//   if (!performance) return <div className="p-4">Performance data not found.</div>;

//   const filteredRequests = performance.requests.filter((r) => (filterType === "All" ? true : r.type === filterType));

//   return (
//     <div className="flex flex-col min-h-screen bg-[#EAF4FB]">
//       <Header />

//       <main className="flex-grow max-w-4xl p-4 pb-24 mx-auto space-y-6">
//         <h1 className="mb-4 text-2xl font-bold">Provider Performance Details</h1>

//         {/* Summary Cards */}
//         <div className="grid grid-cols-2 gap-4 p-4 text-center bg-white shadow-md sm:grid-cols-4 rounded-xl">
//           <div>
//             <span className="text-lg font-bold">{performance.requests.length}</span>
//             <span className="block text-sm text-gray-600">Assigned</span>
//           </div>
//           <div>
//             <span className="text-lg font-bold">{performance.requests.filter(r => r.status === "Completed").length}</span>
//             <span className="block text-sm text-gray-600">Completed</span>
//           </div>
//           <div>
//             <span className="text-lg font-bold">{performance.requests.filter(r => r.status === "Rejected").length}</span>
//             <span className="block text-sm text-gray-600">Rejected</span>
//           </div>
//           <div>
//             <span className="text-lg font-bold">₹ {performance.requests.reduce((sum, r) => sum + r.paymentReceived, 0).toLocaleString()}</span>
//             <span className="block text-sm text-gray-600">Earnings</span>
//           </div>
//         </div>

//         <div className="p-4 text-center bg-white shadow-md rounded-xl">
//           <span className="text-gray-700">Average Rating: </span>
//           <span className="text-lg font-bold">{performance.rating} ⭐</span>
//         </div>

//         {/* Filters */}
//         <div className="flex flex-wrap items-center gap-4">
//           <div className="relative">
//             <select
//               className="px-3 py-2 border rounded-md"
//               value={filterType}
//               onChange={(e) => setFilterType(e.target.value as any)}
//             >
//               <option value="All">All Types</option>
//               <option value="Repair">Repair</option>
//               <option value="Fuel Delivery">Fuel Delivery</option>
//               <option value="Maintenance">Maintenance</option>
//             </select>
//           </div>

//           <div className="relative">
//             <select
//               className="px-3 py-2 border rounded-md"
//               value={filterDate}
//               onChange={(e) => setFilterDate(e.target.value as any)}
//             >
//               <option value="All">All Dates</option>
//               <option value="Last7Days">Last 7 Days</option>
//               <option value="Last30Days">Last 30 Days</option>
//               <option value="ThisYear">This Year</option>
//             </select>
//           </div>
//         </div>

//         {/* Requests List */}
//         <div className="space-y-2">
//           {filteredRequests.map((req) => (
//             <div key={req.id} className="flex flex-col items-start justify-between gap-2 p-3 bg-white rounded-lg shadow-sm sm:flex-row sm:items-center">
//               <div>
//                 <h4 className="font-semibold">{req.type} - {req.id}</h4>
//                 <p className="text-sm text-gray-600">Date: {req.date} | Location: {req.location}</p>
//               </div>
//               <div className="flex items-center gap-4">
//                 <span className={`px-2 py-1 rounded-md text-xs font-semibold ${req.status === "Completed" ? "bg-green-100 text-green-700" : req.status === "Assigned" ? "bg-blue-100 text-blue-700" : "bg-red-100 text-red-700"}`}>
//                   {req.status}
//                 </span>
//                 <span className="font-semibold text-gray-700">₹ {req.paymentReceived}</span>
//               </div>
//             </div>
//           ))}
//           {filteredRequests.length === 0 && <p className="py-4 text-center text-gray-500">No requests found for selected filters.</p>}
//         </div>
//       </main>

//       <footer className="sticky bottom-0">
//         <BottomNav />
//       </footer>
//     </div>
//   );
// }

"use client";

import { useState, useEffect, ChangeEvent } from "react";
import { useSearchParams } from "next/navigation";
import Header from "@/components/Header";
import BottomNav from "@/components/admin/BottomNav";

interface Request {
  id: string;
  type: "Repair" | "Fuel Delivery" | "Maintenance";
  date: string; // "YYYY-MM-DD"
  location: string;
  status: "Assigned" | "Completed" | "Rejected";
  paymentReceived: number;
  time: "Morning" | "Afternoon" | "Night" | string;
}

interface ProviderPerformance {
  id: string;
  rating: number;
  requests: Request[];
}

export default function PerformancePage() {
  const searchParams = useSearchParams();
  const providerId = searchParams.get("id");

  const [performance, setPerformance] = useState<ProviderPerformance | null>(null);
  const [filterType, setFilterType] = useState<"All" | "Repair" | "Fuel Delivery" | "Maintenance">("All");
  const [filterDate, setFilterDate] = useState<"All" | "Last7Days" | "Last30Days" | "ThisYear" | "Custom">("All");
  const [customDateRange, setCustomDateRange] = useState<{ start: string; end: string }>({ start: "", end: "" });
  const [filterTime, setFilterTime] = useState<"All" | "Morning" | "Afternoon" | "Night" | "Custom">("All");
  const [customTimeRange, setCustomTimeRange] = useState<{ start: string; end: string }>({ start: "", end: "" });

  useEffect(() => {
    if (providerId) {
      const mockRequests: Request[] = Array.from({ length: 20 }, (_, i) => ({
        id: `REQ-${1000 + i}`,
        type: ["Repair", "Fuel Delivery", "Maintenance"][i % 3] as Request["type"],
        date: `2025-09-${(i % 30) + 1}`.padStart(10, "0"),
        location: ["Ratnagiri", "Sawantwadi", "Chiplun"][i % 3],
        status: i % 5 === 0 ? "Rejected" : i % 4 === 0 ? "Assigned" : "Completed",
        paymentReceived: i % 5 === 0 ? 0 : 2000 + i * 50,
        time: ["Morning", "Afternoon", "Night"][i % 3] as Request["time"],
      }));

      setPerformance({
        id: providerId,
        rating: 4.7,
        requests: mockRequests,
      });
    }
  }, [providerId]);

  if (!performance) return <div className="p-4">Performance data not found.</div>;

  const handleTypeChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setFilterType(e.target.value as "All" | "Repair" | "Fuel Delivery" | "Maintenance");
  };

  const handleDateChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setFilterDate(e.target.value as "All" | "Last7Days" | "Last30Days" | "ThisYear" | "Custom");
  };

  const handleTimeChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setFilterTime(e.target.value as "All" | "Morning" | "Afternoon" | "Night" | "Custom");
  };

  const filteredRequests = performance.requests.filter((r) => {
    // Type filter
    if (filterType !== "All" && r.type !== filterType) return false;

    // Time filter
    if (filterTime !== "All") {
      if (filterTime === "Custom" && customTimeRange.start && customTimeRange.end) {
        const [reqHour, reqMin] = r.time.includes(":") ? r.time.split(":").map(Number) : [0, 0];
        const [startHour, startMin] = customTimeRange.start.split(":").map(Number);
        const [endHour, endMin] = customTimeRange.end.split(":").map(Number);
        const reqMinutes = reqHour * 60 + reqMin;
        const startMinutes = startHour * 60 + startMin;
        const endMinutes = endHour * 60 + endMin;
        if (reqMinutes < startMinutes || reqMinutes > endMinutes) return false;
      } else if (filterTime !== "Custom" && r.time !== filterTime) return false;
    }

    // Date filter
    const today = new Date();
    const reqDate = new Date(r.date);

    if (filterDate === "Last7Days") {
      const past7 = new Date(today);
      past7.setDate(today.getDate() - 7);
      if (reqDate < past7) return false;
    } else if (filterDate === "Last30Days") {
      const past30 = new Date(today);
      past30.setDate(today.getDate() - 30);
      if (reqDate < past30) return false;
    } else if (filterDate === "ThisYear") {
      if (reqDate.getFullYear() !== today.getFullYear()) return false;
    } else if (filterDate === "Custom") {
      if (customDateRange.start && customDateRange.end) {
        const startDate = new Date(customDateRange.start);
        const endDate = new Date(customDateRange.end);
        if (reqDate < startDate || reqDate > endDate) return false;
      }
    }

    return true;
  });

  return (
    <div className="flex flex-col min-h-screen bg-[#EAF4FB]">
      <Header />

      <main className="flex-grow max-w-4xl p-4 pb-24 mx-auto space-y-6">
        <h1 className="mb-4 text-2xl font-bold">Provider Performance Details</h1>

        {/* Summary Cards */}
        <div className="grid grid-cols-2 gap-4 p-4 text-center bg-white shadow-md sm:grid-cols-4 rounded-xl">
          <div>
            <span className="text-lg font-bold">{performance.requests.length}</span>
            <span className="block text-sm text-gray-600">Assigned</span>
          </div>
          <div>
            <span className="text-lg font-bold">{performance.requests.filter(r => r.status === "Completed").length}</span>
            <span className="block text-sm text-gray-600">Completed</span>
          </div>
          <div>
            <span className="text-lg font-bold">{performance.requests.filter(r => r.status === "Rejected").length}</span>
            <span className="block text-sm text-gray-600">Rejected</span>
          </div>
          <div>
            <span className="text-lg font-bold">₹ {performance.requests.reduce((sum, r) => sum + r.paymentReceived, 0).toLocaleString()}</span>
            <span className="block text-sm text-gray-600">Earnings</span>
          </div>
        </div>

        <div className="p-4 text-center bg-white shadow-md rounded-xl">
          <span className="text-gray-700">Average Rating: </span>
          <span className="text-lg font-bold">{performance.rating} ⭐</span>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap items-center gap-4">
          <select className="px-3 py-2 border rounded-md" value={filterType} onChange={handleTypeChange}>
            <option value="All">All Types</option>
            <option value="Repair">Repair</option>
            <option value="Fuel Delivery">Fuel Delivery</option>
            <option value="Maintenance">Maintenance</option>
          </select>

          <select className="px-3 py-2 border rounded-md" value={filterDate} onChange={handleDateChange}>
            <option value="All">All Dates</option>
            <option value="Last7Days">Last 7 Days</option>
            <option value="Last30Days">Last 30 Days</option>
            <option value="ThisYear">This Year</option>
            <option value="Custom">Custom Range</option>
          </select>

          {filterDate === "Custom" && (
            <div className="flex gap-2">
              <input type="date" className="px-2 py-1 border rounded-md" value={customDateRange.start} onChange={e => setCustomDateRange(prev => ({ ...prev, start: e.target.value }))}/>
              <input type="date" className="px-2 py-1 border rounded-md" value={customDateRange.end} onChange={e => setCustomDateRange(prev => ({ ...prev, end: e.target.value }))}/>
            </div>
          )}

          <select className="px-3 py-2 border rounded-md" value={filterTime} onChange={handleTimeChange}>
            <option value="All">All Times</option>
            <option value="Morning">Morning</option>
            <option value="Afternoon">Afternoon</option>
            <option value="Night">Night</option>
            <option value="Custom">Custom Range</option>
          </select>

          {filterTime === "Custom" && (
            <div className="flex gap-2">
              <input type="time" className="px-2 py-1 border rounded-md" value={customTimeRange.start} onChange={e => setCustomTimeRange(prev => ({ ...prev, start: e.target.value }))}/>
              <input type="time" className="px-2 py-1 border rounded-md" value={customTimeRange.end} onChange={e => setCustomTimeRange(prev => ({ ...prev, end: e.target.value }))}/>
            </div>
          )}
        </div>

        {/* Requests List */}
        <div className="space-y-2">
          {filteredRequests.map(req => (
            <div key={req.id} className="flex flex-col items-start justify-between gap-2 p-3 bg-white rounded-lg shadow-sm sm:flex-row sm:items-center">
              <div>
                <h4 className="font-semibold">{req.type} - {req.id}</h4>
                <p className="text-sm text-gray-600">Date: {req.date} | Location: {req.location} | Time: {req.time}</p>
              </div>
              <div className="flex items-center gap-4">
                <span className={`px-2 py-1 rounded-md text-xs font-semibold ${req.status === "Completed" ? "bg-green-100 text-green-700" : req.status === "Assigned" ? "bg-blue-100 text-blue-700" : "bg-red-100 text-red-700"}`}>{req.status}</span>
                <span className="font-semibold text-gray-700">₹ {req.paymentReceived}</span>
              </div>
            </div>
          ))}
          {filteredRequests.length === 0 && <p className="py-4 text-center text-gray-500">No requests found for selected filters.</p>}
        </div>
      </main>

      <footer className="sticky bottom-0">
        <BottomNav />
      </footer>
    </div>
  );
}

