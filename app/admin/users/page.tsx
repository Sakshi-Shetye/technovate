// "use client";

// import React, { useEffect, useState } from "react";
// import { MoreVertical } from "lucide-react";
// import Header from "@/components/Header"; // Your header component
// import { useRouter } from "next/navigation";

// type User = {
//   id: string;
//   name: string;
//   contact: string;
//   location: string;
//   requests: number;
//   status: "Active" | "Blocked";
// };

// const initialUsers: User[] = [
//   { id: "10001", name: "Ramesh Patil", contact: "9867-112233", location: "Ratnagiri, Konkan", requests: 8, status: "Active" },
//   { id: "10002", name: "Sunita Deshmukh", contact: "sunita.d@mail.com", location: "Chiplun, Konkan", requests: 5, status: "Active" },
//   { id: "10003", name: "Mahesh Sawant", contact: "9850-445566", location: "Sindhudurg, Konkan", requests: 3, status: "Active" },
//   { id: "10004", name: "Aarti Jadhav", contact: "aarti.j@mail.com", location: "Dapoli, Konkan", requests: 2, status: "Blocked" },
//   { id: "10005", name: "Vijay Pawar", contact: "9876-778899", location: "Kudal, Konkan", requests: 10, status: "Active" },
// ];

// export default function UsersPage() {
//   const [users] = useState<User[]>(initialUsers);
//   const [openMenuId, setOpenMenuId] = useState<string | null>(null);
//   const router = useRouter();

//   // Close menu when clicking outside
//   useEffect(() => {
//     const handleDocClick = (e: MouseEvent) => {
//       if (!openMenuId) return;
//       const target = e.target as Node | null;
//       if (!target) return;
//       const card = document.querySelector<HTMLElement>(
//         `[data-user-card-id="${openMenuId}"]`
//       );
//       if (card && card.contains(target)) return;
//       setOpenMenuId(null);
//     };

//     document.addEventListener("click", handleDocClick);
//     return () => document.removeEventListener("click", handleDocClick);
//   }, [openMenuId]);

//   const toggleMenu = (id: string) => {
//     setOpenMenuId((prev) => (prev === id ? null : id));
//   };

//   const navigateTo = (userId: string, action: string) => {
//     router.push(`/users/actions/${action}?id=${userId}`);
//   };

//   return (
//     <div className="min-h-screen bg-[#EBF8FF] font-['Manrope','Noto Sans',sans-serif]">
//       {/* Header */}
//       <Header />

//       {/* White Users strip */}
//       <div className="py-3 mx-4 mt-6 bg-white border rounded-lg shadow-sm sm:mx-8">
//         <h1 className="text-2xl font-semibold text-center">Users</h1>
//       </div>

//       {/* User Cards */}
//       <div className="p-6 sm:px-8">
//         <div className="flex flex-col gap-4">
//           {users.map((user) => (
//             <div
//               key={user.id}
//               data-user-card-id={user.id}
//               className="relative flex flex-col justify-between p-4 bg-white shadow-sm sm:flex-row sm:items-center rounded-xl"
//             >
//               {/* User Info */}
//               <div className="pr-4">
//                 <p className="font-serif text-lg text-black">{user.name}</p>
//                 <p className="text-sm text-black">
//                   <span className="font-medium">ID:</span> {user.id} &nbsp; | &nbsp;
//                   <span className="font-medium">Contact:</span> {user.contact}
//                 </p>
//                 <p className="text-sm text-black">
//                   <span className="font-medium">Location:</span> {user.location}
//                 </p>
//                 <p className="text-sm text-black">
//                   <span className="font-medium">Requests:</span> {user.requests}
//                 </p>
//               </div>

//               {/* Status + 3 dots */}
//               <div className="flex items-center gap-3 mt-3 sm:mt-0">
//                 <span
//                   className={`px-3 py-1 text-xs font-medium rounded-full ${
//                     user.status === "Active"
//                       ? "bg-green-100 text-green-700"
//                       : "bg-red-100 text-red-700"
//                   }`}
//                 >
//                   {user.status}
//                 </span>

//                 {/* 3 Dots Button */}
//                 <button
//                   type="button"
//                   onClick={() => toggleMenu(user.id)}
//                   className="flex items-center justify-center bg-blue-600 rounded-full shadow-sm w-9 h-9 focus:outline-none"
//                 >
//                   <MoreVertical className="w-5 h-5 text-white transition-colors" />
//                 </button>

//                 {/* Dropdown Menu */}
//                 {openMenuId === user.id && (
//                   <div className="absolute z-50 w-48 mt-2 overflow-hidden bg-white border shadow-lg right-4 top-full rounded-xl">
//                     <button
//                       className="w-full px-4 py-2 text-sm text-left hover:bg-blue-100"
//                       onClick={() => navigateTo(user.id, "ViewDetails")}
//                     >
//                       Details
//                     </button>

//                     <button
//                       className="w-full px-4 py-2 text-sm text-left hover:bg-blue-100"
//                       onClick={() => navigateTo(user.id, "ViewRequests")}
//                     >
//                       Requests
//                     </button>

//                     <button
//                       className="w-full px-4 py-2 text-sm text-left hover:bg-blue-100"
//                       onClick={() => navigateTo(user.id, "BlockUnblock")}
//                     >
//                       Block User
//                     </button>

//                     <button
//                       className="w-full px-4 py-2 text-sm text-left hover:bg-blue-100"
//                       onClick={() => navigateTo(user.id, "DeleteUser")}
//                     >
//                       Delete User
//                     </button>
//                   </div>
//                 )}
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Fade animation for dropdown */}
//       <style jsx>{`
//         @keyframes menuFadeIn {
//           from {
//             opacity: 0;
//             transform: translateY(-4px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }
//         [class*="absolute"][class*="right-4"] {
//           animation: menuFadeIn 0.15s ease-out;
//         }
//       `}</style>
//     </div>
//   );
// }



// "use client";

// import React, { useEffect, useState } from "react";
// import { MoreVertical } from "lucide-react";
// import Header from "@/components/Header";
// import { useRouter } from "next/navigation";

// type User = {
//   id: string;
//   name: string;
//   contact: string;
//   location: string;
//   requests: number;
//   status: "Active" | "Blocked";
// };

// const initialUsers: User[] = [
//   { id: "10001", name: "Ramesh Patil", contact: "9867-112233", location: "Ratnagiri, Konkan", requests: 8, status: "Active" },
//   { id: "10002", name: "Sunita Deshmukh", contact: "sunita.d@mail.com", location: "Chiplun, Konkan", requests: 5, status: "Active" },
//   { id: "10003", name: "Mahesh Sawant", contact: "9850-445566", location: "Sindhudurg, Konkan", requests: 3, status: "Active" },
//   { id: "10004", name: "Aarti Jadhav", contact: "aarti.j@mail.com", location: "Dapoli, Konkan", requests: 2, status: "Blocked" },
//   { id: "10005", name: "Vijay Pawar", contact: "9876-778899", location: "Kudal, Konkan", requests: 10, status: "Active" },
// ];

// export default function UsersPage() {
//   const [users] = useState<User[]>(initialUsers);
//   const [openMenuId, setOpenMenuId] = useState<string | null>(null);
//   const router = useRouter();

//   // Close menu when clicking outside
//   useEffect(() => {
//     const handleDocClick = (e: MouseEvent) => {
//       if (!openMenuId) return;
//       const target = e.target as Node | null;
//       if (!target) return;
//       const card = document.querySelector<HTMLElement>(
//         `[data-user-card-id="${openMenuId}"]`
//       );
//       if (card && card.contains(target)) return;
//       setOpenMenuId(null);
//     };

//     document.addEventListener("click", handleDocClick);
//     return () => document.removeEventListener("click", handleDocClick);
//   }, [openMenuId]);

//   const toggleMenu = (id: string) => {
//     setOpenMenuId((prev) => (prev === id ? null : id));
//   };

//   const navigateTo = (userId: string, action: string) => {
//     router.push(`/users/actions/${action}?id=${userId}`);
//   };

//   return (
//     <div className="min-h-screen bg-[#EBF8FF] font-['Manrope','Noto Sans',sans-serif]">
//       {/* Header */}
//       <Header />

//       {/* White Users strip */}
//       <div className="py-3 mx-4 mt-6 bg-white border rounded-lg shadow-sm sm:mx-8">
//         <h1 className="text-2xl font-semibold text-center">Users</h1>
//       </div>

//       {/* User Cards */}
//       <div className="p-6 sm:px-8">
//         <div className="flex flex-col gap-4">
//           {users.map((user) => (
//             <div
//               key={user.id}
//               data-user-card-id={user.id}
//               className="relative flex flex-col justify-between p-4 bg-white shadow-sm sm:flex-row sm:items-center rounded-xl"
//             >
//               {/* User Info */}
//               <div className="pr-4">
//                 <p className="font-serif text-lg text-black">{user.name}</p>
//                 <p className="text-sm text-black">
//                   <span className="font-medium">ID:</span> {user.id} &nbsp; | &nbsp;
//                   <span className="font-medium">Contact:</span> {user.contact}
//                 </p>
//                 <p className="text-sm text-black">
//                   <span className="font-medium">Location:</span> {user.location}
//                 </p>
//                 <p className="text-sm text-black">
//                   <span className="font-medium">Requests:</span> {user.requests}
//                 </p>
//               </div>

//               {/* Status + 3 dots */}
//               <div className="flex items-center gap-3 mt-3 sm:mt-0">
//                 <span
//                   className={`px-3 py-1 text-xs font-medium rounded-full ${
//                     user.status === "Active"
//                       ? "bg-green-100 text-green-700"
//                       : "bg-red-100 text-red-700"
//                   }`}
//                 >
//                   {user.status}
//                 </span>

//                 {/* 3 Dots Button */}
//                 <button
//                   type="button"
//                   onClick={() => toggleMenu(user.id)}
//                   className="flex items-center justify-center bg-blue-600 rounded-full shadow-sm w-9 h-9 focus:outline-none"
//                 >
//                   <MoreVertical className="w-5 h-5 text-white transition-colors" />
//                 </button>

//                 {/* Dropdown Menu */}
//                 {openMenuId === user.id && (
//                   <div className="absolute z-50 w-48 mt-2 overflow-hidden bg-white border shadow-lg right-4 top-full rounded-xl">
//                     <button
//                       className="w-full px-4 py-2 text-sm text-left hover:bg-blue-100"
//                       onClick={() => navigateTo(user.id, "ViewDetails")}
//                     >
//                       Details
//                     </button>

//                     <button
//                       className="w-full px-4 py-2 text-sm text-left hover:bg-blue-100"
//                       onClick={() => navigateTo(user.id, "ViewRequests")}
//                     >
//                       Requests
//                     </button>

//                     <button
//                       className="w-full px-4 py-2 text-sm text-left hover:bg-blue-100"
//                       onClick={() => navigateTo(user.id, "BlockUnblock")}
//                     >
//                       Block User
//                     </button>

//                     <button
//                       className="w-full px-4 py-2 text-sm text-left hover:bg-blue-100"
//                       onClick={() => navigateTo(user.id, "DeleteUser")}
//                     >
//                       Delete User
//                     </button>
//                   </div>
//                 )}
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Fade animation for dropdown */}
//       <style jsx>{`
//         @keyframes menuFadeIn {
//           from {
//             opacity: 0;
//             transform: translateY(-4px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }
//         [class*="absolute"][class*="right-4"] {
//           animation: menuFadeIn 0.15s ease-out;
//         }
//       `}</style>
//     </div>
//   );
// }




"use client";

import React, { useEffect, useState } from "react";
import { MoreVertical } from "lucide-react";
import { useRouter } from "next/navigation";
import { User } from "./types";
import Header from "@/components/Header";
import BottomNav from "@/components/admin/BottomNav";

const initialUsers: User[] = [
  { id: "10001", name: "Ramesh Patil", contact: "9867-112233", location: "Ratnagiri, Konkan", requests: 8, status: "Active" },
  { id: "10002", name: "Sunita Deshmukh", contact: "sunita.d@mail.com", location: "Chiplun, Konkan", requests: 5, status: "Active" },
  { id: "10003", name: "Mahesh Sawant", contact: "9850-445566", location: "Sindhudurg, Konkan", requests: 3, status: "Active" },
  { id: "10004", name: "Aarti Jadhav", contact: "aarti.j@mail.com", location: "Dapoli, Konkan", requests: 2, status: "Blocked" },
  { id: "10005", name: "Vijay Pawar", contact: "9876-778899", location: "Kudal, Konkan", requests: 10, status: "Active" },
];

export default function UsersPage() {
  const [users] = useState<User[]>(initialUsers);
  const [openMenuId, setOpenMenuId] = useState<string | null>(null);
  const router = useRouter();

  // Close menu when clicking outside
  useEffect(() => {
    const handleDocClick = (e: MouseEvent) => {
      if (!openMenuId) return;
      const target = e.target as Node | null;
      if (!target) return;
      const card = document.querySelector<HTMLElement>(`[data-user-card-id="${openMenuId}"]`);
      if (card && card.contains(target)) return;
      setOpenMenuId(null);
    };

    document.addEventListener("click", handleDocClick);
    return () => document.removeEventListener("click", handleDocClick);
  }, [openMenuId]);

  const toggleMenu = (id: string) => {
    setOpenMenuId((prev) => (prev === id ? null : id));
  };

  const goToAction = (action: string, id: string) => {
    router.push(`/admin/users/actions/${action}?id=${id}`);
    setOpenMenuId(null);
  };

  return (
    <div className="min-h-screen bg-[#EBF8FF] font-['Manrope','Noto Sans',sans-serif]">
      <Header />

      <div className="py-3 mx-4 mt-6 bg-white border rounded-lg shadow-sm sm:mx-8">
        <h1 className="text-2xl font-semibold text-center">Users</h1>
      </div>

      <div className="p-6 sm:px-8">
        <div className="flex flex-col gap-4">
          {users.map((user) => (
            <div
              key={user.id}
              data-user-card-id={user.id}
              className="relative flex flex-col justify-between p-4 bg-white shadow-sm sm:flex-row sm:items-center rounded-xl group"
            >
              <div className="pr-4">
                <p className="font-serif text-lg text-black">{user.name}</p>
                <p className="text-sm text-black">
                  <span className="font-medium">ID:</span> {user.id} &nbsp; | &nbsp;
                  <span className="font-medium">Contact:</span> {user.contact}
                </p>
                <p className="text-sm text-black">
                  <span className="font-medium">Location:</span> {user.location}
                </p>
                <p className="text-sm text-black">
                  <span className="font-medium">Requests:</span> {user.requests}
                </p>
              </div>

              <div className="flex items-center gap-3 mt-3 sm:mt-0">
                <span
                  className={`px-3 py-1 text-xs font-medium rounded-full ${
                    user.status === "Active"
                      ? "bg-green-100 text-green-700"
                      : "bg-red-100 text-red-700"
                  }`}
                >
                  {user.status}
                </span>

                <button
                  type="button"
                  onClick={() => toggleMenu(user.id)}
                  className="flex items-center justify-center bg-blue-600 rounded-full shadow-sm w-9 h-9 focus:outline-none"
                >
                  <MoreVertical className="w-5 h-5 text-white transition-colors" />
                </button>

                {openMenuId === user.id && (
                  <div className="absolute z-50 w-48 mt-2 overflow-hidden bg-white border shadow-lg right-4 top-full rounded-xl">
                    <button
                      className="w-full px-4 py-2 text-sm text-left hover:bg-blue-100"
                      onClick={() => goToAction("ViewDetails", user.id)}
                    >
                      Details
                    </button>
                    <button
                      className="w-full px-4 py-2 text-sm text-left hover:bg-blue-100"
                      onClick={() => goToAction("ViewRequests", user.id)}
                    >
                      Requests
                    </button>
                    <button
                      className="w-full px-4 py-2 text-sm text-left hover:bg-blue-100"
                      onClick={() => goToAction("BlockUnblock", user.id)}
                    >
                      Block User
                    </button>
                    <button
                      className="w-full px-4 py-2 text-sm text-left hover:bg-blue-100"
                      onClick={() => goToAction("DeleteUser", user.id)}
                    >
                      Delete User
                    </button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      <BottomNav/>
    </div>
  );
}
