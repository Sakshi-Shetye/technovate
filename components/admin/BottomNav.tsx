// // components/admin/BottomNav.tsx
// "use client";

// import { Home, Users, UserCircle, ListChecks, MoreHorizontal } from "lucide-react";

// type BottomNavProps = {
//   activeTab: string;
//   setActiveTab: (tab: string) => void;
// };

// export default function BottomNav({ activeTab, setActiveTab }: BottomNavProps) {
//   const tabs = [
//     { id: "dashboard", label: "Dashboard", icon: <Home size={24} /> },
//     { id: "users", label: "Users", icon: <Users size={24} /> },
//     { id: "providers", label: "Providers", icon: <UserCircle size={24} /> },
//     { id: "requests", label: "Requests", icon: <ListChecks size={24} /> },
//     { id: "more", label: "More", icon: <MoreHorizontal size={24} /> },
//   ];

//   return (
//     <div className="sticky bottom-0">
//       <div className="flex justify-around border-t border-[#E2E8F0] bg-white py-2">
//         {tabs.map((tab) => (
//           <button
//             key={tab.id}
//             onClick={() => setActiveTab(tab.id)}
//             className={`flex flex-col items-center gap-1 ${
//               activeTab === tab.id ? "text-[#2B6CB0]" : "text-[#4A5568]"
//             }`}
//           >
//             {tab.icon}
//             <p className="text-xs font-medium">{tab.label}</p>
//           </button>
//         ))}
//       </div>
//     </div>
//   );
// }

// components/admin/BottomNav.tsx
"use client";

import { useRouter, usePathname } from "next/navigation";
import { Home, Users, UserCircle, ListChecks, MoreHorizontal } from "lucide-react";

export default function BottomNav() {
  const router = useRouter();
  const pathname = usePathname();

  const tabs = [
    { id: "dashboard", label: "Dashboard", icon: <Home size={24} />, path: "/admin" },
    { id: "users", label: "Users", icon: <Users size={24} />, path: "/admin/users" },
    { id: "providers", label: "Providers", icon: <UserCircle size={24} />, path: "/admin/providers" },
    // { id: "requests", label: "Requests", icon: <ListChecks size={24} />, path: "/admin/service-request" },
    { id: "more", label: "More", icon: <MoreHorizontal size={24} />, path: "/admin/more" },
  ];

  const handleNavigation = (path: string) => {
    router.push(path);
  };

  return (
    <div className="sticky bottom-0">
      <div className="flex justify-around border-t border-[#E2E8F0] bg-white py-2">
        {tabs.map((tab) => {
          const isActive = pathname === tab.path; // check active tab by URL
          return (
            <button
              key={tab.id}
              onClick={() => handleNavigation(tab.path)}
              className={`flex flex-col items-center gap-1 transition-colors ${
                isActive ? "text-[#2B6CB0]" : "text-[#4A5568]"
              }`}
            >
              {tab.icon}
              <p className="text-xs font-medium">{tab.label}</p>
            </button>
          );
        })}
      </div>
    </div>
  );
}
