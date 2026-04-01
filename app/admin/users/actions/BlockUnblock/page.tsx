"use client";

import { useSearchParams, useRouter } from "next/navigation";
import Header from "@/components/Header";
import Link from "next/link";
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
  CardTitle,
} from "@/components/admin/ui/card";
import type { User } from "../../types";

// Temporary static users — replace with your real data source
const users: User[] = [
  { id: "10001", name: "Ramesh Patil", contact: "9867-112233", location: "Ratnagiri", requests: 8, status: "Active" },
  { id: "10002", name: "Sunita Deshmukh", contact: "sunita.d@mail.com", location: "Chiplun", requests: 5, status: "Active" },
  { id: "10003", name: "Mahesh Sawant", contact: "9850-445566", location: "Sindhudurg", requests: 3, status: "Blocked" },
];

export default function BlockUnblockPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const id = searchParams.get("id");
  const user = users.find((u) => u.id === id);

  if (!id) {
    return (
      <div className="min-h-screen bg-sky-50 dark:bg-slate-900">
        <Header />
        <div className="p-6 font-semibold text-center text-red-600">
          ❌ Missing user id
        </div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="min-h-screen bg-sky-50 dark:bg-slate-900">
        <Header />
        <div className="p-6 font-semibold text-center text-gray-800 dark:text-gray-200">
          User not found
        </div>
      </div>
    );
  }

  const toggleBlock = () => {
    // 🔴 Replace this with your real block/unblock API
    const action = user.status === "Active" ? "Blocked" : "Active";
    console.log(`${action} user:`, user.id);
    router.push("/admin/users");
  };

  return (
    <div className="min-h-screen bg-sky-50">
      <Header />

      <div className="max-w-2xl p-6 mx-auto">
        <Card className="border border-gray-200 shadow-lg dark:border-gray-700 rounded-2xl">
          <CardHeader>
            <CardTitle className="text-xl font-bold text-gray-900 dark:text-gray-100">
              {user.status === "Active" ? "🚫 Block User" : "✅ Unblock User"}
            </CardTitle>
          </CardHeader>

          <CardContent className="space-y-4 text-gray-800 dark:text-gray-200">
            <p>
              Do you want to{" "}
              <strong className={user.status === "Active" ? "text-red-600" : "text-green-600"}>
                {user.status === "Active" ? "block" : "unblock"}
              </strong>{" "}
              <strong>{user.name}</strong>?
            </p>
            <div
              className={`p-3 text-sm border rounded-lg ${
                user.status === "Active"
                  ? "text-red-700 bg-red-50 border-red-200 dark:bg-red-900 dark:text-red-200 dark:border-red-700"
                  : "text-green-700 bg-green-50 border-green-200 dark:bg-green-900 dark:text-green-200 dark:border-green-700"
              }`}
            >
              {user.status === "Active"
                ? "⚠️ Warning: User will be blocked from accessing the platform."
                : "ℹ️ Info: User will regain access to the platform."}
            </div>
          </CardContent>

          <CardFooter className="flex justify-between">
            <Link
              href={`/admin/users/actions/ViewDetails?id=${user.id}`}
              className="px-4 py-2 text-gray-700 border border-gray-300 rounded-lg dark:text-gray-200 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              Cancel
            </Link>

            <button
              onClick={toggleBlock}
              className={`px-4 py-2 text-white rounded-lg ${
                user.status === "Active"
                  ? "bg-red-600 hover:bg-red-700"
                  : "bg-green-600 hover:bg-green-700"
              }`}
            >
              {user.status === "Active" ? "Block User" : "Unblock User"}
            </button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
