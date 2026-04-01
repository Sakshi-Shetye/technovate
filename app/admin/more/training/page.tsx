// // adminuser/page.tsx
// "use client";

// import BottomNav from "@/components/admin/BottomNav";
// import React from "react";

// type Applicant = {
//   id: number;
//   name: string;
//   skill: string;
//   contact: string;
//   trainingStatus: "Pending" | "Ongoing" | "Completed";
// };

// const applicants: Applicant[] = [
//   { id: 1, name: "Ethan Harper", skill: "Web Development", contact: "+1-555-123-4567", trainingStatus: "Ongoing" },
//   { id: 2, name: "Olivia Bennett", skill: "Graphic Design", contact: "+1-555-987-6543", trainingStatus: "Pending" },
//   { id: 3, name: "Noah Carter", skill: "Digital Marketing", contact: "+1-555-246-8013", trainingStatus: "Completed" },
//   { id: 4, name: "Ava Thompson", skill: "Mobile App Development", contact: "+1-555-369-1470", trainingStatus: "Ongoing" },
//   { id: 5, name: "Liam Foster", skill: "Data Analysis", contact: "+1-555-789-0123", trainingStatus: "Pending" },
// ];

// export default function EmploymentTrainingPage() {
//   return (
//     <div className="flex flex-col min-h-screen bg-gray-100">
//       {/* Header */}
//       <header className="flex items-center justify-between p-4 bg-white shadow-md">
//         <button className="text-gray-800">
//           <span className="text-3xl material-symbols-outlined">menu</span>
//         </button>
//         <h1 className="text-xl font-bold text-gray-800">Employment & Training</h1>
//         <div className="w-8" />
//       </header>

//       {/* Tabs */}
//       <div className="bg-white border-b border-gray-300">
//         <div className="flex">
//           <a className="flex-1 py-4 font-bold text-center text-gray-900 border-b-4 border-blue-500" href="#">
//             Applicants
//           </a>
//           <a className="flex-1 py-4 font-bold text-center text-gray-600 border-b-4 border-transparent" href="#">
//             Approved Trainees
//           </a>
//         </div>
//       </div>

//       {/* Main content */}
//       <main className="flex-1 p-4 space-y-4">
//         {applicants.map((applicant) => (
//           <div key={applicant.id} className="flex flex-col items-start justify-between gap-4 p-4 bg-white border border-gray-300 rounded-lg shadow-md md:flex-row md:items-center">
//             <div>
//               <p className="text-base font-bold text-gray-900">{applicant.name}</p>
//               <p className="text-sm text-gray-700">Skill: {applicant.skill}</p>
//               <p className="text-sm text-gray-700">Contact: {applicant.contact}</p>
//             </div>
//             <div className="mt-2 md:mt-0">
//               <p
//                 className={`text-sm font-semibold px-3 py-1 rounded-full ${
//                   applicant.trainingStatus === "Completed"
//                     ? "bg-green-100 text-green-700"
//                     : applicant.trainingStatus === "Ongoing"
//                     ? "bg-yellow-100 text-yellow-700"
//                     : "bg-gray-100 text-gray-700"
//                 }`}
//               >
//                 {applicant.trainingStatus}
//               </p>
//             </div>
//           </div>
//         ))}
//       </main>

//       {/* Footer navigation */}
//       <footer className="sticky bottom-0 bg-white border-t border-gray-300">
//         {/* <nav className="flex justify-around py-2">
//           <a className="flex flex-col items-center gap-1 text-gray-600" href="#">
//             <span className="material-symbols-outlined">dashboard</span>
//             <p className="text-xs font-medium">Dashboard</p>
//           </a>
//           <a className="flex flex-col items-center gap-1 text-gray-600" href="#">
//             <span className="material-symbols-outlined">group</span>
//             <p className="text-xs font-medium">Users</p>
//           </a>
//           <a className="flex flex-col items-center gap-1 text-gray-600" href="#">
//             <span className="material-symbols-outlined">supervised_user_circle</span>
//             <p className="text-xs font-medium">Providers</p>
//           </a>
//           <a className="flex flex-col items-center gap-1 text-gray-600" href="#">
//             <span className="material-symbols-outlined">list_alt</span>
//             <p className="text-xs font-medium">Requests</p>
//           </a>
//           <a className="flex flex-col items-center gap-1 text-blue-600" href="#">
//             <span className="material-symbols-outlined">apps</span>
//             <p className="text-xs font-medium">More</p>
//           </a>
//         </nav> */}
//         <BottomNav/>
//       </footer>
//     </div>
//   );
// }


// app/admin/user/page.tsx
"use client";

import BottomNav from "@/components/admin/BottomNav";
import Header from "@/components/Header";
import React from "react";

type Applicant = {
  id: number;
  name: string;
  skill: string;
  contact: string;
  trainingStatus: "Pending" | "Ongoing" | "Completed";
  area: string;
};

const applicants: Applicant[] = [
  { id: 1, name: "Ramesh Patil", skill: "Web Development", contact: "+91-98500-12345", trainingStatus: "Ongoing", area: "Ratnagiri" },
  { id: 2, name: "Sunita Deshmukh", skill: "Graphic Design", contact: "+91-97652-98765", trainingStatus: "Pending", area: "Chiplun" },
  { id: 3, name: "Mahesh Sawant", skill: "Digital Marketing", contact: "+91-98234-24680", trainingStatus: "Completed", area: "Kudal" },
  { id: 4, name: "Aarti Jadhav", skill: "Mobile App Development", contact: "+91-98877-36914", trainingStatus: "Ongoing", area: "Dapoli" },
  { id: 5, name: "Laxman Naik", skill: "Data Analysis", contact: "+91-97678-78901", trainingStatus: "Pending", area: "Sawantwadi" },
];

export default function EmploymentTrainingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#EAF4FB] font-manrope">
      {/* Header */}
      <Header/>
      <header className="flex items-center justify-center p-4 bg-[#EAF4FB] shadow-sm">
        <h1 className="text-xl sm:text-2xl font-bold text-[#0D141C]">
          Employment & Training
        </h1>
      </header>

      {/* Tabs */}
      <div className="bg-[#EAF4FB] border-b border-gray-300">
        <div className="flex">
          <a className="flex-1 py-3 text-center font-semibold text-white bg-[#2A6293] rounded-t-lg">
            Applicants
          </a>
          <a className="flex-1 py-3 text-center font-semibold text-[#2A6293] bg-[#B0DDF7] rounded-t-lg">
            Approved Trainees
          </a>
        </div>
      </div>

      {/* Main content */}
      <main className="flex-1 p-4 space-y-4">
        {applicants.map((applicant) => (
          <div
            key={applicant.id}
            className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 p-4 bg-white rounded-lg shadow-sm transition duration-200 hover:bg-[#2A6293] hover:text-white"
          >
            <div>
              <p className="text-base font-bold">{applicant.name}</p>
              <p className="text-sm opacity-90">Skill: {applicant.skill}</p>
              <p className="text-sm opacity-90">Contact: {applicant.contact}</p>
              <p className="text-sm opacity-90">Area: {applicant.area}</p>
            </div>
            <div className="mt-2 md:mt-0">
              <p
                className={`text-sm font-semibold px-3 py-1 rounded-full transition duration-200
                  ${
                    applicant.trainingStatus === "Completed"
                      ? "bg-green-100 text-green-700 hover:bg-green-700 hover:text-white"
                      : applicant.trainingStatus === "Ongoing"
                      ? "bg-yellow-100 text-yellow-700 hover:bg-yellow-700 hover:text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-700 hover:text-white"
                  }`}
              >
                {applicant.trainingStatus}
              </p>
            </div>
          </div>
        ))}
      </main>

      {/* Footer navigation */}
      <footer className="sticky bottom-0 bg-[#EAF4FB] border-t border-gray-300">
        <BottomNav />
      </footer>
    </div>
  );
}
