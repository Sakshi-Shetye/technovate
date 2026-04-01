// import BottomNav from "@/components/admin/BottomNav";
// import Link from "next/link";

// export default function MorePage() {
//   return (
//     <div className="p-6 space-y-4">
//       <h2 className="mb-4 text-lg font-bold">More Options</h2>

//       <div className="flex flex-col gap-3">
//         <Link
//           href="/admin/more/service-requests"
//           className="p-4 transition bg-white border border-gray-200 shadow-sm rounded-xl hover:bg-blue-50"
//         >
//           <p className="font-medium text-gray-900">Service Requests</p>
//           <p className="text-sm text-gray-600">View and manage all requests</p>
//         </Link>
//       </div>
//       <footer>
        
//       <BottomNav/>
//       </footer>
//     </div>
//   );
// }



// import BottomNav from "@/components/admin/BottomNav";
// import Link from "next/link";

// export default function MorePage() {
//   return (
//     <div className="p-6 pb-20 space-y-4">
//       <h2 className="mb-4 text-lg font-bold">More Options</h2>

//       <div className="flex flex-col gap-3">
//         {/* Service Requests */}
//         <Link
//           href="/admin/more/service-requests"
//           className="p-4 transition bg-white border border-gray-200 shadow-sm rounded-xl hover:bg-blue-50"
//         >
//           <p className="font-medium text-gray-900">Service Requests</p>
//           <p className="text-sm text-gray-600">View and manage all requests</p>
//         </Link>

//         {/* Payments */}
//         <Link
//           href="/admin/more/payments"
//           className="p-4 transition bg-white border border-gray-200 shadow-sm rounded-xl hover:bg-blue-50"
//         >
//           <p className="font-medium text-gray-900">Payments</p>
//           <p className="text-sm text-gray-600">Manage transactions, payouts, and billing</p>
//         </Link>

//         {/* Training */}
//         <Link
//           href="/admin/more/training"
//           className="p-4 transition bg-white border border-gray-200 shadow-sm rounded-xl hover:bg-blue-50"
//         >
//           <p className="font-medium text-gray-900">Training</p>
//           <p className="text-sm text-gray-600">Resources and certification for providers</p>
//         </Link>
//       </div>

//       <BottomNav />
//     </div>
//   );
// }




"use client";

import BottomNav from "@/components/admin/BottomNav";
import Header from "@/components/Header";
import Link from "next/link";

export default function MorePage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#EAF4FB]"> 
      {/* Header */}
      <Header/>
      <header className="sticky top-0 z-10 flex items-center justify-center px-4 py-3 bg-white border-b border-gray-200 shadow-sm">
        <h1 className="text-lg sm:text-xl font-bold text-[#0D141C]">More Options</h1>
      </header>

      {/* Main content */}
      <main className="flex-1 p-6 space-y-4">
        <h2 className="mb-4 text-lg font-semibold text-[#0D141C]">
          Manage Services & Operations
        </h2>

        <div className="flex flex-col gap-3">
          <Link
            href="/admin/service-request"
            className="p-4 transition rounded-xl border border-gray-200 shadow-sm bg-white hover:bg-[#2A6293] hover:text-white"
          >
            <p className="font-medium">Service Requests</p>
            <p className="text-sm opacity-80">
              View and manage breakdown or fuel requests across Konkan villages
            </p>
          </Link>

          <Link
            href="/admin/more/payments"
            className="p-4 transition rounded-xl border border-gray-200 shadow-sm bg-white hover:bg-[#2A6293] hover:text-white"
          >
            <p className="font-medium">Payments</p>
            <p className="text-sm opacity-80">
              Track transactions, rural payouts, and billing records
            </p>
          </Link>

          <Link
            href="/admin/more/training"
            className="p-4 transition rounded-xl border border-gray-200 shadow-sm bg-white hover:bg-[#2A6293] hover:text-white"
          >
            <p className="font-medium">Training</p>
            <p className="text-sm opacity-80">
              Resources and certification for rural service providers in Konkan
            </p>
          </Link>
        </div>
      </main>

      {/* Bottom navigation pinned */}
      <footer className="sticky bottom-0">
        <BottomNav />
      </footer>
    </div>
  );
}
