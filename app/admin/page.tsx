
// "use client";

// import { useState } from "react";
// import BottomNav from "@/components/admin/BottomNav";
// import Header from "@/components/Header";

// export default function AdminDashboard() {
//   const [activeTab, setActiveTab] = useState("dashboard");

//   const renderContent = () => {
//     switch (activeTab) {
//       case "dashboard":
//         return (
//           <div className="flex-grow p-4 overflow-y-auto">
//             {/* Stats Cards */}
//             <div className="grid grid-cols-1 gap-4 mb-4 sm:grid-cols-2">
//               <div className="flex flex-col gap-2 p-4 bg-white shadow-sm rounded-xl">
//                 <p className="text-sm font-medium text-gray-600">Total Users</p>
//                 <p className="text-3xl font-bold text-blue-700">1,234</p>
//               </div>
//               <div className="flex flex-col gap-2 p-4 bg-white shadow-sm rounded-xl">
//                 <p className="text-sm font-medium text-gray-600">Providers</p>
//                 <p className="text-3xl font-bold text-blue-700">567</p>
//               </div>
//               <div className="flex flex-col gap-2 p-4 bg-white shadow-sm sm:col-span-2 rounded-xl">
//                 <p className="text-sm font-medium text-gray-600">Total Requests</p>
//                 <p className="text-3xl font-bold text-blue-700">890</p>
//               </div>
//             </div>

//             {/* Requests Overview */}
//             <div className="flex flex-col gap-4 mb-4">
//               {/* By Status */}
//               <div className="flex flex-col gap-4 p-4 bg-white border border-gray-300 shadow-sm rounded-xl">
//                 <p className="text-base font-semibold text-gray-800">By Status</p>
//                 <div className="flex items-end justify-between gap-6">
//                   {[
//                     { label: "Pending", height: "h-24" },
//                     { label: "In Progress", height: "h-40" },
//                     { label: "Completed", height: "h-16" },
//                   ].map((item) => (
//                     <div key={item.label} className="flex flex-col items-center">
//                       <div
//                         className={`w-6 ${item.height} sm:h-32 bg-blue-700 rounded-t-md transition-all duration-300`}
//                       ></div>
//                       <p className="mt-1 text-xs font-medium text-gray-500">{item.label}</p>
//                     </div>
//                   ))}
//                 </div>
//               </div>

//               {/* By Category */}
//               <div className="flex flex-col gap-4 p-4 bg-white border border-gray-300 shadow-sm rounded-xl">
//                 <p className="text-base font-semibold text-gray-800">By Category</p>
//                 <div className="grid gap-y-3 gap-x-4 grid-cols-1 sm:grid-cols-[auto_1fr] items-center py-3">
//                   {[
//                     { label: "Plumbing", width: "w-3/4" },
//                     { label: "Electrical", width: "w-2/5" },
//                     { label: "Cleaning", width: "w-[90%]" },
//                   ].map((item) => (
//                     <div key={item.label} className="flex flex-col gap-1 sm:flex-row sm:items-center">
//                       <p className="text-xs font-medium text-gray-500">{item.label}</p>
//                       <div className="flex-1 h-2.5 rounded-full bg-blue-100">
//                         <div className={`${item.width} h-full bg-blue-700 rounded-full`}></div>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>

//             {/* Service Area */}
//             <div className="p-4">
//               <h2 className="mb-3 text-lg font-bold tracking-tight text-gray-800">Service Area</h2>
//               <div
//                 className="w-full bg-center bg-no-repeat bg-cover shadow-sm aspect-video rounded-xl min-h-[200px] sm:min-h-[300px]"
//                 style={{
//                   backgroundImage:
//                     "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDixHJQ2adLYmh69NASDoUymEcBJnG2M0WAFaK7nyIsJlOOtY6qlMsv4Pgv-3VBgzP-lPwp96MLe5EHncgdG-FJfehlQJpcXUEnDHlhY7Ce7rmRf_utmZZgK84ArQh3gkzZFYspbKmiPcwPDw-WBOrovIRBABe5LRbyzncnUkD2cb0iCUarogf9J4caUJs_YtvA1phh8KORyKXv6EjJ_iHVPbtXgwF6m-78O1E5DboEmYPjA8wJHDylklaBHWHGILk8SQc3Etuf_RA')",
//                 }}
//               ></div>
//             </div>
//           </div>
//         );

//       case "users":
//         return <div className="p-6 text-lg font-semibold text-center">Users Management Page</div>;
//       case "providers":
//         return <div className="p-6 text-lg font-semibold text-center">Providers Management Page</div>;
//       case "requests":
//         return <div className="p-6 text-lg font-semibold text-center">Requests Management Page</div>;
//       case "more":
//         return <div className="p-6 text-lg font-semibold text-center">More Options</div>;
//       default:
//         return null;
//     }
//   };

//   return (
//     <div className="bg-[#EBF8FF] min-h-screen flex flex-col font-['Manrope','Noto Sans',sans-serif]">
//       <Header />
//       <div className="flex-grow">{renderContent()}</div>
//       <BottomNav />
//     </div>
//   );
// }



// "use client";

// import { useState } from "react";
// import BottomNav from "@/components/admin/BottomNav";
// import Header from "@/components/Header";

// export default function AdminDashboard() {
//   const [activeTab, setActiveTab] = useState("dashboard");

//   const renderContent = () => {
//     switch (activeTab) {
//       case "dashboard":
//         return (
//           <div className="flex-grow p-4 overflow-y-auto">
//             {/* Stats Cards */}
//             <div className="grid grid-cols-1 gap-4 mb-4 sm:grid-cols-2">
//               <div className="flex flex-col gap-2 p-4 bg-white shadow-sm rounded-xl">
//                 <p className="text-sm font-medium text-gray-600">Total Users</p>
//                 <p className="text-3xl font-bold text-blue-700">1,234</p>
//               </div>
//               <div className="flex flex-col gap-2 p-4 bg-white shadow-sm rounded-xl">
//                 <p className="text-sm font-medium text-gray-600">Providers</p>
//                 <p className="text-3xl font-bold text-blue-700">567</p>
//               </div>
//               <div className="flex flex-col gap-2 p-4 bg-white shadow-sm sm:col-span-2 rounded-xl">
//                 <p className="text-sm font-medium text-gray-600">Total Requests</p>
//                 <p className="text-3xl font-bold text-blue-700">890</p>
//               </div>
//             </div>

//             {/* Requests Overview */}
//             <div className="flex flex-col gap-4 mb-4">
//               {/* By Status */}
//               <div className="flex flex-col gap-4 p-4 bg-white border border-gray-300 shadow-sm rounded-xl">
//                 <p className="text-base font-semibold text-gray-800">By Status</p>
//                 <div className="flex items-end justify-between gap-6">
//                   {[
//                     { label: "Pending", height: "h-24" },
//                     { label: "In Progress", height: "h-40" },
//                     { label: "Completed", height: "h-16" },
//                   ].map((item) => (
//                     <div key={item.label} className="flex flex-col items-center">
//                       <div
//                         className={`w-6 ${item.height} bg-blue-700 rounded-t-md transition-all duration-300`}
//                       ></div>
//                       <p className="mt-1 text-xs font-medium text-gray-500">{item.label}</p>
//                     </div>
//                   ))}
//                 </div>
//               </div>

//               {/* By Category */}
//               <div className="flex flex-col gap-4 p-4 bg-white border border-gray-300 shadow-sm rounded-xl">
//                 <p className="text-base font-semibold text-gray-800">By Category</p>
//                 <div className="flex flex-col gap-3">
//                   {[
//                     { label: "Plumbing", percent: 75 },
//                     { label: "Electrical", percent: 40 },
//                     { label: "Cleaning", percent: 90 },
//                   ].map((item) => (
//                     <div key={item.label} className="flex flex-col gap-1">
//                       <div className="flex justify-between text-xs font-medium text-gray-600">
//                         <span>{item.label}</span>
//                         <span>{item.percent}%</span>
//                       </div>
//                       <div className="h-2.5 rounded-full bg-blue-100">
//                         <div
//                           className="h-full transition-all duration-300 bg-blue-700 rounded-full"
//                           style={{ width: `${item.percent}%` }}
//                         ></div>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>

//             {/* Service Area */}
//             <div className="p-4 bg-white border border-gray-300 shadow-sm rounded-xl">
//               <h2 className="mb-3 text-base font-semibold text-gray-800">Service Area</h2>
//               <div
//                 className="w-full bg-center bg-no-repeat bg-cover shadow-sm aspect-video rounded-xl min-h-[200px] sm:min-h-[300px]"
//                 style={{
//                   backgroundImage:
//                     "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDixHJQ2adLYmh69NASDoUymEcBJnG2M0WAFaK7nyIsJlOOtY6qlMsv4Pgv-3VBgzP-lPwp96MLe5EHncgdG-FJfehlQJpcXUEnDHlhY7Ce7rmRf_utmZZgK84ArQh3gkzZFYspbKmiPcwPDw-WBOrovIRBABe5LRbyzncnUkD2cb0iCUarogf9J4caUJs_YtvA1phh8KORyKXv6EjJ_iHVPbtXgwF6m-78O1E5DboEmYPjA8wJHDylklaBHWHGILk8SQc3Etuf_RA')",
//                 }}
//               ></div>
//             </div>
//           </div>
//         );

//       case "users":
//         return <div className="p-6 text-lg font-semibold text-center">Users Management Page</div>;
//       case "providers":
//         return <div className="p-6 text-lg font-semibold text-center">Providers Management Page</div>;
//       case "requests":
//         return <div className="p-6 text-lg font-semibold text-center">Requests Management Page</div>;
//       case "more":
//         return <div className="p-6 text-lg font-semibold text-center">More Options</div>;
//       default:
//         return null;
//     }
//   };

//   return (
//     <div className="bg-[#EBF8FF] min-h-screen flex flex-col font-['Manrope','Noto Sans',sans-serif]">
//       <Header />
//       <div className="flex-grow">{renderContent()}</div>
//       <BottomNav />
//     </div>
//   );
// }


// "use client";

// import { useEffect, useState } from "react";
// import BottomNav from "@/components/admin/BottomNav";
// import Header from "@/components/Header";
// import { db } from "@/lib/firebaseConfig";
// import { collection, getDocs } from "firebase/firestore";

// export default function AdminDashboard() {
//   const [activeTab, setActiveTab] = useState("dashboard");

//   // Firestore Data States
//   const [totalUsers, setTotalUsers] = useState(0);
//   const [totalProviders, setTotalProviders] = useState(0);
//   const [totalRequests, setTotalRequests] = useState(0);

//   const [statusCounts, setStatusCounts] = useState({
//     pending: 0,
//     inProgress: 0,
//     completed: 0,
//   });

//   const [categoryCounts, setCategoryCounts] = useState({
//     fuel: 0,
//     tyre: 0,
//     engine: 0,
//     battery: 0,
//   });

//   // Fetch data from Firestore
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         // Users
//         const usersSnap = await getDocs(collection(db, "users"));
//         setTotalUsers(usersSnap.size);

//         // Providers
//         const providersSnap = await getDocs(collection(db, "providers"));
//         setTotalProviders(providersSnap.size);

//         // Requests
//         const requestsSnap = await getDocs(collection(db, "requests"));
//         setTotalRequests(requestsSnap.size);

//         const statusData = { pending: 0, inProgress: 0, completed: 0 };
//         const categoryData = { fuel: 0, tyre: 0, engine: 0, battery: 0 };

//         requestsSnap.docs.forEach((doc) => {
//           const data = doc.data();

//           // Status Counts
//           if (data.status === "Pending") statusData.pending++;
//           if (data.status === "In Progress") statusData.inProgress++;
//           if (data.status === "Completed") statusData.completed++;

//           // Category Counts
//           if (data.issueType?.includes("Fuel Shortage")) categoryData.fuel++;
//           if (data.issueType?.includes("Flat Tyre")) categoryData.tyre++;
//           if (data.issueType?.includes("Engine Failure")) categoryData.engine++;
//           if (data.issueType?.includes("Battery Issue")) categoryData.battery++;
//         });

//         setStatusCounts(statusData);
//         setCategoryCounts(categoryData);
//       } catch (err) {
//         console.error("Error fetching data:", err);
//       }
//     };

//     fetchData();
//   }, []);

//   // Calculate category percentages
//   const totalCategories =
//     categoryCounts.fuel +
//     categoryCounts.tyre +
//     categoryCounts.engine +
//     categoryCounts.battery;

//   const getPercent = (count) =>
//     totalCategories === 0 ? 0 : Math.round((count / totalCategories) * 100);

//   const renderContent = () => {
//     switch (activeTab) {
//       case "dashboard":
//         return (
//           <div className="flex-grow p-4 overflow-y-auto">
//             {/* Stats Cards */}
//             <div className="grid grid-cols-1 gap-6 mb-6 sm:grid-cols-3">
//               <div className="flex flex-col gap-2 p-6 transition bg-white border border-gray-200 shadow-md hover:shadow-lg rounded-xl">
//                 <p className="text-sm font-medium text-gray-600">Total Users</p>
//                 <p className="text-4xl font-extrabold text-blue-700">{totalUsers}</p>
//               </div>
//               <div className="flex flex-col gap-2 p-6 transition bg-white border border-gray-200 shadow-md hover:shadow-lg rounded-xl">
//                 <p className="text-sm font-medium text-gray-600">Providers</p>
//                 <p className="text-4xl font-extrabold text-green-600">{totalProviders}</p>
//               </div>
//               <div className="flex flex-col gap-2 p-6 transition bg-white border border-gray-200 shadow-md hover:shadow-lg rounded-xl">
//                 <p className="text-sm font-medium text-gray-600">Total Requests</p>
//                 <p className="text-4xl font-extrabold text-purple-700">{totalRequests}</p>
//               </div>
//             </div>

//             {/* Requests Overview */}
//             <div className="flex flex-col gap-6">
//               {/* By Status */}
//               <div className="flex flex-col gap-4 p-6 bg-white border border-gray-200 shadow-md rounded-xl">
//                 <p className="text-lg font-semibold text-gray-800">Requests by Status</p>
//                 <div className="flex items-end justify-around gap-6">
//                   {[
//                     { label: "Pending", count: statusCounts.pending, color: "bg-yellow-500" },
//                     { label: "In Progress", count: statusCounts.inProgress, color: "bg-blue-500" },
//                     { label: "Completed", count: statusCounts.completed, color: "bg-green-600" },
//                   ].map((item) => (
//                     <div key={item.label} className="flex flex-col items-center">
//                       <div
//                         className={`w-10 rounded-t-md transition-all duration-500 ${item.color}`}
//                         style={{
//                           height: `${(item.count / (totalRequests || 1)) * 200}px`,
//                         }}
//                       ></div>
//                       <p className="mt-2 text-xs font-medium text-gray-700">{item.label}</p>
//                       <p className="text-sm font-bold">{item.count}</p>
//                     </div>
//                   ))}
//                 </div>
//               </div>

//               {/* By Category */}
//               <div className="flex flex-col gap-4 p-6 bg-white border border-gray-200 shadow-md rounded-xl">
//                 <p className="text-lg font-semibold text-gray-800">Requests by Category</p>
//                 <div className="flex flex-col gap-3">
//                   {[
//                     { label: "Fuel Shortage", count: categoryCounts.fuel },
//                     { label: "Flat Tyre", count: categoryCounts.tyre },
//                     { label: "Engine Failure", count: categoryCounts.engine },
//                     { label: "Battery Issue", count: categoryCounts.battery },
//                   ].map((item) => (
//                     <div key={item.label} className="flex flex-col gap-1">
//                       <div className="flex justify-between text-sm font-medium text-gray-700">
//                         <span>{item.label}</span>
//                         <span>{getPercent(item.count)}%</span>
//                       </div>
//                       <div className="h-3 bg-gray-200 rounded-full">
//                         <div
//                           className="h-full transition-all duration-500 bg-blue-600 rounded-full"
//                           style={{ width: `${getPercent(item.count)}%` }}
//                         ></div>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </div>
//         );

//       case "users":
//         return <div className="p-6 text-lg font-semibold text-center">Users Management Page</div>;
//       case "providers":
//         return <div className="p-6 text-lg font-semibold text-center">Providers Management Page</div>;
//       case "requests":
//         return <div className="p-6 text-lg font-semibold text-center">Requests Management Page</div>;
//       case "more":
//         return <div className="p-6 text-lg font-semibold text-center">More Options</div>;
//       default:
//         return null;
//     }
//   };

//   return (
//     <div className="bg-[#F4F9FF] min-h-screen flex flex-col font-['Manrope','Noto Sans',sans-serif]">
//       <Header />
//       <div className="flex-grow">{renderContent()}</div>
//       <BottomNav />
//     </div>
//   );
// }





// "use client";

// import { useState } from "react";
// import { useRouter } from "next/navigation";
// import BottomNav from "@/components/admin/BottomNav";
// import Header from "@/components/Header";

// export default function AdminDashboard() {
//   const [activeTab, setActiveTab] = useState("dashboard");
//   const router = useRouter();

//   const renderContent = () => {
//     switch (activeTab) {
//       case "dashboard":
//         return (
//           <div className="flex-grow p-6 space-y-6 overflow-y-auto">
//             {/* Stats Cards */}
//             <div className="grid grid-cols-1 gap-6 sm:grid-cols-4">
//               {[
//                 { label: "Total Users", value: "1,234", color: "from-blue-500 to-indigo-600" },
//                 { label: "Providers", value: "567", color: "from-green-500 to-emerald-600" },
//                 { label: "Total Requests", value: "890", color: "from-purple-500 to-pink-600" },
//               ].map((item) => (
//                 <div
//                   key={item.label}
//                   className={`flex flex-col gap-2 p-6 rounded-2xl shadow-lg text-white bg-gradient-to-r ${item.color} transform hover:scale-[1.02] transition-all duration-300`}
//                 >
//                   <p className="text-sm font-medium opacity-80">{item.label}</p>
//                   <p className="text-4xl font-extrabold tracking-tight">{item.value}</p>
//                 </div>
//               ))}

//               {/* Commission Model Card */}
//               <div
//                 onClick={() => router.push("/admin/commisionmodel")}
//                 className="flex flex-col justify-center items-center gap-2 p-6 rounded-2xl shadow-lg cursor-pointer bg-gradient-to-r from-orange-500 to-red-500 text-white transform hover:scale-[1.03] transition-all duration-300"
//               >
//                 <p className="text-lg font-semibold">💰 Commission Model</p>
//                 <p className="text-sm opacity-90">Manage Commission Policies</p>
//               </div>
//             </div>

//             {/* Requests Overview */}
//             <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
//               {/* By Status */}
//               <div className="flex flex-col gap-4 p-6 transition-shadow duration-300 bg-white border border-gray-200 shadow-md rounded-2xl hover:shadow-lg">
//                 <p className="text-lg font-bold text-gray-800">Requests by Status</p>
//                 <div className="flex items-end justify-around h-40">
//                   {[
//                     { label: "Pending", height: "h-24", color: "bg-yellow-500" },
//                     { label: "In Progress", height: "h-40", color: "bg-blue-600" },
//                     { label: "Completed", height: "h-16", color: "bg-green-600" },
//                   ].map((item) => (
//                     <div key={item.label} className="flex flex-col items-center group">
//                       <div
//                         className={`w-10 ${item.height} ${item.color} rounded-t-xl transition-all duration-500 group-hover:scale-105`}
//                       ></div>
//                       <p className="mt-2 text-sm font-medium text-gray-600">{item.label}</p>
//                     </div>
//                   ))}
//                 </div>
//               </div>

//               {/* By Category */}
//               <div className="flex flex-col gap-4 p-6 transition-shadow duration-300 bg-white border border-gray-200 shadow-md rounded-2xl hover:shadow-lg">
//                 <p className="text-lg font-bold text-gray-800">Requests by Category</p>
//                 <div className="flex flex-col gap-4">
//                   {[
//                     { label: "Fuel Shortage", percent: 65, color: "bg-red-500" },
//                     { label: "Flat Tyre", percent: 40, color: "bg-blue-500" },
//                     { label: "Engine Failure", percent: 55, color: "bg-purple-500" },
//                     { label: "Battery Issue", percent: 30, color: "bg-green-500" },
//                   ].map((item) => (
//                     <div key={item.label} className="flex flex-col gap-2">
//                       <div className="flex justify-between text-sm font-medium text-gray-700">
//                         <span>{item.label}</span>
//                         <span>{item.percent}%</span>
//                       </div>
//                       <div className="h-3 bg-gray-200 rounded-full">
//                         <div
//                           className={`h-full rounded-full transition-all duration-500 ${item.color}`}
//                           style={{ width: `${item.percent}%` }}
//                         ></div>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </div>
//         );

//       case "users":
//         return <div className="p-8 text-xl font-semibold text-center text-gray-700">👥 Users Management</div>;
//       case "providers":
//         return <div className="p-8 text-xl font-semibold text-center text-gray-700">⚙️ Providers Management</div>;
//       case "requests":
//         return <div className="p-8 text-xl font-semibold text-center text-gray-700">📋 Requests Management</div>;
//       case "more":
//         return <div className="p-8 text-xl font-semibold text-center text-gray-700">✨ More Options</div>;
//       default:
//         return null;
//     }
//   };

//   return (
//     <div className="bg-[#F3F6FA] min-h-screen flex flex-col font-['Manrope','Noto Sans',sans-serif]">
//       <Header />
//       <div className="flex-grow">{renderContent()}</div>
//       <BottomNav />
//     </div>
//   );
// }




// "use client";

// import { useState } from "react";
// import { useRouter } from "next/navigation";
// import BottomNav from "@/components/admin/BottomNav";
// import Header from "@/components/Header";

// export default function AdminDashboard() {
//   const [activeTab, setActiveTab] = useState("dashboard");
//   const router = useRouter();

//   const renderContent = () => {
//     switch (activeTab) {
//       case "dashboard":
//         return (
//           <div className="flex-grow p-6 space-y-6 overflow-y-auto">
//             {/* Stats Cards */}
//             <div className="grid grid-cols-1 gap-6 sm:grid-cols-4">
//               {[
//                 { label: "Total Users", value: "1,234", color: "from-blue-500 to-indigo-600" },
//                 { label: "Providers", value: "567", color: "from-green-500 to-emerald-600" },
//                 { label: "Total Requests", value: "890", color: "from-purple-500 to-pink-600" },
//               ].map((item) => (
//                 <div
//                   key={item.label}
//                   className={`flex flex-col gap-2 p-6 rounded-2xl shadow-lg text-white bg-gradient-to-r ${item.color} transform hover:scale-[1.02] transition-all duration-300`}
//                 >
//                   <p className="text-sm font-medium opacity-80">{item.label}</p>
//                   <p className="text-4xl font-extrabold tracking-tight">{item.value}</p>
//                 </div>
//               ))}

//               {/* Commission Model Card */}
//               <div
//                 onClick={() => router.push("/admin/commisionmodel")}
//                 className="flex flex-col justify-center items-center gap-2 p-6 rounded-2xl shadow-lg cursor-pointer bg-gradient-to-r from-orange-500 to-red-500 text-white transform hover:scale-[1.03] transition-all duration-300"
//               >
//                 <p className="text-lg font-semibold">💰 Commission Model</p>
//                 <p className="text-sm opacity-90">Manage Commission Policies</p>
//               </div>

//               {/* User Feedback Card */}
//               <div
//                 onClick={() => router.push("/admin/userfeedback")}
//                 className="flex flex-col justify-center items-center gap-2 p-6 rounded-2xl shadow-lg cursor-pointer bg-gradient-to-r from-teal-500 to-cyan-600 text-white transform hover:scale-[1.03] transition-all duration-300"
//               >
//                 <p className="text-lg font-semibold">📊 User Feedback</p>
//                 <p className="text-sm opacity-90">View all feedback</p>
//               </div>
//             </div>

//             {/* Requests Overview */}
//             <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
//               {/* By Status */}
//               <div className="flex flex-col gap-4 p-6 transition-shadow duration-300 bg-white border border-gray-200 shadow-md rounded-2xl hover:shadow-lg">
//                 <p className="text-lg font-bold text-gray-800">Requests by Status</p>
//                 <div className="flex items-end justify-around h-40">
//                   {[
//                     { label: "Pending", height: "h-24", color: "bg-yellow-500" },
//                     { label: "In Progress", height: "h-40", color: "bg-blue-600" },
//                     { label: "Completed", height: "h-16", color: "bg-green-600" },
//                   ].map((item) => (
//                     <div key={item.label} className="flex flex-col items-center group">
//                       <div
//                         className={`w-10 ${item.height} ${item.color} rounded-t-xl transition-all duration-500 group-hover:scale-105`}
//                       ></div>
//                       <p className="mt-2 text-sm font-medium text-gray-600">{item.label}</p>
//                     </div>
//                   ))}
//                 </div>
//               </div>

//               {/* By Category */}
//               <div className="flex flex-col gap-4 p-6 transition-shadow duration-300 bg-white border border-gray-200 shadow-md rounded-2xl hover:shadow-lg">
//                 <p className="text-lg font-bold text-gray-800">Requests by Category</p>
//                 <div className="flex flex-col gap-4">
//                   {[
//                     { label: "Fuel Shortage", percent: 65, color: "bg-red-500" },
//                     { label: "Flat Tyre", percent: 40, color: "bg-blue-500" },
//                     { label: "Engine Failure", percent: 55, color: "bg-purple-500" },
//                     { label: "Battery Issue", percent: 30, color: "bg-green-500" },
//                   ].map((item) => (
//                     <div key={item.label} className="flex flex-col gap-2">
//                       <div className="flex justify-between text-sm font-medium text-gray-700">
//                         <span>{item.label}</span>
//                         <span>{item.percent}%</span>
//                       </div>
//                       <div className="h-3 bg-gray-200 rounded-full">
//                         <div
//                           className={`h-full rounded-full transition-all duration-500 ${item.color}`}
//                           style={{ width: `${item.percent}%` }}
//                         ></div>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </div>
//         );

//       case "users":
//         return <div className="p-8 text-xl font-semibold text-center text-gray-700">👥 Users Management</div>;
//       case "providers":
//         return <div className="p-8 text-xl font-semibold text-center text-gray-700">⚙️ Providers Management</div>;
//       case "requests":
//         return <div className="p-8 text-xl font-semibold text-center text-gray-700">📋 Requests Management</div>;
//       case "more":
//         return <div className="p-8 text-xl font-semibold text-center text-gray-700">✨ More Options</div>;
//       default:
//         return null;
//     }
//   };

//   return (
//     <div className="bg-[#F3F6FA] min-h-screen flex flex-col font-['Manrope','Noto Sans',sans-serif]">
//       <Header />
//       <div className="flex-grow">{renderContent()}</div>
//       <BottomNav  />
//     </div>
//   );
// }


// "use client";

// import { useState } from "react";
// import { useRouter } from "next/navigation";
// import BottomNav from "@/components/admin/BottomNav";
// import Header from "@/components/Header";

// export default function AdminDashboard() {
//   const [activeTab, setActiveTab] = useState("dashboard");
//   const router = useRouter();

//   const renderContent = () => {
//     switch (activeTab) {
//       case "dashboard":
//         return (
//           <div className="flex-grow p-6 space-y-6 overflow-y-auto">
//             {/* Stats Cards */}
//             <div className="grid grid-cols-1 gap-6 sm:grid-cols-4">
//               {[
//                 { label: "Total Users", value: "1,234", color: "from-blue-200 to-blue-300" },
//                 { label: "Providers", value: "567", color: "from-blue-100 to-blue-200" },
//                 { label: "Total Requests", value: "890", color: "from-purple-200 to-purple-300" },
//               ].map((item) => (
//                 <div
//                   key={item.label}
//                   className={`flex flex-col gap-2 p-6 rounded-2xl shadow-md text-gray-800 bg-gradient-to-r ${item.color} transform hover:scale-[1.02] transition-all duration-300`}
//                 >
//                   <p className="text-sm font-medium opacity-80">{item.label}</p>
//                   <p className="text-4xl font-extrabold tracking-tight">{item.value}</p>
//                 </div>
//               ))}

//               {/* Commission Model Card */}
//               <div
//                 onClick={() => router.push("/admin/commisionmodel")}
//                 className="flex flex-col justify-center items-center gap-2 p-6 rounded-2xl shadow-md cursor-pointer bg-gradient-to-r from-blue-200 to-blue-300 text-gray-800 transform hover:scale-[1.03] transition-all duration-300"
//               >
//                 <p className="text-lg font-semibold">💰 Commission Model</p>
//                 <p className="text-sm opacity-90">Manage Commission Policies</p>
//               </div>

//               {/* User Feedback Card */}
//               <div
//                 onClick={() => router.push("/admin/userfeedback")}
//                 className="flex flex-col justify-center items-center gap-2 p-6 rounded-2xl shadow-md cursor-pointer bg-gradient-to-r from-blue-100 to-blue-200 text-gray-800 transform hover:scale-[1.03] transition-all duration-300"
//               >
//                 <p className="text-lg font-semibold">📊 User Feedback</p>
//                 <p className="text-sm opacity-90">View all feedback</p>
//               </div>
//             </div>

//             {/* Requests Overview */}
//             <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
//               {/* By Status */}
//               <div className="flex flex-col gap-4 p-6 transition-shadow duration-300 bg-white border border-gray-200 shadow-sm rounded-2xl hover:shadow-md">
//                 <p className="text-lg font-bold text-gray-800">Requests by Status</p>
//                 <div className="flex items-end justify-around h-40">
//                   {[
//                     { label: "Pending", height: "h-24", color: "bg-blue-100" },
//                     { label: "In Progress", height: "h-40", color: "bg-blue-200" },
//                     { label: "Completed", height: "h-16", color: "bg-blue-300" },
//                   ].map((item) => (
//                     <div key={item.label} className="flex flex-col items-center group">
//                       <div
//                         className={`w-10 ${item.height} ${item.color} rounded-t-xl transition-all duration-500 group-hover:scale-105`}
//                       ></div>
//                       <p className="mt-2 text-sm font-medium text-gray-600">{item.label}</p>
//                     </div>
//                   ))}
//                 </div>
//               </div>

//               {/* By Category */}
//               <div className="flex flex-col gap-4 p-6 transition-shadow duration-300 bg-white border border-gray-200 shadow-sm rounded-2xl hover:shadow-md">
//                 <p className="text-lg font-bold text-gray-800">Requests by Category</p>
//                 <div className="flex flex-col gap-4">
//                   {[
//                     { label: "Fuel Shortage", percent: 65, color: "bg-blue-100" },
//                     { label: "Flat Tyre", percent: 40, color: "bg-blue-200" },
//                     { label: "Engine Failure", percent: 55, color: "bg-blue-300" },
//                     { label: "Battery Issue", percent: 30, color: "bg-blue-100" },
//                   ].map((item) => (
//                     <div key={item.label} className="flex flex-col gap-2">
//                       <div className="flex justify-between text-sm font-medium text-gray-700">
//                         <span>{item.label}</span>
//                         <span>{item.percent}%</span>
//                       </div>
//                       <div className="h-3 bg-gray-100 rounded-full">
//                         <div
//                           className={`h-full rounded-full transition-all duration-500 ${item.color}`}
//                           style={{ width: `${item.percent}%` }}
//                         ></div>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </div>
//         );

//       case "users":
//         return <div className="p-8 text-xl font-semibold text-center text-gray-700">👥 Users Management</div>;
//       case "providers":
//         return <div className="p-8 text-xl font-semibold text-center text-gray-700">⚙️ Providers Management</div>;
//       case "requests":
//         return <div className="p-8 text-xl font-semibold text-center text-gray-700">📋 Requests Management</div>;
//       case "more":
//         return <div className="p-8 text-xl font-semibold text-center text-gray-700">✨ More Options</div>;
//       default:
//         return null;
//     }
//   };

//   return (
//     <div className="bg-[#F3F6FA] min-h-screen flex flex-col font-['Manrope','Noto Sans',sans-serif]">
//       <Header />
//       <div className="flex-grow">{renderContent()}</div>
//       <BottomNav activeTab={activeTab} setActiveTab={setActiveTab} />
//     </div>
//   );
// }

"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import BottomNav from "@/components/admin/BottomNav";
import Header from "@/components/Header";
import { Users, Clipboard, DollarSign, Star } from "lucide-react";

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState("dashboard");
  const router = useRouter();

  const cardStyle =
    "flex flex-col items-center gap-3 p-8 rounded-2xl shadow-sm bg-white transform hover:scale-[1.01] transition-all duration-300";

  const renderContent = () => {
    switch (activeTab) {
      case "dashboard":
        return (
          <div className="flex-grow p-6 space-y-8 overflow-y-auto">
            {/* Grid of Cards */}
            <div className="grid grid-cols-1 gap-6 mt-6 sm:grid-cols-4">
              {/* Users Card */}
              <div className={cardStyle} onClick={() => router.push("/admin/users")}>
                <div className="flex items-center justify-center text-blue-800 bg-blue-200 rounded-full w-14 h-14">
                  <Users size={24} />
                </div>
                <p className="text-lg font-semibold text-gray-800">Users</p>
                <p className="text-sm text-center text-gray-600">Manage all users</p>
              </div>

              {/* Providers Card */}
              <div className={cardStyle} onClick={() => router.push("/admin/providers")}>
                <div className="flex items-center justify-center text-orange-800 bg-orange-200 rounded-full w-14 h-14">
                  <Clipboard size={24} />
                </div>
                <p className="text-lg font-semibold text-gray-800">Providers</p>
                <p className="text-sm text-center text-gray-600">Manage all providers</p>
              </div>

              {/* Commission Model Card */}
              <div className={cardStyle} onClick={() => router.push("/admin/commisionmodel")}>
                <div className="flex items-center justify-center text-orange-800 bg-orange-200 rounded-full w-14 h-14">
                  <DollarSign size={24} />
                </div>
                <p className="text-lg font-semibold text-gray-800">Commission Model</p>
                <p className="text-sm text-center text-gray-600">Manage commission policies</p>
              </div>

              {/* User Feedback Card */}
              <div className={cardStyle} onClick={() => router.push("/admin/userfeedback")}>
                <div className="flex items-center justify-center text-teal-800 bg-teal-200 rounded-full w-14 h-14">
                  <Star size={24} />
                </div>
                <p className="text-lg font-semibold text-gray-800">User Feedback</p>
                <p className="text-sm text-center text-gray-600">View all feedback</p>
              </div>
            </div>

            {/* Requests Overview */}
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
              {/* By Status */}
              <div className="flex flex-col gap-4 p-6 bg-white border border-gray-100 shadow-sm rounded-2xl">
                <p className="text-lg font-bold text-gray-800">Requests by Status</p>
                <div className="flex items-end justify-around h-40">
                  {[ 
                    { label: "Pending", height: "h-24", color: "bg-blue-200" },
                    { label: "In Progress", height: "h-32", color: "bg-blue-300" },
                    { label: "Completed", height: "h-16", color: "bg-blue-400" },
                  ].map((item) => (
                    <div key={item.label} className="flex flex-col items-center">
                      <div className={`w-10 ${item.height} ${item.color} rounded-t-xl`}></div>
                      <p className="mt-2 text-sm text-gray-500">{item.label}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* By Category */}
              <div className="flex flex-col gap-4 p-6 bg-white border border-gray-100 shadow-sm rounded-2xl">
                <p className="text-lg font-bold text-gray-800">Requests by Category</p>
                <div className="flex flex-col gap-4">
                  {[
                    { label: "Fuel Shortage", percent: 65, color: "bg-blue-200" },
                    { label: "Flat Tyre", percent: 40, color: "bg-blue-300" },
                    { label: "Engine Failure", percent: 55, color: "bg-blue-400" },
                    { label: "Battery Issue", percent: 30, color: "bg-blue-200" },
                  ].map((item) => (
                    <div key={item.label} className="flex flex-col gap-2">
                      <div className="flex justify-between text-sm text-gray-500">
                        <span>{item.label}</span>
                        <span>{item.percent}%</span>
                      </div>
                      <div className="h-3 bg-gray-100 rounded-full">
                        <div
                          className={`h-full rounded-full transition-all duration-500 ${item.color}`}
                          style={{ width: `${item.percent}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );

      case "users":
        return <div className="p-8 text-xl font-semibold text-center text-gray-700">👥 Users Management</div>;
      case "providers":
        return <div className="p-8 text-xl font-semibold text-center text-gray-700">⚙️ Providers Management</div>;
      case "requests":
        return <div className="p-8 text-xl font-semibold text-center text-gray-700">📋 Requests Management</div>;
      case "more":
        return <div className="p-8 text-xl font-semibold text-center text-gray-700">✨ More Options</div>;
      default:
        return null;
    }
  };

  return (
    <div className="bg-sky-100 min-h-screen flex flex-col font-['Manrope','Noto Sans',sans-serif]">
      <Header />
      <div className="flex-grow pt-6">{renderContent()}</div>
      <BottomNav />
    </div>
  );
}
