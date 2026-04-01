// "use client";

// import { useRouter } from "next/navigation";
// import { Menu, Transition } from "@headlessui/react";
// import { Fragment } from "react";
// import { Settings } from "lucide-react";

// export default function Header() {
//   const router = useRouter();

//   return (
//     <header className="bg-white shadow-sm">
//       <div className="flex items-center justify-between p-4 mx-auto max-w-7xl">
//         <h1 className="text-xl font-bold text-blue-900">MySANmarg</h1>

//         {/* Settings Dropdown */}
//         <Menu as="div" className="relative">
//           <Menu.Button className="flex items-center justify-center w-10 h-10 text-gray-900 bg-gray-100 rounded-full hover:bg-gray-200">
//             <Settings className="w-5 h-5" />
//           </Menu.Button>
//           <Transition
//             as={Fragment}
//             enter="transition ease-out duration-100"
//             enterFrom="transform opacity-0 scale-95"
//             enterTo="transform opacity-100 scale-100"
//             leave="transition ease-in duration-75"
//             leaveFrom="transform opacity-100 scale-100"
//             leaveTo="transform opacity-0 scale-95"
//           >
//             <Menu.Items className="absolute right-0 w-48 mt-2 origin-top-right bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg outline-none">
//               <div className="px-1 py-1">
//                 <Menu.Item>
//                   {({ active }) => (
//                     <button
//                       onClick={() => router.push("/user/profile")}
//                       className={`${
//                         active ? "bg-blue-100 text-blue-700" : "text-gray-900"
//                       } group flex w-full items-center rounded-md px-4 py-2 text-sm`}
//                     >
//                       Profile
//                     </button>
//                   )}
//                 </Menu.Item>
//                 <Menu.Item>
//                   {({ active }) => (
//                     <button
//                       onClick={() => router.replace("/login")}
//                       className={`${
//                         active ? "bg-blue-100 text-blue-700" : "text-gray-900"
//                       } group flex w-full items-center rounded-md px-4 py-2 text-sm`}
//                     >
//                       Logout
//                     </button>
//                   )}
//                 </Menu.Item>
//               </div>
//             </Menu.Items>
//           </Transition>
//         </Menu>
//       </div>
//     </header>
//   );
// }

// "use client";

// import { useRouter } from "next/navigation";
// import { Menu, Transition } from "@headlessui/react";
// import { Fragment } from "react";
// import { Settings } from "lucide-react";

// export default function Header() {
//   const router = useRouter();

//   return (
//     <header className="shadow-sm bg-gradient-to-r from-blue-400 via-blue-500 to-blue-700">
//       <div className="flex items-center justify-between p-4 mx-auto text-white max-w-7xl">
// <h1 className="text-4xl font-bold" style={{ fontFamily: "'Playfair Display', serif" }}>
//   MySANmarg
// </h1>

//         {/* Settings Dropdown */}
//         <Menu as="div" className="relative">
//           <Menu.Button className="flex items-center justify-center w-10 h-10 text-blue-900 bg-white rounded-full shadow-md hover:bg-gray-100">
//             <Settings className="w-5 h-5" />
//           </Menu.Button>
//           <Transition
//             as={Fragment}
//             enter="transition ease-out duration-100"
//             enterFrom="transform opacity-0 scale-95"
//             enterTo="transform opacity-100 scale-100"
//             leave="transition ease-in duration-75"
//             leaveFrom="transform opacity-100 scale-100"
//             leaveTo="transform opacity-0 scale-95"
//           >
//             <Menu.Items className="absolute right-0 w-48 mt-2 origin-top-right bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg outline-none">
//               <div className="px-1 py-1">
//                 <Menu.Item>
//                   {({ active }) => (
//                     <button
//                       onClick={() => router.push("/user/profile")}
//                       className={`${
//                         active ? "bg-blue-100 text-blue-700" : "text-gray-900"
//                       } group flex w-full items-center rounded-md px-4 py-2 text-sm`}
//                     >
//                       Profile
//                     </button>
//                   )}
//                 </Menu.Item>
//                 <Menu.Item>
//                   {({ active }) => (
//                     <button
//                       onClick={() => router.replace("/login")}
//                       className={`${
//                         active ? "bg-blue-100 text-blue-700" : "text-gray-900"
//                       } group flex w-full items-center rounded-md px-4 py-2 text-sm`}
//                     >
//                       Logout
//                     </button>
//                   )}
//                 </Menu.Item>
//               </div>
//             </Menu.Items>
//           </Transition>
//         </Menu>
//       </div>
//     </header>
//   );
// }



// "use client";

// import { useRouter } from "next/navigation";
// import { Menu, Transition } from "@headlessui/react";
// import { Fragment } from "react";
// import { Settings } from "lucide-react";

// export default function Header() {
//   const router = useRouter();

//   return (
//     <header className="text-white shadow-md bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800">
//       <div className="flex items-center justify-between px-4 py-4 mx-auto max-w-7xl">
//         <h1
//           className="text-2xl font-bold tracking-tight sm:text-3xl drop-shadow-sm"
//           style={{ fontFamily: "'Playfair Display', serif" }}
//         >
//           MySANmarg
//         </h1>

//         <div className="flex items-center gap-3">
//           {/* you can add quick info / status here later */}
//           <Menu as="div" className="relative">
//             <Menu.Button className="flex items-center justify-center w-10 h-10 bg-white rounded-full shadow-md group">
//               {/* rotate icon smoothly on hover */}
//               <Settings className="w-5 h-5 text-blue-700 transition-transform transform group-hover:rotate-90" />
//             </Menu.Button>

//             <Transition
//               as={Fragment}
//               enter="transition ease-out duration-150"
//               enterFrom="transform opacity-0 scale-95"
//               enterTo="transform opacity-100 scale-100"
//               leave="transition ease-in duration-100"
//               leaveFrom="transform opacity-100 scale-100"
//               leaveTo="transform opacity-0 scale-95"
//             >
//               <Menu.Items className="absolute right-0 mt-2 origin-top-right bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg outline-none w-44">
//                 <div className="px-1 py-1">
//                   <Menu.Item>
//                     {({ active }) => (
//                       <button
//                         onClick={() => router.push("/user/profile")}
//                         className={`${
//                           active ? "bg-blue-50 text-blue-700" : "text-gray-800"
//                         } w-full text-left px-4 py-2 text-sm rounded-md`}
//                       >
//                         Profile
//                       </button>
//                     )}
//                   </Menu.Item>
//                   <Menu.Item>
//                     {({ active }) => (
//                       <button
//                         onClick={() => router.replace("/login")}
//                         className={`${
//                           active ? "bg-blue-50 text-blue-700" : "text-gray-800"
//                         } w-full text-left px-4 py-2 text-sm rounded-md`}
//                       >
//                         Logout
//                       </button>
//                     )}
//                   </Menu.Item>
//                 </div>
//               </Menu.Items>
//             </Transition>
//           </Menu>
//         </div>
//       </div>
//     </header>
//   );
// }


// "use client";

// import { useRouter } from "next/navigation";
// import { Menu, Transition } from "@headlessui/react";
// import { Fragment } from "react";
// import { Settings } from "lucide-react";

// export default function Header() {
//   const router = useRouter();

//   return (
//     <header className="sticky top-0 z-50 border-b shadow-lg backdrop-blur-md bg-gradient-to-r from-blue-600/80 via-blue-700/80 to-blue-800/80 border-white/20">
//       <div className="flex items-center justify-between px-6 py-4 mx-auto max-w-7xl">
//         {/* Brand / Logo */}
// <div className="flex flex-col items-center justify-center text-center">
//   <h1
//     className="text-3xl md:text-3xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-300 via-white to-blue-300 drop-shadow-lg animate-[shimmer_3s_infinite]"
//     style={{ fontFamily: "'Playfair Display', serif" }}
//   >
//     MySANmarg
//   </h1>

//  <p
//   className="max-w-xl mt-2 text-xs font-medium text-black-500 md:text-sm"
//   style={{ fontFamily: "'Inter', sans-serif" }}
// >
//   Smart Assistance Network — Helping Rural India, On Time.
// </p>

// </div>




//         {/* Right-side controls */}
//         <div className="flex items-center gap-3">
//           <Menu as="div" className="relative">
//             <Menu.Button className="flex items-center justify-center transition-transform rounded-full shadow-lg w-11 h-11 bg-white/90 backdrop-blur-md hover:scale-105 group">
//               <Settings className="w-6 h-6 text-blue-700 transition-transform duration-300 group-hover:rotate-90" />
//             </Menu.Button>

//             <Transition
//               as={Fragment}
//               enter="transition ease-out duration-200"
//               enterFrom="transform opacity-0 scale-95"
//               enterTo="transform opacity-100 scale-100"
//               leave="transition ease-in duration-150"
//               leaveFrom="transform opacity-100 scale-100"
//               leaveTo="transform opacity-0 scale-95"
//             >
//               <Menu.Items className="absolute right-0 w-48 mt-3 overflow-hidden origin-top-right border border-gray-200 shadow-xl outline-none bg-white/95 backdrop-blur-md rounded-2xl">
//                 <div className="py-2">
//                   <Menu.Item>
//                     {({ active }) => (
//                       <button
//                         onClick={() => router.push("/user/profile")}
//                         className={`${
//                           active ? "bg-blue-50 text-blue-700" : "text-gray-800"
//                         } w-full text-left px-4 py-2 text-sm transition-colors`}
//                       >
//                         👤 Profile
//                       </button>
//                     )}
//                   </Menu.Item>
//                   <Menu.Item>
//                     {({ active }) => (
//                       <button
//                         onClick={() => router.replace("/login")}
//                         className={`${
//                           active ? "bg-blue-50 text-blue-700" : "text-gray-800"
//                         } w-full text-left px-4 py-2 text-sm transition-colors`}
//                       >
//                         📲 Logout
//                       </button>
//                     )}
//                   </Menu.Item>
//                 </div>
//               </Menu.Items>
//             </Transition>
//           </Menu>
//         </div>
//       </div>
//     </header>
//   );
// }


// "use client";

// import { useRouter } from "next/navigation";
// import { Menu, Transition } from "@headlessui/react";
// import { Fragment } from "react";
// import { Settings } from "lucide-react";

// export default function Header() {
//   const router = useRouter();

//   return (
//     // <header className="sticky top-0 z-50 border-b shadow-md backdrop-blur-md bg-gradient-to-r from-blue-600/90 via-blue-700/90 to-blue-800/90 border-white/20">
//     //   <div className="flex items-center justify-between px-4 py-2 mx-auto max-w-7xl">
//     //     {/* Brand / Logo */}
//     //     <div className="flex flex-col leading-tight">
//     //       <h1
//     //         className="text-2xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-200 via-white to-blue-200 drop-shadow-sm"
//     //         style={{ fontFamily: "'Playfair Display', serif" }}
//     //       >
//     //         MySANmarg
//     //       </h1>
//     //       <p
//     //         className="text-[11px] md:text-xs font-medium text-gray-100"
//     //         style={{ fontFamily: "'Inter', sans-serif" }}
//     //       >
//     //         Smart Assistance Network — Helping Rural India, On Time.
//     //       </p>
//     //     </div>

//     //     {/* Right-side controls */}
//     //     <div className="flex items-center gap-2">
//     //       <Menu as="div" className="relative">
//     //         <Menu.Button className="flex items-center justify-center transition-transform rounded-full shadow-md w-9 h-9 bg-white/90 backdrop-blur-md hover:scale-105 group">
//     //           <Settings className="w-5 h-5 text-blue-700 transition-transform duration-300 group-hover:rotate-90" />
//     //         </Menu.Button>

//     //         <Transition
//     //           as={Fragment}
//     //           enter="transition ease-out duration-200"
//     //           enterFrom="transform opacity-0 scale-95"
//     //           enterTo="transform opacity-100 scale-100"
//     //           leave="transition ease-in duration-150"
//     //           leaveFrom="transform opacity-100 scale-100"
//     //           leaveTo="transform opacity-0 scale-95"
//     //         >
//     //           <Menu.Items className="absolute right-0 mt-2 overflow-hidden origin-top-right border border-gray-200 shadow-lg outline-none w-44 bg-white/95 backdrop-blur-md rounded-xl">
//     //             <div className="py-1">
//     //               <Menu.Item>
//     //                 {({ active }) => (
//     //                   <button
//     //                     onClick={() => router.push("/user/profile")}
//     //                     className={`${
//     //                       active ? "bg-blue-50 text-blue-700" : "text-gray-800"
//     //                     } w-full text-left px-4 py-2 text-sm`}
//     //                   >
//     //                     👤 Profile
//     //                   </button>
//     //                 )}
//     //               </Menu.Item>
//     //               <Menu.Item>
//     //                 {({ active }) => (
//     //                   <button
//     //                     onClick={() => router.replace("/login")}
//     //                     className={`${
//     //                       active ? "bg-blue-50 text-blue-700" : "text-gray-800"
//     //                     } w-full text-left px-4 py-2 text-sm`}
//     //                   >
//     //                     📲 Logout
//     //                   </button>
//     //                 )}
//     //               </Menu.Item>
//     //             </div>
//     //           </Menu.Items>
//     //         </Transition>
//     //       </Menu>
//     //     </div>
//     //   </div>
//     // </header>


//     <header className="sticky top-0 z-50 border-b shadow-md backdrop-blur-md bg-gradient-to-r from-blue-500/80 via-blue-600/80 to-blue-700/80 border-white/20">
//   <div className="flex items-center justify-between px-4 py-2 mx-auto max-w-7xl">
//     {/* Brand / Logo */}
//     <div className="flex flex-col leading-tight">
//       {/* <h1
//         className="text-3xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-200 via-white to-blue-200 drop-shadow-sm"
//         style={{ fontFamily: "'Playfair Display', serif" }}
//       >
//         MySANmarg
//       </h1> */}
// {/* 
// <h1
//   className="text-3xl font-extrabold tracking-tight drop-shadow-sm"
//   style={{ fontFamily: "'Playfair Display', serif" }}
// >
//   <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-800 to-green-700">My</span>
//   <span className="mx-1 text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-yellow-400">SAN</span>
//   <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-700 to-red-600">marg</span>
// </h1> */}

// <h1
//   className="text-3xl font-extrabold tracking-tight drop-shadow-sm"
//   style={{
//     fontFamily: "'Playfair Display', serif",
//     WebkitTextStroke: "0.5px rgba(0,0,0,0.5)", // light semi-transparent border
//     WebkitTextFillColor: "transparent" // keep gradient visible
//   }}
// >
//   {/* "My" with brighter, lively green */}
//   <span
//     className="bg-clip-text bg-gradient-to-r from-green-700 to-green-400"
//     style={{ WebkitTextFillColor: "transparent" }}
//   >
//     My
//   </span>

//   {/* "SAN" with rich golden gradient */}
//   <span
//     className="mx-1 bg-clip-text bg-gradient-to-r from-yellow-500 to-yellow-300"
//     style={{ WebkitTextFillColor: "transparent" }}
//   >
//     SAN
//   </span>

//   {/* "marg" with warm reddish-brown */}
//   <span
//     className="bg-clip-text bg-gradient-to-r from-red-700 to-rose-500"
//     style={{ WebkitTextFillColor: "transparent" }}
//   >
//     marg
//   </span>
// </h1>


 
//       <p
//         className="text-[11px] md:text-xs font-medium text-gray-100"
//         style={{ fontFamily: "'Inter', sans-serif" }}
//       >
//         Smart Assistance Network — Helping Rural India, On Time.
//       </p>
//     </div>

//     {/* Right-side controls */}
//     <div className="flex items-center gap-2">
//       <Menu as="div" className="relative">
//         <Menu.Button className="flex items-center justify-center transition-transform rounded-full shadow-md w-9 h-9 bg-white/90 backdrop-blur-md hover:scale-105 group">
//           <Settings className="w-5 h-5 text-blue-700 transition-transform duration-300 group-hover:rotate-90" />
//         </Menu.Button>

//         <Transition
//           as={Fragment}
//           enter="transition ease-out duration-200"
//           enterFrom="transform opacity-0 scale-95"
//           enterTo="transform opacity-100 scale-100"
//           leave="transition ease-in duration-150"
//           leaveFrom="transform opacity-100 scale-100"
//           leaveTo="transform opacity-0 scale-95"
//         >
//           <Menu.Items className="absolute right-0 mt-2 overflow-hidden origin-top-right border border-gray-200 shadow-lg outline-none w-44 bg-white/95 backdrop-blur-md rounded-xl">
//             <div className="py-1">
//               <Menu.Item>
//                 {({ active }) => (
//                   <button
//                     onClick={() => router.push("/user/profile")}
//                     className={`${
//                       active ? "bg-blue-50 text-blue-700" : "text-gray-800"
//                     } w-full text-left px-4 py-2 text-sm`}
//                   >
//                     👤 Profile
//                   </button>
//                 )}
//               </Menu.Item>
//               <Menu.Item>
//                 {({ active }) => (
//                   <button
//                     onClick={() => router.replace("/login")}
//                     className={`${
//                       active ? "bg-blue-50 text-blue-700" : "text-gray-800"
//                     } w-full text-left px-4 py-2 text-sm`}
//                   >
//                     📲 Logout
//                   </button>
//                 )}
//               </Menu.Item>
//             </div>
//           </Menu.Items>
//         </Transition>
//       </Menu>
//     </div>
//   </div>
// </header>

//   );
// }



// "use client";

// import { useRouter } from "next/navigation";
// import { Menu, Transition } from "@headlessui/react";
// import { Fragment } from "react";
// import { Settings } from "lucide-react";
// import Image from "next/image";

// export default function Header() {
//   const router = useRouter();

//   return (
//     <header className="sticky top-0 z-50 border-b shadow-md backdrop-blur-md bg-gradient-to-r from-blue-500/80 via-blue-600/80 to-blue-700/80 border-white/20">
//       <div className="flex items-center justify-between px-4 py-2 mx-auto max-w-7xl">
        
//         {/* Brand / Logo */}
//         <div className="flex items-center gap-3 leading-tight">
//           {/* ✅ Logo image */}
//           <Image
//             src="/logo.png" // ✅ directly from public/
//             alt="MySANmarg Logo"
//             width={80}
//             height={60}
//             className="rounded-md"
//             priority
//           />

//           {/* Brand name */}
//           <div className="flex flex-col">
//             <h1
//               className="text-3xl font-extrabold tracking-tight drop-shadow-sm"
//               style={{
//                 fontFamily: "'Playfair Display', serif",
//                 WebkitTextStroke: "0.5px rgba(0,0,0,0.5)",
//                 WebkitTextFillColor: "transparent",
//               }}
//             >
//               <span className="bg-clip-text bg-gradient-to-r from-green-700 to-green-400">
//                 My
//               </span>
//               <span className="mx-1 bg-clip-text bg-gradient-to-r from-yellow-500 to-yellow-300">
//                 SAN
//               </span>
//               <span className="bg-clip-text bg-gradient-to-r from-red-700 to-rose-500">
//                 marg
//               </span>
//             </h1>
//             <p
//               className="text-[11px] md:text-xs font-medium text-gray-100"
//               style={{ fontFamily: "'Inter', sans-serif" }}
//             >
//               Smart Assistance Network — Helping Rural India, On Time.
//             </p>
//           </div>
//         </div>

//         {/* Right-side controls */}
//         <div className="flex items-center gap-2">
//           <Menu as="div" className="relative">
//             <Menu.Button className="flex items-center justify-center transition-transform rounded-full shadow-md w-9 h-9 bg-white/90 backdrop-blur-md hover:scale-105 group">
//               <Settings className="w-5 h-5 text-blue-700 transition-transform duration-300 group-hover:rotate-90" />
//             </Menu.Button>

//             <Transition
//               as={Fragment}
//               enter="transition ease-out duration-200"
//               enterFrom="transform opacity-0 scale-95"
//               enterTo="transform opacity-100 scale-100"
//               leave="transition ease-in duration-150"
//               leaveFrom="transform opacity-100 scale-100"
//               leaveTo="transform opacity-0 scale-95"
//             >
//               <Menu.Items className="absolute right-0 mt-2 overflow-hidden origin-top-right border border-gray-200 shadow-lg outline-none w-44 bg-white/95 backdrop-blur-md rounded-xl">
//                 <div className="py-1">
//                   <Menu.Item>
//                     {({ active }) => (
//                       <button
//                         onClick={() => router.push("/user/profile")}
//                         className={`${
//                           active ? "bg-blue-50 text-blue-700" : "text-gray-800"
//                         } w-full text-left px-4 py-2 text-sm`}
//                       >
//                         👤 Profile
//                       </button>
//                     )}
//                   </Menu.Item>
//                   <Menu.Item>
//                     {({ active }) => (
//                       <button
//                         onClick={() => router.replace("/login")}
//                         className={`${
//                           active ? "bg-blue-50 text-blue-700" : "text-gray-800"
//                         } w-full text-left px-4 py-2 text-sm`}
//                       >
//                         📲 Logout
//                       </button>
//                     )}
//                   </Menu.Item>
//                 </div>
//               </Menu.Items>
//             </Transition>
//           </Menu>
//         </div>
//       </div>
//     </header>
//   );
// }





// "use client";

// import { useRouter } from "next/navigation";
// import { Menu, Transition } from "@headlessui/react";
// import { Fragment } from "react";
// import { Settings } from "lucide-react";
// import Image from "next/image";

// export default function Header() {
//   const router = useRouter();

//   return (
//     // <header className="sticky top-0 z-50 border-b shadow-md backdrop-blur-md bg-gradient-to-r from-blue-500/80 via-blue-600/80 to-blue-700/80 border-white/20">
//     <header className="sticky top-0 z-50 border-b shadow-md backdrop-blur-md bg-gradient-to-r from-blue-400/70 via-blue-500/70 to-blue-600/70 border-white/20">

//       <div className="flex items-center justify-between px-4 py-2 mx-auto max-w-7xl">
        
//         {/* Brand / Logo */}
//         <div className="flex items-center gap-3 leading-tight">
//           {/* ✅ Logo image */}
//           <Image
//             src="/logo3.png" // ✅ directly from public/
//             alt="MySANmarg Logo"
//             width={80}
//             height={60}
//             className="rounded-md"
//             priority
//           />

//           {/* Brand name */}
//           <div className="flex flex-col">
//             <h1
//               className="text-3xl font-extrabold tracking-tight drop-shadow-sm"
//               style={{
//                 fontFamily: "'Playfair Display', serif",
//                 WebkitTextStroke: "0.5px rgba(0,0,0,0.5)",
//                 WebkitTextFillColor: "transparent",
//               }}
//             >
//               <span className="bg-clip-text bg-gradient-to-r from-green-700 to-green-400">
//                 My
//               </span>
//               <span className="mx-1 bg-clip-text bg-gradient-to-r from-yellow-500 to-yellow-300">
//                 SAN
//               </span>
//               <span className="bg-clip-text bg-gradient-to-r from-red-700 to-rose-500">
//                 marg
//               </span>
//             </h1>
//             <p
//               className="text-[11px] md:text-xs font-medium text-gray-100"
//               style={{ fontFamily: "'Inter', sans-serif" }}
//             >
//               Smart Assistance Network — Helping Rural India, On Time.
//             </p>
//           </div>
//         </div>

//         {/* Right-side controls */}
//         <div className="flex items-center gap-2">
//           <Menu as="div" className="relative">
//             <Menu.Button className="flex items-center justify-center transition-transform rounded-full shadow-md w-9 h-9 bg-white/90 backdrop-blur-md hover:scale-105 group">
//               <Settings className="w-5 h-5 text-blue-700 transition-transform duration-300 group-hover:rotate-90" />
//             </Menu.Button>

//             <Transition
//               as={Fragment}
//               enter="transition ease-out duration-200"
//               enterFrom="transform opacity-0 scale-95"
//               enterTo="transform opacity-100 scale-100"
//               leave="transition ease-in duration-150"
//               leaveFrom="transform opacity-100 scale-100"
//               leaveTo="transform opacity-0 scale-95"
//             >
//               <Menu.Items className="absolute right-0 mt-2 overflow-hidden origin-top-right border border-gray-200 shadow-lg outline-none w-44 bg-white/95 backdrop-blur-md rounded-xl">
//                 <div className="py-1">
//                   <Menu.Item>
//                     {({ active }) => (
//                       <button
//                         onClick={() => router.push("/user/profile")}
//                         className={`${
//                           active ? "bg-blue-50 text-blue-700" : "text-gray-800"
//                         } w-full text-left px-4 py-2 text-sm`}
//                       >
//                         👤 Profile
//                       </button>
//                     )}
//                   </Menu.Item>
//                   <Menu.Item>
//                     {({ active }) => (
//                       <button
//                         onClick={() => router.replace("/login")}
//                         className={`${
//                           active ? "bg-blue-50 text-blue-700" : "text-gray-800"
//                         } w-full text-left px-4 py-2 text-sm`}
//                       >
//                         📲 Logout
//                       </button>
//                     )}
//                   </Menu.Item>
//                 </div>
//               </Menu.Items>
//             </Transition>
//           </Menu>
//         </div>
//       </div>
//     </header>
//   );
// }



// "use client";

// import { useRouter } from "next/navigation";
// import { Menu, Transition } from "@headlessui/react";
// import { Fragment } from "react";
// import { Settings } from "lucide-react";
// import Image from "next/image";

// export default function Header() {
//   const router = useRouter();

//   return (
//     <header className="sticky top-0 z-50 border-b shadow-md backdrop-blur-md bg-gradient-to-r from-blue-400/70 via-blue-500/70 to-blue-600/70 border-white/20">
//       {/* Full-width container with padding */}
//       <div className="flex items-center justify-between w-full px-6 py-3">
//         {/* Left Side: Logo + Brand */}
//         <div className="flex items-center gap-4">
//           <Image
//             src="/logo3.png"
//             alt="MySANmarg Logo"
//             width={80}
//             height={60}
//             className="rounded-md"
//             priority
//           />

//           <div className="flex flex-col">
//             <h1
//               className="text-3xl font-extrabold tracking-tight drop-shadow-sm"
//               style={{
//                 fontFamily: "'Playfair Display', serif",
//                 WebkitTextStroke: "0.5px rgba(0,0,0,0.5)",
//                 WebkitTextFillColor: "transparent",
//               }}
//             >
//               <span className="bg-clip-text bg-gradient-to-r from-green-700 to-green-400">My</span>
//               <span className="mx-1 bg-clip-text bg-gradient-to-r from-yellow-500 to-yellow-300">SAN</span>
//               <span className="bg-clip-text bg-gradient-to-r from-red-700 to-rose-500">marg</span>
//             </h1>
//             <p className="text-[11px] md:text-xs font-medium text-gray-100" style={{ fontFamily: "'Inter', sans-serif" }}>
//               Smart Assistance Network — Helping Rural India, On Time.
//             </p>
//           </div>
//         </div>

//         {/* Right Side: Settings */}
//         <div className="flex items-center">
//           <Menu as="div" className="relative">
//             <Menu.Button className="flex items-center justify-center w-10 h-10 transition-transform rounded-full shadow-md bg-white/90 backdrop-blur-md hover:scale-105 group">
//               <Settings className="w-5 h-5 text-blue-700 transition-transform duration-300 group-hover:rotate-90" />
//             </Menu.Button>

//             <Transition
//               as={Fragment}
//               enter="transition ease-out duration-200"
//               enterFrom="transform opacity-0 scale-95"
//               enterTo="transform opacity-100 scale-100"
//               leave="transition ease-in duration-150"
//               leaveFrom="transform opacity-100 scale-100"
//               leaveTo="transform opacity-0 scale-95"
//             >
//               <Menu.Items className="absolute right-0 mt-2 overflow-hidden origin-top-right border border-gray-200 shadow-lg outline-none w-44 bg-white/95 backdrop-blur-md rounded-xl">
//                 <div className="py-1">
//                   <Menu.Item>
//                     {({ active }) => (
//                       <button
//                         onClick={() => router.push("/user/profile")}
//                         className={`${active ? "bg-blue-50 text-blue-700" : "text-gray-800"} w-full text-left px-4 py-2 text-sm`}
//                       >
//                         👤 Profile
//                       </button>
//                     )}
//                   </Menu.Item>
//                   <Menu.Item>
//                     {({ active }) => (
//                       <button
//                         onClick={() => router.replace("/login")}
//                         className={`${active ? "bg-blue-50 text-blue-700" : "text-gray-800"} w-full text-left px-4 py-2 text-sm`}
//                       >
//                         📲 Logout
//                       </button>
//                     )}
//                   </Menu.Item>
//                 </div>
//               </Menu.Items>
//             </Transition>
//           </Menu>
//         </div>
//       </div>
//     </header>
//   );
// }



// "use client";

// import { useRouter } from "next/navigation";
// import { Menu, Transition } from "@headlessui/react";
// import { Fragment } from "react";
// import { Settings } from "lucide-react";
// import Image from "next/image";

// export default function Header() {
//   const router = useRouter();

//   return (
//     <header className="sticky top-0 z-50 border-b shadow-md backdrop-blur-md bg-gradient-to-r from-blue-500/80 via-blue-600/80 to-blue-700/80 border-white/20">
//       <div className="flex items-center justify-between w-full px-6 py-4">
//         {/* Left Side: Logo + Brand */}
//         <div className="flex items-center gap-4">
//           <Image
//             src="/logo3.png"
//             alt="MySANmarg Logo"
//             width={100}
//             height={80}
//             className="rounded-md"
//             priority
//           />
//           <div className="flex flex-col">
//             <h1
//               className="text-4xl font-extrabold tracking-tight drop-shadow-md"
//               style={{
//                 fontFamily: "'Playfair Display', serif",
//                 WebkitTextStroke: "0.5px rgba(0,0,0,0.5)",
//                 WebkitTextFillColor: "transparent",
//               }}
//             >
//               <span className="bg-clip-text bg-gradient-to-r from-green-700 to-green-400">My</span>
//               <span className="mx-1 bg-clip-text bg-gradient-to-r from-yellow-500 to-yellow-300">SAN</span>
//               <span className="bg-clip-text bg-gradient-to-r from-red-700 to-rose-500">marg</span>
//             </h1>
//             <p
//               className="text-[12px] md:text-sm font-medium text-gray-100"
//               style={{ fontFamily: "'Inter', sans-serif" }}
//             >
//               Smart Assistance Network — Helping Rural India, On Time.
//             </p>
//           </div>
//         </div>

//         {/* Right Side: Settings */}
//         <div className="flex items-center">
//           <Menu as="div" className="relative">
//             <Menu.Button className="flex items-center justify-center w-10 h-10 transition-transform rounded-full shadow-md bg-white/90 backdrop-blur-md hover:scale-105 group">
//               <Settings className="w-5 h-5 text-blue-700 transition-transform duration-300 group-hover:rotate-90" />
//             </Menu.Button>
//             <Transition
//               as={Fragment}
//               enter="transition ease-out duration-200"
//               enterFrom="transform opacity-0 scale-95"
//               enterTo="transform opacity-100 scale-100"
//               leave="transition ease-in duration-150"
//               leaveFrom="transform opacity-100 scale-100"
//               leaveTo="transform opacity-0 scale-95"
//             >
//               <Menu.Items className="absolute right-0 mt-2 overflow-hidden origin-top-right border border-gray-200 shadow-lg outline-none w-44 bg-white/95 backdrop-blur-md rounded-xl">
//                 <div className="py-1">
//                   <Menu.Item>
//                     {({ active }) => (
//                       <button
//                         onClick={() => router.push("/user/profile")}
//                         className={`${active ? "bg-blue-50 text-blue-700" : "text-gray-800"} w-full text-left px-4 py-2 text-sm`}
//                       >
//                         👤 Profile
//                       </button>
//                     )}
//                   </Menu.Item>
//                   <Menu.Item>
//                     {({ active }) => (
//                       <button
//                         onClick={() => router.replace("/login")}
//                         className={`${active ? "bg-blue-50 text-blue-700" : "text-gray-800"} w-full text-left px-4 py-2 text-sm`}
//                       >
//                         📲 Logout
//                       </button>
//                     )}
//                   </Menu.Item>
//                 </div>
//               </Menu.Items>
//             </Transition>
//           </Menu>
//         </div>
//       </div>
//     </header>
//   );
// }




"use client";
import { useRouter } from "next/navigation";
import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { Settings } from "lucide-react";
import Image from "next/image";

export default function Header() {
  const router = useRouter();

  return (
    <header className="sticky top-0 z-50 border-b shadow-md backdrop-blur-md bg-gradient-to-r from-blue-500/80 via-blue-600/80 to-blue-700/80 border-white/20">
      <div className="flex items-center justify-between w-full px-6 py-2"> {/* Reduced py from 4 → 2 */}
        
        {/* Left Side: Logo + Brand */}
        <div className="flex items-center gap-3"> {/* Reduced gap */}
          <Image
            src="/logo3.png"
            alt="MySANmarg Logo"
            width={80}  // smaller logo
            height={60}
            className="rounded-md"
            priority
          />
          <div className="flex flex-col">
            <h1
              className="text-2xl font-extrabold tracking-tight md:text-3xl drop-shadow-md" // smaller text
              style={{
                fontFamily: "'Playfair Display', serif",
                WebkitTextStroke: "0.5px rgba(0,0,0,0.5)",
                WebkitTextFillColor: "transparent",
              }}
            >
              <span className="bg-clip-text bg-gradient-to-r from-green-700 to-green-400">
                My
              </span>
              <span className="mx-1 bg-clip-text bg-gradient-to-r from-yellow-500 to-yellow-300">
                SAN
              </span>
              <span className="bg-clip-text bg-gradient-to-r from-red-700 to-rose-500">
                marg
              </span>
            </h1>
            <p
              className="text-[10px] md:text-xs font-medium text-gray-100" // smaller subtitle
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Smart Assistance Network — Helping Rural India, On Time.
            </p>
          </div>
        </div>

        {/* Right Side: Settings */}
        <div className="flex items-center">
          <Menu as="div" className="relative">
            <Menu.Button className="flex items-center justify-center transition-transform rounded-full shadow-md w-9 h-9 bg-white/90 backdrop-blur-md hover:scale-105 group">
              <Settings className="w-4 h-4 text-blue-700 transition-transform duration-300 group-hover:rotate-90" />
            </Menu.Button>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-150"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="absolute right-0 mt-2 overflow-hidden origin-top-right border border-gray-200 shadow-lg outline-none w-44 bg-white/95 backdrop-blur-md rounded-xl">
                <div className="py-1">
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        onClick={() => router.push("/user/profile")}
                        className={`${
                          active
                            ? "bg-blue-50 text-blue-700"
                            : "text-gray-800"
                        } w-full text-left px-4 py-2 text-sm`}
                      >
                        👤 Profile
                      </button>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        onClick={() => router.replace("/login")}
                        className={`${
                          active
                            ? "bg-blue-50 text-blue-700"
                            : "text-gray-800"
                        } w-full text-left px-4 py-2 text-sm`}
                      >
                        📲 Logout
                      </button>
                    )}
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
        </div>
      </div>
    </header>
  );
}


