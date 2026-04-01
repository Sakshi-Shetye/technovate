// "use client";

// import { usePathname, useRouter } from "next/navigation";
// import React from "react";
// import { Playfair_Display } from "next/font/google";
// const playfair = Playfair_Display({ subsets: ["latin"], weight: ["600", "700"] });

// const mainContentClasses = "flex-1 p-4 sm:p-8 overflow-y-auto pb-24 md:pb-8";

// export default function ProviderLayout({ children }) {
//   const pathname = usePathname();
//   const router = useRouter();

//   // Determine if the current path is one of the pages that should not have a navbar
//   const shouldHideNav = pathname === "/provider" || pathname === "/provider/register";

//   const menuItems = [
//     { name: "Dashboard", href: "/provider/dashboard", icon: "dashboard" },
//     { name: "Profile", href: "/provider/profile", icon: "person" },
//     { name: "Earnings", href: "/provider/earnings", icon: "account_balance_wallet" },
//     { name: "Training", href: "/provider/training", icon: "school" },
//     { name: "Marketplace", href: "/provider/tools", icon: "shopping_bag" },
//   ];

//   return (
//     <div className="flex flex-col min-h-screen font-sans antialiased text-gray-800 bg-gray-100">
//       {/* ===== Main Content ===== */}
//       <main className={mainContentClasses}>{children}</main>

//       {/* ===== Mobile and Desktop Bottom Nav ===== */}
//       {!shouldHideNav && (
//         <div className="fixed bottom-0 left-0 right-0 z-50 bg-white shadow-lg rounded-t-xl">
//           <nav className="flex items-center justify-around h-16">
//             {menuItems.map((item) => (
//               <button
//                 key={item.href}
//                 onClick={() => router.push(item.href)}
//                 className={`flex flex-col items-center justify-center p-2 text-xs transition-colors duration-200 ${
//                   pathname === item.href ? "text-blue-600" : "text-gray-500 hover:text-blue-600"
//                 }`}
//               >
//                 <span className="text-xl material-symbols-outlined">{item.icon}</span>
//                 <span className="text-[10px] sm:text-xs font-medium">{item.name}</span>
//               </button>
//             ))}
//           </nav>
//         </div>
//       )}

//       {/* ===== Google Material Icons ===== */}
//       <link
//         rel="stylesheet"
//         href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
//       />
//     </div>
//   );
// }










//Using
// "use client";

// import { usePathname, useRouter } from "next/navigation";
// import React from "react";
// import { Playfair_Display } from "next/font/google";
// const playfair = Playfair_Display({ subsets: ["latin"], weight: ["600", "700"] });

// const mainContentClasses = "flex-1 p-4 sm:p-8 overflow-y-auto pb-24 md:pb-8";

// export default function ProviderLayout({ children }) {
//   const pathname = usePathname();
//   const router = useRouter();

//   // Hide nav on login/register
//   const shouldHideNav = pathname === "/provider" || pathname === "/provider/register" || pathname === "/provider/sign-up" || pathname === "/provider/login";


//   const menuItems = [
//     { name: "Dashboard", href: "/provider/dashboard", icon: "dashboard" },
//     { name: "Profile", href: "/provider/profile", icon: "person" },
//     { name: "Earnings", href: "/provider/earnings", icon: "account_balance_wallet" },
//     { name: "Training", href: "/provider/training", icon: "school" },
//     { name: "Marketplace", href: "/provider/tools", icon: "shopping_bag" },
//     { name: "Commission", href: "/provider/commission", icon: "payments" }, // ✅ new
//   ];

//   return (
//     <div className="flex flex-col min-h-screen font-sans antialiased text-gray-800 bg-gray-100">
//       {/* ===== Main Content ===== */}
//       <main className={mainContentClasses}>{children}</main>

//       {/* ===== Bottom Nav ===== */}
//       {!shouldHideNav && (
//         <div className="fixed bottom-0 left-0 right-0 z-50 bg-white shadow-lg rounded-t-xl">
//           <nav className="flex items-center justify-around h-16">
//             {menuItems.map((item) => (
//               <button
//                 key={item.href}
//                 onClick={() => router.push(item.href)}
//                 className={`flex flex-col items-center justify-center p-2 text-xs transition-colors duration-200 ${
//                   pathname === item.href ? "text-blue-600" : "text-gray-500 hover:text-blue-600"
//                 }`}
//               >
//                 <span className="text-xl material-symbols-outlined">{item.icon}</span>
//                 <span className="text-[10px] sm:text-xs font-medium">{item.name}</span>
//               </button>
//             ))}
//           </nav>
//         </div>
//       )}

//       {/* ===== Google Material Icons ===== */}
//       <link
//         rel="stylesheet"
//         href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
//       />
//     </div>
//   );
// }





"use client";

import { usePathname, useRouter } from "next/navigation";
import React from "react";
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({ subsets: ["latin"], weight: ["600", "700"] });

export default function ProviderLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();

  // Hide bottom nav on login/register pages
  const shouldHideNav =
    pathname === "/provider" ||
    pathname === "/provider/register" ||
    pathname === "/provider/sign-up" ||
    pathname === "/provider/login";

  const menuItems = [
    { name: "Dashboard", href: "/provider/dashboard", icon: "dashboard" },
    { name: "Profile", href: "/provider/profile", icon: "person" },
    { name: "Earnings", href: "/provider/earnings", icon: "account_balance_wallet" },
    { name: "Training", href: "/provider/training", icon: "school" },
    { name: "Marketplace", href: "/provider/tools", icon: "shopping_bag" },
    { name: "Commission", href: "/provider/commission", icon: "payments" }, // ✅ new
  ];

  return (
    <div className={`flex flex-col min-h-screen font-sans antialiased text-gray-800 bg-gray-100 ${playfair.className}`}>
      {/* ===== Main Content ===== */}
      <main className="flex-1 overflow-y-auto">{children}</main>

      {/* ===== Bottom Nav ===== */}
      {!shouldHideNav && (
        <div className="fixed bottom-0 left-0 right-0 z-50 bg-white shadow-lg rounded-t-xl">
          <nav className="flex items-center justify-around h-16">
            {menuItems.map((item) => (
              <button
                key={item.href}
                onClick={() => router.push(item.href)}
                className={`flex flex-col items-center justify-center p-2 text-xs transition-colors duration-200 ${
                  pathname === item.href ? "text-blue-600" : "text-gray-500 hover:text-blue-600"
                }`}
              >
                <span className="text-xl material-symbols-outlined">{item.icon}</span>
                <span className="text-[10px] sm:text-xs font-medium">{item.name}</span>
              </button>
            ))}
          </nav>
        </div>
      )}

      {/* ===== Google Material Icons ===== */}
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
      />
    </div>
  );
}





// "use client";

// import { usePathname, useRouter } from "next/navigation";
// import React from "react";
// import { Playfair_Display } from "next/font/google";

// // Import Playfair Display font
// const playfair = Playfair_Display({
//   subsets: ["latin"],
//   weight: ["600", "700"],
// });

// const mainContentClasses =
//   "flex-1 p-4 sm:p-8 overflow-y-auto pb-24 md:pb-8";

// export default function ProviderLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   const pathname = usePathname();
//   const router = useRouter();

//   // Pages without bottom nav
//   const shouldHideNav =
//     pathname === "/provider" || pathname === "/provider/register";

//   const menuItems = [
//     { name: "Dashboard", href: "/provider/dashboard", icon: "dashboard" },
//     { name: "Profile", href: "/provider/profile", icon: "person" },
//     { name: "Earnings", href: "/provider/earnings", icon: "account_balance_wallet" },
//     { name: "Training", href: "/provider/training", icon: "school" },
//     { name: "Marketplace", href: "/provider/tools", icon: "shopping_bag" },
//   ];

//   return (
//     <div
//       className={`flex flex-col min-h-screen antialiased text-gray-800 bg-gray-100 ${playfair.className}`}
//     >
//       {/* ===== Main Content ===== */}
//       <main className={mainContentClasses}>{children}</main>

//       {/* ===== Mobile and Desktop Bottom Nav ===== */}
//       {!shouldHideNav && (
//         <div className="fixed bottom-0 left-0 right-0 z-50 bg-white shadow-lg rounded-t-xl">
//           <nav className="flex items-center justify-around h-16">
//             {menuItems.map((item) => (
//               <button
//                 key={item.href}
//                 onClick={() => router.push(item.href)}
//                 className={`flex flex-col items-center justify-center p-2 text-xs transition-colors duration-200 ${
//                   pathname === item.href
//                     ? "text-blue-600"
//                     : "text-gray-500 hover:text-blue-600"
//                 }`}
//               >
//                 <span className="text-xl material-symbols-outlined">
//                   {item.icon}
//                 </span>
//                 <span className="text-[10px] sm:text-xs font-medium">
//                   {item.name}
//                 </span>
//               </button>
//             ))}
//           </nav>
//         </div>
//       )}

//       {/* ===== Google Material Icons ===== */}
//       <link
//         rel="stylesheet"
//         href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
//       />
//     </div>
//   );
// }





// "use client";

// import { usePathname, useRouter } from "next/navigation";
// import React from "react";
// import Header from "@/components/Header";
// import { Playfair_Display } from "next/font/google";

// // Import Playfair Display font
// const playfair = Playfair_Display({
//   subsets: ["latin"],
//   weight: ["600", "700"],
// });

// const mainContentClasses =
//   "flex-1 p-4 sm:p-8 overflow-y-auto pb-24 md:pb-8";

// export default function ProviderLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   const pathname = usePathname();
//   const router = useRouter();

//   // Pages without bottom nav
//   const shouldHideNav =
//     pathname === "/provider" || pathname === "/provider/register";

//   const menuItems = [
//     { name: "Dashboard", href: "/provider/dashboard", icon: "dashboard" },
//     { name: "Profile", href: "/provider/profile", icon: "person" },
//     { name: "Earnings", href: "/provider/earnings", icon: "account_balance_wallet" },
//     { name: "Training", href: "/provider/training", icon: "school" },
//     { name: "Marketplace", href: "/provider/tools", icon: "shopping_bag" },
//   ];

//   return (
//     <div
//       className={`flex flex-col min-h-screen antialiased text-gray-800 bg-sky-100 ${playfair.className}`}
//     >
//       {/* ===== Header ===== */}
//       <Header />

//       {/* ===== Main Content ===== */}
//       <main className={`${mainContentClasses} flex flex-col items-center`}>
//         {/* Center content wrapper */}
//         <div className="flex flex-col items-center w-full max-w-5xl space-y-6">
//           {children}
//         </div>
//       </main>

//       {/* ===== Mobile and Desktop Bottom Nav ===== */}
//       {!shouldHideNav && (
//         <div className="fixed bottom-0 left-0 right-0 z-50 bg-white shadow-lg rounded-t-xl">
//           <nav className="flex items-center justify-around h-16">
//             {menuItems.map((item) => (
//               <button
//                 key={item.href}
//                 onClick={() => router.push(item.href)}
//                 className={`flex flex-col items-center justify-center p-2 text-xs transition-colors duration-200 ${
//                   pathname === item.href
//                     ? "text-blue-600"
//                     : "text-gray-500 hover:text-blue-600"
//                 }`}
//               >
//                 <span className="text-xl material-symbols-outlined">{item.icon}</span>
//                 <span className="text-[10px] sm:text-xs font-medium">{item.name}</span>
//               </button>
//             ))}
//           </nav>
//         </div>
//       )}

//       {/* ===== Google Material Icons ===== */}
//       <link
//         rel="stylesheet"
//         href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
//       />
//     </div>
//   );
// }
