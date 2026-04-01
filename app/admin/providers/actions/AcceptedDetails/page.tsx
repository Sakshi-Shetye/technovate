// "use client";

// import { useState, useEffect } from "react";
// import { useSearchParams } from "next/navigation";
// import Header from "@/components/Header";
// import BottomNav from "@/components/admin/BottomNav";
// import { Star, MapPin, Briefcase, Calendar, ListChecks, FileText } from "lucide-react";

// interface ProviderDetails {
//   id: string;
//   name: string;
//   logo: string;
//   status: "Active" | "Pending" | "Suspended";
//   rating: number;
//   location: string;
//   services: string;
//   joined: string;
//   requests: number;
//   phone: string;
//   email: string;
//   documents: {
//     aadhar: string;
//     pan: string;
//     license: string;
//   };
//   skills: string[];
//   trainings: string[];
// }

// export default function AcceptedDetailsPage() {
//   const searchParams = useSearchParams();
//   const providerId = searchParams.get("id");
//   const [provider, setProvider] = useState<ProviderDetails | null>(null);

//   useEffect(() => {
//     if (providerId) {
//       // Mock data for demo
//       const mockData: ProviderDetails[] = [
//         {
//           id: "MH-001",
//           name: "Konkan Auto Garage",
//           logo: "https://via.placeholder.com/100x100.png?text=KAG",
//           status: "Active",
//           rating: 4.7,
//           location: "Ratnagiri, Maharashtra",
//           services: "Bike & Car Repairs",
//           joined: "2022-03-12",
//           requests: 98,
//           phone: "+91 9876543210",
//           email: "konkan@garage.com",
//           documents: {
//             aadhar: "https://via.placeholder.com/200x100?text=Aadhar",
//             pan: "https://via.placeholder.com/200x100?text=PAN",
//             license: "https://via.placeholder.com/200x100?text=License",
//           },
//           skills: ["Bike Repair", "Car Engine Repair", "Wheel Alignment"],
//           trainings: ["Safety Training 2023", "Advanced Engine Diagnostics"],
//         },
//       ];
//       const found = mockData.find((p) => p.id === providerId);
//       setProvider(found || null);
//     }
//   }, [providerId]);

//   if (!provider) return <div className="p-4">Provider not found.</div>;

//   return (
//     <div className="flex flex-col min-h-screen bg-[#EAF4FB]">
//       <Header />

//       <main className="flex-grow max-w-4xl p-4 pb-24 mx-auto space-y-6">
//         <h1 className="mb-2 text-2xl font-bold">Provider Full Profile</h1>

//         {/* Basic Info Card */}
//         <div className="p-4 space-y-4 bg-white shadow-md rounded-xl">
//           <div className="flex items-center gap-4">
//             <img
//               src={provider.logo}
//               alt={provider.name}
//               className="w-24 h-24 border border-gray-200 rounded-full"
//             />
//             <div>
//               <h2 className="text-xl font-semibold">{provider.name}</h2>
//               <p className="text-gray-500">ID: {provider.id}</p>
//               <p className="text-gray-500">{provider.email} | {provider.phone}</p>
//             </div>
//           </div>

//           <div className="flex items-center gap-4">
//             <span
//               className={`px-2 py-0.5 rounded-md text-xs ${
//                 provider.status === "Active"
//                   ? "bg-green-50 text-green-700"
//                   : provider.status === "Pending"
//                   ? "bg-orange-50 text-orange-700"
//                   : "bg-red-50 text-red-700"
//               }`}
//             >
//               {provider.status}
//             </span>
//             <div className="flex items-center text-sm text-gray-600">
//               <Star size={14} className="mr-1 text-yellow-400" /> {provider.rating}
//             </div>
//           </div>

//           <div className="grid grid-cols-1 gap-3 text-sm text-gray-600 sm:grid-cols-2">
//             <span className="flex items-center gap-1"><MapPin size={14} /> {provider.location}</span>
//             <span className="flex items-center gap-1"><Briefcase size={14} /> {provider.services}</span>
//             <span className="flex items-center gap-1"><Calendar size={14} /> Joined {provider.joined}</span>
//             <span className="flex items-center gap-1"><ListChecks size={14} /> {provider.requests} requests</span>
//           </div>
//         </div>

//         {/* Skills Card */}
//         <div className="p-4 bg-white shadow-md rounded-xl">
//           <h3 className="mb-2 font-semibold">Skills</h3>
//           <div className="flex flex-wrap gap-2">
//             {provider.skills.map((skill) => (
//               <span key={skill} className="px-2 py-1 text-xs text-blue-700 rounded-md bg-blue-50">
//                 {skill}
//               </span>
//             ))}
//           </div>
//         </div>

//         {/* Trainings Card */}
//         <div className="p-4 bg-white shadow-md rounded-xl">
//           <h3 className="mb-2 font-semibold">Trainings & Certifications</h3>
//           <ul className="pl-5 space-y-1 list-disc">
//             {provider.trainings.map((training) => (
//               <li key={training}>{training}</li>
//             ))}
//           </ul>
//         </div>

//         {/* Documents Card */}
//         <div className="p-4 space-y-4 bg-white shadow-md rounded-xl">
//           <h3 className="font-semibold">Documents</h3>
//           <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
//             <div className="flex flex-col items-center gap-2">
//               <img src={provider.documents.aadhar} alt="Aadhar" className="object-cover w-full h-24 border rounded-md" />
//               <span className="text-sm text-gray-600">Aadhar</span>
//             </div>
//             <div className="flex flex-col items-center gap-2">
//               <img src={provider.documents.pan} alt="PAN" className="object-cover w-full h-24 border rounded-md" />
//               <span className="text-sm text-gray-600">PAN</span>
//             </div>
//             <div className="flex flex-col items-center gap-2">
//               <img src={provider.documents.license} alt="License" className="object-cover w-full h-24 border rounded-md" />
//               <span className="text-sm text-gray-600">License</span>
//             </div>
//           </div>
//         </div>
//       </main>

//       <footer className="sticky bottom-0">
//         <BottomNav />
//       </footer>
//     </div>
//   );
// }


"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Header from "@/components/Header";
import BottomNav from "@/components/admin/BottomNav";
import { Star, MapPin, Briefcase, Calendar, ListChecks } from "lucide-react";
import Link from "next/link";

interface ProviderDetails {
  id: string;
  name: string;
  logo: string;
  status: "Active" | "Pending" | "Suspended";
  rating: number;
  location: string;
  services: string;
  joined: string;
  requests: number;
  phone: string;
  email: string;
  documents: { aadhar: string; pan: string; license: string };
  skills: string[];
  trainings: string[];
}

export default function AcceptedDetailsPage() {
  const searchParams = useSearchParams();
  const providerId = searchParams.get("id");
  const [provider, setProvider] = useState<ProviderDetails | null>(null);

  useEffect(() => {
    if (providerId) {
      const mockData: ProviderDetails[] = [
        {
          id: "MH-001",
          name: "Konkan Auto Garage",
          logo: "https://via.placeholder.com/100x100.png?text=KAG",
          status: "Active",
          rating: 4.7,
          location: "Ratnagiri, Maharashtra",
          services: "Bike & Car Repairs",
          joined: "2022-03-12",
          requests: 98,
          phone: "+91 9876543210",
          email: "konkan@garage.com",
          documents: { aadhar: "https://via.placeholder.com/200x100?text=Aadhar", pan: "https://via.placeholder.com/200x100?text=PAN", license: "https://via.placeholder.com/200x100?text=License" },
          skills: ["Bike Repair", "Car Engine Repair", "Wheel Alignment"],
          trainings: ["Safety Training 2023", "Advanced Engine Diagnostics"],
        },
      ];
      const found = mockData.find((p) => p.id === providerId);
      setProvider(found || null);
    }
  }, [providerId]);

  if (!provider) return <div className="p-4">Provider not found.</div>;

  return (
    <div className="flex flex-col min-h-screen bg-[#EAF4FB]">
      <Header />
      <main className="flex-grow max-w-4xl p-4 pb-24 mx-auto space-y-6">
        <h1 className="mb-2 text-2xl font-bold">Provider Full Profile</h1>

        {/* Basic Info Card */}
        <div className="p-4 space-y-4 bg-white shadow-md rounded-xl">
          <div className="flex items-center gap-4">
            <img src={provider.logo} alt={provider.name} className="w-24 h-24 border border-gray-200 rounded-full" />
            <div>
              <h2 className="text-xl font-semibold">{provider.name}</h2>
              <p className="text-gray-500">ID: {provider.id}</p>
              <p className="text-gray-500">{provider.email} | {provider.phone}</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <span className={`px-2 py-0.5 rounded-md text-xs ${provider.status === "Active" ? "bg-green-50 text-green-700" : provider.status === "Pending" ? "bg-orange-50 text-orange-700" : "bg-red-50 text-red-700"}`}>{provider.status}</span>
            <div className="flex items-center text-sm text-gray-600">
              <Star size={14} className="mr-1 text-yellow-400" /> {provider.rating}
            </div>
          </div>

          <div className="grid grid-cols-1 gap-3 text-sm text-gray-600 sm:grid-cols-2">
            <span className="flex items-center gap-1"><MapPin size={14} /> {provider.location}</span>
            <span className="flex items-center gap-1"><Briefcase size={14} /> {provider.services}</span>
            <span className="flex items-center gap-1"><Calendar size={14} /> Joined {provider.joined}</span>
            <span className="flex items-center gap-1"><ListChecks size={14} /> {provider.requests} requests</span>
          </div>
        </div>

        {/* Skills Card */}
        <div className="p-4 bg-white shadow-md rounded-xl">
          <h3 className="mb-2 font-semibold">Skills</h3>
          <div className="flex flex-wrap gap-2">
            {provider.skills.map((skill) => <span key={skill} className="px-2 py-1 text-xs text-blue-700 rounded-md bg-blue-50">{skill}</span>)}
          </div>
        </div>

        {/* Trainings Card */}
        <div className="p-4 bg-white shadow-md rounded-xl">
          <h3 className="mb-2 font-semibold">Trainings & Certifications</h3>
          <ul className="pl-5 space-y-1 list-disc">
            {provider.trainings.map((t) => <li key={t}>{t}</li>)}
          </ul>
        </div>

        {/* Documents Card */}
        <div className="p-4 space-y-4 bg-white shadow-md rounded-xl">
          <h3 className="font-semibold">Documents</h3>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            <div className="flex flex-col items-center gap-2">
              <img src={provider.documents.aadhar} alt="Aadhar" className="object-cover w-full h-24 border rounded-md" />
              <span className="text-sm text-gray-600">Aadhar</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <img src={provider.documents.pan} alt="PAN" className="object-cover w-full h-24 border rounded-md" />
              <span className="text-sm text-gray-600">PAN</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <img src={provider.documents.license} alt="License" className="object-cover w-full h-24 border rounded-md" />
              <span className="text-sm text-gray-600">License</span>
            </div>
          </div>
        </div>

        {/* View Performance Button */}
        <div className="flex justify-end mt-4">
          <Link href={`/admin/providers/actions/PerformancePage?id=${provider.id}`} className="px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700">View Performance</Link>
        </div>
      </main>

      <footer className="sticky bottom-0">
        <BottomNav />
      </footer>
    </div>
  );
}
