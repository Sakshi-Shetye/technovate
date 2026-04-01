// "use client";

// import { useState } from "react";
// import { auth, googleProvider } from "@/lib/firebaseConfig";
// import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
// import { useRouter } from "next/navigation";
// import { FcGoogle } from "react-icons/fc";
// import { MdEmail, MdLockOutline, MdVisibility, MdVisibilityOff } from "react-icons/md";

// export default function LoginPage() {
//   const router = useRouter();

//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [showPassword, setShowPassword] = useState(false);
//   const [error, setError] = useState("");

//   const handleEmailLogin = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setError("");

//     try {
//       await signInWithEmailAndPassword(auth, email, password);
//       router.push("/user"); // Navigate after login
//     } catch (err: unknown) {
//       setError((err as Error).message);
//     }
//   };

//   const handleGoogleLogin = async () => {
//     setError("");
//     try {
//       await signInWithPopup(auth, googleProvider);
//       router.push("/user");
//     } catch (err: unknown) {
//       setError((err as Error).message);
//     }
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen px-4 bg-blue-50">
//       <div className="w-full max-w-md p-8 bg-white shadow-lg rounded-xl sm:p-10">
//         <div className="flex flex-col items-center mb-6">
//           <span className="text-6xl text-blue-600 material-symbols-outlined">directions_car</span>
//           <h2 className="mt-4 text-3xl font-extrabold text-center text-gray-900">
//             Rural Vehicle Assistant
//           </h2>
//           <p className="mt-2 text-center text-gray-600">
//             Welcome back! Please sign in to continue.
//           </p>
//         </div>

//         {error && <p className="mb-4 text-sm text-center text-red-500">{error}</p>}

//         <form onSubmit={handleEmailLogin} className="space-y-6">
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

//           {/* Submit */}
//           <button
//             type="submit"
//             className="w-full py-3 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-transform hover:scale-[1.02]"
//           >
//             Login
//           </button>
//         </form>

//         {/* Divider */}
//         <div className="flex items-center my-6">
//           <hr className="flex-grow border-gray-300" />
//           <span className="px-2 text-sm text-gray-400">Or continue with</span>
//           <hr className="flex-grow border-gray-300" />
//         </div>

//         {/* Google Login */}
//         <div className="flex flex-col gap-3">
//           <button
//             onClick={handleGoogleLogin}
//             className="flex items-center justify-center gap-3 py-3 font-medium text-gray-800 bg-white border border-gray-300 rounded-xl hover:bg-gray-50"
//           >
//             <FcGoogle className="text-xl" />
//             Sign in with Google
//           </button>
//         </div>

//         <p className="mt-6 text-sm text-center text-gray-600">
//           app/logint have an account?{" "}
//           <a href="/signup" className="font-semibold text-blue-600 hover:text-blue-500">
//             Sign Up
//           </a>
//         </p>
//       </div>
//     </div>
//   );
// }



"use client";

import { useState } from "react";
import { auth, googleProvider } from "@/lib/firebaseConfig";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { FcGoogle } from "react-icons/fc";
import { MdEmail, MdLockOutline, MdVisibility, MdVisibilityOff } from "react-icons/md";

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const handleEmailLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    try {
      await signInWithEmailAndPassword(auth, email, password);
      router.push("/user"); // Navigate after login
    } catch (err: unknown) {
      setError((err as Error).message);
    }
  };

  const handleGoogleLogin = async () => {
    setError("");
    try {
      await signInWithPopup(auth, googleProvider);
      router.push("/user");
    } catch (err: unknown) {
      setError((err as Error).message);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen px-4 bg-blue-50">
      <div className="w-full max-w-md p-8 bg-white shadow-lg rounded-xl sm:p-10">
        <div className="flex flex-col items-center mb-6">
          {/* ✅ Replaced Material Icon with logo3.png */}
          <Image
            src="/logo3.png"
            alt="Rural Vehicle Assistant Logo"
            width={80}
            height={80}
            className="rounded-full"
            priority
          />
          <h2 className="mt-4 text-3xl font-extrabold text-center text-gray-900">
            Rural Vehicle Assistant
          </h2>
          <p className="mt-2 text-center text-gray-600">
            Welcome back! Please sign in to continue.
          </p>
        </div>

        {error && <p className="mb-4 text-sm text-center text-red-500">{error}</p>}

        <form onSubmit={handleEmailLogin} className="space-y-6">
          {/* Email */}
          <div className="relative">
            <MdEmail className="absolute text-xl text-gray-400 -translate-y-1/2 left-3 top-1/2" />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
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
              required
              className="w-full py-3 pl-12 pr-10 border border-gray-300 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
            />
            <div
              className="absolute text-gray-500 -translate-y-1/2 cursor-pointer right-3 top-1/2"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <MdVisibilityOff /> : <MdVisibility />}
            </div>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full py-3 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-transform hover:scale-[1.02]"
          >
            Login
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center my-6">
          <hr className="flex-grow border-gray-300" />
          <span className="px-2 text-sm text-gray-400">Or continue with</span>
          <hr className="flex-grow border-gray-300" />
        </div>

        {/* Google Login */}
        <div className="flex flex-col gap-3">
          <button
            onClick={handleGoogleLogin}
            className="flex items-center justify-center gap-3 py-3 font-medium text-gray-800 bg-white border border-gray-300 rounded-xl hover:bg-gray-50"
          >
            <FcGoogle className="text-xl" />
            Sign in with Google
          </button>
        </div>

        <p className="mt-6 text-sm text-center text-gray-600">
          Don’t have an account?{" "}
          <a href="/sign-up" className="font-semibold text-blue-600 hover:text-blue-500">
            Sign Up
          </a>
        </p>
      </div>
    </div>
  );
}
