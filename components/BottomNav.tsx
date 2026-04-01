// "use client";

// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import { Home, FileText, MapPin, Clock, MessageCircle } from "lucide-react";

// const navItems = [
//   { name: "Home", href: "/user", icon: Home },
//   { name: "Requests", href: "/user/requests", icon: FileText },
//   { name: "Track", href: "/user/track", icon: MapPin },
//   { name: "History", href: "/user/history", icon: Clock },
//   { name: "Feedback", href: "/user/feedback", icon: MessageCircle },
// ];

// export default function BottomNav() {
//   const pathname = usePathname();

//   return (
//     <nav className="fixed bottom-0 left-0 z-50 flex justify-around w-full py-2 bg-white border-t shadow-md">
//       {navItems.map((item) => {
//         const Icon = item.icon;
//         const active = pathname === item.href;

//         return (
//           <Link
//             key={item.name}
//             href={item.href}
//             className={`flex flex-col items-center text-xs ${
//               active ? "text-blue-600" : "text-gray-500"
//             }`}
//           >
//             <Icon className={`h-5 w-5 mb-1 ${active ? "stroke-blue-600" : ""}`} />
//             <span>{item.name}</span>
//           </Link>
//         );
//       })}
//     </nav>
//   );
// }

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, FileText, MapPin, Clock, MessageCircle } from "lucide-react";

const navItems = [
  { name: "Home", href: "/user", icon: Home },
  { name: "Requests", href: "/user/requests", icon: FileText },
  // { name: "Track", href: "/user/track", icon: MapPin },
  { name: "History", href: "/user/history", icon: Clock },
  { name: "Feedback", href: "/user/feedback", icon: MessageCircle },
];

export default function BottomNav() {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 border-t shadow-lg bg-white/90 backdrop-blur-md">
      <div className="flex items-center justify-around w-full">
        {navItems.map((item) => {
          const Icon = item.icon;
          const active = pathname === item.href;
          return (
            <Link
              key={item.name}
              href={item.href}
              className={`flex flex-col items-center justify-center flex-1 py-2 text-xs transition-colors ${
                active
                  ? "text-blue-600 font-semibold"
                  : "text-gray-500 hover:text-blue-600"
              }`}
            >
              <Icon
                className={`h-5 w-5 mb-1 transition-transform ${
                  active ? "scale-110" : "hover:scale-105"
                }`}
              />
              <span>{item.name}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
