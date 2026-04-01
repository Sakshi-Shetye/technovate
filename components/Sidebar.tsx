// "use client";

// import Link from "next/link";

// const Sidebar = () => {
//   const links = [
//     { name: "Dashboard", href: "/user" },
//     { name: "Request Service", href: "/user/request" },
//     { name: "Track Service", href: "/user/track" },
//     { name: "History", href: "/user/history" },
//     { name: "Profile", href: "/user/profile" },
//   ];

//   return (
//     <aside className="hidden w-64 p-4 bg-white shadow-md md:block">
//       <ul className="flex flex-col gap-3">
//         {links.map((link) => (
//           <li key={link.href}>
//             <Link
//               href={link.href}
//               className="block p-2 transition rounded hover:bg-blue-100"
//             >
//               {link.name}
//             </Link>
//           </li>
//         ))}
//       </ul>
//     </aside>
//   );
// };

// export default Sidebar;
