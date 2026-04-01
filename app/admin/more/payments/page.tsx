// // app/admin/user/page.tsx
// "use client";

// import { useState } from "react";
// import { ChevronDown } from "lucide-react";
// import BottomNav from "@/components/admin/BottomNav";

// type Transaction = {
//   id: string;
//   date: string;
//   status: "Completed" | "Pending" | "Failed";
//   user: string;
//   provider: string;
//   amount: string;
//   method: string;
// };

// const transactionsData: Transaction[] = [
//   { id: "#12345", date: "2024-07-26 10:00 AM", status: "Completed", user: "Liam Carter", provider: "Dr. Olivia Bennett", amount: "$150.00", method: "Credit Card" },
//   { id: "#67890", date: "2024-07-25 02:30 PM", status: "Pending", user: "Sophia Clark", provider: "Dr. Ethan Hayes", amount: "$200.00", method: "PayPal" },
//   { id: "#11223", date: "2024-07-24 09:15 AM", status: "Completed", user: "Noah Turner", provider: "Dr. Isabella Reed", amount: "$100.00", method: "Credit Card" },
// ];

// const statusColors: Record<string, string> = {
//   Completed: "bg-green-100 text-green-800",
//   Pending: "bg-yellow-100 text-yellow-800",
//   Failed: "bg-red-100 text-red-800",
// };

// const dateOptions = ["All Dates", "Today", "Last 7 Days", "Last 30 Days"];
// const statusOptions = ["All Status", "Completed", "Pending", "Failed"];

// export default function AdminPayments() {
//   const [dateFilter, setDateFilter] = useState("All Dates");
//   const [statusFilter, setStatusFilter] = useState("All Status");
//   const [showDateDropdown, setShowDateDropdown] = useState(false);
//   const [showStatusDropdown, setShowStatusDropdown] = useState(false);

//   const filteredTransactions = transactionsData.filter((t) => {
//     const statusMatch = statusFilter === "All Status" ? true : t.status === statusFilter;
//     const dateMatch = true; // You can implement date filtering logic
//     return statusMatch && dateMatch;
//   });

//   return (
//     <div className="flex flex-col min-h-screen font-manrope bg-[#eaf0fb]">
//       {/* Header */}
//       <header className="flex items-center justify-between p-4 bg-white shadow-sm">
//         <button className="text-[#1e293b]">
//           <span className="text-3xl material-symbols-outlined">menu</span>
//         </button>
//         <h1 className="text-xl font-bold text-[#1e293b]">Payments & Transactions</h1>
//         <div className="w-8" />
//       </header>

//       {/* Filters */}
//       <main className="flex-grow p-4">
//         <div className="mb-6">
//           <h2 className="text-lg font-semibold text-[#1e293b] mb-3">Filters</h2>
//           <div className="relative flex flex-wrap gap-4">
//             {/* Date Dropdown */}
//             <div className="relative">
//               <button
//                 onClick={() => setShowDateDropdown(!showDateDropdown)}
//                 className="flex items-center gap-2 px-4 py-2 bg-white shadow-sm rounded-lg text-[#64748b]"
//               >
//                 <span className="text-sm font-medium">{dateFilter}</span>
//                 <ChevronDown className="w-4 h-4" />
//               </button>
//               {showDateDropdown && (
//                 <div className="absolute left-0 z-10 mt-1 bg-white rounded-md shadow-lg top-full w-44">
//                   {dateOptions.map((option) => (
//                     <div
//                       key={option}
//                       onClick={() => {
//                         setDateFilter(option);
//                         setShowDateDropdown(false);
//                       }}
//                       className="px-4 py-2 hover:bg-[#eaf0fb] cursor-pointer text-sm text-[#1e293b]"
//                     >
//                       {option}
//                     </div>
//                   ))}
//                 </div>
//               )}
//             </div>

//             {/* Status Dropdown */}
//             <div className="relative">
//               <button
//                 onClick={() => setShowStatusDropdown(!showStatusDropdown)}
//                 className="flex items-center gap-2 px-4 py-2 bg-white shadow-sm rounded-lg text-[#64748b]"
//               >
//                 <span className="text-sm font-medium">{statusFilter}</span>
//                 <ChevronDown className="w-4 h-4" />
//               </button>
//               {showStatusDropdown && (
//                 <div className="absolute left-0 z-10 mt-1 bg-white rounded-md shadow-lg top-full w-44">
//                   {statusOptions.map((option) => (
//                     <div
//                       key={option}
//                       onClick={() => {
//                         setStatusFilter(option);
//                         setShowStatusDropdown(false);
//                       }}
//                       className="px-4 py-2 hover:bg-[#eaf0fb] cursor-pointer text-sm text-[#1e293b]"
//                     >
//                       {option}
//                     </div>
//                   ))}
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>

//         {/* Transactions List */}
//         <div className="space-y-4">
//           {filteredTransactions.map((tx) => (
//             <div key={tx.id} className="flex flex-col p-4 bg-white rounded-lg shadow-sm">
//               <div className="flex flex-wrap items-start justify-between mb-3">
//                 <div>
//                   <p className="text-sm font-semibold text-[#1e293b]">{tx.id}</p>
//                   <p className="text-xs text-[#64748b]">{tx.date}</p>
//                 </div>
//                 <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${statusColors[tx.status]}`}>
//                   {tx.status}
//                 </span>
//               </div>
//               <div className="grid grid-cols-2 mb-3 text-sm sm:grid-cols-4 gap-y-2">
//                 <div>
//                   <p className="text-[#64748b]">User</p>
//                   <p className="text-[#1e293b] font-medium">{tx.user}</p>
//                 </div>
//                 <div>
//                   <p className="text-[#64748b]">Provider</p>
//                   <p className="text-[#1e293b] font-medium">{tx.provider}</p>
//                 </div>
//                 <div>
//                   <p className="text-[#64748b]">Amount</p>
//                   <p className="text-[#1e293b] font-medium">{tx.amount}</p>
//                 </div>
//                 <div>
//                   <p className="text-[#64748b]">Method</p>
//                   <p className="text-[#1e293b] font-medium">{tx.method}</p>
//                 </div>
//               </div>
//               <div className="flex flex-wrap justify-end gap-2">
//                 {tx.status === "Completed" && (
//                   <button className="text-sm font-medium text-[#285fd3] hover:underline">Refund</button>
//                 )}
//                 {tx.status === "Pending" && (
//                   <button className="text-sm font-medium text-[#285fd3] hover:underline">Adjust</button>
//                 )}
//               </div>
//             </div>
//           ))}
//         </div>
//       </main>

//       {/* Bottom Navigation */}
//       {/* <nav className="sticky bottom-0 bg-white border-t border-gray-200">
//         <div className="flex items-center justify-around h-16">
//           {[
//             { icon: "dashboard", label: "Dashboard" },
//             { icon: "group", label: "Users" },
//             { icon: "medical_services", label: "Providers" },
//             { icon: "receipt_long", label: "Payments", active: true },
//             { icon: "more_horiz", label: "More" },
//           ].map((item) => (
//             <a
//               key={item.label}
//               href="#"
//               className={`flex flex-col items-center justify-center gap-1 text-xs font-medium ${
//                 item.active ? "text-[#285fd3] p-2 rounded-lg bg-[#eaf0fb]" : "text-[#64748b]"
//               }`}
//             >
//               <span className="material-symbols-outlined">{item.icon}</span>
//               <p>{item.label}</p>
//             </a>
//           ))}
//         </div>
//       </nav> */}
//       <BottomNav/>
//     </div>
//   );
// }


// // app/admin/user/page.tsx
// "use client";

// import { useState } from "react";
// import { ChevronDown } from "lucide-react";
// import BottomNav from "@/components/admin/BottomNav";

// type Transaction = {
//   id: string;
//   date: string;
//   status: "Completed" | "Pending" | "Failed";
//   user: string;
//   provider: string;
//   amount: string;
//   method: string;
// };

// const transactionsData: Transaction[] = [
//   { id: "#10001", date: "2024-07-26 10:00 AM", status: "Completed", user: "Ramesh Patil", provider: "Ganesh Autocare, Ratnagiri", amount: "₹1,200", method: "UPI" },
//   { id: "#10002", date: "2024-07-25 02:30 PM", status: "Pending", user: "Sunita Deshmukh", provider: "Sai Garage, Chiplun", amount: "₹850", method: "Cash" },
//   { id: "#10003", date: "2024-07-24 09:15 AM", status: "Failed", user: "Mahesh Sawant", provider: "Shiv Shakti Motors, Kudal", amount: "₹1,500", method: "Credit Card" },
//   { id: "#10004", date: "2024-07-23 05:45 PM", status: "Completed", user: "Aarti Jadhav", provider: "Konkan Fuel Service, Dapoli", amount: "₹600", method: "UPI" },
// ];

// const statusColors: Record<string, string> = {
//   Completed: "bg-green-100 text-green-800",
//   Pending: "bg-yellow-100 text-yellow-800",
//   Failed: "bg-red-100 text-red-800",
// };

// const dateOptions = ["All Dates", "Today", "Last 7 Days", "Last 30 Days"];
// const statusOptions = ["All Status", "Completed", "Pending", "Failed"];

// export default function AdminPayments() {
//   const [dateFilter, setDateFilter] = useState("All Dates");
//   const [statusFilter, setStatusFilter] = useState("All Status");
//   const [showDateDropdown, setShowDateDropdown] = useState(false);
//   const [showStatusDropdown, setShowStatusDropdown] = useState(false);

//   const filteredTransactions = transactionsData.filter((t) => {
//     const statusMatch = statusFilter === "All Status" ? true : t.status === statusFilter;
//     const dateMatch = true; // You can extend with actual date logic
//     return statusMatch && dateMatch;
//   });

//   return (
//     <div className="flex flex-col min-h-screen font-manrope bg-[#EAF4FB]">
//       {/* Header */}
//       <header className="sticky top-0 z-10 flex items-center justify-center px-4 py-3 bg-white border-b border-gray-200 shadow-sm">
//         <h1 className="text-lg sm:text-xl font-bold text-[#0D141C]">
//           Payments & Transactions
//         </h1>
//       </header>

//       {/* Filters */}
//       <main className="flex-grow p-4">
//         <div className="mb-6">
//           <h2 className="mb-3 text-lg font-semibold text-[#0D141C]">Filters</h2>
//           <div className="relative flex flex-wrap gap-4">
//             {/* Date Dropdown */}
//             <div className="relative">
//               <button
//                 onClick={() => setShowDateDropdown(!showDateDropdown)}
//                 className="flex items-center gap-2 px-4 py-2 bg-white shadow-sm rounded-lg text-[#64748b] hover:bg-[#2A6293] hover:text-white"
//               >
//                 <span className="text-sm font-medium">{dateFilter}</span>
//                 <ChevronDown className="w-4 h-4" />
//               </button>
//               {showDateDropdown && (
//                 <div className="absolute left-0 z-10 mt-1 bg-white rounded-md shadow-lg top-full w-44">
//                   {dateOptions.map((option) => (
//                     <div
//                       key={option}
//                       onClick={() => {
//                         setDateFilter(option);
//                         setShowDateDropdown(false);
//                       }}
//                       className="px-4 py-2 text-sm text-[#1e293b] cursor-pointer hover:bg-[#2A6293] hover:text-white"
//                     >
//                       {option}
//                     </div>
//                   ))}
//                 </div>
//               )}
//             </div>

//             {/* Status Dropdown */}
//             <div className="relative">
//               <button
//                 onClick={() => setShowStatusDropdown(!showStatusDropdown)}
//                 className="flex items-center gap-2 px-4 py-2 bg-white shadow-sm rounded-lg text-[#64748b] hover:bg-[#2A6293] hover:text-white"
//               >
//                 <span className="text-sm font-medium">{statusFilter}</span>
//                 <ChevronDown className="w-4 h-4" />
//               </button>
//               {showStatusDropdown && (
//                 <div className="absolute left-0 z-10 mt-1 bg-white rounded-md shadow-lg top-full w-44">
//                   {statusOptions.map((option) => (
//                     <div
//                       key={option}
//                       onClick={() => {
//                         setStatusFilter(option);
//                         setShowStatusDropdown(false);
//                       }}
//                       className="px-4 py-2 text-sm text-[#1e293b] cursor-pointer hover:bg-[#2A6293] hover:text-white"
//                     >
//                       {option}
//                     </div>
//                   ))}
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>

//         {/* Transactions List */}
//         <div className="space-y-4">
//           {filteredTransactions.map((tx) => (
//             <div
//               key={tx.id}
//               className="flex flex-col p-4 bg-white rounded-lg shadow-sm transition hover:bg-[#F1F8FF]"
//             >
//               <div className="flex flex-wrap items-start justify-between mb-3">
//                 <div>
//                   <p className="text-sm font-semibold text-[#0D141C]">{tx.id}</p>
//                   <p className="text-xs text-[#64748b]">{tx.date}</p>
//                 </div>
//                 <span
//                   className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${statusColors[tx.status]}`}
//                 >
//                   {tx.status}
//                 </span>
//               </div>
//               <div className="grid grid-cols-2 mb-3 text-sm sm:grid-cols-4 gap-y-2">
//                 <div>
//                   <p className="text-[#64748b]">User</p>
//                   <p className="font-medium text-[#0D141C]">{tx.user}</p>
//                 </div>
//                 <div>
//                   <p className="text-[#64748b]">Provider</p>
//                   <p className="font-medium text-[#0D141C]">{tx.provider}</p>
//                 </div>
//                 <div>
//                   <p className="text-[#64748b]">Amount</p>
//                   <p className="font-medium text-[#0D141C]">{tx.amount}</p>
//                 </div>
//                 <div>
//                   <p className="text-[#64748b]">Method</p>
//                   <p className="font-medium text-[#0D141C]">{tx.method}</p>
//                 </div>
//               </div>
//               <div className="flex flex-wrap justify-end gap-2">
//                 {tx.status === "Completed" && (
//                   <button className="text-sm font-medium text-[#2A6293] hover:text-white hover:bg-[#2A6293] px-3 py-1 rounded-lg">
//                     Refund
//                   </button>
//                 )}
//                 {tx.status === "Pending" && (
//                   <button className="text-sm font-medium text-[#2A6293] hover:text-white hover:bg-[#2A6293] px-3 py-1 rounded-lg">
//                     Adjust
//                   </button>
//                 )}
//               </div>
//             </div>
//           ))}
//         </div>
//       </main>

//       {/* Bottom Navigation */}
//       <footer className="sticky bottom-0">
//         <BottomNav />
//       </footer>
//     </div>
//   );
// }


// // app/admin/user/page.tsx
// "use client";

// import { useState } from "react";
// import { ChevronDown } from "lucide-react";
// import BottomNav from "@/components/admin/BottomNav";

// type Transaction = {
//   id: string;
//   date: string;
//   status: "Completed" | "Pending" | "Failed";
//   user: string;
//   provider: string;
//   amount: string;
//   method: string;
// };

// const transactionsData: Transaction[] = [
//   {
//     id: "#10001",
//     date: "2024-07-26 10:00 AM",
//     status: "Completed",
//     user: "Ramesh Patil",
//     provider: "Ganesh Autocare, Ratnagiri",
//     amount: "₹1,200",
//     method: "UPI",
//   },
//   {
//     id: "#10002",
//     date: "2024-07-25 02:30 PM",
//     status: "Pending",
//     user: "Sunita Deshmukh",
//     provider: "Sai Garage, Chiplun",
//     amount: "₹850",
//     method: "Cash",
//   },
//   {
//     id: "#10003",
//     date: "2024-07-24 09:15 AM",
//     status: "Failed",
//     user: "Mahesh Sawant",
//     provider: "Shiv Shakti Motors, Kudal",
//     amount: "₹1,500",
//     method: "Credit Card",
//   },
//   {
//     id: "#10004",
//     date: "2024-07-23 05:45 PM",
//     status: "Completed",
//     user: "Aarti Jadhav",
//     provider: "Konkan Fuel Service, Dapoli",
//     amount: "₹600",
//     method: "UPI",
//   },
// ];

// const statusColors: Record<string, string> = {
//   Completed: "bg-green-100 text-green-800",
//   Pending: "bg-yellow-100 text-yellow-800",
//   Failed: "bg-red-100 text-red-800",
// };

// const dateOptions = ["All Dates", "Today", "Last 7 Days", "Last 30 Days"];
// const statusOptions = ["All Status", "Completed", "Pending", "Failed"];

// export default function AdminPayments() {
//   const [dateFilter, setDateFilter] = useState("All Dates");
//   const [statusFilter, setStatusFilter] = useState("All Status");
//   const [showDateDropdown, setShowDateDropdown] = useState(false);
//   const [showStatusDropdown, setShowStatusDropdown] = useState(false);

//   const filteredTransactions = transactionsData.filter((t) => {
//     const statusMatch =
//       statusFilter === "All Status" ? true : t.status === statusFilter;
//     const dateMatch = true; // Extend with real date logic if needed
//     return statusMatch && dateMatch;
//   });

//   return (
//     <div className="flex flex-col min-h-screen font-manrope bg-[#EAF4FB]">
//       {/* Header */}
//       <header className="sticky top-0 z-10 flex items-center justify-center px-4 py-3 bg-white border-b border-gray-200 shadow-sm">
//         <h1 className="text-lg sm:text-xl font-bold text-[#0D141C]">
//           Payments & Transactions
//         </h1>
//       </header>

//       {/* Filters */}
//       <main className="flex-grow p-4">
//         <div className="mb-6">
//           <h2 className="mb-3 text-lg font-semibold text-[#0D141C]">Filters</h2>
//           <div className="relative flex flex-wrap gap-4">
//             {/* Date Dropdown */}
//             <div className="relative">
//               <button
//                 onClick={() => setShowDateDropdown(!showDateDropdown)}
//                 className="flex items-center gap-2 px-4 py-2 bg-white shadow-sm rounded-lg text-[#64748b] transition hover:bg-[#2A6293] hover:text-white"
//               >
//                 <span className="text-sm font-medium">{dateFilter}</span>
//                 <ChevronDown className="w-4 h-4" />
//               </button>
//               {showDateDropdown && (
//                 <div className="absolute left-0 z-10 mt-1 bg-white rounded-md shadow-lg top-full w-44">
//                   {dateOptions.map((option) => (
//                     <div
//                       key={option}
//                       onClick={() => {
//                         setDateFilter(option);
//                         setShowDateDropdown(false);
//                       }}
//                       className="px-4 py-2 text-sm text-[#1e293b] cursor-pointer transition hover:bg-[#2A6293] hover:text-white"
//                     >
//                       {option}
//                     </div>
//                   ))}
//                 </div>
//               )}
//             </div>

//             {/* Status Dropdown */}
//             <div className="relative">
//               <button
//                 onClick={() => setShowStatusDropdown(!showStatusDropdown)}
//                 className="flex items-center gap-2 px-4 py-2 bg-white shadow-sm rounded-lg text-[#64748b] transition hover:bg-[#2A6293] hover:text-white"
//               >
//                 <span className="text-sm font-medium">{statusFilter}</span>
//                 <ChevronDown className="w-4 h-4" />
//               </button>
//               {showStatusDropdown && (
//                 <div className="absolute left-0 z-10 mt-1 bg-white rounded-md shadow-lg top-full w-44">
//                   {statusOptions.map((option) => (
//                     <div
//                       key={option}
//                       onClick={() => {
//                         setStatusFilter(option);
//                         setShowStatusDropdown(false);
//                       }}
//                       className="px-4 py-2 text-sm text-[#1e293b] cursor-pointer transition hover:bg-[#2A6293] hover:text-white"
//                     >
//                       {option}
//                     </div>
//                   ))}
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>

//         {/* Transactions List */}
//         <div className="space-y-4">
//           {filteredTransactions.map((tx) => (
//             <div
//               key={tx.id}
//               className="flex flex-col p-4 bg-white rounded-lg shadow-sm transition hover:bg-[#2A6293] hover:text-white"
//             >
//               <div className="flex flex-wrap items-start justify-between mb-3">
//                 <div>
//                   <p className="text-sm font-semibold">{tx.id}</p>
//                   <p className="text-xs">{tx.date}</p>
//                 </div>
//                 <span
//                   className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${statusColors[tx.status]}`}
//                 >
//                   {tx.status}
//                 </span>
//               </div>
//               <div className="grid grid-cols-2 mb-3 text-sm sm:grid-cols-4 gap-y-2">
//                 <div>
//                   <p className="opacity-80">User</p>
//                   <p className="font-medium">{tx.user}</p>
//                 </div>
//                 <div>
//                   <p className="opacity-80">Provider</p>
//                   <p className="font-medium">{tx.provider}</p>
//                 </div>
//                 <div>
//                   <p className="opacity-80">Amount</p>
//                   <p className="font-medium">{tx.amount}</p>
//                 </div>
//                 <div>
//                   <p className="opacity-80">Method</p>
//                   <p className="font-medium">{tx.method}</p>
//                 </div>
//               </div>
//               <div className="flex flex-wrap justify-end gap-2">
//                 {tx.status === "Completed" && (
//                   <button className="text-sm font-medium border border-[#2A6293] text-[#2A6293] px-3 py-1 rounded-lg transition hover:bg-[#2A6293] hover:text-white">
//                     Refund
//                   </button>
//                 )}
//                 {tx.status === "Pending" && (
//                   <button className="text-sm font-medium border border-[#2A6293] text-[#2A6293] px-3 py-1 rounded-lg transition hover:bg-[#2A6293] hover:text-white">
//                     Adjust
//                   </button>
//                 )}
//               </div>
//             </div>
//           ))}
//         </div>
//       </main>

//       {/* Bottom Navigation */}
//       <footer className="sticky bottom-0">
//         <BottomNav />
//       </footer>
//     </div>
//   );
// }

// // app/admin/user/page.tsx
// "use client";

// import { useState } from "react";
// import { ChevronDown } from "lucide-react";
// import BottomNav from "@/components/admin/BottomNav";

// type Transaction = {
//   id: string;
//   date: string;
//   status: "Completed" | "Pending" | "Failed";
//   user: string;
//   provider: string;
//   amount: string;
//   method: string;
// };

// const transactionsData: Transaction[] = [
//   {
//     id: "#10001",
//     date: "2024-07-26 10:00 AM",
//     status: "Completed",
//     user: "Ramesh Patil",
//     provider: "Ganesh Autocare, Ratnagiri",
//     amount: "₹1,200",
//     method: "UPI",
//   },
//   {
//     id: "#10002",
//     date: "2024-07-25 02:30 PM",
//     status: "Pending",
//     user: "Sunita Deshmukh",
//     provider: "Sai Garage, Chiplun",
//     amount: "₹850",
//     method: "Cash",
//   },
//   {
//     id: "#10003",
//     date: "2024-07-24 09:15 AM",
//     status: "Failed",
//     user: "Mahesh Sawant",
//     provider: "Shiv Shakti Motors, Kudal",
//     amount: "₹1,500",
//     method: "Credit Card",
//   },
//   {
//     id: "#10004",
//     date: "2024-07-23 05:45 PM",
//     status: "Completed",
//     user: "Aarti Jadhav",
//     provider: "Konkan Fuel Service, Dapoli",
//     amount: "₹600",
//     method: "UPI",
//   },
// ];

// const statusColors: Record<string, string> = {
//   Completed: "bg-green-100 text-green-800",
//   Pending: "bg-yellow-100 text-yellow-800",
//   Failed: "bg-red-100 text-red-800",
// };

// const dateOptions = ["All Dates", "Today", "Last 7 Days", "Last 30 Days"];
// const statusOptions = ["All Status", "Completed", "Pending", "Failed"];

// export default function AdminPayments() {
//   const [dateFilter, setDateFilter] = useState("All Dates");
//   const [statusFilter, setStatusFilter] = useState("All Status");
//   const [showDateDropdown, setShowDateDropdown] = useState(false);
//   const [showStatusDropdown, setShowStatusDropdown] = useState(false);

//   const filteredTransactions = transactionsData.filter((t) => {
//     const statusMatch =
//       statusFilter === "All Status" ? true : t.status === statusFilter;
//     const dateMatch = true;
//     return statusMatch && dateMatch;
//   });

//   return (
//     <div className="flex flex-col min-h-screen font-manrope bg-[#EAF4FB]">
//       {/* Header */}
//       <header className="sticky top-0 z-10 flex items-center justify-center px-4 py-3 bg-white border-b border-gray-200 shadow-sm">
//         <h1 className="text-lg sm:text-xl font-bold text-[#0D141C]">
//           Payments & Transactions
//         </h1>
//       </header>

//       {/* Filters */}
//       <main className="flex-grow p-4">
//         <div className="mb-6">
//           <h2 className="mb-3 text-lg font-semibold text-[#0D141C]">Filters</h2>
//           <div className="relative flex flex-wrap gap-4">
//             {/* Date Dropdown */}
//             <div className="relative">
//               <button
//                 onClick={() => setShowDateDropdown(!showDateDropdown)}
//                 className="flex items-center gap-2 px-4 py-2 bg-white shadow-sm rounded-lg text-[#64748b] transition hover:bg-[#2A6293] hover:text-white"
//               >
//                 <span className="text-sm font-medium">{dateFilter}</span>
//                 <ChevronDown className="w-4 h-4" />
//               </button>
//               {showDateDropdown && (
//                 <div className="absolute left-0 z-10 mt-1 bg-white rounded-md shadow-lg top-full w-44">
//                   {dateOptions.map((option) => (
//                     <div
//                       key={option}
//                       onClick={() => {
//                         setDateFilter(option);
//                         setShowDateDropdown(false);
//                       }}
//                       className="px-4 py-2 text-sm text-[#1e293b] cursor-pointer transition hover:bg-[#2A6293] hover:text-white"
//                     >
//                       {option}
//                     </div>
//                   ))}
//                 </div>
//               )}
//             </div>

//             {/* Status Dropdown */}
//             <div className="relative">
//               <button
//                 onClick={() => setShowStatusDropdown(!showStatusDropdown)}
//                 className="flex items-center gap-2 px-4 py-2 bg-white shadow-sm rounded-lg text-[#64748b] transition hover:bg-[#2A6293] hover:text-white"
//               >
//                 <span className="text-sm font-medium">{statusFilter}</span>
//                 <ChevronDown className="w-4 h-4" />
//               </button>
//               {showStatusDropdown && (
//                 <div className="absolute left-0 z-10 mt-1 bg-white rounded-md shadow-lg top-full w-44">
//                   {statusOptions.map((option) => (
//                     <div
//                       key={option}
//                       onClick={() => {
//                         setStatusFilter(option);
//                         setShowStatusDropdown(false);
//                       }}
//                       className="px-4 py-2 text-sm text-[#1e293b] cursor-pointer transition hover:bg-[#2A6293] hover:text-white"
//                     >
//                       {option}
//                     </div>
//                   ))}
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>

//         {/* Transactions List */}
//         <div className="space-y-4">
//           {filteredTransactions.map((tx) => (
//             <div
//               key={tx.id}
//               className="flex flex-col p-4 bg-white rounded-lg shadow-sm"
//             >
//               <div className="flex flex-wrap items-start justify-between mb-3">
//                 <div>
//                   <p className="text-sm font-semibold">{tx.id}</p>
//                   <p className="text-xs">{tx.date}</p>
//                 </div>
//                 <span
//                   className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${statusColors[tx.status]}`}
//                 >
//                   {tx.status}
//                 </span>
//               </div>
//               <div className="grid grid-cols-2 mb-3 text-sm sm:grid-cols-4 gap-y-2">
//                 <div>
//                   <p className="opacity-80">User</p>
//                   <p className="font-medium">{tx.user}</p>
//                 </div>
//                 <div>
//                   <p className="opacity-80">Provider</p>
//                   <p className="font-medium">{tx.provider}</p>
//                 </div>
//                 <div>
//                   <p className="opacity-80">Amount</p>
//                   <p className="font-medium">{tx.amount}</p>
//                 </div>
//                 <div>
//                   <p className="opacity-80">Method</p>
//                   <p className="font-medium">{tx.method}</p>
//                 </div>
//               </div>
//               <div className="flex flex-wrap justify-end gap-2">
//                 {tx.status === "Completed" && (
//                   <button className="text-sm font-medium border border-[#2A6293] bg-white text-[#2A6293] px-3 py-1 rounded-full transition duration-200 hover:bg-[#2A6293] hover:text-white">
//                     Refund
//                   </button>
//                 )}
//                 {tx.status === "Pending" && (
//                   <button className="text-sm font-medium border border-[#2A6293] bg-white text-[#2A6293] px-3 py-1 rounded-full transition duration-200 hover:bg-[#2A6293] hover:text-white">
//                     Adjust
//                   </button>
//                 )}
//               </div>
//             </div>
//           ))}
//         </div>
//       </main>

//       {/* Bottom Navigation */}
//       <footer className="sticky bottom-0">
//         <BottomNav />
//       </footer>
//     </div>
//   );
// }


"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import BottomNav from "@/components/admin/BottomNav";
import Header from "@/components/Header";

type Transaction = {
  id: string;
  date: string;
  status: "Completed" | "Pending" | "Failed";
  user: string;
  provider: string;
  amount: string;
  method: string;
};

// Sample Indian rural transactions
const transactionsData: Transaction[] = [
  {
    id: "#10001",
    date: "2025-09-08 10:00 AM",
    status: "Completed",
    user: "Ramesh Patil",
    provider: "Ganesh Autocare, Ratnagiri",
    amount: "₹1,200",
    method: "UPI",
  },
  {
    id: "#10002",
    date: "2025-09-07 02:30 PM",
    status: "Pending",
    user: "Sunita Deshmukh",
    provider: "Sai Garage, Chiplun",
    amount: "₹850",
    method: "Cash",
  },
  {
    id: "#10003",
    date: "2025-09-06 09:15 AM",
    status: "Failed",
    user: "Mahesh Sawant",
    provider: "Shiv Shakti Motors, Kudal",
    amount: "₹1,500",
    method: "Credit Card",
  },
  {
    id: "#10004",
    date: "2025-09-05 05:45 PM",
    status: "Completed",
    user: "Aarti Jadhav",
    provider: "Konkan Fuel Service, Dapoli",
    amount: "₹600",
    method: "UPI",
  },
];

const statusColors: Record<string, string> = {
  Completed: "bg-green-100 text-green-800",
  Pending: "bg-yellow-100 text-yellow-800",
  Failed: "bg-red-100 text-red-800",
};

const dateOptions = ["All Dates", "Today", "Last 7 Days", "Last 30 Days"];
const statusOptions = ["All Status", "Completed", "Pending", "Failed"];

export default function AdminPayments() {
  const [dateFilter, setDateFilter] = useState("All Dates");
  const [statusFilter, setStatusFilter] = useState("All Status");
  const [showDateDropdown, setShowDateDropdown] = useState(false);
  const [showStatusDropdown, setShowStatusDropdown] = useState(false);

  const filteredTransactions = transactionsData.filter((t) => {
    const statusMatch =
      statusFilter === "All Status" ? true : t.status === statusFilter;
    const dateMatch = true; // Extend with actual date filtering if needed
    return statusMatch && dateMatch;
  });

  return (
    <div className="flex flex-col min-h-screen font-manrope bg-[#EAF4FB]">
      {/* Header Component */}
      <Header />

      {/* Filters Section */}
      <main className="flex-grow p-4">
        <div className="mb-6">
          <h2 className="mb-3 text-lg font-semibold text-[#0D141C]">Filters</h2>
          <div className="flex flex-wrap gap-4">
            {/* Date Dropdown */}
            <div className="relative">
              <button
                onClick={() => setShowDateDropdown(!showDateDropdown)}
                className="flex items-center gap-2 px-4 py-2 bg-white shadow-sm rounded-lg text-[#64748b] transition hover:bg-[#2A6293] hover:text-white"
              >
                <span className="text-sm font-medium">{dateFilter}</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              {showDateDropdown && (
                <div className="absolute left-0 z-10 mt-1 bg-white rounded-md shadow-lg top-full w-44">
                  {dateOptions.map((option) => (
                    <div
                      key={option}
                      onClick={() => {
                        setDateFilter(option);
                        setShowDateDropdown(false);
                      }}
                      className="px-4 py-2 text-sm text-[#1e293b] cursor-pointer transition hover:bg-[#2A6293] hover:text-white rounded-md"
                    >
                      {option}
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Status Dropdown */}
            <div className="relative">
              <button
                onClick={() => setShowStatusDropdown(!showStatusDropdown)}
                className="flex items-center gap-2 px-4 py-2 bg-white shadow-sm rounded-lg text-[#64748b] transition hover:bg-[#2A6293] hover:text-white"
              >
                <span className="text-sm font-medium">{statusFilter}</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              {showStatusDropdown && (
                <div className="absolute left-0 z-10 mt-1 bg-white rounded-md shadow-lg top-full w-44">
                  {statusOptions.map((option) => (
                    <div
                      key={option}
                      onClick={() => {
                        setStatusFilter(option);
                        setShowStatusDropdown(false);
                      }}
                      className="px-4 py-2 text-sm text-[#1e293b] cursor-pointer transition hover:bg-[#2A6293] hover:text-white rounded-md"
                    >
                      {option}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Transactions List */}
        <div className="space-y-4">
          {filteredTransactions.map((tx) => (
            <div
              key={tx.id}
              className="flex flex-col p-4 bg-white rounded-lg shadow-sm transition duration-200 hover:bg-[#2A6293] hover:text-white"
            >
              <div className="flex flex-wrap items-start justify-between mb-3">
                <div>
                  <p className="text-sm font-semibold">{tx.id}</p>
                  <p className="text-xs opacity-80">{tx.date}</p>
                </div>
                <span
                  className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${statusColors[tx.status]}`}
                >
                  {tx.status}
                </span>
              </div>
              <div className="grid grid-cols-2 mb-3 text-sm sm:grid-cols-4 gap-y-2">
                <div>
                  <p className="opacity-80">User</p>
                  <p className="font-medium">{tx.user}</p>
                </div>
                <div>
                  <p className="opacity-80">Provider</p>
                  <p className="font-medium">{tx.provider}</p>
                </div>
                <div>
                  <p className="opacity-80">Amount</p>
                  <p className="font-medium">{tx.amount}</p>
                </div>
                <div>
                  <p className="opacity-80">Method</p>
                  <p className="font-medium">{tx.method}</p>
                </div>
              </div>
              <div className="flex flex-wrap justify-end gap-2">
                {tx.status === "Completed" && (
                  <button className="text-sm font-medium border border-[#2A6293] bg-white text-[#2A6293] px-3 py-1 rounded-full transition duration-200 hover:bg-[#2A6293] hover:text-white">
                    Refund
                  </button>
                )}
                {tx.status === "Pending" && (
                  <button className="text-sm font-medium border border-[#2A6293] bg-white text-[#2A6293] px-3 py-1 rounded-full transition duration-200 hover:bg-[#2A6293] hover:text-white">
                    Adjust
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Bottom Navigation */}
      <footer className="sticky bottom-0">
        <BottomNav />
      </footer>
    </div>
  );
}
