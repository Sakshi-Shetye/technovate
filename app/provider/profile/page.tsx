// "use client";

// import React, { useState } from "react";

// const App = () => {
//   const [loading, setLoading] = useState(false);
//   const [profile, setProfile] = useState({ name: "", skills: "" });
//   const [showSnackbar, setShowSnackbar] = useState(false);
//   const [snackbarMessage, setSnackbarMessage] = useState("");

//   // Show snackbar for 3s
//   const showTemporarySnackbar = (message) => {
//     setSnackbarMessage(message);
//     setShowSnackbar(true);
//     setTimeout(() => setShowSnackbar(false), 3000);
//   };

//   // Simulated profile update
//   const handleUpdateProfile = (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setTimeout(() => {
//       showTemporarySnackbar("Profile updated successfully!");
//       setLoading(false);
//     }, 1500);
//   };

//   if (loading) {
//     return (
//       <div className="flex items-center justify-center h-screen text-lg font-medium text-gray-700">
//         Loading...
//       </div>
//     );
//   }

//   return (
//     <div className="flex items-center justify-center min-h-screen px-4 py-8 bg-gray-100 sm:px-6 lg:px-8">
//       <div className="w-full max-w-xl">
//         {/* Title */}
//         <h1 className="mb-6 text-2xl font-bold text-center text-gray-900 sm:text-3xl">
//           Registration & Onboarding
//         </h1>

//         {/* Card */}
//         <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 transition-transform duration-300 hover:scale-[1.01]">
//           <p className="mb-4 text-base leading-relaxed text-gray-700 sm:text-lg">
//             Your registration is currently under review by our admin team.
//             You will be notified once your account is approved.
//           </p>

//           {/* Approval Section */}
//           <div className="flex flex-col gap-2 mb-4">
//             <label className="text-sm font-medium text-gray-700">
//               Approval Status
//             </label>
//             <span className="px-3 py-1 text-xs font-semibold text-yellow-800 bg-yellow-100 rounded-full w-fit">
//               Pending
//             </span>
//             <p className="text-sm text-gray-500">
//               You can still update your profile details below.
//             </p>
//           </div>

//           {/* Form */}
//           <form
//             onSubmit={handleUpdateProfile}
//             className="flex flex-col gap-4 mt-4"
//           >
//             <input
//               type="text"
//               value={profile.name}
//               onChange={(e) =>
//                 setProfile({ ...profile, name: e.target.value })
//               }
//               placeholder="Full Name"
//               className="w-full px-4 py-2 transition border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//               required
//             />
//             <input
//               type="text"
//               value={profile.skills}
//               onChange={(e) =>
//                 setProfile({ ...profile, skills: e.target.value })
//               }
//               placeholder="Skills (e.g., Towing, Fuel Delivery)"
//               className="w-full px-4 py-2 transition border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//               required
//             />
//             <button
//               type="submit"
//               className="w-full px-4 py-2 font-medium text-white transition-colors duration-300 bg-blue-600 shadow-md hover:bg-blue-700 rounded-xl sm:w-auto"
//             >
//               Update Profile
//             </button>
//           </form>
//         </div>
//       </div>

//       {/* Snackbar */}
//       {showSnackbar && (
//         <div className="fixed px-4 py-3 text-sm text-white bg-gray-900 rounded-lg shadow-xl bottom-6 right-4 sm:right-6 animate-fade-in-up sm:text-base">
//           {snackbarMessage}
//         </div>
//       )}

//       {/* Animations */}
//       <style>{`
//         @keyframes fade-in-up {
//           from { opacity: 0; transform: translateY(20px); }
//           to { opacity: 1; transform: translateY(0); }
//         }
//         .animate-fade-in-up {
//           animation: fade-in-up 0.3s ease-out forwards;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default App;



"use client";

import React, { useState } from "react";
import Header from "@/components/Header";

const App = () => {
  const [loading, setLoading] = useState(false);
  const [profile, setProfile] = useState({ name: "", skills: "" });
  const [showSnackbar, setShowSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");

  // Show snackbar for 3s
  const showTemporarySnackbar = (message: string) => {
    setSnackbarMessage(message);
    setShowSnackbar(true);
    setTimeout(() => setShowSnackbar(false), 3000);
  };

  // Simulated profile update
  const handleUpdateProfile = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      showTemporarySnackbar("Profile updated successfully!");
      setLoading(false);
    }, 1500);
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen text-lg font-medium text-gray-700 bg-sky-100">
        Loading...
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen font-sans antialiased bg-sky-100">
      <Header />

      <div className="flex items-center justify-center px-4 py-8 sm:px-6 lg:px-8">
        <div className="w-full max-w-xl">
          {/* Title */}
          <h1 className="mb-6 text-2xl font-bold text-center text-gray-900 sm:text-3xl">
            Registration & Onboarding
          </h1>

          {/* Card */}
          <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 transition-transform duration-300 hover:scale-[1.01]">
            <p className="mb-4 text-base leading-relaxed text-gray-700 sm:text-lg">
              Your registration is currently under review by our admin team.
              You will be notified once your account is approved.
            </p>

            {/* Approval Section */}
            <div className="flex flex-col gap-2 mb-4">
              <label className="text-sm font-medium text-gray-700">
                Approval Status
              </label>
              <span className="px-3 py-1 text-xs font-semibold text-yellow-800 bg-yellow-100 rounded-full w-fit">
                Pending
              </span>
              <p className="text-sm text-gray-500">
                You can still update your profile details below.
              </p>
            </div>

            {/* Form */}
            <form
              onSubmit={handleUpdateProfile}
              className="flex flex-col gap-4 mt-4"
            >
              <input
                type="text"
                value={profile.name}
                onChange={(e) =>
                  setProfile({ ...profile, name: e.target.value })
                }
                placeholder="Full Name"
                className="w-full px-4 py-2 transition border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                required
              />
              <input
                type="text"
                value={profile.skills}
                onChange={(e) =>
                  setProfile({ ...profile, skills: e.target.value })
                }
                placeholder="Skills (e.g., Towing, Fuel Delivery)"
                className="w-full px-4 py-2 transition border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                required
              />
              <button
                type="submit"
                className="w-full px-4 py-2 font-medium text-white transition-colors duration-300 bg-blue-600 shadow-md hover:bg-blue-700 rounded-xl sm:w-auto"
              >
                Update Profile
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Snackbar */}
      {showSnackbar && (
        <div className="fixed px-4 py-3 text-sm text-white bg-gray-900 rounded-lg shadow-xl bottom-6 right-4 sm:right-6 animate-fade-in-up sm:text-base">
          {snackbarMessage}
        </div>
      )}

      {/* Animations */}
      <style>{`
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.3s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default App;
