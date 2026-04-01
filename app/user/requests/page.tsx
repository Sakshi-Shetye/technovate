// "use client";

// import { useState } from "react";
// import { CheckCircle, Loader2, User } from "lucide-react";
// import BottomNav from "@/components/BottomNav";
// import Header from "@/components/Header";
// export default function RequestsPage() {
//   const [status] = useState([
//     { step: "Request Received", done: true },
//     { step: "Provider Assigned", done: true },
//     { step: "On The Way", done: false },
//     { step: "Work Completed", done: false },
//   ]);

//   return (
//     <div className="flex flex-col min-h-screen bg-gray-50">
//       {/* Header */}
//           <Header />
//       <header className="p-4 text-lg font-semibold text-center text-black shadow bg-white-600">
//         My Requests
//       </header>

//       {/* Request Status */}
//       <main className="flex-1 p-4">
//         <div className="p-6 space-y-6 bg-white shadow rounded-2xl">
//           <h2 className="text-xl font-semibold text-center text-gray-800">
//             Current Request Status
//           </h2>

//           <div className="space-y-6">
//             {status.map((s, idx) => (
//               <div
//                 key={idx}
//                 className="flex items-center pb-3 space-x-4 border-b last:border-0"
//               >
//                 {s.done ? (
//                   <CheckCircle className="w-6 h-6 text-green-500" />
//                 ) : (
//                   <Loader2 className="w-6 h-6 text-gray-400 animate-spin" />
//                 )}
//                 <span
//                   className={`text-base ${
//                     s.done ? "text-green-600 font-medium" : "text-gray-500"
//                   }`}
//                 >
//                   {s.step}
//                 </span>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Provider Card */}
//         <div className="flex items-center p-5 mt-6 space-x-4 bg-white shadow rounded-2xl">
//           <User className="w-10 h-10 text-blue-500" />
//           <div>
//             <p className="font-semibold text-gray-800">Provider Assigned</p>
//             <p className="text-sm text-gray-500">Rahul Sharma • Mechanic</p>
//             <p className="text-sm text-gray-400">ETA: 15 minutes</p>
//           </div>
//         </div>
//       </main>

//       {/* Bottom Navigation */}
//       <nav className="flex justify-around p-2 bg-white border-t shadow-inner">
//         <a href="/user" className="flex flex-col items-center text-sm text-gray-600">
//           Home
//         </a>
//         <a href="/user/requests" className="flex flex-col items-center text-sm font-semibold text-blue-600">
//           Requests
//         </a>
//         <a href="/user/track" className="flex flex-col items-center text-sm text-gray-600">
//           Track
//         </a>
//         <a href="/user/history" className="flex flex-col items-center text-sm text-gray-600">
//           History
//         </a>
//         <a href="/user/feedback" className="flex flex-col items-center text-sm text-gray-600">
//           Feedback
//         </a>
//       </nav>
//        <BottomNav />
//     </div>
//   );
// }


// // "use client";

// // import { useState, useEffect } from "react";
// // import { CheckCircle, Loader2 } from "lucide-react";
// // import { db, auth } from "@/lib/firebaseConfig"; 
// // import { collection, doc, query, where, onSnapshot } from "firebase/firestore";
// // import BottomNav from "@/components/BottomNav";
// // import Header from "@/components/Header";

// // export default function RequestsPage() {
// //   const [requests, setRequests] = useState<any[]>([]);
// //   const user = auth.currentUser;

// //   useEffect(() => {
// //     if (!user) return;

// //     // Listen to "requestStatus" collection for this user
// //     const q = query(
// //       collection(db, "requestStatus"),
// //       where("uid", "==", user.uid)
// //     );

// //     const unsubscribe = onSnapshot(q, (querySnapshot) => {
// //       const data = querySnapshot.docs.map(doc => ({
// //         id: doc.id,
// //         ...doc.data()
// //       }));
// //       setRequests(data);
// //     });

// //     return () => unsubscribe();
// //   }, [user]);

// //   if (!user) return <div>Please login to see your requests.</div>;
// //   if (requests.length === 0) return <div>Loading requests...</div>;

// //   return (
// //     <div className="flex flex-col min-h-screen bg-gray-50">
// //       <Header />
// //       <header className="p-4 text-lg font-semibold text-center text-black bg-white shadow">
// //         My Requests
// //       </header>

// //       <main className="flex-1 p-4 space-y-6">
// //         {requests.map((request) => (
// //           <div key={request.id} className="p-6 bg-white shadow rounded-2xl">
// //             <h2 className="mb-4 text-xl font-semibold text-center text-gray-800">
// //               Request ID: {request.id}
// //             </h2>
// //             <div className="space-y-4">
// //               {request.status.map((s: any, idx: number) => (
// //                 <div
// //                   key={idx}
// //                   className="flex items-center pb-2 space-x-4 border-b last:border-0"
// //                 >
// //                   {s.done ? (
// //                     <CheckCircle className="w-6 h-6 text-green-500" />
// //                   ) : (
// //                     <Loader2 className="w-6 h-6 text-gray-400 animate-spin" />
// //                   )}
// //                   <span
// //                     className={`text-base ${
// //                       s.done ? "text-green-600 font-medium" : "text-gray-500"
// //                     }`}
// //                   >
// //                     {s.step}
// //                   </span>
// //                 </div>
// //               ))}
// //             </div>
// //           </div>
// //         ))}
// //       </main>

// //       <BottomNav />
// //     </div>
// //   );
// // }

"use client";

import React, { useEffect, useState } from "react";
import { db } from "@/lib/firebaseConfig";
import Header from "@/components/Header";
import BottomNav from "@/components/BottomNav";
import { collection, onSnapshot, query, orderBy, Timestamp } from "firebase/firestore";

interface Request {
  id: string;
  issueType: string[];
  serviceType?: string;
  location: string | { lat: number; lng: number } | null;
  status: "Pending" | "Accepted" | "Completed";
  price?: number;
  createdAt: Timestamp;
  providerEmail?: string;
  providerPhone?: string;
  providerName?: string;
}

const UserRequestsPage: React.FC = () => {
  const [requests, setRequests] = useState<Request[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const requestsQuery = query(
      collection(db, "requests"),
      orderBy("createdAt", "desc")
    );

  
    const unsub = onSnapshot(
      requestsQuery,
      (snapshot) => {
        const requestsData = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...(doc.data() as Omit<Request, "id">),
        }));
        setRequests(requestsData);
        setLoading(false);
      },
      (error) => {
        console.error("Error fetching requests:", error);
        setLoading(false);
      }
    );

    return () => unsub();
  }, []);

  const formatTimestamp = (timestamp: Timestamp) => {
    const date = timestamp.toDate();
    return date.toLocaleString();
  };

  

  if (loading) {
    return <p className="mt-10 text-center">Loading requests...</p>;
  }

  if (requests.length === 0) {
    return <p className="mt-10 text-center">No requests found.</p>;
  }

  return (
    <div className="max-w-4xl p-6 mx-auto">
       <div className="fixed top-0 left-0 right-0 z-50">
  <Header />
</div>
      <h1 className="mb-8 text-2xl font-bold text-center">My Service Requests</h1>

      <div className="space-y-6">
        {requests.map((req) => (
          <div
            key={req.id}
            className="p-5 transition bg-white border shadow-sm rounded-xl hover:shadow-md"
          >
            {/* Service (Title) */}
            <h2 className="text-lg font-semibold text-gray-800">
              {Array.isArray(req.issueType)
                ? req.issueType.join(", ")
                : req.issueType}
            </h2>

            <div className="mt-3 space-y-2 text-sm text-gray-700">
              {/* Location */}
              <p>
                <span className="font-medium text-gray-600">Location:</span>{" "}
                {typeof req.location === "string"
                  ? req.location
                  : req.location
                  ? `${req.location.lat.toFixed(5)}, ${req.location.lng.toFixed(5)}`
                  : "Not specified"}
              </p>

              {/* Price */}
              {req.price && (
                <p>
                  <span className="font-medium text-gray-600">Price:</span> ₹{req.price}
                </p>
              )}

              {/* Status */}
              <p>
                <span className="font-medium text-gray-600">Status:</span>{" "}
                <span
                  className={`px-2 py-0.5 rounded-full text-xs font-semibold ${
                    req.status === "Pending"
                      ? "bg-yellow-100 text-yellow-700"
                      : req.status === "Accepted"
                      ? "bg-blue-100 text-blue-700"
                      : "bg-green-100 text-green-700"
                  }`}
                >
                  {req.status}
                </span>
              </p>

              {/* Provider details if accepted */}
              {req.status === "Accepted" && (
                <div className="p-3 mt-2 border rounded-lg bg-gray-50">
                  <p className="font-medium text-gray-800">Provider Details</p>
                  {req.providerName && (
                    <p className="text-sm">👤 {req.providerName}</p>
                  )}
                  {req.providerEmail && (
                    <p className="text-sm">📧 {req.providerEmail}</p>
                  )}
                  {req.providerPhone && (
                    <p className="text-sm">📞 {req.providerPhone}</p>
                  )}
                </div>
              )}

              {/* Created at */}
              <p className="text-xs text-gray-500">
                Created at: {formatTimestamp(req.createdAt)}
              </p>
            </div>
          </div>
        ))}
        <BottomNav/>
      </div>
    </div>
  );
};

export default UserRequestsPage;
