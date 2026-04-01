// // app/user-dashboard/page.tsx  (Next.js App Router)
// // or pages/user-dashboard.tsx (if using Pages Router)
// "use client";

// import { Home, MapPin, History, Users, Settings, Fuel, Car, Wrench, HelpCircle } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { Card } from "@/components/Card";

// export default function HomePage() {
//   return (
//     <div className="flex flex-col min-h-screen bg-[#f0f8ff]">
//       {/* Header */}
//       <header className="bg-white shadow-sm">
//         <div className="flex items-center justify-between p-4 mx-auto max-w-7xl">
//           <h1 className="text-xl font-bold text-gray-900">Rural Assist</h1>
//           <button className="flex items-center justify-center w-10 h-10 text-gray-900 bg-gray-100 rounded-full hover:bg-gray-200">
//             <Settings className="w-5 h-5" />
//           </button>
//         </div>
//       </header>

//       {/* Main Content */}
//       <main className="flex-1 p-4">
//         {/* Need Assistance Section */}
//         <div className="p-6 text-center bg-white shadow-lg rounded-2xl">
//           <h2 className="text-3xl font-bold text-gray-900">Need Assistance?</h2>
//           <p className="mt-2 text-gray-500">Press the button below for immediate help.</p>
//           <Button className="w-full max-w-xs px-8 py-4 mx-auto mt-6 text-lg font-bold transition-transform rounded-full shadow-lg hover:scale-105">
//             Get Help Now
//           </Button>
//         </div>

//         {/* Services */}
//         <h2 className="px-2 mt-8 mb-4 text-2xl font-bold text-gray-900">Select Service</h2>
//         <div className="grid grid-cols-2 gap-4">
//           {[
//             { icon: Fuel, label: "Fuel Shortage" },
//             { icon: Car, label: "Flat Tire" },
//             { icon: Wrench, label: "Engine Issue" },
//             { icon: Car, label: "Accident Support" },
//           ].map((service, i) => (
//             <div
//               key={i}
//               className="flex flex-col items-center justify-center gap-2 p-4 text-center transition-all bg-white border border-gray-200 shadow-sm rounded-2xl hover:border-blue-500 hover:shadow-lg"
//             >
//               <div className="p-3 text-blue-600 bg-blue-100 rounded-full">
//                 <service.icon className="w-8 h-8" />
//               </div>
//               <h3 className="font-bold text-gray-900">{service.label}</h3>
//             </div>
//           ))}

//           {/* General Assistance */}
//           <div className="flex flex-col items-center justify-center col-span-2 gap-2 p-4 text-center transition-all bg-white border border-gray-200 shadow-sm rounded-2xl hover:border-blue-500 hover:shadow-lg">
//             <div className="p-3 text-blue-600 bg-blue-100 rounded-full">
//               <HelpCircle className="w-8 h-8" />
//             </div>
//             <h3 className="font-bold text-gray-900">General Assistance</h3>
//           </div>
//         </div>
//       </main>

//       {/* Bottom Nav */}
//       <footer className="sticky bottom-0 bg-white shadow-[0_-1px_3px_rgba(0,0,0,0.1)]">
//         <nav className="flex justify-around py-2">
//           {[
//             { icon: Home, label: "Home", active: true },
//             { icon: MapPin, label: "Track" },
//             { icon: History, label: "History" },
//             { icon: Users, label: "Contacts" },
//           ].map((item, i) => (
//             <a
//               key={i}
//               href="#"
//               className={`flex flex-col items-center justify-end gap-1 ${
//                 item.active ? "text-blue-600" : "text-gray-500"
//               }`}
//             >
//               <div
//                 className={`flex h-8 w-8 items-center justify-center rounded-full ${
//                   item.active ? "bg-blue-100" : ""
//                 }`}
//               >
//                 <item.icon className="w-5 h-5" />
//               </div>
//               <p className={`text-xs font-${item.active ? "bold" : "medium"}`}>{item.label}</p>
//             </a>
//           ))}
//         </nav>
//       </footer>
//     </div>
//   );
// }









// "use client";

// import { useRouter, usePathname } from "next/navigation";
// import { Fragment } from "react";
// import {
//   Home,
//   FileText,
//   MapPin,
//   Clock,
//   MessageCircle,
//   Settings,
//   Fuel,
//   Car,
//   Wrench,
//   HelpCircle,
// } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { Menu, Transition } from "@headlessui/react";

// export default function UserPage() {
//   const router = useRouter();
//   const pathname = usePathname() || "/user";

//   const navItems = [
//     { label: "Home", route: "/user", Icon: Home },
//     { label: "Requests", route: "/user/requests", Icon: FileText },
//     { label: "Track", route: "/user/track", Icon: MapPin },
//     { label: "History", route: "/user/history", Icon: Clock },
//     { label: "Feedback", route: "/user/feedback", Icon: MessageCircle },
//   ];

//   return (
//     <div className="flex flex-col min-h-screen bg-[#f0f8ff]">
//       {/* Header */}
//       <header className="bg-white shadow-sm">
//         <div className="flex items-center justify-between p-4 mx-auto max-w-7xl">
//           <h1 className="text-xl font-bold text-blue-900">MySANmarg</h1>

//           {/* Settings Dropdown */}
//           <Menu as="div" className="relative">
//             <Menu.Button className="flex items-center justify-center w-10 h-10 text-gray-900 bg-gray-100 rounded-full hover:bg-gray-200">
//               <Settings className="w-5 h-5" />
//             </Menu.Button>
//             <Transition
//               as={Fragment}
//               enter="transition ease-out duration-100"
//               enterFrom="transform opacity-0 scale-95"
//               enterTo="transform opacity-100 scale-100"
//               leave="transition ease-in duration-75"
//               leaveFrom="transform opacity-100 scale-100"
//               leaveTo="transform opacity-0 scale-95"
//             >
//               <Menu.Items className="absolute right-0 w-48 mt-2 origin-top-right bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg outline-none">
//                 <div className="px-1 py-1">
//                   <Menu.Item>
//                     {({ active }) => (
//                       <button
//                         onClick={() => router.push("/user/profile")}
//                         className={`${
//                           active ? "bg-blue-100 text-blue-700" : "text-gray-900"
//                         } group flex w-full items-center rounded-md px-4 py-2 text-sm`}
//                       >
//                         Profile
//                       </button>
//                     )}
//                   </Menu.Item>
//                   <Menu.Item>
//                     {({ active }) => (
//                       <button
//                         onClick={() => {
//                           // Clear session or token if needed
//                           router.replace("/login");
//                         }}
//                         className={`${
//                           active ? "bg-blue-100 text-blue-700" : "text-gray-900"
//                         } group flex w-full items-center rounded-md px-4 py-2 text-sm`}
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
//       </header>

//       {/* Main */}
//       <main className="flex-1 p-4">
//         {/* Assistance card */}
//         <div className="max-w-xl p-6 mx-auto text-center bg-white shadow-lg rounded-2xl">
//           <h2 className="text-3xl font-bold text-gray-900">Need Assistance?</h2>
//           <p className="mt-2 text-gray-500">
//             Press the button below for immediate help.
//           </p>
//           <Button
//             onClick={() => router.push("/user/request")}
//             className="w-full max-w-xs px-8 py-4 mx-auto mt-6 text-lg font-bold transition-transform rounded-full shadow-lg hover:scale-105"
//           >
//             Get Help Now
//           </Button>
//         </div>

//         {/* Services grid */}
//         <h2 className="max-w-xl px-2 mx-auto mt-8 mb-4 text-2xl font-bold text-gray-900">
//           Services Available
//         </h2>
//         <div className="grid max-w-xl grid-cols-2 gap-4 mx-auto">
//           {[
//             { icon: Fuel, label: "Fuel Shortage" },
//             { icon: Car, label: "Flat Tire" },
//             { icon: Wrench, label: "Engine Issue" },
//             { icon: Car, label: "Accident Support" },
//           ].map((service, i) => (
//             <div
//               key={i}
//               className="flex flex-col items-center justify-center gap-2 p-4 text-center transition-all bg-white border border-gray-200 shadow-sm rounded-2xl hover:border-blue-500 hover:shadow-lg"
//             >
//               <div className="p-3 text-blue-600 bg-blue-100 rounded-full">
//                 <service.icon className="w-8 h-8" />
//               </div>
//               <h3 className="font-bold text-gray-900">{service.label}</h3>
//             </div>
//           ))}

//           {/* General Assistance */}
//           <div className="flex flex-col items-center justify-center col-span-2 gap-2 p-4 text-center transition-all bg-white border border-gray-200 shadow-sm rounded-2xl hover:border-blue-500 hover:shadow-lg">
//             <div className="p-3 text-blue-600 bg-blue-100 rounded-full">
//               <HelpCircle className="w-8 h-8" />
//             </div>
//             <h3 className="font-bold text-gray-900">General Assistance</h3>
//           </div>
//         </div>
//       </main>

//       {/* Bottom navigation */}
//       <footer className="sticky bottom-0 bg-white shadow-[0_-1px_3px_rgba(0,0,0,0.06)]">
//         <nav className="flex items-center justify-around max-w-3xl px-2 py-3 mx-auto">
//           {navItems.map((item) => {
//             const active = pathname.startsWith(item.route);
//             const Icon = item.Icon;
//             if (active) {
//               return (
//                 <button
//                   key={item.route}
//                   onClick={() => router.push(item.route)}
//                   aria-current="page"
//                   className="flex items-center gap-2 rounded-2xl bg-blue-100 px-3 py-2 text-blue-600 min-w-[92px] justify-center"
//                 >
//                   <Icon className="w-5 h-5" />
//                   <span className="text-sm font-semibold">{item.label}</span>
//                 </button>
//               );
//             }
//             return (
//               <button
//                 key={item.route}
//                 onClick={() => router.push(item.route)}
//                 className="flex flex-col items-center gap-1 text-gray-500"
//               >
//                 <div className="flex items-center justify-center w-8 h-8 rounded-full">
//                   <Icon className="w-5 h-5" />
//                 </div>
//                 <span className="text-xs font-medium">{item.label}</span>
//               </button>
//             );
//           })}
//         </nav>
//       </footer>
//     </div>
//   );
// }




// "use client";

// import { useRouter } from "next/navigation";
// import { Fuel, Car, Wrench, HelpCircle } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import Header from "@/components/Header";
// import BottomNav from "@/components/BottomNav";

// export default function UserPage() {
//   const router = useRouter();

//   return (
//     <div className="flex flex-col min-h-screen bg-[#f0f8ff]">
//       {/* Header */}
//       <Header />

//       {/* Main Content */}
//       <main className="flex-1 p-4 pb-20">
//         {/* Assistance card */}
//         <div className="max-w-xl p-6 mx-auto text-center bg-white shadow-lg rounded-2xl">
//           <h2 className="text-3xl font-bold text-gray-900">Need Assistance?</h2>
//           <p className="mt-2 text-gray-500">
//             Press the button below for immediate help.
//           </p>
//           <Button
//             onClick={() => router.push("/user/request")}
//             className="w-full max-w-xs px-8 py-4 mx-auto mt-6 text-lg font-bold transition-transform rounded-full shadow-lg hover:scale-105"
//           >
//             Get Help Now
//           </Button>
//         </div>

//         {/* Services grid */}
//         <h2 className="max-w-xl px-2 mx-auto mt-8 mb-4 text-2xl font-bold text-gray-900">
//           Services Available
//         </h2>
//         <div className="grid max-w-xl grid-cols-2 gap-4 mx-auto">
//           {[
//             { icon: Fuel, label: "Fuel Shortage" },
//             { icon: Car, label: "Flat Tire" },
//             { icon: Wrench, label: "Engine Issue" },
//             { icon: Car, label: "Accident Support" },
//           ].map((service, i) => (
//             <div
//               key={i}
//               className="flex flex-col items-center justify-center gap-2 p-4 text-center transition-all bg-white border border-gray-200 shadow-sm rounded-2xl hover:border-blue-500 hover:shadow-lg"
//             >
//               <div className="p-3 text-blue-600 bg-blue-100 rounded-full">
//                 <service.icon className="w-8 h-8" />
//               </div>
//               <h3 className="font-bold text-gray-900">{service.label}</h3>
//             </div>
//           ))}

//           {/* General Assistance */}
//           <div className="flex flex-col items-center justify-center col-span-2 gap-2 p-4 text-center transition-all bg-white border border-gray-200 shadow-sm rounded-2xl hover:border-blue-500 hover:shadow-lg">
//             <div className="p-3 text-blue-600 bg-blue-100 rounded-full">
//               <HelpCircle className="w-8 h-8" />
//             </div>
//             <h3 className="font-bold text-gray-900">General Assistance</h3>
//           </div>
//         </div>
//       </main>

//       {/* Bottom Navigation */}
//       <BottomNav />
//     </div>
//   );
// }



// "use client";

// import { useRouter } from "next/navigation";
// import { Fuel, Car, Wrench, HelpCircle } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import Header from "@/components/Header";
// import BottomNav from "@/components/BottomNav";

// export default function UserPage() {
//   const router = useRouter();

//   return (
//     <div className="flex flex-col min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100">
//       {/* Header (shared) */}
//       <Header />

//       {/* Main Content */}
//       <main className="flex-1 p-6 pb-28">
//         {/* Assistance card */}
//         <div className="max-w-3xl mx-auto text-center">
//           <div className="p-8 transition-all border border-gray-100 shadow-xl bg-white/90 rounded-3xl hover:shadow-2xl">
//             <h2 className="text-3xl font-extrabold text-blue-900">Need Assistance?</h2>
//             <p className="mt-3 text-gray-600">
//               Press the button below for immediate help.
//             </p>

//             <Button
//               onClick={() => router.push("/user/request")}
//               className="inline-flex items-center justify-center px-8 py-4 mt-6 text-lg font-semibold transition-all transform rounded-full shadow-lg bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800"
//             >
//               🚨 Get Help Now
//             </Button>
//           </div>
//         </div>

//         {/* Services grid */}
//         <div className="max-w-3xl mx-auto mt-10">
//           <h3 className="mb-4 text-2xl font-bold text-blue-900">Services Available</h3>

//           <div className="grid grid-cols-2 gap-6 sm:grid-cols-3">
//             {[
//               { icon: Fuel, label: "Fuel Shortage" },
//               { icon: Car, label: "Flat Tire" },
//               { icon: Wrench, label: "Engine Issue" },
//               { icon: Car, label: "Accident Support" },
//             ].map((service, i) => (
//               <div
//                 key={i}
//                 className="flex flex-col items-center gap-3 p-5 text-center transition-transform border border-gray-200 shadow-md cursor-pointer bg-white/70 backdrop-blur-sm rounded-2xl hover:shadow-xl hover:scale-105"
//                 onClick={() => router.push("/user/request")}
//                 role="button"
//                 tabIndex={0}
//                 onKeyDown={() => {}}
//               >
//                 <div className="p-4 text-white rounded-full shadow-lg bg-gradient-to-br from-blue-500 to-blue-700">
//                   <service.icon className="w-7 h-7" />
//                 </div>
//                 <h4 className="text-sm font-semibold text-blue-900">{service.label}</h4>
//               </div>
//             ))}

//             {/* General Assistance — spans full width on small screens */}
//             <div
//               className="flex flex-col items-center col-span-2 gap-3 p-5 text-center transition-transform border border-gray-200 shadow-md cursor-pointer sm:col-span-3 bg-white/70 backdrop-blur-sm rounded-2xl hover:shadow-xl hover:scale-105"
//               onClick={() => router.push("/user/request")}
//             >
//               <div className="p-4 text-white rounded-full shadow-lg bg-gradient-to-br from-blue-500 to-blue-700">
//                 <HelpCircle className="w-7 h-7" />
//               </div>
//               <h4 className="text-sm font-semibold text-blue-900">General Assistance</h4>
//             </div>
//           </div>
//         </div>
//       </main>

//       {/* Bottom Navigation (shared) */}
//       <BottomNav />
//     </div>
//   );
// }






// "use client";

// import { useRouter } from "next/navigation";
// import { Fuel, Car, Wrench, HelpCircle } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import Header from "@/components/Header";
// import BottomNav from "@/components/BottomNav";

// export default function UserPage() {
//   const router = useRouter();

//   return (
//     <div className="flex flex-col min-h-screen bg-gradient-to-br from-blue-100 via-blue-50 to-blue-200">
//       {/* Header */}
//       <Header />

//       {/* Main Content */}
//       <main className="flex-1 px-4 py-6 pb-28 sm:px-6 lg:px-12">
//         {/* Assistance card */}
//         <div className="w-full mb-12 text-center">
//           <div className="w-full p-8 transition-all border border-gray-100 shadow-xl bg-white/95 rounded-3xl hover:shadow-2xl">
//             <h2 className="text-3xl font-extrabold text-blue-900">
//               Need Assistance?
//             </h2>
//             <p className="mt-3 text-gray-600">
//               Press the button below for immediate help.
//             </p>

//             <Button
//               onClick={() => router.push("/user/request")}
//               className="inline-flex items-center justify-center px-10 py-5 mt-6 text-lg font-semibold transition-all transform rounded-full shadow-lg bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800"
//             >
//               🚨 Get Help Now
//             </Button>
//           </div>
//         </div>

//         {/* Services grid */}
//         <h3 className="mb-6 text-2xl font-bold text-blue-900">
//           Services Available
//         </h3>

//         <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2">
//           {[
//             { icon: Fuel, label: "Fuel Shortage" },
//             { icon: Car, label: "Flat Tire" },
//             { icon: Wrench, label: "Engine Issue" },
//             { icon: Car, label: "Accident Support" },
//           ].map((service, i) => (
//             <div
//               key={i}
//               className="flex flex-col items-center gap-4 p-8 text-center transition-transform border border-gray-200 shadow-md cursor-pointer bg-white/90 backdrop-blur-sm rounded-2xl hover:shadow-xl hover:scale-105"
//               onClick={() => router.push("/user/request")}
//               role="button"
//               tabIndex={0}
//               onKeyDown={() => {}}
//             >
//               <div className="p-6 text-white rounded-full shadow-lg bg-gradient-to-br from-blue-500 to-blue-700">
//                 <service.icon className="w-8 h-8" />
//               </div>
//               <h4 className="text-lg font-semibold text-blue-900">
//                 {service.label}
//               </h4>
//             </div>
//           ))}

//           {/* General Assistance (always full width) */}
//           <div
//             className="flex flex-col items-center col-span-1 gap-4 p-8 text-center transition-transform border border-gray-200 shadow-md cursor-pointer sm:col-span-2 bg-white/90 backdrop-blur-sm rounded-2xl hover:shadow-xl hover:scale-105"
//             onClick={() => router.push("/user/request")}
//           >
//             <div className="p-6 text-white rounded-full shadow-lg bg-gradient-to-br from-blue-500 to-blue-700">
//               <HelpCircle className="w-8 h-8" />
//             </div>
//             <h4 className="text-lg font-semibold text-blue-900">
//               General Assistance
//             </h4>
//           </div>
//         </div>
//       </main>

//       {/* Bottom Navigation */}
//       <BottomNav />
//     </div>
//   );
// }







// "use client";

// import { useRouter } from "next/navigation";
// import { Fuel, Car, Wrench, HelpCircle } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import Header from "@/components/Header";
// import BottomNav from "@/components/BottomNav";

// export default function UserPage() {
//   const router = useRouter();

//   return (
//     <div className="flex flex-col min-h-screen bg-gradient-to-br from-blue-100 via-blue-50 to-blue-200">
//       {/* Header */}
//       <Header />

//       {/* Main Content */}
//       <main className="flex-1 p-6 pb-28">
//         {/* Assistance card */}
//         <div className="max-w-3xl mx-auto text-center">
//           <div className="p-8 transition-all border border-gray-100 shadow-xl bg-white/95 rounded-3xl hover:shadow-2xl">
//             <h2 className="text-3xl font-extrabold text-blue-900">
//               Need Assistance?
//             </h2>
//             <p className="mt-3 text-gray-600">
//               Press the button below for immediate help.
//             </p>

//             <Button
//               onClick={() => router.push("/user/request")}
//               className="inline-flex items-center justify-center px-8 py-4 mt-6 text-lg font-semibold transition-all transform rounded-full shadow-lg bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800"
//             >
//               🚨 Get Help Now
//             </Button>
//           </div>
//         </div>

//         {/* Services grid */}
//         <div className="max-w-4xl mx-auto mt-12">
//           <h3 className="mb-6 text-2xl font-bold text-blue-900">
//             Services Available
//           </h3>

//           <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2">
//             {[
//               { icon: Fuel, label: "Fuel Shortage" },
//               { icon: Car, label: "Flat Tire" },
//               { icon: Wrench, label: "Engine Issue" },
//               { icon: Car, label: "Accident Support" },
//             ].map((service, i) => (
//               <div
//                 key={i}
//                 className="flex flex-col items-center gap-4 p-8 text-center transition-transform border border-gray-200 shadow-md cursor-pointer bg-white/90 backdrop-blur-sm rounded-2xl hover:shadow-xl hover:scale-105"
//                 onClick={() => router.push("/user/request")}
//                 role="button"
//                 tabIndex={0}
//                 onKeyDown={() => {}}
//               >
//                 <div className="p-6 text-white rounded-full shadow-lg bg-gradient-to-br from-blue-500 to-blue-700">
//                   <service.icon className="w-8 h-8" />
//                 </div>
//                 <h4 className="text-base font-semibold text-blue-900">
//                   {service.label}
//                 </h4>
//               </div>
//             ))}

//             {/* General Assistance (full width always) */}
//             <div
//               className="flex flex-col items-center gap-4 p-8 text-center transition-transform border border-gray-200 shadow-md cursor-pointer sm:col-span-2 bg-white/90 backdrop-blur-sm rounded-2xl hover:shadow-xl hover:scale-105"
//               onClick={() => router.push("/user/request")}
//             >
//               <div className="p-6 text-white rounded-full shadow-lg bg-gradient-to-br from-blue-500 to-blue-700">
//                 <HelpCircle className="w-8 h-8" />
//               </div>
//               <h4 className="text-base font-semibold text-blue-900">
//                 General Assistance
//               </h4>
//             </div>
//           </div>
//         </div>
//       </main>

//       {/* Bottom Navigation */}
//       <BottomNav />
//     </div>
//   );
// }



// app/user/page.tsx
// "use client";

// import { useEffect } from "react";
// import { useRouter } from "next/navigation";
// import { Fuel, Car, Wrench, HelpCircle } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import Header from "@/components/Header";
// import BottomNav from "@/components/BottomNav";
// import useAuth from "@/hooks/useAuth";

// export default function UserPage() {
//   const { user, loading } = useAuth();
//   const router = useRouter();

//   // Redirect if not logged in
//   useEffect(() => {
//     if (!loading && !user) {
//       router.push("/sign-up");
//     }
//   }, [loading, user, router]);

//   if (loading) return <div>Loading...</div>;
//   if (!user) return null; // avoid flashing UI before redirect

//   return (
//     <div className="flex flex-col min-h-screen bg-gradient-to-br from-blue-100 via-blue-50 to-blue-200">
//       {/* Header */}
//       <Header />

//       {/* Main Content */}
//       <main className="flex-1 p-6 pb-28">
//         {/* Assistance card */}
//         <div className="max-w-3xl mx-auto text-center">
//           <div className="p-8 transition-all border border-gray-100 shadow-xl bg-white/95 rounded-3xl hover:shadow-2xl">
//             <h2 className="text-3xl font-extrabold text-blue-900">
//               Need Assistance?
//             </h2>
//             <p className="mt-3 text-gray-600">
//               Press the button below for immediate help.
//             </p>

//             <Button
//               onClick={() => router.push("/user/request")}
//               className="inline-flex items-center justify-center px-8 py-4 mt-6 text-lg font-semibold transition-all transform rounded-full shadow-lg bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800"
//             >
//               🚨 Get Help Now
//             </Button>
//           </div>
//         </div>

//         {/* Services grid */}
//         <div className="max-w-4xl mx-auto mt-12">
//           <h3 className="mb-6 text-2xl font-bold text-blue-900">
//             Services Available
//           </h3>

//           <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2">
//             {[
//               { icon: Fuel, label: "Fuel Shortage" },
//               { icon: Car, label: "Flat Tire" },
//               { icon: Wrench, label: "Engine Issue" },
//               { icon: Car, label: "Accident Support" },
//             ].map((service, i) => (
//               <div
//                 key={i}
//                 className="flex flex-col items-center gap-4 p-8 text-center transition-transform border border-gray-200 shadow-md cursor-pointer bg-white/90 backdrop-blur-sm rounded-2xl hover:shadow-xl hover:scale-105"
//                 onClick={() => router.push("/user/request")}
//                 role="button"
//                 tabIndex={0}
//                 onKeyDown={() => {}}
//               >
//                 <div className="p-6 text-white rounded-full shadow-lg bg-gradient-to-br from-blue-500 to-blue-700">
//                   <service.icon className="w-8 h-8" />
//                 </div>
//                 <h4 className="text-base font-semibold text-blue-900">
//                   {service.label}
//                 </h4>
//               </div>
//             ))}

//             {/* General Assistance */}
//             <div
//               className="flex flex-col items-center gap-4 p-8 text-center transition-transform border border-gray-200 shadow-md cursor-pointer sm:col-span-2 bg-white/90 backdrop-blur-sm rounded-2xl hover:shadow-xl hover:scale-105"
//               onClick={() => router.push("/user/request")}
//             >
//               <div className="p-6 text-white rounded-full shadow-lg bg-gradient-to-br from-blue-500 to-blue-700">
//                 <HelpCircle className="w-8 h-8" />
//               </div>
//               <h4 className="text-base font-semibold text-blue-900">
//                 General Assistance
//               </h4>
//             </div>
//           </div>
//         </div>
//       </main>

//       {/* Bottom Navigation */}
//       <BottomNav />
//     </div>
//   );
// }


// "use client";

// import { useEffect, useState } from "react";
// import { useRouter } from "next/navigation";
// import { Fuel, Car, Wrench, HelpCircle, MessageCircle, Send, X, MapPin } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import Header from "@/components/Header";
// import BottomNav from "@/components/BottomNav";
// import useAuth from "@/hooks/useAuth";
// // Firebase imports
// import { db } from "@/lib/firebaseConfig";
// import { collection, addDoc, serverTimestamp } from "firebase/firestore";

// interface Message {
//   id: string;
//   text: string;
//   sender: 'user' | 'bot';
//   timestamp: Date;
// }

// interface RequestData {
//   serviceType: string;
//   carNumber: string;
//   location: string;
//   description: string;
//   urgency: 'low' | 'medium' | 'high';
//   contactNumber: string;
//   locationDisplay?: string;
//   locationError?: string;
// }

// export default function UserPage() {
//   const { user, loading } = useAuth();
//   const router = useRouter();
//   const [isChatOpen, setIsChatOpen] = useState(false);
//   const [messages, setMessages] = useState<Message[]>([]);
//   const [inputMessage, setInputMessage] = useState("");
//   const [isTyping, setIsTyping] = useState(false);
//   const [requestData, setRequestData] = useState<Partial<RequestData>>({});
//   const [isSubmitting, setIsSubmitting] = useState(false);
  
//   // New state for location handling
//   const [locationPermission, setLocationPermission] = useState<'unknown' | 'granted' | 'denied' | 'prompt'>('unknown');
//   const [isRequestingLocation, setIsRequestingLocation] = useState(false);

//   // Redirect if not logged in
//   useEffect(() => {
//     if (!loading && !user) {
//       router.push("/sign-up");
//     }
//   }, [loading, user, router]);

//   // Check location permission on component mount
//   useEffect(() => {
//     checkLocationPermission();
//   }, []);

//   // Function to check current location permission
//   const checkLocationPermission = async () => {
//     try {
//       if ('permissions' in navigator) {
//         const permission = await navigator.permissions.query({ name: 'geolocation' });
//         setLocationPermission(permission.state);
        
//         // Listen for permission changes
//         permission.addEventListener('change', () => {
//           setLocationPermission(permission.state);
//         });
//       }
//     } catch (error) {
//       console.error('Error checking location permission:', error);
//       setLocationPermission('unknown');
//     }
//   };

//   // Improved getUserLocation function
//   const getUserLocation = (): Promise<{ success: boolean; location: string; error?: string; address?: string }> => {
//     return new Promise((resolve) => {
//       if (!navigator.geolocation) {
//         resolve({ 
//           success: false, 
//           location: "", 
//           error: "Geolocation is not supported by this browser" 
//         });
//         return;
//       }

//       console.log('Requesting user location...');

//       navigator.geolocation.getCurrentPosition(
//         async (position) => {
//           try {
//             const { latitude, longitude, accuracy } = position.coords;
//             console.log(`Location found: ${latitude}, ${longitude} (accuracy: ${accuracy}m)`);
            
//             // Create a readable address format
//             const address = `Lat: ${latitude.toFixed(6)}, Lng: ${longitude.toFixed(6)}`;
            
//             resolve({ 
//               success: true, 
//               location: `${latitude},${longitude}`,
//               address: address
//             });
//           } catch (error) {
//             console.error('Error processing location:', error);
//             resolve({ 
//               success: false, 
//               location: "", 
//               error: "Error processing location data" 
//             });
//           }
//         },
//         (error) => {
//           let errorMessage = "";
//           console.error('Geolocation error:', error);
          
//           switch (error.code) {
//             case error.PERMISSION_DENIED:
//               errorMessage = "Location access denied. Please enable location permissions and try again.";
//               break;
//             case error.POSITION_UNAVAILABLE:
//               errorMessage = "Location information unavailable. Please check your GPS/internet connection.";
//               break;
//             case error.TIMEOUT:
//               errorMessage = "Location request timed out. Please try again.";
//               break;
//             default:
//               errorMessage = "Unable to get location. Please try again or enter manually.";
//               break;
//           }
          
//           resolve({ 
//             success: false, 
//             location: "", 
//             error: errorMessage 
//           });
//         },
//         {
//           enableHighAccuracy: true,
//           timeout: 15000,
//           maximumAge: 60000
//         }
//       );
//     });
//   };

//   // Enhanced getUserLocation with UI feedback
//   const getUserLocationWithFeedback = async (): Promise<{ success: boolean; location: string; error?: string; address?: string }> => {
//     setIsRequestingLocation(true);
    
//     try {
//       const result = await getUserLocation();
//       return result;
//     } finally {
//       setIsRequestingLocation(false);
//     }
//   };

//   // Handle location request button
//   const handleLocationRequest = async () => {
//     if (locationPermission === 'denied') {
//       addBotMessage("Location access is blocked. Please enable location permissions in your browser settings and refresh the page. 📍❌");
//       return;
//     }
    
//     addBotMessage("Requesting your location... Please allow location access when prompted. 📍⏳");
    
//     const locationResult = await getUserLocationWithFeedback();
    
//     if (locationResult.success) {
//       const updatedData = { 
//         ...requestData, 
//         location: locationResult.location,
//         locationDisplay: locationResult.address 
//       };
//       setRequestData(updatedData);
      
//       const displayLocation = locationResult.address || 'Location coordinates received';
//       addBotMessage(`✅ Location received: ${displayLocation}\n\nGreat! Now I have your location. Is there anything else you'd like to tell me about your situation?`);
//     } else {
//       addBotMessage(`❌ ${locationResult.error}\n\nNo problem! Please tell me your location manually. For example:\n• "Near City Mall, Pune"\n• "Highway NH8, KM 45"\n• "Opposite Metro Station"`);
//     }
//   };

//   // Improved AI-powered message processing
//   const processUserMessage = async (message: string, currentData: Partial<RequestData>) => {
//     const lowerMessage = message.toLowerCase();
//     const updatedData = { ...currentData };
    
//     // Extract service type from message if not already set
//     if (!updatedData.serviceType) {
//       const serviceKeywords = {
//         'fuel': ['fuel', 'petrol', 'diesel', 'gas', 'पेट्रोल', 'डीजल', 'इंधन'],
//         'tire': ['tire', 'tyre', 'puncture', 'flat', 'टायर', 'पंचर'],
//         'engine': ['engine', 'breakdown', 'start', 'इंजन', 'खराब'],
//         'accident': ['accident', 'crash', 'hit', 'अपघात', 'दुर्घटना']
//       };

//       for (const [service, keywords] of Object.entries(serviceKeywords)) {
//         if (keywords.some(keyword => lowerMessage.includes(keyword))) {
//           updatedData.serviceType = service;
//           break;
//         }
//       }
//     }

//     // Extract car number using regex if not already set
//     if (!updatedData.carNumber) {
//       const carNumberRegex = /(?:car|gadi|गाडी)?\s*(?:no|number|नंबर)?\s*[:\-]?\s*([A-Z]{2}\s*\d{2}\s*[A-Z]{1,2}\s*\d{4}|[A-Z0-9\s]{6,15})/i;
//       const carNumberMatch = message.match(carNumberRegex);
//       if (carNumberMatch) {
//         updatedData.carNumber = carNumberMatch[1].trim();
//       }
//     }

//     // Improved phone number detection
//     if (!updatedData.contactNumber && !user?.phone) {
//       const cleanMessage = message.trim();
//       const digitsOnlyRegex = /^\d+$/;
      
//       if (digitsOnlyRegex.test(cleanMessage)) {
//         const phoneNumber = cleanMessage;
//         if (phoneNumber.length >= 8 && phoneNumber.length <= 12) {
//           updatedData.contactNumber = phoneNumber;
//         }
//       } else {
//         // Try to extract phone number from mixed content
//         const phoneRegex = /(?:^|\s)([6-9]\d{9}|\d{10})(?:\s|$)/;
//         const phoneMatch = message.match(phoneRegex);
//         if (phoneMatch) {
//           updatedData.contactNumber = phoneMatch[1];
//         }
//       }
//     }

//     // Improved location handling
//     if (!updatedData.location || updatedData.location === "LOCATION_PENDING") {
//       // Check if user is providing manual location
//       const locationKeywords = [
//         'location', 'address', 'near', 'at ', 'beside', 'opposite', 'highway', 'road',
//         'स्थान', 'पता', 'के पास', 'के सामने', 'हाईवे', 'रोड'
//       ];
      
//       const hasLocationKeywords = locationKeywords.some(keyword => 
//         lowerMessage.includes(keyword.toLowerCase())
//       );
      
//       if (hasLocationKeywords) {
//         // User is providing manual location
//         updatedData.location = `MANUAL:${message}`;
//         updatedData.locationDisplay = message;
//         console.log('Manual location provided:', updatedData.location);
//       } else if (!updatedData.location) {
//         // Try to get GPS location automatically only if no location is set
//         console.log('Attempting to get GPS location...');
//         const locationResult = await getUserLocation();
        
//         if (locationResult.success) {
//           updatedData.location = locationResult.location;
//           updatedData.locationDisplay = locationResult.address;
//           console.log('GPS location retrieved:', updatedData.location);
//         } else {
//           console.log('GPS location failed:', locationResult.error);
//           updatedData.location = "LOCATION_PENDING";
//           updatedData.locationError = locationResult.error;
//         }
//       }
//     }

//     // Update description with new message
//     if (updatedData.description) {
//       updatedData.description += ` | ${message}`;
//     } else {
//       updatedData.description = message;
//     }

//     updatedData.urgency = 'medium';
//     return updatedData;
//   };

//   // Enhanced bot response generation
//   const generateBotResponse = (data: Partial<RequestData>, isComplete: boolean): string => {
//     if (isComplete) {
//       const locationDisplay = data.locationDisplay || 'Location coordinates received';
//       return `Perfect! I have all the information needed:
      
// ✅ Service: ${data.serviceType}
// ✅ Vehicle: ${data.carNumber}
// ✅ Location: ${locationDisplay}
// ✅ Contact: ${data.contactNumber}

// Let me submit your request right away! 🚗✅`;
//     }

//     // Check what's missing and ask for the next piece of information
//     if (!data.serviceType) {
//       return "I understand you need help! Could you please specify what type of assistance you need? For example: fuel shortage, flat tire, engine problem, or accident support? 🤔";
//     }

//     if (!data.carNumber) {
//       return "Got it! Could you please provide your car number/registration number? 🚙";
//     }

//     if (!user?.phone && !data.contactNumber) {
//       return "Almost done! Could you please provide your contact number for our service team to reach you? 📱";
//     }

//     // Enhanced location handling
//     if (!data.location || data.location === "LOCATION_PENDING") {
//       let locationMessage = "I need your location to send help. ";
      
//       if (data.locationError) {
//         locationMessage += `Location detection failed: ${data.locationError}\n\n`;
//       }
      
//       locationMessage += `Please either:
      
// 📍 Click the location button below to try GPS again, OR
// 📍 Tell me your address/landmark
      
// Examples:
// • "Near Phoenix Mall, Pune"
// • "Highway NH4, Kilometer 25"
// • "Opposite Reliance Petrol Pump, Mumbai"`;
      
//       return locationMessage;
//     }

//     return "Thank you for the information! Let me process your request... ⏳";
//   };

//   // Submit request to Firebase (keeping your existing logic)
//   const submitRequest = async (data: RequestData) => {
//     if (isSubmitting) return;
    
//     try {
//       console.log('Starting submission process with data:', data);
//       setIsSubmitting(true);
//       addBotMessage("Submitting your request to our database... Please wait! ⏳");
      
//       let locationObj;
      
//       // Handle different location formats
//       if (data.location.includes(',') && !data.location.startsWith('MANUAL:')) {
//         // GPS coordinates
//         const locationParts = data.location.split(',');
//         console.log('GPS Location parts:', locationParts);
        
//         if (locationParts.length === 2 && !isNaN(Number(locationParts[0])) && !isNaN(Number(locationParts[1]))) {
//           locationObj = {
//             lat: Number(locationParts[0]),
//             lng: Number(locationParts[1])
//           };
//           console.log('Using GPS coordinates:', locationObj);
//         } else {
//           throw new Error('Invalid GPS coordinates format');
//         }
//       } else {
//         // Manual location or address - use approximate coordinates
//         locationObj = {
//           lat: 19.0760, // Default to Mumbai area
//           lng: 72.8777
//         };
//         console.log('Using approximate location for manual address:', locationObj);
//         console.log('Manual location text:', data.location);
//       }

//       // Map service types to your database format
//       const serviceTypeMap: { [key: string]: string } = {
//         'fuel': 'Fuel Shortage',
//         'tire': 'Flat Tyre', 
//         'engine': 'Engine Issue',
//         'accident': 'Accident Support'
//       };

//       const requestPayload = {
//         createdAt: serverTimestamp(),
//         issueType: serviceTypeMap[data.serviceType] || 'General Assistance',
//         location: locationObj,
//         notes: data.location.startsWith('MANUAL:') ? 
//                `${data.description} | Location: ${data.location.replace('MANUAL:', '')}` : 
//                data.description,
//         phoneNumber: data.contactNumber.startsWith('+91') ? data.contactNumber : `+91${data.contactNumber}`,
//         status: 'Pending',
//         vehicleModel: 'Not specified',
//         vehicleNumber: data.carNumber,
//         vehicleType: 'Not specified'
//       };

//       console.log('Final payload for Firebase:', requestPayload);
      
//       const docRef = await addDoc(collection(db, 'requests'), requestPayload);
//       console.log('Document successfully written with ID:', docRef.id);
      
//       // Show success message
//       const locationText = data.location.startsWith('MANUAL:') ? 
//                           data.location.replace('MANUAL:', '') : 
//                           `${locationObj.lat.toFixed(6)}, ${locationObj.lng.toFixed(6)}`;
                          
//       addBotMessage(`✅ Your request has been submitted successfully! 
      
// Request ID: ${docRef.id}
// Issue: ${requestPayload.issueType}
// Vehicle: ${data.carNumber}
// Location: ${locationText}
// Contact: ${requestPayload.phoneNumber}

// Our team will reach your location shortly. Stay safe! 🚗💙`);
      
//       // Show additional options
//       setTimeout(() => {
//         addBotMessage("You can:\n• Close this chat and wait for our call\n• Submit another request if needed\n• Call our emergency hotline: 1800-HELP-NOW");
//       }, 2000);
      
//     } catch (error) {
//       console.error('Detailed Firebase error:', error);
      
//       addBotMessage(`❌ Sorry, there was an error submitting your request to the database. 

// Error: ${error instanceof Error ? error.message : 'Unknown error'}

// Please try the manual form or contact us directly. Our team is here to help! 😔`);
      
//       // Offer alternative
//       setTimeout(() => {
//         addBotMessage("Would you like me to open the manual request form for you? Just say 'yes' or 'manual form'.");
//       }, 1000);
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   // Add message to chat with unique ID generation
//   const addMessage = (text: string, sender: 'user' | 'bot') => {
//     const newMessage: Message = {
//       id: `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
//       text,
//       sender,
//       timestamp: new Date()
//     };
//     setMessages(prev => [...prev, newMessage]);
//   };

//   const addBotMessage = (text: string) => {
//     setIsTyping(true);
//     setTimeout(() => {
//       setIsTyping(false);
//       addMessage(text, 'bot');
//     }, 1000);
//   };

//   // Handle sending message
//   const handleSendMessage = async () => {
//     if (!inputMessage.trim() || isSubmitting) return;

//     const userMessage = inputMessage.trim();
//     addMessage(userMessage, 'user');
//     setInputMessage("");

//     // Check for manual form request
//     if (userMessage.toLowerCase().includes('manual') || userMessage.toLowerCase().includes('form') || userMessage.toLowerCase().includes('yes')) {
//       addBotMessage("Opening the manual request form for you... 📝");
//       setTimeout(() => {
//         router.push('/user/request');
//         closeChat();
//       }, 1000);
//       return;
//     }

//     // Process the message with current data context
//     const updatedData = await processUserMessage(userMessage, requestData);
//     setRequestData(updatedData);

//     console.log('Updated data after processing:', updatedData);

//     // Check if we have all required data
//     const hasValidLocation = updatedData.location && 
//                            updatedData.location !== "LOCATION_PENDING" && 
//                            updatedData.location !== "";

//     const isComplete = !!(
//       updatedData.serviceType && 
//       updatedData.carNumber && 
//       (user?.phone || updatedData.contactNumber) &&
//       hasValidLocation
//     );

//     console.log('Is complete check:', {
//       serviceType: updatedData.serviceType,
//       carNumber: updatedData.carNumber,
//       contactNumber: user?.phone || updatedData.contactNumber,
//       location: updatedData.location,
//       hasValidLocation,
//       isComplete
//     });

//     // Generate bot response
//     const botResponse = generateBotResponse(updatedData, isComplete);
//     addBotMessage(botResponse);

//     // Submit if complete
//     if (isComplete && !isSubmitting) {
//       console.log('Attempting to submit request...');
//       setTimeout(() => {
//         const completeData: RequestData = {
//           serviceType: updatedData.serviceType!,
//           carNumber: updatedData.carNumber!,
//           location: updatedData.location!,
//           description: updatedData.description!,
//           urgency: updatedData.urgency!,
//           contactNumber: user?.phone || updatedData.contactNumber!
//         };
//         console.log('Complete data for submission:', completeData);
//         submitRequest(completeData);
//       }, 2000);
//     }
//   };

//   // Enhanced chat initialization
//   const openChat = () => {
//     setIsChatOpen(true);
//     if (messages.length === 0) {
//       addBotMessage("Hello! I'm here to help you with roadside assistance. Please describe what help you need in any language - for example: 'fuel problem, car number MH12AB1234' 🤖");
      
//       // Automatically try to get location after 2 seconds
//       setTimeout(() => {
//         if (locationPermission !== 'denied') {
//           addBotMessage("Let me try to get your current location to speed up the process... 📍");
//           handleLocationRequest();
//         }
//       }, 2000);
//     }
//   };

//   const closeChat = () => {
//     setIsChatOpen(false);
//     setMessages([]);
//     setRequestData({});
//     setIsSubmitting(false);
//   };

//   if (loading) return <div>Loading...</div>;
//   if (!user) return null;

//   return (
//     <div className="flex flex-col min-h-screen bg-gradient-to-br from-blue-100 via-blue-50 to-blue-200">
//       {/* Header */}
//       <Header />

//       {/* Main Content */}
//       <main className="flex-1 p-6 pb-28">
//         {/* Assistance card */}
//         <div className="max-w-3xl mx-auto text-center">
//           <div className="p-8 transition-all border border-gray-100 shadow-xl bg-white/95 rounded-3xl hover:shadow-2xl">
//             <h2 className="text-3xl font-extrabold text-blue-900">
//               Need Assistance?
//             </h2>
//             <p className="mt-3 text-gray-600">
//               Press the button below for immediate help or use our AI assistant.
//             </p>

//             <div className="flex flex-col items-center justify-center gap-4 mt-6 sm:flex-row">
//               <Button
//                 onClick={() => router.push("/user/request")}
//                 className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold transition-all transform rounded-full shadow-lg bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800"
//               >
//                 🚨 Get Help Now
//               </Button>

//               <span className="text-gray-500">or</span>

//               {/* AI Assistant Circle Button */}
//               <div
//                 onClick={openChat}
//                 className="relative flex items-center justify-center w-16 h-16 transition-all transform rounded-full shadow-lg cursor-pointer bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 hover:scale-110 animate-pulse"
//               >
//                 <MessageCircle className="w-8 h-8 text-white" />
//                 <div className="absolute flex items-center justify-center w-4 h-4 bg-red-500 rounded-full -top-1 -right-1">
//                   <span className="text-xs font-bold text-white">AI</span>
//                 </div>
//               </div>
//             </div>
//             <p className="mt-2 text-sm text-gray-500">
//               Click the green circle for AI-powered assistance in any language
//             </p>
//           </div>
//         </div>

//         {/* Services grid */}
//         <div className="max-w-4xl mx-auto mt-12">
//           <h3 className="mb-6 text-2xl font-bold text-blue-900">
//             Services Available
//           </h3>

//           <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2">
//             {[
//               { icon: Fuel, label: "Fuel Shortage" },
//               { icon: Car, label: "Flat Tire" },
//               { icon: Wrench, label: "Engine Issue" },
//               { icon: Car, label: "Accident Support" },
//             ].map((service, i) => (
//               <div
//                 key={i}
//                 className="flex flex-col items-center gap-4 p-8 text-center transition-transform border border-gray-200 shadow-md cursor-pointer bg-white/90 backdrop-blur-sm rounded-2xl hover:shadow-xl hover:scale-105"
//                 onClick={() => router.push("/user/request")}
//                 role="button"
//                 tabIndex={0}
//                 onKeyDown={() => {}}
//               >
//                 <div className="p-6 text-white rounded-full shadow-lg bg-gradient-to-br from-blue-500 to-blue-700">
//                   <service.icon className="w-8 h-8" />
//                 </div>
//                 <h4 className="text-base font-semibold text-blue-900">
//                   {service.label}
//                 </h4>
//               </div>
//             ))}

//             {/* General Assistance */}
//             <div
//               className="flex flex-col items-center gap-4 p-8 text-center transition-transform border border-gray-200 shadow-md cursor-pointer sm:col-span-2 bg-white/90 backdrop-blur-sm rounded-2xl hover:shadow-xl hover:scale-105"
//               onClick={() => router.push("/user/request")}
//             >
//               <div className="p-6 text-white rounded-full shadow-lg bg-gradient-to-br from-blue-500 to-blue-700">
//                 <HelpCircle className="w-8 h-8" />
//               </div>
//               <h4 className="text-base font-semibold text-blue-900">
//                 General Assistance
//               </h4>
//             </div>
//           </div>
//         </div>
//       </main>

//       {/* AI Chatbot Modal */}
//       {isChatOpen && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50">
//           <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg h-[600px] flex flex-col">
//             {/* Chat Header */}
//             <div className="flex items-center justify-between p-4 text-white border-b bg-gradient-to-r from-blue-600 to-blue-700 rounded-t-2xl">
//               <div className="flex items-center gap-3">
//                 <div className="flex items-center justify-center w-10 h-10 rounded-full bg-white/20">
//                   <MessageCircle className="w-5 h-5" />
//                 </div>
//                 <div>
//                   <h3 className="font-semibold">AI Assistant</h3>
//                   <p className="text-xs opacity-90">Roadside Help in Any Language</p>
//                 </div>
//               </div>
//               <Button
//                 onClick={closeChat}
//                 variant="ghost"
//                 size="sm"
//                 className="text-white hover:bg-white/20"
//               >
//                 <X className="w-5 h-5" />
//               </Button>
//             </div>

//             {/* Chat Messages */}
//             <div className="flex-1 p-4 space-y-4 overflow-y-auto">
//               {messages.map((message) => (
//                 <div
//                   key={message.id}
//                   className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
//                 >
//                   <div
//                     className={`max-w-[80%] p-3 rounded-2xl ${
//                       message.sender === 'user'
//                         ? 'bg-blue-600 text-white rounded-br-md'
//                         : 'bg-gray-100 text-gray-800 rounded-bl-md'
//                     }`}
//                   >
//                     <p className="text-sm whitespace-pre-line">{message.text}</p>
//                     <p className="mt-1 text-xs opacity-70">
//                       {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
//                     </p>
//                   </div>
//                 </div>
//               ))}
              
//               {isTyping && (
//                 <div className="flex justify-start">
//                   <div className="p-3 text-gray-800 bg-gray-100 rounded-2xl rounded-bl-md">
//                     <div className="flex space-x-1">
//                       <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
//                       <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
//                       <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
//                     </div>
//                   </div>
//                 </div>
//               )}
//             </div>

//             {/* Chat Input */}
//             <div className="p-4 border-t">
//               <div className="flex gap-2">
//                 <input
//                   type="text"
//                   value={inputMessage}
//                   onChange={(e) => setInputMessage(e.target.value)}
//                   onKeyPress={(e) => e.key === 'Enter' && !isSubmitting && handleSendMessage()}
//                   placeholder="Type your message in any language..."
//                   className="flex-1 p-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
//                   disabled={isSubmitting}
//                 />
                
//                 {/* Location Request Button */}
//                 <Button
//                   onClick={handleLocationRequest}
//                   disabled={isRequestingLocation}
//                   className="p-3 text-white bg-green-600 rounded-full hover:bg-green-700"
//                   title="Request current location"
//                 >
//                   {isRequestingLocation ? (
//                     <div className="w-5 h-5 border-2 border-white rounded-full border-t-transparent animate-spin"></div>
//                   ) : (
//                     <MapPin className="w-5 h-5" />
//                   )}
//                 </Button>
                
//                 <Button
//                   onClick={handleSendMessage}
//                   className="p-3 bg-blue-600 rounded-full hover:bg-blue-700"
//                   disabled={!inputMessage.trim() || isSubmitting}
//                 >
//                   <Send className="w-5 h-5" />
//                 </Button>
//               </div>
              
//               {/* Location status indicator */}
//               {locationPermission !== 'unknown' && (
//                 <div className="mt-2 text-xs text-center text-gray-500">
//                   Location: {locationPermission === 'granted' ? '✅ Allowed' : 
//                             locationPermission === 'denied' ? '❌ Blocked' : '⏳ Not requested'}
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Bottom Navigation */}
//       <BottomNav />
//     </div>
//   );
// }




"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Fuel, Car, Wrench, HelpCircle, MessageCircle, Send, X, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import BottomNav from "@/components/BottomNav";
import useAuth from "@/hooks/useAuth";
// Firebase imports
import { db } from "@/lib/firebaseConfig";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

interface RequestData {
  serviceType: string;
  carNumber: string;
  location: string;
  description: string;
  urgency: 'low' | 'medium' | 'high';
  contactNumber: string;
  locationDisplay?: string;
  locationError?: string;
}

interface LocationResult {
  success: boolean;
  location: string;
  accuracy?: number;
  method: string;
  error?: string;
  address?: string;
}

interface BestLocation {
  coordinates: string;
  accuracy: number;
  method: string;
  address?: string;
}

export default function UserPage() {
  const { user, loading } = useAuth();
  const router = useRouter();
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputMessage, setInputMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [requestData, setRequestData] = useState<Partial<RequestData>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // Enhanced location state
  const [locationPermission, setLocationPermission] = useState<'unknown' | 'granted' | 'denied' | 'prompt'>('unknown');
  const [isRequestingLocation, setIsRequestingLocation] = useState(false);
  const [locationMethods, setLocationMethods] = useState({
    gps: { tried: false, success: false, data: null, error: null },
    wifi: { tried: false, success: false, data: null, error: null },
    network: { tried: false, success: false, data: null, error: null }
  });
  const [bestLocation, setBestLocation] = useState<BestLocation | null>(null);
  const [locationWatchId, setLocationWatchId] = useState<number | null>(null);

  // Redirect if not logged in
  useEffect(() => {
    if (!loading && !user) {
      router.push("/sign-up");
    }
  }, [loading, user, router]);

  // Check location permission on component mount
  useEffect(() => {
    checkLocationPermission();
    
    // Cleanup watch position on unmount
    return () => {
      if (locationWatchId) {
        navigator.geolocation.clearWatch(locationWatchId);
      }
    };
  }, [locationWatchId]);

  // Function to check current location permission
  const checkLocationPermission = async () => {
    try {
      if ('permissions' in navigator) {
        const permission = await navigator.permissions.query({ name: 'geolocation' });
        setLocationPermission(permission.state);
        
        // Listen for permission changes
        permission.addEventListener('change', () => {
          setLocationPermission(permission.state);
        });
      }
    } catch (error) {
      console.error('Error checking location permission:', error);
      setLocationPermission('unknown');
    }
  };

  // Advanced location detection with multiple methods
  const getUserLocationAdvanced = (): Promise<LocationResult> => {
    return new Promise((resolve) => {
      if (!navigator.geolocation) {
        resolve({
          success: false,
          location: "",
          method: "not-supported",
          error: "Geolocation not supported by this browser"
        });
        return;
      }

      let bestResult: LocationResult | null = null;
      let methodsCompleted = 0;
      const totalMethods = 3;
      let resolved = false;

      const tryResolve = (result: LocationResult) => {
        if (!resolved) {
          resolved = true;
          resolve(result);
        }
      };

      // Method 1: Force fresh GPS location (bypass cache)
      console.log('🛰️ Trying GPS with fresh data...');
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude, accuracy } = position.coords;
          console.log(`GPS Result: ${latitude}, ${longitude} (±${accuracy}m)`);
          
          const result: LocationResult = {
            success: true,
            location: `${latitude},${longitude}`,
            accuracy,
            method: 'GPS',
            address: `GPS: ${latitude.toFixed(6)}, ${longitude.toFixed(6)} (±${Math.round(accuracy)}m)`
          };

          if (!bestResult || accuracy < bestResult.accuracy!) {
            bestResult = result;
          }

          // If GPS is very accurate, use it immediately
          if (accuracy <= 50) {
            tryResolve(bestResult);
            return;
          }

          methodsCompleted++;
          if (methodsCompleted === totalMethods) {
            tryResolve(bestResult!);
          }
        },
        (error) => {
          console.log('GPS failed:', error.message);
          methodsCompleted++;
          if (methodsCompleted === totalMethods && bestResult) {
            tryResolve(bestResult);
          } else if (methodsCompleted === totalMethods) {
            tryResolve({ success: false, location: "", method: "gps", error: error.message });
          }
        },
        {
          enableHighAccuracy: true,
          timeout: 15000,
          maximumAge: 0 // CRITICAL: Force fresh location, ignore cache
        }
      );

      // Method 2: Try with high accuracy disabled (WiFi/Cell towers)
      setTimeout(() => {
        console.log('📶 Trying WiFi/Cell tower location...');
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const { latitude, longitude, accuracy } = position.coords;
            console.log(`WiFi/Cell Result: ${latitude}, ${longitude} (±${accuracy}m)`);
            
            const result: LocationResult = {
              success: true,
              location: `${latitude},${longitude}`,
              accuracy,
              method: 'WiFi/Cell',
              address: `WiFi: ${latitude.toFixed(6)}, ${longitude.toFixed(6)} (±${Math.round(accuracy)}m)`
            };

            if (!bestResult || (accuracy < bestResult.accuracy! && accuracy <= 1000)) {
              bestResult = result;
            }

            methodsCompleted++;
            if (methodsCompleted === totalMethods) {
              tryResolve(bestResult!);
            }
          },
          (error) => {
            console.log('WiFi/Cell failed:', error.message);
            methodsCompleted++;
            if (methodsCompleted === totalMethods && bestResult) {
              tryResolve(bestResult);
            } else if (methodsCompleted === totalMethods) {
              tryResolve({ success: false, location: "", method: "wifi", error: error.message });
            }
          },
          {
            enableHighAccuracy: false,
            timeout: 10000,
            maximumAge: 60000 // Allow some caching for WiFi
          }
        );
      }, 2000);

      // Method 3: Last resort - network location
      setTimeout(() => {
        console.log('🌐 Trying network location...');
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const { latitude, longitude, accuracy } = position.coords;
            console.log(`Network Result: ${latitude}, ${longitude} (±${accuracy}m)`);
            
            const result: LocationResult = {
              success: true,
              location: `${latitude},${longitude}`,
              accuracy,
              method: 'Network',
              address: `Network: ${latitude.toFixed(4)}, ${longitude.toFixed(4)} (±${Math.round(accuracy)}m)`
            };

            if (!bestResult) {
              bestResult = result;
            }

            methodsCompleted++;
            if (methodsCompleted === totalMethods) {
              tryResolve(bestResult!);
            }
          },
          (error) => {
            console.log('Network failed:', error.message);
            methodsCompleted++;
            if (methodsCompleted === totalMethods && bestResult) {
              tryResolve(bestResult);
            } else if (methodsCompleted === totalMethods) {
              tryResolve({ success: false, location: "", method: "network", error: "All methods failed" });
            }
          },
          {
            enableHighAccuracy: false,
            timeout: 8000,
            maximumAge: 300000
          }
        );
      }, 5000);

      // Overall timeout
      setTimeout(() => {
        if (bestResult) {
          tryResolve(bestResult);
        } else {
          tryResolve({
            success: false,
            location: "",
            method: "timeout",
            error: "Location detection timed out. Please try manual entry."
          });
        }
      }, 25000);
    });
  };

  // Start location watching for mobile users
  const startLocationWatching = () => {
    if (locationWatchId) {
      navigator.geolocation.clearWatch(locationWatchId);
    }
    
    const watchId = navigator.geolocation.watchPosition(
      (position) => {
        const { latitude, longitude, accuracy } = position.coords;
        
        // Only update if significantly better accuracy or moved > 100m
        if (bestLocation) {
          const [prevLat, prevLng] = bestLocation.coordinates.split(',').map(Number);
          const distance = Math.sqrt(
            Math.pow((latitude - prevLat) * 111000, 2) + 
            Math.pow((longitude - prevLng) * 111000, 2)
          );
          
          if (distance > 100 || accuracy < bestLocation.accuracy * 0.7) {
            const newLocation: BestLocation = {
              coordinates: `${latitude},${longitude}`,
              accuracy: accuracy,
              method: accuracy <= 50 ? 'GPS' : 'WiFi',
              address: `${accuracy <= 50 ? 'GPS' : 'WiFi'}: ${latitude.toFixed(6)}, ${longitude.toFixed(6)} (±${Math.round(accuracy)}m)`
            };
            
            setBestLocation(newLocation);
            setRequestData(prev => ({
              ...prev,
              location: newLocation.coordinates,
              locationDisplay: newLocation.address
            }));
            
            if (distance > 100) {
              addBotMessage(`📱 Location updated - you moved ${Math.round(distance)}m\n📍 ${newLocation.address}`);
            }
          }
        }
      },
      (error) => console.log('Watch error:', error.message),
      {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 5000
      }
    );
    
    setLocationWatchId(watchId);
    
    // Stop watching after 5 minutes
    setTimeout(() => {
      if (watchId) {
        navigator.geolocation.clearWatch(watchId);
        setLocationWatchId(null);
      }
    }, 300000);
  };

  // Enhanced location request handler
  const handleLocationRequest = async () => {
    if (locationPermission === 'denied') {
      addBotMessage("❌ Location blocked in browser settings.\n\n🔧 To fix:\n1. Click the location/lock icon in address bar\n2. Allow location access\n3. Refresh page\n\nOr tell me your location manually! 📍");
      return;
    }
    
    setIsRequestingLocation(true);
    addBotMessage("🔍 Searching for your location using multiple methods...\n\n📡 This may take 10-15 seconds for best accuracy");
    
    try {
      const locationResult = await getUserLocationAdvanced();
      
      if (locationResult.success) {
        const updatedData = { 
          ...requestData, 
          location: locationResult.location,
          locationDisplay: locationResult.address 
        };
        setRequestData(updatedData);
        setBestLocation({
          coordinates: locationResult.location,
          accuracy: locationResult.accuracy || 0,
          method: locationResult.method,
          address: locationResult.address
        });
        
        // Provide user feedback about accuracy
        let accuracyFeedback = "";
        if (locationResult.accuracy! <= 100) {
          accuracyFeedback = "✅ Excellent accuracy!";
        } else if (locationResult.accuracy! <= 500) {
          accuracyFeedback = "✅ Good accuracy for city areas";
        } else if (locationResult.accuracy! <= 2000) {
          accuracyFeedback = "⚠️ Moderate accuracy - please verify";
        } else {
          accuracyFeedback = "⚠️ Low accuracy - consider manual entry";
        }
        
        addBotMessage(`📍 Location detected!\n\n${locationResult.address}\nMethod: ${locationResult.method}\n${accuracyFeedback}\n\n${locationResult.accuracy! > 1000 ? 
          'If this location seems wrong, please tell me your exact address manually.' : 
          'Location looks good! What assistance do you need?'}`);
          
        // Start watching for location changes (for mobile users)
        if (locationResult.accuracy! <= 100) {
          startLocationWatching();
        }
          
      } else {
        addBotMessage(`❌ Could not detect location: ${locationResult.error}\n\n💡 Common solutions:\n• Enable location in browser settings\n• Try refreshing the page\n• Use manual location entry\n• Ensure you're on HTTPS site\n\nNo worries! Just tell me where you are. 📝`);
      }
    } catch (error) {
      console.error('Location error:', error);
      addBotMessage("❌ Location detection failed. Please tell me your location manually.\n\nExample: 'Near Phoenix Mall, Mumbai' or 'Highway NH1, KM 25'");
    } finally {
      setIsRequestingLocation(false);
    }
  };

  // Manual location entry helper
  const triggerManualLocationEntry = () => {
    addBotMessage(`📝 Manual Location Entry:\n\nPlease provide your EXACT location with landmarks:\n\n✅ Good examples:\n• "Opposite McDonald's, SV Road, Bandra West"\n• "Highway NH8, Toll Plaza after Vashi"\n• "Near Metro Station, CP, New Delhi"\n• "Building A-101, Hiranandani, Powai"\n\n❌ Too vague:\n• "Mumbai" or "Pune" (too broad)\n• "Near mall" (which mall?)\n• "Main road" (which road?)\n\nThe more specific, the faster our help reaches you! 🚗`);
  };

  // Improved AI-powered message processing with language detection
  const processUserMessage = async (message: string, currentData: Partial<RequestData>) => {
    const lowerMessage = message.toLowerCase();
    const updatedData = { ...currentData };
    
    // Detect user's language
    const detectedLanguage = detectLanguage(message);
    console.log('Detected language:', detectedLanguage);
    
    // Store original message and translate to English for processing
    const originalMessage = message;
    const englishMessage = detectedLanguage !== 'english' ? 
      translateToEnglish(message, detectedLanguage) : message;
    
    console.log('Original message:', originalMessage);
    console.log('English translation:', englishMessage);
    
    const lowerEnglishMessage = englishMessage.toLowerCase();
    
    // Extract service type from English message if not already set
    if (!updatedData.serviceType) {
      const serviceKeywords = {
        'fuel': ['fuel', 'petrol', 'diesel', 'gas', 'finished', 'problem', 'empty'],
        'tire': ['tire', 'tyre', 'puncture', 'flat', 'punctured'],
        'engine': ['engine', 'breakdown', 'start', 'problem'],
        'accident': ['accident', 'crash', 'hit']
      };

      for (const [service, keywords] of Object.entries(serviceKeywords)) {
        if (keywords.some(keyword => lowerEnglishMessage.includes(keyword))) {
          updatedData.serviceType = service;
          break;
        }
      }
    }

    // Extract car number using regex if not already set
    if (!updatedData.carNumber) {
      // Try both original and English messages for car number
      const carNumberRegex = /(?:car|gadi|गाडी|गाड़ी)?\s*(?:no|number|नंबर)?\s*[:\-]?\s*([A-Z]{2}\s*\d{2}\s*[A-Z]{1,2}\s*\d{4}|[A-Z0-9\s]{6,15})/i;
      let carNumberMatch = originalMessage.match(carNumberRegex) || englishMessage.match(carNumberRegex);
      if (carNumberMatch) {
        updatedData.carNumber = carNumberMatch[1].trim();
      }
    }

    // Improved phone number detection
    if (!updatedData.contactNumber && !user?.phone) {
      const cleanMessage = originalMessage.trim(); // Use original message for phone numbers
      const digitsOnlyRegex = /^\d+$/;
      
      if (digitsOnlyRegex.test(cleanMessage)) {
        const phoneNumber = cleanMessage;
        if (phoneNumber.length >= 8 && phoneNumber.length <= 12) {
          updatedData.contactNumber = phoneNumber;
        }
      } else {
        // Try to extract phone number from mixed content
        const phoneRegex = /(?:^|\s)([6-9]\d{9}|\d{10})(?:\s|$)/;
        const phoneMatch = originalMessage.match(phoneRegex);
        if (phoneMatch) {
          updatedData.contactNumber = phoneMatch[1];
        }
      }
    }

    // Improved location handling
    if (!updatedData.location || updatedData.location === "LOCATION_PENDING") {
      // Check if user is providing manual location (check both original and English)
      const locationKeywords = [
        'location', 'address', 'near', 'at ', 'beside', 'opposite', 'highway', 'road'
      ];
      
      const hasLocationKeywords = locationKeywords.some(keyword => 
        lowerEnglishMessage.includes(keyword.toLowerCase())
      );
      
      if (hasLocationKeywords) {
        // User is providing manual location - store original message for better context
        updatedData.location = `MANUAL:${originalMessage}`;
        updatedData.locationDisplay = originalMessage;
        console.log('Manual location provided:', updatedData.location);
      } else if (!updatedData.location) {
        // Don't auto-request location in message processing to avoid conflicts
        updatedData.location = "LOCATION_PENDING";
      }
    }

    // Update description with English translation for database
    const descriptionForDB = detectedLanguage !== 'english' ? 
      `${englishMessage} (Original: ${originalMessage})` : originalMessage;
      
    if (updatedData.description) {
      updatedData.description += ` | ${descriptionForDB}`;
    } else {
      updatedData.description = descriptionForDB;
    }

    updatedData.urgency = 'medium';
    
    // Store detected language for response generation
    updatedData.detectedLanguage = detectedLanguage;
    
    return updatedData;
  };

  // Enhanced bot response generation with language support
  const generateBotResponse = (data: Partial<RequestData>, isComplete: boolean): string => {
    const userLanguage = (data as any).detectedLanguage || 'english';
    
    let englishResponse: string;
    
    if (isComplete) {
      const locationDisplay = data.locationDisplay || 'Location coordinates received';
      englishResponse = `Perfect! I have all the information needed:
      
✅ Service: ${data.serviceType}
✅ Vehicle: ${data.carNumber}
✅ Location: ${locationDisplay}
✅ Contact: ${data.contactNumber}

Let me submit your request right away! 🚗✅`;
    } else {
      // Check what's missing and ask for the next piece of information
      if (!data.serviceType) {
        englishResponse = "I understand you need help! Could you please specify what type of assistance you need? For example: fuel shortage, flat tire, engine problem, or accident support? 🤔";
      } else if (!data.carNumber) {
        englishResponse = "Got it! Could you please provide your car number/registration number? 🚙";
      } else if (!user?.phone && !data.contactNumber) {
        englishResponse = "Almost done! Could you please provide your contact number for our service team to reach you? 📱";
      } else if (!data.location || data.location === "LOCATION_PENDING") {
        let locationMessage = "I need your location to send help. ";
        
        if (data.locationError) {
          locationMessage += `Location detection failed: ${data.locationError}\n\n`;
        }
        
        locationMessage += `Please either:
        
📍 Click the location button below to try GPS again, OR
📍 Tell me your address/landmark
        
Examples:
• "Near Phoenix Mall, Pune"
• "Highway NH4, Kilometer 25"
• "Opposite Reliance Petrol Pump, Mumbai"`;
        
        englishResponse = locationMessage;
      } else {
        englishResponse = "Thank you for the information! Let me process your request... ⏳";
      }
    }
    
    // Translate response to user's language
    return generateResponseInLanguage(englishResponse, userLanguage);
  };

  // Submit request to Firebase
  const submitRequest = async (data: RequestData) => {
    if (isSubmitting) return;
    
    try {
      console.log('Starting submission process with data:', data);
      setIsSubmitting(true);
      addBotMessage("Submitting your request to our database... Please wait! ⏳");
      
      let locationObj;
      
      // Handle different location formats
      if (data.location.includes(',') && !data.location.startsWith('MANUAL:')) {
        // GPS coordinates
        const locationParts = data.location.split(',');
        console.log('GPS Location parts:', locationParts);
        
        if (locationParts.length === 2 && !isNaN(Number(locationParts[0])) && !isNaN(Number(locationParts[1]))) {
          locationObj = {
            lat: Number(locationParts[0]),
            lng: Number(locationParts[1])
          };
          console.log('Using GPS coordinates:', locationObj);
        } else {
          throw new Error('Invalid GPS coordinates format');
        }
      } else {
        // Manual location - we'll need to geocode this or ask user for more specific coordinates
        // For now, we'll store the manual location text and let the service team handle it
        console.log('Manual location provided:', data.location);
        
        // Don't use default coordinates - let the backend/service team handle manual locations
        // We can add geocoding API here later if needed
        locationObj = null; // Will be handled differently in the payload
      }

      // Map service types to your database format
      const serviceTypeMap: { [key: string]: string } = {
        'fuel': 'Fuel Shortage',
        'tire': 'Flat Tyre', 
        'engine': 'Engine Issue',
        'accident': 'Accident Support'
      };

      const requestPayload = {
        createdAt: serverTimestamp(),
        issueType: serviceTypeMap[data.serviceType] || 'General Assistance',
        location: locationObj || { lat: null, lng: null }, // Handle manual locations without coordinates
        locationText: data.location.startsWith('MANUAL:') ? data.location.replace('MANUAL:', '').trim() : null,
        notes: data.location.startsWith('MANUAL:') ? 
               `${data.description} | Manual Location: ${data.location.replace('MANUAL:', '')}` : 
               data.description,
        phoneNumber: data.contactNumber.startsWith('+91') ? data.contactNumber : `+91${data.contactNumber}`,
        status: 'Pending',
        vehicleModel: 'Not specified',
        vehicleNumber: data.carNumber,
        vehicleType: 'Not specified'
      };

      console.log('Final payload for Firebase:', requestPayload);
      
      const docRef = await addDoc(collection(db, 'requests'), requestPayload);
      console.log('Document successfully written with ID:', docRef.id);
      
      // Show success message
      const locationText = data.location.startsWith('MANUAL:') ? 
                          data.location.replace('MANUAL:', '') : 
                          `${locationObj.lat.toFixed(6)}, ${locationObj.lng.toFixed(6)}`;
                          
      addBotMessage(`✅ Your request has been submitted successfully! 
      
Request ID: ${docRef.id}
Issue: ${requestPayload.issueType}
Vehicle: ${data.carNumber}
Location: ${locationText}
Contact: ${requestPayload.phoneNumber}

Our team will reach your location shortly. Stay safe! 🚗💙`);
      
      // Show additional options
      setTimeout(() => {
        addBotMessage("You can:\n• Close this chat and wait for our call\n• Submit another request if needed\n• Call our emergency hotline: 1800-HELP-NOW");
      }, 2000);
      
    } catch (error) {
      console.error('Detailed Firebase error:', error);
      
      addBotMessage(`❌ Sorry, there was an error submitting your request to the database. 

Error: ${error instanceof Error ? error.message : 'Unknown error'}

Please try the manual form or contact us directly. Our team is here to help! 😔`);
      
      // Offer alternative
      setTimeout(() => {
        addBotMessage("Would you like me to open the manual request form for you? Just say 'yes' or 'manual form'.");
      }, 1000);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Add message to chat with unique ID generation
  const addMessage = (text: string, sender: 'user' | 'bot') => {
    const newMessage: Message = {
      id: `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
      text,
      sender,
      timestamp: new Date()
    };
    setMessages(prev => [...prev, newMessage]);
  };

  const addBotMessage = (text: string) => {
    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
      addMessage(text, 'bot');
    }, 1000);
  };

  // Handle sending message
  const handleSendMessage = async () => {
    if (!inputMessage.trim() || isSubmitting) return;

    const userMessage = inputMessage.trim();
    addMessage(userMessage, 'user');
    setInputMessage("");

    // Check for manual form request
    if (userMessage.toLowerCase().includes('manual') || userMessage.toLowerCase().includes('form') || userMessage.toLowerCase().includes('yes')) {
      addBotMessage("Opening the manual request form for you... 📝");
      setTimeout(() => {
        router.push('/user/request');
        closeChat();
      }, 1000);
      return;
    }

    // Process the message with current data context
    const updatedData = await processUserMessage(userMessage, requestData);
    setRequestData(updatedData);

    console.log('Updated data after processing:', updatedData);

    // Check if we have all required data
    const hasValidLocation = updatedData.location && 
                           updatedData.location !== "LOCATION_PENDING" && 
                           updatedData.location !== "";

    const isComplete = !!(
      updatedData.serviceType && 
      updatedData.carNumber && 
      (user?.phone || updatedData.contactNumber) &&
      hasValidLocation
    );

    console.log('Is complete check:', {
      serviceType: updatedData.serviceType,
      carNumber: updatedData.carNumber,
      contactNumber: user?.phone || updatedData.contactNumber,
      location: updatedData.location,
      hasValidLocation,
      isComplete
    });

    // Generate bot response
    const botResponse = generateBotResponse(updatedData, isComplete);
    addBotMessage(botResponse);

    // Submit if complete
    if (isComplete && !isSubmitting) {
      console.log('Attempting to submit request...');
      setTimeout(() => {
        const completeData: RequestData = {
          serviceType: updatedData.serviceType!,
          carNumber: updatedData.carNumber!,
          location: updatedData.location!,
          description: updatedData.description!,
          urgency: updatedData.urgency!,
          contactNumber: user?.phone || updatedData.contactNumber!
        };
        console.log('Complete data for submission:', completeData);
        submitRequest(completeData);
      }, 2000);
    }
  };

  // Language detection and translation functions
  const detectLanguage = (text: string): string => {
    // Simple language detection based on character patterns
    const marathiPattern = /[\u0900-\u097F]/; // Devanagari script (Marathi/Hindi)
    const hindiWords = ['है', 'में', 'का', 'की', 'के', 'से', 'पर', 'और', 'यह', 'वह', 'हम', 'तुम', 'आप', 'कर', 'हो', 'गया', 'गई', 'लिए', 'साथ', 'बात', 'समय', 'काम', 'घर', 'पानी', 'खाना'];
    const marathiWords = ['आहे', 'मध्ये', 'चा', 'ची', 'चे', 'पासून', 'वर', 'आणि', 'हा', 'तो', 'आम्ही', 'तुम्ही', 'तुम्ही', 'कर', 'होत', 'झाला', 'झाली', 'साठी', 'सोबत', 'गोष्ट', 'वेळ', 'काम', 'घर', 'पाणी', 'जेवण'];
    
    const lowerText = text.toLowerCase();
    
    // Check for Marathi words
    const marathiMatches = marathiWords.filter(word => lowerText.includes(word)).length;
    // Check for Hindi words
    const hindiMatches = hindiWords.filter(word => lowerText.includes(word)).length;
    
    if (marathiPattern.test(text)) {
      if (marathiMatches > hindiMatches) {
        return 'marathi';
      } else if (hindiMatches > 0) {
        return 'hindi';
      } else {
        return 'hindi'; // Default for Devanagari script
      }
    }
    
    return 'english';
  };

  const translateToEnglish = (text: string, fromLanguage: string): string => {
    // Simple translation mappings for common phrases
    const translations: { [key: string]: { [key: string]: string } } = {
      marathi: {
        'इंधन समस्या': 'fuel problem',
        'पेट्रोल संपला': 'petrol finished',
        'डीजल संपले': 'diesel finished',
        'इंधन संपले': 'fuel finished',
        'टायर पंचर': 'tire puncture',
        'टायर फुटला': 'tire punctured',
        'इंजिन खराब': 'engine problem',
        'गाडी बंद': 'car breakdown',
        'अपघात': 'accident',
        'मदत हवी': 'need help',
        'त्वरीत': 'urgent',
        'जवळ': 'near',
        'रस्ता': 'road',
        'हायवे': 'highway',
        'नंबर': 'number',
        'गाडी': 'car',
        'फोन': 'phone',
        'स्थान': 'location',
        'पत्ता': 'address'
      },
      hindi: {
        'इंधन समस्या': 'fuel problem',
        'पेट्रोल खत्म': 'petrol finished',
        'डीजल खत्म': 'diesel finished',
        'इंधन खत्म': 'fuel finished',
        'टायर पंचर': 'tire puncture',
        'टायर फटा': 'tire punctured',
        'इंजन खराब': 'engine problem',
        'गाड़ी खराब': 'car breakdown',
        'दुर्घटना': 'accident',
        'मदद चाहिए': 'need help',
        'जल्दी': 'urgent',
        'के पास': 'near',
        'सड़क': 'road',
        'हाईवे': 'highway',
        'नंबर': 'number',
        'गाड़ी': 'car',
        'फोन': 'phone',
        'स्थान': 'location',
        'पता': 'address'
      }
    };

    let translatedText = text;
    const langTranslations = translations[fromLanguage] || {};
    
    // Replace known phrases
    Object.entries(langTranslations).forEach(([original, translation]) => {
      const regex = new RegExp(original, 'gi');
      translatedText = translatedText.replace(regex, translation);
    });

    return translatedText;
  };

  const generateResponseInLanguage = (englishResponse: string, targetLanguage: string): string => {
    if (targetLanguage === 'english') return englishResponse;

    const responses: { [key: string]: { [key: string]: string } } = {
      marathi: {
        "I understand you need help! Could you please specify what type of assistance you need? For example: fuel shortage, flat tire, engine problem, or accident support? 🤔": 
          "मला समजले आहे की तुम्हाला मदतीची गरज आहे! कृपया सांगाल की तुम्हाला कोणत्या प्रकारची मदत हवी आहे? उदाहरण: इंधन संपले, टायर पंचर, इंजिन खराब, किंवा अपघात मदत? 🤔",
        
        "Got it! Could you please provide your car number/registration number? 🚙":
          "समजले! कृपया तुमचा गाडीचा नंबर/नोंदणी नंबर द्या? 🚙",
        
        "Almost done! Could you please provide your contact number for our service team to reach you? 📱":
          "जवळजवळ झाले! कृपया तुमचा संपर्क नंबर द्या जेणेकरून आमची सेवा टीम तुमच्याशी संपर्क साधू शकेल? 📱",
        
        "I need your location to send help.": 
          "मदत पाठवण्यासाठी मला तुमचे स्थान हवे आहे।",
        
        "Perfect! I have all the information needed": 
          "परफेक्ट! माझ्याकडे सर्व आवश्यक माहिती आहे",
        
        "Let me submit your request right away! 🚗✅": 
          "मी तुमची विनंती लगेच सबमिट करतो! 🚗✅",
        
        "Your request has been submitted successfully!": 
          "तुमची विनंती यशस्वीपणे सबमिट केली गेली आहे!",
        
        "Our team will reach your location shortly. Stay safe!": 
          "आमची टीम लवकरच तुमच्या ठिकाणी पोहोचेल. सुरक्षित रहा!"
      },
      hindi: {
        "I understand you need help! Could you please specify what type of assistance you need? For example: fuel shortage, flat tire, engine problem, or accident support? 🤔": 
          "मैं समझ गया कि आपको मदद की जरूरत है! कृपया बताएं कि आपको किस प्रकार की सहायता चाहिए? उदाहरण: इंधन समाप्त, टायर पंचर, इंजन खराब, या दुर्घटना सहायता? 🤔",
        
        "Got it! Could you please provide your car number/registration number? 🚙":
          "समझ गया! कृपया अपना गाड़ी का नंबर/रजिस्ट्रेशन नंबर दें? 🚙",
        
        "Almost done! Could you please provide your contact number for our service team to reach you? 📱":
          "लगभग हो गया! कृपया अपना संपर्क नंबर दें ताकि हमारी सेवा टीम आपसे संपर्क कर सके? 📱",
        
        "I need your location to send help.": 
          "मदद भेजने के लिए मुझे आपका स्थान चाहिए।",
        
        "Perfect! I have all the information needed": 
          "परफेक्ट! मेरे पास सभी जरूरी जानकारी है",
        
        "Let me submit your request right away! 🚗✅": 
          "मैं आपकी विनती तुरंत सबमिट करता हूं! 🚗✅",
        
        "Your request has been submitted successfully!": 
          "आपकी विनती सफलतापूर्वक सबमिट की गई है!",
        
        "Our team will reach your location shortly. Stay safe!": 
          "हमारी टीम जल्द ही आपके स्थान पर पहुंचेगी। सुरक्षित रहें!"
      }
    };

    const langResponses = responses[targetLanguage] || {};
    
    // Try to find exact match first
    if (langResponses[englishResponse]) {
      return langResponses[englishResponse];
    }
    
    // Try to find partial match
    for (const [englishKey, translatedValue] of Object.entries(langResponses)) {
      if (englishResponse.includes(englishKey) || englishKey.includes(englishResponse.substring(0, 50))) {
        return translatedValue;
      }
    }
    
    // If no translation found, return original with language indicator
    return targetLanguage === 'hindi' ? 
      `${englishResponse} (हिंदी अनुवाद जल्द आएगा)` : 
      `${englishResponse} (मराठी भाषांतर लवकरच येईल)`;
  };
  const EnhancedLocationControls = () => (
    <div className="flex gap-1">
      {/* Auto-detect location */}
      <Button
        onClick={handleLocationRequest}
        disabled={isRequestingLocation}
        className="p-2 text-white bg-blue-600 rounded-full hover:bg-blue-700"
        title="Auto-detect location"
      >
        {isRequestingLocation ? (
          <div className="w-4 h-4 border-2 border-white rounded-full border-t-transparent animate-spin"></div>
        ) : (
          <MapPin className="w-4 h-4" />
        )}
      </Button>
      
      {/* Manual location */}
      <Button
        onClick={triggerManualLocationEntry}
        className="p-2 text-white bg-green-600 rounded-full hover:bg-green-700"
        title="Enter location manually"
      >
        <span className="text-xs font-bold">📝</span>
      </Button>
      
      {/* Show current best location */}
      {bestLocation && (
        <Button
          onClick={() => {
            addBotMessage(`📊 Current Location Info:\n\n📍 ${bestLocation.address}\n🎯 Detection: ${bestLocation.method}\n📏 Accuracy: ±${Math.round(bestLocation.accuracy)}m\n\n${bestLocation.accuracy <= 100 ? '✅ High accuracy' : bestLocation.accuracy <= 500 ? '✅ Good accuracy' : '⚠️ Consider manual verification'}`);
          }}
          className="p-2 text-white bg-gray-600 rounded-full hover:bg-gray-700"
          title="Location info"
        >
          <span className="text-xs">ℹ️</span>
        </Button>
      )}
    </div>
  );

  // Enhanced chat initialization with multilingual support
  const openChat = () => {
    setIsChatOpen(true);
    if (messages.length === 0) {
      addBotMessage("🤖 Hello! I'm your AI roadside assistant.\n\nI can help in multiple languages! / मैं कई भाषाओं में मदद कर सकता हूँ! / मी अनेक भाषांमध्ये मदत करू शकतो!\n\nDescribe your problem like:\n• 'Fuel problem, car MH12AB1234'\n• 'इंधन समस्या, गाड़ी MH12AB1234'\n• 'इंधन समस्या, गाडी MH12AB1234'");
      
      // Auto-request location after initial greeting
      setTimeout(() => {
        if (locationPermission !== 'denied') {
          addBotMessage("📍 Let me find your location for faster service... / आपका स्थान खोज रहा हूँ... / तुमचे स्थान शोधत आहे...");
          handleLocationRequest();
        }
      }, 3000);
    }
  };

  const closeChat = () => {
    setIsChatOpen(false);
    setMessages([]);
    setRequestData({});
    setIsSubmitting(false);
    setBestLocation(null);
    
    // Stop location watching
    if (locationWatchId) {
      navigator.geolocation.clearWatch(locationWatchId);
      setLocationWatchId(null);
    }
  };

  if (loading) return <div>Loading...</div>;
  if (!user) return null;

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-blue-100 via-blue-50 to-blue-200">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="flex-1 p-6 pb-28">
        {/* Assistance card */}
        <div className="max-w-3xl mx-auto text-center">
          <div className="p-8 transition-all border border-gray-100 shadow-xl bg-white/95 rounded-3xl hover:shadow-2xl">
            <h2 className="text-3xl font-extrabold text-blue-900">
              Need Assistance?
            </h2>
            <p className="mt-3 text-gray-600">
              Press the button below for immediate help or use our AI assistant.
            </p>

            <div className="flex flex-col items-center justify-center gap-4 mt-6 sm:flex-row">
              <Button
                onClick={() => router.push("/user/request")}
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold transition-all transform rounded-full shadow-lg bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800"
              >
                🚨 Get Help Now
              </Button>

              <span className="text-gray-500">or</span>

              {/* AI Assistant Circle Button */}
              <div
                onClick={openChat}
                className="relative flex items-center justify-center w-16 h-16 transition-all transform rounded-full shadow-lg cursor-pointer bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 hover:scale-110 animate-pulse"
              >
                <MessageCircle className="w-8 h-8 text-white" />
                <div className="absolute flex items-center justify-center w-4 h-4 bg-red-500 rounded-full -top-1 -right-1">
                  <span className="text-xs font-bold text-white">AI</span>
                </div>
              </div>
            </div>
            <p className="mt-2 text-sm text-gray-500">
              Click the green circle for AI-powered assistance in any language
            </p>
          </div>
        </div>

        {/* Services grid */}
        <div className="max-w-4xl mx-auto mt-12">
          <h3 className="mb-6 text-2xl font-bold text-blue-900">
            Services Available
          </h3>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2">
            {[
              { icon: Fuel, label: "Fuel Shortage" },
              { icon: Car, label: "Flat Tire" },
              { icon: Wrench, label: "Engine Issue" },
              { icon: Car, label: "Accident Support" },
            ].map((service, i) => (
              <div
                key={i}
                className="flex flex-col items-center gap-4 p-8 text-center transition-transform border border-gray-200 shadow-md cursor-pointer bg-white/90 backdrop-blur-sm rounded-2xl hover:shadow-xl hover:scale-105"
                onClick={() => router.push("/user/request")}
                role="button"
                tabIndex={0}
                onKeyDown={() => {}}
              >
                <div className="p-6 text-white rounded-full shadow-lg bg-gradient-to-br from-blue-500 to-blue-700">
                  <service.icon className="w-8 h-8" />
                </div>
                <h4 className="text-base font-semibold text-blue-900">
                  {service.label}
                </h4>
              </div>
            ))}

            {/* General Assistance */}
            <div
              className="flex flex-col items-center gap-4 p-8 text-center transition-transform border border-gray-200 shadow-md cursor-pointer sm:col-span-2 bg-white/90 backdrop-blur-sm rounded-2xl hover:shadow-xl hover:scale-105"
              onClick={() => router.push("/user/request")}
            >
              <div className="p-6 text-white rounded-full shadow-lg bg-gradient-to-br from-blue-500 to-blue-700">
                <HelpCircle className="w-8 h-8" />
              </div>
              <h4 className="text-base font-semibold text-blue-900">
                General Assistance
              </h4>
            </div>
          </div>
        </div>
      </main>

      {/* AI Chatbot Modal */}
      {isChatOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg h-[600px] flex flex-col">
            {/* Chat Header */}
            <div className="flex items-center justify-between p-4 text-white border-b bg-gradient-to-r from-blue-600 to-blue-700 rounded-t-2xl">
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-white/20">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-semibold">AI Assistant</h3>
                  <p className="text-xs opacity-90">Advanced Location Detection</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                {/* Location status indicator */}
                {bestLocation && (
                  <div className="px-2 py-1 text-xs rounded-full bg-white/20">
                    📍 {bestLocation.method}
                  </div>
                )}
                <Button
                  onClick={closeChat}
                  variant="ghost"
                  size="sm"
                  className="text-white hover:bg-white/20"
                >
                  <X className="w-5 h-5" />
                </Button>
              </div>
            </div>

            {/* Chat Messages */}
            <div className="flex-1 p-4 space-y-4 overflow-y-auto">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] p-3 rounded-2xl ${
                      message.sender === 'user'
                        ? 'bg-blue-600 text-white rounded-br-md'
                        : 'bg-gray-100 text-gray-800 rounded-bl-md'
                    }`}
                  >
                    <p className="text-sm whitespace-pre-line">{message.text}</p>
                    <p className="mt-1 text-xs opacity-70">
                      {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </p>
                  </div>
                </div>
              ))}
              
              {isTyping && (
                <div className="flex justify-start">
                  <div className="p-3 text-gray-800 bg-gray-100 rounded-2xl rounded-bl-md">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Enhanced Chat Input */}
            <div className="p-4 border-t">
              {/* Location Toolbar */}
              <div className="flex gap-2 p-2 mb-2 rounded-lg bg-gray-50">
                <Button
                  onClick={handleLocationRequest}
                  disabled={isRequestingLocation}
                  size="sm"
                  className="flex-1 bg-blue-600 hover:bg-blue-700"
                >
                  {isRequestingLocation ? (
                    <>
                      <div className="w-4 h-4 mr-2 border-2 border-white rounded-full border-t-transparent animate-spin"></div>
                      Detecting...
                    </>
                  ) : (
                    <>
                      🎯 Auto-Detect
                    </>
                  )}
                </Button>
                <Button
                  onClick={triggerManualLocationEntry}
                  size="sm"
                  variant="outline"
                  className="flex-1"
                >
                  📝 Manual Entry
                </Button>
                {bestLocation && (
                  <Button
                    onClick={() => {
                      addBotMessage(`📊 Current Location Info:\n\n📍 ${bestLocation.address}\n🎯 Method: ${bestLocation.method}\n📏 Accuracy: ±${Math.round(bestLocation.accuracy)}m\n\n${bestLocation.accuracy <= 100 ? '✅ High accuracy' : bestLocation.accuracy <= 500 ? '✅ Good accuracy' : '⚠️ Consider manual verification'}`);
                    }}
                    size="sm"
                    variant="outline"
                    className="bg-green-50 hover:bg-green-100"
                  >
                    ℹ️ Info
                  </Button>
                )}
              </div>

              {/* Main Input Area */}
              <div className="flex gap-2">
                <input
                  type="text"
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && !isSubmitting && handleSendMessage()}
                  placeholder="Type your message in any language..."
                  className="flex-1 p-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                  disabled={isSubmitting}
                />
                
                <Button
                  onClick={handleSendMessage}
                  className="p-3 bg-blue-600 rounded-full hover:bg-blue-700"
                  disabled={!inputMessage.trim() || isSubmitting}
                >
                  <Send className="w-5 h-5" />
                </Button>
              </div>
              
              {/* Status Indicators */}
              <div className="flex justify-between mt-2 text-xs text-gray-500">
                <div>
                  Location: {locationPermission === 'granted' ? '✅ Allowed' : 
                            locationPermission === 'denied' ? '❌ Blocked' : 
                            locationPermission === 'prompt' ? '⏳ Prompt' : '❓ Unknown'}
                </div>
                {bestLocation && (
                  <div>
                    📍 {bestLocation.method} (±{Math.round(bestLocation.accuracy)}m)
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Bottom Navigation */}
      <BottomNav />
    </div>
  );
}