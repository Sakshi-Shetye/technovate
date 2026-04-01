// "use client";

// import BottomNav from "@/components/admin/BottomNav";

// type Request = {
//   id: string;
//   user: string;
//   provider: string;
//   issue: string;
//   status: "New" | "Completed" | "InProgress" | "Cancelled";
//   date: string;
// };

// const requests: Request[] = [
//   {
//     id: "12345",
//     user: "Alex",
//     provider: "John Doe",
//     issue: "Plumbing",
//     status: "New",
//     date: "2024-05-23 10:00 AM",
//   },
//   {
//     id: "67890",
//     user: "Jordan",
//     provider: "Jane Smith",
//     issue: "Electrical",
//     status: "Completed",
//     date: "2024-05-22 02:30 PM",
//   },
//   {
//     id: "11223",
//     user: "Taylor",
//     provider: "Mike Johnson",
//     issue: "HVAC",
//     status: "InProgress",
//     date: "2024-05-23 09:00 AM",
//   },
//   {
//     id: "44556",
//     user: "Casey",
//     provider: "Sarah Williams",
//     issue: "Cleaning",
//     status: "Cancelled",
//     date: "2024-05-21 11:00 AM",
//   },
// ];

// function getStatusStyles(status: Request["status"]) {
//   switch (status) {
//     case "New":
//       return "bg-blue-100 text-blue-700";
//     case "Completed":
//       return "bg-green-100 text-green-700";
//     case "InProgress":
//       return "bg-yellow-100 text-yellow-700";
//     case "Cancelled":
//       return "bg-red-100 text-red-700";
//     default:
//       return "bg-gray-100 text-gray-700";
//   }
// }

// export default function ServiceRequestsPage() {
//   return (
//     <div className="p-4 space-y-4">
//       <h1 className="mb-2 text-xl font-bold text-gray-900">Service Requests</h1>

//       {requests.map((req) => (
//         <div
//           key={req.id}
//           className="bg-white border border-gray-200 shadow-sm rounded-xl"
//         >
//           <div className="p-4">
//             <div className="flex items-center justify-between">
//               <div>
//                 <p className="text-sm font-semibold text-gray-900">
//                   Request ID: {req.id}
//                 </p>
//                 <p className="text-sm text-gray-600">User: {req.user}</p>
//               </div>
//               <span
//                 className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${getStatusStyles(
//                   req.status
//                 )}`}
//               >
//                 {req.status}
//               </span>
//             </div>

//             <p className="mt-2 text-sm text-gray-600">
//               Provider: {req.provider}
//             </p>
//             <p className="mt-1 text-sm text-gray-600">Issue: {req.issue}</p>

//             <div className="flex items-center justify-between mt-3">
//               <p className="text-xs text-gray-500">{req.date}</p>
//               <button className="text-sm font-semibold text-blue-600 hover:underline">
//                 View Details
//               </button>
//             </div>
//           </div>
//         </div>
//       ))}
//       <BottomNav/>
//     </div>
//   );
// }


"use client";

import BottomNav from "@/components/admin/BottomNav";
import Header from "@/components/Header";

type Request = {
  id: string;
  user: string;
  provider: string;
  issue: string;
  status: "New" | "Completed" | "InProgress" | "Cancelled";
  date: string;
};

const requests: Request[] = [
  {
    id: "MH-REQ-001",
    user: "Suresh Patil",
    provider: "Konkan Auto Garage, Ratnagiri",
    issue: "Engine Breakdown (Car)",
    status: "New",
    date: "2025-09-09 10:00 AM",
  },
  {
    id: "MH-REQ-002",
    user: "Aarti Sawant",
    provider: "Sawantwadi Fuel Delivery",
    issue: "Diesel Shortage",
    status: "Completed",
    date: "2025-09-08 03:30 PM",
  },
  {
    id: "MH-REQ-003",
    user: "Ganesh Naik",
    provider: "Chiplun Tyre Services",
    issue: "Puncture Assistance (Bike)",
    status: "InProgress",
    date: "2025-09-09 09:15 AM",
  },
  {
    id: "MH-REQ-004",
    user: "Sunita Jadhav",
    provider: "Devrukh Tractor Mechanics",
    issue: "Tractor Engine Heating",
    status: "Cancelled",
    date: "2025-09-07 04:45 PM",
  },
];

function getStatusStyles(status: Request["status"]) {
  switch (status) {
    case "New":
      return "bg-blue-100 text-blue-700 group-hover:bg-blue-600 group-hover:text-white";
    case "Completed":
      return "bg-green-100 text-green-700 group-hover:bg-green-600 group-hover:text-white";
    case "InProgress":
      return "bg-yellow-100 text-yellow-700 group-hover:bg-yellow-500 group-hover:text-white";
    case "Cancelled":
      return "bg-red-100 text-red-700 group-hover:bg-red-600 group-hover:text-white";
    default:
      return "bg-gray-100 text-gray-700 group-hover:bg-gray-500 group-hover:text-white";
  }
}

export default function ServiceRequestsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#EAF4FB]">
      {/* Header */}
      <Header/>
      <header className="sticky top-0 z-10 flex items-center justify-center px-4 py-3 bg-white border-b border-gray-200 shadow-sm">
        <h1 className="text-lg sm:text-xl font-bold text-[#0D141C]">
          Service Requests
        </h1>
      </header>

      {/* Main Content */}
      <main className="flex-grow p-4 pb-24 space-y-4">
        {requests.map((req) => (
          <div
            key={req.id}
            className="group bg-white rounded-xl shadow-sm border border-gray-200 hover:bg-[#2B6CB0] hover:shadow-md transition"
          >
            <div className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-semibold text-gray-900 group-hover:text-white">
                    Request ID: {req.id}
                  </p>
                  <p className="text-sm text-gray-600 group-hover:text-gray-200">
                    User: {req.user}
                  </p>
                </div>
                <span
                  className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${getStatusStyles(
                    req.status
                  )}`}
                >
                  {req.status}
                </span>
              </div>

              <p className="mt-2 text-sm text-gray-600 group-hover:text-gray-200">
                Provider: {req.provider}
              </p>
              <p className="mt-1 text-sm text-gray-600 group-hover:text-gray-200">
                Issue: {req.issue}
              </p>

              <div className="flex items-center justify-between mt-3">
                <p className="text-xs text-gray-500 group-hover:text-gray-300">
                  {req.date}
                </p>
                <button className="text-sm font-semibold text-[#2A6293] hover:text-white group-hover:text-white transition">
                  View Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </main>

      {/* Bottom Navigation */}
      <footer className="sticky bottom-0">
        <BottomNav />
      </footer>
    </div>
  );
}
