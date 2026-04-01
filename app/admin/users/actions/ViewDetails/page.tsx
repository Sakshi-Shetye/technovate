// "use client";

// import React from "react";

// interface User {
//   id: string;
//   name: string;
//   contact: string;
//   location?: string;
//   requests?: number;
//   status?: string;
// }

// interface Props {
//   user: User;
// }

// export default function ViewDetails({ user }: Props) {
//   return (
//     <div className="p-4">
//       <h2 className="mb-2 text-lg font-bold">User Details</h2>
//       <p><strong>ID:</strong> {user.id}</p>
//       <p><strong>Name:</strong> {user.name}</p>
//       <p><strong>Contact:</strong> {user.contact}</p>
//       <p><strong>Location:</strong> {user.location || "N/A"}</p>
//       <p><strong>Requests:</strong> {user.requests ?? 0}</p>
//       <p><strong>Status:</strong> {user.status || "N/A"}</p>
//     </div>
//   );
// }




// "use client";

// import { useSearchParams } from "next/navigation";
// import { User } from "../../types";

// const users: User[] = [
//   { id: "10001", name: "Ramesh Patil", contact: "9867-112233", location: "Ratnagiri", requests: 8, status: "Active" },
//   { id: "10002", name: "Sunita Deshmukh", contact: "sunita.d@mail.com", location: "Chiplun", requests: 5, status: "Active" },
//   { id: "10003", name: "Mahesh Sawant", contact: "9850-445566", location: "Sindhudurg", requests: 3, status: "Active" },
// ];

// export default function ViewDetailsPage() {
//   const searchParams = useSearchParams();
//   const id = searchParams.get("id");
//   const user = users.find((u) => u.id === id);

//   if (!user) return <div className="p-4 text-red-500">User not found</div>;

//   return (
//     <div className="p-6">
//       <h2 className="text-lg font-semibold">Details for {user.name}</h2>
//       <p><strong>ID:</strong> {user.id}</p>
//       <p><strong>Contact:</strong> {user.contact}</p>
//       <p><strong>Location:</strong> {user.location}</p>
//       <p><strong>Status:</strong> {user.status}</p>
//       <p><strong>Requests:</strong> {user.requests}</p>
//     </div>
//   );
// }

"use client";

import { useSearchParams } from "next/navigation";
import Header from "@/components/Header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/admin/ui/card";
import { User } from "../../types";
import Link from "next/link";

const users: User[] = [
  { id: "10001", name: "Ramesh Patil", contact: "9867-112233", location: "Ratnagiri", requests: 8, status: "Active" },
  { id: "10002", name: "Sunita Deshmukh", contact: "sunita.d@mail.com", location: "Chiplun", requests: 5, status: "Active" },
  { id: "10003", name: "Mahesh Sawant", contact: "9850-445566", location: "Sindhudurg", requests: 3, status: "Active" },
];

export default function ViewDetailsPage() {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  const user = users.find((u) => u.id === id);

  if (!user) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <div className="p-6 font-medium text-center text-red-500">❌ User not found</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <Header />

      {/* Details */}
      <div className="max-w-3xl p-6 mx-auto">
        <Card className="border border-gray-200 shadow-lg rounded-2xl">
          <CardHeader className="pb-2">
            <CardTitle className="text-xl font-bold text-gray-800">
              👤 Details for {user.name}
            </CardTitle>
          </CardHeader>

          <CardContent className="space-y-4 text-gray-700">
            <p><span className="font-semibold">ID:</span> {user.id}</p>
            <p><span className="font-semibold">Contact:</span> {user.contact}</p>
            <p><span className="font-semibold">Location:</span> {user.location}</p>
            <p>
              <span className="font-semibold">Status:</span>
              <span
                className={`ml-2 px-2 py-1 rounded-md text-sm font-medium 
                ${user.status === "Active" ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`}
              >
                {user.status}
              </span>
            </p>
            <p><span className="font-semibold">Total Requests:</span> {user.requests}</p>
          </CardContent>
        </Card>

        {/* Action Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mt-6">
          <Link
            href={`/admin/users/actions/Edit?id=${user.id}`}
            className="px-4 py-2 font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700"
          >
            ✏️ Edit
          </Link>

          <Link
            href={`/admin/users/actions/DeleteUser?id=${user.id}`}
            className="px-4 py-2 font-medium text-white bg-red-600 rounded-lg hover:bg-red-700"
          >
            🗑️ Delete
          </Link>

          <Link
            href={`/admin/users/actions/BlockUnblock?action=block&id=${user.id}`}
            className="px-4 py-2 font-medium text-white bg-yellow-500 rounded-lg hover:bg-yellow-600"
          >
            🚫 Block
          </Link>

          <Link
            href={`/admin/users/actions/BlockUnblock?action=unblock&id=${user.id}`}
            className="px-4 py-2 font-medium text-white bg-green-600 rounded-lg hover:bg-green-700"
          >
            ✅ Unblock
          </Link>

          <Link
            href={`/admin/users/actions/ViewRequests?id=${user.id}`}
            className="px-4 py-2 font-medium text-white bg-indigo-600 rounded-lg hover:bg-indigo-700"
          >
            📋 View Requests
          </Link>
        </div>
      </div>
    </div>
  );
}
