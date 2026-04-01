// using 
"use client";

import { useState } from "react";
import { Check, Home, AlertCircle, Clock, Star } from "lucide-react";
import BottomNav from "@/components/BottomNav";
import Header from "@/components/Header";
export default function FeedbackPage() {
  const [rating, setRating] = useState(0);
  const [serviceFeedback, setServiceFeedback] = useState("");
  const [appFeedback, setAppFeedback] = useState("");
  const [comments, setComments] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    // Add API call here to save feedback if needed
    setSubmitted(true);
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      {/* Header */}
      <Header/>
      <div className="relative flex items-center p-4 bg-white shadow-md">
        <button className="absolute left-4" onClick={() => history.back()}>
          &#8592;
        </button>
        <h2 className="flex-1 text-lg font-bold text-center">Feedback</h2>
      </div>

      {/* Feedback Form */}
      {!submitted ? (
        <div className="flex-1 p-6 overflow-y-auto">
          <div className="p-6 bg-white shadow-md rounded-2xl">
            <h3 className="mb-1 text-xl font-bold text-center">
              We value your feedback!
            </h3>
            <p className="mb-6 text-sm text-center text-gray-500">
              Help us improve by sharing your thoughts.
            </p>

            {/* Rating */}
            <div className="mb-6 text-center">
              <p className="mb-2 font-semibold">Rate the service</p>
              <div className="flex justify-center gap-2">
                {[1, 2, 3, 4, 5].map((num) => (
                  <button
                    key={num}
                    onClick={() => setRating(num)}
                    className={`w-10 h-10 rounded-full border font-bold text-lg ${
                      rating >= num
                        ? "bg-blue-600 text-white border-blue-600"
                        : "bg-white text-gray-600 border-gray-300"
                    }`}
                  >
                    {num}
                  </button>
                ))}
              </div>
            </div>

            {/* Service Feedback */}
            <div className="flex flex-col gap-4 mb-4">
              <label className="flex flex-col">
                <span className="mb-2 font-semibold">
                  How was the service provided?
                </span>
                <input
                  type="text"
                  placeholder="Describe the service quality..."
                  className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                  value={serviceFeedback}
                  onChange={(e) => setServiceFeedback(e.target.value)}
                />
              </label>

              {/* App Feedback */}
              <label className="flex flex-col">
                <span className="mb-2 font-semibold">
                  How was your experience with the app?
                </span>
                <input
                  type="text"
                  placeholder="Was the app easy to use?"
                  className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                  value={appFeedback}
                  onChange={(e) => setAppFeedback(e.target.value)}
                />
              </label>

              {/* Optional Comments */}
              <label className="flex flex-col">
                <span className="mb-2 font-semibold">
                  Any suggestions or comments?{" "}
                  <span className="text-gray-500">(optional)</span>
                </span>
                <textarea
                  placeholder="Tell us how we can improve..."
                  className="border border-gray-300 rounded-lg p-3 resize-none focus:outline-none focus:ring-2 focus:ring-blue-600 min-h-[100px]"
                  value={comments}
                  onChange={(e) => setComments(e.target.value)}
                />
              </label>
            </div>

        
<button
  onClick={handleSubmit}
  disabled={rating === 0 || serviceFeedback.trim() === "" || appFeedback.trim() === ""}
  className={`w-full font-bold py-3 rounded-lg ${
    rating === 0 || serviceFeedback.trim() === "" || appFeedback.trim() === ""
      ? "bg-gray-400 cursor-not-allowed"
      : "bg-blue-600 text-white hover:bg-blue-700"
  }`}
>
  Submit Feedback
</button>

          </div>
        </div>
      ) : (
        <div className="flex items-center justify-center flex-1 p-6">
          <div className="w-full p-8 text-center bg-white shadow-md rounded-2xl">
            <Check className="w-16 h-16 mx-auto mb-4 text-green-500" />
            <h3 className="mb-2 text-2xl font-bold">Thank You!</h3>
            <p className="mb-6 text-gray-500">
              Your feedback has been submitted successfully.
            </p>
            <button
              onClick={() => (window.location.href = "/user")}
              className="w-full py-3 font-bold text-white bg-blue-600 rounded-lg hover:bg-blue-700"
            >
              Back to Dashboard
            </button>
          </div>
        </div>
      )}

   <BottomNav />
    </div>
  );
}



// "use client";

// import { useState } from "react";
// import { Check } from "lucide-react";
// import BottomNav from "@/components/BottomNav";
// import Header from "@/components/Header";
// import { addDoc, collection, serverTimestamp } from "firebase/firestore";
// import { auth, db } from "@/lib/firebaseConfig"; // ✅ make sure firebase is configured here

// export default function FeedbackPage() {
//   const [rating, setRating] = useState(0);
//   const [serviceFeedback, setServiceFeedback] = useState("");
//   const [appFeedback, setAppFeedback] = useState("");
//   const [comments, setComments] = useState("");
//   const [submitted, setSubmitted] = useState(false);
//   const [loading, setLoading] = useState(false);

//   const handleSubmit = async () => {
//     if (!auth.currentUser) {
//       alert("You must be logged in to submit feedback.");
//       return;
//     }

//     setLoading(true);
//     try {
//       await addDoc(collection(db, "feedback"), {
//         userId: auth.currentUser.uid, // ✅ track user
//         rating,
//         serviceFeedback,
//         appFeedback,
//         comments,
//         createdAt: serverTimestamp(), // ✅ auto timestamp
//       });

//       setSubmitted(true);
//     } catch (error) {
//       console.error("Error saving feedback:", error);
//       alert("Failed to submit feedback. Please try again.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="flex flex-col min-h-screen bg-gray-100">
//       {/* Header */}
//       <Header />
//       <div className="relative flex items-center p-4 bg-white shadow-md">
//         <button className="absolute left-4" onClick={() => history.back()}>
//           &#8592;
//         </button>
//         <h2 className="flex-1 text-lg font-bold text-center">Feedback</h2>
//       </div>

//       {/* Feedback Form */}
//       {!submitted ? (
//         <div className="flex-1 p-6 overflow-y-auto">
//           <div className="p-6 bg-white shadow-md rounded-2xl">
//             <h3 className="mb-1 text-xl font-bold text-center">
//               We value your feedback!
//             </h3>
//             <p className="mb-6 text-sm text-center text-gray-500">
//               Help us improve by sharing your thoughts.
//             </p>

//             {/* Rating */}
//             <div className="mb-6 text-center">
//               <p className="mb-2 font-semibold">Rate the service</p>
//               <div className="flex justify-center gap-2">
//                 {[1, 2, 3, 4, 5].map((num) => (
//                   <button
//                     key={num}
//                     onClick={() => setRating(num)}
//                     className={`w-10 h-10 rounded-full border font-bold text-lg ${
//                       rating >= num
//                         ? "bg-blue-600 text-white border-blue-600"
//                         : "bg-white text-gray-600 border-gray-300"
//                     }`}
//                   >
//                     {num}
//                   </button>
//                 ))}
//               </div>
//             </div>

//             {/* Service Feedback */}
//             <div className="flex flex-col gap-4 mb-4">
//               <label className="flex flex-col">
//                 <span className="mb-2 font-semibold">
//                   How was the service provided?
//                 </span>
//                 <input
//                   type="text"
//                   placeholder="Describe the service quality..."
//                   className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
//                   value={serviceFeedback}
//                   onChange={(e) => setServiceFeedback(e.target.value)}
//                 />
//               </label>

//               {/* App Feedback */}
//               <label className="flex flex-col">
//                 <span className="mb-2 font-semibold">
//                   How was your experience with the app?
//                 </span>
//                 <input
//                   type="text"
//                   placeholder="Was the app easy to use?"
//                   className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
//                   value={appFeedback}
//                   onChange={(e) => setAppFeedback(e.target.value)}
//                 />
//               </label>

//               {/* Optional Comments */}
//               <label className="flex flex-col">
//                 <span className="mb-2 font-semibold">
//                   Any suggestions or comments?{" "}
//                   <span className="text-gray-500">(optional)</span>
//                 </span>
//                 <textarea
//                   placeholder="Tell us how we can improve..."
//                   className="border border-gray-300 rounded-lg p-3 resize-none focus:outline-none focus:ring-2 focus:ring-blue-600 min-h-[100px]"
//                   value={comments}
//                   onChange={(e) => setComments(e.target.value)}
//                 />
//               </label>
//             </div>

//             {/* Submit Button */}
//             <button
//               onClick={handleSubmit}
//               disabled={
//                 loading ||
//                 rating === 0 ||
//                 serviceFeedback.trim() === "" ||
//                 appFeedback.trim() === ""
//               }
//               className={`w-full font-bold py-3 rounded-lg ${
//                 rating === 0 ||
//                 serviceFeedback.trim() === "" ||
//                 appFeedback.trim() === ""
//                   ? "bg-gray-400 cursor-not-allowed"
//                   : "bg-blue-600 text-white hover:bg-blue-700"
//               }`}
//             >
//               {loading ? "Submitting..." : "Submit Feedback"}
//             </button>
//           </div>
//         </div>
//       ) : (
//         <div className="flex items-center justify-center flex-1 p-6">
//           <div className="w-full p-8 text-center bg-white shadow-md rounded-2xl">
//             <Check className="w-16 h-16 mx-auto mb-4 text-green-500" />
//             <h3 className="mb-2 text-2xl font-bold">Thank You!</h3>
//             <p className="mb-6 text-gray-500">
//               Your feedback has been submitted successfully.
//             </p>
//             <button
//               onClick={() => (window.location.href = "/user")}
//               className="w-full py-3 font-bold text-white bg-blue-600 rounded-lg hover:bg-blue-700"
//             >
//               Back to Dashboard
//             </button>
//           </div>
//         </div>
//       )}

//       <BottomNav />
//     </div>
//   );
// }



// "use client";

// import { useEffect, useState } from "react";
// import { collection, getDocs, query, orderBy } from "firebase/firestore";
// import { onAuthStateChanged } from "firebase/auth";
// import { db, auth } from "@/lib/firebaseConfig";
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
//   const [isAdmin, setIsAdmin] = useState(false);
//   const [checkedAuth, setCheckedAuth] = useState(false);

//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, async (user) => {
//       if (!user) {
//         setIsAdmin(false);
//         setCheckedAuth(true);
//         setLoading(false);
//         return;
//       }

//       try {
//         // Fetch user profile to check isAdmin flag
//         const userDoc = await getDocs(collection(db, "users"));
//         const doc = userDoc.docs.find((d) => d.id === user.uid);
//         if (doc?.data()?.isAdmin) {
//           setIsAdmin(true);
//         }
//       } catch (err) {
//         console.error("Error checking admin status:", err);
//       } finally {
//         setCheckedAuth(true);
//       }
//     });

//     return () => unsubscribe();
//   }, []);

//   useEffect(() => {
//     if (!isAdmin) return; // Only admins should fetch feedback

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
//   }, [isAdmin]);

//   if (!checkedAuth) {
//     return <p className="text-center text-gray-500">Checking authentication…</p>;
//   }

//   if (!isAdmin) {
//     return (
//       <div className="flex flex-col items-center justify-center min-h-screen bg-[#F3F6FA]">
//         <Header />
//         <main className="p-6 text-center">
//           <h1 className="text-2xl font-bold text-red-600">🚫 Access Denied</h1>
//           <p className="mt-2 text-gray-700">
//             You don’t have permission to view this page.
//           </p>
//         </main>
//         <BottomNav />
//       </div>
//     );
//   }

//   return (
//     <div className="flex flex-col min-h-screen bg-[#F3F6FA] font-['Manrope','Noto Sans',sans-serif]">
//       <Header />

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
//                 <p className="mt-3 text-xs text-gray-400">{fb.createdAt}</p>
//               </div>
//             ))}
//           </div>
//         )}
//       </main>

//       <BottomNav />
//     </div>
//   );
// }


// "use client";

// import { useState } from "react";
// import { Check } from "lucide-react";
// import BottomNav from "@/components/BottomNav";
// import Header from "@/components/Header";
// import { addDoc, collection, serverTimestamp } from "firebase/firestore";
// import { auth, db } from "@/lib/firebaseConfig";

// export default function FeedbackPage() {
//   const [rating, setRating] = useState(0);
//   const [serviceFeedback, setServiceFeedback] = useState("");
//   const [appFeedback, setAppFeedback] = useState("");
//   const [comments, setComments] = useState("");
//   const [submitted, setSubmitted] = useState(false);
//   const [loading, setLoading] = useState(false);

//   const handleSubmit = async () => {
//     const user = auth.currentUser;

//     if (!user) {
//       alert("You must be logged in to submit feedback.");
//       return;
//     }

//     setLoading(true);
//     try {
//       // ✅ Write to Firestore with userId
//       await addDoc(collection(db, "feedback"), {
//         userId: user.uid,
//         rating,
//         serviceFeedback,
//         appFeedback,
//         comments,
//         createdAt: serverTimestamp(),
//       });

//       setSubmitted(true);
//     } catch (error: any) {
//       console.error("Error saving feedback:", error.message);
//       alert("Failed to submit feedback: " + error.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="flex flex-col min-h-screen bg-gray-100">
//       {/* Header */}
//       <Header />
//       <div className="relative flex items-center p-4 bg-white shadow-md">
//         <button className="absolute left-4" onClick={() => history.back()}>
//           &#8592;
//         </button>
//         <h2 className="flex-1 text-lg font-bold text-center">Feedback</h2>
//       </div>

//       {/* Feedback Form */}
//       {!submitted ? (
//         <div className="flex-1 p-6 overflow-y-auto">
//           <div className="p-6 bg-white shadow-md rounded-2xl">
//             <h3 className="mb-1 text-xl font-bold text-center">
//               We value your feedback!
//             </h3>
//             <p className="mb-6 text-sm text-center text-gray-500">
//               Help us improve by sharing your thoughts.
//             </p>

//             {/* Rating */}
//             <div className="mb-6 text-center">
//               <p className="mb-2 font-semibold">Rate the service</p>
//               <div className="flex justify-center gap-2">
//                 {[1, 2, 3, 4, 5].map((num) => (
//                   <button
//                     key={num}
//                     onClick={() => setRating(num)}
//                     className={`w-10 h-10 rounded-full border font-bold text-lg ${
//                       rating >= num
//                         ? "bg-blue-600 text-white border-blue-600"
//                         : "bg-white text-gray-600 border-gray-300"
//                     }`}
//                   >
//                     {num}
//                   </button>
//                 ))}
//               </div>
//             </div>

//             {/* Service Feedback */}
//             <div className="flex flex-col gap-4 mb-4">
//               <label className="flex flex-col">
//                 <span className="mb-2 font-semibold">
//                   How was the service provided?
//                 </span>
//                 <input
//                   type="text"
//                   placeholder="Describe the service quality..."
//                   className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
//                   value={serviceFeedback}
//                   onChange={(e) => setServiceFeedback(e.target.value)}
//                 />
//               </label>

//               {/* App Feedback */}
//               <label className="flex flex-col">
//                 <span className="mb-2 font-semibold">
//                   How was your experience with the app?
//                 </span>
//                 <input
//                   type="text"
//                   placeholder="Was the app easy to use?"
//                   className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
//                   value={appFeedback}
//                   onChange={(e) => setAppFeedback(e.target.value)}
//                 />
//               </label>

//               {/* Comments */}
//               <label className="flex flex-col">
//                 <span className="mb-2 font-semibold">
//                   Any suggestions or comments?{" "}
//                   <span className="text-gray-500">(optional)</span>
//                 </span>
//                 <textarea
//                   placeholder="Tell us how we can improve..."
//                   className="border border-gray-300 rounded-lg p-3 resize-none focus:outline-none focus:ring-2 focus:ring-blue-600 min-h-[100px]"
//                   value={comments}
//                   onChange={(e) => setComments(e.target.value)}
//                 />
//               </label>
//             </div>

//             {/* Submit Button */}
//             <button
//               onClick={handleSubmit}
//               disabled={
//                 loading ||
//                 rating === 0 ||
//                 serviceFeedback.trim() === "" ||
//                 appFeedback.trim() === ""
//               }
//               className={`w-full font-bold py-3 rounded-lg ${
//                 rating === 0 ||
//                 serviceFeedback.trim() === "" ||
//                 appFeedback.trim() === ""
//                   ? "bg-gray-400 cursor-not-allowed"
//                   : "bg-blue-600 text-white hover:bg-blue-700"
//               }`}
//             >
//               {loading ? "Submitting..." : "Submit Feedback"}
//             </button>
//           </div>
//         </div>
//       ) : (
//         <div className="flex items-center justify-center flex-1 p-6">
//           <div className="w-full p-8 text-center bg-white shadow-md rounded-2xl">
//             <Check className="w-16 h-16 mx-auto mb-4 text-green-500" />
//             <h3 className="mb-2 text-2xl font-bold">Thank You!</h3>
//             <p className="mb-6 text-gray-500">
//               Your feedback has been submitted successfully.
//             </p>
//             <button
//               onClick={() => (window.location.href = "/user")}
//               className="w-full py-3 font-bold text-white bg-blue-600 rounded-lg hover:bg-blue-700"
//             >
//               Back to Dashboard
//             </button>
//           </div>
//         </div>
//       )}

//       <BottomNav />
//     </div>
//   );
// }




// "use client";

// import { useEffect, useState } from "react";
// import { collection, getDocs, query, orderBy, doc, getDoc } from "firebase/firestore";
// import { onAuthStateChanged } from "firebase/auth";
// import { db, auth } from "@/lib/firebaseConfig";
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
//   const [isAdmin, setIsAdmin] = useState(false);
//   const [checkedAuth, setCheckedAuth] = useState(false);
//   const [error, setError] = useState<string | null>(null);

//   // Step 1: Check if user is admin
//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, async (user) => {
//       if (!user) {
//         setIsAdmin(false);
//         setCheckedAuth(true);
//         setLoading(false);
//         return;
//       }

//       try {
//         const userRef = doc(db, "users", user.uid);
//         const userSnap = await getDoc(userRef);

//         if (userSnap.exists()) {
//           const userData = userSnap.data();
//           console.log("User data:", userData); // ✅ Debug: check what Firestore returns
//           setIsAdmin(userData.isAdmin === true);
//         } else {
//           console.warn("User doc not found in Firestore.");
//           setIsAdmin(false);
//         }
//       } catch (err) {
//         console.error("Error checking admin status:", err);
//         setError("Unable to verify admin status.");
//       } finally {
//         setCheckedAuth(true);
//       }
//     });

//     return () => unsubscribe();
//   }, []);

//   // Step 2: Fetch feedback only for admins
//   useEffect(() => {
//     if (!isAdmin) {
//       setLoading(false);
//       return;
//     }

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
//             createdAt: data.createdAt?.toDate?.()?.toLocaleString() || "N/A",
//           };
//         });

//         setFeedbacks(feedbackList);
//       } catch (err: any) {
//         console.error("Error fetching feedback:", err);
//         if (err.code === "permission-denied") {
//           setError("You don’t have permission to view feedback.");
//         } else {
//           setError("Something went wrong while fetching feedback.");
//         }
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchFeedback();
//   }, [isAdmin]);

//   if (!checkedAuth) return <p className="text-center text-gray-500">Checking authentication…</p>;

//   if (!isAdmin) {
//     return (
//       <div className="flex flex-col items-center justify-center min-h-screen bg-[#F3F6FA]">
//         <Header />
//         <main className="p-6 text-center">
//           <h1 className="text-2xl font-bold text-red-600">🚫 Access Denied</h1>
//           <p className="mt-2 text-gray-700">
//             You don’t have permission to view this page.
//           </p>
//           <p className="mt-1 text-gray-500">
//             Make sure your user document in Firestore has <code>isAdmin: true</code>
//           </p>
//         </main>
//         <BottomNav />
//       </div>
//     );
//   }

//   return (
//     <div className="flex flex-col min-h-screen bg-[#F3F6FA] font-['Manrope','Noto Sans',sans-serif]">
//       <Header />
//       <main className="flex-grow p-6">
//         <h1 className="flex items-center gap-2 mb-6 text-3xl font-bold text-blue-700">
//           📊 User Feedback
//         </h1>

//         {loading ? (
//           <p className="text-center text-gray-500">Loading feedback...</p>
//         ) : error ? (
//           <p className="text-center text-red-500">{error}</p>
//         ) : feedbacks.length === 0 ? (
//           <p className="text-lg text-center text-gray-600">No feedback submitted yet.</p>
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
//                     <span className="font-medium text-gray-800">Service Feedback:</span>{" "}
//                     {fb.serviceFeedback}
//                   </p>
//                   <p>
//                     <span className="font-medium text-gray-800">App Feedback:</span>{" "}
//                     {fb.appFeedback}
//                   </p>
//                   {fb.comments && (
//                     <p className="p-2 mt-2 italic text-gray-600 border border-blue-100 rounded-lg bg-blue-50">
//                       “{fb.comments}”
//                     </p>
//                   )}
//                 </div>
//                 <p className="mt-3 text-xs text-gray-400">{fb.createdAt}</p>
//               </div>
//             ))}
//           </div>
//         )}
//       </main>
//       <BottomNav />
//     </div>
//   );
// }
