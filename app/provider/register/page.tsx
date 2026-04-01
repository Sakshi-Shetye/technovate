// "use client";

// import { useState, useEffect } from "react";
// import { motion } from "framer-motion";
// import { useRouter } from "next/navigation";
// import { initializeApp, FirebaseApp } from 'firebase/app';
// import { getAuth, signInAnonymously, Auth } from 'firebase/auth';
// import { getFirestore, collection, addDoc, setLogLevel, Firestore } from 'firebase/firestore';

// // Load Firebase configuration from environment variables
// const firebaseConfig = {
//   apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
//   authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
//   projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
//   storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
//   appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID
// };

// // Initialize Firebase services only once.
// // This prevents multiple Firebase app instances from being created.
// let app: FirebaseApp | null = null;
// let auth: Auth | null = null;
// let db: Firestore | null = null;

// if (typeof window !== 'undefined' && firebaseConfig.apiKey) {
//   try {
//     app = initializeApp(firebaseConfig);
//     auth = getAuth(app);
//     db = getFirestore(app);
//     setLogLevel('debug'); // Enable debug logging for Firestore
//   } catch (error) {
//     console.error("Firebase initialization error:", error);
//   }
// }

// export default function ProviderRegistration() {
//   const [form, setForm] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     aadhaar: null as File | null,
//     license: null as File | null,
//     skills: [] as string[],
//   });
//   const [userId, setUserId] = useState<string | null>(null);
//   const [isLoading, setIsLoading] = useState(true);
//   const router = useRouter();

//   useEffect(() => {
//     // Check if Firebase auth is initialized before using it
//     if (!auth) {
//       console.error("Firebase Auth is not initialized.");
//       setIsLoading(false);
//       return;
//     }

//     const signIn = async () => {
//       try {
//         const userCredential = await signInAnonymously(auth);
//         setUserId(userCredential.user.uid);
//         console.log("Successfully signed in anonymously with user ID:", userCredential.user.uid);
//       } catch (error) {
//         console.error("Error signing in anonymously:", error);
//       } finally {
//         setIsLoading(false);
//       }
//     };
    
//     // Only sign in if no user ID exists
//     if (!userId) {
//       signIn();
//     } else {
//       setIsLoading(false);
//     }
//   }, [userId]);

//   const skillsList = [
//     "Fuel Delivery",
//     "Towing",
//     "Ambulance",
//     "Jump Start",
//     "Flat Tyre",
//   ];

//   const toggleSkill = (skill: string) => {
//     setForm((prev) => {
//       const hasSkill = prev.skills.includes(skill);
//       return {
//         ...prev,
//         skills: hasSkill
//           ? prev.skills.filter((s) => s !== skill)
//           : [...prev.skills, skill],
//       };
//     });
//   };

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value, files } = e.target;
//     if (files && (name === "aadhaar" || name === "license")) {
//       setForm({ ...form, [name]: files[0] });
//     } else {
//       setForm({ ...form, [name]: value });
//     }
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();

//     if (!db || !userId) {
//       console.error("Firestore not initialized or user not authenticated. Cannot submit form.");
//       return;
//     }

//     // NOTE: File fields (aadhaar, license) cannot be stored directly in Firestore.
//     // They require a separate service like Firebase Cloud Storage.
//     // For this example, we will save the file names or a simple placeholder.
//     const formDataToSave = {
//       ...form,
//       aadhaar: form.aadhaar?.name || null,
//       license: form.license?.name || null,
//       userId: userId,
//       status: "pending", // Initial status for admin review
//       timestamp: new Date().toISOString(),
//     };

//     try {
//       // Use Firestore collection path
//       const providersCollectionRef = collection(db, "providers");
//       const docRef = await addDoc(providersCollectionRef, formDataToSave);

//       console.log("Form submitted and saved to Firestore with ID:", docRef.id);

//       // Redirect to Profile page after successful submission
//       router.push("/provider/profile");
//     } catch (error) {
//       console.error("Error submitting form to Firestore:", error);
//     }
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen p-4 bg-gray-50">
//       <motion.div
//         className="w-full max-w-lg p-6 bg-white shadow-lg rounded-2xl"
//         initial={{ opacity: 0, y: 30 }}
//         animate={{ opacity: 1, y: 0 }}
//       >
//         <h2 className="mb-4 text-2xl font-bold text-center text-blue-600">
//           Provider Registration
//         </h2>

//         <form onSubmit={handleSubmit} className="space-y-4">
//           {/* Form fields... */}
//           {/* ... (rest of your form) */}
//           <div>
//             <label className="block text-sm font-medium text-gray-700">Full Name</label>
//             <input type="text" name="name" value={form.name} onChange={handleChange} required className="w-full p-2 mt-1 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none" />
//           </div>
//           <div>
//             <label className="block text-sm font-medium text-gray-700">Email</label>
//             <input type="email" name="email" value={form.email || ''} onChange={handleChange} required className="w-full p-2 mt-1 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none" />
//           </div>
//           <div>
//             <label className="block text-sm font-medium text-gray-700">Phone Number</label>
//             <input type="tel" name="phone" value={form.phone || ''} onChange={handleChange} required className="w-full p-2 mt-1 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none" />
//           </div>
//           <div>
//             <label className="block text-sm font-medium text-gray-700">Aadhaar Upload</label>
//             <input type="file" name="aadhaar" onChange={handleChange} required className="w-full mt-1" />
//           </div>
//           <div>
//             <label className="block text-sm font-medium text-gray-700">License Upload</label>
//             <input type="file" name="license" onChange={handleChange} required className="w-full mt-1" />
//           </div>
//           <div>
//             <label className="block mb-2 text-sm font-medium text-gray-700">Select Services</label>
//             <div className="flex flex-wrap gap-2">
//               {skillsList.map((skill) => (
//                 <button
//                   type="button"
//                   key={skill}
//                   onClick={() => toggleSkill(skill)}
//                   className={`px-3 py-1 rounded-full border ${
//                     form.skills.includes(skill)
//                       ? "bg-blue-600 text-white border-blue-600"
//                       : "bg-white text-gray-700 border-gray-300"
//                   }`}
//                 >
//                   {skill}
//                 </button>
//               ))}
//             </div>
//           </div>
//           <motion.button
//             whileTap={{ scale: 0.95 }}
//             type="submit"
//             disabled={isLoading || !userId}
//             className={`w-full py-2 rounded-lg font-semibold transition ${
//               isLoading || !userId
//                 ? "bg-gray-400 text-gray-700 cursor-not-allowed"
//                 : "bg-blue-600 text-white hover:bg-blue-700"
//             }`}
//           >
//             {isLoading ? "Connecting to service..." : "Submit Registration"}
//           </motion.button>
//         </form>

//         <p className="mt-4 text-sm text-center text-gray-500">
//           After submission, your profile will be reviewed by admin.
//         </p>
//       </motion.div>
//     </div>
//   );
// }




// "use client";

// import { useState, useEffect } from "react";
// import { motion } from "framer-motion";
// import { useRouter } from "next/navigation";
// import { initializeApp, FirebaseApp } from "firebase/app";
// import { getAuth, signInAnonymously, Auth } from "firebase/auth";
// import { getFirestore, collection, addDoc, setLogLevel, Firestore } from "firebase/firestore";
// import { Playfair_Display } from "next/font/google";

// const playfair = Playfair_Display({
//   subsets: ["latin"],
//   weight: ["600", "700"],
//   variable: "--font-playfair-display",
// });

// const firebaseConfig = {
//   apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
//   authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
//   projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
//   storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
//   appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
// };

// let app: FirebaseApp | null = null;
// let auth: Auth | null = null;
// let db: Firestore | null = null;

// if (typeof window !== "undefined" && firebaseConfig.apiKey) {
//   try {
//     app = initializeApp(firebaseConfig);
//     auth = getAuth(app);
//     db = getFirestore(app);
//     setLogLevel("debug");
//   } catch (error) {
//     console.error("Firebase initialization error:", error);
//   }
// }

// export default function ProviderRegisterPage() {
//   const [form, setForm] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     aadhaar: null as File | null,
//     pan: null as File | null,
//     license: null as File | null,
//     peso: null as File | null,
//     skills: [] as string[],
//     otherSkill: "",
//   });

//   const [userId, setUserId] = useState<string | null>(null);
//   const [isLoading, setIsLoading] = useState(true);
//   const router = useRouter();

//   useEffect(() => {
//     if (!auth) {
//       setIsLoading(false);
//       return;
//     }
//     const signIn = async () => {
//       try {
//         const userCredential = await signInAnonymously(auth);
//         setUserId(userCredential.user.uid);
//       } catch (error) {
//         console.error("Error signing in anonymously:", error);
//       } finally {
//         setIsLoading(false);
//       }
//     };
//     if (!userId) signIn();
//     else setIsLoading(false);
//   }, [userId]);

//   const skillsList = ["Fuel Delivery", "Towing", "Ambulance", "Jump Start", "Flat Tyre", "Others"];

//   const toggleSkill = (skill: string) => {
//     setForm((prev) => {
//       const hasSkill = prev.skills.includes(skill);
//       return {
//         ...prev,
//         skills: hasSkill ? prev.skills.filter((s) => s !== skill) : [...prev.skills, skill],
//       };
//     });
//   };

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value, files } = e.target;
//     if (files && ["aadhaar", "pan", "license", "peso"].includes(name)) {
//       setForm({ ...form, [name]: files[0] });
//     } else {
//       setForm({ ...form, [name]: value });
//     }
//   };

//   const validateForm = () => {
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     const phoneRegex = /^\+91\d{10}$/;

//     if (!form.name.trim()) return "Full name is required.";
//     if (!emailRegex.test(form.email)) return "Enter a valid email address.";
//     if (!phoneRegex.test(form.phone)) return "Phone must be in format +91XXXXXXXXXX (10 digits).";
//     if (!form.aadhaar) return "Aadhaar card is required.";
//     if (!form.pan) return "PAN card is required.";

//     return null;
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();

//     const errorMsg = validateForm();
//     if (errorMsg) {
//       alert(errorMsg);
//       return;
//     }

//     if (!db || !userId) {
//       console.error("Firestore not initialized or user not authenticated.");
//       return;
//     }

//     const formDataToSave = {
//       ...form,
//       aadhaar: form.aadhaar?.name || null,
//       pan: form.pan?.name || null,
//       license: form.license?.name || null,
//       peso: form.peso?.name || null,
//       otherSkill: form.otherSkill || null,
//       userId,
//       status: "pending",
//       timestamp: new Date().toISOString(),
//     };

//     try {
//       const providersCollectionRef = collection(db, "providers");
//       const docRef = await addDoc(providersCollectionRef, formDataToSave);
//       console.log("Form saved with ID:", docRef.id);
//       router.push("/provider/profile");
//     } catch (error) {
//       console.error("Error saving form:", error);
//     }
//   };

//   return (
//     <div className={`min-h-screen bg-sky-100 flex justify-center items-center p-4 ${playfair.variable}`}>
//       <motion.div
//         className="w-full max-w-lg p-6 bg-white shadow-lg rounded-2xl"
//         initial={{ opacity: 0, y: 30 }}
//         animate={{ opacity: 1, y: 0 }}
//       >
//         <h1 className="mb-2 text-3xl font-bold text-center text-blue-600">Application Form</h1>
//         <p className="mb-6 text-center text-gray-600">
//           Join our platform as a <span className="font-semibold">Service Provider</span>.
//         </p>

//         <form onSubmit={handleSubmit} className="space-y-4">
//           {/* Name */}
//           <div>
//             <label className="block text-sm font-medium text-gray-700">Full Name</label>
//             <input type="text" name="name" value={form.name} onChange={handleChange} required className="w-full p-2 mt-1 border rounded-lg" />
//           </div>

//           {/* Email */}
//           <div>
//             <label className="block text-sm font-medium text-gray-700">Email</label>
//             <input type="email" name="email" value={form.email} onChange={handleChange} required className="w-full p-2 mt-1 border rounded-lg" placeholder="example@mail.com" />
//           </div>

//           {/* Phone */}
//           <div>
//             <label className="block text-sm font-medium text-gray-700">Phone Number</label>
//             <input type="tel" name="phone" value={form.phone} onChange={handleChange} required className="w-full p-2 mt-1 border rounded-lg" placeholder="+911234567890" />
//           </div>

//           {/* Aadhaar (Required) */}
//           <div>
//             <label className="block text-sm font-medium text-gray-700">Aadhaar Upload *</label>
//             <input type="file" name="aadhaar" onChange={handleChange} required className="w-full mt-1" />
//           </div>

//           {/* PAN (Required) */}
//           <div>
//             <label className="block text-sm font-medium text-gray-700">PAN Card Upload *</label>
//             <input type="file" name="pan" onChange={handleChange} required className="w-full mt-1" />
//           </div>

//           {/* Driving License (Optional) */}
//           <div>
//             <label className="block text-sm font-medium text-gray-700">Driving License Upload (Optional)</label>
//             <input type="file" name="license" onChange={handleChange} className="w-full mt-1" />
//           </div>

//           {/* PESO (Optional) */}
//           <div>
//             <label className="block text-sm font-medium text-gray-700">PESO License Upload (Optional)</label>
//             <input type="file" name="peso" onChange={handleChange} className="w-full mt-1" />
//           </div>

//           {/* Services */}
//           <div>
//             <label className="block mb-2 text-sm font-medium text-gray-700">Select Services</label>
//             <div className="flex flex-wrap gap-2">
//               {skillsList.map((skill) => (
//                 <button
//                   type="button"
//                   key={skill}
//                   onClick={() => toggleSkill(skill)}
//                   className={`px-3 py-1 rounded-full border ${
//                     form.skills.includes(skill) ? "bg-blue-600 text-white border-blue-600" : "bg-white text-gray-700 border-gray-300"
//                   }`}
//                 >
//                   {skill}
//                 </button>
//               ))}
//             </div>
//             {/* Show input when "Others" is selected */}
//             {form.skills.includes("Others") && (
//               <input
//                 type="text"
//                 name="otherSkill"
//                 value={form.otherSkill}
//                 onChange={handleChange}
//                 placeholder="Enter your service"
//                 className="w-full p-2 mt-3 border rounded-lg"
//               />
//             )}
//           </div>

//           {/* Submit Button */}
//           <motion.button
//             whileTap={{ scale: 0.95 }}
//             type="submit"
//             disabled={isLoading || !userId}
//             className={`w-full py-2 rounded-lg font-semibold transition ${
//               isLoading || !userId ? "bg-gray-400 text-gray-700 cursor-not-allowed" : "bg-blue-600 text-white hover:bg-blue-700"
//             }`}
//           >
//             {isLoading ? "Connecting..." : "Submit Registration"}
//           </motion.button>
//         </form>

//         <p className="mt-4 text-sm text-center text-gray-500">After submission, admin will review your profile.</p>
//       </motion.div>
//     </div>
//   );
// }




// "use client";

// import { useState, useEffect } from "react";
// import { motion } from "framer-motion";
// import { useRouter } from "next/navigation";
// import { initializeApp, getApps, getApp } from "firebase/app";
// import { getAuth, signInAnonymously } from "firebase/auth";
// import { getFirestore, collection, addDoc, setLogLevel } from "firebase/firestore";
// import { Playfair_Display } from "next/font/google";

// const playfair = Playfair_Display({
//   subsets: ["latin"],
//   weight: ["600", "700"],
//   variable: "--font-playfair-display",
// });

// export default function ProviderRegisterPage() {
//   const [form, setForm] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     aadhaar: null as File | null,
//     pan: null as File | null,
//     license: null as File | null,
//     peso: null as File | null,
//     skills: [] as string[],
//     otherSkill: "",
//   });

//   const [userId, setUserId] = useState<string | null>(null);
//   const [isLoading, setIsLoading] = useState(true);
//   const router = useRouter();

//   // Initialize Firebase safely
//   useEffect(() => {
//     if (!process.env.NEXT_PUBLIC_FIREBASE_API_KEY) {
//       console.error("Firebase config missing");
//       setIsLoading(false);
//       return;
//     }

//     let app;
//     if (!getApps().length) {
//       app = initializeApp({
//         apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY!,
//         authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN!,
//         projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID!,
//         storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET!,
//         messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID!,
//         appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID!,
//       });
//     } else {
//       app = getApp();
//     }

//     const auth = getAuth(app);
//     const db = getFirestore(app);
//     setLogLevel("debug");

//     const signIn = async () => {
//       try {
//         const userCredential = await signInAnonymously(auth);
//         setUserId(userCredential.user.uid);
//       } catch (error) {
//         console.error("Anonymous sign-in failed:", error);
//       } finally {
//         setIsLoading(false);
//       }
//     };

//     if (!userId) signIn();
//   }, [userId]);

//   // -------------------
//   // Helpers
//   // -------------------
//   const skillsList = ["Fuel Delivery", "Towing", "Jump Start", "Flat Tyre", "Driver" ," Others"];

//   const toggleSkill = (skill: string) => {
//     setForm((prev) => {
//       const hasSkill = prev.skills.includes(skill);
//       return {
//         ...prev,
//         skills: hasSkill ? prev.skills.filter((s) => s !== skill) : [...prev.skills, skill],
//       };
//     });
//   };

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value, files } = e.target;
//     if (files && ["aadhaar", "pan", "license", "peso"].includes(name)) {
//       setForm({ ...form, [name]: files[0] });
//     } else {
//       setForm({ ...form, [name]: value });
//     }
//   };

//   const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     let value = e.target.value.replace(/\D/g, "");
//     if (value.startsWith("91")) value = value.slice(2);
//     if (value.length > 10) value = value.slice(0, 10);
//     setForm({ ...form, phone: "+91" + value });
//   };

//   const addOtherSkill = () => {
//     if (form.otherSkill.trim()) {
//       if (!form.skills.includes(form.otherSkill)) {
//         setForm((prev) => ({
//           ...prev,
//           skills: [...prev.skills, form.otherSkill],
//           otherSkill: "",
//         }));
//       } else {
//         setForm((prev) => ({ ...prev, otherSkill: "" }));
//       }
//     }
//   };

//   const validateForm = () => {
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     const phoneRegex = /^\+91\d{10}$/;

//     if (!form.name.trim()) return "Full name is required.";
//     if (!emailRegex.test(form.email)) return "Enter a valid email address.";
//     if (!phoneRegex.test(form.phone)) return "Phone must be in format +91XXXXXXXXXX (10 digits).";
//     if (!form.aadhaar) return "Aadhaar card is required.";
//     if (!form.pan) return "PAN card is required.";

//     return null;
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();

//     const errorMsg = validateForm();
//     if (errorMsg) {
//       alert(errorMsg);
//       return;
//     }

//     try {
//       const db = getFirestore(getApp());
//       const formDataToSave = {
//         ...form,
//         aadhaar: form.aadhaar?.name || null,
//         pan: form.pan?.name || null,
//         license: form.license?.name || null,
//         peso: form.peso?.name || null,
//         otherSkill: form.otherSkill || null,
//         userId,
//         status: "pending",
//         timestamp: new Date().toISOString(),
//       };

//       const providersCollectionRef = collection(db, "providers");
//       await addDoc(providersCollectionRef, formDataToSave);

//       router.push("/provider/profile");
//     } catch (error) {
//       console.error("Error saving form:", error);
//     }
//   };

//   // -------------------
//   // Render
//   // -------------------
//   return (
//     <div className={`min-h-screen bg-sky-100 flex justify-center items-center p-4 ${playfair.variable}`}>
//       <motion.div
//         className="w-full max-w-lg p-6 bg-white shadow-lg rounded-2xl"
//         initial={{ opacity: 0, y: 30 }}
//         animate={{ opacity: 1, y: 0 }}
//       >
//         <h1 className="mb-2 text-3xl font-bold text-center text-blue-600">Application Form</h1>
//         <p className="mb-6 text-center text-gray-600">
//           Join our platform as a <span className="font-semibold">Service Provider</span>.
//         </p>

//         <form onSubmit={handleSubmit} className="space-y-4">
//           {/* Full Name */}
//           <div>
//             <label className="block text-sm font-medium text-gray-700">Full Name</label>
//             <input type="text" name="name" value={form.name} onChange={handleChange} required className="w-full p-2 mt-1 border rounded-lg" />
//           </div>

//           {/* Email */}
//           <div>
//             <label className="block text-sm font-medium text-gray-700">Email</label>
//             <input type="email" name="email" value={form.email} onChange={handleChange} required className="w-full p-2 mt-1 border rounded-lg" placeholder="example@mail.com" />
//           </div>

//           {/* Phone */}
//           <div>
//             <label className="block text-sm font-medium text-gray-700">Phone Number</label>
//             <input
//               type="tel"
//               name="phone"
//               value={form.phone}
//               onChange={handlePhoneChange}
//               required
//               className="w-full p-2 mt-1 border rounded-lg"
//               placeholder="+91XXXXXXXXXX"
//             />
//           </div>

//           {/* Aadhaar */}
//           <div>
//             <label className="block text-sm font-medium text-gray-700">Aadhaar Upload *</label>
//             <input type="file" name="aadhaar" onChange={handleChange} required className="w-full mt-1" />
//           </div>

//           {/* PAN */}
//           <div>
//             <label className="block text-sm font-medium text-gray-700">PAN Card Upload *</label>
//             <input type="file" name="pan" onChange={handleChange} required className="w-full mt-1" />
//           </div>

//           {/* License */}
//           <div>
//             <label className="block text-sm font-medium text-gray-700">Driving License Upload (Optional)</label>
//             <input type="file" name="license" onChange={handleChange} className="w-full mt-1" />
//           </div>

//           {/* PESO */}
//           <div>
//             <label className="block text-sm font-medium text-gray-700">PESO License Upload (Optional)</label>
//             <input type="file" name="peso" onChange={handleChange} className="w-full mt-1" />
//           </div>

//           {/* Services */}
//           <div>
//             <label className="block mb-2 text-sm font-medium text-gray-700">Select Services</label>
//             <div className="flex flex-wrap gap-2">
//               {skillsList.map((skill) => (
//                 <button
//                   type="button"
//                   key={skill}
//                   onClick={() => toggleSkill(skill)}
//                   className={`px-3 py-1 rounded-full border ${
//                     form.skills.includes(skill) ? "bg-blue-600 text-white border-blue-600" : "bg-white text-gray-700 border-gray-300"
//                   }`}
//                 >
//                   {skill}
//                 </button>
//               ))}
//               {/* Custom skills */}
//               {form.skills
//                 .filter((skill) => !skillsList.includes(skill))
//                 .map((skill) => (
//                   <button
//                     type="button"
//                     key={skill}
//                     onClick={() => toggleSkill(skill)}
//                     className="px-3 py-1 text-white bg-blue-600 border border-blue-600 rounded-full"
//                   >
//                     {skill}
//                   </button>
//                 ))}
//             </div>

//             {/* Input for "Others" */}
//             {form.skills.includes("Others") && (
//               <div className="flex items-center gap-2 mt-3">
//                 <input
//                   type="text"
//                   name="otherSkill"
//                   value={form.otherSkill}
//                   onChange={handleChange}
//                   placeholder="Enter your service"
//                   className="flex-1 p-2 border rounded-lg"
//                 />
//                 <button type="button" onClick={addOtherSkill} className="px-3 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700">
//                   ➝
//                 </button>
//               </div>
//             )}
//           </div>

//           {/* Submit */}
//           <motion.button
//             whileTap={{ scale: 0.95 }}
//             type="submit"
//             disabled={isLoading || !userId}
//             className={`w-full py-2 rounded-lg font-semibold transition ${
//               isLoading || !userId ? "bg-gray-400 text-gray-700 cursor-not-allowed" : "bg-blue-600 text-white hover:bg-blue-700"
//             }`}
//           >
//             {isLoading ? "Connecting..." : "Submit Registration"}
//           </motion.button>
//         </form>
//       </motion.div>
//     </div>
//   );
// }




// "use client";

// import { useState, useEffect } from "react";
// import { motion } from "framer-motion";
// import { useRouter } from "next/navigation";
// import { initializeApp, getApps, getApp } from "firebase/app";
// import {
//   getAuth,
//   onAuthStateChanged,
//   createUserWithEmailAndPassword,
//   signInWithEmailAndPassword,
// } from "firebase/auth";
// import { getFirestore, collection, addDoc, setLogLevel } from "firebase/firestore";
// import { Playfair_Display } from "next/font/google";

// const playfair = Playfair_Display({
//   subsets: ["latin"],
//   weight: ["600", "700"],
//   variable: "--font-playfair-display",
// });

// export default function ProviderRegisterPage() {
//   const [form, setForm] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     aadhaar: null as File | null,
//     pan: null as File | null,
//     license: null as File | null,
//     peso: null as File | null,
//     skills: [] as string[],
//     otherSkill: "",
//     // added for auth
//     password: "",
//     confirmPassword: "",
//   });

//   const [userId, setUserId] = useState<string | null>(null);
//   const [isLoading, setIsLoading] = useState(true);
//   const router = useRouter();

//   // Initialize Firebase safely (no anonymous sign-in)
//   useEffect(() => {
//     if (!process.env.NEXT_PUBLIC_FIREBASE_API_KEY) {
//       console.error("Firebase config missing");
//       setIsLoading(false);
//       return;
//     }

//     let app;
//     if (!getApps().length) {
//       app = initializeApp({
//         apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY!,
//         authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN!,
//         projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID!,
//         storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET!,
//         messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID!,
//         appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID!,
//       });
//     } else {
//       app = getApp();
//     }

//     const auth = getAuth(app);
//     const db = getFirestore(app);
//     setLogLevel("debug");

//     // track current auth state (if the user is already logged in, use that UID)
//     const unsub = onAuthStateChanged(auth, (u) => {
//       setUserId(u ? u.uid : null);
//       setIsLoading(false);
//     });

//     return () => unsub();
//   }, []);

//   // -------------------
//   // Helpers
//   // -------------------
//   // fixed stray space and made label consistent with conditional below
//   const skillsList = ["Fuel Delivery", "Towing", "Jump Start", "Flat Tyre", "Driver", "Others"];

//   const toggleSkill = (skill: string) => {
//     setForm((prev) => {
//       const hasSkill = prev.skills.includes(skill);
//       return {
//         ...prev,
//         skills: hasSkill ? prev.skills.filter((s) => s !== skill) : [...prev.skills, skill],
//       };
//     });
//   };

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value, files } = e.target;
//     if (files && ["aadhaar", "pan", "license", "peso"].includes(name)) {
//       setForm((prev) => ({ ...prev, [name]: files[0] }));
//     } else {
//       setForm((prev) => ({ ...prev, [name]: value }));
//     }
//   };

//   const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     let value = e.target.value.replace(/\D/g, "");
//     if (value.startsWith("91")) value = value.slice(2);
//     if (value.length > 10) value = value.slice(0, 10);
//     setForm((prev) => ({ ...prev, phone: "+91" + value }));
//   };

//   const addOtherSkill = () => {
//     if (form.otherSkill.trim()) {
//       if (!form.skills.includes(form.otherSkill)) {
//         setForm((prev) => ({
//           ...prev,
//           skills: [...prev.skills, prev.otherSkill.trim()],
//           otherSkill: "",
//         }));
//       } else {
//         setForm((prev) => ({ ...prev, otherSkill: "" }));
//       }
//     }
//   };

//   const validateForm = () => {
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     const phoneRegex = /^\+91\d{10}$/;

//     if (!form.name.trim()) return "Full name is required.";
//     if (!emailRegex.test(form.email)) return "Enter a valid email address.";
//     if (!phoneRegex.test(form.phone)) return "Phone must be in format +91XXXXXXXXXX (10 digits).";
//     if (!form.aadhaar) return "Aadhaar card is required.";
//     if (!form.pan) return "PAN card is required.";
//     if (!form.password || form.password.length < 6)
//       return "Password must be at least 6 characters.";
//     if (form.password !== form.confirmPassword)
//       return "Password and Confirm Password do not match.";

//     return null;
//   };

//   const ensureAuth = async () => {
//     // Creates the account if not logged in; if email exists, it signs in.
//     const app = getApp();
//     const auth = getAuth(app);

//     if (auth.currentUser?.uid) return auth.currentUser.uid;

//     try {
//       const cred = await createUserWithEmailAndPassword(auth, form.email, form.password);
//       return cred.user.uid;
//     } catch (err: any) {
//       // If email already exists, sign in instead
//       if (err?.code === "auth/email-already-in-use") {
//         const cred = await signInWithEmailAndPassword(auth, form.email, form.password);
//         return cred.user.uid;
//       }
//       throw err;
//     }
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();

//     const errorMsg = validateForm();
//     if (errorMsg) {
//       alert(errorMsg);
//       return;
//     }

//     setIsLoading(true);
//     try {
//       // 1) Ensure the user is authenticated with email+password (no anonymous)
//       const uid = await ensureAuth();
//       setUserId(uid);

//       // 2) Save form data to Firestore (do NOT save password fields)
//       const db = getFirestore(getApp());
//       const formDataToSave = {
//         name: form.name,
//         email: form.email,
//         phone: form.phone,
//         aadhaar: form.aadhaar?.name || null,
//         pan: form.pan?.name || null,
//         license: form.license?.name || null,
//         peso: form.peso?.name || null,
//         skills: form.skills,
//         otherSkill: form.otherSkill || null,
//         userId: uid,
//         status: "pending",
//         timestamp: new Date().toISOString(),
//       };

//       const providersCollectionRef = collection(db, "providers");
//       await addDoc(providersCollectionRef, formDataToSave);

//       router.push("/provider/profile");
//     } catch (error) {
//       console.error("Error saving form:", error);
//       alert("There was a problem submitting your registration. Please try again.");
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   // -------------------
//   // Render
//   // -------------------
//   return (
//     <div className={`min-h-screen bg-sky-100 flex justify-center items-center p-4 ${playfair.variable}`}>
//       <motion.div
//         className="w-full max-w-lg p-6 bg-white shadow-lg rounded-2xl"
//         initial={{ opacity: 0, y: 30 }}
//         animate={{ opacity: 1, y: 0 }}
//       >
//         <h1 className="mb-2 text-3xl font-bold text-center text-blue-600">Application Form</h1>
//         <p className="mb-6 text-center text-gray-600">
//           Join our platform as a <span className="font-semibold">Service Provider</span>.
//         </p>

//         <form onSubmit={handleSubmit} className="space-y-4">
//           {/* Full Name */}
//           <div>
//             <label className="block text-sm font-medium text-gray-700">Full Name</label>
//             <input
//               type="text"
//               name="name"
//               value={form.name}
//               onChange={handleChange}
//               required
//               className="w-full p-2 mt-1 border rounded-lg"
//             />
//           </div>

//           {/* Email */}
//           <div>
//             <label className="block text-sm font-medium text-gray-700">Email</label>
//             <input
//               type="email"
//               name="email"
//               value={form.email}
//               onChange={handleChange}
//               required
//               className="w-full p-2 mt-1 border rounded-lg"
//               placeholder="example@mail.com"
//             />
//           </div>

//           {/* Password */}
//           <div>
//             <label className="block text-sm font-medium text-gray-700">Password</label>
//             <input
//               type="password"
//               name="password"
//               value={form.password}
//               onChange={handleChange}
//               required
//               className="w-full p-2 mt-1 border rounded-lg"
//               placeholder="At least 6 characters"
//               autoComplete="new-password"
//             />
//           </div>

//           {/* Confirm Password */}
//           <div>
//             <label className="block text-sm font-medium text-gray-700">Confirm Password</label>
//             <input
//               type="password"
//               name="confirmPassword"
//               value={form.confirmPassword}
//               onChange={handleChange}
//               required
//               className="w-full p-2 mt-1 border rounded-lg"
//               placeholder="Re-enter password"
//               autoComplete="new-password"
//             />
//           </div>

//           {/* Phone */}
//           <div>
//             <label className="block text-sm font-medium text-gray-700">Phone Number</label>
//             <input
//               type="tel"
//               name="phone"
//               value={form.phone}
//               onChange={handlePhoneChange}
//               required
//               className="w-full p-2 mt-1 border rounded-lg"
//               placeholder="+91XXXXXXXXXX"
//             />
//           </div>

//           {/* Aadhaar */}
//           <div>
//             <label className="block text-sm font-medium text-gray-700">Aadhaar Upload *</label>
//             <input type="file" name="aadhaar" onChange={handleChange} required className="w-full mt-1" />
//           </div>

//           {/* PAN */}
//           <div>
//             <label className="block text-sm font-medium text-gray-700">PAN Card Upload *</label>
//             <input type="file" name="pan" onChange={handleChange} required className="w-full mt-1" />
//           </div>

//           {/* License */}
//           <div>
//             <label className="block text-sm font-medium text-gray-700">Driving License Upload (Optional)</label>
//             <input type="file" name="license" onChange={handleChange} className="w-full mt-1" />
//           </div>

//           {/* PESO */}
//           <div>
//             <label className="block text-sm font-medium text-gray-700">PESO License Upload (Optional)</label>
//             <input type="file" name="peso" onChange={handleChange} className="w-full mt-1" />
//           </div>

//           {/* Services */}
//           <div>
//             <label className="block mb-2 text-sm font-medium text-gray-700">Select Services</label>
//             <div className="flex flex-wrap gap-2">
//               {skillsList.map((skill) => (
//                 <button
//                   type="button"
//                   key={skill}
//                   onClick={() => toggleSkill(skill)}
//                   className={`px-3 py-1 rounded-full border ${
//                     form.skills.includes(skill)
//                       ? "bg-blue-600 text-white border-blue-600"
//                       : "bg-white text-gray-700 border-gray-300"
//                   }`}
//                 >
//                   {skill}
//                 </button>
//               ))}
//               {/* Custom skills (entered through "Others") */}
//               {form.skills
//                 .filter((skill) => !skillsList.includes(skill))
//                 .map((skill) => (
//                   <button
//                     type="button"
//                     key={skill}
//                     onClick={() => toggleSkill(skill)}
//                     className="px-3 py-1 text-white bg-blue-600 border border-blue-600 rounded-full"
//                   >
//                     {skill}
//                   </button>
//                 ))}
//             </div>

//             {/* Input for "Others" */}
//             {form.skills.includes("Others") && (
//               <div className="flex items-center gap-2 mt-3">
//                 <input
//                   type="text"
//                   name="otherSkill"
//                   value={form.otherSkill}
//                   onChange={handleChange}
//                   placeholder="Enter your service"
//                   className="flex-1 p-2 border rounded-lg"
//                 />
//                 <button
//                   type="button"
//                   onClick={addOtherSkill}
//                   className="px-3 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700"
//                   title="Add"
//                 >
//                   ➝
//                 </button>
//               </div>
//             )}
//           </div>

//           {/* Submit */}
//           <motion.button
//             whileTap={{ scale: 0.95 }}
//             type="submit"
//             disabled={isLoading}
//             className={`w-full py-2 rounded-lg font-semibold transition ${
//               isLoading ? "bg-gray-400 text-gray-700 cursor-not-allowed" : "bg-blue-600 text-white hover:bg-blue-700"
//             }`}
//           >
//             {isLoading ? "Processing..." : "Submit Registration"}
//           </motion.button>
//         </form>
//       </motion.div>
//     </div>
//   );
// }




// "use client";

// import { useState, useEffect } from "react";
// import { motion } from "framer-motion";
// import { useRouter } from "next/navigation";
// import { initializeApp, FirebaseApp } from 'firebase/app';
// import { getAuth, signInAnonymously, Auth } from 'firebase/auth';
// import { getFirestore, collection, addDoc, setLogLevel, Firestore } from 'firebase/firestore';

// // Load Firebase configuration from environment variables
// const firebaseConfig = {
//   apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
//   authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
//   projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
//   storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
//   appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID
// };

// // Initialize Firebase services only once.
// // This prevents multiple Firebase app instances from being created.
// let app: FirebaseApp | null = null;
// let auth: Auth | null = null;
// let db: Firestore | null = null;

// if (typeof window !== 'undefined' && firebaseConfig.apiKey) {
//   try {
//     app = initializeApp(firebaseConfig);
//     auth = getAuth(app);
//     db = getFirestore(app);
//     setLogLevel('debug'); // Enable debug logging for Firestore
//   } catch (error) {
//     console.error("Firebase initialization error:", error);
//   }
// }

// export default function ProviderRegistration() {
//   const [form, setForm] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     aadhaar: null as File | null,
//     license: null as File | null,
//     skills: [] as string[],
//   });
//   const [userId, setUserId] = useState<string | null>(null);
//   const [isLoading, setIsLoading] = useState(true);
//   const router = useRouter();

//   useEffect(() => {
//     // Check if Firebase auth is initialized before using it
//     if (!auth) {
//       console.error("Firebase Auth is not initialized.");
//       setIsLoading(false);
//       return;
//     }

//     const signIn = async () => {
//       try {
//         const userCredential = await signInAnonymously(auth);
//         setUserId(userCredential.user.uid);
//         console.log("Successfully signed in anonymously with user ID:", userCredential.user.uid);
//       } catch (error) {
//         console.error("Error signing in anonymously:", error);
//       } finally {
//         setIsLoading(false);
//       }
//     };
    
//     // Only sign in if no user ID exists
//     if (!userId) {
//       signIn();
//     } else {
//       setIsLoading(false);
//     }
//   }, [userId]);

//   const skillsList = [
//     "Fuel Delivery",
//     "Towing",
//     "Ambulance",
//     "Jump Start",
//     "Flat Tyre",
//   ];

//   const toggleSkill = (skill: string) => {
//     setForm((prev) => {
//       const hasSkill = prev.skills.includes(skill);
//       return {
//         ...prev,
//         skills: hasSkill
//           ? prev.skills.filter((s) => s !== skill)
//           : [...prev.skills, skill],
//       };
//     });
//   };

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value, files } = e.target;
//     if (files && (name === "aadhaar" || name === "license")) {
//       setForm({ ...form, [name]: files[0] });
//     } else {
//       setForm({ ...form, [name]: value });
//     }
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();

//     if (!db || !userId) {
//       console.error("Firestore not initialized or user not authenticated. Cannot submit form.");
//       return;
//     }

//     // NOTE: File fields (aadhaar, license) cannot be stored directly in Firestore.
//     // They require a separate service like Firebase Cloud Storage.
//     // For this example, we will save the file names or a simple placeholder.
//     const formDataToSave = {
//       ...form,
//       aadhaar: form.aadhaar?.name || null,
//       license: form.license?.name || null,
//       userId: userId,
//       status: "pending", // Initial status for admin review
//       timestamp: new Date().toISOString(),
//     };

//     try {
//       // Use Firestore collection path
//       const providersCollectionRef = collection(db, "providers");
//       const docRef = await addDoc(providersCollectionRef, formDataToSave);

//       console.log("Form submitted and saved to Firestore with ID:", docRef.id);

//       // Redirect to Profile page after successful submission
//       router.push("/provider/profile");
//     } catch (error) {
//       console.error("Error submitting form to Firestore:", error);
//     }
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen p-4 bg-gray-50">
//       <motion.div
//         className="w-full max-w-lg p-6 bg-white shadow-lg rounded-2xl"
//         initial={{ opacity: 0, y: 30 }}
//         animate={{ opacity: 1, y: 0 }}
//       >
//         <h2 className="mb-4 text-2xl font-bold text-center text-blue-600">
//           Provider Registration
//         </h2>

//         <form onSubmit={handleSubmit} className="space-y-4">
//           {/* Form fields... */}
//           {/* ... (rest of your form) */}
//           <div>
//             <label className="block text-sm font-medium text-gray-700">Full Name</label>
//             <input type="text" name="name" value={form.name} onChange={handleChange} required className="w-full p-2 mt-1 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none" />
//           </div>
//           <div>
//             <label className="block text-sm font-medium text-gray-700">Email</label>
//             <input type="email" name="email" value={form.email || ''} onChange={handleChange} required className="w-full p-2 mt-1 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none" />
//           </div>
//           <div>
//             <label className="block text-sm font-medium text-gray-700">Phone Number</label>
//             <input type="tel" name="phone" value={form.phone || ''} onChange={handleChange} required className="w-full p-2 mt-1 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none" />
//           </div>
//           <div>
//             <label className="block text-sm font-medium text-gray-700">Aadhaar Upload</label>
//             <input type="file" name="aadhaar" onChange={handleChange} required className="w-full mt-1" />
//           </div>
//           <div>
//             <label className="block text-sm font-medium text-gray-700">License Upload</label>
//             <input type="file" name="license" onChange={handleChange} required className="w-full mt-1" />
//           </div>
//           <div>
//             <label className="block mb-2 text-sm font-medium text-gray-700">Select Services</label>
//             <div className="flex flex-wrap gap-2">
//               {skillsList.map((skill) => (
//                 <button
//                   type="button"
//                   key={skill}
//                   onClick={() => toggleSkill(skill)}
//                   className={`px-3 py-1 rounded-full border ${
//                     form.skills.includes(skill)
//                       ? "bg-blue-600 text-white border-blue-600"
//                       : "bg-white text-gray-700 border-gray-300"
//                   }`}
//                 >
//                   {skill}
//                 </button>
//               ))}
//             </div>
//           </div>
//           <motion.button
//             whileTap={{ scale: 0.95 }}
//             type="submit"
//             disabled={isLoading || !userId}
//             className={`w-full py-2 rounded-lg font-semibold transition ${
//               isLoading || !userId
//                 ? "bg-gray-400 text-gray-700 cursor-not-allowed"
//                 : "bg-blue-600 text-white hover:bg-blue-700"
//             }`}
//           >
//             {isLoading ? "Connecting to service..." : "Submit Registration"}
//           </motion.button>
//         </form>

//         <p className="mt-4 text-sm text-center text-gray-500">
//           After submission, your profile will be reviewed by admin.
//         </p>
//       </motion.div>
//     </div>
//   );
// }




// "use client";

// import { useState, useEffect } from "react";
// import { motion } from "framer-motion";
// import { useRouter } from "next/navigation";
// import { initializeApp, FirebaseApp } from "firebase/app";
// import { getAuth, signInAnonymously, Auth } from "firebase/auth";
// import { getFirestore, collection, addDoc, setLogLevel, Firestore } from "firebase/firestore";
// import { Playfair_Display } from "next/font/google";

// const playfair = Playfair_Display({
//   subsets: ["latin"],
//   weight: ["600", "700"],
//   variable: "--font-playfair-display",
// });

// const firebaseConfig = {
//   apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
//   authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
//   projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
//   storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
//   appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
// };

// let app: FirebaseApp | null = null;
// let auth: Auth | null = null;
// let db: Firestore | null = null;

// if (typeof window !== "undefined" && firebaseConfig.apiKey) {
//   try {
//     app = initializeApp(firebaseConfig);
//     auth = getAuth(app);
//     db = getFirestore(app);
//     setLogLevel("debug");
//   } catch (error) {
//     console.error("Firebase initialization error:", error);
//   }
// }

// export default function ProviderRegisterPage() {
//   const [form, setForm] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     aadhaar: null as File | null,
//     pan: null as File | null,
//     license: null as File | null,
//     peso: null as File | null,
//     skills: [] as string[],
//     otherSkill: "",
//   });

//   const [userId, setUserId] = useState<string | null>(null);
//   const [isLoading, setIsLoading] = useState(true);
//   const router = useRouter();

//   useEffect(() => {
//     if (!auth) {
//       setIsLoading(false);
//       return;
//     }
//     const signIn = async () => {
//       try {
//         const userCredential = await signInAnonymously(auth);
//         setUserId(userCredential.user.uid);
//       } catch (error) {
//         console.error("Error signing in anonymously:", error);
//       } finally {
//         setIsLoading(false);
//       }
//     };
//     if (!userId) signIn();
//     else setIsLoading(false);
//   }, [userId]);

//   const skillsList = ["Fuel Delivery", "Towing", "Ambulance", "Jump Start", "Flat Tyre", "Others"];

//   const toggleSkill = (skill: string) => {
//     setForm((prev) => {
//       const hasSkill = prev.skills.includes(skill);
//       return {
//         ...prev,
//         skills: hasSkill ? prev.skills.filter((s) => s !== skill) : [...prev.skills, skill],
//       };
//     });
//   };

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value, files } = e.target;
//     if (files && ["aadhaar", "pan", "license", "peso"].includes(name)) {
//       setForm({ ...form, [name]: files[0] });
//     } else {
//       setForm({ ...form, [name]: value });
//     }
//   };

//   const validateForm = () => {
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     const phoneRegex = /^\+91\d{10}$/;

//     if (!form.name.trim()) return "Full name is required.";
//     if (!emailRegex.test(form.email)) return "Enter a valid email address.";
//     if (!phoneRegex.test(form.phone)) return "Phone must be in format +91XXXXXXXXXX (10 digits).";
//     if (!form.aadhaar) return "Aadhaar card is required.";
//     if (!form.pan) return "PAN card is required.";

//     return null;
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();

//     const errorMsg = validateForm();
//     if (errorMsg) {
//       alert(errorMsg);
//       return;
//     }

//     if (!db || !userId) {
//       console.error("Firestore not initialized or user not authenticated.");
//       return;
//     }

//     const formDataToSave = {
//       ...form,
//       aadhaar: form.aadhaar?.name || null,
//       pan: form.pan?.name || null,
//       license: form.license?.name || null,
//       peso: form.peso?.name || null,
//       otherSkill: form.otherSkill || null,
//       userId,
//       status: "pending",
//       timestamp: new Date().toISOString(),
//     };

//     try {
//       const providersCollectionRef = collection(db, "providers");
//       const docRef = await addDoc(providersCollectionRef, formDataToSave);
//       console.log("Form saved with ID:", docRef.id);
//       router.push("/provider/profile");
//     } catch (error) {
//       console.error("Error saving form:", error);
//     }
//   };

//   return (
//     <div className={`min-h-screen bg-sky-100 flex justify-center items-center p-4 ${playfair.variable}`}>
//       <motion.div
//         className="w-full max-w-lg p-6 bg-white shadow-lg rounded-2xl"
//         initial={{ opacity: 0, y: 30 }}
//         animate={{ opacity: 1, y: 0 }}
//       >
//         <h1 className="mb-2 text-3xl font-bold text-center text-blue-600">Application Form</h1>
//         <p className="mb-6 text-center text-gray-600">
//           Join our platform as a <span className="font-semibold">Service Provider</span>.
//         </p>

//         <form onSubmit={handleSubmit} className="space-y-4">
//           {/* Name */}
//           <div>
//             <label className="block text-sm font-medium text-gray-700">Full Name</label>
//             <input type="text" name="name" value={form.name} onChange={handleChange} required className="w-full p-2 mt-1 border rounded-lg" />
//           </div>

//           {/* Email */}
//           <div>
//             <label className="block text-sm font-medium text-gray-700">Email</label>
//             <input type="email" name="email" value={form.email} onChange={handleChange} required className="w-full p-2 mt-1 border rounded-lg" placeholder="example@mail.com" />
//           </div>

//           {/* Phone */}
//           <div>
//             <label className="block text-sm font-medium text-gray-700">Phone Number</label>
//             <input type="tel" name="phone" value={form.phone} onChange={handleChange} required className="w-full p-2 mt-1 border rounded-lg" placeholder="+911234567890" />
//           </div>

//           {/* Aadhaar (Required) */}
//           <div>
//             <label className="block text-sm font-medium text-gray-700">Aadhaar Upload *</label>
//             <input type="file" name="aadhaar" onChange={handleChange} required className="w-full mt-1" />
//           </div>

//           {/* PAN (Required) */}
//           <div>
//             <label className="block text-sm font-medium text-gray-700">PAN Card Upload *</label>
//             <input type="file" name="pan" onChange={handleChange} required className="w-full mt-1" />
//           </div>

//           {/* Driving License (Optional) */}
//           <div>
//             <label className="block text-sm font-medium text-gray-700">Driving License Upload (Optional)</label>
//             <input type="file" name="license" onChange={handleChange} className="w-full mt-1" />
//           </div>

//           {/* PESO (Optional) */}
//           <div>
//             <label className="block text-sm font-medium text-gray-700">PESO License Upload (Optional)</label>
//             <input type="file" name="peso" onChange={handleChange} className="w-full mt-1" />
//           </div>

//           {/* Services */}
//           <div>
//             <label className="block mb-2 text-sm font-medium text-gray-700">Select Services</label>
//             <div className="flex flex-wrap gap-2">
//               {skillsList.map((skill) => (
//                 <button
//                   type="button"
//                   key={skill}
//                   onClick={() => toggleSkill(skill)}
//                   className={`px-3 py-1 rounded-full border ${
//                     form.skills.includes(skill) ? "bg-blue-600 text-white border-blue-600" : "bg-white text-gray-700 border-gray-300"
//                   }`}
//                 >
//                   {skill}
//                 </button>
//               ))}
//             </div>
//             {/* Show input when "Others" is selected */}
//             {form.skills.includes("Others") && (
//               <input
//                 type="text"
//                 name="otherSkill"
//                 value={form.otherSkill}
//                 onChange={handleChange}
//                 placeholder="Enter your service"
//                 className="w-full p-2 mt-3 border rounded-lg"
//               />
//             )}
//           </div>

//           {/* Submit Button */}
//           <motion.button
//             whileTap={{ scale: 0.95 }}
//             type="submit"
//             disabled={isLoading || !userId}
//             className={`w-full py-2 rounded-lg font-semibold transition ${
//               isLoading || !userId ? "bg-gray-400 text-gray-700 cursor-not-allowed" : "bg-blue-600 text-white hover:bg-blue-700"
//             }`}
//           >
//             {isLoading ? "Connecting..." : "Submit Registration"}
//           </motion.button>
//         </form>

//         <p className="mt-4 text-sm text-center text-gray-500">After submission, admin will review your profile.</p>
//       </motion.div>
//     </div>
//   );
// }




// "use client";

// import { useState, useEffect } from "react";
// import { motion } from "framer-motion";
// import { useRouter } from "next/navigation";
// import { initializeApp, getApps, getApp } from "firebase/app";
// import { getAuth, signInAnonymously } from "firebase/auth";
// import { getFirestore, collection, addDoc, setLogLevel } from "firebase/firestore";
// import { Playfair_Display } from "next/font/google";

// const playfair = Playfair_Display({
//   subsets: ["latin"],
//   weight: ["600", "700"],
//   variable: "--font-playfair-display",
// });

// export default function ProviderRegisterPage() {
//   const [form, setForm] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     aadhaar: null as File | null,
//     pan: null as File | null,
//     license: null as File | null,
//     peso: null as File | null,
//     skills: [] as string[],
//     otherSkill: "",
//   });

//   const [userId, setUserId] = useState<string | null>(null);
//   const [isLoading, setIsLoading] = useState(true);
//   const router = useRouter();

//   // Initialize Firebase safely
//   useEffect(() => {
//     if (!process.env.NEXT_PUBLIC_FIREBASE_API_KEY) {
//       console.error("Firebase config missing");
//       setIsLoading(false);
//       return;
//     }

//     let app;
//     if (!getApps().length) {
//       app = initializeApp({
//         apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY!,
//         authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN!,
//         projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID!,
//         storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET!,
//         messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID!,
//         appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID!,
//       });
//     } else {
//       app = getApp();
//     }

//     const auth = getAuth(app);
//     const db = getFirestore(app);
//     setLogLevel("debug");

//     const signIn = async () => {
//       try {
//         const userCredential = await signInAnonymously(auth);
//         setUserId(userCredential.user.uid);
//       } catch (error) {
//         console.error("Anonymous sign-in failed:", error);
//       } finally {
//         setIsLoading(false);
//       }
//     };

//     if (!userId) signIn();
//   }, [userId]);

//   // -------------------
//   // Helpers
//   // -------------------
//   const skillsList = ["Fuel Delivery", "Towing", "Jump Start", "Flat Tyre", "Driver" ," Others"];

//   const toggleSkill = (skill: string) => {
//     setForm((prev) => {
//       const hasSkill = prev.skills.includes(skill);
//       return {
//         ...prev,
//         skills: hasSkill ? prev.skills.filter((s) => s !== skill) : [...prev.skills, skill],
//       };
//     });
//   };

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value, files } = e.target;
//     if (files && ["aadhaar", "pan", "license", "peso"].includes(name)) {
//       setForm({ ...form, [name]: files[0] });
//     } else {
//       setForm({ ...form, [name]: value });
//     }
//   };

//   const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     let value = e.target.value.replace(/\D/g, "");
//     if (value.startsWith("91")) value = value.slice(2);
//     if (value.length > 10) value = value.slice(0, 10);
//     setForm({ ...form, phone: "+91" + value });
//   };

//   const addOtherSkill = () => {
//     if (form.otherSkill.trim()) {
//       if (!form.skills.includes(form.otherSkill)) {
//         setForm((prev) => ({
//           ...prev,
//           skills: [...prev.skills, form.otherSkill],
//           otherSkill: "",
//         }));
//       } else {
//         setForm((prev) => ({ ...prev, otherSkill: "" }));
//       }
//     }
//   };

//   const validateForm = () => {
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     const phoneRegex = /^\+91\d{10}$/;

//     if (!form.name.trim()) return "Full name is required.";
//     if (!emailRegex.test(form.email)) return "Enter a valid email address.";
//     if (!phoneRegex.test(form.phone)) return "Phone must be in format +91XXXXXXXXXX (10 digits).";
//     if (!form.aadhaar) return "Aadhaar card is required.";
//     if (!form.pan) return "PAN card is required.";

//     return null;
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();

//     const errorMsg = validateForm();
//     if (errorMsg) {
//       alert(errorMsg);
//       return;
//     }

//     try {
//       const db = getFirestore(getApp());
//       const formDataToSave = {
//         ...form,
//         aadhaar: form.aadhaar?.name || null,
//         pan: form.pan?.name || null,
//         license: form.license?.name || null,
//         peso: form.peso?.name || null,
//         otherSkill: form.otherSkill || null,
//         userId,
//         status: "pending",
//         timestamp: new Date().toISOString(),
//       };

//       const providersCollectionRef = collection(db, "providers");
//       await addDoc(providersCollectionRef, formDataToSave);

//       router.push("/provider/profile");
//     } catch (error) {
//       console.error("Error saving form:", error);
//     }
//   };

//   // -------------------
//   // Render
//   // -------------------
//   return (
//     <div className={`min-h-screen bg-sky-100 flex justify-center items-center p-4 ${playfair.variable}`}>
//       <motion.div
//         className="w-full max-w-lg p-6 bg-white shadow-lg rounded-2xl"
//         initial={{ opacity: 0, y: 30 }}
//         animate={{ opacity: 1, y: 0 }}
//       >
//         <h1 className="mb-2 text-3xl font-bold text-center text-blue-600">Application Form</h1>
//         <p className="mb-6 text-center text-gray-600">
//           Join our platform as a <span className="font-semibold">Service Provider</span>.
//         </p>

//         <form onSubmit={handleSubmit} className="space-y-4">
//           {/* Full Name */}
//           <div>
//             <label className="block text-sm font-medium text-gray-700">Full Name</label>
//             <input type="text" name="name" value={form.name} onChange={handleChange} required className="w-full p-2 mt-1 border rounded-lg" />
//           </div>

//           {/* Email */}
//           <div>
//             <label className="block text-sm font-medium text-gray-700">Email</label>
//             <input type="email" name="email" value={form.email} onChange={handleChange} required className="w-full p-2 mt-1 border rounded-lg" placeholder="example@mail.com" />
//           </div>

//           {/* Phone */}
//           <div>
//             <label className="block text-sm font-medium text-gray-700">Phone Number</label>
//             <input
//               type="tel"
//               name="phone"
//               value={form.phone}
//               onChange={handlePhoneChange}
//               required
//               className="w-full p-2 mt-1 border rounded-lg"
//               placeholder="+91XXXXXXXXXX"
//             />
//           </div>

//           {/* Aadhaar */}
//           <div>
//             <label className="block text-sm font-medium text-gray-700">Aadhaar Upload *</label>
//             <input type="file" name="aadhaar" onChange={handleChange} required className="w-full mt-1" />
//           </div>

//           {/* PAN */}
//           <div>
//             <label className="block text-sm font-medium text-gray-700">PAN Card Upload *</label>
//             <input type="file" name="pan" onChange={handleChange} required className="w-full mt-1" />
//           </div>

//           {/* License */}
//           <div>
//             <label className="block text-sm font-medium text-gray-700">Driving License Upload (Optional)</label>
//             <input type="file" name="license" onChange={handleChange} className="w-full mt-1" />
//           </div>

//           {/* PESO */}
//           <div>
//             <label className="block text-sm font-medium text-gray-700">PESO License Upload (Optional)</label>
//             <input type="file" name="peso" onChange={handleChange} className="w-full mt-1" />
//           </div>

//           {/* Services */}
//           <div>
//             <label className="block mb-2 text-sm font-medium text-gray-700">Select Services</label>
//             <div className="flex flex-wrap gap-2">
//               {skillsList.map((skill) => (
//                 <button
//                   type="button"
//                   key={skill}
//                   onClick={() => toggleSkill(skill)}
//                   className={`px-3 py-1 rounded-full border ${
//                     form.skills.includes(skill) ? "bg-blue-600 text-white border-blue-600" : "bg-white text-gray-700 border-gray-300"
//                   }`}
//                 >
//                   {skill}
//                 </button>
//               ))}
//               {/* Custom skills */}
//               {form.skills
//                 .filter((skill) => !skillsList.includes(skill))
//                 .map((skill) => (
//                   <button
//                     type="button"
//                     key={skill}
//                     onClick={() => toggleSkill(skill)}
//                     className="px-3 py-1 text-white bg-blue-600 border border-blue-600 rounded-full"
//                   >
//                     {skill}
//                   </button>
//                 ))}
//             </div>

//             {/* Input for "Others" */}
//             {form.skills.includes("Others") && (
//               <div className="flex items-center gap-2 mt-3">
//                 <input
//                   type="text"
//                   name="otherSkill"
//                   value={form.otherSkill}
//                   onChange={handleChange}
//                   placeholder="Enter your service"
//                   className="flex-1 p-2 border rounded-lg"
//                 />
//                 <button type="button" onClick={addOtherSkill} className="px-3 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700">
//                   ➝
//                 </button>
//               </div>
//             )}
//           </div>

//           {/* Submit */}
//           <motion.button
//             whileTap={{ scale: 0.95 }}
//             type="submit"
//             disabled={isLoading || !userId}
//             className={`w-full py-2 rounded-lg font-semibold transition ${
//               isLoading || !userId ? "bg-gray-400 text-gray-700 cursor-not-allowed" : "bg-blue-600 text-white hover:bg-blue-700"
//             }`}
//           >
//             {isLoading ? "Connecting..." : "Submit Registration"}
//           </motion.button>
//         </form>
//       </motion.div>
//     </div>
//   );
// }



"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { initializeApp, getApps, getApp } from "firebase/app";
import {
  getAuth,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { getFirestore, collection, addDoc, setLogLevel } from "firebase/firestore";
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-playfair-display",
});

export default function ProviderRegisterPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    aadhaar: null as File | null,
    pan: null as File | null,
    license: null as File | null,
    peso: null as File | null,
    skills: [] as string[],
    otherSkill: "",
    // added for auth
    password: "",
    confirmPassword: "",
  });

  const [userId, setUserId] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  // Initialize Firebase safely (no anonymous sign-in)
  useEffect(() => {
    if (!process.env.NEXT_PUBLIC_FIREBASE_API_KEY) {
      console.error("Firebase config missing");
      setIsLoading(false);
      return;
    }

    let app;
    if (!getApps().length) {
      app = initializeApp({
        apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY!,
        authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN!,
        projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID!,
        storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET!,
        messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID!,
        appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID!,
      });
    } else {
      app = getApp();
    }

    const auth = getAuth(app);
    const db = getFirestore(app);
    setLogLevel("debug");

    // track current auth state (if the user is already logged in, use that UID)
    const unsub = onAuthStateChanged(auth, (u) => {
      setUserId(u ? u.uid : null);
      setIsLoading(false);
    });

    return () => unsub();
  }, []);

  // -------------------
  // Helpers
  // -------------------
  // fixed stray space and made label consistent with conditional below
  const skillsList = ["Fuel Delivery", "Towing", "Jump Start", "Flat Tyre", "Driver", "Others"];

  const toggleSkill = (skill: string) => {
    setForm((prev) => {
      const hasSkill = prev.skills.includes(skill);
      return {
        ...prev,
        skills: hasSkill ? prev.skills.filter((s) => s !== skill) : [...prev.skills, skill],
      };
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, files } = e.target;
    if (files && ["aadhaar", "pan", "license", "peso"].includes(name)) {
      setForm((prev) => ({ ...prev, [name]: files[0] }));
    } else {
      setForm((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, "");
    if (value.startsWith("91")) value = value.slice(2);
    if (value.length > 10) value = value.slice(0, 10);
    setForm((prev) => ({ ...prev, phone: "+91" + value }));
  };

  const addOtherSkill = () => {
    if (form.otherSkill.trim()) {
      if (!form.skills.includes(form.otherSkill)) {
        setForm((prev) => ({
          ...prev,
          skills: [...prev.skills, prev.otherSkill.trim()],
          otherSkill: "",
        }));
      } else {
        setForm((prev) => ({ ...prev, otherSkill: "" }));
      }
    }
  };

  const validateForm = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\+91\d{10}$/;

    if (!form.name.trim()) return "Full name is required.";
    if (!emailRegex.test(form.email)) return "Enter a valid email address.";
    if (!phoneRegex.test(form.phone)) return "Phone must be in format +91XXXXXXXXXX (10 digits).";
    if (!form.aadhaar) return "Aadhaar card is required.";
    if (!form.pan) return "PAN card is required.";
    if (!form.password || form.password.length < 6)
      return "Password must be at least 6 characters.";
    if (form.password !== form.confirmPassword)
      return "Password and Confirm Password do not match.";

    return null;
  };

  const ensureAuth = async () => {
    // Creates the account if not logged in; if email exists, it signs in.
    const app = getApp();
    const auth = getAuth(app);

    if (auth.currentUser?.uid) return auth.currentUser.uid;

    try {
      const cred = await createUserWithEmailAndPassword(auth, form.email, form.password);
      return cred.user.uid;
    } catch (err: any) {
      // If email already exists, sign in instead
      if (err?.code === "auth/email-already-in-use") {
        const cred = await signInWithEmailAndPassword(auth, form.email, form.password);
        return cred.user.uid;
      }
      throw err;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const errorMsg = validateForm();
    if (errorMsg) {
      alert(errorMsg);
      return;
    }

    setIsLoading(true);
    try {
      // 1) Ensure the user is authenticated with email+password (no anonymous)
      const uid = await ensureAuth();
      setUserId(uid);

      // 2) Save form data to Firestore (do NOT save password fields)
      const db = getFirestore(getApp());
      const formDataToSave = {
        name: form.name,
        email: form.email,
        phone: form.phone,
        aadhaar: form.aadhaar?.name || null,
        pan: form.pan?.name || null,
        license: form.license?.name || null,
        peso: form.peso?.name || null,
        skills: form.skills,
        otherSkill: form.otherSkill || null,
        userId: uid,
        status: "pending",
        timestamp: new Date().toISOString(),
      };

      const providersCollectionRef = collection(db, "providers");
      await addDoc(providersCollectionRef, formDataToSave);

      router.push("/provider/profile");
    } catch (error) {
      console.error("Error saving form:", error);
      alert("There was a problem submitting your registration. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  // -------------------
  // Render
  // -------------------
  return (
    <div className={`min-h-screen bg-sky-100 flex justify-center items-center p-4 ${playfair.variable}`}>
      <motion.div
        className="w-full max-w-lg p-6 bg-white shadow-lg rounded-2xl"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="mb-2 text-3xl font-bold text-center text-blue-600">Application Form</h1>
        <p className="mb-6 text-center text-gray-600">
          Join our platform as a <span className="font-semibold">Service Provider</span>.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Full Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Full Name</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full p-2 mt-1 border rounded-lg"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full p-2 mt-1 border rounded-lg"
              placeholder="example@mail.com"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              required
              className="w-full p-2 mt-1 border rounded-lg"
              placeholder="At least 6 characters"
              autoComplete="new-password"
            />
          </div>

          {/* Confirm Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              value={form.confirmPassword}
              onChange={handleChange}
              required
              className="w-full p-2 mt-1 border rounded-lg"
              placeholder="Re-enter password"
              autoComplete="new-password"
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Phone Number</label>
            <input
              type="tel"
              name="phone"
              value={form.phone}
              onChange={handlePhoneChange}
              required
              className="w-full p-2 mt-1 border rounded-lg"
              placeholder="+91XXXXXXXXXX"
            />
          </div>

          {/* Aadhaar */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Aadhaar Upload *</label>
            <input type="file" name="aadhaar" onChange={handleChange} required className="w-full mt-1" />
          </div>

          {/* PAN */}
          <div>
            <label className="block text-sm font-medium text-gray-700">PAN Card Upload *</label>
            <input type="file" name="pan" onChange={handleChange} required className="w-full mt-1" />
          </div>

          {/* License */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Driving License Upload (Optional)</label>
            <input type="file" name="license" onChange={handleChange} className="w-full mt-1" />
          </div>

          {/* PESO */}
          <div>
            <label className="block text-sm font-medium text-gray-700">PESO License Upload (Optional)</label>
            <input type="file" name="peso" onChange={handleChange} className="w-full mt-1" />
          </div>

          {/* Services */}
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">Select Services</label>
            <div className="flex flex-wrap gap-2">
              {skillsList.map((skill) => (
                <button
                  type="button"
                  key={skill}
                  onClick={() => toggleSkill(skill)}
                  className={`px-3 py-1 rounded-full border ${
                    form.skills.includes(skill)
                      ? "bg-blue-600 text-white border-blue-600"
                      : "bg-white text-gray-700 border-gray-300"
                  }`}
                >
                  {skill}
                </button>
              ))}
              {/* Custom skills (entered through "Others") */}
              {form.skills
                .filter((skill) => !skillsList.includes(skill))
                .map((skill) => (
                  <button
                    type="button"
                    key={skill}
                    onClick={() => toggleSkill(skill)}
                    className="px-3 py-1 text-white bg-blue-600 border border-blue-600 rounded-full"
                  >
                    {skill}
                  </button>
                ))}
            </div>

            {/* Input for "Others" */}
            {form.skills.includes("Others") && (
              <div className="flex items-center gap-2 mt-3">
                <input
                  type="text"
                  name="otherSkill"
                  value={form.otherSkill}
                  onChange={handleChange}
                  placeholder="Enter your service"
                  className="flex-1 p-2 border rounded-lg"
                />
                <button
                  type="button"
                  onClick={addOtherSkill}
                  className="px-3 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700"
                  title="Add"
                >
                  ➝
                </button>
              </div>
            )}
          </div>

          {/* Submit */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            type="submit"
            disabled={isLoading}
            className={`w-full py-2 rounded-lg font-semibold transition ${
              isLoading ? "bg-gray-400 text-gray-700 cursor-not-allowed" : "bg-blue-600 text-white hover:bg-blue-700"
            }`}
          >
            {isLoading ? "Processing..." : "Submit Registration"}
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
}
