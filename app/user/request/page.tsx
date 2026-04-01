// "use client";

// import { useState } from "react";
// import { db } from "@/lib/firebaseConfig";
// import { collection, addDoc, serverTimestamp } from "firebase/firestore";
// import { useRouter } from "next/navigation";
// import LocationPicker from "@/components/LocationPicker";
// import { Check } from "lucide-react"; // For Step 4 icon

// export default function RequestPage() {
//   const [issueType, setIssueType] = useState("Fuel Shortage");
//   const [location, setLocation] = useState("");
//   const [phoneNumber, setPhoneNumber] = useState("+91");
//   const [vehicleNumber, setVehicleNumber] = useState("");
//   const [vehicleType, setVehicleType] = useState("Bike");
//   const [notes, setNotes] = useState("");
//   const [step, setStep] = useState(1);
//   const [errors, setErrors] = useState<Record<string, string>>({});
//   const router = useRouter();

//   const validateStep1 = () => {
//     const newErrors: Record<string, string> = {};
//     if (!location) newErrors.location = "Please select location from map";
//     if (!phoneNumber || phoneNumber.length < 10)
//       newErrors.phoneNumber = "Enter valid phone number";
//     if (!vehicleNumber) newErrors.vehicleNumber = "Enter vehicle number";
//     return newErrors;
//   };

//   const handleNext = () => {
//     if (step === 1) {
//       const validationErrors = validateStep1();
//       if (Object.keys(validationErrors).length > 0) {
//         setErrors(validationErrors);
//         return;
//       }
//     }
//     setStep(step + 1);
//     setErrors({});
//   };

//   const handleSubmit = async () => {
//     try {
//       await addDoc(collection(db, "requests"), {
//         issueType,
//         location,
//         phoneNumber,
//         vehicleNumber,
//         vehicleType,
//         notes,
//         status: "Pending",
//         createdAt: serverTimestamp(),
//       });
//       setStep(3); // Move to Step 3 after submission
//     } catch (error) {
//       console.error("Error adding document: ", error);
//     }
//   };

//   const handleBackDashboard = () => {
//     router.push("/user/dashboard");
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gray-50">
//       <div className="w-full max-w-lg p-8 bg-white shadow-lg rounded-xl">
//         {/* Progress bar */}
//         <div className="flex items-center justify-between mb-8">
//           {[1, 2, 3, 4].map((num) => (
//             <div key={num} className="flex items-center flex-1">
//               <div
//                 className={`rounded-full w-8 h-8 flex items-center justify-center ${
//                   step >= num ? "bg-blue-500 text-white" : "bg-gray-200"
//                 }`}
//               >
//                 {num}
//               </div>
//               {num < 4 && (
//                 <div
//                   className={`flex-1 h-1 ${
//                     step > num ? "bg-blue-500" : "bg-gray-200"
//                   }`}
//                 />
//               )}
//             </div>
//           ))}
//         </div>

//         {/* Step 1 */}
//         {step === 1 && (
//           <div>
//             <h2 className="mb-6 text-2xl font-bold">Report an Issue</h2>

//             {/* Issue Type */}
//             <div className="mb-4">
//               <label className="block mb-2 text-sm font-medium">Issue Type</label>
//               <select
//                 value={issueType}
//                 onChange={(e) => setIssueType(e.target.value)}
//                 className="w-full h-12 px-4 bg-gray-100 rounded-lg"
//               >
//                 <option>Fuel Shortage</option>
//                 <option>Flat Tyre</option>
//                 <option>Engine Breakdown</option>
//               </select>
//             </div>

//             {/* Location with map */}
//             <div className="mb-4">
//               <label className="block mb-2 text-sm font-medium">Location</label>
//               <LocationPicker
//                 value={location}
//                 onChange={(coords) => setLocation(coords)}
//               />
//              <p className="mt-2 text-sm text-gray-600">
//   Selected:{" "}
//   {location
//     ? location
//         .split(",")
//         .map((coord) => parseFloat(coord).toFixed(6))
//         .join(", ")
//     : "Click on map or use button to select"}
// </p>

//               {errors.location && (
//                 <p className="mt-1 text-sm text-red-500">{errors.location}</p>
//               )}
//             </div>

//             {/* Phone Number */}
//             <div className="mb-4">
//               <label className="block mb-2 text-sm font-medium">Phone Number</label>
//               <input
//                 type="tel"
//                 value={phoneNumber}
//                 onChange={(e) => setPhoneNumber(e.target.value)}
//                 className="w-full h-12 px-4 bg-gray-100 rounded-lg"
//               />
//               {errors.phoneNumber && (
//                 <p className="mt-1 text-sm text-red-500">{errors.phoneNumber}</p>
//               )}
//             </div>

//             {/* Vehicle Number */}
//             <div className="mb-4">
//               <label className="block mb-2 text-sm font-medium">Vehicle Number</label>
//               <input
//                 type="text"
//                 value={vehicleNumber}
//                 onChange={(e) => setVehicleNumber(e.target.value)}
//                 className="w-full h-12 px-4 bg-gray-100 rounded-lg"
//               />
//               {errors.vehicleNumber && (
//                 <p className="mt-1 text-sm text-red-500">{errors.vehicleNumber}</p>
//               )}
//             </div>

//             {/* Vehicle Type */}
//             <div className="mb-4">
//               <label className="block mb-2 text-sm font-medium">Vehicle Type</label>
//               <select
//                 value={vehicleType}
//                 onChange={(e) => setVehicleType(e.target.value)}
//                 className="w-full h-12 px-4 bg-gray-100 rounded-lg"
//               >
//                 <option>Bike</option>
//                 <option>Car</option>
//                 <option>Truck</option>
//               </select>
//             </div>

//             {/* Notes */}
//             <div className="mb-4">
//               <label className="block mb-2 text-sm font-medium">
//                 Additional Notes (optional)
//               </label>
//               <textarea
//                 value={notes}
//                 onChange={(e) => setNotes(e.target.value)}
//                 className="w-full px-4 py-2 bg-gray-100 rounded-lg"
//                 placeholder="Anything else the provider should know..."
//               />
//             </div>

//             <button
//               onClick={handleNext}
//               className="w-full py-3 mt-4 text-white bg-blue-500 rounded-lg"
//             >
//               Next
//             </button>
//           </div>
//         )}

//         {/* Step 2 */}
//         {step === 2 && (
//           <div>
//             <h2 className="mb-6 text-2xl font-bold">Confirm Details</h2>
//             <ul className="mb-6">
//               <li>Issue: {issueType}</li>
//               <li>Location: {location}</li>
//               <li>Phone: {phoneNumber}</li>
//               <li>
//                 Vehicle: {vehicleNumber} ({vehicleType})
//               </li>
//               <li>Notes: {notes}</li>
//             </ul>
//             <div className="flex justify-between">
//               <button
//                 onClick={() => setStep(step - 1)}
//                 className="px-6 py-3 text-gray-700 bg-gray-200 rounded-lg"
//               >
//                 Back
//               </button>
//               <button
//                 onClick={handleSubmit}
//                 className="px-6 py-3 text-white bg-green-500 rounded-lg"
//               >
//                 Submit
//               </button>
//             </div>
//           </div>
//         )}

//         {/* Step 3: Connecting */}
//         {step === 3 && (
//           <div className="text-center">
//             <h2 className="mb-2 text-lg font-semibold">Finding Nearby Provider...</h2>
//             <p className="mb-6 text-gray-600">
//               Please wait while we connect you with the nearest available provider.
//             </p>
//             <div className="w-12 h-12 mx-auto mb-6 border-4 border-blue-600 rounded-full animate-spin border-t-transparent"></div>
//             <button
//               onClick={() => setStep(4)}
//               className="w-full py-3 font-bold text-white bg-blue-600 rounded-full hover:bg-blue-700"
//             >
//               Continue
//             </button>
//           </div>
//         )}

//         {/* Step 4: Request Accepted */}
//         {step === 4 && (
//           <div className="flex flex-col items-center text-center">
//             <Check className="w-16 h-16 mb-4 text-green-500" />
//             <h1 className="mb-2 text-2xl font-bold">Help is on the way!</h1>
//             <p className="mb-6 text-gray-600">
//               A nearby provider will contact you shortly.
//             </p>
//             <button
//               onClick={handleBackDashboard}
//               className="w-full py-3 font-bold text-white bg-blue-600 rounded-full hover:bg-blue-700"
//             >
//               Back to Dashboard
//             </button>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }



// "use client";

// import { useState } from "react";
// import { db } from "@/lib/firebaseConfig";
// import { collection, addDoc, serverTimestamp } from "firebase/firestore";
// import { useRouter } from "next/navigation";
// import LocationPicker from "@/components/LocationPicker";
// import { Check } from "lucide-react";
// import Header from "@/components/Header";
// import BottomNav from "@/components/BottomNav";

// export default function RequestPage() {
//   const [issueType, setIssueType] = useState("Fuel Shortage");
//   const [customIssue, setCustomIssue] = useState("");
//   const [location, setLocation] = useState("");
//   const [phoneNumber, setPhoneNumber] = useState("+91");
//   const [vehicleNumber, setVehicleNumber] = useState("");
//   const [vehicleType, setVehicleType] = useState("Bike");
//   const [customVehicleType, setCustomVehicleType] = useState("");
//   const [vehicleModel, setVehicleModel] = useState("");
//   const [notes, setNotes] = useState("");
//   const [step, setStep] = useState(1);
//   const [errors, setErrors] = useState<Record<string, string>>({});
//   const router = useRouter();

//   // --- Validations ---
//   const validateStep1 = () => {
//     const newErrors: Record<string, string> = {};

//     if (!location) newErrors.location = "Please select location from map";

//     const phoneRegex = /^\+91\d{10}$/;
//     if (!phoneRegex.test(phoneNumber)) {
//       newErrors.phoneNumber = "Enter valid 10-digit phone number with +91";
//     }

//     const vehicleRegex = /^[A-Z]{2}\d{2}[A-Z]{1,2}\d{4}$/;
//     if (!vehicleNumber || !vehicleRegex.test(vehicleNumber)) {
//       newErrors.vehicleNumber =
//         "Enter valid vehicle number (e.g., MH12AB1234)";
//     }

//     if (!vehicleModel) {
//       newErrors.vehicleModel = "Enter vehicle model";
//     }

//     return newErrors;
//   };

//   const handleNext = () => {
//     if (step === 1) {
//       const validationErrors = validateStep1();
//       if (Object.keys(validationErrors).length > 0) {
//         setErrors(validationErrors);
//         return;
//       }
//     }
//     setStep(step + 1);
//     setErrors({});
//   };

//   const handleSubmit = async () => {
//     try {
//       await addDoc(collection(db, "requests"), {
//         issueType: issueType === "Others" ? customIssue : issueType,
//         location,
//         phoneNumber,
//         vehicleNumber,
//         vehicleType: vehicleType === "Others" ? customVehicleType : vehicleType,
//         vehicleModel,
//         notes,
//         status: "Pending",
//         createdAt: serverTimestamp(),
//       });
//       setStep(3);
//     } catch (error) {
//       console.error("Error adding document: ", error);
//     }
//   };

//   const handleBackDashboard = () => {
//     router.push("/user/dashboard");
//   };

//   // --- Handle phone input ---
//   const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     let value = e.target.value.replace(/\D/g, ""); // remove non-numeric
//     if (value.startsWith("91")) value = value.slice(2); // strip duplicate 91 if user types
//     if (value.length > 10) value = value.slice(0, 10); // max 10 digits
//     setPhoneNumber("+91" + value);
//   };

//   return (
//     <div className="flex flex-col min-h-screen bg-gray-50">
//       <Header />
//       <main className="flex items-center justify-center flex-1 p-4 sm:p-6">
//         <div className="w-full max-w-lg p-6 bg-white shadow-lg sm:p-8 rounded-xl">
//           {/* Progress bar */}
//           <div className="flex items-center justify-between mb-8">
//             {[1, 2, 3, 4].map((num) => (
//               <div key={num} className="flex items-center flex-1">
//                 <div
//                   className={`rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold ${
//                     step >= num ? "bg-blue-500 text-white" : "bg-gray-200"
//                   }`}
//                 >
//                   {num}
//                 </div>
//                 {num < 4 && (
//                   <div
//                     className={`flex-1 h-1 ${
//                       step > num ? "bg-blue-500" : "bg-gray-200"
//                     }`}
//                   />
//                 )}
//               </div>
//             ))}
//           </div>

//           {/* Step 1 */}
//           {step === 1 && (
//             <div>
//               <h2 className="mb-6 text-2xl font-bold">Report an Issue</h2>

//               {/* Issue Type */}
//               <div className="mb-4">
//                 <label className="block mb-2 text-sm font-medium">
//                   Issue Type
//                 </label>
//                 <select
//                   value={issueType}
//                   onChange={(e) => setIssueType(e.target.value)}
//                   className="w-full h-12 px-4 bg-gray-100 rounded-lg"
//                 >
//                   <option>Fuel Shortage</option>
//                   <option>Flat Tyre</option>
//                   <option>Engine Breakdown</option>
//                   <option>Others</option>
//                 </select>
//                 {issueType === "Others" && (
//                   <input
//                     type="text"
//                     value={customIssue}
//                     onChange={(e) => setCustomIssue(e.target.value)}
//                     placeholder="Specify your issue"
//                     className="w-full h-12 px-4 mt-2 bg-gray-100 rounded-lg"
//                   />
//                 )}
//               </div>

//               {/* Location */}
//               <div className="mb-4">
//                 <label className="block mb-2 text-sm font-medium">Location</label>
//                 <LocationPicker
//                   value={location}
//                   onChange={(coords) => setLocation(coords)}
//                 />
//                 <p className="mt-2 text-sm text-gray-600">
//                   Selected:{" "}
//                   {location
//                     ? location
//                         .split(",")
//                         .map((coord) => parseFloat(coord).toFixed(6))
//                         .join(", ")
//                     : "Click on map or use button to select"}
//                 </p>
//                 {errors.location && (
//                   <p className="mt-1 text-sm text-red-500">{errors.location}</p>
//                 )}
//               </div>

//               {/* Phone Number */}
//               <div className="mb-4">
//                 <label className="block mb-2 text-sm font-medium">
//                   Phone Number
//                 </label>
//                 <input
//                   type="tel"
//                   value={phoneNumber}
//                   onChange={handlePhoneChange}
//                   placeholder="+91XXXXXXXXXX"
//                   className="w-full h-12 px-4 bg-gray-100 rounded-lg"
//                 />
//                 {errors.phoneNumber && (
//                   <p className="mt-1 text-sm text-red-500">
//                     {errors.phoneNumber}
//                   </p>
//                 )}
//               </div>

//               {/* Vehicle Number */}
//               <div className="mb-4">
//                 <label className="block mb-2 text-sm font-medium">
//                   Vehicle Number
//                 </label>
//                 <input
//                   type="text"
//                   value={vehicleNumber}
//                   onChange={(e) =>
//                     setVehicleNumber(e.target.value.toUpperCase())
//                   }
//                   placeholder="e.g., MH12AB1234"
//                   className="w-full h-12 px-4 bg-gray-100 rounded-lg"
//                 />
//                 {errors.vehicleNumber && (
//                   <p className="mt-1 text-sm text-red-500">
//                     {errors.vehicleNumber}
//                   </p>
//                 )}
//               </div>

//               {/* Vehicle Type */}
//               <div className="mb-4">
//                 <label className="block mb-2 text-sm font-medium">
//                   Vehicle Type
//                 </label>
//                 <select
//                   value={vehicleType}
//                   onChange={(e) => setVehicleType(e.target.value)}
//                   className="w-full h-12 px-4 bg-gray-100 rounded-lg"
//                 >
//                   <option>Bike</option>
//                   <option>Car</option>
//                   <option>Truck</option>
//                   <option>Others</option>
//                 </select>
//                 {vehicleType === "Others" && (
//                   <input
//                     type="text"
//                     value={customVehicleType}
//                     onChange={(e) => setCustomVehicleType(e.target.value)}
//                     placeholder="Specify vehicle type"
//                     className="w-full h-12 px-4 mt-2 bg-gray-100 rounded-lg"
//                   />
//                 )}
//               </div>

//               {/* Vehicle Model */}
//               <div className="mb-4">
//                 <label className="block mb-2 text-sm font-medium">
//                   Vehicle Model
//                 </label>
//                 <input
//                   type="text"
//                   value={vehicleModel}
//                   onChange={(e) => setVehicleModel(e.target.value)}
//                   placeholder="e.g., Honda Activa, Maruti Swift"
//                   className="w-full h-12 px-4 bg-gray-100 rounded-lg"
//                 />
//                 {errors.vehicleModel && (
//                   <p className="mt-1 text-sm text-red-500">
//                     {errors.vehicleModel}
//                   </p>
//                 )}
//               </div>

//               {/* Notes */}
//               <div className="mb-4">
//                 <label className="block mb-2 text-sm font-medium">
//                   Additional Notes (optional)
//                 </label>
//                 <textarea
//                   value={notes}
//                   onChange={(e) => setNotes(e.target.value)}
//                   className="w-full px-4 py-2 bg-gray-100 rounded-lg"
//                   placeholder="Anything else the provider should know..."
//                 />
//               </div>

//               <button
//                 onClick={handleNext}
//                 className="w-full py-3 mt-4 text-white bg-blue-500 rounded-lg hover:bg-blue-600"
//               >
//                 Next
//               </button>
//             </div>
//           )}

//           {/* Step 2 */}
//           {step === 2 && (
//             <div>
//               <h2 className="mb-6 text-2xl font-bold">Confirm Details</h2>
//               <ul className="mb-6 space-y-1 text-sm sm:text-base">
//                 <li>
//                   Issue: {issueType === "Others" ? customIssue : issueType}
//                 </li>
//                 <li>Location: {location}</li>
//                 <li>Phone: {phoneNumber}</li>
//                 <li>
//                   Vehicle: {vehicleNumber} (
//                   {vehicleType === "Others" ? customVehicleType : vehicleType})
//                 </li>
//                 <li>Model: {vehicleModel}</li>
//                 <li>Notes: {notes || "None"}</li>
//               </ul>
//               <div className="flex justify-between">
//                 <button
//                   onClick={() => setStep(step - 1)}
//                   className="px-6 py-3 text-gray-700 bg-gray-200 rounded-lg"
//                 >
//                   Back
//                 </button>
//                 <button
//                   onClick={handleSubmit}
//                   className="px-6 py-3 text-white bg-green-500 rounded-lg hover:bg-green-600"
//                 >
//                   Submit
//                 </button>
//               </div>
//             </div>
//           )}

//           {/* Step 3 */}
//           {step === 3 && (
//             <div className="text-center">
//               <h2 className="mb-2 text-lg font-semibold">
//                 Finding Nearby Provider...
//               </h2>
//               <p className="mb-6 text-gray-600">
//                 Please wait while we connect you with the nearest available
//                 provider.
//               </p>
//               <div className="w-12 h-12 mx-auto mb-6 border-4 border-blue-600 rounded-full animate-spin border-t-transparent"></div>
//               <button
//                 onClick={() => setStep(4)}
//                 className="w-full py-3 font-bold text-white bg-blue-600 rounded-full hover:bg-blue-700"
//               >
//                 Continue
//               </button>
//             </div>
//           )}

//           {/* Step 4 */}
//           {step === 4 && (
//             <div className="flex flex-col items-center text-center">
//               <Check className="w-16 h-16 mb-4 text-green-500" />
//               <h1 className="mb-2 text-2xl font-bold">Help is on the way!</h1>
//               <p className="mb-6 text-gray-600">
//                 A nearby provider will contact you shortly.
//               </p>
//               <button
//                 onClick={handleBackDashboard}
//                 className="w-full py-3 font-bold text-white bg-blue-600 rounded-full hover:bg-blue-700"
//               >
//                 Back to Dashboard
//               </button>
//             </div>
//           )}
//         </div>
//       </main>
//       <BottomNav />
//     </div>
//   );
// }




// "use client";

// import { useState } from "react";
// import { db } from "@/lib/firebaseConfig";
// import { collection, addDoc, serverTimestamp } from "firebase/firestore";
// import { useRouter } from "next/navigation";
// import LocationPicker from "@/components/LocationPicker";
// import { Check } from "lucide-react";
// import Header from "@/components/Header";
// import BottomNav from "@/components/BottomNav";

// export default function RequestPage() {
//   const [issueType, setIssueType] = useState("Fuel Shortage");
//   const [customIssue, setCustomIssue] = useState("");
//   const [location, setLocation] = useState("");
//   const [phoneNumber, setPhoneNumber] = useState("+91");
//   const [vehicleNumber, setVehicleNumber] = useState("");
//   const [vehicleType, setVehicleType] = useState("Bike");
//   const [customVehicleType, setCustomVehicleType] = useState("");
//   const [vehicleModel, setVehicleModel] = useState("");
//   const [notes, setNotes] = useState("");
//   const [step, setStep] = useState(1);
//   const [errors, setErrors] = useState<Record<string, string>>({});
//   const router = useRouter();

//   // --- Validations ---
//   const validateStep1 = () => {
//     const newErrors: Record<string, string> = {};

//     if (!location) newErrors.location = "Please select location from map";

//     const phoneRegex = /^\+91\d{10}$/;
//     if (!phoneRegex.test(phoneNumber)) {
//       newErrors.phoneNumber = "Enter valid 10-digit phone number with +91";
//     }

//     const vehicleRegex = /^[A-Z]{2}\d{2}[A-Z]{1,2}\d{4}$/;
//     if (!vehicleNumber || !vehicleRegex.test(vehicleNumber)) {
//       newErrors.vehicleNumber =
//         "Enter valid vehicle number (e.g., MH12AB1234)";
//     }

//     if (!vehicleModel) {
//       newErrors.vehicleModel = "Enter vehicle model";
//     }

//     return newErrors;
//   };

//   const handleNext = () => {
//     if (step === 1) {
//       const validationErrors = validateStep1();
//       if (Object.keys(validationErrors).length > 0) {
//         setErrors(validationErrors);
//         return;
//       }
//     }
//     setStep(step + 1);
//     setErrors({});
//   };

//   const handleSubmit = async () => {
//     try {
//       await addDoc(collection(db, "requests"), {
//         issueType: issueType === "Others" ? customIssue : issueType,
//         location,
//         phoneNumber,
//         vehicleNumber,
//         vehicleType: vehicleType === "Others" ? customVehicleType : vehicleType,
//         vehicleModel,
//         notes,
//         status: "Pending",
//         createdAt: serverTimestamp(),
//       });
//       setStep(3);
//     } catch (error) {
//       console.error("Error adding document: ", error);
//     }
//   };

//   const handleBackDashboard = () => {
//     router.push("/user/dashboard");
//   };

//   // --- Handle phone input ---
//   const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     let value = e.target.value.replace(/\D/g, ""); // remove non-numeric
//     if (value.startsWith("91")) value = value.slice(2); // strip duplicate 91
//     if (value.length > 10) value = value.slice(0, 10); // max 10 digits
//     setPhoneNumber("+91" + value);
//   };

//   return (
//     <div className="flex flex-col min-h-screen bg-gray-50">
//       {/* Fixed Header */}
//       <div className="fixed top-0 left-0 right-0 z-50">
//         <Header />
//       </div>

//       {/* Main Content */}
//       <main className="flex-1 px-4 pt-20 pb-20 overflow-y-auto sm:px-6">
//         <div className="w-full max-w-lg p-6 mx-auto bg-white shadow-lg sm:p-8 rounded-xl">
//           {/* Progress bar */}
//           <div className="flex items-center justify-between mb-8">
//             {[1, 2, 3, 4].map((num) => (
//               <div key={num} className="flex items-center flex-1">
//                 <div
//                   className={`rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold ${
//                     step >= num ? "bg-blue-500 text-white" : "bg-gray-200"
//                   }`}
//                 >
//                   {num}
//                 </div>
//                 {num < 4 && (
//                   <div
//                     className={`flex-1 h-1 ${
//                       step > num ? "bg-blue-500" : "bg-gray-200"
//                     }`}
//                   />
//                 )}
//               </div>
//             ))}
//           </div>

//           {/* Step 1 */}
//           {step === 1 && (
//             <div>
//               <h2 className="mb-6 text-2xl font-bold">Report an Issue</h2>

//               {/* Issue Type */}
//               <div className="mb-4">
//                 <label className="block mb-2 text-sm font-medium">
//                   Issue Type
//                 </label>
//                 <select
//                   value={issueType}
//                   onChange={(e) => setIssueType(e.target.value)}
//                   className="w-full h-12 px-4 bg-gray-100 rounded-lg"
//                 >
//                   <option>Fuel Shortage</option>
//                   <option>Flat Tyre</option>
//                   <option>Engine Breakdown</option>
//                   <option>Others</option>
//                 </select>
//                 {issueType === "Others" && (
//                   <input
//                     type="text"
//                     value={customIssue}
//                     onChange={(e) => setCustomIssue(e.target.value)}
//                     placeholder="Specify your issue"
//                     className="w-full h-12 px-4 mt-2 bg-gray-100 rounded-lg"
//                   />
//                 )}
//               </div>

//               {/* Location */}
//               <div className="mb-4">
//                 <label className="block mb-2 text-sm font-medium">Location</label>
//                 <LocationPicker
//                   value={location}
//                   onChange={(coords) => setLocation(coords)}
//                 />
//                 <p className="mt-2 text-sm text-gray-600">
//                   Selected:{" "}
//                   {location
//                     ? location
//                         .split(",")
//                         .map((coord) => parseFloat(coord).toFixed(6))
//                         .join(", ")
//                     : "Click on map or use button to select"}
//                 </p>
//                 {errors.location && (
//                   <p className="mt-1 text-sm text-red-500">{errors.location}</p>
//                 )}
//               </div>

//               {/* Phone Number */}
//               <div className="mb-4">
//                 <label className="block mb-2 text-sm font-medium">
//                   Phone Number
//                 </label>
//                 <input
//                   type="tel"
//                   value={phoneNumber}
//                   onChange={handlePhoneChange}
//                   placeholder="+91XXXXXXXXXX"
//                   className="w-full h-12 px-4 bg-gray-100 rounded-lg"
//                 />
//                 {errors.phoneNumber && (
//                   <p className="mt-1 text-sm text-red-500">
//                     {errors.phoneNumber}
//                   </p>
//                 )}
//               </div>

//               {/* Vehicle Number */}
//               <div className="mb-4">
//                 <label className="block mb-2 text-sm font-medium">
//                   Vehicle Number
//                 </label>
//                 <input
//                   type="text"
//                   value={vehicleNumber}
//                   onChange={(e) =>
//                     setVehicleNumber(e.target.value.toUpperCase())
//                   }
//                   placeholder="e.g., MH12AB1234"
//                   className="w-full h-12 px-4 bg-gray-100 rounded-lg"
//                 />
//                 {errors.vehicleNumber && (
//                   <p className="mt-1 text-sm text-red-500">
//                     {errors.vehicleNumber}
//                   </p>
//                 )}
//               </div>

//               {/* Vehicle Type */}
//               <div className="mb-4">
//                 <label className="block mb-2 text-sm font-medium">
//                   Vehicle Type
//                 </label>
//                 <select
//                   value={vehicleType}
//                   onChange={(e) => setVehicleType(e.target.value)}
//                   className="w-full h-12 px-4 bg-gray-100 rounded-lg"
//                 >
//                   <option>Bike</option>
//                   <option>Car</option>
//                   <option>Truck</option>
//                   <option>Others</option>
//                 </select>
//                 {vehicleType === "Others" && (
//                   <input
//                     type="text"
//                     value={customVehicleType}
//                     onChange={(e) => setCustomVehicleType(e.target.value)}
//                     placeholder="Specify vehicle type"
//                     className="w-full h-12 px-4 mt-2 bg-gray-100 rounded-lg"
//                   />
//                 )}
//               </div>

//               {/* Vehicle Model */}
//               <div className="mb-4">
//                 <label className="block mb-2 text-sm font-medium">
//                   Vehicle Model
//                 </label>
//                 <input
//                   type="text"
//                   value={vehicleModel}
//                   onChange={(e) => setVehicleModel(e.target.value)}
//                   placeholder="e.g., Honda Activa, Maruti Swift"
//                   className="w-full h-12 px-4 bg-gray-100 rounded-lg"
//                 />
//                 {errors.vehicleModel && (
//                   <p className="mt-1 text-sm text-red-500">
//                     {errors.vehicleModel}
//                   </p>
//                 )}
//               </div>

//               {/* Notes */}
//               <div className="mb-4">
//                 <label className="block mb-2 text-sm font-medium">
//                   Additional Notes (optional)
//                 </label>
//                 <textarea
//                   value={notes}
//                   onChange={(e) => setNotes(e.target.value)}
//                   className="w-full px-4 py-2 bg-gray-100 rounded-lg"
//                   placeholder="Anything else the provider should know..."
//                 />
//               </div>

//               <button
//                 onClick={handleNext}
//                 className="w-full py-3 mt-4 text-white bg-blue-500 rounded-lg hover:bg-blue-600"
//               >
//                 Next
//               </button>
//             </div>
//           )}

//           {/* Step 2 */}
//           {step === 2 && (
//             <div>
//               <h2 className="mb-6 text-2xl font-bold">Confirm Details</h2>
//               <ul className="mb-6 space-y-1 text-sm sm:text-base">
//                 <li>
//                   Issue: {issueType === "Others" ? customIssue : issueType}
//                 </li>
//                 <li>Location: {location}</li>
//                 <li>Phone: {phoneNumber}</li>
//                 <li>
//                   Vehicle: {vehicleNumber} (
//                   {vehicleType === "Others" ? customVehicleType : vehicleType})
//                 </li>
//                 <li>Model: {vehicleModel}</li>
//                 <li>Notes: {notes || "None"}</li>
//               </ul>
//               <div className="flex justify-between">
//                 <button
//                   onClick={() => setStep(step - 1)}
//                   className="px-6 py-3 text-gray-700 bg-gray-200 rounded-lg"
//                 >
//                   Back
//                 </button>
//                 <button
//                   onClick={handleSubmit}
//                   className="px-6 py-3 text-white bg-green-500 rounded-lg hover:bg-green-600"
//                 >
//                   Submit
//                 </button>
//               </div>
//             </div>
//           )}

//           {/* Step 3 */}
//           {step === 3 && (
//             <div className="text-center">
//               <h2 className="mb-2 text-lg font-semibold">
//                 Finding Nearby Provider...
//               </h2>
//               <p className="mb-6 text-gray-600">
//                 Please wait while we connect you with the nearest available
//                 provider.
//               </p>
//               <div className="w-12 h-12 mx-auto mb-6 border-4 border-blue-600 rounded-full animate-spin border-t-transparent"></div>
//               <button
//                 onClick={() => setStep(4)}
//                 className="w-full py-3 font-bold text-white bg-blue-600 rounded-full hover:bg-blue-700"
//               >
//                 Continue
//               </button>
//             </div>
//           )}

//           {/* Step 4 */}
//           {step === 4 && (
//             <div className="flex flex-col items-center text-center">
//               <Check className="w-16 h-16 mb-4 text-green-500" />
//               <h1 className="mb-2 text-2xl font-bold">Help is on the way!</h1>
//               <p className="mb-6 text-gray-600">
//                 A nearby provider will contact you shortly.
//               </p>
//               <button
//                 onClick={handleBackDashboard}
//                 className="w-full py-3 font-bold text-white bg-blue-600 rounded-full hover:bg-blue-700"
//               >
//                 Back to Dashboard
//               </button>
//             </div>
//           )}
//         </div>
//       </main>

//       {/* Fixed BottomNav */}
//       <div className="fixed bottom-0 left-0 right-0 z-50">
//         <BottomNav />
//       </div>
//     </div>
//   );
// }





// Very Importan
// "use client";

// import React, {
//   useEffect,
//   useLayoutEffect,
//   useRef,
//   useState,
//   CSSProperties,
// } from "react";
// import { db } from "@/lib/firebaseConfig";
// import { collection, addDoc, serverTimestamp } from "firebase/firestore";
// import { useRouter } from "next/navigation";
// import LocationPicker from "@/components/LocationPicker";
// import { Check } from "lucide-react";
// import Header from "@/components/Header";
// import BottomNav from "@/components/BottomNav";
// import { auth } from "@/lib/firebaseConfig"; // add auth import


// export default function RequestPage() {

//   const [issueType, setIssueType] = useState("Fuel Shortage");
//   const [customIssue, setCustomIssue] = useState("");
//   const [location, setLocation] = useState("");
//   const [phoneNumber, setPhoneNumber] = useState("+91");
//   const [vehicleNumber, setVehicleNumber] = useState("");
//   const [vehicleType, setVehicleType] = useState("Bike");
//   const [customVehicleType, setCustomVehicleType] = useState("");
//   const [vehicleModel, setVehicleModel] = useState("");
//   const [notes, setNotes] = useState("");
//   const [step, setStep] = useState(1);
//   const [errors, setErrors] = useState<Record<string, string>>({});
//   const router = useRouter();

//   // Refs to measure header and bottom nav heights
//   const headerWrapRef = useRef<HTMLDivElement | null>(null);
//   const bottomWrapRef = useRef<HTMLDivElement | null>(null);

//   const [headerHeight, setHeaderHeight] = useState<number>(120); // sensible fallback
//  const [bottomHeight, setBottomHeight] = useState<number>(72); // sensible fallback

//   // Measure header & bottom nav heights on mount and resize
//   useLayoutEffect(() => {
//   <div ref={headerWrapRef} className="fixed top-0 left-0 right-0 z-50" role="banner" aria-hidden={false}>
//   <Header />
// </div>
//     function measure() {
//       const h = headerWrapRef.current?.offsetHeight ?? headerHeight;
//       const b = bottomWrapRef.current?.offsetHeight ?? bottomHeight;
//       setHeaderHeight(h);
//       setBottomHeight(b);
//     }

//     measure();
//     window.addEventListener("resize", measure);
//     return () => window.removeEventListener("resize", measure);
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, []);

//   // Normalize phone and vehicle input handling
//   const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     // Keep only digits, limit to 10, always prefix +91
//     let digits = e.target.value.replace(/\D/g, "");
//     // If user types leading 91, strip it so we only keep the 10 local digits
//     if (digits.startsWith("91")) digits = digits.slice(2);
//     digits = digits.slice(0, 10);
//     setPhoneNumber("+91" + digits);
//   };

//   const handleVehicleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     // Uppercase and remove spaces/hyphens for validation and storage
//     const raw = e.target.value.toUpperCase();
//     const normalized = raw.replace(/[\s-]+/g, "");
//     setVehicleNumber(normalized);
//   };

//   // Validation (accepts normalized plate like MH12AB1234)
//   const validateStep1 = () => {
//     const newErrors: Record<string, string> = {};
//     if (!location) newErrors.location = "Please select location from map";

//     const phoneRegex = /^\+91\d{10}$/;
//     if (!phoneRegex.test(phoneNumber)) {
//       newErrors.phoneNumber = "Enter valid 10-digit phone number with +91";
//     }

//     // Vehicle plate: 2 letters, 2 digits, 1-2 letters, 4 digits (no spaces)
//     const vehicleRegex = /^[A-Z]{2}\d{2}[A-Z]{1,2}\d{4}$/;
//     if (!vehicleNumber || !vehicleRegex.test(vehicleNumber)) {
//       newErrors.vehicleNumber = "Enter valid vehicle number (e.g., MH12AB1234)";
//     }

//     if (!vehicleModel) {
//       newErrors.vehicleModel = "Enter vehicle model";
//     }

//     return newErrors;
//   };

//   const handleNext = () => {
//     if (step === 1) {
//       const validationErrors = validateStep1();
//       if (Object.keys(validationErrors).length > 0) {
//         setErrors(validationErrors);
//         return;
//       }
//     }
//     setStep((s) => s + 1);
//     setErrors({});
//   };

//   const handleSubmit = async () => {
//   console.log("Submitting new request…");
//   try {
//     const user = auth.currentUser;
//     console.log("Current user:", user);

//     const [lat, lng] = location ? location.split(",").map((c) => parseFloat(c.trim())) : [null, null];
//     if (!lat || !lng) {
//       alert("Please select a valid location");
//       return;
//     }

//     await addDoc(collection(db, "requests"), {
//       issueType: issueType === "Others" ? customIssue : issueType,
//       location: { lat, lng },
//       phoneNumber,
//       vehicleNumber,
//       vehicleType: vehicleType === "Others" ? customVehicleType : vehicleType,
//       vehicleModel,
//       notes,
//       status: "Pending",
//       createdAt: serverTimestamp(),
//       userName: user?.displayName || "Not provided",
//       email: user?.email || "Not provided",
//       uid: user?.uid || null,
//     });

//     console.log("✅ Request saved successfully");
//     setStep(3);
//   } catch (error: any) {
//     console.error("❌ Error adding document:", error.code, error.message);
//     alert(`Failed to save request: ${error.message}`);
//   }
// };


//  const handleBackDashboard = () => {
//   router.push("/user"); // points to user/page.tsx
// };


//   // Styles: apply dynamic padding from measured header & bottom heights
//   const mainStyle: CSSProperties = {
//     paddingTop: headerHeight + 16, // header + small gap
//     paddingBottom: bottomHeight + 16, // bottom + small gap
//   };

//   // Card maxHeight so content doesn't grow under header/bottom — it will scroll internally
//   const cardMaxHeight = `calc(100vh - ${headerHeight + bottomHeight + 48}px)`;

//   return (
//     <div className="flex flex-col min-h-screen bg-gray-50">
//       {/* Fixed header wrapper (measured) */}
//       <div
//         ref={headerWrapRef}
//         className="fixed top-0 left-0 right-0 z-50"
//         role="banner"
//         aria-hidden={false}
//       >
//         <Header />
//       </div>

//       {/* Main content area: uses dynamic padding to avoid being overlapped */}
//       <main
//         className="flex-1 w-full px-4 overflow-y-auto sm:px-6"
//         style={mainStyle}
//       >
//         <div
//           className="w-full max-w-lg p-6 mx-auto bg-white shadow-lg rounded-xl sm:p-8"
//           // make the card scroll internally if it becomes taller than available space
//           style={{ maxHeight: cardMaxHeight, overflowY: "auto" }}
//         >
//           {/* Progress bar */}
//           <div className="flex items-center justify-between mb-6">
//             {[1, 2, 3, 4].map((num) => (
//               <div key={num} className="flex items-center flex-1">
//                 <div
//                   className={`rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold ${
//                     step >= num ? "bg-blue-500 text-white" : "bg-gray-200"
//                   }`}
//                 >
//                   {num}
//                 </div>
//                 {num < 4 && (
//                   <div
//                     className={`flex-1 h-1 ${
//                       step > num ? "bg-blue-500" : "bg-gray-200"
//                     }`}
//                   />
//                 )}
//               </div>
//             ))}
//           </div>

//           {/* Steps */}
//           {step === 1 && (
//             <>
//               <h2 className="mb-6 text-2xl font-bold">Report an Issue</h2>

//               {/* Issue Type */}
//               <div className="mb-4">
//                 <label className="block mb-2 text-sm font-medium">
//                   Issue Type
//                 </label>
//                 <select
//                   value={issueType}
//                   onChange={(e) => setIssueType(e.target.value)}
//                   className="w-full h-12 px-4 bg-gray-100 rounded-lg"
//                 >
//                   <option>Fuel Shortage</option>
//                   <option>Flat Tyre</option>
//                   <option>Engine Breakdown</option>
//                   <option>Others</option>
//                 </select>
//                 {issueType === "Others" && (
//                   <input
//                     type="text"
//                     value={customIssue}
//                     onChange={(e) => setCustomIssue(e.target.value)}
//                     placeholder="Specify your issue"
//                     className="w-full h-12 px-4 mt-2 bg-gray-100 rounded-lg"
//                     aria-label="Specify other issue"
//                   />
//                 )}
//               </div>

//               {/* Location */}
//               <div className="mb-4">
//                 <label className="block mb-2 text-sm font-medium">Location</label>
//                 <div className="overflow-hidden border border-gray-100 rounded-lg">
//                   {/* Map container: responsive height */}
//                   <div className="h-64 sm:h-72 md:h-80">
//                     <LocationPicker
//                       value={location}
//                       onChange={(coords) => setLocation(coords)}
//                     />
//                   </div>
//                 </div>

//                 <p className="mt-2 text-sm text-gray-600">
//                   Selected:{" "}
//                   {location
//                     ? location
//                         .split(",")
//                         .map((coord) => parseFloat(coord).toFixed(6))
//                         .join(", ")
//                     : "Click on map or use button to select"}
//                 </p>
//                 {errors.location && (
//                   <p className="mt-1 text-sm text-red-500">{errors.location}</p>
//                 )}
//               </div>

//               {/* Phone Number */}
//               <div className="mb-4">
//                 <label className="block mb-2 text-sm font-medium">
//                   Phone Number
//                 </label>
//                 <input
//                   type="tel"
//                   inputMode="numeric"
//                   value={phoneNumber}
//                   onChange={handlePhoneChange}
//                   placeholder="+91XXXXXXXXXX"
//                   className="w-full h-12 px-4 bg-gray-100 rounded-lg"
//                   aria-label="Phone number"
//                 />
//                 {errors.phoneNumber && (
//                   <p className="mt-1 text-sm text-red-500">
//                     {errors.phoneNumber}
//                   </p>
//                 )}
//               </div>

//               {/* Vehicle Number */}
//               <div className="mb-4">
//                 <label className="block mb-2 text-sm font-medium">
//                   Vehicle Number
//                 </label>
//                 <input
//                   type="text"
//                   value={vehicleNumber}
//                   onChange={handleVehicleChange}
//                   placeholder="e.g., MH12AB1234"
//                   className="w-full h-12 px-4 bg-gray-100 rounded-lg"
//                   aria-label="Vehicle number"
//                 />
//                 <p className="mt-1 text-xs text-gray-400">
//                   You can type with spaces (MH 12 AB 1234) or with dash — we normalize it.
//                 </p>
//                 {errors.vehicleNumber && (
//                   <p className="mt-1 text-sm text-red-500">
//                     {errors.vehicleNumber}
//                   </p>
//                 )}
//               </div>

//               {/* Vehicle Type */}
//               <div className="mb-4">
//                 <label className="block mb-2 text-sm font-medium">
//                   Vehicle Type
//                 </label>
//                 <select
//                   value={vehicleType}
//                   onChange={(e) => setVehicleType(e.target.value)}
//                   className="w-full h-12 px-4 bg-gray-100 rounded-lg"
//                 >
//                   <option>Bike</option>
//                   <option>Car</option>
//                   <option>Truck</option>
//                   <option>Others</option>
//                 </select>
//                 {vehicleType === "Others" && (
//                   <input
//                     type="text"
//                     value={customVehicleType}
//                     onChange={(e) => setCustomVehicleType(e.target.value)}
//                     placeholder="Specify vehicle type"
//                     className="w-full h-12 px-4 mt-2 bg-gray-100 rounded-lg"
//                   />
//                 )}
//               </div>

//               {/* Vehicle Model */}
//               <div className="mb-4">
//                 <label className="block mb-2 text-sm font-medium">
//                   Vehicle Model
//                 </label>
//                 <input
//                   type="text"
//                   value={vehicleModel}
//                   onChange={(e) => setVehicleModel(e.target.value)}
//                   placeholder="e.g., Honda Activa, Maruti Swift"
//                   className="w-full h-12 px-4 bg-gray-100 rounded-lg"
//                 />
//                 {errors.vehicleModel && (
//                   <p className="mt-1 text-sm text-red-500">
//                     {errors.vehicleModel}
//                   </p>
//                 )}
//               </div>

//               {/* Notes */}
//               <div className="mb-4">
//                 <label className="block mb-2 text-sm font-medium">
//                   Additional Notes (optional)
//                 </label>
//                 <textarea
//                   value={notes}
//                   onChange={(e) => setNotes(e.target.value)}
//                   className="w-full px-4 py-2 bg-gray-100 rounded-lg"
//                   placeholder="Anything else the provider should know..."
//                 />
//               </div>

//               <button
//                 onClick={handleNext}
//                 className="w-full py-3 mt-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600"
//               >
//                 Next
//               </button>
//             </>
//           )}

//           {step === 2 && (
//             <>
//               <h2 className="mb-6 text-2xl font-bold">Confirm Details</h2>
//               <ul className="mb-6 space-y-1 text-sm list-none sm:text-base">
//                 <li>
//                   <span className="font-semibold">Issue:</span>{" "}
//                   {issueType === "Others" ? customIssue : issueType}
//                 </li>
//                 <li>
//                   <span className="font-semibold">Location:</span> {location}
//                 </li>
//                 <li>
//                   <span className="font-semibold">Phone:</span> {phoneNumber}
//                 </li>
//                 <li>
//                   <span className="font-semibold">Vehicle:</span> {vehicleNumber} (
//                   {vehicleType === "Others" ? customVehicleType : vehicleType})
//                 </li>
//                 <li>
//                   <span className="font-semibold">Model:</span> {vehicleModel}
//                 </li>
//                 <li>
//                   <span className="font-semibold">Notes:</span> {notes || "None"}
//                 </li>
//               </ul>

//               <div className="flex gap-3">
//                 <button
//                   onClick={() => setStep((s) => Math.max(1, s - 1))}
//                   className="flex-1 px-6 py-3 text-gray-700 bg-gray-200 rounded-lg"
//                 >
//                   Back
//                 </button>
//                 <button
//                   onClick={handleSubmit}
//                   className="flex-1 px-6 py-3 text-white bg-green-500 rounded-lg hover:bg-green-600"
//                 >
//                   Submit
//                 </button>
//               </div>
//             </>
//           )}

//           {step === 3 && (
//             <div className="text-center">
//               <h2 className="mb-2 text-lg font-semibold">
//                 Finding Nearby Provider...
//               </h2>
//               <p className="mb-6 text-gray-600">
//                 Please wait while we connect you with the nearest available
//                 provider.
//               </p>
//               <div className="w-12 h-12 mx-auto mb-6 border-4 border-blue-600 rounded-full animate-spin border-t-transparent" />
//               <button
//                 onClick={() => setStep(4)}
//                 className="w-full py-3 font-bold text-white bg-blue-600 rounded-full hover:bg-blue-700"
//               >
//                 Continue
//               </button>
//             </div>
//           )}

//           {step === 4 && (
//             <div className="flex flex-col items-center text-center">
//               <Check className="w-16 h-16 mb-4 text-green-500" />
//               <h1 className="mb-2 text-2xl font-bold">Help is on the way!</h1>
//               <p className="mb-6 text-gray-600">
//                 A nearby provider will contact you shortly.
//               </p>
//               <button
//                 onClick={handleBackDashboard}
//                 className="w-full py-3 font-bold text-white bg-blue-600 rounded-full hover:bg-blue-700"
//               >
//                 Back to Dashboard
//               </button>
//             </div>
//           )}
//         </div>
//       </main>

//       {/* Fixed bottom nav wrapper (measured) */}
//       <div
//         ref={bottomWrapRef}
//         className="fixed bottom-0 left-0 right-0 z-50"
//         role="navigation"
//       >
//         <BottomNav />
//       </div>
//     </div>
//   );
// }













///Reall imp
// "use client";

// import React, {
//   useEffect,
//   useLayoutEffect,
//   useRef,
//   useState,
//   CSSProperties,
// } from "react";
// import { db } from "@/lib/firebaseConfig";
// import { collection, addDoc, serverTimestamp } from "firebase/firestore";
// import { useRouter } from "next/navigation";
// import LocationPicker from "@/components/LocationPicker";
// import { Check } from "lucide-react";
// import Header from "@/components/Header";
// import BottomNav from "@/components/BottomNav";
// import { auth } from "@/lib/firebaseConfig"; // add auth import

// // Custom Checkbox Dropdown Component
// // This component simulates a multi-select dropdown using checkboxes.
// // The `options` prop is an array of strings, and `value` is an array of selected strings.
// const CheckboxDropdown = ({
//   label,
//   options,
//   value,
//   onChange,
//   className,
// }: {
//   label: string;
//   options: string[];
//   value: string[];
//   onChange: (newValue: string[]) => void;
//   className?: string;
// }) => {
//   const [isOpen, setIsOpen] = useState(false);
//   const dropdownRef = useRef<HTMLDivElement>(null);

//   const handleCheckboxChange = (option: string, isChecked: boolean) => {
//     if (isChecked) {
//       onChange([...value, option]);
//     } else {
//       onChange(value.filter((item) => item !== option));
//     }
//   };

//   const handleClickOutside = (event: MouseEvent) => {
//     if (
//       dropdownRef.current &&
//       !dropdownRef.current.contains(event.target as Node)
//     ) {
//       setIsOpen(false);
//     }
//   };

//   useEffect(() => {
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, []);

//   return (
//     <div className={`relative ${className}`} ref={dropdownRef}>
//       <button
//         type="button"
//         className="w-full h-12 px-4 text-left bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//         onClick={() => setIsOpen(!isOpen)}
//       >
//         {value.length > 0 ? value.join(", ") : label}
//       </button>
//       {isOpen && (
//         <div className="absolute z-10 w-full mt-1 bg-white border border-gray-200 rounded-lg shadow-lg">
//           {options.map((option) => (
//             <label
//               key={option}
//               className="flex items-center p-2 cursor-pointer hover:bg-gray-50"
//             >
//               <input
//                 type="checkbox"
//                 checked={value.includes(option)}
//                 onChange={(e) =>
//                   handleCheckboxChange(option, e.target.checked)
//                 }
//                 className="mr-2 text-blue-500 rounded focus:ring-blue-500"
//               />
//               {option}
//             </label>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default function RequestPage() {
//   const [issueType, setIssueType] = useState<string[]>([]);
//   const [customIssue, setCustomIssue] = useState("");
//   const [location, setLocation] = useState("");
//   const [phoneNumber, setPhoneNumber] = useState("+91");
//   const [vehicleNumber, setVehicleNumber] = useState("");
//   const [vehicleType, setVehicleType] = useState<string[]>([]);
//   const [customVehicleType, setCustomVehicleType] = useState("");
//   const [vehicleModel, setVehicleModel] = useState("");
//   const [carSeater, setCarSeater] = useState<string[]>([]);
//   const [notes, setNotes] = useState("");
//   const [step, setStep] = useState(1);
//   const [errors, setErrors] = useState<Record<string, string>>({});
//   const router = useRouter();

//   const isBookCabSelected = issueType.includes("Book a Cab/Bike");
//   const isCarSelected = vehicleType.includes("Car");

//   // Refs to measure header and bottom nav heights
//   const headerWrapRef = useRef<HTMLDivElement | null>(null);
//   const bottomWrapRef = useRef<HTMLDivElement | null>(null);

//   const [headerHeight, setHeaderHeight] = useState<number>(120); // sensible fallback
//   const [bottomHeight, setBottomHeight] = useState<number>(72); // sensible fallback

//   // Measure header & bottom nav heights on mount and resize
//   useLayoutEffect(() => {
//     function measure() {
//       const h = headerWrapRef.current?.offsetHeight ?? headerHeight;
//       const b = bottomWrapRef.current?.offsetHeight ?? bottomHeight;
//       setHeaderHeight(h);
//       setBottomHeight(b);
//     }

//     measure();
//     window.addEventListener("resize", measure);
//     return () => window.removeEventListener("resize", measure);
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, []);

//   // Normalize phone and vehicle input handling
//   const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     // Keep only digits, limit to 10, always prefix +91
//     let digits = e.target.value.replace(/\D/g, "");
//     // If user types leading 91, strip it so we only keep the 10 local digits
//     if (digits.startsWith("91")) digits = digits.slice(2);
//     digits = digits.slice(0, 10);
//     setPhoneNumber("+91" + digits);
//   };

//   const handleVehicleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     // Uppercase and remove spaces/hyphens for validation and storage
//     const raw = e.target.value.toUpperCase();
//     const normalized = raw.replace(/[\s-]+/g, "");
//     setVehicleNumber(normalized);
//   };

//   // Validation (accepts normalized plate like MH12AB1234)
//   const validateStep1 = () => {
//     const newErrors: Record<string, string> = {};
//     if (!location) newErrors.location = "Please select location from map";

//     const phoneRegex = /^\+91\d{10}$/;
//     if (!phoneRegex.test(phoneNumber)) {
//       newErrors.phoneNumber = "Enter valid 10-digit phone number with +91";
//     }

//     // Vehicle plate: 2 letters, 2 digits, 1-2 letters, 4 digits (no spaces)
//     const vehicleRegex = /^[A-Z]{2}\d{2}[A-Z]{1,2}\d{4}$/;
//     if (!vehicleNumber || !vehicleRegex.test(vehicleNumber)) {
//       newErrors.vehicleNumber = "Enter valid vehicle number (e.g., MH12AB1234)";
//     }

//     if (!vehicleModel) {
//       newErrors.vehicleModel = "Enter vehicle model";
//     }
    
//     // Check if at least one issue type is selected
//     if (issueType.length === 0) {
//       newErrors.issueType = "Please select at least one issue type.";
//     }

//     // Check if at least one vehicle type is selected
//     if (vehicleType.length === 0) {
//       newErrors.vehicleType = "Please select at least one vehicle type.";
//     }
    
//     // Conditional validation for nested dropdowns
//     if (isBookCabSelected) {
//         if (vehicleType.length === 0) {
//             newErrors.vehicleType = "Please select a vehicle type for cab booking.";
//         } else if (isCarSelected && carSeater.length === 0) {
//             newErrors.carSeater = "Please select a seater option for the car.";
//         }
//     }
    

//     return newErrors;
//   };

//   const handleNext = () => {
//     if (step === 1) {
//       const validationErrors = validateStep1();
//       if (Object.keys(validationErrors).length > 0) {
//         setErrors(validationErrors);
//         return;
//       }
//     }
//     setStep((s) => s + 1);
//     setErrors({});
//   };

//   const handleSubmit = async () => {
//     console.log("Submitting new request…");
//     try {
//       const user = auth.currentUser;
//       console.log("Current user:", user);

//       const [lat, lng] = location
//         ? location.split(",").map((c) => parseFloat(c.trim()))
//         : [null, null];
//       if (!lat || !lng) {
//         alert("Please select a valid location");
//         return;
//       }
      
//       // Construct the data to be saved to Firestore
//       const requestData: Record<string, any> = {
//         issueType: issueType.includes("Others")
//           ? [...issueType.filter((t) => t !== "Others"), customIssue]
//           : issueType,
//         location: { lat, lng },
//         phoneNumber,
//         vehicleNumber,
//         vehicleType: vehicleType.includes("Others")
//           ? [...vehicleType.filter((t) => t !== "Others"), customVehicleType]
//           : vehicleType,
//         vehicleModel,
//         notes,
//         status: "Pending",
//         createdAt: serverTimestamp(),
//         userName: user?.displayName || "Not provided",
//         email: user?.email || "Not provided",
//         uid: user?.uid || null,
//       };

//       // Add carSeater to the request data if applicable
//       if (isCarSelected) {
//         requestData.carSeater = carSeater;
//       }


//       await addDoc(collection(db, "requests"), requestData);

//       console.log("✅ Request saved successfully");
//       setStep(3);
//     } catch (error: any) {
//       console.error("❌ Error adding document:", error.code, error.message);
//       alert(`Failed to save request: ${error.message}`);
//     }
//   };

//   const handleBackDashboard = () => {
//     router.push("/user"); // points to user/page.tsx
//   };

//   // Styles: apply dynamic padding from measured header & bottom heights
//   const mainStyle: CSSProperties = {
//     paddingTop: headerHeight + 16, // header + small gap
//     paddingBottom: bottomHeight + 16, // bottom + small gap
//   };

//   // Card maxHeight so content doesn't grow under header/bottom — it will scroll internally
//   const cardMaxHeight = `calc(100vh - ${headerHeight + bottomHeight + 48}px)`;

//   return (
//     <div className="flex flex-col min-h-screen bg-gray-50">
//       {/* Fixed header wrapper (measured) */}
//       <div
//         ref={headerWrapRef}
//         className="fixed top-0 left-0 right-0 z-50"
//         role="banner"
//         aria-hidden={false}
//       >
//         <Header />
//       </div>

//       {/* Main content area: uses dynamic padding to avoid being overlapped */}
//       <main
//         className="flex-1 w-full px-4 overflow-y-auto sm:px-6"
//         style={mainStyle}
//       >
//         <div
//           className="w-full max-w-lg p-6 mx-auto bg-white shadow-lg rounded-xl sm:p-8"
//           // make the card scroll internally if it becomes taller than available space
//           style={{ maxHeight: cardMaxHeight, overflowY: "auto" }}
//         >
//           {/* Progress bar */}
//           <div className="flex items-center justify-between mb-6">
//             {[1, 2, 3, 4].map((num) => (
//               <div key={num} className="flex items-center flex-1">
//                 <div
//                   className={`rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold ${
//                     step >= num ? "bg-blue-500 text-white" : "bg-gray-200"
//                   }`}
//                 >
//                   {num}
//                 </div>
//                 {num < 4 && (
//                   <div
//                     className={`flex-1 h-1 ${
//                       step > num ? "bg-blue-500" : "bg-gray-200"
//                     }`}
//                   />
//                 )}
//               </div>
//             ))}
//           </div>

//           {/* Steps */}
//           {step === 1 && (
//             <>
//               <h2 className="mb-6 text-2xl font-bold">Report an Issue</h2>

//               {/* Issue Type */}
//               <div className="mb-4">
//                 <label className="block mb-2 text-sm font-medium">
//                   Issue Type
//                 </label>
//                 <CheckboxDropdown
//                   label="Select issue types"
//                   options={[
//                     "Fuel Shortage",
//                     "Flat Tyre",
//                     "Engine Breakdown",
//                     "Book a Cab/Bike",
//                     "Others",
//                   ]}
//                   value={issueType}
//                   onChange={setIssueType}
//                 />
//                 {issueType.includes("Others") && (
//                   <input
//                     type="text"
//                     value={customIssue}
//                     onChange={(e) => setCustomIssue(e.target.value)}
//                     placeholder="Specify your issue"
//                     className="w-full h-12 px-4 mt-2 bg-gray-100 rounded-lg"
//                     aria-label="Specify other issue"
//                   />
//                 )}
//                 {errors.issueType && (
//                   <p className="mt-1 text-sm text-red-500">
//                     {errors.issueType}
//                   </p>
//                 )}
//               </div>

//               {/* Conditional Vehicle Type Dropdown */}
//               {isBookCabSelected && (
//                 <div className="mb-4">
//                   <label className="block mb-2 text-sm font-medium">
//                     Vehicle Type
//                   </label>
//                   <CheckboxDropdown
//                     label="Select vehicle types"
//                     options={["Car", "Bike"]}
//                     value={vehicleType}
//                     onChange={setVehicleType}
//                   />
//                   {errors.vehicleType && (
//                   <p className="mt-1 text-sm text-red-500">
//                     {errors.vehicleType}
//                   </p>
//                 )}
//                 </div>
//               )}

//               {/* Conditional Car Seater Dropdown */}
//               {isBookCabSelected && isCarSelected && (
//                 <div className="mb-4">
//                   <label className="block mb-2 text-sm font-medium">
//                     Car Seater
//                   </label>
//                   <CheckboxDropdown
//                     label="Select seater options"
//                     options={["4 Seater", "6 Seater", "7 Seater"]}
//                     value={carSeater}
//                     onChange={setCarSeater}
//                   />
//                   {errors.carSeater && (
//                   <p className="mt-1 text-sm text-red-500">
//                     {errors.carSeater}
//                   </p>
//                 )}
//                 </div>
//               )}
              
//               {!isBookCabSelected && (
//                 <div className="mb-4">
//                   <label className="block mb-2 text-sm font-medium">
//                     Vehicle Type
//                   </label>
//                   <CheckboxDropdown
//                     label="Select vehicle types"
//                     options={["Bike", "Car", "Truck", "Others"]}
//                     value={vehicleType}
//                     onChange={setVehicleType}
//                   />
//                   {vehicleType.includes("Others") && (
//                   <input
//                     type="text"
//                     value={customVehicleType}
//                     onChange={(e) => setCustomVehicleType(e.target.value)}
//                     placeholder="Specify vehicle type"
//                     className="w-full h-12 px-4 mt-2 bg-gray-100 rounded-lg"
//                   />
//                 )}
//                   {errors.vehicleType && (
//                   <p className="mt-1 text-sm text-red-500">
//                     {errors.vehicleType}
//                   </p>
//                 )}
//                 </div>
//               )}


//               {/* Location */}
//               <div className="mb-4">
//                 <label className="block mb-2 text-sm font-medium">
//                   Location
//                 </label>
//                 <div className="overflow-hidden border border-gray-100 rounded-lg">
//                   {/* Map container: responsive height */}
//                   <div className="h-64 sm:h-72 md:h-80">
//                     <LocationPicker
//                       value={location}
//                       onChange={(coords) => setLocation(coords)}
//                     />
//                   </div>
//                 </div>

//                 <p className="mt-2 text-sm text-gray-600">
//                   Selected:{" "}
//                   {location
//                     ? location
//                         .split(",")
//                         .map((coord) => parseFloat(coord).toFixed(6))
//                         .join(", ")
//                     : "Click on map or use button to select"}
//                 </p>
//                 {errors.location && (
//                   <p className="mt-1 text-sm text-red-500">{errors.location}</p>
//                 )}
//               </div>

//               {/* Phone Number */}
//               <div className="mb-4">
//                 <label className="block mb-2 text-sm font-medium">
//                   Phone Number
//                 </label>
//                 <input
//                   type="tel"
//                   inputMode="numeric"
//                   value={phoneNumber}
//                   onChange={handlePhoneChange}
//                   placeholder="+91XXXXXXXXXX"
//                   className="w-full h-12 px-4 bg-gray-100 rounded-lg"
//                   aria-label="Phone number"
//                 />
//                 {errors.phoneNumber && (
//                   <p className="mt-1 text-sm text-red-500">
//                     {errors.phoneNumber}
//                   </p>
//                 )}
//               </div>

//               {/* Vehicle Number */}
//               <div className="mb-4">
//                 <label className="block mb-2 text-sm font-medium">
//                   Vehicle Number
//                 </label>
//                 <input
//                   type="text"
//                   value={vehicleNumber}
//                   onChange={handleVehicleChange}
//                   placeholder="e.g., MH12AB1234"
//                   className="w-full h-12 px-4 bg-gray-100 rounded-lg"
//                   aria-label="Vehicle number"
//                 />
//                 <p className="mt-1 text-xs text-gray-400">
//                   You can type with spaces (MH 12 AB 1234) or with dash — we
//                   normalize it.
//                 </p>
//                 {errors.vehicleNumber && (
//                   <p className="mt-1 text-sm text-red-500">
//                     {errors.vehicleNumber}
//                   </p>
//                 )}
//               </div>

//               {/* Vehicle Model */}
//               <div className="mb-4">
//                 <label className="block mb-2 text-sm font-medium">
//                   Vehicle Model
//                 </label>
//                 <input
//                   type="text"
//                   value={vehicleModel}
//                   onChange={(e) => setVehicleModel(e.target.value)}
//                   placeholder="e.g., Honda Activa, Maruti Swift"
//                   className="w-full h-12 px-4 bg-gray-100 rounded-lg"
//                 />
//                 {errors.vehicleModel && (
//                   <p className="mt-1 text-sm text-red-500">
//                     {errors.vehicleModel}
//                   </p>
//                 )}
//               </div>

//               {/* Notes */}
//               <div className="mb-4">
//                 <label className="block mb-2 text-sm font-medium">
//                   Additional Notes (optional)
//                 </label>
//                 <textarea
//                   value={notes}
//                   onChange={(e) => setNotes(e.target.value)}
//                   className="w-full px-4 py-2 bg-gray-100 rounded-lg"
//                   placeholder="Anything else the provider should know..."
//                 />
//               </div>

//               <button
//                 onClick={handleNext}
//                 className="w-full py-3 mt-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600"
//               >
//                 Next
//               </button>
//             </>
//           )}

//           {step === 2 && (
//             <>
//               <h2 className="mb-6 text-2xl font-bold">Confirm Details</h2>
//               <ul className="mb-6 space-y-1 text-sm list-none sm:text-base">
//                 <li>
//                   <span className="font-semibold">Issue(s):</span>{" "}
//                   {issueType.includes("Others")
//                     ? [
//                         ...issueType.filter((t) => t !== "Others"),
//                         customIssue,
//                       ].join(", ")
//                     : issueType.join(", ")}
//                 </li>
//                 <li>
//                   <span className="font-semibold">Location:</span> {location}
//                 </li>
//                 <li>
//                   <span className="font-semibold">Phone:</span> {phoneNumber}
//                 </li>
//                 <li>
//                   <span className="font-semibold">Vehicle:</span>{" "}
//                   {vehicleNumber} (
//                   {vehicleType.includes("Others")
//                     ? [
//                         ...vehicleType.filter((t) => t !== "Others"),
//                         customVehicleType,
//                       ].join(", ")
//                     : vehicleType.join(", ")
//                   })
//                 </li>
//                 {isCarSelected && (
//                   <li>
//                     <span className="font-semibold">Seater:</span>{" "}
//                     {carSeater.join(", ")}
//                   </li>
//                 )}
//                 <li>
//                   <span className="font-semibold">Model:</span> {vehicleModel}
//                 </li>
//                 <li>
//                   <span className="font-semibold">Notes:</span>{" "}
//                   {notes || "None"}
//                 </li>
//               </ul>

//               <div className="flex gap-3">
//                 <button
//                   onClick={() => setStep((s) => Math.max(1, s - 1))}
//                   className="flex-1 px-6 py-3 text-gray-700 bg-gray-200 rounded-lg"
//                 >
//                   Back
//                 </button>
//                 <button
//                   onClick={handleSubmit}
//                   className="flex-1 px-6 py-3 text-white bg-green-500 rounded-lg hover:bg-green-600"
//                 >
//                   Submit
//                 </button>
//               </div>
//             </>
//           )}

//           {step === 3 && (
//             <div className="text-center">
//               <h2 className="mb-2 text-lg font-semibold">
//                 Finding Nearby Provider...
//               </h2>
//               <p className="mb-6 text-gray-600">
//                 Please wait while we connect you with the nearest available
//                 provider.
//               </p>
//               <div className="w-12 h-12 mx-auto mb-6 border-4 border-blue-600 rounded-full animate-spin border-t-transparent" />
//               <button
//                 onClick={() => setStep(4)}
//                 className="w-full py-3 font-bold text-white bg-blue-600 rounded-full hover:bg-blue-700"
//               >
//                 Continue
//               </button>
//             </div>
//           )}

//           {step === 4 && (
//             <div className="flex flex-col items-center text-center">
//               <Check className="w-16 h-16 mb-4 text-green-500" />
//               <h1 className="mb-2 text-2xl font-bold">Help is on the way!</h1>
//               <p className="mb-6 text-gray-600">
//                 A nearby provider will contact you shortly.
//               </p>
//               <button
//                 onClick={handleBackDashboard}
//                 className="w-full py-3 font-bold text-white bg-blue-600 rounded-full hover:bg-blue-700"
//               >
//                 Back to Dashboard
//               </button>
//             </div>
//           )}
//         </div>
//       </main>

//       {/* Fixed bottom nav wrapper (measured) */}
//       <div
//         ref={bottomWrapRef}
//         className="fixed bottom-0 left-0 right-0 z-50"
//         role="navigation"
//       >
//         <BottomNav />
//       </div>
//     </div>
//   );
// }





//works

// "use client";

// import React, { useEffect, useLayoutEffect, useRef, useState, CSSProperties } from "react";
// import { db, auth } from "@/lib/firebaseConfig";
// import { collection, addDoc, serverTimestamp } from "firebase/firestore";
// import { useRouter } from "next/navigation";
// import LocationPicker from "@/components/LocationPicker";
// import Header from "@/components/Header";
// import BottomNav from "@/components/BottomNav";

// // Multi-select Dropdown with checkbox
// const CheckboxDropdown = ({ label, options, value, onChange, className }: { label: string; options: string[]; value: string[]; onChange: (newValue: string[]) => void; className?: string }) => {
//   const [isOpen, setIsOpen] = useState(false);
//   const ref = useRef<HTMLDivElement>(null);

//   const handleClickOutside = (e: MouseEvent) => {
//     if (ref.current && !ref.current.contains(e.target as Node)) setIsOpen(false);
//   };

//   useEffect(() => {
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => document.removeEventListener("mousedown", handleClickOutside);
//   }, []);

//   const handleCheckbox = (option: string, checked: boolean) => {
//     if (checked) onChange([...value, option]);
//     else onChange(value.filter(v => v !== option));
//   };

//   return (
//     <div className={`relative ${className}`} ref={ref}>
//       <button type="button" className="w-full h-12 px-4 text-left bg-gray-100 rounded-lg" onClick={() => setIsOpen(!isOpen)}>
//         {value.length > 0 ? value.join(", ") : label}
//       </button>
//       {isOpen && (
//         <div className="absolute z-50 w-full mt-1 overflow-y-auto bg-white border border-gray-200 rounded-lg shadow-lg max-h-60">
//           {options.map(option => (
//             <label key={option} className="flex items-center p-2 cursor-pointer hover:bg-gray-50">
//               <input type="checkbox" checked={value.includes(option)} onChange={e => handleCheckbox(option, e.target.checked)} className="mr-2" />
//               {option}
//             </label>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// // Single-select Dropdown (Radio)
// const RadioDropdown = ({ label, options, value, onChange, className }: { label: string; options: string[]; value: string; onChange: (v: string) => void; className?: string }) => {
//   const [isOpen, setIsOpen] = useState(false);
//   const ref = useRef<HTMLDivElement>(null);

//   const handleClickOutside = (e: MouseEvent) => {
//     if (ref.current && !ref.current.contains(e.target as Node)) setIsOpen(false);
//   };

//   useEffect(() => {
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => document.removeEventListener("mousedown", handleClickOutside);
//   }, []);

//   return (
//     <div className={`relative ${className}`} ref={ref}>
//       <button type="button" className="w-full h-12 px-4 text-left bg-gray-100 rounded-lg" onClick={() => setIsOpen(!isOpen)}>
//         {value || label}
//       </button>
//       {isOpen && (
//         <div className="absolute z-50 w-full mt-1 overflow-y-auto bg-white border border-gray-200 rounded-lg shadow-lg max-h-60">
//           {options.map(option => (
//             <label key={option} className="flex items-center p-2 cursor-pointer hover:bg-gray-50">
//               <input type="radio" checked={value === option} onChange={() => { onChange(option); setIsOpen(false); }} className="mr-2" />
//               {option}
//             </label>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default function RequestPage() {
//   const [issueType, setIssueType] = useState<string[]>([]);
//   const [customIssue, setCustomIssue] = useState("");
//   const [bookedVehicles, setBookedVehicles] = useState<string[]>([]);
//   const [carSeater, setCarSeater] = useState("");
//   const [vehicleType, setVehicleType] = useState<string[]>([]);
//   const [customVehicleType, setCustomVehicleType] = useState("");
//   const [location, setLocation] = useState("");
//   const [phoneNumber, setPhoneNumber] = useState("+91");
//   const [vehicleNumber, setVehicleNumber] = useState("");
//   const [vehicleModel, setVehicleModel] = useState("");
//   const [notes, setNotes] = useState("");
//   const [step, setStep] = useState(1);
//   const [errors, setErrors] = useState<Record<string,string>>({});
//   const router = useRouter();

//   const headerRef = useRef<HTMLDivElement>(null);
//   const bottomRef = useRef<HTMLDivElement>(null);
//   const [headerHeight, setHeaderHeight] = useState(120);
//   const [bottomHeight, setBottomHeight] = useState(72);

//   useLayoutEffect(() => {
//     const measure = () => {
//       setHeaderHeight(headerRef.current?.offsetHeight ?? 120);
//       setBottomHeight(bottomRef.current?.offsetHeight ?? 72);
//     };
//     measure();
//     window.addEventListener("resize", measure);
//     return () => window.removeEventListener("resize", measure);
//   }, []);

//   const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     let digits = e.target.value.replace(/\D/g,"");
//     if(digits.startsWith("91")) digits = digits.slice(2);
//     digits = digits.slice(0,10);
//     setPhoneNumber("+91"+digits);
//   };

//   const handleVehicleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setVehicleNumber(e.target.value.toUpperCase().replace(/[\s-]+/g,""));
//   };

//   const validateStep1 = () => {
//     const errs: Record<string,string> = {};
//     if(issueType.length===0) errs.issueType="Select at least one issue";
//     if(issueType.includes("Book a Car/Bike") && bookedVehicles.length===0) errs.bookedVehicles="Select Car or Bike";
//     if(bookedVehicles.includes("Car") && !carSeater) errs.carSeater="Select car seater";
//     if(vehicleType.length===0) errs.vehicleType="Select vehicle type";
//     if(!location) errs.location="Select location";
//     if(!/^\+91\d{10}$/.test(phoneNumber)) errs.phoneNumber="Enter valid phone number";
//     if(!/^[A-Z]{2}\d{2}[A-Z]{2}\d{4}$/.test(vehicleNumber)) errs.vehicleNumber="Enter valid vehicle number (e.g., MH12AB1234)";
//     if(!vehicleModel) errs.vehicleModel="Enter vehicle model";
//     return errs;
//   };

//   const handleNext = () => {
//     const errs = validateStep1();
//     if(Object.keys(errs).length>0) { setErrors(errs); return; }
//     setStep(step+1);
//     setErrors({});
//   };

//   const handleSubmit = async () => {
//     try {
//       const user = auth.currentUser;
//       if(!user) { alert("Login required"); return; }
//       const [lat,lng] = location.split(",").map(c=>parseFloat(c.trim()));
//       const finalIssueType = [...issueType];
//       if(issueType.includes("Others") && customIssue) finalIssueType.push(customIssue);
//       if(issueType.includes("Book a Car/Bike")) bookedVehicles.forEach(v=>finalIssueType.push(`Book a ${v}`));
//       const finalVehicleType = [...vehicleType];
//       if(vehicleType.includes("Others") && customVehicleType) finalVehicleType.push(customVehicleType);
//       await addDoc(collection(db,"requests"),{
//         issueType: finalIssueType,
//         bookedVehicles,
//         carSeater: bookedVehicles.includes("Car")?carSeater:null,
//         vehicleType: finalVehicleType,
//         location: {lat,lng},
//         phoneNumber,
//         vehicleNumber,
//         vehicleModel,
//         notes,
//         status:"Pending",
//         createdAt: serverTimestamp(),
//         uid: user.uid,
//         email: user.email,
//         userName: user.displayName||"Not provided"
//       });
//       setStep(3);
//     } catch(err:any) {
//       alert("Failed: "+err.message);
//     }
//   };

//   const mainStyle: CSSProperties = {paddingTop:headerHeight+16, paddingBottom: bottomHeight+16};
//   const cardMaxHeight = `calc(100vh - ${headerHeight+bottomHeight+48}px)`;

//   return (
//     <div className="flex flex-col min-h-screen bg-gray-50">
//       <div ref={headerRef} className="fixed top-0 left-0 right-0 z-50"><Header/></div>
//       <main className="flex-1 w-full px-4 overflow-y-auto sm:px-6" style={mainStyle}>
//         <div className="w-full max-w-lg p-6 mx-auto bg-white shadow-lg rounded-xl sm:p-8" style={{maxHeight:cardMaxHeight,overflowY:"auto"}}>
//           {step===1 && <>
//             <h2 className="mb-6 text-2xl font-bold">Report an Issue</h2>

//             {/* Issue Type */}
//             <div className="mb-4">
//               <label className="block mb-2 text-sm font-medium">Issue Type</label>
//               <CheckboxDropdown label="Select issue types" options={["Fuel Shortage","Flat Tyre","Engine Breakdown","Book a Car/Bike","Others"]} value={issueType} onChange={setIssueType} />
//               {issueType.includes("Book a Car/Bike") && (
//                 <div className="mt-2 ml-4">
//                   <label className="block mb-2 text-sm font-medium">Select Vehicle</label>
//                   <CheckboxDropdown label="Car/Bike" options={["Car","Bike"]} value={bookedVehicles} onChange={setBookedVehicles} />
//                   {bookedVehicles.includes("Car") && (
//                     <div className="mt-2 ml-4">
//                       <label className="block mb-2 text-sm font-medium">Car Seater</label>
//                       <RadioDropdown label="Select seater" options={["4 Seater","6 Seater","7 Seater"]} value={carSeater} onChange={setCarSeater} />
//                     </div>
//                   )}
//                 </div>
//               )}
//               {issueType.includes("Others") && <div className="mt-2"><input value={customIssue} onChange={e=>setCustomIssue(e.target.value)} placeholder="Specify other issue" className="w-full h-12 px-4 bg-gray-100 rounded-lg"/></div>}
//               {errors.issueType && <p className="text-red-500">{errors.issueType}</p>}
//             </div>

//             {/* Vehicle Type */}
//             <div className="mb-4">
//               <label className="block mb-2 text-sm font-medium">Vehicle Type</label>
//               <CheckboxDropdown label="Select vehicle types" options={["Car","Bike","Truck","Others"]} value={vehicleType} onChange={setVehicleType} />
//               {vehicleType.includes("Others") && <div className="mt-2"><input value={customVehicleType} onChange={e=>setCustomVehicleType(e.target.value)} placeholder="Specify other vehicle" className="w-full h-12 px-4 bg-gray-100 rounded-lg"/></div>}
//               {errors.vehicleType && <p className="text-red-500">{errors.vehicleType}</p>}
//             </div>

//             {/* Location */}
//             <div className="mb-4">
//               <label className="block mb-2 text-sm font-medium">Location</label>
//               <div className="overflow-hidden border border-gray-100 rounded-lg"><div className="h-64 sm:h-72 md:h-80"><LocationPicker value={location} onChange={setLocation}/></div></div>
//               {errors.location && <p className="text-red-500">{errors.location}</p>}
//             </div>

//             {/* Phone Number */}
//             <div className="mb-4">
//               <label className="block mb-2 text-sm font-medium">Phone Number</label>
//               <input type="tel" value={phoneNumber} onChange={handlePhoneChange} className="w-full h-12 px-4 bg-gray-100 rounded-lg"/>
//               {errors.phoneNumber && <p className="text-red-500">{errors.phoneNumber}</p>}
//             </div>

//             {/* Vehicle Number */}
//             <div className="mb-4">
//               <label className="block mb-2 text-sm font-medium">Vehicle Number</label>
//               <input type="text" value={vehicleNumber} onChange={handleVehicleChange} placeholder="MH12AB1234" className="w-full h-12 px-4 bg-gray-100 rounded-lg"/>
//               {errors.vehicleNumber && <p className="text-red-500">{errors.vehicleNumber}</p>}
//             </div>

//             {/* Vehicle Model */}
//             <div className="mb-4">
//               <label className="block mb-2 text-sm font-medium">Vehicle Model</label>
//               <input type="text" value={vehicleModel} onChange={e=>setVehicleModel(e.target.value)} className="w-full h-12 px-4 bg-gray-100 rounded-lg"/>
//               {errors.vehicleModel && <p className="text-red-500">{errors.vehicleModel}</p>}
//             </div>

//             {/* Notes */}
//             <div className="mb-4">
//               <label className="block mb-2 text-sm font-medium">Additional Notes</label>
//               <textarea value={notes} onChange={e=>setNotes(e.target.value)} rows={3} className="w-full p-4 bg-gray-100 rounded-lg"/>
//             </div>

//             <div className="flex justify-between mt-6">
//               <button onClick={()=>router.push("/user")} className="px-6 py-3 text-white bg-gray-500 rounded-lg">Cancel</button>
//               <button onClick={handleNext} className="px-6 py-3 text-white bg-blue-500 rounded-lg">Next</button>
//             </div>
//           </>}
//           {step===2 && <div className="flex flex-col items-center justify-center h-full">
//             <h2 className="text-xl font-semibold">Confirm Details</h2>
//             <button onClick={handleSubmit} className="px-6 py-3 mt-6 text-white bg-blue-500 rounded-lg">Submit Request</button>
//           </div>}
//           {step===3 && <div className="flex flex-col items-center justify-center h-full">
//             <h2 className="text-xl font-semibold text-green-600">Request Submitted Successfully!</h2>
//             <button onClick={()=>router.push("/user")} className="px-6 py-3 mt-6 text-white bg-blue-500 rounded-lg">Back to Dashboard</button>
//           </div>}
//         </div>
//       </main>
//       <div ref={bottomRef} className="fixed bottom-0 left-0 right-0 z-50"><BottomNav/></div>
//     </div>
//   );
// }

// working

"use client";

import React, { useEffect, useLayoutEffect, useRef, useState, CSSProperties } from "react";
import { db, auth } from "@/lib/firebaseConfig";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { useRouter } from "next/navigation";
import LocationPicker from "@/components/LocationPicker";
import Header from "@/components/Header";
import BottomNav from "@/components/BottomNav";
import { Check } from "lucide-react";

// Checkbox multi-select dropdown
const CheckboxDropdown = ({ label, options, value, onChange }: { label: string; options: string[]; value: string[]; onChange: (v: string[]) => void; }) => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setIsOpen(false);
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleOption = (option: string) => {
    if (value.includes(option)) onChange(value.filter(v => v !== option));
    else onChange([...value, option]);
  };

  return (
    <div className="relative" ref={ref}>
      <button
        type="button"
        className="w-full h-12 px-4 text-left truncate bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        onClick={() => setIsOpen(!isOpen)}
      >
        {value.length > 0 ? value.join(", ") : label}
      </button>
      {isOpen && (
        <div className="absolute z-50 w-full mt-1 overflow-y-auto bg-white border border-gray-200 rounded-lg shadow-lg max-h-48">
          {options.map(option => (
            <label key={option} className="flex items-center p-2 cursor-pointer hover:bg-gray-50">
              <input
                type="checkbox"
                checked={value.includes(option)}
                onChange={() => toggleOption(option)}
                className="mr-2"
              />
              {option}
            </label>
          ))}
        </div>
      )}
    </div>
  );
};

// Radio single-select dropdown
const RadioDropdown = ({ label, options, value, onChange }: { label: string; options: string[]; value: string; onChange: (v: string) => void; }) => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setIsOpen(false);
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={ref}>
      <button
        type="button"
        className="w-full h-12 px-4 text-left bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        onClick={() => setIsOpen(!isOpen)}
      >
        {value || label}
      </button>
      {isOpen && (
        <div className="absolute w-full mt-1 overflow-y-auto bg-white border border-gray-200 rounded-lg shadow-lg z-60 max-h-48">
          {options.map(option => (
            <label key={option} className="flex items-center p-2 cursor-pointer hover:bg-gray-50">
              <input
                type="radio"
                checked={value === option}
                onChange={() => {
                  onChange(option);
                  setIsOpen(false);
                }}
                className="mr-2"
              />
              {option}
            </label>
          ))}
        </div>
      )}
    </div>
  );
};

export default function RequestPage() {
  const [issueType, setIssueType] = useState<string[]>([]);
  const [customIssue, setCustomIssue] = useState("");
  const [bookedVehicles, setBookedVehicles] = useState<string[]>([]);
  const [carSeater, setCarSeater] = useState("");
  const [vehicleType, setVehicleType] = useState<string[]>([]);
  const [customVehicleType, setCustomVehicleType] = useState("");
  const [location, setLocation] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("+91");
  const [vehicleNumber, setVehicleNumber] = useState("");
  const [vehicleModel, setVehicleModel] = useState("");
  const [notes, setNotes] = useState("");
  const [step, setStep] = useState(1);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const router = useRouter();

  const headerRef = useRef<HTMLDivElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);
  const [headerHeight, setHeaderHeight] = useState(120);
  const [bottomHeight, setBottomHeight] = useState(72);

  useLayoutEffect(() => {
    const measure = () => {
      setHeaderHeight(headerRef.current?.offsetHeight ?? 120);
      setBottomHeight(bottomRef.current?.offsetHeight ?? 72);
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let digits = e.target.value.replace(/\D/g, "");
    if (digits.startsWith("91")) digits = digits.slice(2);
    digits = digits.slice(0, 10);
    setPhoneNumber("+91" + digits);
  };

  const handleVehicleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setVehicleNumber(e.target.value.toUpperCase().replace(/[\s-]+/g, ""));
  };

  const validateStep1 = () => {
    const errs: Record<string, string> = {};
    if (issueType.length === 0) errs.issueType = "Select at least one issue";
    if (issueType.includes("Book a Car/Bike") && bookedVehicles.length === 0)
      errs.bookedVehicles = "Select Car or Bike";
    if (bookedVehicles.includes("Car") && !carSeater) errs.carSeater = "Select car seater";
    if (vehicleType.length === 0) errs.vehicleType = "Select vehicle type";
    if (!location) errs.location = "Select location";
    if (!/^\+91\d{10}$/.test(phoneNumber)) errs.phoneNumber = "Enter valid phone number";
    if (!/^[A-Z]{2}\d{2}[A-Z]{2}\d{4}$/.test(vehicleNumber))
      errs.vehicleNumber = "Enter valid vehicle number (e.g., MH12AB1234)";
    if (!vehicleModel) errs.vehicleModel = "Enter vehicle model";
    return errs;
  };

  const handleNext = () => {
    const errs = validateStep1();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setStep(step + 1);
    setErrors({});
  };

  const handleSubmit = async () => {
    try {
      const user = auth.currentUser;
      if (!user) return alert("Login required");

      const [lat, lng] = location.split(",").map(c => parseFloat(c.trim()));
      
      const finalIssueType = [...issueType.filter(i => i !== "Book a Car/Bike" && i !== "Others")];
      if (issueType.includes("Others") && customIssue) {
        finalIssueType.push(customIssue);
      }
      if (issueType.includes("Book a Car/Bike")) {
        if (bookedVehicles.includes("Car")) {
          finalIssueType.push(`Book a Car (${carSeater})`);
        }
        if (bookedVehicles.includes("Bike")) {
          finalIssueType.push("Book a Bike");
        }
      }

      const finalVehicleType = [...vehicleType.filter(v => v !== "Others")];
      if (vehicleType.includes("Others") && customVehicleType) {
        finalVehicleType.push(customVehicleType);
      }
      
      await addDoc(collection(db, "requests"), {
        issueType: finalIssueType,
        vehicleType: finalVehicleType,
        location: { lat, lng },
        phoneNumber,
        vehicleNumber,
        vehicleModel,
        notes,
        status: "Pending",
        createdAt: serverTimestamp(),
        uid: user.uid,
        email: user.email,
        userName: user.displayName || "Not provided"
      });
      setStep(3);
    } catch (err: any) {
      alert("Failed: " + err.message);
    }
  };

  const mainStyle: CSSProperties = {
    paddingTop: headerHeight + 16,
    paddingBottom: bottomHeight + 16
  };
  const cardMaxHeight = `calc(100vh - ${headerHeight + bottomHeight + 48}px)`;

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <div ref={headerRef} className="fixed top-0 left-0 right-0 z-50">
        <Header />
      </div>
      <main className="flex-1 w-full px-4 overflow-y-auto sm:px-6" style={mainStyle}>
        <div className="relative w-full max-w-lg p-6 mx-auto bg-white shadow-lg rounded-xl sm:p-8" style={{ maxHeight: cardMaxHeight, overflowY: "auto" }}>
          {step === 1 && (
            <>
              <h2 className="mb-6 text-2xl font-bold">Report an Issue</h2>
                            {/* Issue Type */}
              <div className="relative z-50 mb-4">
                <label className="block mb-2 text-sm font-medium">Issue Type</label>
                <CheckboxDropdown label="Select issue types" options={["Fuel Shortage","Flat Tyre","Engine Breakdown","Book a Car/Bike","Others"]} value={issueType} onChange={setIssueType} />
                {issueType.includes("Book a Car/Bike") && (
                  <div className="mt-2 ml-4">
                    <label className="block mb-2 text-sm font-medium">Select Vehicle</label>
                    <CheckboxDropdown label="Car/Bike" options={["Car","Bike"]} value={bookedVehicles} onChange={setBookedVehicles} />
                    {bookedVehicles.includes("Car") && (
                      <div className="mt-2 ml-4">
                        <label className="block mb-2 text-sm font-medium">Car Seater</label>
                        <RadioDropdown label="Select seater" options={["4 Seater","6 Seater","7 Seater"]} value={carSeater} onChange={setCarSeater} />
                      </div>
                    )}
                  </div>
                )}
                {issueType.includes("Others") && (
                  <div className="mt-2">
                    <input value={customIssue} onChange={e => setCustomIssue(e.target.value)} placeholder="Specify other issue" className="w-full h-12 px-4 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none"/>
                  </div>
                )}
                {errors.issueType && <p className="mt-1 text-sm text-red-500">{errors.issueType}</p>}
                {errors.bookedVehicles && <p className="mt-1 text-sm text-red-500">{errors.bookedVehicles}</p>}
                {errors.carSeater && <p className="mt-1 text-sm text-red-500">{errors.carSeater}</p>}
              </div>

              {/* Vehicle Type */}
              <div className="relative z-40 mb-4">
                <label className="block mb-2 text-sm font-medium">Vehicle Type</label>
                <CheckboxDropdown label="Select vehicle types" options={["Car","Bike","Truck","Others"]} value={vehicleType} onChange={setVehicleType} />
                {vehicleType.includes("Others") && (
                  <div className="mt-2">
                    <input value={customVehicleType} onChange={e => setCustomVehicleType(e.target.value)} placeholder="Specify other vehicle" className="w-full h-12 px-4 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none"/>
                  </div>
                )}
                {errors.vehicleType && <p className="mt-1 text-sm text-red-500">{errors.vehicleType}</p>}
              </div>

              {/* Location */}
              <div className="relative z-30 mb-4">
                <label className="block mb-2 text-sm font-medium">Location</label>
                <div className="overflow-hidden border border-gray-100 rounded-lg">
                  <div className="h-64 sm:h-72 md:h-80">
                    <LocationPicker value={location} onChange={setLocation} />
                  </div>
                </div>
                {errors.location && <p className="mt-1 text-sm text-red-500">{errors.location}</p>}
              </div>

              {/* Phone, Vehicle Number, Model, Notes */}
              <div className="mb-4">
                <label className="block mb-2 text-sm font-medium">Phone Number</label>
                <input type="tel" value={phoneNumber} onChange={handlePhoneChange} className="w-full h-12 px-4 bg-gray-100 border border-gray-300 rounded-lg"/>
                {errors.phoneNumber && <p className="mt-1 text-sm text-red-500">{errors.phoneNumber}</p>}
              </div>
              <div className="mb-4">
                <label className="block mb-2 text-sm font-medium">Vehicle Number</label>
                <input type="text" value={vehicleNumber} onChange={handleVehicleChange} placeholder="MH12AB1234" className="w-full h-12 px-4 bg-gray-100 border border-gray-300 rounded-lg"/>
                {errors.vehicleNumber && <p className="mt-1 text-sm text-red-500">{errors.vehicleNumber}</p>}
              </div>
              <div className="mb-4">
                <label className="block mb-2 text-sm font-medium">Vehicle Model</label>
                <input type="text" value={vehicleModel} onChange={e => setVehicleModel(e.target.value)} className="w-full h-12 px-4 bg-gray-100 border border-gray-300 rounded-lg"/>
                {errors.vehicleModel && <p className="mt-1 text-sm text-red-500">{errors.vehicleModel}</p>}
              </div>
              <div className="mb-4">
                <label className="block mb-2 text-sm font-medium">Additional Notes</label>
                <textarea value={notes} onChange={e => setNotes(e.target.value)} rows={3} className="w-full p-4 bg-gray-100 border border-gray-300 rounded-lg"/>
              </div>

              <div className="flex justify-between mt-6">
                <button onClick={() => router.push("/user")} className="px-6 py-3 text-white bg-gray-500 rounded-lg">Cancel</button>
                <button onClick={handleNext} className="px-6 py-3 text-white bg-blue-500 rounded-lg">Next</button>
              </div>
            </>
          )}

          {step === 2 && (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <h2 className="mb-4 text-xl font-semibold">Confirm Details</h2>
              <ul className="mb-6 text-left">
                <li><span className="font-semibold">Issues:</span> {issueType.filter(i => i !== "Book a Car/Bike" && i !== "Others").join(", ")}{issueType.includes("Book a Car/Bike") && bookedVehicles.includes("Car") && `, Book a Car (${carSeater})`}{issueType.includes("Book a Car/Bike") && bookedVehicles.includes("Bike") && `, Book a Bike`}{issueType.includes("Others") && customIssue && `, ${customIssue}`}</li>
                <li><span className="font-semibold">Vehicle Types:</span> {vehicleType.filter(v => v !== "Others").join(", ")}{vehicleType.includes("Others") && customVehicleType && `, ${customVehicleType}`}</li>
                <li><span className="font-semibold">Location:</span> {location}</li>
                <li><span className="font-semibold">Phone:</span> {phoneNumber}</li>
                <li><span className="font-semibold">Vehicle:</span> {vehicleNumber}</li>
                <li><span className="font-semibold">Model:</span> {vehicleModel}</li>
                <li><span className="font-semibold">Notes:</span> {notes || "None"}</li>
              </ul>
              <div className="flex gap-4">
                <button onClick={() => setStep(1)} className="px-6 py-3 text-white bg-gray-500 rounded-lg">Back</button>
                <button onClick={handleSubmit} className="px-6 py-3 text-white bg-blue-500 rounded-lg">Submit Request</button>
              </div>
            </div>
          )}
          
          {step === 3 && (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <Check className="w-16 h-16 mb-4 text-green-500" />
              <h2 className="text-xl font-semibold text-green-600">Request Submitted Successfully!</h2>
              <p className="mt-2 text-gray-600">A provider will be in touch shortly.</p>
              <button onClick={() => router.push("/user")} className="px-6 py-3 mt-6 text-white bg-blue-500 rounded-lg">Back to Dashboard</button>
            </div>
          )}

        </div>
      </main>
      <div ref={bottomRef} className="fixed bottom-0 left-0 right-0 z-50">
        <BottomNav />
      </div>
    </div>
  );
}


// "use client";

// import React, {
//   useEffect,
//   useLayoutEffect,
//   useRef,
//   useState,
//   CSSProperties,
// } from "react";
// import { db, auth } from "@/lib/firebaseConfig";
// import { collection, addDoc, serverTimestamp } from "firebase/firestore";
// import { useRouter } from "next/navigation";
// import LocationPicker from "@/components/LocationPicker";
// import Header from "@/components/Header";
// import BottomNav from "@/components/BottomNav";
// import { Check } from "lucide-react";

// // ✅ Checkbox multi-select dropdown
// const CheckboxDropdown = ({
//   label,
//   options,
//   value,
//   onChange,
// }: {
//   label: string;
//   options: string[];
//   value: string[];
//   onChange: (v: string[]) => void;
// }) => {
//   const [isOpen, setIsOpen] = useState(false);
//   const ref = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     const handleClickOutside = (e: MouseEvent) => {
//       if (ref.current && !ref.current.contains(e.target as Node))
//         setIsOpen(false);
//     };
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => document.removeEventListener("mousedown", handleClickOutside);
//   }, []);

//   const toggleOption = (option: string) => {
//     if (value.includes(option)) onChange(value.filter((v) => v !== option));
//     else onChange([...value, option]);
//   };

//   return (
//     <div className="relative" ref={ref}>
//       <button
//         type="button"
//         className="w-full h-12 px-4 text-left truncate bg-gray-100 border border-gray-300 rounded-lg"
//         onClick={() => setIsOpen(!isOpen)}
//       >
//         {value.length > 0 ? value.join(", ") : label}
//       </button>
//       {isOpen && (
//         <div className="absolute z-50 w-full mt-1 overflow-y-auto bg-white border rounded-lg shadow-lg max-h-48">
//           {options.map((option) => (
//             <label
//               key={option}
//               className="flex items-center p-2 cursor-pointer hover:bg-gray-50"
//             >
//               <input
//                 type="checkbox"
//                 checked={value.includes(option)}
//                 onChange={() => toggleOption(option)}
//                 className="mr-2"
//               />
//               {option}
//             </label>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default function RequestPage() {
//   const [issueType, setIssueType] = useState<string[]>([]);
//   const [vehicleType, setVehicleType] = useState<string[]>([]);
//   const [location, setLocation] = useState("");
//   const [phoneNumber, setPhoneNumber] = useState("+91");
//   const [vehicleNumber, setVehicleNumber] = useState("");
//   const [vehicleModel, setVehicleModel] = useState("");
//   const [notes, setNotes] = useState("");
//   const [step, setStep] = useState(1);
//   const [errors, setErrors] = useState<Record<string, string>>({});
//   const router = useRouter();

//   const headerRef = useRef<HTMLDivElement>(null);
//   const bottomRef = useRef<HTMLDivElement>(null);
//   const [headerHeight, setHeaderHeight] = useState(120);
//   const [bottomHeight, setBottomHeight] = useState(72);

//   useLayoutEffect(() => {
//     const measure = () => {
//       setHeaderHeight(headerRef.current?.offsetHeight ?? 120);
//       setBottomHeight(bottomRef.current?.offsetHeight ?? 72);
//     };
//     measure();
//     window.addEventListener("resize", measure);
//     return () => window.removeEventListener("resize", measure);
//   }, []);

//   // ✅ Phone + Vehicle Number helpers
//   const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     let digits = e.target.value.replace(/\D/g, "");
//     if (digits.startsWith("91")) digits = digits.slice(2);
//     digits = digits.slice(0, 10);
//     setPhoneNumber("+91" + digits);
//   };

//   const handleVehicleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setVehicleNumber(e.target.value.toUpperCase().replace(/[\s-]+/g, ""));
//   };

//   // ✅ Validation
//   const validateStep1 = () => {
//     const errs: Record<string, string> = {};
//     if (issueType.length === 0) errs.issueType = "Select at least one issue";
//     if (vehicleType.length === 0) errs.vehicleType = "Select vehicle type";
//     if (!location) errs.location = "Pick a location";
//     if (!/^\+91\d{10}$/.test(phoneNumber))
//       errs.phoneNumber = "Enter valid phone number";
//     if (!/^[A-Z]{2}\d{2}[A-Z]{2}\d{4}$/.test(vehicleNumber))
//       errs.vehicleNumber = "Enter valid vehicle number (e.g., MH12AB1234)";
//     if (!vehicleModel) errs.vehicleModel = "Enter vehicle model";
//     return errs;
//   };

//   const handleNext = () => {
//     const errs = validateStep1();
//     if (Object.keys(errs).length > 0) {
//       setErrors(errs);
//       return;
//     }
//     setStep(2);
//     setErrors({});
//   };

//   // ✅ Firestore Submit
//   const handleSubmit = async () => {
//     try {
//       const user = auth.currentUser;
//       if (!user) return alert("Login required");

//       const [lat, lng] = location.split(",").map((c) => parseFloat(c.trim()));

//       await addDoc(collection(db, "requests"), {
//         userId: user.uid, // 🔑 Firestore rules expect this
//         issueType,
//         vehicleType,
//         location: { lat, lng },
//         phoneNumber,
//         vehicleNumber,
//         vehicleModel,
//         notes,
//         status: "pending",
//         createdAt: serverTimestamp(),
//       });

//       setStep(3);
//     } catch (err: any) {
//       alert("Failed: " + err.message);
//     }
//   };

//   // ✅ Layout handling
//   const mainStyle: CSSProperties = {
//     paddingTop: headerHeight + 16,
//     paddingBottom: bottomHeight + 16,
//   };
//   const cardMaxHeight = `calc(100vh - ${
//     headerHeight + bottomHeight + 48
//   }px)`;

//   return (
//     <div className="flex flex-col min-h-screen bg-gray-50">
//       <div ref={headerRef} className="fixed top-0 left-0 right-0 z-50">
//         <Header />
//       </div>

//       <main
//         className="flex-1 w-full px-4 overflow-y-auto sm:px-6"
//         style={mainStyle}
//       >
//         <div
//           className="relative w-full max-w-lg p-6 mx-auto bg-white shadow-lg rounded-xl sm:p-8"
//           style={{ maxHeight: cardMaxHeight, overflowY: "auto" }}
//         >
//           {step === 1 && (
//             <>
//               <h2 className="mb-6 text-2xl font-bold">Report an Issue</h2>

//               {/* Issue Type */}
//               <div className="mb-4">
//                 <label className="block mb-2 text-sm font-medium">
//                   Issue Type
//                 </label>
//                 <CheckboxDropdown
//                   label="Select issue types"
//                   options={["Fuel Shortage", "Flat Tyre", "Engine Breakdown"]}
//                   value={issueType}
//                   onChange={setIssueType}
//                 />
//                 {errors.issueType && (
//                   <p className="text-sm text-red-500">{errors.issueType}</p>
//                 )}
//               </div>

//               {/* Vehicle Type */}
//               <div className="mb-4">
//                 <label className="block mb-2 text-sm font-medium">
//                   Vehicle Type
//                 </label>
//                 <CheckboxDropdown
//                   label="Select vehicle types"
//                   options={["Car", "Bike", "Truck"]}
//                   value={vehicleType}
//                   onChange={setVehicleType}
//                 />
//                 {errors.vehicleType && (
//                   <p className="text-sm text-red-500">{errors.vehicleType}</p>
//                 )}
//               </div>

//               {/* Location */}
//               <div className="mb-4">
//                 <label className="block mb-2 text-sm font-medium">
//                   Location
//                 </label>
//                 <div className="overflow-hidden border rounded-lg">
//                   <div className="h-64">
//                     <LocationPicker value={location} onChange={setLocation} />
//                   </div>
//                 </div>
//                 {errors.location && (
//                   <p className="text-sm text-red-500">{errors.location}</p>
//                 )}
//               </div>

//               {/* Phone, Vehicle Details */}
//               <div className="mb-4">
//                 <label className="block mb-2 text-sm font-medium">
//                   Phone Number
//                 </label>
//                 <input
//                   type="tel"
//                   value={phoneNumber}
//                   onChange={handlePhoneChange}
//                   className="w-full h-12 px-4 border rounded-lg"
//                 />
//                 {errors.phoneNumber && (
//                   <p className="text-sm text-red-500">{errors.phoneNumber}</p>
//                 )}
//               </div>
//               <div className="mb-4">
//                 <label className="block mb-2 text-sm font-medium">
//                   Vehicle Number
//                 </label>
//                 <input
//                   type="text"
//                   value={vehicleNumber}
//                   onChange={handleVehicleChange}
//                   className="w-full h-12 px-4 border rounded-lg"
//                 />
//                 {errors.vehicleNumber && (
//                   <p className="text-sm text-red-500">{errors.vehicleNumber}</p>
//                 )}
//               </div>
//               <div className="mb-4">
//                 <label className="block mb-2 text-sm font-medium">
//                   Vehicle Model
//                 </label>
//                 <input
//                   type="text"
//                   value={vehicleModel}
//                   onChange={(e) => setVehicleModel(e.target.value)}
//                   className="w-full h-12 px-4 border rounded-lg"
//                 />
//                 {errors.vehicleModel && (
//                   <p className="text-sm text-red-500">{errors.vehicleModel}</p>
//                 )}
//               </div>

//               <div className="mb-4">
//                 <label className="block mb-2 text-sm font-medium">
//                   Notes
//                 </label>
//                 <textarea
//                   value={notes}
//                   onChange={(e) => setNotes(e.target.value)}
//                   className="w-full p-4 border rounded-lg"
//                 />
//               </div>

//               <div className="flex justify-between mt-6">
//                 <button
//                   onClick={() => router.push("/user")}
//                   className="px-6 py-3 text-white bg-gray-500 rounded-lg"
//                 >
//                   Cancel
//                 </button>
//                 <button
//                   onClick={handleNext}
//                   className="px-6 py-3 text-white bg-blue-500 rounded-lg"
//                 >
//                   Next
//                 </button>
//               </div>
//             </>
//           )}

//           {step === 2 && (
//             <div className="text-center">
//               <h2 className="mb-4 text-xl font-semibold">Confirm Details</h2>
//               <ul className="mb-6 text-left">
//                 <li>
//                   <b>Issues:</b> {issueType.join(", ")}
//                 </li>
//                 <li>
//                   <b>Vehicle Types:</b> {vehicleType.join(", ")}
//                 </li>
//                 <li>
//                   <b>Location:</b> {location}
//                 </li>
//                 <li>
//                   <b>Phone:</b> {phoneNumber}
//                 </li>
//                 <li>
//                   <b>Vehicle:</b> {vehicleNumber}
//                 </li>
//                 <li>
//                   <b>Model:</b> {vehicleModel}
//                 </li>
//                 <li>
//                   <b>Notes:</b> {notes || "None"}
//                 </li>
//               </ul>
//               <div className="flex gap-4">
//                 <button
//                   onClick={() => setStep(1)}
//                   className="px-6 py-3 text-white bg-gray-500 rounded-lg"
//                 >
//                   Back
//                 </button>
//                 <button
//                   onClick={handleSubmit}
//                   className="px-6 py-3 text-white bg-blue-500 rounded-lg"
//                 >
//                   Submit Request
//                 </button>
//               </div>
//             </div>
//           )}

//           {step === 3 && (
//             <div className="text-center">
//               <Check className="w-16 h-16 mb-4 text-green-500" />
//               <h2 className="text-xl font-semibold text-green-600">
//                 Request Submitted Successfully!
//               </h2>
//               <p className="mt-2 text-gray-600">
//                 A provider will be in touch shortly.
//               </p>
//               <button
//                 onClick={() => router.push("/user")}
//                 className="px-6 py-3 mt-6 text-white bg-blue-500 rounded-lg"
//               >
//                 Back to Dashboard
//               </button>
//             </div>
//           )}
//         </div>
//       </main>

//       <div ref={bottomRef} className="fixed bottom-0 left-0 right-0 z-50">
//         <BottomNav />
//       </div>
//     </div>
//   );
// }






// "use client";

// import React, {
//   useEffect,
//   useLayoutEffect,
//   useRef,
//   useState,
//   CSSProperties,
// } from "react";
// import { db, auth } from "@/lib/firebaseConfig";
// import { collection, addDoc, serverTimestamp } from "firebase/firestore";
// import { useRouter } from "next/navigation";
// import LocationPicker from "@/components/LocationPicker";
// import { Check } from "lucide-react";
// import Header from "@/components/Header";
// import BottomNav from "@/components/BottomNav";

// export default function RequestPage() {
//   const [issueTypes, setIssueTypes] = useState<string[]>([]);
//   const [customIssue, setCustomIssue] = useState("");
//   const [location, setLocation] = useState("");
//   const [phoneNumber, setPhoneNumber] = useState("+91");
//   const [vehicleNumber, setVehicleNumber] = useState("");
//   const [vehicleTypes, setVehicleTypes] = useState<string[]>([]);
//   const [customVehicleType, setCustomVehicleType] = useState("");
//   const [vehicleModel, setVehicleModel] = useState("");
//   const [notes, setNotes] = useState("");
//   const [step, setStep] = useState(1);
//   const [errors, setErrors] = useState<Record<string, string>>({});
//   const router = useRouter();

//   // Refs to measure header and bottom nav heights
//   const headerWrapRef = useRef<HTMLDivElement | null>(null);
//   const bottomWrapRef = useRef<HTMLDivElement | null>(null);

//   const [headerHeight, setHeaderHeight] = useState<number>(120); // fallback
//   const [bottomHeight, setBottomHeight] = useState<number>(72); // fallback

//   // Measure header & bottom nav heights
//   useLayoutEffect(() => {
//     function measure() {
//       const h = headerWrapRef.current?.offsetHeight ?? headerHeight;
//       const b = bottomWrapRef.current?.offsetHeight ?? bottomHeight;
//       setHeaderHeight(h);
//       setBottomHeight(b);
//     }
//     measure();
//     window.addEventListener("resize", measure);
//     return () => window.removeEventListener("resize", measure);
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, []);

//   // Phone input normalization
//   const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     let digits = e.target.value.replace(/\D/g, "");
//     if (digits.startsWith("91")) digits = digits.slice(2);
//     digits = digits.slice(0, 10);
//     setPhoneNumber("+91" + digits);
//   };

//   // Vehicle number normalization
//   const handleVehicleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const raw = e.target.value.toUpperCase();
//     const normalized = raw.replace(/[\s-]+/g, "");
//     setVehicleNumber(normalized);
//   };

//   // Validation
//   const validateStep1 = () => {
//     const newErrors: Record<string, string> = {};
//     if (!location) newErrors.location = "Please select location from map";

//     const phoneRegex = /^\+91\d{10}$/;
//     if (!phoneRegex.test(phoneNumber)) {
//       newErrors.phoneNumber = "Enter valid 10-digit phone number with +91";
//     }

//     const vehicleRegex = /^[A-Z]{2}\d{2}[A-Z]{1,2}\d{4}$/;
//     if (!vehicleNumber || !vehicleRegex.test(vehicleNumber)) {
//       newErrors.vehicleNumber = "Enter valid vehicle number (e.g., MH12AB1234)";
//     }

//     if (!vehicleModel) {
//       newErrors.vehicleModel = "Enter vehicle model";
//     }

//     return newErrors;
//   };

//   const handleNext = () => {
//     if (step === 1) {
//       const validationErrors = validateStep1();
//       if (Object.keys(validationErrors).length > 0) {
//         setErrors(validationErrors);
//         return;
//       }
//     }
//     setStep((s) => s + 1);
//     setErrors({});
//   };

//   // Submit request
//   const handleSubmit = async () => {
//     try {
//       const user = auth.currentUser;
//       const [lat, lng] = location
//         ? location.split(",").map((c) => parseFloat(c.trim()))
//         : [null, null];
//       if (!lat || !lng) {
//         alert("Please select a valid location");
//         return;
//       }

//       await addDoc(collection(db, "requests"), {
//         issueTypes: issueTypes.map((i) =>
//           i === "Others" ? customIssue : i
//         ),
//         location: { lat, lng },
//         phoneNumber,
//         vehicleNumber,
//         vehicleTypes: vehicleTypes.map((v) =>
//           v === "Others" ? customVehicleType : v
//         ),
//         vehicleModel,
//         notes,
//         status: "Pending",
//         createdAt: serverTimestamp(),
//         userName: user?.displayName || "Not provided",
//         email: user?.email || "Not provided",
//         uid: user?.uid || null,
//       });

//       setStep(3);
//     } catch (error: any) {
//       console.error("❌ Error adding document:", error.code, error.message);
//       alert(`Failed to save request: ${error.message}`);
//     }
//   };

//   const handleBackDashboard = () => {
//     router.push("/user");
//   };

//   // Layout padding
//   const mainStyle: CSSProperties = {
//     paddingTop: headerHeight + 16,
//     paddingBottom: bottomHeight + 16,
//   };
//   const cardMaxHeight = `calc(100vh - ${headerHeight + bottomHeight + 48}px)`;

//   return (
//     <div className="flex flex-col min-h-screen bg-gray-50">
//       {/* Header */}
//       <div ref={headerWrapRef} className="fixed top-0 left-0 right-0 z-50">
//         <Header />
//       </div>

//       {/* Main */}
//       <main
//         className="flex-1 w-full px-4 overflow-y-auto sm:px-6"
//         style={mainStyle}
//       >
//         <div
//           className="w-full max-w-lg p-6 mx-auto bg-white shadow-lg rounded-xl sm:p-8"
//           style={{ maxHeight: cardMaxHeight, overflowY: "auto" }}
//         >
//           {/* Progress */}
//           <div className="flex items-center justify-between mb-6">
//             {[1, 2, 3, 4].map((num) => (
//               <div key={num} className="flex items-center flex-1">
//                 <div
//                   className={`rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold ${
//                     step >= num ? "bg-blue-500 text-white" : "bg-gray-200"
//                   }`}
//                 >
//                   {num}
//                 </div>
//                 {num < 4 && (
//                   <div
//                     className={`flex-1 h-1 ${
//                       step > num ? "bg-blue-500" : "bg-gray-200"
//                     }`}
//                   />
//                 )}
//               </div>
//             ))}
//           </div>

//           {/* Step 1 */}
//           {step === 1 && (
//             <>
//               <h2 className="mb-6 text-2xl font-bold">Report an Issue</h2>

//               {/* Issue Type (multi-select) */}
//               <div className="mb-4">
//                 <label className="block mb-2 text-sm font-medium">
//                   Issue Type
//                 </label>
//                 <select
//                   multiple
//                   value={issueTypes}
//                   onChange={(e) =>
//                     setIssueTypes(
//                       Array.from(e.target.selectedOptions, (opt) => opt.value)
//                     )
//                   }
//                   className="w-full h-32 px-4 bg-gray-100 rounded-lg"
//                 >
//                   <option value="Fuel Shortage">Fuel Shortage</option>
//                   <option value="Flat Tyre">Flat Tyre</option>
//                   <option value="Engine Breakdown">Engine Breakdown</option>
//                   <option value="Others">Others</option>
//                 </select>
//                 {issueTypes.includes("Others") && (
//                   <input
//                     type="text"
//                     value={customIssue}
//                     onChange={(e) => setCustomIssue(e.target.value)}
//                     placeholder="Specify your issue"
//                     className="w-full h-12 px-4 mt-2 bg-gray-100 rounded-lg"
//                   />
//                 )}
//               </div>

//               {/* Location */}
//               <div className="mb-4">
//                 <label className="block mb-2 text-sm font-medium">Location</label>
//                 <div className="overflow-hidden border border-gray-100 rounded-lg">
//                   <div className="h-64 sm:h-72 md:h-80">
//                     <LocationPicker
//                       value={location}
//                       onChange={(coords) => setLocation(coords)}
//                     />
//                   </div>
//                 </div>
//                 <p className="mt-2 text-sm text-gray-600">
//                   Selected:{" "}
//                   {location
//                     ? location
//                         .split(",")
//                         .map((coord) => parseFloat(coord).toFixed(6))
//                         .join(", ")
//                     : "Click on map or use button to select"}
//                 </p>
//                 {errors.location && (
//                   <p className="mt-1 text-sm text-red-500">{errors.location}</p>
//                 )}
//               </div>

//               {/* Phone Number */}
//               <div className="mb-4">
//                 <label className="block mb-2 text-sm font-medium">
//                   Phone Number
//                 </label>
//                 <input
//                   type="tel"
//                   inputMode="numeric"
//                   value={phoneNumber}
//                   onChange={handlePhoneChange}
//                   placeholder="+91XXXXXXXXXX"
//                   className="w-full h-12 px-4 bg-gray-100 rounded-lg"
//                 />
//                 {errors.phoneNumber && (
//                   <p className="mt-1 text-sm text-red-500">
//                     {errors.phoneNumber}
//                   </p>
//                 )}
//               </div>

//               {/* Vehicle Number */}
//               <div className="mb-4">
//                 <label className="block mb-2 text-sm font-medium">
//                   Vehicle Number
//                 </label>
//                 <input
//                   type="text"
//                   value={vehicleNumber}
//                   onChange={handleVehicleChange}
//                   placeholder="e.g., MH12AB1234"
//                   className="w-full h-12 px-4 bg-gray-100 rounded-lg"
//                 />
//                 <p className="mt-1 text-xs text-gray-400">
//                   You can type with spaces or dash — we normalize it.
//                 </p>
//                 {errors.vehicleNumber && (
//                   <p className="mt-1 text-sm text-red-500">
//                     {errors.vehicleNumber}
//                   </p>
//                 )}
//               </div>

//               {/* Vehicle Type (multi-select) */}
//               <div className="mb-4">
//                 <label className="block mb-2 text-sm font-medium">
//                   Vehicle Type
//                 </label>
//                 <select
//                   multiple
//                   value={vehicleTypes}
//                   onChange={(e) =>
//                     setVehicleTypes(
//                       Array.from(e.target.selectedOptions, (opt) => opt.value)
//                     )
//                   }
//                   className="w-full h-32 px-4 bg-gray-100 rounded-lg"
//                 >
//                   <option value="Bike">Bike</option>
//                   <option value="Car">Car</option>
//                   <option value="Truck">Truck</option>
//                   <option value="Others">Others</option>
//                 </select>
//                 {vehicleTypes.includes("Others") && (
//                   <input
//                     type="text"
//                     value={customVehicleType}
//                     onChange={(e) => setCustomVehicleType(e.target.value)}
//                     placeholder="Specify vehicle type"
//                     className="w-full h-12 px-4 mt-2 bg-gray-100 rounded-lg"
//                   />
//                 )}
//               </div>

//               {/* Vehicle Model */}
//               <div className="mb-4">
//                 <label className="block mb-2 text-sm font-medium">
//                   Vehicle Model
//                 </label>
//                 <input
//                   type="text"
//                   value={vehicleModel}
//                   onChange={(e) => setVehicleModel(e.target.value)}
//                   placeholder="e.g., Honda Activa, Maruti Swift"
//                   className="w-full h-12 px-4 bg-gray-100 rounded-lg"
//                 />
//                 {errors.vehicleModel && (
//                   <p className="mt-1 text-sm text-red-500">
//                     {errors.vehicleModel}
//                   </p>
//                 )}
//               </div>

//               {/* Notes */}
//               <div className="mb-4">
//                 <label className="block mb-2 text-sm font-medium">
//                   Additional Notes (optional)
//                 </label>
//                 <textarea
//                   value={notes}
//                   onChange={(e) => setNotes(e.target.value)}
//                   className="w-full px-4 py-2 bg-gray-100 rounded-lg"
//                   placeholder="Anything else the provider should know..."
//                 />
//               </div>

//               <button
//                 onClick={handleNext}
//                 className="w-full py-3 mt-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600"
//               >
//                 Next
//               </button>
//             </>
//           )}

//           {/* Step 2 */}
//           {step === 2 && (
//             <>
//               <h2 className="mb-6 text-2xl font-bold">Confirm Details</h2>
//               <ul className="mb-6 space-y-1 text-sm list-none sm:text-base">
//                 <li>
//                   <span className="font-semibold">Issue:</span>{" "}
//                   {issueTypes
//                     .map((i) => (i === "Others" ? customIssue : i))
//                     .join(", ")}
//                 </li>
//                 <li>
//                   <span className="font-semibold">Location:</span> {location}
//                 </li>
//                 <li>
//                   <span className="font-semibold">Phone:</span> {phoneNumber}
//                 </li>
//                 <li>
//                   <span className="font-semibold">Vehicle:</span> {vehicleNumber} (
//                   {vehicleTypes
//                     .map((v) => (v === "Others" ? customVehicleType : v))
//                     .join(", ")}
//                   )
//                 </li>
//                 <li>
//                   <span className="font-semibold">Model:</span> {vehicleModel}
//                 </li>
//                 <li>
//                   <span className="font-semibold">Notes:</span> {notes || "None"}
//                 </li>
//               </ul>

//               <div className="flex gap-3">
//                 <button
//                   onClick={() => setStep((s) => Math.max(1, s - 1))}
//                   className="flex-1 px-6 py-3 text-gray-700 bg-gray-200 rounded-lg"
//                 >
//                   Back
//                 </button>
//                 <button
//                   onClick={handleSubmit}
//                   className="flex-1 px-6 py-3 text-white bg-green-500 rounded-lg hover:bg-green-600"
//                 >
//                   Submit
//                 </button>
//               </div>
//             </>
//           )}

//           {/* Step 3 */}
//           {step === 3 && (
//             <div className="text-center">
//               <h2 className="mb-2 text-lg font-semibold">
//                 Finding Nearby Provider...
//               </h2>
//               <p className="mb-6 text-gray-600">
//                 Please wait while we connect you with the nearest available
//                 provider.
//               </p>
//               <div className="w-12 h-12 mx-auto mb-6 border-4 border-blue-600 rounded-full animate-spin border-t-transparent" />
//               <button
//                 onClick={() => setStep(4)}
//                 className="w-full py-3 font-bold text-white bg-blue-600 rounded-full hover:bg-blue-700"
//               >
//                 Continue
//               </button>
//             </div>
//           )}

//           {/* Step 4 */}
//           {step === 4 && (
//             <div className="flex flex-col items-center text-center">
//               <Check className="w-16 h-16 mb-4 text-green-500" />
//               <h1 className="mb-2 text-2xl font-bold">Help is on the way!</h1>
//               <p className="mb-6 text-gray-600">
//                 A nearby provider will contact you shortly.
//               </p>
//               <button
//                 onClick={handleBackDashboard}
//                 className="w-full py-3 font-bold text-white bg-blue-600 rounded-full hover:bg-blue-700"
//               >
//                 Back to Dashboard
//               </button>
//             </div>
//           )}
//         </div>
//       </main>

//       {/* Bottom Nav */}
//       <div ref={bottomWrapRef} className="fixed bottom-0 left-0 right-0 z-50">
//         <BottomNav />
//       </div>
//     </div>
//   );
// }





// "use client";

// import { useState, useRef } from "react";
// import { addDoc, collection, serverTimestamp } from "firebase/firestore";
// import { db } from "@/lib/firebaseConfig";
// import { useAuth } from "@/context/AuthContext";
// import BottomNav from "@/components/BottomNav";
// import { Check } from "lucide-react";

// export default function RequestPage() {
//   const { user } = useAuth();
//   const bottomWrapRef = useRef<HTMLDivElement>(null);

//   // Multi-select states
//   const [issueTypes, setIssueTypes] = useState<string[]>([]);
//   const [customIssue, setCustomIssue] = useState("");

//   const [vehicleTypes, setVehicleTypes] = useState<string[]>([]);
//   const [customVehicleType, setCustomVehicleType] = useState("");

//   // Nested for Book a Cab/Bike
//   const [cabOption, setCabOption] = useState<"Car" | "Bike" | "">("");
//   const [carSeaters, setCarSeaters] = useState<string[]>([]);

//   // Other form data
//   const [phoneNumber, setPhoneNumber] = useState("");
//   const [vehicleNumber, setVehicleNumber] = useState("");
//   const [vehicleModel, setVehicleModel] = useState("");
//   const [notes, setNotes] = useState("");
//   const [step, setStep] = useState(1);

//   const handleSubmit = async () => {
//     try {
//       // Expand issueTypes with nested values
//       let expandedIssues = [...issueTypes];

//       if (issueTypes.includes("Book a Cab/Bike")) {
//         if (cabOption === "Car") {
//           expandedIssues = expandedIssues.filter(i => i !== "Book a Cab/Bike"); // remove base
//           carSeaters.forEach(seat => {
//             expandedIssues.push(`Book a Cab/Bike - Car - ${seat}`);
//           });
//         } else if (cabOption === "Bike") {
//           expandedIssues = expandedIssues.filter(i => i !== "Book a Cab/Bike");
//           expandedIssues.push("Book a Cab/Bike - Bike");
//         }
//       }

//       // Replace "Others" with custom value
//       expandedIssues = expandedIssues.map(i =>
//         i === "Others" ? customIssue : i
//       );

//       const expandedVehicles = vehicleTypes.map(v =>
//         v === "Others" ? customVehicleType : v
//       );

//       await addDoc(collection(db, "requests"), {
//         issueTypes: expandedIssues,
//         vehicleTypes: expandedVehicles,
//         phoneNumber,
//         vehicleNumber,
//         vehicleModel,
//         notes,
//         status: "Pending",
//         createdAt: serverTimestamp(),
//         userName: user?.displayName || "Not provided",
//         email: user?.email || "Not provided",
//         uid: user?.uid || null,
//       });

//       setStep(3); // move to searching step
//     } catch (err) {
//       console.error("Error adding request:", err);
//     }
//   };

//   const handleBackDashboard = () => {
//     window.location.href = "/user";
//   };

//   return (
//     <div className="min-h-screen bg-gray-50">
//       <main className="px-4 py-6">
//         <div className="max-w-xl p-6 mx-auto bg-white rounded-lg shadow-md">
//           {/* Step 1 */}
//           {step === 1 && (
//             <>
//               <h2 className="mb-4 text-lg font-semibold">Request Assistance</h2>

//               {/* Issue Type */}
//               <div className="mb-4">
//                 <label className="block mb-2 text-sm font-medium">Issue Type</label>
//                 <select
//                   multiple
//                   value={issueTypes}
//                   onChange={e =>
//                     setIssueTypes(
//                       Array.from(e.target.selectedOptions, opt => opt.value)
//                     )
//                   }
//                   className="w-full h-32 px-4 bg-gray-100 rounded-lg"
//                 >
//                   <option value="Fuel Shortage">Fuel Shortage</option>
//                   <option value="Flat Tyre">Flat Tyre</option>
//                   <option value="Engine Breakdown">Engine Breakdown</option>
//                   <option value="Book a Cab/Bike">Book a Cab/Bike</option>
//                   <option value="Others">Others</option>
//                 </select>

//                 {/* Others custom input */}
//                 {issueTypes.includes("Others") && (
//                   <input
//                     type="text"
//                     value={customIssue}
//                     onChange={e => setCustomIssue(e.target.value)}
//                     placeholder="Specify your issue"
//                     className="w-full h-12 px-4 mt-2 bg-gray-100 rounded-lg"
//                   />
//                 )}

//                 {/* Nested Cab/Bike options */}
//                 {issueTypes.includes("Book a Cab/Bike") && (
//                   <div className="mt-3">
//                     <label className="block mb-1 text-sm font-medium">
//                       Choose Option
//                     </label>
//                     <select
//                       value={cabOption}
//                       onChange={e => {
//                         setCabOption(e.target.value as "Car" | "Bike" | "");
//                         setCarSeaters([]); // reset seaters when switching
//                       }}
//                       className="w-full h-12 px-4 bg-gray-100 rounded-lg"
//                     >
//                       <option value="">-- Select --</option>
//                       <option value="Car">Car</option>
//                       <option value="Bike">Bike</option>
//                     </select>

//                     {/* Car seaters */}
//                     {cabOption === "Car" && (
//                       <div className="mt-3">
//                         <label className="block mb-1 text-sm font-medium">
//                           Select Car Seaters
//                         </label>
//                         <select
//                           multiple
//                           value={carSeaters}
//                           onChange={e =>
//                             setCarSeaters(
//                               Array.from(e.target.selectedOptions, opt => opt.value)
//                             )
//                           }
//                           className="w-full h-24 px-4 bg-gray-100 rounded-lg"
//                         >
//                           <option value="4 Seater">4 Seater</option>
//                           <option value="6 Seater">6 Seater</option>
//                           <option value="7 Seater">7 Seater</option>
//                         </select>
//                       </div>
//                     )}
//                   </div>
//                 )}
//               </div>

//               {/* Vehicle Type */}
//               <div className="mb-4">
//                 <label className="block mb-2 text-sm font-medium">Vehicle Type</label>
//                 <select
//                   multiple
//                   value={vehicleTypes}
//                   onChange={e =>
//                     setVehicleTypes(
//                       Array.from(e.target.selectedOptions, opt => opt.value)
//                     )
//                   }
//                   className="w-full h-32 px-4 bg-gray-100 rounded-lg"
//                 >
//                   <option value="Bike">Bike</option>
//                   <option value="Car">Car</option>
//                   <option value="Truck">Truck</option>
//                   <option value="Others">Others</option>
//                 </select>

//                 {vehicleTypes.includes("Others") && (
//                   <input
//                     type="text"
//                     value={customVehicleType}
//                     onChange={e => setCustomVehicleType(e.target.value)}
//                     placeholder="Specify vehicle type"
//                     className="w-full h-12 px-4 mt-2 bg-gray-100 rounded-lg"
//                   />
//                 )}
//               </div>

//               {/* Other fields */}
//               <input
//                 type="text"
//                 placeholder="Phone Number"
//                 value={phoneNumber}
//                 onChange={e => setPhoneNumber(e.target.value)}
//                 className="w-full h-12 px-4 mb-4 bg-gray-100 rounded-lg"
//               />

//               <input
//                 type="text"
//                 placeholder="Vehicle Number"
//                 value={vehicleNumber}
//                 onChange={e => setVehicleNumber(e.target.value)}
//                 className="w-full h-12 px-4 mb-4 bg-gray-100 rounded-lg"
//               />

//               <input
//                 type="text"
//                 placeholder="Vehicle Model"
//                 value={vehicleModel}
//                 onChange={e => setVehicleModel(e.target.value)}
//                 className="w-full h-12 px-4 mb-4 bg-gray-100 rounded-lg"
//               />

//               <textarea
//                 placeholder="Additional Notes"
//                 value={notes}
//                 onChange={e => setNotes(e.target.value)}
//                 className="w-full px-4 py-2 mb-4 bg-gray-100 rounded-lg"
//               />

//               <button
//                 onClick={() => setStep(2)}
//                 className="w-full py-3 font-bold text-white bg-blue-600 rounded-full hover:bg-blue-700"
//               >
//                 Next
//               </button>
//             </>
//           )}

//           {/* Step 2: Confirmation */}
//           {step === 2 && (
//             <div>
//               <h2 className="mb-4 text-lg font-semibold">Confirm Your Request</h2>
//               <ul className="mb-6 space-y-2 text-sm text-gray-700">
//                 <li>
//                   <span className="font-semibold">Issues:</span>{" "}
//                   {issueTypes.join(", ")}
//                 </li>
//                 <li>
//                   <span className="font-semibold">Vehicle Types:</span>{" "}
//                   {vehicleTypes.join(", ")}
//                 </li>
//                 <li>
//                   <span className="font-semibold">Phone:</span> {phoneNumber}
//                 </li>
//                 <li>
//                   <span className="font-semibold">Vehicle Number:</span>{" "}
//                   {vehicleNumber}
//                 </li>
//                 <li>
//                   <span className="font-semibold">Model:</span> {vehicleModel}
//                 </li>
//                 <li>
//                   <span className="font-semibold">Notes:</span> {notes}
//                 </li>
//               </ul>

//               <div className="flex gap-4">
//                 <button
//                   onClick={() => setStep(1)}
//                   className="w-1/2 py-3 font-bold text-gray-700 bg-gray-200 rounded-lg"
//                 >
//                   Back
//                 </button>
//                 <button
//                   onClick={handleSubmit}
//                   className="w-1/2 py-3 font-bold text-white bg-green-500 rounded-lg hover:bg-green-600"
//                 >
//                   Submit
//                 </button>
//               </div>
//             </div>
//           )}

//           {/* Step 3: Finding Provider */}
//           {step === 3 && (
//             <div className="text-center">
//               <h2 className="mb-2 text-lg font-semibold">
//                 Finding Nearby Provider...
//               </h2>
//               <p className="mb-6 text-gray-600">
//                 Please wait while we connect you with the nearest available provider.
//               </p>
//               <div className="w-12 h-12 mx-auto mb-6 border-4 border-blue-600 rounded-full animate-spin border-t-transparent" />
//               <button
//                 onClick={() => setStep(4)}
//                 className="w-full py-3 font-bold text-white bg-blue-600 rounded-full hover:bg-blue-700"
//               >
//                 Continue
//               </button>
//             </div>
//           )}

//           {/* Step 4: Success */}
//           {step === 4 && (
//             <div className="flex flex-col items-center text-center">
//               <Check className="w-16 h-16 mb-4 text-green-500" />
//               <h1 className="mb-2 text-2xl font-bold">Help is on the way!</h1>
//               <p className="mb-6 text-gray-600">
//                 A nearby provider will contact you shortly.
//               </p>
//               <button
//                 onClick={handleBackDashboard}
//                 className="w-full py-3 font-bold text-white bg-blue-600 rounded-full hover:bg-blue-700"
//               >
//                 Back to Dashboard
//               </button>
//             </div>
//           )}
//         </div>
//       </main>

//       {/* Bottom Nav */}
//       <div ref={bottomWrapRef} className="fixed bottom-0 left-0 right-0 z-50">
//         <BottomNav />
//       </div>
//     </div>
//   );
// }
