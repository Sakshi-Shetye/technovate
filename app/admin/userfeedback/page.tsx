"use client";

import React, { useState } from "react";
import Header from "@/components/Header";
import BottomNav from "@/components/admin/BottomNav";

interface Feedback {
  id: string;
  serviceRating: number;
  serviceQuality: string;
  appExperience: string;
  easeOfUse: string;
  suggestions?: string;
  createdAt?: string;
}

export default function UserFeedbackPage() {
  // Sample static feedback data
  const [feedbacks] = useState<Feedback[]>([
    {
      id: "1",
      serviceRating: 5,
      serviceQuality: "Excellent service with prompt response",
      appExperience: "Smooth and intuitive",
      easeOfUse: "Very easy to navigate",
      suggestions: "Add dark mode",
      createdAt: "2025-09-19 10:30 AM",
    },
    {
      id: "2",
      serviceRating: 4,
      serviceQuality: "Good quality service",
      appExperience: "App works well",
      easeOfUse: "Simple interface",
      createdAt: "2025-09-18 02:15 PM",
    },
    {
      id: "3",
      serviceRating: 3,
      serviceQuality: "Average service",
      appExperience: "Some bugs encountered",
      easeOfUse: "Could be easier",
      suggestions: "Improve loading speed",
      createdAt: "2025-09-17 11:45 AM",
    },
  ]);

  return (
    <div className="flex flex-col min-h-screen bg-[#F3F6FA] font-['Manrope','Noto Sans',sans-serif]">
      {/* Admin Header */}
      <Header />

      {/* Main Content */}
      <main className="flex-grow p-6">
        <h1 className="flex items-center gap-2 mb-6 text-3xl font-bold text-blue-700">
          📊 User Feedback
        </h1>

        {feedbacks.length === 0 ? (
          <p className="text-lg text-center text-gray-600">
            No feedback submitted yet.
          </p>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {feedbacks.map((fb) => (
              <div
                key={fb.id}
                className="p-6 transition-all duration-300 bg-white border border-gray-100 shadow-md rounded-2xl hover:shadow-xl"
              >
                <h2 className="mb-3 text-lg font-semibold text-blue-800">
                  ⭐ {fb.serviceRating}/5
                </h2>
                <div className="space-y-1 text-sm text-gray-700">
                  <p>
                    <span className="font-medium text-gray-800">
                      Service Quality:
                    </span>{" "}
                    {fb.serviceQuality}
                  </p>
                  <p>
                    <span className="font-medium text-gray-800">
                      App Experience:
                    </span>{" "}
                    {fb.appExperience}
                  </p>
                  <p>
                    <span className="font-medium text-gray-800">
                      Ease of Use:
                    </span>{" "}
                    {fb.easeOfUse}
                  </p>
                  {fb.suggestions && (
                    <p className="p-2 mt-2 italic text-gray-600 border border-blue-100 rounded-lg bg-blue-50">
                      “{fb.suggestions}”
                    </p>
                  )}
                </div>
                <p className="mt-3 text-xs text-gray-400">
                  {fb.createdAt || "No date available"}
                </p>
              </div>
            ))}
          </div>
        )}
      </main>

      {/* Admin Bottom Navigation */}
      <BottomNav />
    </div>
  );
}



// "use client";

// import { useEffect, useState } from "react";
// import { collection, getDocs, query, orderBy } from "firebase/firestore";
// import { db } from "@/lib/firebaseConfig"; // ✅ import Firestore
// import Header from "@/components/Header";
// import BottomNav from "@/components/admin/BottomNav";

// interface Feedback {
//   id: string;
//   userId: string;
//   rating: number;
//   serviceFeedback: string;
//   appFeedback: string;
//   comments?: string;
//   createdAt?: string;
// }

// export default function UserFeedbackPage() {
//   const [feedbacks, setFeedbacks] = useState<Feedback[]>([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchFeedback = async () => {
//       try {
//         const q = query(collection(db, "feedback"), orderBy("createdAt", "desc"));
//         const querySnapshot = await getDocs(q);

//         const feedbackList: Feedback[] = querySnapshot.docs.map((doc) => {
//           const data = doc.data();
//           return {
//             id: doc.id,
//             userId: data.userId || "Unknown",
//             rating: data.rating || 0,
//             serviceFeedback: data.serviceFeedback || "",
//             appFeedback: data.appFeedback || "",
//             comments: data.comments || "",
//             createdAt: data.createdAt?.toDate().toLocaleString() || "N/A",
//           };
//         });

//         setFeedbacks(feedbackList);
//       } catch (error) {
//         console.error("Error fetching feedback:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchFeedback();
//   }, []);

//   return (
//     <div className="flex flex-col min-h-screen bg-[#F3F6FA] font-['Manrope','Noto Sans',sans-serif]">
//       {/* Admin Header */}
//       <Header />

//       {/* Main Content */}
//       <main className="flex-grow p-6">
//         <h1 className="flex items-center gap-2 mb-6 text-3xl font-bold text-blue-700">
//           📊 User Feedback
//         </h1>

//         {loading ? (
//           <p className="text-center text-gray-500">Loading feedback...</p>
//         ) : feedbacks.length === 0 ? (
//           <p className="text-lg text-center text-gray-600">
//             No feedback submitted yet.
//           </p>
//         ) : (
//           <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
//             {feedbacks.map((fb) => (
//               <div
//                 key={fb.id}
//                 className="p-6 transition-all duration-300 bg-white border border-gray-100 shadow-md rounded-2xl hover:shadow-xl"
//               >
//                 <h2 className="mb-3 text-lg font-semibold text-blue-800">
//                   ⭐ {fb.rating}/5
//                 </h2>
//                 <div className="space-y-1 text-sm text-gray-700">
//                   <p>
//                     <span className="font-medium text-gray-800">
//                       Service Feedback:
//                     </span>{" "}
//                     {fb.serviceFeedback}
//                   </p>
//                   <p>
//                     <span className="font-medium text-gray-800">
//                       App Feedback:
//                     </span>{" "}
//                     {fb.appFeedback}
//                   </p>
//                   {fb.comments && (
//                     <p className="p-2 mt-2 italic text-gray-600 border border-blue-100 rounded-lg bg-blue-50">
//                       “{fb.comments}”
//                     </p>
//                   )}
//                 </div>
//                 <p className="mt-3 text-xs text-gray-400">
//                   {fb.createdAt}
//                 </p>
//               </div>
//             ))}
//           </div>
//         )}
//       </main>

//       {/* Admin Bottom Navigation */}
//       <BottomNav />
//     </div>
//   );
// }
