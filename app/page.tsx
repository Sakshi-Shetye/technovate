// "use client";
// import React from "react";

// export default function Home() {
//   return (
//     <div className="relative flex min-h-screen flex-col bg-[var(--background-color)] text-[var(--text-dark)]">
    
//       <header className="sticky top-0 z-50 flex items-center justify-between border-b border-[#e7edf4] bg-white/80 px-4 py-3 shadow-sm backdrop-blur-md sm:px-6 lg:px-10">
//         <div className="flex items-center gap-3">
//           <svg className="h-8 w-8 text-[var(--primary-color)]" fill="none" viewBox="0 0 48 48">
//             <path d="M6 6H42L36 24L42 42H6L12 24L6 6Z" fill="currentColor" />
//           </svg>
//           <h2 className="text-xl font-bold">MySANmarg</h2>
//         </div>
//         <nav className="items-center hidden gap-6 md:flex">
//           <a href="#how-it-works" className="text-sm font-medium text-[var(--text-light)] hover:text-[var(--primary-color)]">How it works</a>
//           <a href="#benefits" className="text-sm font-medium text-[var(--text-light)] hover:text-[var(--primary-color)]">Benefits</a>
//           <a href="#technology" className="text-sm font-medium text-[var(--text-light)] hover:text-[var(--primary-color)]">Technology</a>
//           <a href="#contact" className="text-sm font-medium text-[var(--text-light)] hover:text-[var(--primary-color)]">Contact</a>
//         </nav>
//         <div className="flex items-center gap-2">
          
//           <button className="h-10 px-4 font-bold rounded-md secondary-button">Login</button>
//           <button className="h-10 px-4 font-bold rounded-md primary-button">Sign Up</button>
//         </div>
//       </header>

//       <main className="flex-1">
//         {/* Hero Section */}
//         <section className="relative">
//           <div className="absolute inset-0 bg-black/50"></div>
//           <div className="relative px-4 py-24 mx-auto max-w-7xl sm:px-6 lg:px-8 lg:py-32">
//             <div
//               className="flex min-h-[480px] flex-col items-center justify-center gap-8 rounded-xl bg-cover bg-center bg-no-repeat p-8 text-center text-white"
//               style={{
//                 backgroundImage:
//                   'linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.5)), url("https://lh3.googleusercontent.com/aida-public/AB6AXuAiZKH9aGtdlb01PEppKASpUiFVgx8VC7nMQddulBJimwkWVqC18BcCqCy5WFKTTA59SUDrLADKdGO0RW18hhglbEd0U_J2_jgiUQELJtG2ypbOw1-nysEDxwkTV233xrwzeU5Y5m_5C8HBw6JR4HRSN3dQ9Grrhuj3wAXP7lCCwrVubzp6VflMMYpcxA6nh1VDuUbZG_M4JZXzuCtJEsNLzvlH_zV6G3jvMO1q6dVqcZOPb-HRzDyt1xYhjrV_9LPLcmWsNbHL13M")',
//               }}
//             >
//               <h1 className="text-4xl font-black md:text-6xl">
//                 Smart Vehicle Rescue + Rural Job Platform
//               </h1>
//               <p className="max-w-3xl text-lg font-light">
//                 Connecting users in distress with local service providers in both rural and urban areas of India. Seamless, reliable, and empowering.
//               </p>
//               <div className="flex flex-wrap justify-center gap-4 mt-4">
//                 <button className="h-12 px-6 font-bold rounded-md primary-button">Get Started</button>
//                 <button className="h-12 px-6 font-bold text-white rounded-md bg-white/20 backdrop-blur-sm hover:bg-white/30">
//                   Learn More
//                 </button>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* How It Works */}
//         <section id="how-it-works" className="py-16 sm:py-24">
//           <div className="px-4 mx-auto text-center max-w-7xl sm:px-6 lg:px-8">
//             <h2 className="text-3xl font-bold sm:text-4xl">How It Works</h2>
//             <p className="mt-4 max-w-2xl mx-auto text-lg text-[var(--text-light)]">
//               A simple three-step process to get you the help you need, fast.
//             </p>
//             <div className="grid grid-cols-1 gap-8 mt-12 md:grid-cols-3 md:gap-12">
//               {[
//                 { title: "Locate", text: "Share your location to find nearby service providers instantly." },
//                 { title: "Connect", text: "Choose a provider and connect with them directly through the app." },
//                 { title: "Resolve", text: "Get your issue resolved quickly and pay securely through the platform." },
//               ].map((item, i) => (
//                 <div key={i} className="flex flex-col items-center gap-4 p-8 text-center transition-transform bg-white shadow-lg rounded-xl hover:-translate-y-1">
//                   <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[var(--secondary-color)] text-[var(--primary-color)]">
//                     <span className="text-xl font-bold">{i + 1}</span>
//                   </div>
//                   <h3 className="text-xl font-bold">{item.title}</h3>
//                   <p className="text-[var(--text-light)]">{item.text}</p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* Contact */}
//         <section id="contact" className="py-16 bg-white sm:py-24">
//           <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
//             <div className="rounded-2xl bg-[var(--primary-color)] p-8 text-center text-white md:p-16">
//               <h2 className="text-3xl font-extrabold sm:text-4xl">Ready to Connect?</h2>
//               <p className="max-w-xl mx-auto mt-4 text-lg font-light">
//                 Join MySANmarg today and experience seamless vehicle rescue and job opportunities.
//               </p>
//               <div className="flex justify-center mt-8">
//                 <button className="bg-white text-[var(--primary-color)] h-12 px-8 rounded-md font-bold">
//                   Get Started Now
//                 </button>
//               </div>
//             </div>
//           </div>
//         </section>
//       </main>

//       {/* Footer */}
//       <footer className="bg-[var(--secondary-color)]">
//         <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 text-center text-sm text-[var(--text-light)]">
//           © 2024 MySANmarg. All rights reserved.
//         </div>
//       </footer>
//     </div>
//   );
// }



// "use client";
// import React from "react";
// import { useRouter } from "next/navigation";

// export default function Home() {
//   const router = useRouter();

//   return (
//     <div className="relative flex min-h-screen flex-col bg-[var(--background-color)] text-[var(--text-dark)]">
//       <header className="sticky top-0 z-50 flex items-center justify-between border-b border-[#e7edf4] bg-white/80 px-4 py-3 shadow-sm backdrop-blur-md sm:px-6 lg:px-10">
//         <div className="flex items-center gap-3">
//           <svg className="h-8 w-8 text-[var(--primary-color)]" fill="none" viewBox="0 0 48 48">
//             <path d="M6 6H42L36 24L42 42H6L12 24L6 6Z" fill="currentColor" />
//           </svg>
//           <h2 className="text-xl font-bold">MySANmarg</h2>
//         </div>
//         <nav className="items-center hidden gap-6 md:flex">
//           <a href="#how-it-works" className="text-sm font-medium text-[var(--text-light)] hover:text-[var(--primary-color)]">How it works</a>
//           <a href="#benefits" className="text-sm font-medium text-[var(--text-light)] hover:text-[var(--primary-color)]">Benefits</a>
//           <a href="#technology" className="text-sm font-medium text-[var(--text-light)] hover:text-[var(--primary-color)]">Technology</a>
//           <a href="#contact" className="text-sm font-medium text-[var(--text-light)] hover:text-[var(--primary-color)]">Contact</a>
//         </nav>
//         <div className="flex items-center gap-2">
//           <button
//             onClick={() => router.push("/login")}
//             className="h-10 px-4 font-bold rounded-md secondary-button"
//           >
//             Login
//           </button>
//           <button
//             onClick={() => router.push("/sign-up")}
//             className="h-10 px-4 font-bold rounded-md primary-button"
//           >
//             Sign Up
//           </button>
//         </div>
//       </header>

//       <main className="flex-1">
//         {/* Hero Section */}
//         <section className="relative">
//           <div className="absolute inset-0 bg-black/50"></div>
//           <div className="relative px-4 py-24 mx-auto max-w-7xl sm:px-6 lg:px-8 lg:py-32">
//             <div
//               className="flex min-h-[480px] flex-col items-center justify-center gap-8 rounded-xl bg-cover bg-center bg-no-repeat p-8 text-center text-white"
//               style={{
//                 backgroundImage:
//                   'linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.5)), url("https://lh3.googleusercontent.com/aida-public/AB6AXuAiZKH9aGtdlb01PEppKASpUiFVgx8VC7nMQddulBJimwkWVqC18BcCqCy5WFKTTA59SUDrLADKdGO0RW18hhglbEd0U_J2_jgiUQELJtG2ypbOw1-nysEDxwkTV233xrwzeU5Y5m_5C8HBw6JR4HRSN3dQ9Grrhuj3wAXP7lCCwrVubzp6VflMMYpcxA6nh1VDuUbZG_M4JZXzuCtJEsNLzvlH_zV6G3jvMO1q6dVqcZOPb-HRzDyt1xYhjrV_9LPLcmWsNbHL13M")',
//               }}
//             >
//               <h1 className="text-4xl font-black md:text-6xl">
//                 Smart Vehicle Rescue + Rural Job Platform
//               </h1>
//               <p className="max-w-3xl text-lg font-light">
//                 Connecting users in distress with local service providers in both rural and urban areas of India. Seamless, reliable, and empowering.
//               </p>
//               <div className="flex flex-wrap justify-center gap-4 mt-4">
//                 <button
//                   onClick={() => router.push("/sign-up")}
//                   className="h-12 px-6 font-bold rounded-md primary-button"
//                 >
//                   Get Started
//                 </button>
//                 <button className="h-12 px-6 font-bold text-white rounded-md bg-white/20 backdrop-blur-sm hover:bg-white/30">
//                   Learn More
//                 </button>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* How It Works Section */}
//         <section id="how-it-works" className="py-16 sm:py-24">
//           <div className="px-4 mx-auto text-center max-w-7xl sm:px-6 lg:px-8">
//             <h2 className="text-3xl font-bold sm:text-4xl">How It Works</h2>
//             <p className="mt-4 max-w-2xl mx-auto text-lg text-[var(--text-light)]">
//               A simple three-step process to get you the help you need, fast.
//             </p>
//             <div className="grid grid-cols-1 gap-8 mt-12 md:grid-cols-3 md:gap-12">
//               {[
//                 { title: "Locate", text: "Share your location to find nearby service providers instantly." },
//                 { title: "Connect", text: "Choose a provider and connect with them directly through the app." },
//                 { title: "Resolve", text: "Get your issue resolved quickly and pay securely through the platform." },
//               ].map((item, i) => (
//                 <div key={i} className="flex flex-col items-center gap-4 p-8 text-center transition-transform bg-white shadow-lg rounded-xl hover:-translate-y-1">
//                   <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[var(--secondary-color)] text-[var(--primary-color)]">
//                     <span className="text-xl font-bold">{i + 1}</span>
//                   </div>
//                   <h3 className="text-xl font-bold">{item.title}</h3>
//                   <p className="text-[var(--text-light)]">{item.text}</p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* Contact Section */}
//         <section id="contact" className="py-16 bg-white sm:py-24">
//           <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
//             <div className="rounded-2xl bg-[var(--primary-color)] p-8 text-center text-white md:p-16">
//               <h2 className="text-3xl font-extrabold sm:text-4xl">Ready to Connect?</h2>
//               <p className="max-w-xl mx-auto mt-4 text-lg font-light">
//                 Join MySANmarg today and experience seamless vehicle rescue and job opportunities.
//               </p>
//               <div className="flex justify-center mt-8">
//                 <button
//                   onClick={() => router.push("/sign-up")}
//                   className="bg-white text-[var(--primary-color)] h-12 px-8 rounded-md font-bold"
//                 >
//                   Get Started Now
//                 </button>
//               </div>
//             </div>
//           </div>
//         </section>
//       </main>

//       <footer className="bg-[var(--secondary-color)]">
//         <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 text-center text-sm text-[var(--text-light)]">
//           © 2024 MySANmarg. All rights reserved.
//         </div>
//       </footer>
//     </div>
//   );
// }



// "use client";
// import React from "react";
// import { useRouter } from "next/navigation";

// export default function Home() {
//   const router = useRouter();

//   return (
//     <div className="relative flex min-h-screen flex-col bg-[var(--background-color)] text-[var(--text-dark)]">
//       <header className="sticky top-0 z-50 flex items-center justify-between border-b border-[#e7edf4] bg-white/80 px-4 py-3 shadow-sm backdrop-blur-md sm:px-6 lg:px-10">
//         <div className="flex items-center gap-3">
//           {/* ✅ Replaced SVG with your logo */}
//           <img
//             src="/logo3.png"
//             alt="MySANmarg Logo"
//             className="object-contain w-8 h-8"
//           />
//           <h2 className="text-xl font-bold">MySANmarg</h2>
          
//         </div>
//         <nav className="items-center hidden gap-6 md:flex">
//           <a
//             href="#how-it-works"
//             className="text-sm font-medium text-[var(--text-light)] hover:text-[var(--primary-color)]"
//           >
//             How it works
//           </a>
//           <a
//             href="#benefits"
//             className="text-sm font-medium text-[var(--text-light)] hover:text-[var(--primary-color)]"
//           >
//             Benefits
//           </a>
//           <a
//             href="#technology"
//             className="text-sm font-medium text-[var(--text-light)] hover:text-[var(--primary-color)]"
//           >
//             Technology
//           </a>
//           <a
//             href="#contact"
//             className="text-sm font-medium text-[var(--text-light)] hover:text-[var(--primary-color)]"
//           >
//             Contact
//           </a>
//         </nav>
//         <div className="flex items-center gap-2">
//           <button
//             onClick={() => router.push("/login")}
//             className="h-10 px-4 font-bold rounded-md secondary-button"
//           >
//             Login
//           </button>
//           <button
//             onClick={() => router.push("/sign-up")}
//             className="h-10 px-4 font-bold rounded-md primary-button"
//           >
//             Sign Up
//           </button>
//         </div>
//       </header>

//       <main className="flex-1">
//         {/* Hero Section */}
//         <section className="relative">
//           <div className="absolute inset-0 bg-black/50"></div>
//           <div className="relative px-4 py-24 mx-auto max-w-7xl sm:px-6 lg:px-8 lg:py-32">
//             <div
//               className="flex min-h-[480px] flex-col items-center justify-center gap-8 rounded-xl bg-cover bg-center bg-no-repeat p-8 text-center text-white"
//               style={{
//                 backgroundImage:
//                   'linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.5)), url("https://lh3.googleusercontent.com/aida-public/AB6AXuAiZKH9aGtdlb01PEppKASpUiFVgx8VC7nMQddulBJimwkWVqC18BcCqCy5WFKTTA59SUDrLADKdGO0RW18hhglbEd0U_J2_jgiUQELJtG2ypbOw1-nysEDxwkTV233xrwzeU5Y5m_5C8HBw6JR4HRSN3dQ9Grrhuj3wAXP7lCCwrVubzp6VflMMYpcxA6nh1VDuUbZG_M4JZXzuCtJEsNLzvlH_zV6G3jvMO1q6dVqcZOPb-HRzDyt1xYhjrV_9LPLcmWsNbHL13M")',
//               }}
//             >
//               <h1 className="text-4xl font-black md:text-6xl">
//                 Smart Vehicle Rescue + Rural Job Platform
//               </h1>
//               <p className="max-w-3xl text-lg font-light">
//                 Connecting users in distress with local service providers in
//                 both rural and urban areas of India. Seamless, reliable, and
//                 empowering.
//               </p>
//               <div className="flex flex-wrap justify-center gap-4 mt-4">
//                 <button
//                   onClick={() => router.push("/sign-up")}
//                   className="h-12 px-6 font-bold rounded-md primary-button"
//                 >
//                   Get Started
//                 </button>
//                 <button className="h-12 px-6 font-bold text-white rounded-md bg-white/20 backdrop-blur-sm hover:bg-white/30">
//                   Learn More
//                 </button>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* How It Works Section */}
//         <section id="how-it-works" className="py-16 sm:py-24">
//           <div className="px-4 mx-auto text-center max-w-7xl sm:px-6 lg:px-8">
//             <h2 className="text-3xl font-bold sm:text-4xl">How It Works</h2>
//             <p className="mt-4 max-w-2xl mx-auto text-lg text-[var(--text-light)]">
//               A simple three-step process to get you the help you need, fast.
//             </p>
//             <div className="grid grid-cols-1 gap-8 mt-12 md:grid-cols-3 md:gap-12">
//               {[
//                 {
//                   title: "Locate",
//                   text: "Share your location to find nearby service providers instantly.",
//                 },
//                 {
//                   title: "Connect",
//                   text: "Choose a provider and connect with them directly through the app.",
//                 },
//                 {
//                   title: "Resolve",
//                   text: "Get your issue resolved quickly and pay securely through the platform.",
//                 },
//               ].map((item, i) => (
//                 <div
//                   key={i}
//                   className="flex flex-col items-center gap-4 p-8 text-center transition-transform bg-white shadow-lg rounded-xl hover:-translate-y-1"
//                 >
//                   <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[var(--secondary-color)] text-[var(--primary-color)]">
//                     <span className="text-xl font-bold">{i + 1}</span>
//                   </div>
//                   <h3 className="text-xl font-bold">{item.title}</h3>
//                   <p className="text-[var(--text-light)]">{item.text}</p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* Contact Section */}
//         <section id="contact" className="py-16 bg-white sm:py-24">
//           <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
//             <div className="rounded-2xl bg-[var(--primary-color)] p-8 text-center text-white md:p-16">
//               <h2 className="text-3xl font-extrabold sm:text-4xl">
//                 Ready to Connect?
//               </h2>
//               <p className="max-w-xl mx-auto mt-4 text-lg font-light">
//                 Join MySANmarg today and experience seamless vehicle rescue and
//                 job opportunities.
//               </p>
//               <div className="flex justify-center mt-8">
//                 <button
//                   onClick={() => router.push("/sign-up")}
//                   className="bg-white text-[var(--primary-color)] h-12 px-8 rounded-md font-bold"
//                 >
//                   Get Started Now
//                 </button>
//               </div>
//             </div>
//           </div>
//         </section>
//       </main>

//       <footer className="bg-[var(--secondary-color)]">
//         <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 text-center text-sm text-[var(--text-light)]">
//           © 2024 MySANmarg. All rights reserved.
//         </div>
//       </footer>
//     </div>
//   );
// }




// "use client";
// import React from "react";
// import { useRouter } from "next/navigation";

// export default function Home() {
//   const router = useRouter();

//   return (
//     <div className="relative flex min-h-screen flex-col bg-[var(--background-color)] text-[var(--text-dark)]">
//       <header className="sticky top-0 z-50 flex items-center justify-between border-b border-[#e7edf4] bg-white/80 px-4 py-3 shadow-sm backdrop-blur-md sm:px-6 lg:px-10">
//         <div className="flex items-center gap-3">
//           {/* ✅ Clear logo */}
//           <img
//             src="/logo3.png"
//             alt="MySANmarg Logo"
//             className="object-contain w-10 h-10"
//           />

//           {/* ✅ Gradient-styled title + tagline */}
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
//               className="text-[11px] md:text-xs font-medium text-black"
//               style={{ fontFamily: "'Inter', sans-serif" }}
//             >
//               Smart Assistance Network — Helping Rural India, On Time.
//             </p>
//           </div>
//         </div>

//         <nav className="items-center hidden gap-6 md:flex">
//           <a
//             href="#how-it-works"
//             className="text-sm font-medium text-[var(--text-light)] hover:text-[var(--primary-color)]"
//           >
//             How it works
//           </a>
//           <a
//             href="#benefits"
//             className="text-sm font-medium text-[var(--text-light)] hover:text-[var(--primary-color)]"
//           >
//             Benefits
//           </a>
//           <a
//             href="#technology"
//             className="text-sm font-medium text-[var(--text-light)] hover:text-[var(--primary-color)]"
//           >
//             Technology
//           </a>
//           <a
//             href="#contact"
//             className="text-sm font-medium text-[var(--text-light)] hover:text-[var(--primary-color)]"
//           >
//             Contact
//           </a>
//         </nav>

//         <div className="flex items-center gap-2">
//           <button
//             onClick={() => router.push("/login")}
//             className="h-10 px-4 font-bold rounded-md secondary-button"
//           >
//             Login
//           </button>
//           <button
//             onClick={() => router.push("/sign-up")}
//             className="h-10 px-4 font-bold rounded-md primary-button"
//           >
//             Sign Up
//           </button>
//         </div>
//       </header>

//       <main className="flex-1">
//         {/* Hero Section */}
//         <section className="relative">
//           <div className="absolute inset-0 bg-black/50"></div>
//           <div className="relative px-4 py-24 mx-auto max-w-7xl sm:px-6 lg:px-8 lg:py-32">
//             <div
//               className="flex min-h-[480px] flex-col items-center justify-center gap-8 rounded-xl bg-cover bg-center bg-no-repeat p-8 text-center text-white"
//               style={{
//                 backgroundImage:
//                   'linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.5)), url("https://lh3.googleusercontent.com/aida-public/AB6AXuAiZKH9aGtdlb01PEppKASpUiFVgx8VC7nMQddulBJimwkWVqC18BcCqCy5WFKTTA59SUDrLADKdGO0RW18hhglbEd0U_J2_jgiUQELJtG2ypbOw1-nysEDxwkTV233xrwzeU5Y5m_5C8HBw6JR4HRSN3dQ9Grrhuj3wAXP7lCCwrVubzp6VflMMYpcxA6nh1VDuUbZG_M4JZXzuCtJEsNLzvlH_zV6G3jvMO1q6dVqcZOPb-HRzDyt1xYhjrV_9LPLcmWsNbHL13M")',
//               }}
//             >
//               <h1 className="text-4xl font-black md:text-6xl">
//                 Smart Vehicle Rescue + Rural Job Platform
//               </h1>
//               <p className="max-w-3xl text-lg font-light">
//                 Connecting users in distress with local service providers in
//                 both rural and urban areas of India. Seamless, reliable, and
//                 empowering.
//               </p>
//               <div className="flex flex-wrap justify-center gap-4 mt-4">
//                 <button
//                   onClick={() => router.push("/sign-up")}
//                   className="h-12 px-6 font-bold rounded-md primary-button"
//                 >
//                   Get Started
//                 </button>
//                 <button className="h-12 px-6 font-bold text-white rounded-md bg-white/20 backdrop-blur-sm hover:bg-white/30">
//                   Learn More
//                 </button>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* How It Works Section */}
//         <section id="how-it-works" className="py-16 sm:py-24">
//           <div className="px-4 mx-auto text-center max-w-7xl sm:px-6 lg:px-8">
//             <h2 className="text-3xl font-bold sm:text-4xl">How It Works</h2>
//             <p className="mt-4 max-w-2xl mx-auto text-lg text-[var(--text-light)]">
//               A simple three-step process to get you the help you need, fast.
//             </p>
//             <div className="grid grid-cols-1 gap-8 mt-12 md:grid-cols-3 md:gap-12">
//               {[
//                 {
//                   title: "Locate",
//                   text: "Share your location to find nearby service providers instantly.",
//                 },
//                 {
//                   title: "Connect",
//                   text: "Choose a provider and connect with them directly through the app.",
//                 },
//                 {
//                   title: "Resolve",
//                   text: "Get your issue resolved quickly and pay securely through the platform.",
//                 },
//               ].map((item, i) => (
//                 <div
//                   key={i}
//                   className="flex flex-col items-center gap-4 p-8 text-center transition-transform bg-white shadow-lg rounded-xl hover:-translate-y-1"
//                 >
//                   <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[var(--secondary-color)] text-[var(--primary-color)]">
//                     <span className="text-xl font-bold">{i + 1}</span>
//                   </div>
//                   <h3 className="text-xl font-bold">{item.title}</h3>
//                   <p className="text-[var(--text-light)]">{item.text}</p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* Contact Section */}
//         <section id="contact" className="py-16 bg-white sm:py-24">
//           <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
//             <div className="rounded-2xl bg-[var(--primary-color)] p-8 text-center text-white md:p-16">
//               <h2 className="text-3xl font-extrabold sm:text-4xl">
//                 Ready to Connect?
//               </h2>
//               <p className="max-w-xl mx-auto mt-4 text-lg font-light">
//                 Join MySANmarg today and experience seamless vehicle rescue and
//                 job opportunities.
//               </p>
//               <div className="flex justify-center mt-8">
//                 <button
//                   onClick={() => router.push("/sign-up")}
//                   className="bg-white text-[var(--primary-color)] h-12 px-8 rounded-md font-bold"
//                 >
//                   Get Started Now
//                 </button>
//               </div>
//             </div>
//           </div>
//         </section>
//       </main>

//       <footer className="bg-[var(--secondary-color)]">
//         <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 text-center text-sm text-[var(--text-light)]">
//           © 2024 MySANmarg. All rights reserved.
//         </div>
//       </footer>
//     </div>
//   );
// }




// "use client";
// import React from "react";
// import { useRouter } from "next/navigation";
// import { Lightbulb, MapPin, Users, ShieldCheck, Cpu, Zap } from "lucide-react"; // ✅ Icons

// export default function Home() {
//   const router = useRouter();

//   // ✅ Reusable Card component with blue gradient + hover
//   const InfoCard = ({ icon: Icon, title, text }: { icon: any; title: string; text: string }) => (
//     <div className="flex flex-col items-center gap-4 p-8 text-center transition-transform duration-300 border border-blue-200 shadow-lg bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl hover:scale-105 hover:shadow-2xl">
//       <div className="flex items-center justify-center w-16 h-16 text-white rounded-full shadow-md bg-gradient-to-r from-blue-500 to-blue-700">
//         <Icon size={28} />
//       </div>
//       <h3 className="text-xl font-bold text-blue-900">{title}</h3>
//       <p className="text-blue-700">{text}</p>
//     </div>
//   );

//   return (
//     <div className="relative flex min-h-screen flex-col bg-[var(--background-color)] text-[var(--text-dark)]">
//       {/* Header */}
//       <header className="sticky top-0 z-50 flex items-center justify-between border-b border-[#e7edf4] bg-white/80 px-4 py-3 shadow-sm backdrop-blur-md sm:px-6 lg:px-10">
//         <div className="flex items-center gap-3">
//           <img src="/logo3.png" alt="MySANmarg Logo" className="object-contain w-10 h-10" />
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
//             <p className="text-[11px] md:text-xs font-medium text-black" style={{ fontFamily: "'Inter', sans-serif" }}>
//               Smart Assistance Network — Helping Rural India, On Time.
//             </p>
//           </div>
//         </div>

//         <nav className="items-center hidden gap-6 md:flex">
//           <a href="#how-it-works" className="text-sm font-medium text-[var(--text-light)] hover:text-[var(--primary-color)]">
//             How it works
//           </a>
//           <a href="#benefits" className="text-sm font-medium text-[var(--text-light)] hover:text-[var(--primary-color)]">
//             Benefits
//           </a>
//           <a href="#technology" className="text-sm font-medium text-[var(--text-light)] hover:text-[var(--primary-color)]">
//             Technology
//           </a>
//         </nav>

//         <div className="flex items-center gap-2">
//           <button onClick={() => router.push("/login")} className="h-10 px-4 font-bold rounded-md secondary-button">
//             Login
//           </button>
//           <button onClick={() => router.push("/sign-up")} className="h-10 px-4 font-bold rounded-md primary-button">
//             Sign Up
//           </button>
//         </div>
//       </header>

//       <main className="flex-1">
//         {/* Hero Section */}
//         <section className="relative">
//           <div className="absolute inset-0 bg-black/50"></div>
//           <div className="relative px-4 py-24 mx-auto max-w-7xl sm:px-6 lg:px-8 lg:py-32">
//             <div
//               className="flex min-h-[480px] flex-col items-center justify-center gap-8 rounded-xl bg-cover bg-center bg-no-repeat p-8 text-center text-white"
//               style={{
//                 backgroundImage:
//                   'linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.5)), url("https://lh3.googleusercontent.com/aida-public/AB6AXuAiZKH9aGtdlb01PEppKASpUiFVgx8VC7nMQddulBJimwkWVqC18BcCqCy5WFKTTA59SUDrLADKdGO0RW18hhglbEd0U_J2_jgiUQELJtG2ypbOw1-nysEDxwkTV233xrwzeU5Y5m_5C8HBw6JR4HRSN3dQ9Grrhuj3wAXP7lCCwrVubzp6VflMMYpcxA6nh1VDuUbZG_M4JZXzuCtJEsNLzvlH_zV6G3jvMO1q6dVqcZOPb-HRzDyt1xYhjrV_9LPLcmWsNbHL13M")',
//               }}
//             >
//               <h1 className="text-4xl font-black md:text-6xl">Smart Vehicle Rescue + Rural Job Platform</h1>
//               <p className="max-w-3xl text-lg font-light">
//                 Connecting users in distress with local service providers in both rural and urban areas of India.
//                 Seamless, reliable, and empowering.
//               </p>
//               <div className="flex flex-wrap justify-center gap-4 mt-4">
//                 <button
//                   onClick={() => router.push("/sign-up")}
//                   className="h-12 px-6 font-bold rounded-md primary-button"
//                 >
//                   Get Started
//                 </button>
//                 <button
//                   onClick={() => router.push("/learnmore")} // ✅ Navigates to app/learnmore/page.tsx
//                   className="h-12 px-6 font-bold text-white rounded-md bg-white/20 backdrop-blur-sm hover:bg-white/30"
//                 >
//                   Learn More
//                 </button>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* How It Works */}
//         <section id="how-it-works" className="py-16 sm:py-24">
//           <div className="px-4 mx-auto text-center max-w-7xl sm:px-6 lg:px-8">
//             <h2 className="text-3xl font-bold sm:text-4xl">How It Works</h2>
//             <p className="mt-4 max-w-2xl mx-auto text-lg text-[var(--text-light)]">
//               A simple three-step process to get you the help you need, fast.
//             </p>
//             <div className="grid grid-cols-1 gap-8 mt-12 md:grid-cols-3 md:gap-12">
//               <InfoCard icon={MapPin} title="Locate" text="Share your location to find nearby service providers instantly." />
//               <InfoCard icon={Users} title="Connect" text="Choose a provider and connect with them directly through the app." />
//               <InfoCard icon={ShieldCheck} title="Resolve" text="Get your issue resolved quickly and pay securely through the platform." />
//             </div>
//           </div>
//         </section>

//         {/* Benefits */}
//         <section id="benefits" className="py-16 bg-gray-50 sm:py-24">
//           <div className="px-4 mx-auto text-center max-w-7xl sm:px-6 lg:px-8">
//             <h2 className="text-3xl font-bold sm:text-4xl">Benefits</h2>
//             <p className="mt-4 max-w-2xl mx-auto text-lg text-[var(--text-light)]">
//               Why MySANmarg is the right choice for both users and service providers.
//             </p>
//             <div className="grid grid-cols-1 gap-8 mt-12 md:grid-cols-3 md:gap-12">
//               <InfoCard icon={Zap} title="Fast Rescue" text="Quick access to verified mechanics and fuel services nearby." />
//               <InfoCard icon={Lightbulb} title="Employment Growth" text="Provides job opportunities for rural youth with training & certification." />
//               <InfoCard icon={ShieldCheck} title="Secure Payments" text="Cashless transactions ensure safety and transparency for everyone." />
//             </div>
//           </div>
//         </section>

//         {/* Technology */}
//         <section id="technology" className="py-16 sm:py-24">
//           <div className="px-4 mx-auto text-center max-w-7xl sm:px-6 lg:px-8">
//             <h2 className="text-3xl font-bold sm:text-4xl">Technology</h2>
//             <p className="mt-4 max-w-2xl mx-auto text-lg text-[var(--text-light)]">
//               Powering the platform with cutting-edge technologies for reliability and scalability.
//             </p>
//             <div className="grid grid-cols-1 gap-8 mt-12 md:grid-cols-3 md:gap-12">
//               <InfoCard icon={Cpu} title="Next.js + Firebase" text="A fast, secure, and scalable foundation for our web platform." />
//               <InfoCard icon={MapPin} title="Maps & Location" text="Real-time tracking and geolocation for accurate assistance." />
//               <InfoCard icon={Lightbulb} title="AI & Automation" text="Smart matching between users and the best available providers." />
//             </div>
//           </div>
//         </section>
//       </main>

//       {/* Footer */}
//       <footer className="bg-[var(--secondary-color)]">
//         <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 text-center text-sm text-[var(--text-light)]">
//           © 2024 MySANmarg. All rights reserved.
//         </div>
//       </footer>
//     </div>
//   );
// }




"use client";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useTranslation } from "react-i18next";
import { Lightbulb, MapPin, Users, ShieldCheck, Cpu, Zap } from "lucide-react";
import "../i18n"; // ✅ Ensure this file configures i18n

export default function Home() {
  const router = useRouter();
  const { t, i18n } = useTranslation("common");

  // ✅ Default to English when page loads
  useEffect(() => {
    const savedLang = localStorage.getItem("appLanguage");
    if (savedLang) {
      i18n.changeLanguage(savedLang);
    } else {
      i18n.changeLanguage("en");
    }
  }, [i18n]);

  const handleLangChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const lang = e.target.value;
    i18n.changeLanguage(lang);
    localStorage.setItem("appLanguage", lang);
  };

  // ✅ Info card component
  const InfoCard = ({ icon: Icon, title, text }: { icon: any; title: string; text: string }) => (
    <div className="flex flex-col items-center gap-4 p-8 text-center transition-transform duration-300 border border-blue-200 shadow-lg bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl hover:scale-105 hover:shadow-2xl">
      <div className="flex items-center justify-center w-16 h-16 text-white rounded-full shadow-md bg-gradient-to-r from-blue-500 to-blue-700">
        <Icon size={28} />
      </div>
      <h3 className="text-xl font-bold text-blue-900">{title}</h3>
      <p className="text-blue-700">{text}</p>
    </div>
  );

  return (
    <div className="relative flex min-h-screen flex-col bg-[var(--background-color)] text-[var(--text-dark)]">
      {/* Header */}
      <header className="sticky top-0 z-50 flex items-center justify-between border-b border-[#e7edf4] bg-white/80 px-4 py-3 shadow-sm backdrop-blur-md sm:px-6 lg:px-10">
        <div className="flex items-center gap-3">
          <img src="/logo3.png" alt="MySANmarg Logo" className="object-contain w-20 h-20" />
          <div className="flex flex-col">
            <h1
              className="text-3xl font-extrabold tracking-tight drop-shadow-sm"
              style={{
                fontFamily: "'Playfair Display', serif",
                WebkitTextStroke: "0.5px rgba(0,0,0,0.5)",
                WebkitTextFillColor: "transparent",
              }}
            >
              <span className="bg-clip-text bg-gradient-to-r from-green-700 to-green-400">My</span>
              <span className="mx-1 bg-clip-text bg-gradient-to-r from-yellow-500 to-yellow-300">SAN</span>
              <span className="bg-clip-text bg-gradient-to-r from-red-700 to-rose-500">marg</span>
            </h1>
            <p className="text-[11px] md:text-xs font-medium text-black">{t("siteTagline")}</p>
          </div>
        </div>

        {/* Navigation */}
        <nav className="items-center hidden gap-6 md:flex">
          <a href="#how-it-works" className="text-sm font-medium text-[var(--text-light)] hover:text-[var(--primary-color)]">
            {t("howItWorks")}
          </a>
          <a href="#benefits" className="text-sm font-medium text-[var(--text-light)] hover:text-[var(--primary-color)]">
            {t("benefits")}
          </a>
          <a href="#technology" className="text-sm font-medium text-[var(--text-light)] hover:text-[var(--primary-color)]">
            {t("technology")}
          </a>
        </nav>

        {/* Buttons + Language Dropdown */}
        <div className="flex items-center gap-2">
          <select
            value={i18n.language}
            onChange={handleLangChange}
            className="px-2 py-1 text-sm border rounded-md"
          >
            <option value="en">English</option>
            <option value="hi">हिंदी</option>
            <option value="mr">मराठी</option>
          </select>
          <button onClick={() => router.push("/login")} className="h-10 px-4 font-bold rounded-md secondary-button">
            {t("login")}
          </button>
          <button onClick={() => router.push("/sign-up")} className="h-10 px-4 font-bold rounded-md primary-button">
            {t("signUp")}
          </button>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative">
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="relative px-4 py-24 mx-auto max-w-7xl sm:px-6 lg:px-8 lg:py-32">
            <div
              className="flex min-h-[480px] flex-col items-center justify-center gap-8 rounded-xl bg-cover bg-center bg-no-repeat p-8 text-center text-white"
              style={{
                backgroundImage:
                  'linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.5)), url("https://lh3.googleusercontent.com/aida-public/AB6AXuAiZKH9aGtdlb01PEppKASpUiFVgx8VC7nMQddulBJimwkWVqC18BcCqCy5WFKTTA59SUDrLADKdGO0RW18hhglbEd0U_J2_jgiUQELJtG2ypbOw1-nysEDxwkTV233xrwzeU5Y5m_5C8HBw6JR4HRSN3dQ9Grrhuj3wAXP7lCCwrVubzp6VflMMYpcxA6nh1VDuUbZG_M4JZXzuCtJEsNLzvlH_zV6G3jvMO1q6dVqcZOPb-HRzDyt1xYhjrV_9LPLcmWsNbHL13M")',
              }}
            >
              <h1 className="text-4xl font-black md:text-6xl">{t("heroTitle")}</h1>
              <p className="max-w-3xl text-lg font-light">{t("heroText")}</p>
              <div className="flex flex-wrap justify-center gap-4 mt-4">
                <button onClick={() => router.push("/sign-up")} className="h-12 px-6 font-bold rounded-md primary-button">
                  {t("getStarted")}
                </button>
                <button
                  onClick={() => router.push("/learnmore")}
                  className="h-12 px-6 font-bold text-white rounded-md bg-white/20 backdrop-blur-sm hover:bg-white/30"
                >
                  {t("learnMore")}
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section id="how-it-works" className="py-16 sm:py-24">
          <div className="px-4 mx-auto text-center max-w-7xl sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold sm:text-4xl">{t("howItWorks")}</h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-[var(--text-light)]">{t("howItWorksText")}</p>
            <div className="grid grid-cols-1 gap-8 mt-12 md:grid-cols-3 md:gap-12">
              <InfoCard icon={MapPin} title={t("step1Title")} text={t("step1Text")} />
              <InfoCard icon={Users} title={t("step2Title")} text={t("step2Text")} />
              <InfoCard icon={ShieldCheck} title={t("step3Title")} text={t("step3Text")} />
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section id="benefits" className="py-16 bg-gray-50 sm:py-24">
          <div className="px-4 mx-auto text-center max-w-7xl sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold sm:text-4xl">{t("benefits")}</h2>
            <div className="grid grid-cols-1 gap-8 mt-12 md:grid-cols-3 md:gap-12">
              <InfoCard icon={Zap} title={t("fastRescue")} text={t("fastRescueText") || ""} />
              <InfoCard icon={Lightbulb} title={t("employmentGrowth")} text={t("employmentGrowthText") || ""} />
              <InfoCard icon={ShieldCheck} title={t("securePayments")} text={t("securePaymentsText") || ""} />
            </div>
          </div>
        </section>

        {/* Technology */}
        <section id="technology" className="py-16 sm:py-24">
          <div className="px-4 mx-auto text-center max-w-7xl sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold sm:text-4xl">{t("technology")}</h2>
            <div className="grid grid-cols-1 gap-8 mt-12 md:grid-cols-3 md:gap-12">
              <InfoCard icon={Cpu} title={t("nextFirebase")} text={t("nextFirebaseText") || ""} />
              <InfoCard icon={MapPin} title={t("mapsLocation")} text={t("mapsLocationText") || ""} />
              <InfoCard icon={Lightbulb} title={t("aiAutomation")} text={t("aiAutomationText") || ""} />
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[var(--secondary-color)]">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 text-center text-sm text-[var(--text-light)]">
          © 2024 MySANmarg. All rights reserved.
        </div>
      </footer>
    </div>
  );
}.0