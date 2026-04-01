// "use client";

// import { useState, useEffect } from "react";
// import { auth, googleProvider } from "@/lib/firebaseConfig";
// import {
//   createUserWithEmailAndPassword,
//   signInWithPopup,
//   RecaptchaVerifier,
//   signInWithPhoneNumber,
//   ConfirmationResult,
// } from "firebase/auth";
// import { useRouter } from "next/navigation";
// import { FcGoogle } from "react-icons/fc";
// import {
//   MdPersonOutline,
//   MdEmail,
//   MdLockOutline,
//   MdLockReset,
//   MdPhone,
//   MdVisibility,
//   MdVisibilityOff,
// } from "react-icons/md";

// // TypeScript: window global
// declare global {
//   interface Window {
//     recaptchaVerifier: RecaptchaVerifier;
//   }
// }

// export default function SignupPage() {
//   const router = useRouter();

//   const [fullName, setFullName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const [showPassword, setShowPassword] = useState(false);
//   const [showConfirmPassword, setShowConfirmPassword] = useState(false);
//   const [phoneNumber, setPhoneNumber] = useState("");
//   const [otp, setOtp] = useState("");
//   const [confirmationResult, setConfirmationResult] = useState<ConfirmationResult | null>(null);
//   const [error, setError] = useState("");
//   const [otpSent, setOtpSent] = useState(false);

//   // Initialize reCAPTCHA
//   useEffect(() => {
//     if (typeof window !== "undefined" && !window.recaptchaVerifier) {
//       window.recaptchaVerifier = new RecaptchaVerifier(
//         "recaptcha-container",
//         { size: "invisible" },
//         auth
//       );
//       window.recaptchaVerifier.render().catch(console.error);
//     }
//   }, []);

//   // Email signup
//   const handleSignup = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setError("");

//     if (password !== confirmPassword) {
//       setError("Passwords do not match");
//       return;
//     }

//     try {
//       await createUserWithEmailAndPassword(auth, email, password);
//       router.push("/user"); // Navigate after signup
//     } catch (err: unknown) {
//       setError((err as Error).message);
//     }
//   };

//   // Google signup
//   const handleGoogleSignup = async () => {
//     setError("");
//     try {
//       await signInWithPopup(auth, googleProvider);
//       router.push("/user"); // Navigate after signup
//     } catch (err: unknown) {
//       setError((err as Error).message);
//     }
//   };

//   // Phone signup: send OTP
//   const handlePhoneSignup = async () => {
//     setError("");
//     if (!phoneNumber) return setError("Enter phone number");

//     try {
//       const appVerifier = window.recaptchaVerifier;
//       const formattedPhone = phoneNumber.startsWith("+") ? phoneNumber : `+91${phoneNumber}`;
//       const result = await signInWithPhoneNumber(auth, formattedPhone, appVerifier);
//       setConfirmationResult(result);
//       setOtpSent(true);
//     } catch (err: unknown) {
//       setError((err as Error).message);
//     }
//   };

//   // Phone signup: verify OTP
//   const handleVerifyOtp = async () => {
//     if (!otp || !confirmationResult) return setError("Enter OTP");

//     try {
//       await confirmationResult.confirm(otp);
//       router.push("/user"); // Navigate after OTP verification
//     } catch (err: unknown) {
//       setError((err as Error).message);
//     }
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gray-50">
//       <div className="w-full max-w-md p-8 bg-white shadow-lg rounded-2xl">
//         <div className="mb-6 text-center">
//           <h1 className="text-3xl font-bold text-gray-900">Create Account</h1>
//           <p className="mt-2 text-gray-500">
//             Sign up to get started with our rural vehicle assistant.
//           </p>
//         </div>

//         {error && <p className="mb-4 text-sm text-red-500">{error}</p>}

//         {!otpSent ? (
//           <form onSubmit={handleSignup} className="flex flex-col gap-4">
//             {/* Full Name */}
//             <div className="relative">
//               <MdPersonOutline className="absolute text-xl text-gray-400 -translate-y-1/2 left-3 top-1/2" />
//               <input
//                 type="text"
//                 placeholder="Full Name"
//                 value={fullName}
//                 onChange={(e) => setFullName(e.target.value)}
//                 className="w-full py-3 pl-12 pr-4 border border-gray-300 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
//               />
//             </div>

//             {/* Email */}
//             <div className="relative">
//               <MdEmail className="absolute text-xl text-gray-400 -translate-y-1/2 left-3 top-1/2" />
//               <input
//                 type="email"
//                 placeholder="Email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 className="w-full py-3 pl-12 pr-4 border border-gray-300 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
//               />
//             </div>

//             {/* Password */}
//             <div className="relative">
//               <MdLockOutline className="absolute text-xl text-gray-400 -translate-y-1/2 left-3 top-1/2" />
//               <input
//                 type={showPassword ? "text" : "password"}
//                 placeholder="Password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 className="w-full py-3 pl-12 pr-10 border border-gray-300 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
//               />
//               <div
//                 className="absolute text-gray-500 -translate-y-1/2 cursor-pointer right-3 top-1/2"
//                 onClick={() => setShowPassword(!showPassword)}
//               >
//                 {showPassword ? <MdVisibilityOff /> : <MdVisibility />}
//               </div>
//             </div>

//             {/* Confirm Password */}
//             <div className="relative">
//               <MdLockReset className="absolute text-xl text-gray-400 -translate-y-1/2 left-3 top-1/2" />
//               <input
//                 type={showConfirmPassword ? "text" : "password"}
//                 placeholder="Confirm Password"
//                 value={confirmPassword}
//                 onChange={(e) => setConfirmPassword(e.target.value)}
//                 className="w-full py-3 pl-12 pr-10 border border-gray-300 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
//               />
//               <div
//                 className="absolute text-gray-500 -translate-y-1/2 cursor-pointer right-3 top-1/2"
//                 onClick={() => setShowConfirmPassword(!showConfirmPassword)}
//               >
//                 {showConfirmPassword ? <MdVisibilityOff /> : <MdVisibility />}
//               </div>
//             </div>

//             <button
//               type="submit"
//               className="w-full mt-3 rounded-xl bg-blue-600 py-3 text-white font-semibold hover:scale-[1.02] transition-transform"
//             >
//               Sign Up
//             </button>
//           </form>
//         ) : (
//           <div className="flex flex-col gap-4">
//             <p className="text-gray-600">Enter the OTP sent to {phoneNumber}</p>
//             <input
//               type="text"
//               placeholder="OTP"
//               value={otp}
//               onChange={(e) => setOtp(e.target.value)}
//               className="w-full py-3 pl-4 pr-4 border border-gray-300 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
//             />
//             <button
//               onClick={handleVerifyOtp}
//               className="w-full mt-3 rounded-xl bg-green-600 py-3 text-white font-semibold hover:scale-[1.02] transition-transform"
//             >
//               Verify OTP
//             </button>
//           </div>
//         )}

//         {/* Divider */}
//         <div className="flex items-center my-6">
//           <hr className="flex-grow border-gray-300" />
//           <span className="px-2 text-sm text-gray-400">Or continue with</span>
//           <hr className="flex-grow border-gray-300" />
//         </div>

//         {/* Google + Phone */}
//         <div className="flex flex-col gap-3">
//           <button
//             onClick={handleGoogleSignup}
//             className="flex items-center justify-center gap-3 py-3 font-medium text-gray-800 bg-white border border-gray-300 rounded-lg hover:bg-gray-50"
//           >
//             <FcGoogle className="text-xl" />
//             Sign Up with Google
//           </button>

//           {!otpSent && (
//             <>
//               <div className="relative mt-3">
//                 <MdPhone className="absolute text-xl text-blue-600 -translate-y-1/2 left-3 top-1/2" />
//                 <input
//                   type="text"
//                   placeholder="Phone Number"
//                   value={phoneNumber}
//                   onChange={(e) => setPhoneNumber(e.target.value)}
//                   className="w-full py-3 pl-12 pr-4 border border-gray-300 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
//                 />
//               </div>
//               <button
//                 onClick={handlePhoneSignup}
//                 className="w-full mt-3 rounded-xl bg-green-600 py-3 text-white font-semibold hover:scale-[1.02] transition-transform"
//               >
//                 Sign Up with Phone
//               </button>
//             </>
//           )}
//         </div>

//         <div id="recaptcha-container"></div>

//         <p className="mt-6 text-sm text-center text-gray-600">
//           Already have an account?{" "}
//           <a href="/login" className="font-medium text-blue-600 hover:underline">
//             Log In
//           </a>
//         </p>
//       </div>
//     </div>
//   );
// }




// "use client";

// import { useState } from "react";
// import { auth, googleProvider } from "@/lib/firebaseConfig";
// import { createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";
// import { useRouter } from "next/navigation";
// import { FcGoogle } from "react-icons/fc";
// import {
//   MdPersonOutline,
//   MdEmail,
//   MdLockOutline,
//   MdLockReset,
//   MdVisibility,
//   MdVisibilityOff,
// } from "react-icons/md";

// export default function SignupPage() {
//   const router = useRouter();

//   const [fullName, setFullName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const [showPassword, setShowPassword] = useState(false);
//   const [showConfirmPassword, setShowConfirmPassword] = useState(false);
//   const [error, setError] = useState("");

//   // Email signup
//   const handleSignup = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setError("");

//     if (password !== confirmPassword) {
//       setError("Passwords do not match");
//       return;
//     }

//     try {
//       await createUserWithEmailAndPassword(auth, email, password);
//       router.push("/user"); // Navigate after signup
//     } catch (err: unknown) {
//       setError((err as Error).message);
//     }
//   };

//   // Google signup
//   const handleGoogleSignup = async () => {
//     setError("");
//     try {
//       await signInWithPopup(auth, googleProvider);
//       router.push("/user"); // Navigate after signup
//     } catch (err: unknown) {
//       setError((err as Error).message);
//     }
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gray-50">
//       <div className="w-full max-w-md p-8 bg-white shadow-lg rounded-2xl">
//         <div className="mb-6 text-center">
//           <h1 className="text-3xl font-bold text-gray-900">Create Account</h1>
//           <p className="mt-2 text-gray-500">
//             Sign up to get started with our rural vehicle assistant.
//           </p>
//         </div>

//         {error && <p className="mb-4 text-sm text-red-500">{error}</p>}

//         <form onSubmit={handleSignup} className="flex flex-col gap-4">
//           {/* Full Name */}
//           <div className="relative">
//             <MdPersonOutline className="absolute text-xl text-gray-400 -translate-y-1/2 left-3 top-1/2" />
//             <input
//               type="text"
//               placeholder="Full Name"
//               value={fullName}
//               onChange={(e) => setFullName(e.target.value)}
//               className="w-full py-3 pl-12 pr-4 border border-gray-300 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
//             />
//           </div>

//           {/* Email */}
//           <div className="relative">
//             <MdEmail className="absolute text-xl text-gray-400 -translate-y-1/2 left-3 top-1/2" />
//             <input
//               type="email"
//               placeholder="Email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               className="w-full py-3 pl-12 pr-4 border border-gray-300 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
//             />
//           </div>

//           {/* Password */}
//           <div className="relative">
//             <MdLockOutline className="absolute text-xl text-gray-400 -translate-y-1/2 left-3 top-1/2" />
//             <input
//               type={showPassword ? "text" : "password"}
//               placeholder="Password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               className="w-full py-3 pl-12 pr-10 border border-gray-300 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
//             />
//             <div
//               className="absolute text-gray-500 -translate-y-1/2 cursor-pointer right-3 top-1/2"
//               onClick={() => setShowPassword(!showPassword)}
//             >
//               {showPassword ? <MdVisibilityOff /> : <MdVisibility />}
//             </div>
//           </div>

//           {/* Confirm Password */}
//           <div className="relative">
//             <MdLockReset className="absolute text-xl text-gray-400 -translate-y-1/2 left-3 top-1/2" />
//             <input
//               type={showConfirmPassword ? "text" : "password"}
//               placeholder="Confirm Password"
//               value={confirmPassword}
//               onChange={(e) => setConfirmPassword(e.target.value)}
//               className="w-full py-3 pl-12 pr-10 border border-gray-300 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
//             />
//             <div
//               className="absolute text-gray-500 -translate-y-1/2 cursor-pointer right-3 top-1/2"
//               onClick={() => setShowConfirmPassword(!showConfirmPassword)}
//             >
//               {showConfirmPassword ? <MdVisibilityOff /> : <MdVisibility />}
//             </div>
//           </div>

//           <button
//             type="submit"
//             className="w-full mt-3 rounded-xl bg-blue-600 py-3 text-white font-semibold hover:scale-[1.02] transition-transform"
//           >
//             Sign Up
//           </button>
//         </form>

//         {/* Divider */}
//         <div className="flex items-center my-6">
//           <hr className="flex-grow border-gray-300" />
//           <span className="px-2 text-sm text-gray-400">Or continue with</span>
//           <hr className="flex-grow border-gray-300" />
//         </div>

//         {/* Google Signup */}
//         <div className="flex flex-col gap-3">
//           <button
//             onClick={handleGoogleSignup}
//             className="flex items-center justify-center gap-3 py-3 font-medium text-gray-800 bg-white border border-gray-300 rounded-lg hover:bg-gray-50"
//           >
//             <FcGoogle className="text-xl" />
//             Sign Up with Google
//           </button>
//         </div>

//         <p className="mt-6 text-sm text-center text-gray-600">
//           Already have an account?{" "}
//           <a href="/login" className="font-medium text-blue-600 hover:underline">
//             Log In
//           </a>
//         </p>
//       </div>
//     </div>
//   );
// }



// "use client";

// import { useState } from "react";
// import { useRouter } from "next/navigation";
// import Image from "next/image";
// import { MdEmail, MdLockOutline, MdVisibility, MdVisibilityOff } from "react-icons/md";

// export default function AdminLoginPage() {
//   const router = useRouter();

//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [showPassword, setShowPassword] = useState(false);
//   const [error, setError] = useState("");

//   const handleLogin = (e: React.FormEvent) => {
//     e.preventDefault();
//     setError("");

//     const adminEmail = "admin@gmail.com";
//     const adminPassword = "1234";

//     if (email === adminEmail && password === adminPassword) {
//       router.push("/admin"); // Navigate to admin dashboard
//     } else {
//       setError("Invalid admin credentials.");
//     }
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen px-4 bg-blue-50">
//       <div className="w-full max-w-md p-8 bg-white shadow-lg rounded-2xl sm:p-10">
//         <div className="flex flex-col items-center mb-6">
//           <Image
//             src="/logo3.png"
//             alt="MySANmarg Logo"
//             width={80}
//             height={80}
//             className="rounded-full"
//             priority
//           />
//           <h2 className="mt-4 text-3xl font-extrabold text-center text-gray-900">
//             MySANmarg Admin
//           </h2>
//           <p className="mt-2 text-center text-gray-600">
//             Enter your admin credentials to continue.
//           </p>
//         </div>

//         {error && <p className="mb-4 text-sm text-center text-red-500">{error}</p>}

//         <form onSubmit={handleLogin} className="flex flex-col gap-4">
//           {/* Email */}
//           <div className="relative">
//             <MdEmail className="absolute text-xl text-gray-400 -translate-y-1/2 left-3 top-1/2" />
//             <input
//               type="email"
//               placeholder="Email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//               className="w-full py-3 pl-12 pr-4 border border-gray-300 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
//             />
//           </div>

//           {/* Password */}
//           <div className="relative">
//             <MdLockOutline className="absolute text-xl text-gray-400 -translate-y-1/2 left-3 top-1/2" />
//             <input
//               type={showPassword ? "text" : "password"}
//               placeholder="Password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//               className="w-full py-3 pl-12 pr-10 border border-gray-300 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
//             />
//             <div
//               className="absolute text-gray-500 -translate-y-1/2 cursor-pointer right-3 top-1/2"
//               onClick={() => setShowPassword(!showPassword)}
//             >
//               {showPassword ? <MdVisibilityOff /> : <MdVisibility />}
//             </div>
//           </div>

//           <button
//             type="submit"
//             className="w-full mt-3 rounded-xl bg-blue-600 py-3 text-white font-semibold hover:bg-blue-700 transition-transform hover:scale-[1.02]"
//           >
//             Login as Admin
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }





// "use client";

// import { useState } from "react";
// import { auth, googleProvider } from "@/lib/firebaseConfig";
// import { createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";
// import { useRouter } from "next/navigation";
// import { FcGoogle } from "react-icons/fc";
// import {
//   MdPersonOutline,
//   MdEmail,
//   MdLockOutline,
//   MdLockReset,
//   MdVisibility,
//   MdVisibilityOff,
// } from "react-icons/md";

// export default function SignupPage() {
//   const router = useRouter();

//   const [fullName, setFullName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const [showPassword, setShowPassword] = useState(false);
//   const [showConfirmPassword, setShowConfirmPassword] = useState(false);
//   const [error, setError] = useState("");

//   // Email signup
//   const handleSignup = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setError("");

//     if (password !== confirmPassword) {
//       setError("Passwords do not match");
//       return;
//     }

//     try {
//       await createUserWithEmailAndPassword(auth, email, password);
//       router.push("/user"); // Navigate after signup
//     } catch (err: unknown) {
//       setError((err as Error).message);
//     }
//   };

//   // Google signup
//   const handleGoogleSignup = async () => {
//     setError("");
//     try {
//       await signInWithPopup(auth, googleProvider);
//       router.push("/user"); // Navigate after signup
//     } catch (err: unknown) {
//       setError((err as Error).message);
//     }
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gray-50">
//       <div className="w-full max-w-md p-8 bg-white shadow-lg rounded-2xl">
//         <div className="mb-6 text-center">
//           <h1 className="text-3xl font-bold text-gray-900">Create Account</h1>
//           <p className="mt-2 text-gray-500">
//             Sign up to get started with our rural vehicle assistant.
//           </p>
//         </div>

//         {error && <p className="mb-4 text-sm text-red-500">{error}</p>}

//         <form onSubmit={handleSignup} className="flex flex-col gap-4">
//           {/* Full Name */}
//           <div className="relative">
//             <MdPersonOutline className="absolute text-xl text-gray-400 -translate-y-1/2 left-3 top-1/2" />
//             <input
//               type="text"
//               placeholder="Full Name"
//               value={fullName}
//               onChange={(e) => setFullName(e.target.value)}
//               className="w-full py-3 pl-12 pr-4 border border-gray-300 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
//             />
//           </div>

//           {/* Email */}
//           <div className="relative">
//             <MdEmail className="absolute text-xl text-gray-400 -translate-y-1/2 left-3 top-1/2" />
//             <input
//               type="email"
//               placeholder="Email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               className="w-full py-3 pl-12 pr-4 border border-gray-300 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
//             />
//           </div>

//           {/* Password */}
//           <div className="relative">
//             <MdLockOutline className="absolute text-xl text-gray-400 -translate-y-1/2 left-3 top-1/2" />
//             <input
//               type={showPassword ? "text" : "password"}
//               placeholder="Password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               className="w-full py-3 pl-12 pr-10 border border-gray-300 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
//             />
//             <div
//               className="absolute text-gray-500 -translate-y-1/2 cursor-pointer right-3 top-1/2"
//               onClick={() => setShowPassword(!showPassword)}
//             >
//               {showPassword ? <MdVisibilityOff /> : <MdVisibility />}
//             </div>
//           </div>

//           {/* Confirm Password */}
//           <div className="relative">
//             <MdLockReset className="absolute text-xl text-gray-400 -translate-y-1/2 left-3 top-1/2" />
//             <input
//               type={showConfirmPassword ? "text" : "password"}
//               placeholder="Confirm Password"
//               value={confirmPassword}
//               onChange={(e) => setConfirmPassword(e.target.value)}
//               className="w-full py-3 pl-12 pr-10 border border-gray-300 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
//             />
//             <div
//               className="absolute text-gray-500 -translate-y-1/2 cursor-pointer right-3 top-1/2"
//               onClick={() => setShowConfirmPassword(!showConfirmPassword)}
//             >
//               {showConfirmPassword ? <MdVisibilityOff /> : <MdVisibility />}
//             </div>
//           </div>

//           <button
//             type="submit"
//             className="w-full mt-3 rounded-xl bg-blue-600 py-3 text-white font-semibold hover:scale-[1.02] transition-transform"
//           >
//             Sign Up
//           </button>
//         </form>

//         {/* Divider */}
//         <div className="flex items-center my-6">
//           <hr className="flex-grow border-gray-300" />
//           <span className="px-2 text-sm text-gray-400">Or continue with</span>
//           <hr className="flex-grow border-gray-300" />
//         </div>

//         {/* Google Signup */}
//         <div className="flex flex-col gap-3">
//           <button
//             onClick={handleGoogleSignup}
//             className="flex items-center justify-center gap-3 py-3 font-medium text-gray-800 bg-white border border-gray-300 rounded-lg hover:bg-gray-50"
//           >
//             <FcGoogle className="text-xl" />
//             Sign Up with Google
//           </button>
//         </div>

//         <p className="mt-6 text-sm text-center text-gray-600">
//           Already have an account?{" "}
//           <a href="/login" className="font-medium text-blue-600 hover:underline">
//             Log In
//           </a>
//         </p>
//       </div>
//     </div>
//   );
// }




"use client";

import { useState } from "react";
import { auth, googleProvider } from "@/lib/firebaseConfig";
import { createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { useRouter } from "next/navigation";
import { FcGoogle } from "react-icons/fc";
import {
  MdPersonOutline,
  MdEmail,
  MdLockOutline,
  MdLockReset,
  MdVisibility,
  MdVisibilityOff,
} from "react-icons/md";

export default function SignupPage() {
  const router = useRouter();

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState("");

  // Email signup
  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      router.push("/admin"); // ✅ Navigate to admin after signup
    } catch (err: unknown) {
      setError((err as Error).message);
    }
  };

  // Google signup
  const handleGoogleSignup = async () => {
    setError("");
    try {
      await signInWithPopup(auth, googleProvider);
      router.push("/admin"); // ✅ Navigate to admin after Google signup
    } catch (err: unknown) {
      setError((err as Error).message);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="w-full max-w-md p-8 bg-white shadow-lg rounded-2xl">
        <div className="mb-6 text-center">
          <h1 className="text-3xl font-bold text-gray-900">Admin Sign Up</h1>
          <p className="mt-2 text-gray-500">
            Create your admin account to manage MySANmarg.
          </p>
        </div>

        {error && <p className="mb-4 text-sm text-red-500">{error}</p>}

        <form onSubmit={handleSignup} className="flex flex-col gap-4">
          {/* Full Name */}
          <div className="relative">
            <MdPersonOutline className="absolute text-xl text-gray-400 -translate-y-1/2 left-3 top-1/2" />
            <input
              type="text"
              placeholder="Full Name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="w-full py-3 pl-12 pr-4 border border-gray-300 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Email */}
          <div className="relative">
            <MdEmail className="absolute text-xl text-gray-400 -translate-y-1/2 left-3 top-1/2" />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full py-3 pl-12 pr-4 border border-gray-300 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Password */}
          <div className="relative">
            <MdLockOutline className="absolute text-xl text-gray-400 -translate-y-1/2 left-3 top-1/2" />
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full py-3 pl-12 pr-10 border border-gray-300 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
            />
            <div
              className="absolute text-gray-500 -translate-y-1/2 cursor-pointer right-3 top-1/2"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <MdVisibilityOff /> : <MdVisibility />}
            </div>
          </div>

          {/* Confirm Password */}
          <div className="relative">
            <MdLockReset className="absolute text-xl text-gray-400 -translate-y-1/2 left-3 top-1/2" />
            <input
              type={showConfirmPassword ? "text" : "password"}
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full py-3 pl-12 pr-10 border border-gray-300 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
            />
            <div
              className="absolute text-gray-500 -translate-y-1/2 cursor-pointer right-3 top-1/2"
              onClick={() =>
                setShowConfirmPassword(!showConfirmPassword)
              }
            >
              {showConfirmPassword ? <MdVisibilityOff /> : <MdVisibility />}
            </div>
          </div>

          <button
            type="submit"
            className="w-full mt-3 rounded-xl bg-blue-600 py-3 text-white font-semibold hover:scale-[1.02] transition-transform"
          >
            Sign Up
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center my-6">
          <hr className="flex-grow border-gray-300" />
          <span className="px-2 text-sm text-gray-400">Or continue with</span>
          <hr className="flex-grow border-gray-300" />
        </div>

        {/* Google Signup */}
        <div className="flex flex-col gap-3">
          <button
            onClick={handleGoogleSignup}
            className="flex items-center justify-center gap-3 py-3 font-medium text-gray-800 bg-white border border-gray-300 rounded-lg hover:bg-gray-50"
          >
            <FcGoogle className="text-xl" />
            Sign Up with Google
          </button>
        </div>

        <p className="mt-6 text-sm text-center text-gray-600">
          Already have an account?{" "}
          <a href="/admin/login" className="font-medium text-blue-600 hover:underline">
            Log In
          </a>
        </p>
      </div>
    </div>
  );
}
