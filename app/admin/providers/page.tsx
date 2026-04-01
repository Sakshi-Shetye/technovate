// "use client";

// import { useEffect, useState } from "react";
// import { db } from "../../lib/firebase";
// import { collection, onSnapshot, doc, updateDoc } from "firebase/firestore";

// export default function AdminProviders() {
//   const [providers, setProviders] = useState<Array<any>>([]);

//   useEffect(() => {
//     const unsub = onSnapshot(collection(db, "users"), (snap) => {
//       const list: Array<any> = [];
//       snap.forEach((doc) => {
//         const data = doc.data();
//         if (data.roles?.includes("provider")) list.push({ id: doc.id, ...data });
//       });
//       setProviders(list);
//     });
//     return () => unsub();
//   }, []);

//   const handleVerify = async (id: string) => {
//     const docRef = doc(db, "users", id);
//     await updateDoc(docRef, { verified: true });
//     alert("Provider verified!");
//   };

//   return (
//     <div className="flex flex-col gap-4">
//       <h1 className="text-3xl font-bold text-blue-600">Providers Management</h1>
//       {providers.map((p) => (
//         <div
//           key={p.id}
//           className="flex items-center justify-between p-4 bg-white shadow-md rounded-xl"
//         >
//           <div>
//             <p><strong>Name:</strong> {p.name}</p>
//             <p><strong>Phone:</strong> {p.phone}</p>
//             <p><strong>Verified:</strong> {p.verified ? "✅" : "❌"}</p>
//             <p><strong>Training:</strong> {p.trainingCompleted ? "✅" : "❌"}</p>
//           </div>
//           {!p.verified && (
//             <button
//               onClick={() => handleVerify(p.id)}
//               className="px-4 py-2 text-white bg-green-600 rounded hover:bg-green-700"
//             >
//               Verify
//             </button>
//           )}
//         </div>
//       ))}
//     </div>
//   );
// }



// "use client";

// import { useState } from "react";
// import {
//   Home,
//   Users,
//   UserCircle,
//   ListChecks,
//   MoreHorizontal,
//   Menu,
//   Star,
//   MoreVertical,
//   MapPin,
//   Briefcase,
//   Calendar,
// } from "lucide-react";
// import BottomNav from "@/components/admin/BottomNav";

// export default function AdminProvidersPage() {
//   const [activeTab, setActiveTab] = useState("providers");

//   const providers = [
//     {
//       id: "12345",
//       name: "Tech Solutions Inc.",
//       logo: "https://via.placeholder.com/80x80.png?text=TS",
//       status: "Active",
//       rating: 4.8,
//       location: "New York",
//       services: "IT & Support",
//       joined: "2021-08-15",
//       requests: 120,
//     },
//     {
//       id: "67890",
//       name: "Health & Wellness Clinic",
//       logo: "https://via.placeholder.com/80x80.png?text=HWC",
//       status: "Active",
//       rating: 4.9,
//       location: "Los Angeles",
//       services: "Healthcare",
//       joined: "2022-01-10",
//       requests: 89,
//     },
//     {
//       id: "24680",
//       name: "Green Energy Co.",
//       logo: "https://via.placeholder.com/80x80.png?text=GE",
//       status: "Pending",
//       rating: 4.5,
//       location: "Chicago",
//       services: "Energy Solutions",
//       joined: "2022-06-20",
//       requests: 45,
//     },
//     {
//       id: "13579",
//       name: "EduTech Academy",
//       logo: "https://via.placeholder.com/80x80.png?text=EA",
//       status: "Suspended",
//       rating: 4.2,
//       location: "Houston",
//       services: "Education",
//       joined: "2021-05-01",
//       requests: 67,
//     },
//     {
//       id: "97531",
//       name: "Creative Design Studio",
//       logo: "https://via.placeholder.com/80x80.png?text=CDS",
//       status: "Active",
//       rating: 5.0,
//       location: "Phoenix",
//       services: "Design & Media",
//       joined: "2020-11-30",
//       requests: 150,
//     },
//   ];

//   return (
//     <div className="flex flex-col min-h-screen bg-[#F8FAFC]">
//       {/* Header */}
//       <header className="sticky top-0 z-10 flex items-center justify-between p-4 bg-white border-b border-gray-200 shadow-sm">
//         <button className="text-[#2A6293]">
//           <Menu size={28} />
//         </button>
//         <h1 className="text-xl font-bold text-[#0D141C]">Providers</h1>
//         <div className="w-7" />
//       </header>

//       {/* Main Content */}
//       <main className="flex-grow p-4 space-y-4">
//         <h2 className="text-lg font-bold text-[#0D141C] mb-2">All Providers</h2>

//         {providers.map((provider) => (
//           <div
//             key={provider.id}
//             className="flex items-start gap-4 p-4 transition bg-white shadow-sm rounded-xl hover:shadow-md"
//           >
//             {/* Logo */}
//             <img
//               src={provider.logo}
//               alt={provider.name}
//               className="object-cover w-16 h-16 border border-gray-200 rounded-full"
//             />

//             {/* Provider Info */}
//             <div className="flex-grow">
//               <h3 className="font-semibold text-[#0D141C]">{provider.name}</h3>
//               <p className="text-sm text-gray-500">Provider ID: {provider.id}</p>

//               {/* Status + Rating */}
//               <div className="flex items-center mt-2 space-x-3">
//                 {provider.status === "Active" && (
//                   <span className="px-2 py-0.5 text-xs rounded-md bg-green-50 text-green-700 ring-1 ring-green-600/20">
//                     Active
//                   </span>
//                 )}
//                 {provider.status === "Pending" && (
//                   <span className="px-2 py-0.5 text-xs rounded-md bg-orange-50 text-orange-700 ring-1 ring-orange-600/20">
//                     Pending
//                   </span>
//                 )}
//                 {provider.status === "Suspended" && (
//                   <span className="px-2 py-0.5 text-xs rounded-md bg-red-50 text-red-700 ring-1 ring-red-600/20">
//                     Suspended
//                   </span>
//                 )}

//                 <div className="flex items-center text-sm text-gray-600">
//                   <Star size={14} className="mr-1 text-yellow-400" />
//                   {provider.rating}
//                 </div>
//               </div>

//               {/* Extra details */}
//               <div className="flex flex-wrap gap-3 mt-2 text-xs text-gray-600">
//                 <span className="flex items-center gap-1">
//                   <MapPin size={14} /> {provider.location}
//                 </span>
//                 <span className="flex items-center gap-1">
//                   <Briefcase size={14} /> {provider.services}
//                 </span>
//                 <span className="flex items-center gap-1">
//                   <Calendar size={14} /> Joined {provider.joined}
//                 </span>
//                 <span className="flex items-center gap-1">
//                   <ListChecks size={14} /> {provider.requests} requests
//                 </span>
//               </div>
//             </div>

//             {/* Actions */}
//             <button className="text-gray-400 hover:text-gray-600">
//               <MoreVertical size={20} />
//             </button>
//           </div>
//         ))}
//       </main>

//       {/* Bottom Navigation */}
//       <footer className="sticky bottom-0 bg-white border-t border-gray-200">
//         {/* <nav className="flex justify-around py-2">
//           <button
//             onClick={() => setActiveTab("dashboard")}
//             className={`flex flex-col items-center gap-1 ${
//               activeTab === "dashboard" ? "text-[#2A6293]" : "text-gray-500"
//             }`}
//           >
//             <Home size={22} />
//             <span className="text-xs">Dashboard</span>
//           </button>

//           <button
//             onClick={() => setActiveTab("users")}
//             className={`flex flex-col items-center gap-1 ${
//               activeTab === "users" ? "text-[#2A6293]" : "text-gray-500"
//             }`}
//           >
//             <Users size={22} />
//             <span className="text-xs">Users</span>
//           </button>

//           <button
//             onClick={() => setActiveTab("providers")}
//             className={`flex flex-col items-center gap-1 ${
//               activeTab === "providers" ? "text-[#2A6293]" : "text-gray-500"
//             }`}
//           >
//             <UserCircle size={22} />
//             <span className="text-xs font-bold">Providers</span>
//           </button>

//           <button
//             onClick={() => setActiveTab("requests")}
//             className={`flex flex-col items-center gap-1 ${
//               activeTab === "requests" ? "text-[#2A6293]" : "text-gray-500"
//             }`}
//           >
//             <ListChecks size={22} />
//             <span className="text-xs">Requests</span>
//           </button>

//           <button
//             onClick={() => setActiveTab("more")}
//             className={`flex flex-col items-center gap-1 ${
//               activeTab === "more" ? "text-[#2A6293]" : "text-gray-500"
//             }`}
//           >
//             <MoreHorizontal size={22} />
//             <span className="text-xs">More</span>
//           </button>
//         </nav> */}


//         <BottomNav/>
//       </footer>
//     </div>
//   );
// }


// "use client";

// import { useState } from "react";
// import {
//   Star,
//   MoreVertical,
//   MapPin,
//   Briefcase,
//   Calendar,
//   ListChecks,
// } from "lucide-react";
// import BottomNav from "@/components/admin/BottomNav";

// export default function AdminProvidersPage() {
//   const [activeTab] = useState("providers");

//   const providers = [
//     {
//       id: "12345",
//       name: "Tech Solutions Inc.",
//       logo: "https://via.placeholder.com/80x80.png?text=TS",
//       status: "Active",
//       rating: 4.8,
//       location: "New York",
//       services: "IT & Support",
//       joined: "2021-08-15",
//       requests: 120,
//     },
//     {
//       id: "67890",
//       name: "Health & Wellness Clinic",
//       logo: "https://via.placeholder.com/80x80.png?text=HWC",
//       status: "Active",
//       rating: 4.9,
//       location: "Los Angeles",
//       services: "Healthcare",
//       joined: "2022-01-10",
//       requests: 89,
//     },
//     {
//       id: "24680",
//       name: "Green Energy Co.",
//       logo: "https://via.placeholder.com/80x80.png?text=GE",
//       status: "Pending",
//       rating: 4.5,
//       location: "Chicago",
//       services: "Energy Solutions",
//       joined: "2022-06-20",
//       requests: 45,
//     },
//     {
//       id: "13579",
//       name: "EduTech Academy",
//       logo: "https://via.placeholder.com/80x80.png?text=EA",
//       status: "Suspended",
//       rating: 4.2,
//       location: "Houston",
//       services: "Education",
//       joined: "2021-05-01",
//       requests: 67,
//     },
//     {
//       id: "97531",
//       name: "Creative Design Studio",
//       logo: "https://via.placeholder.com/80x80.png?text=CDS",
//       status: "Active",
//       rating: 5.0,
//       location: "Phoenix",
//       services: "Design & Media",
//       joined: "2020-11-30",
//       requests: 150,
//     },
//   ];

//   return (
//     <div className="flex flex-col min-h-screen bg-[#EAF4FB]">
//       {/* Header */}
//       <header className="sticky top-0 z-10 flex items-center justify-center px-4 py-3 bg-white border-b border-gray-200 shadow-sm">
//         <h1 className="text-lg sm:text-xl font-bold text-[#0D141C]">
//           Providers
//         </h1>
//       </header>

//       {/* Main Content */}
//       <main className="flex-grow p-4 pb-24 space-y-4">
//         <h2 className="text-lg font-bold text-[#0D141C] mb-2">All Providers</h2>

//         {providers.map((provider) => (
//           <div
//             key={provider.id}
//             className="flex items-start gap-4 p-4 transition bg-white shadow-sm rounded-xl hover:bg-[#F1F9FF] hover:shadow-md"
//           >
//             {/* Logo */}
//             <img
//               src={provider.logo}
//               alt={provider.name}
//               className="object-cover w-16 h-16 border border-gray-200 rounded-full"
//             />

//             {/* Provider Info */}
//             <div className="flex-grow">
//               <h3 className="font-semibold text-[#0D141C]">{provider.name}</h3>
//               <p className="text-sm text-gray-500">Provider ID: {provider.id}</p>

//               {/* Status + Rating */}
//               <div className="flex items-center mt-2 space-x-3">
//                 {provider.status === "Active" && (
//                   <span className="px-2 py-0.5 text-xs rounded-md bg-green-50 text-green-700 ring-1 ring-green-600/20">
//                     Active
//                   </span>
//                 )}
//                 {provider.status === "Pending" && (
//                   <span className="px-2 py-0.5 text-xs rounded-md bg-orange-50 text-orange-700 ring-1 ring-orange-600/20">
//                     Pending
//                   </span>
//                 )}
//                 {provider.status === "Suspended" && (
//                   <span className="px-2 py-0.5 text-xs rounded-md bg-red-50 text-red-700 ring-1 ring-red-600/20">
//                     Suspended
//                   </span>
//                 )}

//                 <div className="flex items-center text-sm text-gray-600">
//                   <Star size={14} className="mr-1 text-yellow-400" />
//                   {provider.rating}
//                 </div>
//               </div>

//               {/* Extra details */}
//               <div className="flex flex-wrap gap-3 mt-2 text-xs text-gray-600">
//                 <span className="flex items-center gap-1">
//                   <MapPin size={14} /> {provider.location}
//                 </span>
//                 <span className="flex items-center gap-1">
//                   <Briefcase size={14} /> {provider.services}
//                 </span>
//                 <span className="flex items-center gap-1">
//                   <Calendar size={14} /> Joined {provider.joined}
//                 </span>
//                 <span className="flex items-center gap-1">
//                   <ListChecks size={14} /> {provider.requests} requests
//                 </span>
//               </div>
//             </div>

//             {/* Actions */}
//             <button className="text-[#2A6293] hover:text-[#18405e] transition-colors">
//               <MoreVertical size={20} />
//             </button>
//           </div>
//         ))}
//       </main>

//       {/* Bottom Navigation */}
//       <footer className="sticky bottom-0">
//         <BottomNav />
//       </footer>
//     </div>
//   );
// }



// "use client";

// import { useState } from "react";
// import {
//   Star,
//   MoreVertical,
//   MapPin,
//   Briefcase,
//   Calendar,
//   ListChecks,
// } from "lucide-react";
// import BottomNav from "@/components/admin/BottomNav";

// export default function AdminProvidersPage() {
//   const [activeTab] = useState("providers");

//   const providers = [
//     {
//       id: "MH-001",
//       name: "Konkan Auto Garage",
//       logo: "https://via.placeholder.com/80x80.png?text=KAG",
//       status: "Active",
//       rating: 4.7,
//       location: "Ratnagiri, Maharashtra",
//       services: "Bike & Car Repairs",
//       joined: "2022-03-12",
//       requests: 98,
//     },
//     {
//       id: "MH-002",
//       name: "Sawantwadi Fuel Delivery",
//       logo: "https://via.placeholder.com/80x80.png?text=SFD",
//       status: "Active",
//       rating: 4.9,
//       location: "Sawantwadi, Sindhudurg",
//       services: "Petrol & Diesel Delivery",
//       joined: "2021-11-05",
//       requests: 120,
//     },
//     {
//       id: "MH-003",
//       name: "Chiplun Tyre Services",
//       logo: "https://via.placeholder.com/80x80.png?text=CTS",
//       status: "Pending",
//       rating: 4.4,
//       location: "Chiplun, Maharashtra",
//       services: "Tyre Puncture & Replacement",
//       joined: "2023-02-17",
//       requests: 54,
//     },
//     {
//       id: "MH-004",
//       name: "Devrukh Tractor Mechanics",
//       logo: "https://via.placeholder.com/80x80.png?text=DTM",
//       status: "Suspended",
//       rating: 4.1,
//       location: "Devrukh, Ratnagiri",
//       services: "Tractor & Farm Vehicle Repair",
//       joined: "2021-07-22",
//       requests: 40,
//     },
//     {
//       id: "MH-005",
//       name: "Kudal Roadside Assistance",
//       logo: "https://via.placeholder.com/80x80.png?text=KRA",
//       status: "Active",
//       rating: 5.0,
//       location: "Kudal, Sindhudurg",
//       services: "24x7 Roadside Help",
//       joined: "2020-09-14",
//       requests: 160,
//     },
//   ];

//   return (
//     <div className="flex flex-col min-h-screen bg-[#EAF4FB]">
//       {/* Header */}
//       <header className="sticky top-0 z-10 flex items-center justify-center px-4 py-3 bg-white border-b border-gray-200 shadow-sm">
//         <h1 className="text-lg sm:text-xl font-bold text-[#0D141C]">
//           Providers
//         </h1>
//       </header>

//       {/* Main Content */}
//       <main className="flex-grow p-4 pb-24 space-y-4">
//         <h2 className="text-lg font-bold text-[#0D141C] mb-2">
//           All Providers
//         </h2>

//         {providers.map((provider) => (
//           <div
//             key={provider.id}
//             className="flex items-start gap-4 p-4 transition bg-white shadow-sm rounded-xl hover:bg-[#DCEBFA] hover:shadow-md"
//           >
//             {/* Logo */}
//             <img
//               src={provider.logo}
//               alt={provider.name}
//               className="object-cover w-16 h-16 border border-gray-200 rounded-full"
//             />

//             {/* Provider Info */}
//             <div className="flex-grow">
//               <h3 className="font-semibold text-[#0D141C]">
//                 {provider.name}
//               </h3>
//               <p className="text-sm text-gray-500">
//                 Provider ID: {provider.id}
//               </p>

//               {/* Status + Rating */}
//               <div className="flex items-center mt-2 space-x-3">
//                 {provider.status === "Active" && (
//                   <span className="px-2 py-0.5 text-xs rounded-md bg-green-50 text-green-700 ring-1 ring-green-600/20">
//                     Active
//                   </span>
//                 )}
//                 {provider.status === "Pending" && (
//                   <span className="px-2 py-0.5 text-xs rounded-md bg-orange-50 text-orange-700 ring-1 ring-orange-600/20">
//                     Pending
//                   </span>
//                 )}
//                 {provider.status === "Suspended" && (
//                   <span className="px-2 py-0.5 text-xs rounded-md bg-red-50 text-red-700 ring-1 ring-red-600/20">
//                     Suspended
//                   </span>
//                 )}

//                 <div className="flex items-center text-sm text-gray-600">
//                   <Star size={14} className="mr-1 text-yellow-400" />
//                   {provider.rating}
//                 </div>
//               </div>

//               {/* Extra details */}
//               <div className="flex flex-wrap gap-3 mt-2 text-xs text-gray-600">
//                 <span className="flex items-center gap-1">
//                   <MapPin size={14} /> {provider.location}
//                 </span>
//                 <span className="flex items-center gap-1">
//                   <Briefcase size={14} /> {provider.services}
//                 </span>
//                 <span className="flex items-center gap-1">
//                   <Calendar size={14} /> Joined {provider.joined}
//                 </span>
//                 <span className="flex items-center gap-1">
//                   <ListChecks size={14} /> {provider.requests} requests
//                 </span>
//               </div>
//             </div>

//             {/* Actions */}
//             <button className="text-[#2A6293] hover:text-[#18405e] transition-colors">
//               <MoreVertical size={20} />
//             </button>
//           </div>
//         ))}
//       </main>

//       {/* Bottom Navigation */}
//       <footer className="sticky bottom-0">
//         <BottomNav />
//       </footer>
//     </div>
//   );
// }



// "use client";

// import { useState } from "react";
// import {
//   Star,
//   MoreVertical,
//   MapPin,
//   Briefcase,
//   Calendar,
//   ListChecks,
// } from "lucide-react";
// import BottomNav from "@/components/admin/BottomNav";
// import Header from "@/components/Header";

// export default function AdminProvidersPage() {
//   const [activeTab] = useState("providers");

//   const providers = [
//     {
//       id: "MH-001",
//       name: "Konkan Auto Garage",
//       logo: "https://via.placeholder.com/80x80.png?text=KAG",
//       status: "Active",
//       rating: 4.7,
//       location: "Ratnagiri, Maharashtra",
//       services: "Bike & Car Repairs",
//       joined: "2022-03-12",
//       requests: 98,
//     },
//     {
//       id: "MH-002",
//       name: "Sawantwadi Fuel Delivery",
//       logo: "https://via.placeholder.com/80x80.png?text=SFD",
//       status: "Active",
//       rating: 4.9,
//       location: "Sawantwadi, Sindhudurg",
//       services: "Petrol & Diesel Delivery",
//       joined: "2021-11-05",
//       requests: 120,
//     },
//     {
//       id: "MH-003",
//       name: "Chiplun Tyre Services",
//       logo: "https://via.placeholder.com/80x80.png?text=CTS",
//       status: "Pending",
//       rating: 4.4,
//       location: "Chiplun, Maharashtra",
//       services: "Tyre Puncture & Replacement",
//       joined: "2023-02-17",
//       requests: 54,
//     },
//     {
//       id: "MH-004",
//       name: "Devrukh Tractor Mechanics",
//       logo: "https://via.placeholder.com/80x80.png?text=DTM",
//       status: "Suspended",
//       rating: 4.1,
//       location: "Devrukh, Ratnagiri",
//       services: "Tractor & Farm Vehicle Repair",
//       joined: "2021-07-22",
//       requests: 40,
//     },
//     {
//       id: "MH-005",
//       name: "Kudal Roadside Assistance",
//       logo: "https://via.placeholder.com/80x80.png?text=KRA",
//       status: "Active",
//       rating: 5.0,
//       location: "Kudal, Sindhudurg",
//       services: "24x7 Roadside Help",
//       joined: "2020-09-14",
//       requests: 160,
//     },
//   ];

//   return (
//     <div className="flex flex-col min-h-screen bg-[#EAF4FB]">
//       {/* Header */}
//       <Header/>
//       <header className="sticky top-0 z-10 flex items-center justify-center px-4 py-3 bg-white border-b border-gray-200 shadow-sm">
//         <h1 className="text-lg sm:text-xl font-bold text-[#0D141C]">
//           Providers
//         </h1>
//       </header>

//       {/* Main Content */}
//       <main className="flex-grow p-4 pb-24 space-y-4">
//         <h2 className="text-lg font-bold text-[#0D141C] mb-2">
//           All Providers
//         </h2>

//         {providers.map((provider) => (
//           <div
//             key={provider.id}
//             className="group flex items-start gap-4 p-4 transition bg-white shadow-sm rounded-xl 
//                        hover:bg-[#2B6CB0] hover:shadow-md"
//           >
//             {/* Logo */}
//             <img
//               src={provider.logo}
//               alt={provider.name}
//               className="object-cover w-16 h-16 border border-gray-200 rounded-full group-hover:ring-2 group-hover:ring-white"
//             />

//             {/* Provider Info */}
//             <div className="flex-grow">
//               <h3 className="font-semibold text-[#0D141C] group-hover:text-white">
//                 {provider.name}
//               </h3>
//               <p className="text-sm text-gray-500 group-hover:text-gray-200">
//                 Provider ID: {provider.id}
//               </p>

//               {/* Status + Rating */}
//               <div className="flex items-center mt-2 space-x-3">
//                 {provider.status === "Active" && (
//                   <span className="px-2 py-0.5 text-xs rounded-md bg-green-50 text-green-700 ring-1 ring-green-600/20 group-hover:bg-green-600 group-hover:text-white">
//                     Active
//                   </span>
//                 )}
//                 {provider.status === "Pending" && (
//                   <span className="px-2 py-0.5 text-xs rounded-md bg-orange-50 text-orange-700 ring-1 ring-orange-600/20 group-hover:bg-orange-500 group-hover:text-white">
//                     Pending
//                   </span>
//                 )}
//                 {provider.status === "Suspended" && (
//                   <span className="px-2 py-0.5 text-xs rounded-md bg-red-50 text-red-700 ring-1 ring-red-600/20 group-hover:bg-red-600 group-hover:text-white">
//                     Suspended
//                   </span>
//                 )}

//                 <div className="flex items-center text-sm text-gray-600 group-hover:text-gray-200">
//                   <Star size={14} className="mr-1 text-yellow-400" />
//                   {provider.rating}
//                 </div>
//               </div>

//               {/* Extra details */}
//               <div className="flex flex-wrap gap-3 mt-2 text-xs text-gray-600 group-hover:text-gray-200">
//                 <span className="flex items-center gap-1">
//                   <MapPin size={14} /> {provider.location}
//                 </span>
//                 <span className="flex items-center gap-1">
//                   <Briefcase size={14} /> {provider.services}
//                 </span>
//                 <span className="flex items-center gap-1">
//                   <Calendar size={14} /> Joined {provider.joined}
//                 </span>
//                 <span className="flex items-center gap-1">
//                   <ListChecks size={14} /> {provider.requests} requests
//                 </span>
//               </div>
//             </div>

//             {/* Actions */}
//             <button className="text-[#2A6293] group-hover:text-white transition-colors">
//               <MoreVertical size={20} />
//             </button>
//           </div>
//         ))}
//       </main>

//       {/* Bottom Navigation */}
//       <footer className="sticky bottom-0">
//         <BottomNav />
//       </footer>
//     </div>
//   );
// }




// "use client";

// import { useState } from "react";
// import { Star, MoreVertical, MapPin, Briefcase, Calendar, ListChecks } from "lucide-react";
// import BottomNav from "@/components/admin/BottomNav";
// import Header from "@/components/Header";
// import Link from "next/link";

// export default function AdminProvidersPage() {
//   const [activeTab, setActiveTab] = useState<"providers" | "applications">("providers");
//   const [openMenuId, setOpenMenuId] = useState<string | null>(null); // Track which provider's menu is open

//   const providers = [
//     {
//       id: "MH-001",
//       name: "Konkan Auto Garage",
//       logo: "https://via.placeholder.com/80x80.png?text=KAG",
//       status: "Active",
//       rating: 4.7,
//       location: "Ratnagiri, Maharashtra",
//       services: "Bike & Car Repairs",
//       joined: "2022-03-12",
//       requests: 98,
//     },
//     {
//       id: "MH-002",
//       name: "Sawantwadi Fuel Delivery",
//       logo: "https://via.placeholder.com/80x80.png?text=SFD",
//       status: "Active",
//       rating: 4.9,
//       location: "Sawantwadi, Sindhudurg",
//       services: "Petrol & Diesel Delivery",
//       joined: "2021-11-05",
//       requests: 120,
//     },
//   ];

//   const applications = [
//     {
//       id: "MH-101",
//       name: "New Auto Garage",
//       logo: "https://via.placeholder.com/80x80.png?text=NAG",
//       status: "Pending",
//       rating: 0,
//       location: "Chiplun, Maharashtra",
//       services: "Car Repairs",
//       joined: "2025-08-15",
//       requests: 0,
//     },
//   ];

//   const toggleMenu = (id: string) => {
//     setOpenMenuId(openMenuId === id ? null : id);
//   };

//   const renderProviderCard = (provider: typeof providers[0] | typeof applications[0]) => (
//     <div
//       key={provider.id}
//       className="group flex flex-col sm:flex-row items-start sm:items-center gap-4 p-4 transition bg-white shadow-sm rounded-xl 
//                  hover:bg-[#2B6CB0] hover:shadow-md relative"
//     >
//       {/* Logo */}
//       <img
//         src={provider.logo}
//         alt={provider.name}
//         className="object-cover w-16 h-16 border border-gray-200 rounded-full group-hover:ring-2 group-hover:ring-white"
//       />

//       {/* Provider Info */}
//       <div className="flex-grow">
//         <h3 className="font-semibold text-[#0D141C] group-hover:text-white">{provider.name}</h3>
//         <p className="text-sm text-gray-500 group-hover:text-gray-200">ID: {provider.id}</p>

//         <div className="flex items-center mt-2 space-x-3">
//           {provider.status === "Active" && (
//             <span className="px-2 py-0.5 text-xs rounded-md bg-green-50 text-green-700 ring-1 ring-green-600/20 group-hover:bg-green-600 group-hover:text-white">
//               Active
//             </span>
//           )}
//           {provider.status === "Pending" && (
//             <span className="px-2 py-0.5 text-xs rounded-md bg-orange-50 text-orange-700 ring-1 ring-orange-600/20 group-hover:bg-orange-500 group-hover:text-white">
//               Pending
//             </span>
//           )}
//           {provider.status === "Suspended" && (
//             <span className="px-2 py-0.5 text-xs rounded-md bg-red-50 text-red-700 ring-1 ring-red-600/20 group-hover:bg-red-600 group-hover:text-white">
//               Suspended
//             </span>
//           )}

//           {provider.rating > 0 && (
//             <div className="flex items-center text-sm text-gray-600 group-hover:text-gray-200">
//               <Star size={14} className="mr-1 text-yellow-400" /> {provider.rating}
//             </div>
//           )}
//         </div>

//         <div className="flex flex-wrap gap-3 mt-2 text-xs text-gray-600 group-hover:text-gray-200">
//           <span className="flex items-center gap-1"><MapPin size={14} /> {provider.location}</span>
//           <span className="flex items-center gap-1"><Briefcase size={14} /> {provider.services}</span>
//           <span className="flex items-center gap-1"><Calendar size={14} /> Joined {provider.joined}</span>
//           <span className="flex items-center gap-1"><ListChecks size={14} /> {provider.requests} requests</span>
//         </div>
//       </div>

//       {/* 3-Dot Menu */}
//       <div className="relative">
//         <button
//           onClick={() => toggleMenu(provider.id)}
//           className="text-[#2A6293] group-hover:text-white transition-colors"
//         >
//           <MoreVertical size={20} />
//         </button>

//         {openMenuId === provider.id && (
//           <div className="absolute right-0 z-20 mt-2 bg-white rounded-md shadow-lg w-36">
//             <Link
//               href={`/admin/providers/actions/Edit?id=${provider.id}`}
//               className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
//             >
//               Edit
//             </Link>
//             <Link
//               href={`/admin/providers/actions/Delete?id=${provider.id}`}
//               className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
//             >
//               Delete
//             </Link>
//             <Link
//               href={`/admin/providers/actions/ViewDetails?id=${provider.id}`}
//               className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
//             >
//               View Details
//             </Link>
//           </div>
//         )}
//       </div>
//     </div>
//   );

//   return (
//     <div className="flex flex-col min-h-screen bg-[#EAF4FB]">
//       <Header />

//       <header className="sticky top-0 z-10 bg-white border-b border-gray-200 shadow-sm">
//         <div className="flex justify-center p-3 space-x-4">
//           <button
//             onClick={() => setActiveTab("providers")}
//             className={`px-4 py-2 rounded-full font-semibold transition ${
//               activeTab === "providers"
//                 ? "bg-[#2B6CB0] text-white"
//                 : "bg-gray-100 text-gray-700 hover:bg-gray-200"
//             }`}
//           >
//             Providers
//           </button>
//           <button
//             onClick={() => setActiveTab("applications")}
//             className={`px-4 py-2 rounded-full font-semibold transition ${
//               activeTab === "applications"
//                 ? "bg-[#2B6CB0] text-white"
//                 : "bg-gray-100 text-gray-700 hover:bg-gray-200"
//             }`}
//           >
//             Applications
//           </button>
//         </div>
//       </header>

//       <main className="flex-grow p-4 pb-24 space-y-4">
//         {activeTab === "providers"
//           ? providers.map(renderProviderCard)
//           : applications.map(renderProviderCard)}
//       </main>

//       <footer className="sticky bottom-0">
//         <BottomNav />
//       </footer>
//     </div>
//   );
// }



// "use client";

// import { useState } from "react";
// import { Star, MoreVertical, MapPin, Briefcase, Calendar, ListChecks } from "lucide-react";
// import BottomNav from "@/components/admin/BottomNav";
// import Header from "@/components/Header";
// import Link from "next/link";

// export default function AdminProvidersPage() {
//   const [activeTab, setActiveTab] = useState<"providers" | "applications">("providers");
//   const [openMenuId, setOpenMenuId] = useState<string | null>(null);

//   const providers = [
//     {
//       id: "MH-001",
//       name: "Konkan Auto Garage",
//       logo: "https://via.placeholder.com/80x80.png?text=KAG",
//       status: "Active",
//       rating: 4.7,
//       location: "Ratnagiri, Maharashtra",
//       services: "Bike & Car Repairs",
//       joined: "2022-03-12",
//       requests: 98,
//     },
//     {
//       id: "MH-002",
//       name: "Sawantwadi Fuel Delivery",
//       logo: "https://via.placeholder.com/80x80.png?text=SFD",
//       status: "Active",
//       rating: 4.9,
//       location: "Sawantwadi, Sindhudurg",
//       services: "Petrol & Diesel Delivery",
//       joined: "2021-11-05",
//       requests: 120,
//     },
//   ];

//   const applications = [
//     {
//       id: "MH-101",
//       name: "New Auto Garage",
//       logo: "https://via.placeholder.com/80x80.png?text=NAG",
//       status: "Pending",
//       rating: 0,
//       location: "Chiplun, Maharashtra",
//       services: "Car Repairs",
//       joined: "2025-08-15",
//       requests: 0,
//     },
//   ];

//   const toggleMenu = (id: string) => {
//     setOpenMenuId(openMenuId === id ? null : id);
//   };

//   const renderProviderCard = (provider: typeof providers[0] | typeof applications[0]) => (
//     <div
//       key={provider.id}
//       className="group flex flex-col sm:flex-row items-start sm:items-center gap-4 p-4 transition bg-white shadow-sm rounded-xl 
//                  hover:bg-[#2B6CB0] hover:shadow-md relative"
//     >
//       {/* Logo */}
//       <img
//         src={provider.logo}
//         alt={provider.name}
//         className="object-cover w-16 h-16 border border-gray-200 rounded-full group-hover:ring-2 group-hover:ring-white"
//       />

//       {/* Provider Info */}
//       <div className="flex-grow">
//         <h3 className="font-semibold text-[#0D141C] group-hover:text-white">{provider.name}</h3>
//         <p className="text-sm text-gray-500 group-hover:text-gray-200">ID: {provider.id}</p>

//         <div className="flex items-center mt-2 space-x-3">
//           {provider.status === "Active" && (
//             <span className="px-2 py-0.5 text-xs rounded-md bg-green-50 text-green-700 ring-1 ring-green-600/20 group-hover:bg-green-600 group-hover:text-white">
//               Active
//             </span>
//           )}
//           {provider.status === "Pending" && (
//             <span className="px-2 py-0.5 text-xs rounded-md bg-orange-50 text-orange-700 ring-1 ring-orange-600/20 group-hover:bg-orange-500 group-hover:text-white">
//               Pending
//             </span>
//           )}
//           {provider.status === "Suspended" && (
//             <span className="px-2 py-0.5 text-xs rounded-md bg-red-50 text-red-700 ring-1 ring-red-600/20 group-hover:bg-red-600 group-hover:text-white">
//               Suspended
//             </span>
//           )}

//           {provider.rating > 0 && (
//             <div className="flex items-center text-sm text-gray-600 group-hover:text-gray-200">
//               <Star size={14} className="mr-1 text-yellow-400" /> {provider.rating}
//             </div>
//           )}
//         </div>

//         <div className="flex flex-wrap gap-3 mt-2 text-xs text-gray-600 group-hover:text-gray-200">
//           <span className="flex items-center gap-1"><MapPin size={14} /> {provider.location}</span>
//           <span className="flex items-center gap-1"><Briefcase size={14} /> {provider.services}</span>
//           <span className="flex items-center gap-1"><Calendar size={14} /> Joined {provider.joined}</span>
//           <span className="flex items-center gap-1"><ListChecks size={14} /> {provider.requests} requests</span>
//         </div>
//       </div>

//       {/* 3-Dot Menu */}
//       <div className="relative">
//         <button
//           onClick={() => toggleMenu(provider.id)}
//           className="text-[#2A6293] group-hover:text-white transition-colors"
//         >
//           <MoreVertical size={20} />
//         </button>

//         {openMenuId === provider.id && (
//           <div className="absolute right-0 z-20 mt-2 bg-white rounded-md shadow-lg w-36">
//             <Link
//               href={`/admin/providers/actions/Edit?id=${provider.id}`}
//               className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
//             >
//               Edit
//             </Link>
//             <Link
//               href={`/admin/providers/actions/Delete?id=${provider.id}`}
//               className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
//             >
//               Delete
//             </Link>
//             {activeTab === "providers" ? (
//               <Link
//                 href={`/admin/providers/actions/AcceptedDetails?id=${provider.id}`}
//                 className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
//               >
//                 View Details
//               </Link>
//             ) : (
//               <Link
//                 href={`/admin/providers/actions/ViewDetails?id=${provider.id}`}
//                 className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
//               >
//                 View Details
//               </Link>
//             )}
//           </div>
//         )}
//       </div>
//     </div>
//   );

//   return (
//     <div className="flex flex-col min-h-screen bg-[#EAF4FB]">
//       <Header />

//       <header className="sticky top-0 z-10 bg-white border-b border-gray-200 shadow-sm">
//         <div className="flex justify-center p-3 space-x-4">
//           <button
//             onClick={() => setActiveTab("providers")}
//             className={`px-4 py-2 rounded-full font-semibold transition ${
//               activeTab === "providers"
//                 ? "bg-[#2B6CB0] text-white"
//                 : "bg-gray-100 text-gray-700 hover:bg-gray-200"
//             }`}
//           >
//             Providers
//           </button>
//           <button
//             onClick={() => setActiveTab("applications")}
//             className={`px-4 py-2 rounded-full font-semibold transition ${
//               activeTab === "applications"
//                 ? "bg-[#2B6CB0] text-white"
//                 : "bg-gray-100 text-gray-700 hover:bg-gray-200"
//             }`}
//           >
//             Applications
//           </button>
//         </div>
//       </header>

//       <main className="flex-grow p-4 pb-24 space-y-4">
//         {activeTab === "providers"
//           ? providers.map(renderProviderCard)
//           : applications.map(renderProviderCard)}
//       </main>

//       <footer className="sticky bottom-0">
//         <BottomNav />
//       </footer>
//     </div>
//   );
// }



"use client";

import { useState } from "react";
import { Star, MoreVertical, MapPin, Briefcase, Calendar, ListChecks } from "lucide-react";
import BottomNav from "@/components/admin/BottomNav";
import Header from "@/components/Header";
import Link from "next/link";

export default function AdminProvidersPage() {
  const [activeTab, setActiveTab] = useState<"providers" | "applications">("providers");
  const [openMenuId, setOpenMenuId] = useState<string | null>(null);

  const providers = [
    {
      id: "MH-001",
      name: "Konkan Auto Garage",
      logo: "https://via.placeholder.com/80x80.png?text=KAG",
      status: "Active",
      rating: 4.7,
      location: "Ratnagiri, Maharashtra",
      services: "Bike & Car Repairs",
      joined: "2022-03-12",
      requests: 98,
    },
    {
      id: "MH-002",
      name: "Sawantwadi Fuel Delivery",
      logo: "https://via.placeholder.com/80x80.png?text=SFD",
      status: "Active",
      rating: 4.9,
      location: "Sawantwadi, Sindhudurg",
      services: "Petrol & Diesel Delivery",
      joined: "2021-11-05",
      requests: 120,
    },
  ];

  const applications = [
    {
      id: "MH-101",
      name: "New Auto Garage",
      logo: "https://via.placeholder.com/80x80.png?text=NAG",
      status: "Pending",
      rating: 0,
      location: "Chiplun, Maharashtra",
      services: "Car Repairs",
      joined: "2025-08-15",
      requests: 0,
    },
  ];

  const toggleMenu = (id: string) => setOpenMenuId(openMenuId === id ? null : id);

  const renderProviderCard = (provider: typeof providers[0] | typeof applications[0], isApplication = false) => (
    <div
      key={provider.id}
      className="group flex flex-col sm:flex-row items-start sm:items-center gap-4 p-4 transition bg-white shadow-sm rounded-xl hover:bg-[#2B6CB0] hover:shadow-md relative"
    >
      <img src={provider.logo} alt={provider.name} className="object-cover w-16 h-16 border border-gray-200 rounded-full group-hover:ring-2 group-hover:ring-white" />
      
      <div className="flex-grow">
        <h3 className="font-semibold text-[#0D141C] group-hover:text-white">{provider.name}</h3>
        <p className="text-sm text-gray-500 group-hover:text-gray-200">ID: {provider.id}</p>

        <div className="flex items-center mt-2 space-x-3">
          {provider.status === "Active" && <span className="px-2 py-0.5 text-xs rounded-md bg-green-50 text-green-700 ring-1 ring-green-600/20 group-hover:bg-green-600 group-hover:text-white">Active</span>}
          {provider.status === "Pending" && <span className="px-2 py-0.5 text-xs rounded-md bg-orange-50 text-orange-700 ring-1 ring-orange-600/20 group-hover:bg-orange-500 group-hover:text-white">Pending</span>}
          {provider.status === "Suspended" && <span className="px-2 py-0.5 text-xs rounded-md bg-red-50 text-red-700 ring-1 ring-red-600/20 group-hover:bg-red-600 group-hover:text-white">Suspended</span>}

          {provider.rating > 0 && (
            <div className="flex items-center text-sm text-gray-600 group-hover:text-gray-200">
              <Star size={14} className="mr-1 text-yellow-400" /> {provider.rating}
            </div>
          )}
        </div>

        <div className="flex flex-wrap gap-3 mt-2 text-xs text-gray-600 group-hover:text-gray-200">
          <span className="flex items-center gap-1"><MapPin size={14} /> {provider.location}</span>
          <span className="flex items-center gap-1"><Briefcase size={14} /> {provider.services}</span>
          <span className="flex items-center gap-1"><Calendar size={14} /> Joined {provider.joined}</span>
          <span className="flex items-center gap-1"><ListChecks size={14} /> {provider.requests} requests</span>
        </div>
      </div>

      {/* Dropdown Menu */}
      <div className="relative">
        <button onClick={() => toggleMenu(provider.id)} className="text-[#2A6293] group-hover:text-white transition-colors">
          <MoreVertical size={20} />
        </button>

        {openMenuId === provider.id && (
          <div className="absolute right-0 z-20 mt-2 bg-white rounded-md shadow-lg w-36">
            <Link href={`/admin/providers/actions/Edit?id=${provider.id}`} className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Edit</Link>
            <Link href={`/admin/providers/actions/Delete?id=${provider.id}`} className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Delete</Link>
            {isApplication ? (
              <Link href={`/admin/providers/actions/ViewDetails?id=${provider.id}`} className="block px-4 py-2 text-gray-800 hover:bg-gray-100">View Details</Link>
            ) : (
              <Link href={`/admin/providers/actions/AcceptedDetails?id=${provider.id}`} className="block px-4 py-2 text-gray-800 hover:bg-gray-100">View Details</Link>
            )}
          </div>
        )}
      </div>
    </div>
  );

  return (
    <div className="flex flex-col min-h-screen bg-[#EAF4FB]">
      <Header />

      <header className="sticky top-0 z-10 bg-white border-b border-gray-200 shadow-sm">
        <div className="flex justify-center p-3 space-x-4">
          <button onClick={() => setActiveTab("providers")} className={`px-4 py-2 rounded-full font-semibold transition ${activeTab === "providers" ? "bg-[#2B6CB0] text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`}>Providers</button>
          <button onClick={() => setActiveTab("applications")} className={`px-4 py-2 rounded-full font-semibold transition ${activeTab === "applications" ? "bg-[#2B6CB0] text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`}>Applications</button>
        </div>
      </header>

      <main className="flex-grow p-4 pb-24 space-y-4">
        {activeTab === "providers"
          ? providers.map((p) => renderProviderCard(p, false))
          : applications.map((p) => renderProviderCard(p, true))}
      </main>

      <footer className="sticky bottom-0">
        <BottomNav />
      </footer>
    </div>
  );
}
